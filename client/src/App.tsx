import { Route, Switch } from 'wouter';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NavSidebar from "@/components/NavSidebar";
import Header from "@/components/Header";
import Dashboard from "@/pages/Dashboard";
import Historical from "@/pages/Historical";
import Recommendations from "@/pages/Recommendations";
import GridSecurity from './pages/GridSecurity';
import GridMonitor from './pages/GridMonitor';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';
import RealTimeMetrics from './pages/RealTimeMetrics';
import SystemHealth from './pages/SystemHealth';
import EnergyFlow from './pages/EnergyFlow';
import { Suspense } from 'react';

// Loading component για καλύτερο UX
const PageLoader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

function Router() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <NavSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" component={Dashboard} />
              <Route path="/real-time" component={RealTimeMetrics} />
              <Route path="/system-health" component={SystemHealth} />
              <Route path="/energy-flow" component={EnergyFlow} />
              <Route path="/historical" component={Historical} />
              <Route path="/recommendations" component={Recommendations} />
              <Route path="/grid-security" component={GridSecurity} />
              <Route path="/grid-monitor" component={GridMonitor} />
              <Route path="/alerts" component={Alerts} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
