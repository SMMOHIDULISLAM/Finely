import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { Header, Footer, RouteEffects } from "./components/SiteLayout";
import AssistantWidget from "./components/AssistantWidget";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {
  ServicesPage,
  ServiceDetailPage,
} from "./pages/ServicePages";
import {
  AboutPage,
  ContactPage,
  PortalPage,
  PaymentsPage,
  MobilePage,
} from "./pages/SupportingPages";

export default function App() {
  return (
    <ErrorBoundary>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <RouteEffects />
      <Header />
      <main id="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/index.html" component={Home} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/services/:id" component={ServiceDetailPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/contact.html" component={ContactPage} />
          <Route path="/portal" component={PortalPage} />
          <Route path="/login.html" component={PortalPage} />
          <Route path="/mobile-app" component={MobilePage} />
          <Route path="/mobile-app.html" component={MobilePage} />
          <Route path="/payments" component={PaymentsPage} />
          <Route path="/payments.html" component={PaymentsPage} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <AssistantWidget />
    </ErrorBoundary>
  );
}
