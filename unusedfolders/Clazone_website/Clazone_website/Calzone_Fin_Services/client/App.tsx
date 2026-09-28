import "./global.css";

import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Layout from "./components/Layout";
import Index from "./pages/Hero";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

// Consult an Expert Pages
import TalkToLawyer from "./pages/ConsultanExpert/TalkToLawyer";
import TalkToCA from "./pages/ConsultanExpert/TalkToCA";
import TalkToCS from "./pages/ConsultanExpert/TalkToCS";
import TalkToIP from "./pages/ConsultanExpert/TalkToIP";

// Business Setup Pages
import BusinessSetupplc from "./pages/BusinessSetup/plc";
import BusinessSetupllp from "./pages/BusinessSetup/LLPRegistration";
import OPCRegistrationPage from "./pages/BusinessSetup/OnePersonCompanyRegistration";
import SoleProprietorship from "./pages/BusinessSetup/SoleProprietorshipRegistration";
import NidhiCompanyRegistration from "./pages/BusinessSetup/NidhiCompanyRegistration";
import ProducerCompanyRegistration from "./pages/BusinessSetup/ProducerCompanyRegistration";
import PartnershipFirmRegistration from "./pages/BusinessSetup/PartnershipFirmRegistration";
import Services from "./pages/Services";
// International Business Setup
import USIncorporation from "./pages/International/USIncorporation";
import SingaporeIncorporation from "./pages/International/SingaporeIncorporation";
import UKIncorporation from "./pages/International/UKIncorporation";
import NetherlandsIncorporation from "./pages/International/NetherlandsIncorporation";
import HongKongCompany from "./pages/International/HongKongCompany";
import DubaiCompany from "./pages/International/DubaiCompany";
import InternationalTrademark from "./pages/International/InternationalTrademark";

// Licenses & Registrations
import DigitalSignatureCertificate from "./pages/Licenses/DigitalSignatureCertificate";
import UdyamMSME from "./pages/Licenses/UdyamMSME";
import ISOCertification from "./pages/Licenses/ISOCertification";
import FSSAI from "./pages/Licenses/FSSAI";
import IEC from "./pages/Licenses/IEC";
import BISRegistration from "./pages/Licenses/BISRegistration";
import LiquorLicense from "./pages/Licenses/LiquorLicense";

// Fundraising
import FundraisingOverview from "./pages/Fundraising/Fundraising";
import PitchDeck from "./pages/Fundraising/PitchDeck";
import BusinessLoan from "./pages/Fundraising/BusinessLoan";
import DPRService from "./pages/Fundraising/DPRService";

