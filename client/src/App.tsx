import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SiteShell from "./components/luma/SiteShell";
import Home from "./pages/Home";
import {
  About,
  Auth,
  Docs,
  Download,
  Features,
  Inspiration,
  Pricing,
} from "./pages/LumaPages";
import NotFound from "./pages/NotFound";
import Studio from "./pages/Studio";

function AppRouter() {
  return (
    <Switch>
      <Route path="/studio" component={Studio} />
      <SiteShell>
        <Switch>
        <Route path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/inspiration" component={Inspiration} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/download" component={Download} />
        <Route path="/docs" component={Docs} />
        <Route path="/about" component={About} />
        <Route path="/login"><Auth mode="login" /></Route>
        <Route path="/signup"><Auth mode="signup" /></Route>
        <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </SiteShell>
    </Switch>
  );
}

function Router() {
  return import.meta.env.VITE_LUMA_ELECTRON === "1" ? <WouterRouter hook={useHashLocation}><AppRouter /></WouterRouter> : <AppRouter />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export { Router };
