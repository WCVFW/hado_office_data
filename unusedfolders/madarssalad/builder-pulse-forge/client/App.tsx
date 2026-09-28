import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";
import Index from "./pages/Index";
import Plans from "./pages/Plans";
import Products from "./pages/Products";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Subscriptions from "./pages/Subscriptions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import SaladScrollPage from "./components/SaladScrollPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <SubscriptionProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/products" element={<Products />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/salad" element={<SaladScrollPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SubscriptionProvider>
    </AuthProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;

// Check if root is already created to prevent warning in development
if (!(container as any)._reactRootContainer) {
  createRoot(container).render(<App />);
}