// NGO
import NGOOverview from "./pages/NGO/NGOOverview";
import Section8Company from "./pages/NGO/Section8Company";
import TrustRegistration from "./pages/NGO/TrustRegistration";
import SocietyRegistration from "./pages/NGO/SocietyRegistration";
import ComplianceOverview from "./pages/NGO/ComplianceOverview";
import Section8Compliance from "./pages/NGO/Section8Compliance";
import CSR1Filing from "./pages/NGO/CSR1Filing";
import Sec80G12A from "./pages/NGO/Sec80G12A";
import DarpanRegistration from "./pages/NGO/DarpanRegistration";
import FCRARegistration from "./pages/NGO/FCRARegistration";
import FAQ from "./pages/FAQ";
import Checkout from "./pages/Checkout";
import PlansPage from "./pages/Plans";
import GetStartedPage from "./pages/GetStarted";
import UserLogin from "./pages/UserLogin";
import MyRequests from "./pages/MyRequests";
import CartPage from "./pages/Cart";
import StartupIndiaRegistration from "./pages/BusinessSetup/StartupIndiaRegistration";
import MSME from "./pages/Licenses/MSME";
import SpiceBoard from "./pages/Licenses/SpiceBoard";
import ADCodeRegistration from "./pages/Licenses/ADCodeRegistration";
import CLRARegistration from "./pages/Licenses/CLRARegistration";
import DrugCosmeticLicense from "./pages/Licenses/DrugCosmeticLicense";
import FIEORegistration from "./pages/Licenses/FIEORegistration";
import HallmarkRegistration from "./pages/Licenses/HallmarkRegistration";
import IRDAIRegistration from "./pages/Licenses/IRDAIRegistration";
import LegalMetrologyRegistration from "./pages/Licenses/LegalMetrologyRegistration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout>
                <Admin />
              </Layout>
            }
          />
          <Route
            path="/ConsultanExpert/talkToLawyer"
            element={
              <Layout>
                <TalkToLawyer />
              </Layout>
            }
          />
          <Route
            path="/ConsultanExpert/talkToCA"
            element={
              <Layout>
                <TalkToCA />
              </Layout>
            }
          />
          <Route
            path="/ConsultanExpert/talkToCS"
            element={
              <Layout>
                <TalkToCS />
              </Layout>
            }
          />
          <Route
            path="/ConsultanExpert/talkToIP"
            element={
              <Layout>
                <TalkToIP />
              </Layout>
            }
          />
          <Route
            path="/BusinessSetup/plc"
            element={
              <Layout>
                <BusinessSetupplc />
              </Layout>
            }
          />
          <Route
            path="/BusinessSetup/llp"
            element={
              <Layout>
                <BusinessSetupllp />
              </Layout>
            }
          />
          <Route
            path="/BusinessSetup/opc"
            element={
              <Layout>
                <OPCRegistrationPage />
              </Layout>
            }
          />
          <Route
            path="/BusinessSetup/sp"
            element={
              <Layout>
                <SoleProprietorship />
              </Layout>
            }
          />
          <Route
            path="/BusinessSetup/nidhi"
            element={
              <Layout>
                <NidhiCompanyRegistration />
              </Layout>
            }
          />
          <Route
            path="/BusinessSetup/producer"
            element={
              <Layout>
                <ProducerCompanyRegistration />
              </Layout>
            }
          />
          <Route
            path="/BusinessSetup/partnership"
            element={
              <Layout>
                <PartnershipFirmRegistration />
              </Layout>
            }
          />
          <Route
            path="/BusinessSetup/startup"
            element={
              <Layout>
                <StartupIndiaRegistration />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />

          {/* International Business Setup */}
          <Route
            path="/International/us"
            element={
              <Layout>
                <USIncorporation />
              </Layout>
            }
          />
          <Route
            path="/International/singapore"
            element={
              <Layout>
                <SingaporeIncorporation />
              </Layout>
            }
          />
          <Route
            path="/International/uk"
            element={
              <Layout>
                <UKIncorporation />
              </Layout>
            }
          />
          <Route
            path="/International/netherlands"
            element={
              <Layout>
                <NetherlandsIncorporation />
              </Layout>
            }
          />
          <Route
            path="/International/hong-kong"
            element={
              <Layout>
                <HongKongCompany />
              </Layout>
            }
          />
          <Route
            path="/International/dubai"
            element={
              <Layout>
                <DubaiCompany />
              </Layout>
            }
          />
          <Route
            path="/International/international-trademark"
            element={
              <Layout>
                <InternationalTrademark />
              </Layout>
            }
          />

          {/* Licenses & Registrations */}
          <Route
            path="/Licenses/dsc"
            element={
              <Layout>
                <DigitalSignatureCertificate />
              </Layout>
            }
          />
          <Route
            path="/Licenses/udyam"
            element={
              <Layout>
                <UdyamMSME />
              </Layout>
            }
          />
          <Route
            path="/Licenses/MSME"
            element={
              <Layout>
                <MSME />
              </Layout>
            }
          />
          <Route
            path="/Licenses/spice-board"
            element={
              <Layout>
                <SpiceBoard />
              </Layout>
            }
          />
          <Route
            path="/Licenses/ad-code"
            element={
              <Layout>
                <ADCodeRegistration />
              </Layout>
            }
          />
          <Route
            path="/Licenses/clra"
            element={
              <Layout>
                <CLRARegistration />
              </Layout>
            }
          />
          <Route
            path="/Licenses/drug-cosmetic"
            element={
              <Layout>
                <DrugCosmeticLicense />
              </Layout>
            }
          />
          <Route
            path="/Licenses/fieo"
            element={
              <Layout>
                <FIEORegistration />
              </Layout>
            }
          />
          <Route
            path="/Licenses/hallmark"
            element={
              <Layout>
                <HallmarkRegistration />
              </Layout>
            }
          />
          <Route
            path="/Licenses/irdai"
            element={
              <Layout>
                <IRDAIRegistration />
              </Layout>
            }
          />
          <Route
            path="/Licenses/legal-metrology"
            element={
              <Layout>
                <LegalMetrologyRegistration />
              </Layout>
            }
          />
          <Route
            path="/Licenses/iso"
            element={
              <Layout>
                <ISOCertification />
              </Layout>
            }
          />
          <Route
            path="/Licenses/fssai"
            element={
              <Layout>
                <FSSAI />
              </Layout>
            }
          />
          <Route
            path="/Licenses/iec"
            element={
              <Layout>
                <IEC />
              </Layout>
            }
          />
          <Route
            path="/Licenses/bis"
            element={
              <Layout>
                <BISRegistration />
              </Layout>
            }
          />
          <Route
            path="/Licenses/liquor-license"
            element={
              <Layout>
                <LiquorLicense />
              </Layout>
            }
          />

          {/* Fundraising */}
          <Route
            path="/Fundraising"
            element={
              <Layout>
                <FundraisingOverview />
              </Layout>
            }
          />
          <Route
            path="/Fundraising/pitch-deck"
            element={
              <Layout>
                <PitchDeck />
              </Layout>
            }
          />
          <Route
            path="/Fundraising/business-loan"
            element={
              <Layout>
                <BusinessLoan />
              </Layout>
            }
          />
          <Route
            path="/Fundraising/dpr"
            element={
              <Layout>
                <DPRService />
              </Layout>
            }
          />

          {/* NGO Registration & Compliance */}
          <Route
            path="/NGO"
            element={
              <Layout>
                <NGOOverview />
              </Layout>
            }
          />
          <Route
            path="/NGO/section-8"
            element={
              <Layout>
                <Section8Company />
              </Layout>
            }
          />
          <Route
            path="/NGO/trust"
            element={
              <Layout>
                <TrustRegistration />
              </Layout>
            }
          />
          <Route
            path="/NGO/society"
            element={
              <Layout>
                <SocietyRegistration />
              </Layout>
            }
          />
          <Route
            path="/NGO/compliance"
            element={
              <Layout>
                <ComplianceOverview />
              </Layout>
            }
          />
          <Route
            path="/NGO/compliance-section-8"
            element={
              <Layout>
                <Section8Compliance />
              </Layout>
            }
          />
          <Route
            path="/NGO/csr1"
            element={
              <Layout>
                <CSR1Filing />
              </Layout>
            }
          />
          <Route
            path="/NGO/80g-12a"
            element={
              <Layout>
                <Sec80G12A />
              </Layout>
            }
          />
          <Route
            path="/NGO/darpan"
            element={
              <Layout>
                <DarpanRegistration />
              </Layout>
            }
          />
          <Route
            path="/NGO/fcra"
            element={
              <Layout>
                <FCRARegistration />
              </Layout>
            }
          />
          <Route
            path="/faq"
            element={
              <Layout>
                <FAQ />
              </Layout>
            }
          />
          <Route
            path="/checkout"
            element={
              <Layout>
                <Checkout />
              </Layout>
            }
          />
          <Route
            path="/plans/:service"
            element={
              <Layout>
                <PlansPage />
              </Layout>
            }
          />
          <Route
            path="/get-started/:service"
            element={
              <Layout>
                <GetStartedPage />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <UserLogin />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />
          <Route
            path="/my-requests"
            element={
              <Layout>
                <MyRequests />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
