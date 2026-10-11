from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json

ROOT = Path(__file__).resolve().parents[1]
PAGES = ['index.html', 'login.html', 'contact.html']

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag in ('a', 'link', 'script', 'img'):
            value = values.get('href') or values.get('src')
            if value: self.links.append(value)

for page in PAGES:
    data = (ROOT / page).read_text(encoding='utf-8')
    parser = Links()
    parser.feed(data)
    for link in parser.links:
        uri = urlsplit(link)
        if uri.scheme or uri.netloc or link.startswith(('mailto:', 'tel:', 'data:', '#', '//')):
            continue
        path = unquote(uri.path).lstrip('/')
        if path and not (ROOT / path).is_file() and not (ROOT / path).is_dir():
            raise SystemExit(f'{page}: missing local file {path}')
    print(f'OK: {page}, {len(parser.links)} linked resources checked')

login = (ROOT / 'login.html').read_text(encoding='utf-8')
assert 'Demo: Authenticated' not in login
assert '<input type="password"' not in login
assert 'not available' in login.lower()
manifest = json.loads((ROOT / 'manifest.webmanifest').read_text(encoding='utf-8'))
assert manifest['start_url'] == '/'
for icon in manifest['icons']:
    assert (ROOT / icon['src'].lstrip('/')).is_file()
assert (ROOT / 'sw.js').is_file()
print('PASS: links, demo-auth safety, and PWA file smoke tests')
