import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NavSidebar from "@/components/NavSidebar";
import Dashboard from "@/pages/Dashboard";
import Historical from "@/pages/Historical";
import Recommendations from "@/pages/Recommendations";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex">
      <NavSidebar />
      <main className="flex-1 min-h-screen">
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/historical" component={Historical} />
          <Route path="/recommendations" component={Recommendations} />
          <Route component={NotFound} />
        </Switch>
      </main>
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
