#!/usr/bin/env python3
"""Deploy dist/public to the existing Netlify site via the raw REST API."""
import hashlib, json, os, sys, time, urllib.request, urllib.parse

TOKEN = sys.argv[1]
SITE_ID = "c68e3e45-f6a9-418d-8ce5-c464e5e344f6"
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist", "public")
API = "https://api.netlify.com/api/v1"

def req(method, url, body=None, raw=False, ctype="application/json"):
    r = urllib.request.Request(url, method=method)
    r.add_header("Authorization", f"Bearer {TOKEN}")
    if body is not None:
        r.add_header("Content-Type", ctype)
        data = body if raw else json.dumps(body).encode()
    else:
        data = None
    try:
        with urllib.request.urlopen(r, data) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        print(f"HTTP {e.code} on {method} {url}: {e.read().decode()[:300]}")
        sys.exit(1)

# 1. manifest of files
files = {}
for dirpath, _, names in os.walk(ROOT):
    for name in names:
        full = os.path.join(dirpath, name)
        rel = os.path.relpath(full, ROOT).replace(os.sep, "/")
        with open(full, "rb") as f:
            files[rel] = hashlib.sha1(f.read()).hexdigest()
print(f"{len(files)} files in manifest")

# 2. create production deploy
deploy = req("POST", f"{API}/sites/{SITE_ID}/deploys", {"files": files, "draft": False})
did = deploy["id"]
required = deploy.get("required", list(files.keys()))
print(f"deploy {did}: {len(required)} files to upload, state={deploy.get('state')}")

# 3. upload required files
for i, rel in enumerate(required, 1):
    full = os.path.join(ROOT, rel)
    url = f"{API}/deploys/{did}/files/{urllib.parse.quote(rel)}"
    with open(full, "rb") as f:
        data = f.read()
    req("PUT", url, body=data, raw=True, ctype="application/octet-stream")
    if i % 5 == 0 or i == len(required):
        print(f"  uploaded {i}/{len(required)}")

# 4. wait for ready
for _ in range(60):
    d = req("GET", f"{API}/deploys/{did}")
    state = d.get("state")
    if state in ("ready", "current"):
        print(f"DEPLOY LIVE: {d.get('ssl_url') or d.get('url')} (state={state})")
        sys.exit(0)
    if state in ("error", "failed"):
        print(f"deploy failed: {d.get('error_message')}")
        sys.exit(1)
    time.sleep(3)
print("timeout waiting for deploy")
sys.exit(1)
