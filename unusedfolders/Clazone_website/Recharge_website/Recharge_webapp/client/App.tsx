import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx"; // Import Header correctly
import Index from "./pages/Index";
import MobileRecharge from "./pages/MobileRecharge";
import BusTickets from "./pages/BusTickets";
import TrainTickets from "./pages/TrainTickets";
import MiniATM from "./pages/MiniATM";
import EBBillPayment from "./pages/EBBillPayment";
import GovernmentServices from "./pages/GovernmentServices";
import BillPayment from "./pages/BillPayment";
import TransactionStatus from "./pages/TransactionStatus";
import BillValidation from "./pages/BillValidation";
import EmployeeManagement from "./pages/EmployeeManagement";
import CommissionManagement from "./pages/CommissionManagement";
import BillerManagement from "./pages/BillerManagement";
import AgentManagement from "./pages/AgentManagement";
import AdminPanel from "./pages/AdminPanel";
import ApiDocs from "./pages/ApiDocs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Header rendered once on top */}
        <Header />

        {/* Main page content */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mobile-recharge" element={<MobileRecharge />} />
          <Route path="/bus-tickets" element={<BusTickets />} />
          <Route path="/train-tickets" element={<TrainTickets />} />
          <Route path="/mini-atm" element={<MiniATM />} />
          <Route path="/eb-bill-payment" element={<EBBillPayment />} />
          <Route
            path="/government-services"
            element={<GovernmentServices />}
          />
          <Route path="/bill-payment" element={<BillPayment />} />
          <Route path="/transaction-status" element={<TransactionStatus />} />
          <Route path="/bill-validation" element={<BillValidation />} />
          <Route
            path="/employee-management"
            element={<EmployeeManagement />}
          />
          <Route
            path="/commission-management"
            element={<CommissionManagement />}
          />
          <Route path="/biller-management" element={<BillerManagement />} />
          <Route path="/agent-management" element={<AgentManagement />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/api-docs" element={<ApiDocs />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
