import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import all service pages
import FinanceAccountingFinOps from "./pages/services/accounts-services/finance-accounting-finops";
import LegalCorporateCompliance from "./pages/services/legal-corporate-compliance";
import HealthcareMedTechSupport from "./pages/services/HealthcareBPO/healthcare-service";
import ITSoftwareCloudCybersecurity from "./pages/services/it-software-cloud-cybersecurity";
import DataAIAnalyticsResearch from "./pages/services/Mortgage-Services/MortgageServices";
import MarketingSalesCreativeMedia from "./pages/services/marketing-sales-creative-media";
import CustomerExperienceCommunicationsTelephony from "./pages/services/SoftwareDevelopment/ITServices";
import OperationsProcurementSupplychainManufacturing from "./pages/services/operations-procurement-supplychain-manufacturing";
import RealEstateFacilitiesEnergyEnvironment from "./pages/services/real-estate-facilities-energy-environment";
import HRTrainingAdminSpecializedServices from "./pages/services/hr-training-admin-specialized-services";
import GlobalOutsourcingOffshoring from "./pages/services/global-outsourcing-offshoring";
import ResearchAnalysis from "./pages/services/import-export-services";


{/* services */ }
{/* finance-accounting-finops */ }
{/* Bookkeeping service */ }



import CorporateFinanceSupport from "./pages/services/import-export/financial_research/corporate_financial";
import AssetManagementSupport from "./pages/services/import-export/financial_research/assest_management_support";
import BusinessValuation from "./pages/services/import-export/financial_research/BusinessValuation";
import InvestmentResearch from "./pages/services/import-export/financial_research/InvestmentResearch";
import DtcEligibilityPage from "./pages/services/import-export/financial_research/DTCeligibilityfile";
import IFRSReportingServices from "./pages/services/import-export/financial_research/IFRSReportingServices";
import BuySideEquityResearch from "./pages/services/import-export/financial_research/BuySideEquityResearch";
import SellSideResearch from "./pages/services/import-export/financial_research/SellSideResearch";
import FixedIncomeResearch from "./pages/services/import-export/financial_research/FixedIncomeResearch";
import InvestmentBankingSupport from "./pages/services/import-export/financial_research/InvestmentBankingSupport";
import CreditResearchServices from "./pages/services/import-export/financial_research/CreditResearchServices";
import InvestmentMemorandumServices from "./pages/services/import-export/financial_research/InvestmentMemorandumServices";
import EquityResearchServices from "./pages/services/import-export/financial_research/EquityResearchServices";
import FinancialResearchAnalysisServices from "./pages/services/import-export/financial_research/FinancialResearchAnalysisServices";
import FinancialModelingServices from "./pages/services/import-export/financial_research/FinancialModelingServices";
import FinancialAdvisoryServices from "./pages/services/import-export/financial_research/FinancialAdvisoryServices";
import ForexMarketResearch from "./pages/services/import-export/financial_research/ForexMarketResearch";
import FinancialRiskAnalysis from "./pages/services/import-export/financial_research/FinancialRiskAnalysis";
import MarketBasketAnalysis from "./pages/services/import-export/market_research/MarketBasketAnalysis";
import GapAnalysis from "./pages/services/import-export/financial_research/GapAnalysis";
import FinancialFeasibilityAnalysis from "./pages/services/import-export/financial_research/FinancialFeasibilityAnalysis";
import CreditRiskModeling from "./pages/services/import-export/financial_research/CreditRiskModeling";
import PredictiveFinancialAnalytics from "./pages/services/import-export/financial_research/PredictiveFinancialAnalytics";
import IFRSValuationServicesPage from "./pages/services/import-export/financial_research/IFRSValuationServicesPage";
import QualitativeDataAnalysisPage from "./pages/services/import-export/financial_research/QualitativeDataAnalysisPage";
import CatiWebSurveys from "./pages/services/import-export/market_research/CatiWebSurveys";
import NewsAbstraction from "./pages/services/import-export/market_research/NewsAbstraction";
import MarketFeasibility from "./pages/services/import-export/market_research/MarketFeasibility";
import MarketSalesAnalysis from "./pages/services/import-export/market_research/MarketSalesAnalysis";
import DataAnalysisServices from "./pages/services/import-export/market_research/DataAnalysisServices";
import VerbatimCodingServices from "./pages/services/import-export/market_research/VerbatimCodingServices";
import HealthcareMarketResearch from "./pages/services/import-export/market_research/HealthcareMarketResearch";
import RealEstateMarketResearch from "./pages/services/import-export/market_research/RealEstateMarketResearch";
import RestaurantMarketResearch from "./pages/services/import-export/market_research/RestaurantMarketResearch";
import AgricultureMarketResearch from "./pages/services/import-export/market_research/AgricultureMarketResearch";
import MarketSizingResearch from "./pages/services/import-export/market_research/MarketSizingResearch";
import IndustryAnalysisServices from "./pages/services/import-export/market_research/IndustryAnalysisServices";
import OnlineMarketResearch from "./pages/services/import-export/market_research/OnlineMarketResearch";
import BrandResearchServices from "./pages/services/import-export/market_research/BrandResearchServices";
import CallCenterSurveys from "./pages/services/import-export/market_research/CallCenterSurveys";
import MarketResearchSurveys from "./pages/services/import-export/market_research/MarketResearchSurveys";
import MarketingQuestionnaireDesign from "./pages/services/import-export/market_research/MarketingQuestionnaireDesign";
import NewsletterServices from "./pages/services/import-export/market_research/NewsletterServices";
import SyndicatedMarketResearchServices from "./pages/services/import-export/market_research/SyndicatedMarketResearchServices";
import SwotAnalysisServices from "./pages/services/import-export/market_research/SwotAnalysisServices";
import FabricMarketResearch from "./pages/services/import-export/market_research/FabricMarketResearch";
import InsuranceMarketResearch from "./pages/services/import-export/market_research/InsuranceMarketResearch";
import SurveyProgrammingServices from "./pages/services/import-export/market_research/SurveyProgrammingServices";
import TimeSeriesAnalysisPage from "./pages/services/import-export/market_research/TimeSeriesAnalysisPage";
import ExploratoryDataAnalysis from "./pages/services/import-export/market_research/ExploratoryDataAnalysis";
import QuantitativeResearchPage from "./pages/services/import-export/market_research/QuantitativeResearchPage";
import MarketSegmentationPage from "./pages/services/import-export/market_research/MarketSegmentationPage";
import HealthcareMarketSegmentationPage from "./pages/services/import-export/market_research/HealthcareMarketSegmentationPage";
import PestelAnalysis from "./pages/services/import-export/market_research/PestelAnalysis";
import StatisticalAnalysis from "./pages/services/import-export/market_research/StatisticalAnalysis";
import ProductResearchServices from "./pages/services/import-export/market_research/ProductResearchServices";
import OpenEndCodingServices from "./pages/services/import-export/market_research/OpenEndCodingServices";
import AmazonProductResearchPage from "./pages/services/import-export/market_research/AmazonProductResearchPage";
import ConsumerMarketResearch from "./pages/services/import-export/market_research/ConsumerMarketResearch";
import CustomerSegmentation from "./pages/services/import-export/market_research/CustomerSegmentation";
import CompetitorBenchmarking from "./pages/services/import-export/business_research/CompetitorBenchmarking";
import BusinessBenchmarking from "./pages/services/import-export/business_research/BusinessBenchmarking";
import PrimarySecondaryResearch from "./pages/services/import-export/business_research/PrimarySecondaryResearch";
import CustomResearchReports from "./pages/services/import-export/business_research/CustomResearchReports";
import MediaResearchServices from "./pages/services/import-export/business_research/MediaResearchServices";
import BusinessMarketResearch from "./pages/services/import-export/business_research/BusinessMarketResearch";
import CompanyProfilingReports from "./pages/services/import-export/business_research/CompanyProfilingReports";
import BusinessDevelopment from "./pages/services/import-export/business_research/BusinessDevelopment";
import SocialMediaMonitoring from "./pages/services/import-export/business_research/SocialMediaMonitoring";
import PerceptualMappingPage from "./pages/services/import-export/business_research/PerceptualMappingPage";
import CompetitorAnalysisServices from "./pages/services/import-export/business_research/CompetitorAnalysisServices";
import IndustryProfilingServices from "./pages/services/import-export/business_research/IndustryProfilingServices";
import TrendAnalysisServices from "./pages/services/import-export/business_research/TrendAnalysisServices";
import CompetitiveBusinessAnalysis from "./pages/services/import-export/business_research/CompetitiveBusinessAnalysis";
import BusinessPlanWriting from "./pages/services/import-export/business_research/BusinessPlanWriting";
import BIDashboardVisualization from "./pages/services/import-export/business_research/BIDashboardVisualization";
import BenchmarkingServices from "./pages/services/import-export/business_research/BenchmarkingServices";
import PerformanceBenchmarking from "./pages/services/import-export/business_research/PerformanceBenchmarking";
import ITBenchmarkingPage from "./pages/services/import-export/business_research/ITBenchmarkingPage";
import HealthcareBenchmarking from "./pages/services/import-export/business_research/HealthcareBenchmarking";
import DataBenchmarkingPage from "./pages/services/import-export/business_research/DataBenchmarkingPage";
import CrossTabulationAnalysis from "./pages/services/import-export/business_research/CrossTabulationAnalysis";
import IntegratedBusinessPlanning from "./pages/services/import-export/business_research/IntegratedBusinessPlanning";
import BenchmarkingAnalyticsServices from "./pages/services/import-export/business_research/BenchmarkingAnalyticsServices";
import PropertyRiskManagement from "./pages/services/import-export/business_research/PropertyRiskManagement";
import ABMServicesPage from "./pages/services/import-export/business_research/ABMServicesPage";
import BusinessModelingPage from "./pages/services/import-export/business_research/BusinessModelingPage";
import IntellectualProperty from "./pages/services/import-export/pharmaceutial/IntellectualProperty";
import MarketForecast from "./pages/services/import-export/pharmaceutial/MarketForecast";
import CompetitiveIntelligencePage from "./pages/services/import-export/pharmaceutial/CompetitiveIntelligencePage";
import MedicalWritingServices from "./pages/services/import-export/pharmaceutial/MedicalWritingServices";
import KOLServices from "./pages/services/import-export/pharmaceutial/KOLServices";
import PatentLandscapeAnalysis from "./pages/services/import-export/pharmaceutial/PatentLandscapeAnalysis";
import MarketLandscapeAssessment from "./pages/services/import-export/pharmaceutial/MarketLandscapeAssessment";
import ImageAnalysisServices from "./pages/services/import-export/pharmaceutial/ImageAnalysisServices";
import CrystallographyServices from "./pages/services/import-export/scientific research/CrystallographyServices";
import LifeScienceInformatics from "./pages/services/import-export/scientific research/LifeScienceInformatics";
import StructuralBiologyServicesPage from "./pages/services/import-export/scientific research/StructuralBiologyServicesPage";
import ScientificDataMiningPage from "./pages/services/import-export/scientific research/ScientificDataMiningPage";
import MarketResearchReports from "./pages/services/import-export/research_report/MarketResearchReports";
import FinancialResearchReport from "./pages/services/import-export/research_report/FinancialResearchReport";
import MacroeconomicsReportsPage from "./pages/services/import-export/research_report/MacroeconomicsReportsPage";
import MicroeconomicsReports from "./pages/services/import-export/research_report/MicroeconomicsReports.";
import CommoditiesRealEstateReports from "./pages/services/import-export/research_report/CommoditiesRealEstateReports";
import MarketTrendsReports from "./pages/services/import-export/research_report/MarketTrendsReports";
import StructuredFinanceReports from "./pages/services/import-export/research_report/StructuredFinanceReports";
import ReportAutomationServices from "./pages/services/import-export/research_report/ReportAutomationServices";
import SyndicatedResearchReports from "./pages/services/import-export/research_report/SyndicatedResearchReports";
import FinancialAnalysisPage from "./pages/services/import-export/articles/FinancialAnalysisPage";
import B2BFinancialServicesTrends from "./pages/services/import-export/articles/B2BFinancialServicesTrends";
import ImageAnalysisBlog from "./pages/services/import-export/articles/ImageAnalysisBlog";
import PharmaTechAdvancements from "./pages/services/import-export/articles/PharmaTechAdvancements";
import CompetitiveAnalyticsBenchmarking from "./pages/services/import-export/articles/CompetitiveAnalyticsBenchmarking";
import BusinessResearchBI from "./pages/services/import-export/articles/BusinessResearchBI";
import BenchmarkingBlog from "./pages/services/import-export/articles/BenchmarkingBlog";
import BlogPage from "./pages/services/import-export/articles/BlogPage";
import OutsourcingResearch from "./pages/services/import-export/articles/OutsourcingResearch";
import ResearchGrowthDecade from "./pages/services/import-export/articles/ResearchGrowthDecade";
import OutsourcingIndiaResearch from "./pages/services/import-export/articles/OutsourcingIndiaResearch";
import ResearchOutsourcingCenter from "./pages/services/import-export/articles/ResearchOutsourcingCenter";
import IndiaResearchServices from "./pages/services/import-export/articles/IndiaResearchServices";
import ResearchProcessOutsourcing from "./pages/services/import-export/articles/ResearchProcessOutsourcing";
import KnowledgeProcessOutsourcing from "./pages/services/import-export/articles/KnowledgeProcessOutsourcing";
import LogisticRegressionAnalysis from "./pages/services/import-export/articles/LogisticRegressionAnalysis";
import ResearchServicesOutsourcing from "./pages/services/import-export/articles/ResearchServicesOutsourcing";
import ResearchServicesApprehensions from "./pages/services/import-export/articles/ResearchServicesApprehensions";
import WebBasedMarketResearch from "./pages/services/import-export/articles/WebBasedMarketResearch";
import DeskAndWebResearch from "./pages/services/import-export/articles/DeskAndWebResearch";
import IntelligentProcessAutomation from "./pages/services/Data science services/data engineering/IntelligentProcessAutomation";
import BigDataLakes from "./pages/services/Data science services/data engineering/BigDataLakes";
import HadoopDevelopment from "./pages/services/Data science services/data engineering/HadoopDevelopment";
import EnterpriseDataIntegration from "./pages/services/Data science services/data engineering/EnterpriseDataIntegration";
import BigDataInfrastructure from "./pages/services/Data science services/data engineering/BigDataInfrastructure";
import ClouderaSupport from "./pages/services/Data science services/data science/ClouderaSupport";
import DataScienceService from "./pages/services/Data science services/data science/DataScienceService";
import LeadScoringServices from "./pages/services/Data science services/data science/LeadScoringServices";
import RouteOptimization from "./pages/services/Data science services/data science/RouteOptimization";
import RecommenderSystem from "./pages/services/Data science services/data science/RecommenderSystem";
import VideoAnalyticsPage from "./pages/services/Data science services/data science/VideoAnalyticsPage";
import OffensiveImageVideoRecognition from "./pages/services/Data science services/data science/OffensiveImageVideoRecognition";
import ETLDataIntegration from "./pages/services/Data science services/data science/ETLDataIntegration";
import ClouderaDataScienceWorkbench from "./pages/services/Data science services/data science/ClouderaDataScienceWorkbench";
import BigDataManagement from "./pages/services/Data science services/data science/BigDataManagement";
import DataWrangling from "./pages/services/Data science services/data science/DataWrangling";
import DataAnalyticsAppDev from "./pages/services/Data science services/data science/DataAnalyticsAppDev";
import DataFabricServices from "./pages/services/Data science services/data science/DataFabricServices";
import DataStackModernization from "./pages/services/Data science services/data science/DataStackModernization";
import HyperautomationServices from "./pages/services/Data science services/data science/HyperautomationServices";
import PyTorchServices from "./pages/services/Data science services/data science/PyTorchServices";
import ConcurrentAuditServices from "./pages/services/Data science services/data science/ConcurrentAuditServices";
import BlockchainDevelopmentPage from "./pages/services/Data science services/data science/BlockchainDevelopmentPage";
import CustomerIntelligencePage from "./pages/services/Data science services/data science/CustomerIntelligencePage";
import CustomerJourneyMappingPage from "./pages/services/Data science services/data science/CustomerJourneyMappingPage";
import AIDigitalTransformation from "./pages/services/Data science services/data science consulting.tsx/AIDigitalTransformation";
import LocationIntelligence from "./pages/services/Data science services/data science consulting.tsx/LocationIntelligence";
import AIServicesTable from "./pages/services/Data science services/Artificial intelligence services.tsx/AIServicesTable";
import DocumentClassificationPage from "./pages/services/Data science services/Artificial intelligence services.tsx/DocumentClassificationPage";
import CognitiveAutomationPage from "./pages/services/Data science services/Artificial intelligence services.tsx/CognitiveAutomationPage";
import RpaServices from "./pages/services/Data science services/Artificial intelligence services.tsx/RpaServices";
import ComputerVisionServices from "./pages/services/Data science services/Artificial intelligence services.tsx/ComputerVisionServices";
import NlpServices from "./pages/services/Data science services/Artificial intelligence services.tsx/NlpServices";
import MachineLearningServices from "./pages/services/Data science services/Artificial intelligence services.tsx/MachineLearningServices";
import SpeechRecognitionServices from "./pages/services/Data science services/Artificial intelligence services.tsx/SpeechRecognitionServices";
import MachineVisionServices from "./pages/services/Data science services/Artificial intelligence services.tsx/MachineVisionServices";
import NeuralNetworksServices from "./pages/services/Data science services/Artificial intelligence services.tsx/NeuralNetworksServices";
import AutomatedVisualInspection from "./pages/services/Data science services/Artificial intelligence services.tsx/AutomatedVisualInspection";
import AnomalyDetection from "./pages/services/Data science services/Artificial intelligence services.tsx/AnomalyDetection";
import ConversationalAI from "./pages/services/Data science services/Artificial intelligence services.tsx/ConversationalAI";
import AIConsulting from "./pages/services/Data science services/Artificial intelligence services.tsx/AIConsulting";
import DeepLearning from "./pages/services/Data science services/Artificial intelligence services.tsx/DeepLearning";
import FraudAnalytics from "./pages/services/Data science services/Artificial intelligence services.tsx/FraudAnalytics";
import HealthcareAI from "./pages/services/Data science services/Artificial intelligence services.tsx/HealthcareAI";
import AISupplyChain from "./pages/services/Data science services/Artificial intelligence services.tsx/AISupplyChain";
import AIManufacturing from "./pages/services/Data science services/Artificial intelligence services.tsx/AIManufacturing";
import CognitiveComputing from "./pages/services/Data science services/Artificial intelligence services.tsx/CognitiveComputing";
import BusinessIntelligencePage from "./pages/services/Data science services/Artificial intelligence services.tsx/business intelligence services";
import DataScienceTraining from "./pages/services/Data science services/DataScienceTrainin";
import BigDataAnalyticsPage from "./pages/services/Data science services/Dataanalystics/BigDataAnalyticsPage";
import DataModelingServicesPage from "./pages/services/Data science services/Dataanalystics/DataModelingServicesPage";
import DataIntelligenceServicesPage from "./pages/services/Data science services/Dataanalystics/DataIntelligenceServicesPage";
import AugmentedAnalytics from "./pages/services/Data science services/Dataanalystics/AugmentedAnalytics";
import StatisticalDataAnalysisPage from "./pages/services/Data science services/Dataanalystics/StatisticalDataAnalysisPage";
import ReverseEmailAppendingPage from "./pages/services/Data science services/Dataanalystics/ReverseEmailAppendingPage";
import EdgeAnalytics from "./pages/services/Data science services/Dataanalystics/EdgeAnalytics";
import DataTabulationAnalysis from "./pages/services/Data science services/Dataanalystics/DataTabulationAnalysis";
import DataResearchPage from "./pages/services/Data science services/Dataanalystics/DataResearchPage";
import PredictiveModelingPage from "./pages/services/Data science services/Dataanalystics/PredictiveModelingPage";
import AzureStreamAnalyticsPage from "./pages/services/Data science services/Dataanalystics/AzureStreamAnalyticsPage";
import RiskAnalyticsPage from "./pages/services/Data science services/Business analyst/RiskAnalyticsPage";
import VisualAnalyticsPage from "./pages/services/Data science services/Business analyst/VisualAnalyticsPage";
import SurveyAnalyticsPage from "./pages/services/Data science services/Business analyst/SurveyAnalyticsPage";
import ContactCenterAnalytics from "./pages/services/Data science services/Business analyst/ContactCenterAnalytics";
import TextAnalytics from "./pages/services/Data science services/Business analyst/TextAnalytics";
import FinancialAnalytics from "./pages/services/Data science services/Business analyst/FinancialAnalytics";
import PredictiveAnalytics from "./pages/services/Data science services/Business analyst/PredictiveAnalytics";
import SupplyChainAnalytics from "./pages/services/Data science services/Business analyst/SupplyChainAnalytics";
import CollectionsAnalytics from "./pages/services/Data science services/Business analyst/CollectionsAnalytics";
import RetailAnalytics from "./pages/services/Data science services/Business analyst/RetailAnalytics";
import BPMAnalytics from "./pages/services/Data science services/Business analyst/BPMAnalytics";
import OperationalAnalytics from "./pages/services/Data science services/Business analyst/OperationalAnalytics";
import PredictiveModeling from "./pages/services/Data science services/Articles/PredictiveModeling";
import DataLakes from "./pages/services/Data science services/Articles/DataLakes";
import DataEngineering from "./pages/services/Data science services/Articles/DataEngineering";
import DataEngineeringBusiness from "./pages/services/Data science services/Articles/DataEngineeringBusiness";
import DataEngineeringStrategies from "./pages/services/Data science services/Articles/DataEngineeringStrategies";
import OutsourcingDataScience from "./pages/services/Data science services/Articles/OutsourcingDataScience";
import AiVsDoctors from "./pages/services/Data science services/Articles/AiVsDoctors";
import RpaChatbots from "./pages/services/Data science services/Articles/RpaChatbots";
import CNNGuide from "./pages/services/Data science services/Articles/CNNGuide";
import BlockchainAnalytics from "./pages/services/Data science services/Articles/BlockchainAnalytics";
import AICustomerExperience from "./pages/services/Data science services/Articles/AICustomerExperience";
import AIBusinessGuide from "./pages/services/Data science services/Articles/AIBusinessGuide";
import InventoryRpaCaseStudy from "./pages/services/Data science services/casestudies/InventoryRpaCaseStudy";
import HealthcareRpaCaseStudy from "./pages/services/Data science services/casestudies/HealthcareChartExtractionCaseStudy";
import HealthcareChartExtractionCaseStudy from "./pages/services/Data science services/casestudies/HealthcareChartExtractionCaseStudy";
import LABankOnboardingCaseStudy from "./pages/services/Data science services/casestudies/LABankOnboardingCaseStudy";
import AutomotiveFirmCaseStudy from "./pages/services/Data science services/casestudies/AutomotiveFirmCaseStudy";
import HealthcarePortfolioCaseStudy from "./pages/services/Data science services/casestudies/HealthcarePortfolioCaseStudy";
import NoSQLtoSQLCaseStudy from "./pages/services/Data science services/casestudies/NoSQLtoSQLCaseStudy";
import HighValueTransactionsCaseStudy from "./pages/services/Data science services/casestudies/HighValueTransactionsCaseStudy";
import DocumentProcessingCaseStudy from "./pages/services/Data science services/casestudies/DocumentProcessingCaseStudy";
import OpenSourceAnalyticsWorkbenchCaseStudy from "./pages/services/Data science services/casestudies/OpenSourceAnalyticsWorkbenchCaseStudy";
import DataStorageProcessingInfrastructureCaseStudy from "./pages/services/Data science services/casestudies/DataStorageProcessingInfrastructureCaseStudy";
import MortgageLQICaseStudy from "./pages/services/Data science services/casestudies/MortgageLQICaseStudy";
import RouteOptimizationCaseStudy from "./pages/services/Data science services/casestudies/RouteOptimizationCaseStudy";
import LogisticsTelemetryCaseStudy from "./pages/services/Data science services/casestudies/LogisticsTelemetryCaseStudy";
import PhotoEditingServicesPage from "./pages/services/operations-procurement-supplychain-manufacturing";
import BackgroundRemoval from "./pages/services/Photo Editing/photo retouching/BackgroundRemoval";
import BatchPhotoEditing from "./pages/services/Photo Editing/photo retouching/BatchPhotoEditing";
import PhotoEnhancement from "./pages/services/Photo Editing/photo retouching/PhotoEnhancement";
import AlbumDesignServicesPage from "./pages/services/Photo Editing/photo retouching/AlbumDesignServicesPage";
import BulkPhotoEditing from "./pages/services/Photo Editing/photo retouching/BulkPhotoEditing";
import ProductPhotoEditing from "./pages/services/Photo Editing/clipping path/ProductPhotoEditing";
import HairMaskingServices from "./pages/services/Photo Editing/clipping path/HairMaskingServices";
import CarImageClipping from "./pages/services/Photo Editing/clipping path/CarImageClipping";
import GhostMannequinServices from "./pages/services/Photo Editing/clipping path/GhostMannequinServices";
import ImageMaskingServices from "./pages/services/Photo Editing/clipping path/ImageMaskingServices";
import RealEstateEnhancement from "./pages/services/Photo Editing/Real estate photo editing/RealEstateEnhancement";
import RealEstateHDR from "./pages/services/Photo Editing/Real estate photo editing/RealEstateHDR";
import PanoramaStitchingPage from "./pages/services/Photo Editing/Real estate photo editing/PanoramaStitchingPage";
import DigitalDeclutteringPage from "./pages/services/Photo Editing/Real estate photo editing/DigitalDeclutteringPage";
import AerialPhotoEditingPage from "./pages/services/Photo Editing/Real estate photo editing/AerialPhotoEditingPage";
import VirtualTourPage from "./pages/services/Photo Editing/Real estate photo editing/VirtualTourPage";
import FloorPlanConversion from "./pages/services/Photo Editing/Real estate photo editing/FloorPlanConversion";
import FocusStackingPage from "./pages/services/Photo Editing/Real estate photo editing/FocusStackingPage";
import TwilightPhotoEditingPage from "./pages/services/Photo Editing/Real estate photo editing/TwilightPhotoEditingPage";
import MatterportServicesPage from "./pages/services/Photo Editing/Real estate photo editing/MatterportServicesPage";
import WeddingPhotoCullingPage from "./pages/services/Photo Editing/Wedding photos entry/WeddingPhotoCullingPage";
import PhotoDensityCorrectionPage from "./pages/services/Photo Editing/Wedding photos entry/PhotoDensityCorrectionPage";
import JewelryRetouchingServices from "./pages/services/Photo Editing/jewelry photo editing/JewelryRetouchingServices";
import JewelryClippingServices from "./pages/services/Photo Editing/jewelry photo editing/JewelryClippingServices";
import EcommerceImageClipping from "./pages/services/Photo Editing/ecomerce photo editing/EcommerceImageClipping";
import SportsPhotoEditing from "./pages/services/Photo Editing/portrait retouching/SportsPhotoEditing";
import FashionPhotoEditing from "./pages/services/Photo Editing/portrait retouching/FashionPhotoEditing";
import PhotoRestorationPage from "./pages/services/Photo Editing/portrait retouching/PhotoRestorationPage";
import PhotoManipulationPage from "./pages/services/Photo Editing/portrait retouching/PhotoManipulationPage";
import HeadshotRetouchingPage from "./pages/services/Photo Editing/portrait retouching/HeadshotRetouchingPage";
import NewbornPhotoEditingPage from "./pages/services/Photo Editing/portrait retouching/NewbornPhotoEditingPage";
import LightroomEditingPage from "./pages/services/Photo Editing/portrait retouching/LightroomEditingPage";
import SchoolPhotoEditing from "./pages/services/Photo Editing/portrait retouching/SchoolPhotoEditing";
import ClothPatternTilingPage from "./pages/services/Photo Editing/portrait retouching/ClothPatternTilingPage";
import PhotoshopAdvancedRetouchingPage from "./pages/services/Photo Editing/photoshop/PhotoshopAdvancedRetouchingPage";
import PhotoRetouchingUK from "./pages/services/Photo Editing/Photo editing UK/PhotoRetouchingUK";
import RealEstateEditingUK from "./pages/services/Photo Editing/Photo editing UK/RealEstateEditingUK";
import ClippingPathUK from "./pages/services/Photo Editing/Photo editing UK/ClippingPathUK";
import PhotoRestorationUK from "./pages/services/Photo Editing/Photo editing UK/PhotoRestorationUK";
import PanoramaStitchingServicesUK from "./pages/services/Photo Editing/panorama/PanoramaStitchingServicesUK";
import FisheyePanoramaStitching from "./pages/services/Photo Editing/panorama/FisheyePanoramaStitching";
import PhotoEditingBenefits from "./pages/services/Photo Editing/Articles/PhotoEditingBenefits";
import PhotoRestorationProcess from "./pages/services/Photo Editing/Articles/PhotoRestorationProcess";
import VirtualRealityRealEstate from "./pages/services/Photo Editing/Articles/VirtualRealityRealEstate";
import PhotographyTrends2018 from "./pages/services/Photo Editing/Articles/PhotographyTrends2018";
import PhotographyTrends from "./pages/services/Photo Editing/Articles/PhotographyTrends";
import WeddingPhotography from "./pages/services/Photo Editing/Articles/WeddingPhotography";
import WeddingTrends2018 from "./pages/services/Photo Editing/Articles/WeddingTrends2018";
import InsanePhotographyTrends from "./pages/services/Photo Editing/Articles/InsanePhotographyTrends";
import OutsourcingPhotoEditing from "./pages/services/Photo Editing/Articles/OutsourcingPhotoEditing";
import RawImageConversion from "./pages/services/Photo Editing/Articles/RawImageConversion";
import LandscapePhotography from "./pages/services/Photo Editing/Articles/LandscapePhotography";
import ColorCalibration from "./pages/services/Photo Editing/Articles/ColorCalibration";
import PhotoEditingManagement from "./pages/services/Photo Editing/Articles/PhotoEditingManagement";
import VectorizationFAQ from "./pages/services/Photo Editing/Articles/VectorizationFAQ";
import PhotomontageServices from "./pages/services/Photo Editing/Articles/PhotomontageServices.";
import DigitalPhotographyServices from "./pages/services/Photo Editing/Articles/DigitalPhotographyServices";
import PanoramaServices from "./pages/services/Photo Editing/Articles/PanoramaServices";
import ManualVsAutoFocus from "./pages/services/Photo Editing/Articles/ManualVsAutoFocus";
import ParallaxEffectGuide from "./pages/services/Photo Editing/Articles/ParallaxEffectGuide";
import LensFiltersGuide from "./pages/services/Photo Editing/Articles/LensFiltersGuide";
import PhotoCompositing from "./pages/services/Photo Editing/Articles/PhotoCompositing";
import MobilePhotographyTips from "./pages/services/Photo Editing/Articles/MobilePhotographyTips";
import HDRBracketing from "./pages/services/Photo Editing/Articles/HDRBracketing";
import PhotoshopServices from "./pages/services/Photo Editing/Articles/PhotoshopServices";
import PhotographyVideographyCaseStudy from "./pages/services/Photo Editing/case studies/PhotographyVideographyCaseStudy";
import HairMaskingCaseStudy from "./pages/services/Photo Editing/case studies/HairMaskingCaseStudy";
import ImageClippingCaseStudy from "./pages/services/Photo Editing/case studies/ImageClippingCaseStudy";
import NZBikeClippingCaseStudy from "./pages/services/Photo Editing/case studies/NZBikeClippingCaseStudy";
import BangladeshiClientCaseStudy from "./pages/services/Photo Editing/case studies/BangladeshiClientCaseStudy";
import SouthKoreanPortraitRestoration from "./pages/services/Photo Editing/case studies/SouthKoreanPortraitRestoration";
import JewelryClippingRetouching from "./pages/services/Photo Editing/case studies/JewelryClippingRetouching";
import NorwegianHDRBlending from "./pages/services/Photo Editing/case studies/NorwegianHDRBlending";
import WisconsinInsuranceClipping from "./pages/services/Photo Editing/case studies/WisconsinInsuranceClipping";
import MinneapolisPhotoMasking from "./pages/services/Photo Editing/case studies/MinneapolisPhotoMasking";
import PanoramaStitchingCaseStudy from "./pages/services/Photo Editing/case studies/PanoramaStitchingCaseStudy";
import PortraitRestorationCaseStudy from "./pages/services/Photo Editing/case studies/PortraitRestorationCaseStudy";
import PanoramaStitchingUKCaseStudy from "./pages/services/Photo Editing/case studies/PanoramaStitchingUKCaseStudy";
import Global3DImageVideoCaseStudy from "./pages/services/Photo Editing/case studies/Global3DImageVideoCaseStudy";
import BabySwimmingDesignCaseStudy from "./pages/services/Photo Editing/case studies/BabySwimmingDesignCaseStudy";
import RealEstateDroneVideoCaseStudy from "./pages/services/Photo Editing/case studies/RealEstateDroneVideoCaseStudy";
import SwedishPhotographyCaseStudy from "./pages/services/Photo Editing/case studies/SwedishPhotographyCaseStudy";
import UKPhotoStudioCaseStudy from "./pages/services/Photo Editing/case studies/UKPhotoStudioCaseStudy";
import NorwayPhotoProcessingCaseStudy from "./pages/services/Photo Editing/case studies/NorwayPhotoProcessingCaseStudy";
import UKAutoTraderClippingCaseStudy from "./pages/services/Photo Editing/case studies/UKAutoTraderClippingCaseStudy";
import NorwayPhotoStitchingCaseStudy from "./pages/services/Photo Editing/case studies/NorwayPhotoStitchingCaseStudy";
import HdrImageEditingCaseStudy from "./pages/services/Photo Editing/case studies/HdrImageEditingCaseStudy";
import DroneVirtualTourCaseStudy from "./pages/services/Photo Editing/case studies/DroneVirtualTourCaseStudy";
import InsuranceEligibilityManagement from "./pages/services/Insurance BPO services/Services of insurance agencies/InsuranceEligibilityManagement";
import LossRunProcessing from "./pages/services/Insurance BPO services/Services of insurance agencies/LossRunProcessing";
import InsuranceQuoteSummary from "./pages/services/Insurance BPO services/Services of insurance agencies/InsuranceQuoteSummary";
import DocumentIndexingFiling from "./pages/services/Insurance BPO services/Services of insurance agencies/DocumentIndexingFiling";
import InsuranceAccountingBilling from "./pages/services/Insurance BPO services/Services of insurance agencies/InsuranceAccountingBilling";
import CertificateOfInsurance from "./pages/services/Insurance BPO services/Services of insurance agencies/CertificateOfInsurance";
import PolicyCheckingAdministration from "./pages/services/Insurance BPO services/Services of insurance agencies/PolicyCheckingAdministration";
import RenewalExposureSummary from "./pages/services/Insurance BPO services/Services of insurance agencies/RenewalExposureSummary";
import ClaimsAdministration from "./pages/services/Insurance BPO services/Services of insurance agencies/ClaimsAdministration";
import AgencyManagement from "./pages/services/Insurance BPO services/Services of insurance agencies/AgencyManagement";
import BookkeepingPage from "./pages/services/Insurance BPO services/Services of insurance agencies/BookkeepingPage";
import PublicPolicyEngagement from "./pages/services/Insurance BPO services/Services of insurance agencies/PublicPolicyEngagement";
import PolicyOwnerServices from "./pages/services/Insurance BPO services/Services of insurance agencies/PolicyOwnerServices";
import InsuranceCredentialingServices from "./pages/services/Insurance BPO services/Services of insurance agencies/InsuranceCredentialingServices";
import BackOfficeAutomation from "./pages/services/Insurance BPO services/Services of insurance agencies/BackOfficeAutomation";
import InsuranceUnderwriting from "./pages/services/Insurance BPO services/Services of insurance agencies/InsuranceUnderwriting";
import InsuranceBillingAR from "./pages/services/Insurance BPO services/Services of insurance carriers/InsuranceBillingAR";
import PolicyIssuancePage from "./pages/services/Insurance BPO services/Services of insurance carriers/PolicyIssuancePage";
import LifeClaimsManagementPage from "./pages/services/Insurance BPO services/Services of insurance carriers/LifeClaimsManagementPage";
import InsuranceClaimsPC from "./pages/services/Insurance BPO services/Services of insurance carriers/InsuranceClaimsPC";
import ACORDFormsProcessing from "./pages/services/Insurance BPO services/Services of insurance carriers/ACORDFormsProcessing";
import NewBusinessSetup from "./pages/services/Insurance BPO services/Services of insurance carriers/NewBusinessSetup";
import InsuranceRenewalsProcessing from "./pages/services/Insurance BPO services/Services of insurance carriers/InsuranceRenewalsProcessing";
import InsuranceClaimsManagement from "./pages/services/Insurance BPO services/Services of insurance carriers/InsuranceClaimsManagement";
import PolicyAdministration from "./pages/services/Insurance BPO services/Services of insurance carriers/PolicyAdministration";
import InsuranceServicesMGA from "./pages/services/Insurance BPO services/InsuranceServicesMGA";
import CAQHProfileServices from "./pages/services/Insurance BPO services/Insurance bank office support/CAQHProfileServices";
import InsuranceMarketResearches from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceMarketResearch";
import InsuranceAppointmentSetting from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceAppointmentSetting";
import CommissionManagement from "./pages/services/Insurance BPO services/Insurance bank office support/CommissionManagement";
import InsuranceDataEntry from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceDataEntry";
import InsuranceEndorsementsPage from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceEndorsementsPage";
import InsuranceBPOCustomerSupport from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceBPOCustomerSupport";
import InsuranceReporting from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceReporting";
import UnderwritingPCInsurancePage from "./pages/services/Insurance BPO services/Insurance bank office support/UnderwritingPCInsurancePage";
import LifeAnnuityUnderwriting from "./pages/services/Insurance BPO services/Insurance bank office support/LifeAnnuityUnderwriting";
import CatastropheModelingPage from "./pages/services/Insurance BPO services/Insurance bank office support/CatastropheModelingPage";
import WarrantyClaimsManagementPage from "./pages/services/Insurance BPO services/Insurance bank office support/WarrantyClaimsManagementPage";
import InsuranceBPMPage from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceBPMPage";
import InsuranceSoftwareDevelopment from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceSoftwareDevelopment";
import InsuranceAnalyticsServices from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceAnalyticsServices";
import QQCatalystManagement from "./pages/services/Insurance BPO services/Insurance bank office support/QQCatalystManagement";
import InsuranceOperationsServices from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceOperationsServices";
// import NimbleInsuranceServices from "./pages/services/Insurance BPO services/Articles/NimbleInsuranceServices";
import InsuranceClaimsArticle from "./pages/services/Insurance BPO services/Articles/InsuranceClaimsArticle";
import InsuranceDataAnalyticsArticle from "./pages/services/Insurance BPO services/Articles/InsuranceDataAnalyticsArticle";
import USDotEFilingArticle from "./pages/services/Insurance BPO services/Articles/USDotEFilingArticle";
import InsuranceCaseStudy from "./pages/services/Insurance BPO services/Case studies/InsuranceCaseStudy";
import TexasInsuranceCaseStudy from "./pages/services/Insurance BPO services/Case studies/TexasInsuranceCaseStudy";
import PolicyCheckingCaseStudy from "./pages/services/Insurance BPO services/Case studies/PolicyCheckingCaseStudy";
import BusinessProcessingCaseStudy from "./pages/services/Insurance BPO services/Case studies/BusinessProcessingCaseStudy";
import PolicyCheckingFloridaCaseStudy from "./pages/services/Insurance BPO services/Case studies/PolicyCheckingFloridaCaseStudy";
import PolicyCheckingNYCaseStudy from "./pages/services/Insurance BPO services/Case studies/PolicyCheckingNYCaseStudy";
import HealthInsuranceBackOfficeCaseStudy from "./pages/services/Insurance BPO services/Case studies/HealthInsuranceBackOfficeCaseStudy";
import MiamiInsuranceBackOfficeCaseStudy from "./pages/services/Insurance BPO services/Case studies/MiamiInsuranceBackOfficeCaseStudy";
import InsuranceAccountsCaseStudy from "./pages/services/Insurance BPO services/Case studies/InsuranceAccountsCaseStudy";
import DataAnnotationServices from "./pages/services/DataServices/Dataentry/DataAnnotationServices";
import DigitalAssetManagement from "./pages/services/DataServices/Dataentry/DigitalAssetManagement";
import RealEstateDataManagement from "./pages/services/DataServices/Dataentry/RealEstateDataManagement";
import EmailAppendingServices from "./pages/services/DataServices/Dataentry/EmailAppendingServices";
import OnlineDataEntryServices from "./pages/services/DataServices/Dataentry/OnlineDataEntryServices";
import OfflineDataEntryServices from "./pages/services/DataServices/Dataentry/OfflineDataEntryServices";
import DirectoryServices from "./pages/services/DataServices/Dataentry/DirectoryServices";
import RealEstateAppraisalDataEntry from "./pages/services/DataServices/Dataentry/RealEstateAppraisalDataEntry";
import GeotaggingDataEntry from "./pages/services/DataServices/Dataentry/GeotaggingDataEntry";
import BusinessCardDataEntry from "./pages/services/DataServices/Dataentry/BusinessCardDataEntry";
import FoodNutritionDataEntry from "./pages/services/DataServices/Dataentry/FoodNutritionDataEntry";
import ImageDataEntry from "./pages/services/DataServices/Dataentry/ImageDataEntry";
import EbookDataEntry from "./pages/services/DataServices/Dataentry/EbookDataEntry";
import DocumentDataEntry from "./pages/services/DataServices/Dataentry/DocumentDataEntry";
import DocumentImaging from "./pages/services/DataServices/Dataentry/DocumentImaging";
import DataExtractionServices from "./pages/services/DataServices/Dataentry/DataExtractionServices";
import DocumentManagementServices from "./pages/services/DataServices/Dataentry/DocumentManagementServices";
import EncyclopediaDataEntry from "./pages/services/DataServices/Dataentry/EncyclopediaDataEntry";
import CopyPasteServices from "./pages/services/DataServices/Dataentry/CopyPasteServices";
import OffshoreDataEntryServices from "./pages/services/DataServices/Dataentry/OffshoreDataEntryServices";
import CatalogDataEntryServices from "./pages/services/DataServices/Dataentry/CatalogDataEntryServices";
import MailingListDataEntry from "./pages/services/DataServices/Dataentry/MailingListDataEntry";
import CompanyReportsDataEntry from "./pages/services/DataServices/Dataentry/CompanyReportsDataEntry";
import QuestionnairesDataEntry from "./pages/services/DataServices/Dataentry/QuestionnairesDataEntry";
import SurveyDataEntry from "./pages/services/DataServices/Dataentry/SurveyDataEntry";
import InvoiceDataEntry from "./pages/services/DataServices/Dataentry/InvoiceDataEntry";
import InternetDataInput from "./pages/services/DataServices/Dataentry/InternetDataInput";
import DatabaseDataEntry from "./pages/services/DataServices/Dataentry/DatabaseDataEntry";
import RestaurantMenuDataEntry from "./pages/services/DataServices/Dataentry/RestaurantMenuDataEntry";
import ProductRegistrationDataEntry from "./pages/services/DataServices/Dataentry/ProductRegistrationDataEntry";
import InsuranceClaimsDataEntry from "./pages/services/DataServices/Dataentry/InsuranceClaimsDataEntry";
import EnrollmentFormsDataEntry from "./pages/services/DataServices/Dataentry/EnrollmentFormsDataEntry";
import TextNumericDataEntry from "./pages/services/DataServices/Dataentry/TextNumericDataEntry";
import ClassifiedsDataEntry from "./pages/services/DataServices/Dataentry/ClassifiedsDataEntry";
import LegalDocumentsDataEntry from "./pages/services/DataServices/Dataentry/LegalDocumentsDataEntry";
import HandwrittenDocumentsDataEntry from "./pages/services/DataServices/Dataentry/HandwrittenDocumentsDataEntry";
import MysqlDatabaseDataEntry from "./pages/services/DataServices/Dataentry/MysqlDatabaseDataEntry";
import TelephoneDirectoryDataEntry from "./pages/services/DataServices/Dataentry/TelephoneDirectoryDataEntry";
import WebsiteDataEntry from "./pages/services/DataServices/Dataentry/WebsiteDataEntry";
import TranslingualDataEntry from "./pages/services/DataServices/Dataentry/TranslingualDataEntry";
import MultilingualInvoiceDataEntry from "./pages/services/DataServices/Dataentry/MultilingualInvoiceDataEntry";
import BiologicalSpeciesDatabase from "./pages/services/DataServices/Dataentry/BiologicalSpeciesDatabase";
import QuickBooksDataEntry from "./pages/services/DataServices/Dataentry/QuickBooksDataEntry";
import CRMDataEntry from "./pages/services/DataServices/Dataentry/CRMDataEntry";
import DigitalTransactionProcessing from "./pages/services/DataServices/Dataentry/DigitalTransactionProcessing";
import SurveyFormsProcessing from "./pages/services/DataServices/Dataentry/SurveyFormsProcessing";
import CRMDatabaseManagement from "./pages/services/DataServices/Dataentry/CRMDatabaseManagement";
import ERPDataEntry from "./pages/services/DataServices/Dataentry/ERPDataEntry";
import SkuDataEntryPage from "./pages/services/DataServices/Dataentry/SkuDataEntryPage";
import DataLicensingPage from "./pages/services/DataServices/Dataentry/DataLicensingPage";
import HealthcareDataMining from "./pages/services/DataServices/Dataentry/HealthcareDataMining";
import RemoteDataEntry from "./pages/services/DataServices/Dataentry/RemoteDataEntry";
import AddressManagement from "./pages/services/DataServices/Dataentry/AddressManagement";
import CRMDataMining from "./pages/services/DataServices/Dataentry/CRMDataMining";
import BankingDataEntry from "./pages/services/DataServices/Dataentry/BankingDataEntry";
import ImageSearchServices from "./pages/services/DataServices/Dataentry/ImageSearchServices";
import TypingServices from "./pages/services/DataServices/Dataentry/TypingServices";
import MedicalImageAnnotation from "./pages/services/DataServices/Dataentry/MedicalImageAnnotation";
import DataIndexingServices from "./pages/services/DataServices/Dataentry/DataIndexingServices";
import BookIndexingServices from "./pages/services/DataServices/Dataentry/BookIndexingServices";
import DataValidationServices from "./pages/services/DataServices/Dataentry/DataValidationServices";
import DataMaskingServices from "./pages/services/DataServices/Dataentry/DataMaskingServices";
import DataProfilingServices from "./pages/services/DataServices/Dataentry/DataProfilingServices";
import DataLabelingServices from "./pages/services/DataServices/Dataentry/DataLabelingServices";
import DataAppendingServices from "./pages/services/DataServices/Dataentry/DataAppendingServices";
import DataEnrichmentServices from "./pages/services/DataServices/Dataentry/DataEnrichmentServices";
import JATSXMLConversionServices from "./pages/services/DataServices/Dataconversion/JATSXMLConversionServices";
import DocumentConversionServices from "./pages/services/DataServices/Dataconversion/DocumentConversionServices";
import FileConversionServices from "./pages/services/DataServices/Dataconversion/FileConversionServices";
import EPub3ConversionServices from "./pages/services/DataServices/Dataconversion/EPub3ConversionServices";
import XMLConversionServices from "./pages/services/DataServices/Dataconversion/XMLConversionServices";
import PDFConversionServices from "./pages/services/DataServices/Dataconversion/PDFConversionServices";
import BookConversionServices from "./pages/services/DataServices/Dataconversion/BookConversionServices";
import HTMLConversionServices from "./pages/services/DataServices/Dataconversion/HTMLConversionServices";
import SGMLConversionServices from "./pages/services/DataServices/Dataconversion/SGMLConversionServices";
import EDMServices from "./pages/services/DataServices/Dataconversion/EDMServices";
import DocumentFormattingServices from "./pages/services/DataServices/Dataconversion/DocumentFormattingServices";
import XBRLConversionServices from "./pages/services/DataServices/Dataconversion/XBRLConversionServices";
import PubMedConversion from "./pages/services/DataServices/Dataconversion/PubMedConversion";
import DTBookConversion from "./pages/services/DataServices/Dataconversion/DTBookConversion";
import PSDtoHTMLConversion from "./pages/services/DataServices/Dataconversion/PSDtoHTMLConversion";
import FigmaToHtmlConversion from "./pages/services/DataServices/Dataconversion/FigmaToHtmlConversion";
import HtmlToResponsiveConversion from "./pages/services/DataServices/Dataconversion/HtmlToResponsiveConversion";
import AdobeXDToHTML from "./pages/services/DataServices/Dataconversion/AdobeXDToHTML";
import HtmlToWordPressPage from "./pages/services/DataServices/Dataconversion/HtmlToWordPressPage";
import SketchHtmlServices from "./pages/services/DataServices/Dataconversion/SketchHtmlServices";
import ZeplinToHtml from "./pages/services/DataServices/Dataconversion/ZeplinToHtml";
import PdfAccessibility from "./pages/services/DataServices/Dataconversion/PdfAccessibility";
import NimbleInsuranceServices from "./pages/services/Insurance BPO services/Articles/NimbleInsuranceServices";
import EpubConversionPage from "./pages/services/DataServices/ebook conversion/EpubConversionPage";
import ePubServicesPage from "./pages/services/DataServices/ebook conversion/ePubServicesPage";
import EPubServicesPage from "./pages/services/DataServices/ebook conversion/ePubServicesPage";
import KindleConversionPage from "./pages/services/DataServices/ebook conversion/KindleConversionPage";
import IPadIPhoneConversionPage from "./pages/services/DataServices/ebook conversion/IPadIPhoneConversionPage";
import ComprehensiveDigitalServices from "./pages/services/DataServices/ebook conversion/ComprehensiveDigitalServices";
import ReflowableEbookServices from "./pages/services/DataServices/ebook conversion/ReflowableEbookServices";
import FixedLayoutPageContent from "./pages/services/DataServices/ebook conversion/FixedLayoutPageContent";
import MultilingualPageContent from "./pages/services/DataServices/ebook conversion/MultilingualPageContent";
import EnhancedEbookPage from "./pages/services/DataServices/ebook conversion/EnhancedEbookPage";
import WebAccessibleEbookPage from "./pages/services/DataServices/ebook conversion/WebAccessibleEbookPage";
import InteractiveEbookPage from "./pages/services/DataServices/ebook conversion/InteractiveEbookPage";
import DocBookXMLPage from "./pages/services/DataServices/ebook conversion/DocBookXMLPage";
import PropertyManagementPage from "./pages/services/DataServices/PropertyManagementPage";
import MetadataTaggingPage from "./pages/services/DataServices/Dataprocessing/MetadataTaggingPage";
import DataTransformationPage from "./pages/services/DataServices/Dataprocessing/DataTransformationPage";
import MasterDataManagementPage from "./pages/services/DataServices/Dataprocessing/MasterDataManagementPage";
import SemanticImageSegmentation from "./pages/services/DataServices/Dataprocessing/SemanticImageSegmentation";
import MetadataManagement from "./pages/services/DataServices/Dataprocessing/MetadataManagement";
import DataHarmonization from "./pages/services/DataServices/Dataprocessing/DataHarmonization";
import DataStandardization from "./pages/services/DataServices/Dataprocessing/DataStandardization";
import MergePurgeServices from "./pages/services/DataServices/Dataprocessing/MergePurgeServices";
import FormsProcessingServices from "./pages/services/DataServices/Dataprocessing/FormsProcessingServices";
import OrderProcessingServices from "./pages/services/DataServices/Dataprocessing/OrderProcessingServices";
import ImageProcessing from "./pages/services/DataServices/Dataprocessing/ImageProcessingDS";
import DataCleansing from "./pages/services/DataServices/Dataprocessing/DataCleansing";
import InsuranceClaimsProcessing from "./pages/services/DataServices/Dataprocessing/InsuranceClaimsProcessing";
import MarketResearchFormsProcessing from "./pages/services/DataServices/Dataprocessing/MarketResearchFormsProcessing";
import CheckProcessing from "./pages/services/DataServices/Dataprocessing/CheckProcessing";
import CreditCardProcessing from "./pages/services/DataServices/Dataprocessing/CreditCardProcessing";
import TransactionProcessing from "./pages/services/DataServices/Dataprocessing/TransactionProcessing";
import SurveyProcessing from "./pages/services/DataServices/Dataprocessing/SurveyProcessing";
import DataDeduplication from "./pages/services/DataServices/Dataprocessing/DataDeduplication";
import MailingListCompilation from "./pages/services/DataServices/Dataprocessing/MailingListCompilation";
import DatabaseCreationServices from "./pages/services/DataServices/Dataprocessing/DatabaseCreationServices";
import DataAbstractionServices from "./pages/services/DataServices/Dataprocessing/DataAbstractionServices";
import DataMiningServices from "./pages/services/DataServices/Dataprocessing/DataMiningServices";
import TextWebDataMining from "./pages/services/DataServices/Dataprocessing/TextWebDataMining";
import StudentLoanProcessing from "./pages/services/DataServices/Dataprocessing/StudentLoanProcessing";
import TaggingAnnotationServices from "./pages/services/DataServices/Dataprocessing/TaggingAnnotationServices";
import ImageAnnotationServices from "./pages/services/DataServices/Dataprocessing/ImageAnnotationServices";
import HumanGestureAnnotation from "./pages/services/DataServices/Dataprocessing/HumanGestureAnnotation";
import BoundingBoxServices from "./pages/services/DataServices/Dataprocessing/BoundingBoxServices";
import PurchaseOrderProcessing from "./pages/services/DataServices/Dataprocessing/PurchaseOrderProcessing";
import SKUDataManagement from "./pages/services/DataServices/Dataprocessing/SKUDataManagement";
import ProductInformationManagement from "./pages/services/DataServices/Dataprocessing/ProductInformationManagement";
import DataPreparationServices from "./pages/services/DataServices/Dataprocessing/DataPreparationServices";
import VideoAnnotationServices from "./pages/services/DataServices/Dataprocessing/VideoAnnotationServices";
import CrmDataCleansingServices from "./pages/services/DataServices/Dataprocessing/CrmDataCleansingServices";
import DataConsolidationServices from "./pages/services/DataServices/Dataprocessing/DataConsolidationServices";
import DataProvisioningServices from "./pages/services/DataServices/Dataprocessing/DataProvisioningServices";
import DataMonitoringServices from "./pages/services/DataServices/Dataprocessing/DataMonitoringServices";
import DataCollectionServices from "./pages/services/DataServices/Dataprocessing/DataCollectionServices";
import DataLifecycleManagementServices from "./pages/services/DataServices/Dataprocessing/DataLifecycleManagementServices";
import DMSServices from "./pages/services/DataServices/Dataprocessing/DMSServices";
import DataVerification from "./pages/services/DataServices/Dataprocessing/DataVerification";
import DataScrubbing from "./pages/services/DataServices/Dataprocessing/DataScrubbing";
import DocumentIndexing from "./pages/services/DataServices/Dataprocessing/DocumentIndexing";
import DocumentScanning from "./pages/services/DataServices/Dataprocessing/DocumentScanning";
import DPOPage from "./pages/services/DataServices/Datamanagement/DPOPage";
import RecordsManagementPage from "./pages/services/DataServices/Datamanagement/RecordsManagementPage";
import EcommerceTaxonomyPage from "./pages/services/DataServices/Datamanagement/EcommerceTaxonomyPage";
import CloudDataManagementPage from "./pages/services/DataServices/Datamanagement/CloudDataManagementPage";
import SportsDataTaggingServices from "./pages/services/DataServices/Datamanagement/SportsDataTaggingServices";
import SportsDataTagging from "./pages/services/DataServices/Datamanagement/SportsDataTaggingServices";
import DataFormattingServices from "./pages/services/DataServices/Datamanagement/DataFormattingServices";
import EcommerceProductDataClassification from "./pages/services/DataServices/Datamanagement/EcommerceProductDataClassification";
import MagentoDataEntryServices from "./pages/services/DataServices/Datamanagement/MagentoDataEntryServices";
import EcommerceDataCleansing from "./pages/services/DataServices/Datamanagement/EcommerceDataCleansing";
import DataProtectionConsulting from "./pages/services/DataServices/Datamanagement/DataProtectionConsulting";
import DataGovernanceServices from "./pages/services/DataServices/Datamanagement/DataGovernanceServices";
import DataVirtualizationServices from "./pages/services/DataServices/Datamanagement/DataVirtualizationServices";
import FinancialDataProcessingServices from "./pages/services/DataServices/Datamanagement/FinancialDataProcessingServices";
import DataQualityManagementServices from "./pages/services/DataServices/Datamanagement/DataQualityManagementServices";
import DataModernizationServices from "./pages/services/DataServices/Datamanagement/DataModernizationServices";
import PropertyPreservationDataEntry from "./pages/services/DataServices/Datamanagement/PropertyPreservationDataEntry";
import CatalogConversionServices from "./pages/services/DataServices/onlinecatalog/CatalogConversionServices";
import EcommerceDataEntryServices from "./pages/services/DataServices/onlinecatalog/EcommerceDataEntryServices";
import CatalogProcessingServices from "./pages/services/DataServices/onlinecatalog/CatalogProcessingServices";
import ProductCatalogMaintenance from "./pages/services/DataServices/onlinecatalog/ProductCatalogMaintenance";
import CatalogContentManagement from "./pages/services/DataServices/onlinecatalog/CatalogContentManagement";
import CatalogBuildingIndexing from "./pages/services/DataServices/onlinecatalog/CatalogBuildingIndexing";
import OCRCleanupServices from "./pages/services/DataServices/OCR/OCRCleanupServices";
import DocumentDigitizationServices from "./pages/services/DataServices/OCR/DocumentDigitizationServices";
import OCRConversionServices from "./pages/services/DataServices/OCR/OCRConversionServices";
import ManufacturingDataEntry from "./pages/services/DataServices/Industries/ManufacturingDataEntry";
import HealthcareDataEntry from "./pages/services/DataServices/Industries/HealthcareDataEntry";
import ArchitecturalDataEntry from "./pages/services/DataServices/Industries/ArchitecturalDataEntry";
import GamingDataEntry from "./pages/services/DataServices/Industries/GamingDataEntry";
import GovernmentDataEntry from "./pages/services/DataServices/Industries/GovernmentDataEntry";
import PublishingDataEntry from "./pages/services/DataServices/Industries/PublishingDataEntry";
import AccountingDataEntry from "./pages/services/DataServices/Industries/AccountingDataEntry";
import LegalDataEntry from "./pages/services/DataServices/Industries/LegalDataEntry";
import EducationalDataEntry from "./pages/services/DataServices/Industries/EducationalDataEntry";
import StudiosDataEntry from "./pages/services/DataServices/Industries/StudiosDataEntry";
import AciEManifestServices from "./pages/services/DataServices/Industries/AciEManifestServices";
import CustomsBrokerage from "./pages/services/DataServices/Articles/CustomsBrokerage";
import DataEntryBenefits from "./pages/services/DataServices/Articles/DataEntryBenefits";
import BigData2020 from "./pages/services/DataServices/Articles/BigData2020";
import DataManagementMisconceptions from "./pages/services/DataServices/Articles/DataManagementMisconceptions";
import OCRDataCapture from "./pages/services/DataServices/Articles/OCRDataCapture";
import BigDataAnalyticsCheatSheet from "./pages/services/DataServices/Articles/BigDataAnalyticsCheatSheet";
import DataMiningTechniques from "./pages/services/DataServices/Articles/DataMiningTechniques";
import InvestInDataAnalytics from "./pages/services/DataServices/Articles/InvestInDataAnalytics";
import ManualDataEntrySolutions from "./pages/services/DataServices/Articles/ManualDataEntrySolutions";
import TopDataExtractionTools from "./pages/services/DataServices/Articles/TopDataExtractionTools";
import ProductDataEntry from "./pages/services/DataServices/Articles/ProductDataEntry";
import CloudDataManagement from "./pages/services/DataServices/Articles/CloudDataManagement";
import DataMigrationBestPractices from "./pages/services/DataServices/Articles/DataMigrationBestPractices";
import BigDataTrends from "./pages/services/DataServices/Articles/BigDataTrends";
import RestaurantMenuDigitization from "./pages/services/DataServices/Articles/RestaurantMenuDigitization";
import FormCreationBenefits from "./pages/services/DataServices/Articles/FormCreationBenefits";
import DataAccuracy from "./pages/services/DataServices/Articles/DataAccuracy";
import DataEntryClerkPage from "./pages/services/DataServices/Articles/DataEntryClerkPage";
import DataEntryIndiaPage from "./pages/services/DataServices/Articles/DataEntryIndiaPage";
import BetterDataManagementPage from "./pages/services/DataServices/Articles/BetterDataManagementPage";
import DataEntryIndiaAdvantage from "./pages/services/DataServices/Articles/DataEntryIndiaAdvantage";
import DataEntryOutsourcing from "./pages/services/DataServices/Articles/DataEntryOutsourcing";
import DataQualitySolution from "./pages/services/DataServices/Articles/DataQualitySolution";
import InaccurateDataSolution from "./pages/services/DataServices/Articles/InaccurateDataSolution";
import SpreadsheetToExcel from "./pages/services/DataServices/Articles/SpreadsheetConversionPage";
import SpreadsheetConversionPage from "./pages/services/DataServices/Articles/SpreadsheetConversionPage";
import MicrofilmScanningPage from "./pages/services/DataServices/Articles/MicrofilmScanningPage";
import ExhibitionDesignServices from "./pages/services/creative-design/graphic-design/ExhibitionDesignServices";
import PowerPointDesignServices from "./pages/services/creative-design/graphic-design/PowerPointDesignServices";
import EmbroideryServices from "./pages/services/creative-design/graphic-design/EmbroideryServices";
import SignageDesignServices from "./pages/services/creative-design/graphic-design/SignageDesignServices";
import CorporateDesignServices from "./pages/services/creative-design/graphic-design/CorporateDesignServices";
import EmailDesignServices from "./pages/services/creative-design/graphic-design/EmailDesignServices";
import BrandDesignServices from "./pages/services/creative-design/graphic-design/BrandDesignServices";
import MenuDesign from "./pages/services/creative-design/graphic-design/MenuDesign";
import EcommerceDesignPage from "./pages/services/creative-design/graphic-design/EcommerceDesignPage";
import EcommerceDesign from "./pages/services/creative-design/graphic-design/EcommerceDesignPage";
import WebDesign from "./pages/services/creative-design/graphic-design/WebDesign";
import LabelDesign from "./pages/services/creative-design/graphic-design/LabelDesign";
import PromotionalMaterialDesign from "./pages/services/creative-design/graphic-design/PromotionalMaterialDesign";
import VisualDesignServices from "./pages/services/creative-design/graphic-design/VisualDesignServices";
import BusinessCardDesignServices from "./pages/services/creative-design/graphic-design/BusinessCardDesignServices";
import NewsletterDesignServices from "./pages/services/creative-design/graphic-design/NewsletterDesignServices";
import AnnualReportDesignServices from "./pages/services/creative-design/graphic-design/AnnualReportDesignServices";
import FlyerDesignServices from "./pages/services/creative-design/graphic-design/FlyerDesignServices";
import PackagingDesignServices from "./pages/services/creative-design/graphic-design/PackagingDesignServices";
import PackagingArtworkServices from "./pages/services/creative-design/graphic-design/PackagingArtworkServices";
import Product3DPackageDesign from "./pages/services/creative-design/graphic-design/Product3DPackageDesign";
import CoverDesignServices from "./pages/services/creative-design/graphic-design/CoverDesignServices";
import BannerDesignServices from "./pages/services/creative-design/graphic-design/BannerDesignServices";
import BrochureDesignServices from "./pages/services/creative-design/graphic-design/BrochureDesignServices";
import HoardingDesignServices from "./pages/services/creative-design/graphic-design/HoardingDesignServices";
import InteriorBrandingServices from "./pages/services/creative-design/graphic-design/InteriorBrandingServices";
import EditorialDesignServices from "./pages/services/creative-design/graphic-design/EditorialDesignServices";
import PosterDesignServices from "./pages/services/creative-design/graphic-design/PosterDesignServices";
import CatalogDesignServices from "./pages/services/creative-design/graphic-design/CatalogDesignServices";
import ToteBagDesignServices from "./pages/services/creative-design/graphic-design/ToteBagDesignServices";
import TattooDesignServices from "./pages/services/creative-design/graphic-design/TattooDesignServices";
import InfographicDesignServices from "./pages/services/creative-design/graphic-design/InfographicDesignServices";
import StationeryDesignServices from "./pages/services/creative-design/graphic-design/StationeryDesignServices";
import CarWrapDesignServices from "./pages/services/creative-design/graphic-design/CarWrapDesignServices";
import LetterheadDesignServices from "./pages/services/creative-design/graphic-design/LetterheadDesignServices";
import InvitationDesignServices from "./pages/services/creative-design/graphic-design/InvitationDesignServices";
import CalendarDesignServices from "./pages/services/creative-design/graphic-design/CalendarDesignServices";
import ApparelDesignServices from "./pages/services/creative-design/graphic-design/ApparelDesignServices";
import MerchandiseDesignServices from "./pages/services/creative-design/graphic-design/MerchandiseDesignServices";
import TradeShowBoothDesign from "./pages/services/creative-design/graphic-design/TradeShowBoothDesign";
import ThankYouCardDesign from "./pages/services/creative-design/graphic-design/ThankYouCardDesign";
import TShirtDesign from "./pages/services/creative-design/graphic-design/TShirtDesign";
import WordTemplateDesign from "./pages/services/creative-design/graphic-design/WordTemplateDesign";
import StickerDesign from "./pages/services/creative-design/graphic-design/StickerDesign";
import WhitePaperDesign from "./pages/services/creative-design/graphic-design/WhitePaperDesign";
import CampaignDesign from "./pages/services/creative-design/graphic-design/CampaignDesign";
import DesignThinking from "./pages/services/creative-design/graphic-design/DesignThinking";
import WebPageLayoutDesign from "./pages/services/creative-design/graphic-design/WebPageLayoutDesign";
import RealEstateBrochureDesign from "./pages/services/creative-design/graphic-design/RealEstateBrochureDesign";
import MarketingCollateralDesign from "./pages/services/creative-design/graphic-design/MarketingCollateralDesign";
import PresentationDesignServices from "./pages/services/creative-design/graphic-design/PresentationDesignServices";
import Logo3DDesignServices from "./pages/services/creative-design/Logo-design/Logo3DDesignServices";
import AnimatedLogoDesignServices from "./pages/services/creative-design/Logo-design/AnimatedLogoDesignServices";
import Logo2DDesignServices from "./pages/services/creative-design/Logo-design/Logo2DDesignServices";
import VectorArtworkServices from "./pages/services/creative-design/Logo-design/VectorArtworkServices";
import LogoCleanupServices from "./pages/services/creative-design/Logo-design/LogoCleanupServices";
import LayoutAndFormatting from "./pages/services/creative-design/Artwork/LayoutAndFormatting";
import MagazineDesign from "./pages/services/creative-design/Artwork/MagazineDesign";
import DesktopPublishing from "./pages/services/creative-design/Artwork/DesktopPublishing";
import BookLayout from "./pages/services/creative-design/Artwork/BookLayout";
import ImageOptimization from "./pages/services/creative-design/Artwork/ImageOptimization";
import ImageToVectorConversion from "./pages/services/creative-design/Artwork/ImageToVectorConversion";
import MagazineDigitization from "./pages/services/creative-design/Artwork/MagazineDigitization";
import Art2DServices from "./pages/services/creative-design/Artwork/Art2DServices";
import TypesettingServices from "./pages/services/creative-design/Prepress/TypesettingServices";
import PodcastEditing from "./pages/services/creative-design/Audio-editing/PodcastEditing";
import AudioConversion from "./pages/services/creative-design/Audio-editing/AudioConversion";
import AdJingleCreation from "./pages/services/creative-design/Audio-editing/AdJingleCreation";
import CorporateAudioEditing from "./pages/services/creative-design/Audio-editing/CorporateAudioEditing";
import RadioProgramEditing from "./pages/services/creative-design/Audio-editing/RadioProgramEditing";
import MusicEditingMixing from "./pages/services/creative-design/Audio-editing/MusicEditingMixing";
import AdvertisingDesignServices from "./pages/services/creative-design/Audio-editing/AdvertisingDesignServices";
import CharacterCreationServices from "./pages/services/creative-design/storyboard-creation/CharacterCreationServices";
import CharacterDesigningServices from "./pages/services/creative-design/storyboard-creation/CharacterDesigningServices";
import StoryboardAnimaticServices from "./pages/services/creative-design/storyboard-creation/StoryboardAnimaticServices";
import CartoonStoryboardServices from "./pages/services/creative-design/storyboard-creation/CartoonStoryboardServices";
import VideoGameStoryboardServices from "./pages/services/creative-design/storyboard-creation/VideoGameStoryboardServices";
import PhotomaticStoryboardServices from "./pages/services/creative-design/storyboard-creation/PhotomaticStoryboardServices";
import IllustrationStoryboardServices from "./pages/services/creative-design/storyboard-creation/IllustrationStoryboardServices";
import ELearningStoryboardServices from "./pages/services/creative-design/storyboard-creation/ELearningStoryboardServices";
import ThreeDSculptingServices from "./pages/services/creative-design/3D modeling/ThreeDSculptingServices";
import ThreeDGameModelingServices from "./pages/services/creative-design/3D modeling/ThreeDGameModelingServices";
import ThreeDTexturingServices from "./pages/services/creative-design/3D modeling/ThreeDTexturingServices";
import ThreeDEnvironmentServices from "./pages/services/creative-design/3D modeling/ThreeDEnvironmentServices";
import WeddingVideoEditing from "./pages/services/creative-design/creative-uk/WeddingVideoEditing";
import VideoEditingServicesUK from "./pages/services/creative-design/creative-uk/VideoEditingServicesUK";
import GraphicDesignServicesUK from "./pages/services/creative-design/creative-uk/GraphicDesignServicesUK";
import RealEstateVideoEditing from "./pages/services/creative-design/creative-uk/RealEstateVideoEditing";
import CorporateVideoEditing from "./pages/services/creative-design/video-editing/CorporateVideoEditing";
import EdiusServicesPage from "./pages/services/creative-design/video-editing/EdiusServicesPage";
import ExplainerVideoPage from "./pages/services/creative-design/video-editing/ExplainerVideoPage";
import FilmServicesPage from "./pages/services/creative-design/video-editing/FilmServicesPage";
import HolidayVideoEditing from "./pages/services/creative-design/video-editing/HolidayVideoEditing";
import MotionGraphicsPage from "./pages/services/creative-design/video-editing/MotionGraphicsPage";
import MP4VideoEditingPage from "./pages/services/creative-design/video-editing/MP4VideoEditingPage";
import RealEstateDroneVideoEditing from "./pages/services/creative-design/video-editing/RealEstateDroneVideoEditing";
import RealEstateVideoEditingPage from "./pages/services/creative-design/video-editing/RealEstateVideoEditingPage";
import Video360Page from "./pages/services/creative-design/video-editing/Video360Page";
import VideoCompositingPage from "./pages/services/creative-design/video-editing/VideoCompositingPage";
import YouTubeMonitoringPage from "./pages/services/creative-design/video-editing/YouTubeMonitoringPage";
import OutsourcingCreativeDesign from "./pages/services/creative-design/Articles/OutsourcingCreativeDesign";
import AnimationTips from "./pages/services/creative-design/Articles/AnimationTips";
import GraphicDesignTrends from "./pages/services/creative-design/Articles/GraphicDesignTrends";
import VideoEditingTips from "./pages/services/creative-design/Articles/VideoEditingTips";
import GraphicDesignResources from "./pages/services/creative-design/Articles/GraphicDesignResources";
import DroneVideoEditingTips from "./pages/services/creative-design/Articles/DroneVideoEditingTips";
import GraphicDesignPredictions2018 from "./pages/services/creative-design/Articles/GraphicDesignPredictions2018";
import VideographyTrends2018 from "./pages/services/creative-design/Articles/VideographyTrends2018";
import VideoEditingTools from "./pages/services/creative-design/Articles/VideoEditingTools";
import CreativeDesignSteps from "./pages/services/creative-design/Articles/CreativeDesignSteps";
import BrochurePrintingTips from "./pages/services/creative-design/Articles/BrochurePrintingTips";
import PrepressTips from "./pages/services/creative-design/Articles/PrepressTips";
import PrepressInfrastructure from "./pages/services/creative-design/Articles/PrepressInfrastructure";
import BusinessWriting from "./pages/services/creative-design/Articles/BusinessWriting";
import OutsourcingWriting from "./pages/services/creative-design/Articles/OutsourcingWriting";
import VirtualReality from "./pages/services/creative-design/Articles/VirtualReality";
import WritersInIndia from "./pages/services/creative-design/Articles/WritersInIndia";
import MagazineLayoutGuide from "./pages/services/creative-design/Articles/MagazineLayoutGuide";
import MagazineTips from "./pages/services/creative-design/Articles/MagazineTips";
import DigitalArtworkFormat from "./pages/services/creative-design/Articles/DigitalArtworkFormat";
import AdobeSuiteFAQs from "./pages/services/creative-design/Articles/AdobeSuiteFAQs";
import StoryboardingTips from "./pages/services/creative-design/Articles/StoryboardingTips";
import VideoEditingProficiency from "./pages/services/creative-design/Articles/VideoEditingProficiency";
import PersonalizingAIArtwork from "./pages/services/creative-design/Articles/PersonalizingAIArtwork";
import MovieEditingServices from "./pages/services/creative-design/video-editing/MovieEditingServices";
import YouTubeEditingServices from "./pages/services/creative-design/video-editing/YouTubeEditingServices";
import GoProVideoEditing from "./pages/services/creative-design/video-editing/GoProVideoEditing";
import VideoBrochureServices from "./pages/services/creative-design/video-editing/VideoBrochureServices";
import VideoSummaryServices from "./pages/services/creative-design/video-editing/VideoSummaryServices";
import OnlineVideoEditingServices from "./pages/services/creative-design/video-editing/OnlineVideoEditingServices";
import HomeVideoEditingServices from "./pages/services/creative-design/video-editing/HomeVideoEditingServices";
import SportsVideoEditingServices from "./pages/services/creative-design/video-editing/SportsVideoEditingServices";
import VideoCroppingServices from "./pages/services/creative-design/video-editing/VideoCroppingServices";
import VideoTrimmingServices from "./pages/services/creative-design/video-editing/VideoTrimmingServices";
import FilmReeditingServices from "./pages/services/creative-design/video-editing/FilmReeditingServices";
import VideoTaggingServices from "./pages/services/creative-design/video-editing/VideoTaggingServices";
import VideoStabilizingServices from "./pages/services/creative-design/video-editing/VideoStabilizingServices";
import TestimonialVideoEditing from "./pages/services/creative-design/video-editing/TestimonialVideoEditing";
import VRPostProduction from "./pages/services/creative-design/video-editing/VRPostProduction";
import ProductVideoEditing from "./pages/services/creative-design/video-editing/ProductVideoEditing";
import DroneVideoEditing from "./pages/services/creative-design/video-editing/DroneVideoEditing";
import VideoClippingServices from "./pages/services/creative-design/video-editing/VideoClippingServices";
import MedicalVideoEditingServices from "./pages/services/creative-design/video-editing/MedicalVideoEditingServices";
import InterviewVideoEditing from "./pages/services/creative-design/video-editing/InterviewVideoEditing";
import VlogVideoEditing from "./pages/services/creative-design/video-editing/VlogVideoEditing";
import PictureToVideoEditing from "./pages/services/creative-design/video-editing/PictureToVideoEditing";
import ExplainerVideoServices from "./pages/services/creative-design/video-editing/ExplainerVideoServices";
import SalesPitchVideoEditing from "./pages/services/creative-design/video-editing/SalesPitchVideoEditing";
import MedicalVideoProduction from "./pages/services/creative-design/video-editing/MedicalVideoProduction";
import VeterinaryIllustration from "./pages/services/creative-design/Illustration/VeterinaryIllustration";
import ProductIllustration from "./pages/services/creative-design/Illustration/ProductIllustration";
import ChildrensBookIllustration from "./pages/services/creative-design/Illustration/ChildrensBookIllustration";
import BookIllustrationServices from "./pages/services/creative-design/Illustration/BookIllustrationServices";
import ScientificIllustrationServices from "./pages/services/creative-design/Illustration/ScientificIllustrationServices";
import FashionIllustration from "./pages/services/creative-design/Illustration/FashionIllustration";
import SportsIllustration from "./pages/services/creative-design/Illustration/SportsIllustration";
import ArchitecturalIllustration from "./pages/services/creative-design/Illustration/ArchitecturalIllustration";
import ComicIllustration from "./pages/services/creative-design/Illustration/ComicIllustration";
import BrandIllustration from "./pages/services/creative-design/Illustration/BrandIllustration";
import StoryboardIllustration from "./pages/services/creative-design/Illustration/StoryboardIllustration";
import VectorIllustration from "./pages/services/creative-design/Illustration/VectorIllustration";
import PopArtIllustration from "./pages/services/creative-design/Illustration/PopArtIllustration";
import SurgicalIllustration from "./pages/services/creative-design/Illustration/SurgicalIllustration";
import DentalIllustration from "./pages/services/creative-design/Illustration/DentalIllustration";
import OphthalmologyIllustration from "./pages/services/creative-design/Illustration/OphthalmologyIllustration";
import ImageIllustrationServices from "./pages/services/creative-design/Illustration/ImageIllustrationServices";
import MascotDesignServices from "./pages/services/creative-design/Illustration/MascotDesignServices";
import EducationalIllustration from "./pages/services/creative-design/Illustration/EducationalIllustration";
import CharacterIllustration from "./pages/services/creative-design/Illustration/CharacterIllustration";
import InfographicsVideoPage from "./pages/services/creative-design/Illustration/InfographicsVideoPage";
import InsuranceIllustration from "./pages/services/creative-design/Illustration/InsuranceIllustration";
import Infographics2D from "./pages/services/creative-design/Illustration/Infographics2D";
import ComicIllustrationServices from "./pages/services/creative-design/Illustration/ComicIllustrationServices";
import PetIllustrationServices from "./pages/services/creative-design/Illustration/PetIllustrationServices";
import TextEditingProofreading from "./pages/services/creative-design/writing-services/TextEditingProofreading";
import ProofreadingServices from "./pages/services/creative-design/writing-services/ProofreadingServices";
import ContentEditingServices from "./pages/services/creative-design/writing-services/ContentEditingServices";
import ContentRewritingServices from "./pages/services/creative-design/writing-services/ContentRewritingServices";
import ContentWritingServices from "./pages/services/creative-design/writing-services/ContentWritingServices";
import SEOContentWritingServices from "./pages/services/creative-design/writing-services/SEOContentWritingServices";
import SummaryReviewWritingServices from "./pages/services/creative-design/writing-services/SummaryReviewWritingServices";
import ArticleWritingServices from "./pages/services/creative-design/writing-services/ArticleWritingServices";
import ProductDescriptionServices from "./pages/services/creative-design/writing-services/ProductDescriptionServices";
import BlogWritingServices from "./pages/services/creative-design/writing-services/BlogWritingServices";
import BusinessWritingServices from "./pages/services/creative-design/writing-services/BusinessWritingServices";
import AcademicWritingServices from "./pages/services/creative-design/writing-services/AcademicWritingServices";
import SpeechWritingServices from "./pages/services/creative-design/writing-services/SpeechWritingServices";
import MedicalWritingService from "./pages/services/creative-design/writing-services/MedicalWritingServices";
import LegalWritingServices from "./pages/services/creative-design/writing-services/LegalWritingServices";
import TravelWritingServices from "./pages/services/creative-design/writing-services/TravelWritingServices";
import TechnicalWritingServices from "./pages/services/creative-design/writing-services/TechnicalWritingServices";
import AbstractWritingServices from "./pages/services/creative-design/writing-services/AbstractWritingServices";
import WebsiteCopywritingServices from "./pages/services/creative-design/writing-services/WebsiteCopywritingServices";
import ScientificWritingServices from "./pages/services/creative-design/writing-services/ScientificWritingServices";
import ManuscriptEditingServices from "./pages/services/creative-design/Animation/ManuscriptEditingServices";
import ManuscriptEditingService from "./pages/services/creative-design/Animation/ManuscriptEditingServices";
import FeatureFilmAnimationServices from "./pages/services/creative-design/Animation/FeatureFilmAnimationServices";
import VisualEffectsServices from "./pages/services/creative-design/Animation/VisualEffectsServices";
import RotoscopingServices from "./pages/services/creative-design/Animation/RotoscopingServices";
import Animation2DServices from "./pages/services/creative-design/Animation/Animation2DServices";
import AnimaticsServices from "./pages/services/creative-design/Animation/AnimaticsServices";
import ThreeDAnimationServices from "./pages/services/creative-design/Animation/ThreeDAnimationServices";
import FlashAnimationServices from "./pages/services/creative-design/Animation/FlashAnimationServices";
import AnimationRenderingServices from "./pages/services/creative-design/Animation/AnimationRenderingServices";
import WhiteboardAnimationServices from "./pages/services/creative-design/Animation/WhiteboardAnimationServices";
import TVCommercialAnimationServices from "./pages/services/creative-design/Animation/TVCommercialAnimationServices";
import CharacterAnimationServices from "./pages/services/creative-design/Animation/CharacterAnimationServices";
import StopMotionAnimationServices from "./pages/services/creative-design/Animation/StopMotionAnimationServices";
import ProductAnimationServices from "./pages/services/creative-design/Animation/ProductAnimationServices";
import TitlingAnimationServices from "./pages/services/creative-design/Animation/TitlingAnimationServices";
import ArchitecturalAnimationServices from "./pages/services/creative-design/Animation/ArchitecturalAnimationServices";
import AnimatedFeatureFilms from "./pages/services/creative-design/Animation/AnimatedFeatureFilms";
import CutoutAnimation from "./pages/services/creative-design/Animation/CutoutAnimation";
import ForensicAnimation from "./pages/services/creative-design/Animation/ForensicAnimation";
import EngineeringAnimation from "./pages/services/creative-design/Animation/EngineeringAnimation";
import MusicVideoAnimation from "./pages/services/creative-design/Animation/MusicVideoAnimation";
import KineticTypography from "./pages/services/creative-design/Animation/KineticTypography";
import CartoonAnimation from "./pages/services/creative-design/Animation/CartoonAnimation";
import RotoPaintArt from "./pages/services/creative-design/Animation/RotoPaintArt";
import VFXWireRemoval from "./pages/services/creative-design/Animation/VFXWireRemoval";
import AnsweringServices800 from "./pages/services/Call-center-services/Inbound-call-center/AnsweringServices800";
import ImageProcessingDS from "./pages/services/DataServices/Dataprocessing/ImageProcessingDS";
import OrderTakingServices from "./pages/services/Call-center-services/Inbound-call-center/OrderTakingServices";
import RebateProcessing from "./pages/services/Call-center-services/Inbound-call-center/RebateProcessing";
import ClaimsProcessing from "./pages/services/Call-center-services/Inbound-call-center/ClaimsProcessing";
import ProductInformationRequest from "./pages/services/Call-center-services/Inbound-call-center/ProductInformationRequest";
import ProductRecallManagement from "./pages/services/Call-center-services/Inbound-call-center/ProductRecallManagement";
import IVRServices from "./pages/services/Call-center-services/Inbound-call-center/IVRServices";
import BillingQueryServices from "./pages/services/Call-center-services/Inbound-call-center/BillingQueryServices";
import ReservationBooking from "./pages/services/Call-center-services/Inbound-call-center/ReservationBooking";
import OmnichannelContactCenter from "./pages/services/Call-center-services/Inbound-call-center/OmnichannelContactCenter";
import InboundSales from "./pages/services/Call-center-services/Inbound-call-center/InboundSales";
import SalesManagement from "./pages/services/Call-center-services/Inbound-call-center/SalesManagement";
import ConsumerResponse from "./pages/services/Call-center-services/Inbound-call-center/ConsumerResponse";
import HotlineServices from "./pages/services/Call-center-services/Inbound-call-center/HotlineServices";
import EnquiryHandling from "./pages/services/Call-center-services/Inbound-call-center/EnquiryHandling";
import DatabaseDevelopment from "./pages/services/Call-center-services/Outbound-call-center/DatabaseDevelopment";
import DebtCollection from "./pages/services/Call-center-services/Outbound-call-center/DebtCollection";
import DisasterRecovery from "./pages/services/Call-center-services/Outbound-call-center/DisasterRecovery";
import DatabaseSellingServices from "./pages/services/Call-center-services/Outbound-call-center/DatabaseSellingServices";
import DirectMailFollowUpServices from "./pages/services/Call-center-services/Outbound-call-center/DirectMailFollowUpServices";
import CustomerFollowUpServices from "./pages/services/Call-center-services/Outbound-call-center/CustomerFollowUpServices";
import MarketIntelligenceServices from "./pages/services/Call-center-services/Outbound-call-center/MarketIntelligenceServices";
import CustomerSatisfactionSurvey from "./pages/services/Call-center-services/Outbound-call-center/CustomerSatisfactionSurvey";
import CustomerAcquisition from "./pages/services/Call-center-services/Outbound-call-center/CustomerAcquisition";
import CATIServices from "./pages/services/Call-center-services/Outbound-call-center/CATIServices";
import SubscriptionRenewalServices from "./pages/services/Call-center-services/Outbound-call-center/SubscriptionRenewalServices";
import CustomerLoyaltyManagement from "./pages/services/Call-center-services/Outbound-call-center/CustomerLoyaltyManagement";
import EmailListManagement from "./pages/services/Call-center-services/Outbound-call-center/EmailListManagement";
import CustomerRetention from "./pages/services/Call-center-services/Outbound-call-center/CustomerRetention";
import ProductPromotion from "./pages/services/Call-center-services/Outbound-call-center/ProductPromotion";
import UpsellingCrossSelling from "./pages/services/Call-center-services/Outbound-call-center/UpsellingCrossSelling";
import ColdCallingServices from "./pages/services/Call-center-services/Telemarketing/ColdCallingServices";
import RealEstateColdCalling from "./pages/services/Call-center-services/Telemarketing/RealEstateColdCalling";
import B2BColdCalling from "./pages/services/Call-center-services/Telemarketing/B2BColdCalling";
import B2CColdCalling from "./pages/services/Call-center-services/Telemarketing/B2CColdCalling";
import TeleprospectingServices from "./pages/services/Call-center-services/Telemarketing/TeleprospectingServices";
import ColdCanvassingServices from "./pages/services/Call-center-services/Telemarketing/ColdCanvassingServices";
import B2BTelesalesServices from "./pages/services/Call-center-services/Telemarketing/B2BTelesalesServices";
import InsuranceTelemarketingServices from "./pages/services/Call-center-services/Telemarketing/InsuranceTelemarketingServices";
import TelecomConsultingServices from "./pages/services/Call-center-services/Telemarketing/TelecomConsultingServices";
import B2BTelemarketingServices from "./pages/services/Call-center-services/Telemarketing/B2BTelemarketingServices";
import InsuranceTelemarketingPage from "./pages/services/Call-center-services/Telemarketing/InsuranceTelemarketingPage";
import TelesalesCustomerAcquisitionPage from "./pages/services/Call-center-services/Telemarketing/TelesalesCustomerAcquisitionPage";
import BFSILeadGeneration from "./pages/services/Call-center-services/Lead-generation/BFSILeadGeneration";
import B2CLeadGeneration from "./pages/services/Call-center-services/Lead-generation/B2CLeadGeneration";
import TelemarketingLeadGeneration from "./pages/services/Call-center-services/Lead-generation/TelemarketingLeadGeneration";
import TravelHospitalityLeadGen from "./pages/services/Call-center-services/Lead-generation/TravelHospitalityLeadGen";
import LogisticsLeadGen from "./pages/services/Call-center-services/Lead-generation/LogisticsLeadGen";
import LeadGenerationLogistics from "./pages/services/Call-center-services/Lead-generation/LogisticsLeadGen";
import LocalLeadGeneration from "./pages/services/Call-center-services/Lead-generation/LocalLeadGeneration";
import B2BLeadGeneration from "./pages/services/Call-center-services/Lead-generation/B2BLeadGeneration";
import LeadGenerationProcess from "./pages/services/Call-center-services/Lead-generation/LeadGenerationProcess";
import LeadGenerationIT from "./pages/services/Call-center-services/Lead-generation/LeadGenerationIT";
import LeadGenerationEducation from "./pages/services/Call-center-services/Lead-generation/LeadGenerationEducation";
import EcommerceLeadGen from "./pages/services/Call-center-services/Lead-generation/EcommerceLeadGen";
import StartupLeadGen from "./pages/services/Call-center-services/Lead-generation/StartupLeadGen";
import RealEstateLeadGeneration from "./pages/services/Call-center-services/Lead-generation/RealEstateLeadGeneration";
import MortgageLeadGeneration from "./pages/services/Call-center-services/Lead-generation/MortgageLeadGeneration";
import AppointmentSetting from "./pages/services/Call-center-services/Lead-generation/AppointmentSetting";
import OutboundLeadGen from "./pages/services/Call-center-services/Lead-generation/OutboundLeadGen";
import OutboundLeadGeneration from "./pages/services/Call-center-services/Lead-generation/OutboundLeadGen";
import B2BAppointmentSetting from "./pages/services/Call-center-services/Lead-generation/B2BAppointmentSetting";
import B2CAppointmentSetting from "./pages/services/Call-center-services/Lead-generation/B2CAppointmentSetting";
import LeadGenChemicalManufacturing from "./pages/services/Call-center-services/Lead-generation/LeadGenChemicalManufacturing";
import SoftLeadGeneration from "./pages/services/Call-center-services/Lead-generation/SoftLeadGeneration";
import LeadQualification from "./pages/services/Call-center-services/Lead-generation/LeadQualification";
import InsuranceLeadGeneration from "./pages/services/Call-center-services/Lead-generation/InsuranceLeadGeneration";
import HomeInsuranceLeadGen from "./pages/services/Call-center-services/Lead-generation/HomeInsuranceLeadGen";
import HealthInsuranceLeadGen from "./pages/services/Call-center-services/Lead-generation/HealthInsuranceLeadGen";
import TruckingInsuranceLeadGen from "./pages/services/Call-center-services/Lead-generation/TruckingInsuranceLeadGen";
import InsuranceAgentLeadGen from "./pages/services/Call-center-services/Lead-generation/InsuranceAgentLeadGen";
import CommercialInsuranceLeadGen from "./pages/services/Call-center-services/Lead-generation/CommercialInsuranceLeadGen";
import PetInsuranceLeadGen from "./pages/services/Call-center-services/Lead-generation/PetInsuranceLeadGen";
import LifeInsuranceLeadGen from "./pages/services/Call-center-services/Lead-generation/LifeInsuranceLeadGen";
import AutoInsuranceLeadGen from "./pages/services/Call-center-services/Lead-generation/AutoInsuranceLeadGen";
import CarInsuranceLeadGen from "./pages/services/Call-center-services/Lead-generation/CarInsuranceLeadGen";
import ReactivatingDormantClient from "./pages/services/Call-center-services/customer-support/ReactivatingDormantClient";
import ThirdPartyVerification from "./pages/services/Call-center-services/customer-support/ThirdPartyVerification";
import ClickToTalkSupport from "./pages/services/Call-center-services/customer-support/ClickToTalkSupport";
import TechnicalSupport from "./pages/services/Call-center-services/customer-support/TechnicalSupport";
import RemoteITSupport from "./pages/services/Call-center-services/customer-support/RemoteITSupport";
import TollFreeSupport from "./pages/services/Call-center-services/customer-support/TollFreeSupport";
import MultilingualCallCenter from "./pages/services/Call-center-services/customer-support/MultilingualCallCenter";
import RetailCustomerSupport from "./pages/services/Call-center-services/customer-support/RetailCustomerSupport";
import RetailBPOSupport from "./pages/services/Call-center-services/customer-support/RetailBPOSupport";
import OrderTrackingSupport from "./pages/services/Call-center-services/customer-support/OrderTrackingSupport";
import BusinessProcessReengineering from "./pages/services/Call-center-services/customer-support/BusinessProcessReengineering";
import ComplaintManagementServices from "./pages/services/Call-center-services/customer-support/ComplaintManagementServices";
import LoyaltyProgramManagement from "./pages/services/Call-center-services/customer-support/LoyaltyProgramManagement";
import EmailSupportServices from "./pages/services/Call-center-services/customer-support/EmailSupportServices";
import ChatSupportServices from "./pages/services/Call-center-services/customer-support/ChatSupportServices";
import SocialMediaCustomerService from "./pages/services/Call-center-services/customer-support/SocialMediaCustomerService";
import VideoChatCustomerService from "./pages/services/Call-center-services/customer-support/VideoChatCustomerService";
import MultiChannelContactCenter from "./pages/services/Call-center-services/customer-support/MultiChannelContactCenter";
import RailwayLogisticsBPO from "./pages/services/Call-center-services/customer-support/RailwayLogisticsBPO";
import CustomerInteraction from "./pages/services/Call-center-services/customer-support/CustomerInteraction";
import EcommerceSupport from "./pages/services/Call-center-services/customer-support/EcommerceSupport";
import SeminarRegistration from "./pages/services/Call-center-services/customer-support/SeminarRegistration";
import ConsumerProductSupport from "./pages/services/Call-center-services/customer-support/ConsumerProductSupport";
import DigitalAgentServices from "./pages/services/Call-center-services/customer-support/DigitalAgentServices";
import PreSalesSupport from "./pages/services/Call-center-services/customer-support/PreSalesSupport";
import AdminSupport from "./pages/services/Call-center-services/customer-support/AdminSupport";
import CSRServices from "./pages/services/Call-center-services/customer-support/CSRServices";
import DigitalSupportServices from "./pages/services/Call-center-services/customer-support/DigitalSupportServices";
import CXTransformationServices from "./pages/services/Call-center-services/customer-support/CXTransformationServices";
import BCPServices from "./pages/services/Call-center-services/customer-support/BCPServices";
import RealEstateVA from "./pages/services/Call-center-services/Virtual-Assistant/RealEstateVA";
import VirtualAssistantPhone from "./pages/services/Call-center-services/Virtual-Assistant/VirtualAssistantPhone";
import AccountingBookkeepingVA from "./pages/services/Call-center-services/Virtual-Assistant/AccountingBookkeepingVA";
import VirtualAssistantAppointments from "./pages/services/Call-center-services/Virtual-Assistant/VirtualAssistantAppointments";
import VirtualAssistantInternetResearch from "./pages/services/Call-center-services/Virtual-Assistant/VirtualAssistantInternetResearch";
import VirtualAssistantBusinessCards from "./pages/services/Call-center-services/Virtual-Assistant/VirtualAssistantBusinessCards";
import VirtualAssistantDTP from "./pages/services/Call-center-services/Virtual-Assistant/VirtualAssistantDTP";
import VirtualAssistantTravel from "./pages/services/Call-center-services/Virtual-Assistant/VirtualAssistantTravel";
import CorrespondenceVA from "./pages/services/Call-center-services/Virtual-Assistant/CorrespondenceVA";
import EventPlanningVA from "./pages/services/Call-center-services/Virtual-Assistant/EventPlanningVA";
import SupplyManagementVA from "./pages/services/Call-center-services/Virtual-Assistant/SupplyManagementVA";
import TransactionCoordinator from "./pages/services/Call-center-services/Virtual-Assistant/TransactionCoordinator";
import VirtualReceptionistServices from "./pages/services/Call-center-services/Virtual-Assistant/VirtualReceptionistServices";
import VirtualMedicalAssistant from "./pages/services/Call-center-services/Virtual-Assistant/VirtualMedicalAssistant";
import HealthcareVirtualAssistant from "./pages/services/Call-center-services/Virtual-Assistant/HealthcareVirtualAssistant";
import SmallBusinessVA from "./pages/services/Call-center-services/Virtual-Assistant/SmallBusinessVA";
import DataEntryVA from "./pages/services/Call-center-services/Virtual-Assistant/DataEntryVA";
import AudioMonitoring from "./pages/services/Call-center-services/Monitoring-support/AudioMonitoring";
import CCTVMonitoring from "./pages/services/Call-center-services/Monitoring-support/CCTVMonitoring";
import CallQualityAnalytics from "./pages/services/Call-center-services/Monitoring-support/CallQualityAnalytics";
import CallQualityMonitoring from "./pages/services/Call-center-services/Monitoring-support/CallQualityMonitoring";
import VideoMonitoringServices from "./pages/services/Call-center-services/Monitoring-support/VideoMonitoringServices";
import TextMonitoringServices from "./pages/services/Call-center-services/Monitoring-support/TextMonitoringServices";
import AIMonitoringSupport from "./pages/services/Call-center-services/Monitoring-support/AIMonitoringSupport";
import CallAuditingServices from "./pages/services/Call-center-services/Monitoring-support/CallAuditingServices";
import VoiceBroadcastingServices from "./pages/services/Call-center-services/Monitoring-support/VoiceBroadcastingServices";
import ContentMonitoring from "./pages/services/Call-center-services/Monitoring-support/ContentMonitoring";
import RemoteVideoMonitoring from "./pages/services/Call-center-services/Monitoring-support/RemoteVideoMonitoring";
import ContentModeration from "./pages/services/Call-center-services/Monitoring-support/ContentModeration";
import PhoneAnsweringServices from "./pages/services/Call-center-services/Answering-services/PhoneAnsweringServices";
import MedicalAnsweringServices from "./pages/services/Call-center-services/Answering-services/MedicalAnsweringServices";
import RealEstateCallAnswering from "./pages/services/Call-center-services/Answering-services/RealEstateCallAnswering";
import AfterHoursCallCenter from "./pages/services/Call-center-services/Answering-services/AfterHoursCallCenter";
import ContactCenterServices from "./pages/services/Call-center-services/Callcenter-Consulting/ContactCenterServices";
import CloudContactCenterServices from "./pages/services/Call-center-services/Callcenter-Consulting/CloudContactCenterServices";
import BPaaSServices from "./pages/services/Call-center-services/Callcenter-Consulting/BPaaSServices";
import ContactCenterModernization from "./pages/services/Call-center-services/Callcenter-Consulting/ContactCenterModernization";
import ContactCenterTransformation from "./pages/services/Call-center-services/Callcenter-Consulting/ContactCenterTransformation";
import InboundCustomerFAQs from "./pages/services/Call-center-services/Articles/InboundCustomerFAQs";
import CallCenterFAQ from "./pages/services/Call-center-services/Articles/CallCenterFAQ";
import InboundCustomerSupport from "./pages/services/Call-center-services/Articles/InboundCustomerSupport";
import OrderTakingProfit from "./pages/services/Call-center-services/Articles/OrderTakingProfit";
import CallCenterWorkforce2024 from "./pages/services/Call-center-services/Articles/CallCenterWorkforce2024";
import CustomerSupport24x7 from "./pages/services/Call-center-services/Articles/CustomerSupport24x7";
import CallCenterChallenges from "./pages/services/Call-center-services/Articles/CallCenterChallenges";
import CallCenterTrends from "./pages/services/Call-center-services/Articles/CallCenterTrends";
import OffshoreCallCenters from "./pages/services/Call-center-services/Articles/OffshoreCallCenters";
import VirtualAssistantServices from "./pages/services/Call-center-services/Articles/VirtualAssistantServices";
import CustomerSupportOutsourcing from "./pages/services/Call-center-services/Articles/CustomerSupportOutsourcing";
import IntelligentContactCenter from "./pages/services/Call-center-services/Articles/IntelligentContactCenter";
import PostPandemicChallenges from "./pages/services/Call-center-services/Articles/PostPandemicChallenges";
import ChatbotsInCallCenters from "./pages/services/Call-center-services/Articles/ChatbotsInCallCenters";
import AIInCallCenters from "./pages/services/Call-center-services/Articles/AIInCallCenters";
import USPArticle from "./pages/services/Call-center-services/Articles/USPArticle";
import IVRArticle from "./pages/services/Call-center-services/Articles/IVRArticle";
import CallCenterOutsourcing from "./pages/services/Call-center-services/Articles/CallCenterOutsourcing";
import RinglessVoicemailBenefits from "./pages/services/Call-center-services/Articles/RinglessVoicemail";
import PostCovidContactCenterTrends from "./pages/services/Call-center-services/Articles/PostCovidContactCenterTrends";
import CallCenterSecurityTrends from "./pages/services/Call-center-services/Articles/CallCenterSecurityTrends";
import LiveChatSupport from "./pages/services/Call-center-services/Articles/LiveChatSupport";
import ContactCenterInsights from "./pages/services/Call-center-services/Articles/ContactCenterInsights";
import BIMServicesUK from "./pages/services/Engineering-services/Engineering-uk/BIMServicesUK";
import ArchitecturalServicesUK from "./pages/services/Engineering-services/Engineering-uk/ArchitecturalServicesUK";
import CADServicesUK from "./pages/services/Engineering-services/Engineering-uk/CADServicesUK";
import RevitModellingServices from "./pages/services/Engineering-services/Engineering-uk/RevitModellingServices";
import RetailEngineeringDesign from "./pages/services/Engineering-services/Industries/RetailEngineeringDesign";
import ConstructionEngineeringServices from "./pages/services/Engineering-services/Industries/ConstructionEngineeringServices";
import OilGasEngineeringPage from "./pages/services/Engineering-services/Industries/OilGasEngineeringPage";
import KitchenEquipmentEngineering from "./pages/services/Engineering-services/Industries/KitchenEquipmentEngineering";
import QsrEngineering from "./pages/services/Engineering-services/Industries/QsrEngineering";
import GlassIndustryPage from "./pages/services/Engineering-services/Industries/GlassIndustryPage";
import ConstructionDocumentationPage from "./pages/services/Engineering-services/Infrastructure-Engineering/ConstructionDocumentationPage";
import ConstructionSupportPage from "./pages/services/Engineering-services/Infrastructure-Engineering/ConstructionSupportPage";
import ThematicMappingPage from "./pages/services/Engineering-services/Infrastructure-Engineering/ThematicMappingPage";
import ParcelMappingPage from "./pages/services/Engineering-services/Infrastructure-Engineering/ParcelMappingPage";
import LandDevelopmentServices from "./pages/services/Engineering-services/Infrastructure-Engineering/LandDevelopmentServices";
import TownPlanningServices from "./pages/services/Engineering-services/Infrastructure-Engineering/TownPlanningServices";

{/* Shenbagavel Start */ }
{/* services */ }
{/* finance-accounting-finops */ }
{/* Bookkeeping service */ }
import BookkeepingServices from "./pages/services/accounts-services/bookkeeping-service/BookkeepingServices";
import RealEstateBookkeepingServices from "./pages/services/accounts-services/bookkeeping-service/RealEstateBookkeepingServices"
import NimbleAcuityAccountingServices from "./pages/services/accounts-services/bookkeeping-service/AccountingServicesSetup"
import CPABookkeepingServices from "./pages/services/accounts-services/bookkeeping-service/CPABookkeepingServices"
import SmallBusinessBookkeeping from "./pages/services/accounts-services/bookkeeping-service/SmallBusinessBookkeeping"
import QuickBooksBookkeeping from "./pages/services/accounts-services/bookkeeping-service/QuickBooksBookkeeping"
import VirtualBookkeeping from "./pages/services/accounts-services/bookkeeping-service/VirtualBookkeeping"

{/* Accounting service */ }
import AccountingServices from "./pages/services/accounts-services/accounting-services/AccountingServices";
import ValuationAdvisory from "./pages/services/accounts-services/accounting-services/Valuation-Advisory-Services"
import CostAccounting from "./pages/services/accounts-services/accounting-services/Cost-Accounting-service"
import AccountingAutomation from "./pages/services/accounts-services/accounting-services/Accounting-Automation-service"
import RealEstateAccounting from "./pages/services/accounts-services/accounting-services/RealEstate-Accounting-service"
import WealthManagement from "./pages/services/accounts-services/accounting-services/Wealth-Management-service"
import FinancialAccountingAdvisory from "./pages/services/accounts-services/accounting-services/Financial-Accounting-Advisory-service"
import LedgerManagementServices from "./pages/services/accounts-services/accounting-services/Ledger-Management-Services"
import GeneralAccountingServices from "./pages/services/accounts-services/accounting-services/General-Accounting-Services"
import ESGConsultingServices from "./pages/services/accounts-services/accounting-services/ESG-Consulting-Services"
import CorporateAccountingServices from "./pages/services/accounts-services/accounting-services/Corporate-Accounting-Services"
import FixedAssetManagement from "./pages/services/accounts-services/accounting-services/Fixed-Asset-Management-services"
import ManagementAdvisoryServices from "./pages/services/accounts-services/accounting-services/Management-Advisory-Services"
import ManagementAccountingServices from "./pages/services/accounts-services/accounting-services/Management-Accounting-Services"
import ConstructionAccountingServices from "./pages/services/accounts-services/accounting-services/Construction-Accounting-Services"
import FixedAssetAuditingServices from "./pages/services/accounts-services/accounting-services/FixedAsset-Auditing-Services"
import InternalAuditServices from "./pages/services/accounts-services/accounting-services/Internal-Audit-Services"
import PortfolioInvestorAccounting from "./pages/services/accounts-services/accounting-services/Portfolio-Investor-Accounting-service"
import PostMergerIntegration from "./pages/services/accounts-services/accounting-services/Post-Merger-Integration-service"
import ComplianceAudit from "./pages/services/accounts-services/accounting-services/Compliance-Audit-service"
import FixedAssetAccounting from "./pages/services/accounts-services/accounting-services/FixedAsset-Accounting-services"
import StartupAccounting from "./pages/services/accounts-services/accounting-services/Startup-Accounting-service"
import CloudAccountingServices from "./pages/services/accounts-services/accounting-services/Cloud-Accounting-Services"
import AccountingCleanupServices from "./pages/services/accounts-services/accounting-services/Accounting-Cleanup-Services"
import ModelRiskManagementServices from "./pages/services/accounts-services/accounting-services/ModelRisk-Management-Services"
import AuditSupportServices from "./pages/services/accounts-services/accounting-services/Audit-Support-Services"
import CFOServices from "./pages/services/accounts-services/accounting-services/CFO-Services";
import FiduciaryServices from "./pages/services/accounts-services/accounting-services/Fiduciary-Services";
import FinanceTransformationServices from "./pages/services/accounts-services/accounting-services/Finance-Transformation-Services";
import RecordToReportServices from "./pages/services/accounts-services/accounting-services/RecordToReport-Services";
import BusinessAdvisoryServices from "./pages/services/accounts-services/accounting-services/Business-Advisory-Services";
import ForensicAuditServices from "./pages/services/accounts-services/accounting-services/Forensic-Audit-Services";
import OrderManagementServices from "./pages/services/accounts-services/accounting-services/Order-Management-Services";
import DentalAccountingServices from "./pages/services/accounts-services/accounting-services/Dental-Accounting-Services";
import FinancialWriteupServices from "./pages/services/accounts-services/accounting-services/Financial-Writeup-Services";
import SMSFAccountingServices from "./pages/services/accounts-services/accounting-services/SMSF-Accounting-Services";
import RetailAccountingServices from "./pages/services/accounts-services/accounting-services/Retail-Accounting-Services";
import FinancialReportingServices from "./pages/services/accounts-services/accounting-services/FinancialReportingServices";
import SmallBusinessAccountingServices from "./pages/services/accounts-services/accounting-services/SmallBusinessAccountingServices";
import ForensicAccountingServices from "./pages/services/accounts-services/accounting-services/ForensicAccountingServices";
import AccountsReconciliationServices from "./pages/services/accounts-services/accounting-services/AccountsReconciliationServices";
import FinancialBudgetingServices from "./pages/services/accounts-services/accounting-services/FinancialBudgetingServices";
import AutomotiveAccountingServices from "./pages/services/accounts-services/accounting-services/AutomotiveAccountingServices";
import BankCreditReconciliation from "./pages/services/accounts-services/accounting-services/BankCreditReconciliation";
import CashFlowForecasting from "./pages/services/accounts-services/accounting-services/CashFlowForecasting";
import RestaurantAccounting from "./pages/services/accounts-services/accounting-services/RestaurantAccounting";
import CashFlowManagement from "./pages/services/accounts-services/accounting-services/CashFlowManagement";
import FinancialController from "./pages/services/accounts-services/accounting-services/FinancialController";
import ElectricalContractorsAccounting from "./pages/services/accounts-services/accounting-services/ElectricalContractorsAccounting";
import SpacTransactionServices from "./pages/services/accounts-services/accounting-services/SpacTransactionServices";
import FinancialStatementsServices from "./pages/services/accounts-services/accounting-services/FinancialStatementsServices";
import FinancialInvestigationsServices from "./pages/services/accounts-services/accounting-services/FinancialInvestigationsServices";
import OrderProcessingServicesaccounts from "./pages/services/accounts-services/accounting-services/OrderProcessingServices";
import XBRLFilingServices from "./pages/services/accounts-services/accounting-services/XbrlFilingPage";
import ManualJournalEntryServices from "./pages/services/accounts-services/accounting-services/ManualJournalEntryServices";
import BusinessRecoveryServices from "./pages/services/accounts-services/accounting-services/BusinessRecoveryServices";
import CorporateSecretarialServices from "./pages/services/accounts-services/accounting-services/CorporateSecretarialServices";
import TransactionAdvisoryServices from "./pages/services/accounts-services/accounting-services/Transaction-Advisory-Services"
import InvoiceProcessingServices from "./pages/services/accounts-services/accounting-services/InvoiceProcessingServices";
import RealEstateFinancialReporting from "./pages/services/accounts-services/accounting-services/RealEstateFinancialReporting";
import TruckingAccountingServices from "./pages/services/accounts-services/accounting-services/TruckingAccountingServices";
import VirtualAccountingServices from "./pages/services/accounts-services/accounting-services/VirtualAccountingServices";
import XeroAccountingServices from "./pages/services/accounts-services/accounting-services/XeroAccountingServices";
import GlobalAccountingServices from "./pages/services/accounts-services/accounting-services/GlobalAccountingServices";
import SpendAnalysisServices from "./pages/services/accounts-services/accounting-services/SpendAnalysisServices";
import GeneralLedgerAccountingServices from "./pages/services/accounts-services/accounting-services/GeneralLedgerAccountingServices";
import ExcelAccountingServices from "./pages/services/accounts-services/accounting-services/ExcelAccountingServices";
import BankingFinancialAnalysisServices from "./pages/services/accounts-services/accounting-services/BankingFinancialAnalysisServices";
import LIBORTransitionServices from "./pages/services/accounts-services/accounting-services/LIBORTransitionServices";
import YearEndAccountingServices from "./pages/services/accounts-services/accounting-services/YearEndAccountingServices";
import InvoiceFactoringServices from "./pages/services/accounts-services/accounting-services/InvoiceFactoringServices";
import FixedAssetReconciliationServices from "./pages/services/accounts-services/accounting-services/FixedAssetReconciliationServices";
import CloudFinancialManagementServices from "./pages/services/accounts-services/accounting-services/CloudFinancialManagementServices";
import VirtualCFO_Services from "./pages/services/accounts-services/accounting-services/VirtualCFO_Services";
import BAS_Services from "./pages/services/accounts-services/accounting-services/BAS_Services";
import FractionalCFO_Services from "./pages/services/accounts-services/accounting-services/FractionalCFO_Services";
import QuickBooksCleanUpServices from "./pages/services/accounts-services/accounting-services/QuickBooksCleanUpServices";
import TransactionSupportServices from "./pages/services/accounts-services/accounting-services/TransactionSupportServices";

{/* Accounts Payable */ }
import AccountsPayableServices from "./pages/services/accounts-services/accounts-payable/AccountsPayable";

{/* Accounts Receivable */ }
import AccountsReceivableServices from "./pages/services/accounts-services/Accounts Receivable/AccountsReceivableServices";
import RealEstateAccountsReceivable from "./pages/services/accounts-services/Accounts Receivable/RealEstateAccountsReceivableServices";
import AccountsReceivableFactoring from "./pages/services/accounts-services/Accounts Receivable/AccountsReceivableFactoring";
import ARAgingReports from "./pages/services/accounts-services/Accounts Receivable/ARAgingReportsServices";

{/* Tax Prepareation */ }
import TaxPreparationServices from "./pages/services/accounts-services/Tax Preparation/TaxPreparationServices";
import TaxRegulatoryServices from "./pages/services/accounts-services/Tax Preparation/TaxandRegulatoryServices";
import TaxProcessingServices from "./pages/services/accounts-services/Tax Preparation/TaxProcessingServices";
import TaxConsultingServices from "./pages/services/accounts-services/Tax Preparation/TaxConsultingServices";
import SalesTaxServices from "./pages/services/accounts-services/Tax Preparation/SalesTaxServices";
import ProSeriesTaxProcessing from "./pages/services/accounts-services/Tax Preparation/ProSeriesTaxProcessing";
import BusinessTaxServices from "./pages/services/accounts-services/Tax Preparation/BusinessTaxServices";
import HRBlockTaxCutProcessing from "./pages/services/accounts-services/Tax Preparation/HRBlockTaxCutProcessing";
import FederalTaxServices from "./pages/services/accounts-services/Tax Preparation/FederalTaxServices";
import VATReturnServices from "./pages/services/accounts-services/Tax Preparation/VATReturnServices";
import VirtualTaxPreparationServices from "./pages/services/accounts-services/Tax Preparation/VirtualTaxPreparationServices";


{/* CPA Service */ }
import CPAServicePage from "./pages/services/accounts-services/CPA-service/CPAServicePage";
import SmallBusinessCPA from "./pages/services/accounts-services/CPA-service/SmallBusinessCPAServices";
import CPATaxServices from "./pages/services/accounts-services/CPA-service/CPATaxServices";
import CPAPayrollServices from "./pages/services/accounts-services/CPA-service/CPAPayrollServices";
import CPAAccountingServices from "./pages/services/accounts-services/CPA-service/CPAAccountingServices";

{/* Financial Analysis */ }
import FinancialAnalysisServices from "./pages/services/accounts-services/Financial-Analysis/FinancialAnalysisServices";
import DueDiligenceServices from "./pages/services/accounts-services/Financial-Analysis/DueDiligenceServices";
import PortfolioAnalysisServices from "./pages/services/accounts-services/Financial-Analysis/PortfolioAnalysisServices";
import FinancialStatementAuditServices from "./pages/services/accounts-services/Financial-Analysis/FinancialStatementAuditServices";
import TreasuryManagementServices from "./pages/services/accounts-services/Financial-Analysis/TreasuryManagementServices";
import RegulatoryComplianceServices from "./pages/services/accounts-services/Financial-Analysis/RegulatoryComplianceServices";
import EnterprisePerformanceManagement from "./pages/services/accounts-services/Financial-Analysis/EnterprisePerformanceManagement";
import InvestmentAnalysisServices from "./pages/services/accounts-services/Financial-Analysis/InvestmentAnalysisServices";
import BusinessForecastingServices from "./pages/services/accounts-services/Financial-Analysis/BusinessForecastingServices";
import BudgetingForecastingServices from "./pages/services/accounts-services/Financial-Analysis/BudgetingForecastingServices";

{/* Payroll Services */ }
import PayrollProcessingServices from "./pages/services/accounts-services/Payroll-Services/PayrollProcessingServices";
import PayrollComplianceServices from "./pages/services/accounts-services/Payroll-Services/PayrollComplianceServices";
import PayrollDataAnalyticsServices from "./pages/services/accounts-services/Payroll-Services/PayrollDataAnalyticsServices";
import PayrollAdministrationServices from "./pages/services/accounts-services/Payroll-Services/PayrollAdministrationServices";

{/* Healthcare BPO */ }
{/* Medical Billing */ }
import MedicalBilling from "./pages/services/HealthcareBPO/Medical-Billing/MedicalBilling";
import PhysicianBilling from "./pages/services/HealthcareBPO/Medical-Billing/PhysicianBilling";
import FQHCBilling from "./pages/services/HealthcareBPO/Medical-Billing/FQHCBilling";
import GynecologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/GynecologyBilling";
import PatientDemographicEntry from "./pages/services/HealthcareBPO/Medical-Billing/PatientDemographicEntry";
import PatientAdviceLiaison from "./pages/services/HealthcareBPO/Medical-Billing/PatientAdviceLiaison";
import FamilyPracticeBilling from "./pages/services/HealthcareBPO/Medical-Billing/FamilyPracticeBilling";
import PhysicalTherapyBilling from "./pages/services/HealthcareBPO/Medical-Billing/PhysicalTherapyBilling";
import ManagedCareContracting from "./pages/services/HealthcareBPO/Medical-Billing/ManagedCareContracting";
import InternalMedicineBilling from "./pages/services/HealthcareBPO/Medical-Billing/InternalMedicineBilling";
import UrgentCareBilling from "./pages/services/HealthcareBPO/Medical-Billing/UrgentCareBilling";
import IntelligentBillingSoftware from "./pages/services/HealthcareBPO/Medical-Billing/IntelligentBillingSoftware";
import SurgeryBilling from "./pages/services/HealthcareBPO/Medical-Billing/SurgeryBilling";
import SleepMedicineBilling from "./pages/services/HealthcareBPO/Medical-Billing/SleepMedicineBilling";
import MedicalRecordAbstraction from "./pages/services/HealthcareBPO/Medical-Billing/MedicalRecordAbstraction";
import OtolaryngologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/OtolaryngologyBilling";
import MedicalRecordIndexing from "./pages/services/HealthcareBPO/Medical-Billing/MedicalRecordIndexing";
import OccupationalHealthBilling from "./pages/services/HealthcareBPO/Medical-Billing/OccupationalHealthBilling";
import PhysicianCredentialing from "./pages/services/HealthcareBPO/Medical-Billing/PhysicianCredentialing";
import HospitalBilling from "./pages/services/HealthcareBPO/Medical-Billing/HospitalBilling";
import SurgeryCenterBilling from "./pages/services/HealthcareBPO/Medical-Billing/SurgeryCenterBilling";
import HospiceBilling from "./pages/services/HealthcareBPO/Medical-Billing/HospiceBilling";
import UrologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/UrologyBilling";
import EMSBilling from "./pages/services/HealthcareBPO/Medical-Billing/EMSBilling";
import ChiropracticBilling from "./pages/services/HealthcareBPO/Medical-Billing/ChiropracticBilling";
import DentalBilling from "./pages/services/HealthcareBPO/Medical-Billing/DentalBilling";
import DmeBilling from "./pages/services/HealthcareBPO/Medical-Billing/DmeBilling";
import PathologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/PathologyBilling";
import AnesthesiaBilling from "./pages/services/HealthcareBPO/Medical-Billing/AnesthesiaBilling";
import ASCBilling from "./pages/services/HealthcareBPO/Medical-Billing/ASCBilling";
import PediatricBilling from "./pages/services/HealthcareBPO/Medical-Billing/PediatricBilling";
import PainManagementBilling from "./pages/services/HealthcareBPO/Medical-Billing/PainManagementBilling";
import ChargeEntry from "./pages/services/HealthcareBPO/Medical-Billing/ChargeEntry";
import AmbulanceBilling from "./pages/services/HealthcareBPO/Medical-Billing/AmbulanceBilling";
import GastroenterologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/GastroenterologyBilling";
import EmergencyMedicineBilling from "./pages/services/HealthcareBPO/Medical-Billing/EmergencyMedicineBilling";
import PodiatryBilling from "./pages/services/HealthcareBPO/Medical-Billing/PodiatryBilling";
import CardiologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/CardiologyBilling";
import OrthopedicBilling from "./pages/services/HealthcareBPO/Medical-Billing/OrthopedicBilling";
import PersonalInjuryBilling from "./pages/services/HealthcareBPO/Medical-Billing/PersonalInjuryBilling";
import RadiologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/RadiologyBilling";
import WorkersCompBilling from "./pages/services/HealthcareBPO/Medical-Billing/WorkersCompBilling";
import NeurologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/NeurologyBilling";
import CloudRecordsRetrieval from "./pages/services/HealthcareBPO/Medical-Billing/CloudRecordsRetrieval";
import MedicalDocumentScanning from "./pages/services/HealthcareBPO/Medical-Billing/MedicalDocumentScanning";
import HealthBillingSolutions from "./pages/services/HealthcareBPO/Medical-Billing/HealthBillingSolutions";
import BackOfficeSupport from "./pages/services/HealthcareBPO/Medical-Billing/BackOfficeSupport";
import EHRChartBuilding from "./pages/services/HealthcareBPO/Medical-Billing/EHRChartBuilding";

{/* Medical Coding */ }
import MedicalCoding from "./pages/services/HealthcareBPO/Medical-Coding/MedicalCoding";
import MedicalCodingAudit from "./pages/services/HealthcareBPO/Medical-Coding/MedicalCodingAuditServices";
import CPTICD10Coding from "./pages/services/HealthcareBPO/Medical-Coding/CPTICD10Coding";
import HCCHccCoding from "./pages/services/HealthcareBPO/Medical-Coding/HCCHccCoding";
import MedicalCodingAnalysis from "./pages/services/HealthcareBPO/Medical-Coding/MedicalCodingAnalysis";


{/* Revenue Cycle Management */ }
import RevenueCycleManagement from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/RevenueCycleManagement";
import HealthcareDueDiligence from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/HealthcareDueDiligenceServices";
import PaymentPostingServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/PaymentPostingServices";
import PatientFinancialClearance from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/PatientFinancialClearance";
import MIPSQualityReporting from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/MIPSQualityReporting";
import PPOClaimsRepricing from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/PPOClaimsRepricing";
import PLMServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/PLMServices";
import CaseManagementServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/CaseManagementServices";
import RevenueImprovementServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/RevenueImprovementServices";
import HealthcareCollectionServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/HealthcareCollectionServices";
import MedicalARServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/MedicalARServices";
import HealthInsuranceRecovery from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/HealthInsuranceRecovery";
import MedicalClaimsProcessing from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/MedicalClaimsProcessing";
import ReceivableAnalysis from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/ReceivableAnalysis";
import AccountsReceivableConversion from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/AccountsReceivableConversion";
import MedicareReimbursementServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/MedicareReimbursementServices";
import AccountsReceivableFollowUp from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/AccountsReceivableFollowUp";
import PaymentAccuracyServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/PaymentAccuracyServices";
import MedicalClaimsEncounterProcessing from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/MedicalClaimsEncounterProcessing";
import ARCallingServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/ARCallingServices";
import HealthRiskAssessmentServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/HealthRiskAssessmentServices";
import HealthcarePayerServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/HealthcarePayerServices";
import DenialManagement from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/DenialManagement";
import DentalRCM from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/DentalRCM";
import InsuranceEligibility from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/InsuranceEligibility";
import RevenueIntegrity from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/RevenueIntegrity";

{/* Medical Transcription */ }
import MedicalTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/MedicalTranscription";
import VirtualScribing from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/PhysicianAssistantVirtualScribingServices";
import MedicalReportsTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/MedicalReportsTranscription";
import InternalMedicineTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/InternalMedicineTranscription";
import GeneticsTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/GeneticsTranscription";
import CardiologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/CardiologyTranscription";
import PhysicalTherapyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/PhysicalTherapyTranscription";
import OphthalmologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/OphthalmologyTranscription";
import EMRTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/EMRTranscription";
import ChiropracticTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/ChiropracticTranscription";
import DischargeSummaryTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/DischargeSummaryTranscription";
import DeafTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/DeafTranscription";
import RehabilitationTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/RehabilitationTranscription";
import EmergencyRoomTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/EmergencyRoomTranscription";
import HospitalTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/HospitalTranscription";
import VirtualMedicalScribe from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/VirtualMedicalScribe";
import Hl7Transcription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/Hl7Transcription";
import OncologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/OncologyTranscription";
import FollowUpNotesTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/FollowUpNotesTranscription";
import NeurologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/NeurologyTranscription";
import OrthopedicsTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/OrthopedicsTranscription";
import HistoryPhysicalNotes from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/HistoryPhysicalNotes";
import PsychiatryTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/PsychiatryTranscription";
import DermatologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/DermatologyTranscription";
import BSLInterpreting from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/BSLInterpreting";
import OperativeReportsTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/OperativeReportsTranscription";
import AnesthesiologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/AnesthesiologyTranscription";
import ProgressNotesTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/ProgressNotesTranscription";
import PathologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/PathologyTranscription";
import UrologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/UrologyTranscription";
import SurgeryTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/SurgeryTranscription";
import RadiologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/RadiologyTranscription";
import GastroenterologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/GastroenterologyTranscription";
import ENTTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/ENTTranscription";
import PainManagementTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/PainManagementTranscription";


{/* Teleradiology Services */ }
import Teleradiology from "./pages/services/HealthcareBPO/Teleradiology-Services/Teleradiology";
import EradPacs from "./pages/services/HealthcareBPO/Teleradiology-Services/eRADPACSSystemforTeleradiology";
import EmergencyRadiology from "./pages/services/HealthcareBPO/Teleradiology-Services/EmergencyRadiology";
import StatReporting from "./pages/services/HealthcareBPO/Teleradiology-Services/StatReporting";
import RadiologyInformationSystem from "./pages/services/HealthcareBPO/Teleradiology-Services/RadiologyInformationSystem";
import PreliminaryTeleradiology from "./pages/services/HealthcareBPO/Teleradiology-Services/PreliminaryTeleradiology";
import MRIInterpretation from "./pages/services/HealthcareBPO/Teleradiology-Services/MRIInterpretation";
import NighthawkTeleradiology from "./pages/services/HealthcareBPO/Teleradiology-Services/NighthawkTeleradiology";
import OnsiteTeleradiology from "./pages/services/HealthcareBPO/Teleradiology-Services/OnsiteTeleradiology";
import BoneDensityScan from "./pages/services/HealthcareBPO/Teleradiology-Services/BoneDensityScan";
// import ImageProcessing from "./pages/services/HealthcareBPO/Teleradiology-Services/ImageProcessing";
import NeurologyPETCT from "./pages/services/HealthcareBPO/Teleradiology-Services/NeurologyPETCT";
import ThoracicImaging from "./pages/services/HealthcareBPO/Teleradiology-Services/ThoracicImaging";
import MedicalImaging from "./pages/services/HealthcareBPO/Teleradiology-Services/MedicalImaging";
import PETCTReporting from "./pages/services/HealthcareBPO/Teleradiology-Services/PETCTReporting";
import AfterTeleradiologyServices from "./pages/services/HealthcareBPO/Teleradiology-Services/AfterTeleradiologyServices";
import FinalTeleradiologyReads from "./pages/services/HealthcareBPO/Teleradiology-Services/FinalTeleradiologyReads";
import CardiacPETCTReporting from "./pages/services/HealthcareBPO/Teleradiology-Services/CardiacPETCTReporting";
import CTInterpretation from "./pages/services/HealthcareBPO/Teleradiology-Services/CTInterpretation";
import DentalXrayImaging from "./pages/services/HealthcareBPO/Teleradiology-Services/DentalXrayImaging";

{/*  EMR Services */ }
import EMRServices from "./pages/services/HealthcareBPO/EMR-Services/EMRServices";
import PediatricsEMRServices from "./pages/services/HealthcareBPO/EMR-Services/PediatricsEMRServices";
import OphthalmologyEMRServices from "./pages/services/HealthcareBPO/EMR-Services/OphthalmologyEMRServices";
import InfectiousDiseaseEMR from "./pages/services/HealthcareBPO/EMR-Services/InfectiousDiseaseEMR";
import EndocrinologyEMR from "./pages/services/HealthcareBPO/EMR-Services/EndocrinologyEMR";
import PulmonaryEMR from "./pages/services/HealthcareBPO/EMR-Services/PulmonaryEMR";
import HouseCallEMR from "./pages/services/HealthcareBPO/EMR-Services/HouseCallEMR";
import EMRSoftwareDevelopment from "./pages/services/HealthcareBPO/EMR-Services/EMRSoftwareDevelopment";
import AllergyImmunologyEMR from "./pages/services/HealthcareBPO/EMR-Services/AllergyImmunologyEMR";
import UrologyEMR from "./pages/services/HealthcareBPO/EMR-Services/UrologyEMR";
import DermatologyEMR from "./pages/services/HealthcareBPO/EMR-Services/DermatologyEMR";
import PainManagementEMR from "./pages/services/HealthcareBPO/EMR-Services/PainManagementEMR";
import MedicalRecordSummary from "./pages/services/HealthcareBPO/EMR-Services/MedicalRecordSummary";
import SleepMedicineEMR from "./pages/services/HealthcareBPO/EMR-Services/SleepMedicineEMR";
import InternalMedicineEMR from "./pages/services/HealthcareBPO/EMR-Services/InternalMedicineEMR";
import OfficeAllyEHR from "./pages/services/HealthcareBPO/EMR-Services/OfficeAllyEHR";
import OncologyEMR from "./pages/services/HealthcareBPO/EMR-Services/OncologyEMR";
import RehabilitativeEMR from "./pages/services/HealthcareBPO/EMR-Services/RehabilitativeEMR";
import NephrologyEMR from "./pages/services/HealthcareBPO/EMR-Services/NephrologyEMR";
import CardiologyEMR from "./pages/services/HealthcareBPO/EMR-Services/CardiologyEMR";
import SpeechTherapyEMR from "./pages/services/HealthcareBPO/EMR-Services/SpeechTherapyEMR";
import AmbulatorySurgeryEMR from "./pages/services/HealthcareBPO/EMR-Services/AmbulatorySurgeryEMR";
import PrimaryCareEMR from "./pages/services/HealthcareBPO/EMR-Services/PrimaryCareEMR";
import PhysicalMedicineEMR from "./pages/services/HealthcareBPO/EMR-Services/PhysicalMedicineEMR";
import EMRIntegration from "./pages/services/HealthcareBPO/EMR-Services/EMRIntegration";
import OBGYNEMR from "./pages/services/HealthcareBPO/EMR-Services/OBGYNEMR";
import RheumatologyEMR from "./pages/services/HealthcareBPO/EMR-Services/RheumatologyEMR";
import VirtualEMR from "./pages/services/HealthcareBPO/EMR-Services/VirtualEMR";
import OrthopedicsEMR from "./pages/services/HealthcareBPO/EMR-Services/OrthopedicsEMR";
import PsychiatryEMR from "./pages/services/HealthcareBPO/EMR-Services/PsychiatryEMR";
import PrechartingServices from "./pages/services/HealthcareBPO/EMR-Services/PrechartingServices";
import OtolaryngologyEMR from "./pages/services/HealthcareBPO/EMR-Services/OtolaryngologyEMR";
import BehavioralHealthEHR from "./pages/services/HealthcareBPO/EMR-Services/BehavioralHealthEHR";
import EMRDataMigration from "./pages/services/HealthcareBPO/EMR-Services/EMRDataMigration";
import UrgentCareEHR from "./pages/services/HealthcareBPO/EMR-Services/UrgentCareEHR";
import VascularSurgeryEMR from "./pages/services/HealthcareBPO/EMR-Services/VascularSurgeryEMR";
import EMRDataEntry from "./pages/services/HealthcareBPO/EMR-Services/EMRDataEntry";
import GeneralSurgeryEMR from "./pages/services/HealthcareBPO/EMR-Services/GeneralSurgeryEMR";
import GastroenterologyEMR from "./pages/services/HealthcareBPO/EMR-Services/GastroenterologyEMR";
import NeurologyEMR from "./pages/services/HealthcareBPO/EMR-Services/NeurologyEMR";
import HandSurgeryEMR from "./pages/services/HealthcareBPO/EMR-Services/HandSurgeryEMR";


{/* Claims Adjudication Services */ }
import ClaimsAdjudication from "./pages/services/HealthcareBPO/Claims-Adjudication-Services/ClaimsAdjudication";
import RemittanceProcessing from "./pages/services/HealthcareBPO/Claims-Adjudication-Services/RemittanceProcessingService";
import DentalClaimsAdjudication from "./pages/services/HealthcareBPO/Claims-Adjudication-Services/DentalClaimsAdjudication";

{/* Medical Animation Services */ }
import MedicalAnimationServices from "./pages/services/HealthcareBPO/Medical-Animation/MedicalAnimationServices";
import MedicalAnimation2D from "./pages/services/HealthcareBPO/Medical-Animation/2DMedicalAnimationServices";
import MedicalIllustration3D from "./pages/services/HealthcareBPO/Medical-Animation/MedicalIllustration3D";
import MolecularAnimation from "./pages/services/HealthcareBPO/Medical-Animation/MolecularAnimation";
import Medical3DAnimation from "./pages/services/HealthcareBPO/Medical-Animation/Medical3DAnimation";
import BiomedicalIllustration from "./pages/services/HealthcareBPO/Medical-Animation/BiomedicalIllustration";
import PharmaceuticalAnimation from "./pages/services/HealthcareBPO/Medical-Animation/PharmaceuticalAnimation";
import SurgicalAnimationServices from "./pages/services/HealthcareBPO/Medical-Animation/SurgicalAnimationServices";
import AnatomyIllustrationServices from "./pages/services/HealthcareBPO/Medical-Animation/AnatomyIllustrationServices";
import OrthopedicAnimationServices from "./pages/services/HealthcareBPO/Medical-Animation/OrthopedicAnimationServices";
import ScientificAnimationServices from "./pages/services/HealthcareBPO/Medical-Animation/ScientificAnimationServices";
import MedicalDeviceAnimationServices from "./pages/services/HealthcareBPO/Medical-Animation/MedicalDeviceAnimationServices";
import MedicalDevicePrototypingServices from "./pages/services/HealthcareBPO/Medical-Animation/MedicalDevicePrototypingServices";
import MedicalIllustration from "./pages/services/HealthcareBPO/Medical-Animation/MedicalIllustration";
import SpineAnimation from "./pages/services/HealthcareBPO/Medical-Animation/SpineAnimation";


{/* Pharmacy Business Services */ }
import PharmacyBusinessServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PharmacyBusinessServices";
import GxPComplianceServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/GxPComplianceServices";
import PharmacyBillingServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PharmacyBillingServices";
import PharmacovigilanceServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PharmacovigilanceServices";
import PharmacyManagementServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PharmacyManagementServices";
import PhysicianReferralServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PhysicianReferralServices";
import MailOrderPharmacyServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/MailOrderPharmacyServices";
import MedicationTherapyManagementServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/MedicationTherapyManagementServices";
import PharmacyDocumentManagementServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PharmacyDocumentManagementServices";


{/* Healthcare Management Services */ }
import HealthcareManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareManagementServices";
import UrgentCareBackofficeSupport from "./pages/services/HealthcareBPO/Healthcare-Management-Services/UrgentCareBackofficeSupport";
import ClinicalDocumentationImprovement from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalDocumentationImprovement";
import DecentralizedClinicalTrials from "./pages/services/HealthcareBPO/Healthcare-Management-Services/DecentralizedClinicalTrials";
import HospitalBackofficeSupport from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HospitalBackofficeSupport";
import PatientEngagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PatientEngagementServices";
import OnlineTelehealthServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/OnlineTelehealthServices";
import HealthcareConsultingServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareConsultingServices";
import MedicalPracticeTransformationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalPracticeTransformationServices";
import PatientAdherenceServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PatientAdherenceServices";
import HedisMeasurementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HedisMeasurementServices";
import HealthcareDocumentationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareDocumentationServices";
import MedicalRecordReviewServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalRecordReviewServices";
import ChartDocumentationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ChartDocumentationServices";
import HealthcareSurveysServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareSurveysServices";
import TelemedicineAppointmentServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/TelemedicineAppointmentServices";
import HealthcareDataManagement from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareDataManagement";
import PatientSatisfactionSurveyServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PatientSatisfactionSurveyServices";
import PharmaceuticalOutsourcing from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PharmaceuticalOutsourcing";
import ClinicalDocumentationIntegrity from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalDocumentationIntegrity";
import PriorAuthorization from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PriorAuthorization";
import ClinicalServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalServices";
import RemotePatientMonitoring from "./pages/services/HealthcareBPO/Healthcare-Management-Services/RemotePatientMonitoring";
import PreventiveCare from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PreventiveCare";
import HealthcareAnalytics from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareAnalytics";
import TelemedicineServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/TelemedicineServices";
import HealthcareInteroperability from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareInteroperability";
import HealthcareCallCenterServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareCallCenterServices";
import ClinicalDecisionSupportServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalDecisionSupportServices";
import MedicalDataEntryServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalDataEntryServices";
import HospitalCapacityManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HospitalCapacityManagementServices";
import VirtualHealthcareBPOServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/VirtualHealthcareBPOServices";
import ClaimsProcessingSoftwareDevelopment from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClaimsProcessingSoftwareDevelopment";
import ClinicalResearchOrganizationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalResearchOrganizationServices";
import HealthcareProviderDataManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareProviderDataManagementServices";
import EDIIntegrationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/EDIIntegrationServices";
import RiskBasedQualityManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/RiskBasedQualityManagementServices";
import DentalInsuranceVerificationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/DentalInsuranceVerificationServices";
import HealthInformationTechnology from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthInformationTechnology";
import PatientOnboardingServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PatientOnboardingServices";
import MedicalInsuranceClaimsProcessing from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalInsuranceClaimsProcessing";
import MedicalBillingSoftwareSupport from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalBillingSoftwareSupport";
import MedicalPeerReviewServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalPeerReviewServices";
import EOBProcessingServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/EOBProcessingServices";
import PopulationHealthAnalytics from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PopulationHealthAnalytics";
import NurseTriageServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/NurseTriageServices";
import PatientInteractionServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PatientInteractionServices";
import UtilizationManagement from "./pages/services/HealthcareBPO/Healthcare-Management-Services/UtilizationManagement";
import ClinicalTrialRegulatory from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalTrialRegulatory";
import PracticeManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PracticeManagementServices";
import CareManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/CareManagementServices";
import DigitalHealthServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/DigitalHealthServices";
import StatisticalProgrammingServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/StatisticalProgrammingServices";
import CareCoordinationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/CareCoordinationServices";
import MedicalPresentationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalPresentationServices";

{/* Mortgage Services */ }
{/* Loan Processing Services */ }
import MortgageProcessing from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageProcessing";
import JumboMortgageProcessing from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/JumboMortgageProcessing";
import MortgageRPA from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageRPA";
import NoMoneyDownMortgage from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/NoMoneyDownMortgage";
import MortgageIndexingAndExtraction from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageIndexingAndExtraction";
import BrokerPriceOpinion from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/BrokerPriceOpinion";
import MortgageDocumentRecording from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageDocumentRecording";
import MortgageTitlePolicy from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageTitlePolicy";
import PreFundQCAudit from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/PreFundQCAudit";
import ForeclosureTitleAndResolution from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/ForeclosureTitleAndResolution";
import MortgageAccountingAndBookkeeping from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageAccountingAndBookkeeping";
import MortgageLienRelease from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageLienRelease";
import MortgageVirtualAssistant from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageVirtualAssistant";
import MortgageCreditUnion from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageCreditUnion";
import MortgageUXSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageUXSupport";
import MortgageAudit from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageAudit";
import USDAMortgageSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/USDAMortgageSupport";
import WarehouseQCAudit from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/WarehouseQCAudit";
import MortgagePreprocessing from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgagePreprocessing";
import ReverseMortgageSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/ReverseMortgageSupport";
import MortgageQualityRetention from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageQualityRetention";
import MortgageDashboardCreation from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageDashboardCreation";
import VALoanSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/VALoanSupport";
import AssignmentOfMortgage from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/AssignmentOfMortgage";
import FHALoanSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/FHALoanSupport";
import ConventionalLoanProcessing from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/ConventionalLoanProcessing";
import MortgageLoanBoarding from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageLoanBoarding";
import MortgageLoanSetup from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageLoanSetup";
import ResidentialMortgageLoanSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/ResidentialMortgageLoanSupport";
import WholeLoanPurchaseReview from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/WholeLoanPurchaseReview";
import ConformingMortgageLoanSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/ConformingMortgageLoanSupport";
import FixedAndAdjustableMortgageSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/FixedAndAdjustableMortgageSupport";
import MLOClientSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MLOClientSupport";
import SecondMortgageSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/SecondMortgageSupport";
import RenovationMortgageSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/RenovationMortgageSupport";
import TrailingDocumentsSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/TrailingDocumentsSupport";
import EquipmentLeasingSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/EquipmentLeasingSupport";
import MortgageDefaultSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageDefaultSupport";
import MortgageComplianceSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageComplianceSupport";


{/* Underwriting Services */ }
import MortgageUnderwritingSupport from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageUnderwritingSupport";
import MortgageUnderwritingSupportCreditUnion from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageUnderwritingSupportCreditUnion";
import MortgageOriginationUnderwriting from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageOriginationUnderwriting";
import MortgageUnderwritingSupportLenders from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageUnderwritingSupportLenders";
import BorrowerSolicitationSupport from "./pages/services/Mortgage-Services/UnderwritingServices/BorrowerSolicitationSupport";
import MortgageLoanModificationAssistance from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageLoanModificationAssistance";
import MortgageUnderwritingQC from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageUnderwritingQC";
import ModificationUnderwritingSupport from "./pages/services/Mortgage-Services/UnderwritingServices/ModificationUnderwritingSupport";
import ForeclosureAssistanceServices from "./pages/services/Mortgage-Services/UnderwritingServices/ForeclosureAssistanceServices";
import MortgageAppraisalUnderwriting from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageAppraisalUnderwriting";
import LossMitigationAssistance from "./pages/services/Mortgage-Services/UnderwritingServices/LossMitigationAssistance";
import ShortSaleSupportServices from "./pages/services/Mortgage-Services/UnderwritingServices/ShortSaleSupportServices";
import SigningSupportServices from "./pages/services/Mortgage-Services/UnderwritingServices/SigningSupportServices";

{/* Mortgage Closing Services */ }
import MortgageClosingSupportServices from "./pages/services/Mortgage-Services/ClosingServices/MortgageClosingSupportServices";
import MortgageLenderSupportServices from "./pages/services/Mortgage-Services/ClosingServices/MortgageLenderSupportServices";
import PrePostClosingComplianceServices from "./pages/services/Mortgage-Services/ClosingServices/PrePostClosingComplianceServices";
import PostCloseQCSupportServices from "./pages/services/Mortgage-Services/ClosingServices/PostCloseQCSupportServices";
import MortgageCreditUnionSupport from "./pages/services/Mortgage-Services/ClosingServices/MortgageCreditUnionSupport";
import MortgageDisclosurePreparation from "./pages/services/Mortgage-Services/ClosingServices/MortgageDisclosurePreparation";
import PreClosingQCSupportServices from "./pages/services/Mortgage-Services/ClosingServices/PreClosingQCSupportServices";
import MortgagePreClosingSupportServices from "./pages/services/Mortgage-Services/ClosingServices/MortgagePreClosingSupportServices";
import MortgagePostClosingSupportServices from "./pages/services/Mortgage-Services/ClosingServices/MortgagePostClosingSupportServices";

{/* Title Support */ }
import MortgageTitleSupportServices from "./pages/services/Mortgage-Services/TitleSupport/MortgageTitleSupportServices";
import MortgageTitleSupportServicesCompanies from "./pages/services/Mortgage-Services/TitleSupport/MortgageTitleSupportServicesCompanies";
import MortgageTitleCommitmentPreparation from "./pages/services/Mortgage-Services/TitleSupport/MortgageTitleCommitmentPreparation";
import MortgageTitleSupportForLenders from "./pages/services/Mortgage-Services/TitleSupport/MortgageTitleSupportForLenders";
import MortgageTitleInsuranceProcessing from "./pages/services/Mortgage-Services/TitleSupport/MortgageTitleInsuranceProcessing";

{/* Appraisal Support */ }
import MortgageAppraisalSupport from "./pages/services/Mortgage-Services/AppraisalSupport/MortgageAppraisalSupport";
import MortgageAppraisalSupportForCompanies from "./pages/services/Mortgage-Services/AppraisalSupport/MortgageAppraisalSupportForCompanies";
import RealEstateAppraisalDataEntrySupport from "./pages/services/Mortgage-Services/AppraisalSupport/RealEstateAppraisalDataEntrySupport";
import MortgageAppraisalReviewSupport from "./pages/services/Mortgage-Services/AppraisalSupport/MortgageAppraisalReviewSupport";
import MortgageValuationSupport from "./pages/services/Mortgage-Services/AppraisalSupport/MortgageValuationSupport";


{/* Digital Marketing */ }
import DigitalMarketingServicesForMortgage from "./pages/services/Mortgage-Services/Digital Marketing/DigitalMarketingServicesForMortgage";
import DigitalMarketingServicesForBrokers from "./pages/services/Mortgage-Services/Digital Marketing/DigitalMarketingServicesForBrokers";
import DigitalMarketingServicesForCreditUnions from "./pages/services/Mortgage-Services/Digital Marketing/DigitalMarketingServicesForCreditUnions";
import DigitalMarketingServicesForBanks from "./pages/services/Mortgage-Services/Digital Marketing/DigitalMarketingServicesForBanks";
import DigitalMarketingServicesForLenders from "./pages/services/Mortgage-Services/Digital Marketing/DigitalMarketingServicesForLenders";


{/* REO Support */ }
import REOSupport from "./pages/services/Mortgage-Services/REOSupport/REOSupport";
import REOReimbursementServices from "./pages/services/Mortgage-Services/REOSupport/REOReimbursementServices";
import REOListingSupportServices from "./pages/services/Mortgage-Services/REOSupport/REOListingSupportServices";
import RealEstateTitleSupport from "./pages/services/Mortgage-Services/REOSupport/RealEstateTitleSupport";
import LeaseAbstactionSupportServices from "./pages/services/Mortgage-Services/REOSupport/LeaseAbstactionSupportServices";

{/* Mortgage Loan */ }
import MortgageLoanServicing from "./pages/services/Mortgage-Services/MortgageLoan/MortgageLoanServicing";


{/* SoftwareDevelopment */ }
{/* custom Software */ }
import CustomSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/CustomSoftwareDevelopment";
import EmbeddedSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/EmbeddedSoftwareDevelopment";
import AlgorithmAnalysisDesign from "./pages/services/SoftwareDevelopment/CustomSoftware/AlgorithmAnalysisDesign";
import HighFidelityDesign from "./pages/services/SoftwareDevelopment/CustomSoftware/HighFidelityDesign";
import OTTAppDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/OTTAppDevelopment";
import RestAPIDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/RestAPIDevelopment";
import InteractiveKioskSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/InteractiveKioskSoftwareDevelopment";
import FirmwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/FirmwareDevelopment";
import LMSDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/LMSDevelopmentServices";
import IoTAnalyticsDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/IoTAnalyticsDevelopment";
import DeviceDriversDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/DeviceDriversDevelopment";
import MVPDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/MVPDevelopment";
import AndroidTVAppDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/AndroidTVAppDevelopment";
import SitecoreDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/SitecoreDevelopment";
import SoftwareModernization from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareModernization";
import BespokeSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/BespokeSoftwareDevelopment";
import CustomTemplateDesign from "./pages/services/SoftwareDevelopment/CustomSoftware/CustomTemplateDesign";
import BSPDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/BSPDevelopment";
import ChromecastAppDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/ChromecastAppDevelopment";
import SoftwareRequirementAnalysis from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareRequirementAnalysis";
import HMIDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/HMIDevelopment";
import ElixirDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/ElixirDevelopment";
import SoftwareArchitectureDesign from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareArchitectureDesign";
import CISasService from "./pages/services/SoftwareDevelopment/CustomSoftware/CISasService";
import EthereumDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/EthereumDevelopment";
import IoTasAService from "./pages/services/SoftwareDevelopment/CustomSoftware/IoTasAService";
import FileMakerDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/FileMakerDevelopment";
import FullStackDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/FullStackDevelopment";
import SoftwareProductDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareProductDevelopment";
import MachineLearningConsulting from "./pages/services/SoftwareDevelopment/CustomSoftware/MachineLearningConsulting";
import IeoDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/IeoDevelopmentServices";
import SoftwareProgramming from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareProgramming";
import IotAppDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/IotAppDevelopment";
import InteractivePrototypeServices from "./pages/services/SoftwareDevelopment/CustomSoftware/InteractivePrototypeServices";
import DesktopApplicationDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/DesktopApplicationDevelopment";
import NopcommerceDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/NopcommerceDevelopment";
import LegacyApplicationModernization from "./pages/services/SoftwareDevelopment/CustomSoftware/LegacyApplicationModernization";
import AgileSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/AgileSoftwareDevelopment";
import NearshoreSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/NearshoreSoftwareDevelopment";
import LiferayDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/LiferayDevelopment";
import GameDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/GameDevelopmentServices";
import SoftwareRndServices from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareRndServices";
import MatlabDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/MatlabDevelopmentServices";
import SoftwareMaintenanceServices from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareMaintenanceServices";
import OffshoreSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/OffshoreSoftwareDevelopment";
import PocDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/PocDevelopment";
import ChatbotDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/ChatbotDevelopment";
import CoreModernizationServices from "./pages/services/SoftwareDevelopment/CustomSoftware/CoreModernizationServices";
import StoDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/StoDevelopmentServices";
import ProductManagementServices from "./pages/services/SoftwareDevelopment/CustomSoftware/ProductManagementServices";
import PaymentGatewayIntegrationServices from "./pages/services/SoftwareDevelopment/CustomSoftware/PaymentGatewayIntegrationServices";
import ApplicationDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/ApplicationDevelopmentServices";
import ApplicationLifecycleManagementServices from "./pages/services/SoftwareDevelopment/CustomSoftware/ApplicationLifecycleManagementServices";
import NFTMarketplaceDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/NFTMarketplaceDevelopmentServices";
import RecognitionSoftwareDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/RecognitionSoftwareDevelopmentServices";
import DigitalInteractiveServices from "./pages/services/SoftwareDevelopment/CustomSoftware/DigitalInteractiveServices";
import SoftwareProductEngineering from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareProductEngineering";
import FraudDetectionSoftwareDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/FraudDetectionSoftwareDevelopmentServices";
import ApplicationReengineeringServices from "./pages/services/SoftwareDevelopment/CustomSoftware/ApplicationReengineeringServices";
import VRPrototypingServices from "./pages/services/SoftwareDevelopment/CustomSoftware/VRPrototypingServices";
import BusinessApplicationDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/BusinessApplicationDevelopment";
import ICODevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/ICODevelopmentServices";
import SoftwareDevelopmentForStartups from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareDevelopmentForStartups";
import FintechSoftwareDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/FintechSoftwareDevelopmentServices";

{/* Mobile App */ }
import AppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/AppDevelopmentServices";
import AndroidAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/AndroidAppDevelopmentServices";
import XamarinAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/XamarinAppDevelopmentServices";
import FintechAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/FintechAppDevelopmentServices";
import ReactNativeDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/ReactNativeDevelopmentServices";
import J2MEAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/J2MEAppDevelopmentServices";
import RapidApplicationDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/RapidApplicationDevelopmentServices";
import IOSAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/IOSAppDevelopmentServices";
import MobileCommerceDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/MobileCommerceDevelopmentServices";
import KotlinAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/KotlinAppDevelopmentServices";
import IosAppMaintenanceServices from "./pages/services/SoftwareDevelopment/MobileApp/IosAppMaintenanceServices";
import ArabicAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/ArabicAppDevelopmentServices";
import XcodeAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/XcodeAppDevelopmentServices";
import WearableAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/WearableAppDevelopmentServices";
import IpadAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/IpadAppDevelopmentServices";
import TitaniumAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/TitaniumAppDevelopmentServices";
import HoloLensAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/HoloLensAppDevelopmentServices";
import NativeAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/NativeAppDevelopmentServices";
import Html5MobileAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/Html5MobileAppDevelopmentServices";
import IPhoneAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/IPhoneAppDevelopmentServices";
import SwiftAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/SwiftAppDevelopmentServices";
import AppleWatchAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/AppleWatchAppDevelopmentServices";
import JQueryAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/JQueryAppDevelopmentServices";
import PhoneGapAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/PhoneGapAppDevelopmentServices";
import OnDemandServicesAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/OnDemandServicesAppDevelopment";
import MobileAppDesignServices from "./pages/services/SoftwareDevelopment/MobileApp/MobileAppDesignServices";
import IBeaconAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/IBeaconAppDevelopment";
import DatingAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/DatingAppDevelopment";
import HybridAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/HybridAppDevelopment";
import FlutterAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/FlutterAppDevelopment";
import AndroidAppMaintenance from "./pages/services/SoftwareDevelopment/MobileApp/AndroidAppMaintenance";
import IonicAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/IonicAppDevelopment";
import CrossPlatformAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/CrossPlatformAppDevelopment";


{/* ApplicationServices */ }
import ApplicationServices from "./pages/services/SoftwareDevelopment/Application/ApplicationServices";
import ADACompliance from "./pages/services/SoftwareDevelopment/Application/ADACompliance";
import HederaDevelopment from "./pages/services/SoftwareDevelopment/Application/HederaDevelopment";
import OdooDevelopment from "./pages/services/SoftwareDevelopment/Application/OdooDevelopment";
import APIDevelopment from "./pages/services/SoftwareDevelopment/Application/APIDevelopment";
import HyperledgerDevelopment from "./pages/services/SoftwareDevelopment/Application/HyperledgerDevelopment";
import PimcoreDevelopment from "./pages/services/SoftwareDevelopment/Application/PimcoreDevelopment";
import APIManagement from "./pages/services/SoftwareDevelopment/Application/APIManagement";
import KonyDevelopment from "./pages/services/SoftwareDevelopment/Application/KonyDevelopment";
import PythonDevelopment from "./pages/services/SoftwareDevelopment/Application/PythonDevelopment";
import ApplicationModernization from "./pages/services/SoftwareDevelopment/Application/ApplicationModernization";
import LAMPDevelopment from "./pages/services/SoftwareDevelopment/Application/LAMPDevelopment";
import SvelteDevelopment from "./pages/services/SoftwareDevelopment/Application/SvelteDevelopment";
import ARGameDevelopment from "./pages/services/SoftwareDevelopment/Application/ARGameDevelopment";
import LaravelDevelopment from "./pages/services/SoftwareDevelopment/Application/LaravelDevelopment";
import APIIntegration from "./pages/services/SoftwareDevelopment/Application/APIIntegration";
import DAppsDevelopment from "./pages/services/SoftwareDevelopment/Application/DAppsDevelopment";
import LinuxDevelopment from "./pages/services/SoftwareDevelopment/Application/LinuxDevelopment";
import UnityDevelopment from "./pages/services/SoftwareDevelopment/Application/UnityDevelopment";
import DartDevelopment from "./pages/services/SoftwareDevelopment/Application/DartDevelopment";
import MotionUIDevelopment from "./pages/services/SoftwareDevelopment/Application/MotionUIDevelopment";
import ApplicationSupport from "./pages/services/SoftwareDevelopment/Application/ApplicationSupport";
import GraphQLDevelopment from "./pages/services/SoftwareDevelopment/Application/GraphQLDevelopment";
import ObjectiveCDevelopment from "./pages/services/SoftwareDevelopment/Application/ObjectiveCDevelopment";


{/* Web Development Services */ }
import WebDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/WebDevelopment";
import ScalaDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/ScalaDevelopment";
import LandingPageDesign from "./pages/services/SoftwareDevelopment/WebDevelopment/LandingPageDesign";
import WordPressMigration from "./pages/services/SoftwareDevelopment/WebDevelopment/WordPressMigration";
import PHPDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/PHPDevelopment";
import PWA from "./pages/services/SoftwareDevelopment/WebDevelopment/PWA";
import WordPressPlugin from "./pages/services/SoftwareDevelopment/WebDevelopment/WordPressPlugin";
import RubyOnRails from "./pages/services/SoftwareDevelopment/WebDevelopment/RubyOnRails";
import WebApplication from "./pages/services/SoftwareDevelopment/WebDevelopment/WebApplication";
import WordPressSupport from "./pages/services/SoftwareDevelopment/WebDevelopment/WordPressSupport";
import JoomlaDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/JoomlaDevelopment";
import BootstrapDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/BootstrapDevelopment";
import WordPressTheme from "./pages/services/SoftwareDevelopment/WebDevelopment/WordPressTheme";
import ResponsiveWebDesign from "./pages/services/SoftwareDevelopment/WebDevelopment/ResponsiveWebDesign";
import WordPressDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/WordPressDevelopment";
import DjangoDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/DjangoDevelopment";
import UiUxDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/UiUxDevelopment";
import DotNetNukeDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/DotNetNukeDevelopment";
import ZendDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/ZendDevelopment";
import WebsiteMaintenance from "./pages/services/SoftwareDevelopment/WebDevelopment/WebsiteMaintenance";
import FlaskDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/FlaskDevelopment";
import AspNetDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/AspNetDevelopment";
import WebsiteMigration from "./pages/services/SoftwareDevelopment/WebDevelopment/WebsiteMigration";
import GatsbyDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/GatsbyDevelopment";
import WebSocketDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/WebSocketDevelopment";
import WireframeDesign from "./pages/services/SoftwareDevelopment/WebDevelopment/WireframeDesign";
import GolangDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/GolangDevelopment";
import OpenCartDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/OpenCartDevelopment";
import KenticoDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/KenticoDevelopment";
import DrupalDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/DrupalDevelopment";
import MobileWebsiteDesign from "./pages/services/SoftwareDevelopment/WebDevelopment/MobileWebsiteDesign";
import RiaDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/RiaDevelopment";
import SpaDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/SpaDevelopment";
import ParallaxDesign from "./pages/services/SoftwareDevelopment/WebDevelopment/ParallaxDesign";
import SitefinityDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/SitefinityDevelopment";
import EcommerceDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/EcommerceDevelopment";

{/* Service Now */ }
import ServiceNowServices from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowServices";
import ServiceNowConsulting from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowConsulting";
import HrServiceNow from "./pages/services/SoftwareDevelopment/ServiceNow/HrServiceNow";
import ServiceNowChange from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowChange";
import ServiceNowITOM from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowITOM";
import ServiceNowResourceManagement from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowResourceManagement";
import ServiceNowAppDevelopment from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowAppDevelopment";
import ServiceNowCSM from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowCSM";
import ServiceNowMigration from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowMigration";
import ServiceNowITBM from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowITBM";
import ServiceNowIntegration from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowIntegration";
import ServiceNowSecOps from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowSecOps";
import ServiceNowITSM from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowITSM";


{/* Azure */ }
import AzureConsulting from "./pages/services/SoftwareDevelopment/Azure/AzureConsulting";
import AzureManagedServices from "./pages/services/SoftwareDevelopment/Azure/AzureManagedServices";
import AzureIntegration from "./pages/services/SoftwareDevelopment/Azure/AzureIntegration";
import AzureCloudConsulting from "./pages/services/SoftwareDevelopment/Azure/AzureCloudConsulting";
import AzureMigration from "./pages/services/SoftwareDevelopment/Azure/AzureMigration";
import AzureApplicationDevelopment from "./pages/services/SoftwareDevelopment/Azure/AzureApplicationDevelopment";
import AzureSynapseAnalytics from "./pages/services/SoftwareDevelopment/Azure/AzureSynapseAnalytics";


{/* Microsoft Services */ }
import MicrosoftConsulting from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftConsulting";
import MicrosoftPowerAutomate from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftPowerAutomate";
import SharePointDevelopment from "./pages/services/SoftwareDevelopment/MicrosoftServices/SharePointDevelopment";
import MicrosoftSharePoint from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftSharePoint";
import PowerAppsConsulting from "./pages/services/SoftwareDevelopment/MicrosoftServices/PowerAppsConsulting";
import PowerBIServices from "./pages/services/SoftwareDevelopment/MicrosoftServices/PowerBIServices";
import MicrosoftDynamics from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftDynamics";
import MicrosoftDynamicsCustomization from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftDynamicsCustomization";
import MicrosoftOffice365 from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftOffice365";
import MicrosoftStackDevelopment from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftStackDevelopment";
import MicrosoftTeamsConsulting from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftTeamsConsulting";

{/* E-Commerce */ }
import ECommerceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/ECommerceDevelopment";
import ThreeDCartDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/3DCartDevelopment";
import PrestashopDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/PrestashopDevelopment";
import VirtuemartDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/VirtuemartDevelopment";
import BigCommerceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/BigCommerceDevelopment";
import ShopifyDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/ShopifyDevelopment";
import WooCommerceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/WooCommerceDevelopment";
import CsCartDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/CsCartDevelopment";
import SpreeCommerceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/SpreeCommerceDevelopment";
import OsCommerceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/OsCommerceDevelopment";
import SquarespaceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/SquarespaceDevelopment";

{/* Cloud Counsulting */ }
import CloudConsulting from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudConsulting";
import HybridCloudServices from "./pages/services/SoftwareDevelopment/CloudConsulting/HybridCloudServices";
import MultiCloudManagement from "./pages/services/SoftwareDevelopment/CloudConsulting/MultiCloudManagement";
import MultiCloudServices from "./pages/services/SoftwareDevelopment/CloudConsulting/MultiCloudServices";
import CloudBusinessTransformation from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudBusinessTransformation";
import AlibabaCloudServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AlibabaCloudServices";
import IbmCloudManagedServices from "./pages/services/SoftwareDevelopment/CloudConsulting/IbmCloudManagedServices";
import CloudSecurityServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudSecurityServices";
import CloudIntegrationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudIntegrationServices";
import ManagedApplicationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/ManagedApplicationServices";
import AlexaSkillDevelopmentServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AlexaSkillDevelopmentServices";
import CloudMonitoringServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudMonitoringServices";
import BSSTransformationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/BSSTransformationServices";
import AWSApplicationIntegrationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AWSApplicationIntegrationServices";
import CloudApplicationDevelopmentServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudApplicationDevelopmentServices";
import ContainerizationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/ContainerizationServices";
import CloudComputingApplicationDevelopmentServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudComputingApplicationDevelopmentServices";
import Office365SetupAndMigrationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/Office365SetupAndMigrationServices";
import AmazonRedshiftServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AmazonRedshiftServices";
import DataWarehouseServices from "./pages/services/SoftwareDevelopment/CloudConsulting/DataWarehouseServices";
import CloudMigrationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudMigrationServices";
import CloudOptimizationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudOptimizationServices";
import AdobeCreativeCloudServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AdobeCreativeCloudServices";
import DigitalWorkplaceServices from "./pages/services/SoftwareDevelopment/CloudConsulting/DigitalWorkplaceServices";
import CloudNativeAppDevelopmentServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudNativeAppDevelopmentServices";
import OracleCloudServices from "./pages/services/SoftwareDevelopment/CloudConsulting/OracleCloudServices";
import AmazonWebServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AmazonWebServices";
import CloudEnablementServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudEnablementServices";
import SnowflakeDataWarehouseServices from "./pages/services/SoftwareDevelopment/CloudConsulting/SnowflakeDataWarehouseServices";
import InfrastructureAsAService from "./pages/services/SoftwareDevelopment/CloudConsulting/InfrastructureAsAService";
import ToktivBusinessVoip from "./pages/services/SoftwareDevelopment/CloudConsulting/ToktivBusinessVoip";
import HybridInfrastructureManagedServices from "./pages/services/SoftwareDevelopment/CloudConsulting/HybridInfrastructureManagedServices";
import PlatformAsAService from "./pages/services/SoftwareDevelopment/CloudConsulting/PlatformAsAService";
import VirtualDesktopInfrastructure from "./pages/services/SoftwareDevelopment/CloudConsulting/VirtualDesktopInfrastructure";

{/* IT Staffing */ }
import ITStaffingServices from "./pages/services/SoftwareDevelopment/ITStaffing/ITStaffingServices";
import HireAngularDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireAngularDevelopers";
import ITStaffingForWordPress from "./pages/services/SoftwareDevelopment/ITStaffing/ITStaffingForWordPress";
import HireMaximoDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireMaximoDevelopers";
import HireNodeJSDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireNodeJSDevelopers";
import ITStaffingForDrupal from "./pages/services/SoftwareDevelopment/ITStaffing/ITStaffingForDrupal";
import HireSpringBootDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireSpringBootDevelopers";
import HireOpenCartDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireOpenCartDevelopers";
import ITStaffingForWebDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/ITStaffingForWebDevelopers";
import HireElixirDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireElixirDevelopers";
import ITStaffingForLAMP from "./pages/services/SoftwareDevelopment/ITStaffing/ITStaffingForLAMP";
import DedicatedPHPDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/DedicatedPHPDevelopers";
import HireKonyAppDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireKonyAppDevelopers";
import JavaStaffing from "./pages/services/SoftwareDevelopment/ITStaffing/JavaStaffing";
import MagentoDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/MagentoDevelopers";
import ExpressJSDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/ExpressJSDevelopers";
import MicrosoftStaffing from "./pages/services/SoftwareDevelopment/ITStaffing/MicrosoftStaffing";
import ARDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/ARDevelopers";
import GolangDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/GolangDevelopers";
import DigitalMarketingStaffing from "./pages/services/SoftwareDevelopment/ITStaffing/DigitalMarketingStaffing";
import PythonDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/PythonDevelopers";
import SvelteJSDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/SvelteJSDevelopers";
import AndroidDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/AndroidDevelopers";
import IosDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/IosDevelopers";
import NuxtJSDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/NuxtJSDevelopers";
import WebDesignStaffing from "./pages/services/SoftwareDevelopment/ITStaffing/WebDesignStaffing";
import IpadAppDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/IpadAppDevelopers";
import ReactJSDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/ReactJSDevelopers";
import MobileAppDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/MobileAppDevelopers";
import BlockchainDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/BlockchainDevelopers";
import FlutterDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/FlutterDevelopers";
import OracleDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/OracleDevelopers";
import SwiftDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/SwiftDevelopers";
import OracleDBA from "./pages/services/SoftwareDevelopment/ITStaffing/OracleDBA";
import IPhoneAppDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/IPhoneAppDevelopers";


{/* Software Testing */ }
import SoftwareTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoftwareTesting";
import RegressionTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/RegressionTestingServices";
import SoftwareTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoftwareTestingServices";
import NetworkTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/NetworkTestingServices";
import TestingKnowledgeManagementServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/TestingKnowledgeManagementServices";
import AcceptanceTestDrivenDevelopmentServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/AcceptanceTestDrivenDevelopmentServices";
import ContinuousIntegrationServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/ContinuousIntegrationServices";
import ReliabilityTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/ReliabilityTestingServices";
import IndependentTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/IndependentTestingServices";
import ManagedTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/ManagedTestingServices";
import CompatibilityTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/CompatibilityTestingServices";
import BetaTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/BetaTestingServices";
import StressTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/StressTestingServices";
import MainframeTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/MainframeTestingServices";
import ManagedCrowdTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/ManagedCrowdTestingServices";
import DevOpsTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/DevOpsTestingServices";
import ComplianceTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/ComplianceTestingServices";
import NetworkPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/NetworkPenetrationTesting";
import SoaWebServicesTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoaWebServicesTesting";
import LocalizationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/LocalizationTesting";
import SoaTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoaTesting";
import TestAutomationServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/TestAutomationServices";
import LoadTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/LoadTesting";
import SeleniumTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SeleniumTesting";
import TypesOfSoftwareTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/TypesOfSoftwareTesting";
import VolumeTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/VolumeTesting";
import RobotFrameworkTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/RobotFrameworkTesting";
import IndustryTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/IndustryTestingServices";
import RecoveryTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/RecoveryTesting";
import BillingTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/BillingTesting";
import ECommerceTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/ECommerceTesting";
import InstallationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/InstallationTesting";
import EDITesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/EDITesting";
import EmbeddedTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/EmbeddedTesting";
import ETLTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/ETLTesting";
import UsabilityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/UsabilityTesting";
import MobileApplicationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/MobileApplicationTesting";
import SoakTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoakTesting";
import OutcomeBasedTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/OutcomeBasedTesting";
import ComputerSystemValidation from "./pages/services/SoftwareDevelopment/SoftwareTesting/ComputerSystemValidation";
import PerformanceTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/PerformanceTesting";
import HappyPathTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/HappyPathTesting";
import DesktopApplicationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/DesktopApplicationTesting";
import ScalabilityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/ScalabilityTesting";
import APITesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/APITesting";
import MobileTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/MobileTesting";
import SAPTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SAPTesting";
import WebsiteTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/WebsiteTesting";
import ExternalPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/ExternalPenetrationTesting";
import BackwardCompatibilityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/BackwardCompatibilityTesting";
import CrmTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/CrmTestingServices";
import InternalNetworkPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/InternalNetworkPenetrationTesting";
import BrowserCompatibilityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/BrowserCompatibilityTesting";
import SmokeTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/SmokeTestingServices";
import FirewallPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/FirewallPenetrationTesting";
import RiskManagementTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/RiskManagementTesting";
import SystemTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/SystemTestingServices";
import PenetrationTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/PenetrationTestingServices";
import CyberSecurityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/CyberSecurityTesting";
import WebServicesTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/WebServicesTesting";
import TestEnvironmentManagement from "./pages/services/SoftwareDevelopment/SoftwareTesting/TestEnvironmentManagement";
import GUITesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/GUITesting";
import CloudTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/CloudTesting";
import TestProcessImprovement from "./pages/services/SoftwareDevelopment/SoftwareTesting/TestProcessImprovement";
import GameTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/GameTesting";
import UnitTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/UnitTesting";
import SecurityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SecurityTesting";
import VAPTServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/VAPTServices";
import IntegrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/IntegrationTesting";
import GDPRCompliance from "./pages/services/SoftwareDevelopment/SoftwareTesting/GDPRCompliance";
import SocialEngineering from "./pages/services/SoftwareDevelopment/SoftwareTesting/SocialEngineering";
import SanityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SanityTesting";
import SoftwareTestingProjects from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoftwareTestingProjects";
import WirelessPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/WirelessPenetrationTesting";
import ExploratoryTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/ExploratoryTesting";
import ManagedQualityAssurance from "./pages/services/SoftwareDevelopment/SoftwareTesting/ManagedQualityAssurance";
import WebAppPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/WebAppPenetrationTesting";
import UserAcceptanceTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/UserAcceptanceTesting";


{/* IMS */ }
import ITInfrastructureManagement from "./pages/services/SoftwareDevelopment/IMS/ITInfrastructureManagement";
import CybersecurityCountermeasures from "./pages/services/SoftwareDevelopment/IMS/CybersecurityCountermeasures";
import ManagedVirtualizationServices from "./pages/services/SoftwareDevelopment/IMS/ManagedVirtualizationServices";
import ApplicationPerformanceMonitoring from "./pages/services/SoftwareDevelopment/IMS/ApplicationPerformanceMonitoring";
import ITRiskAndSecurity from "./pages/services/SoftwareDevelopment/IMS/ITRiskAndSecurity";
import ManagedStorageServices from "./pages/services/SoftwareDevelopment/IMS/ManagedStorageServices";
import SecurityRiskAssessment from "./pages/services/SoftwareDevelopment/IMS/SecurityRiskAssessment";
import CybersecurityDueDiligence from "./pages/services/SoftwareDevelopment/IMS/CybersecurityDueDiligence";
import ManagedBackupServices from "./pages/services/SoftwareDevelopment/IMS/ManagedBackupServices";
import VulnerabilityManagement from "./pages/services/SoftwareDevelopment/IMS/VulnerabilityManagement";
import CyberSecurityAssessment from "./pages/services/SoftwareDevelopment/IMS/CyberSecurityAssessment";
import ITAuditServices from "./pages/services/SoftwareDevelopment/IMS/ITAuditServices";
import Windows365Consulting from "./pages/services/SoftwareDevelopment/IMS/Windows365Consulting";
import RemoteMonitoring from "./pages/services/SoftwareDevelopment/IMS/RemoteMonitoring";
import ApplicationManagedServices from "./pages/services/SoftwareDevelopment/IMS/ApplicationManagedServices";
import Windows365ChangeManagement from "./pages/services/SoftwareDevelopment/IMS/Windows365ChangeManagement";
import DigitalForensics from "./pages/services/SoftwareDevelopment/IMS/DigitalForensics";
import NetworkMonitoring from "./pages/services/SoftwareDevelopment/IMS/NetworkMonitoring";
import Windows365 from "./pages/services/SoftwareDevelopment/IMS/Windows365";
import DataCenterServices from "./pages/services/SoftwareDevelopment/IMS/DataCenterServices";
import SOCService from "./pages/services/SoftwareDevelopment/IMS/SOCService";
import Windows365Migration from "./pages/services/SoftwareDevelopment/IMS/Windows365Migration";
import EnterpriseSecurity from "./pages/services/SoftwareDevelopment/IMS/EnterpriseSecurity";
import NOCMonitoringServices from "./pages/services/SoftwareDevelopment/IMS/NOCMonitoringServices";
import DigitalWorkforce from "./pages/services/SoftwareDevelopment/IMS/DigitalWorkforce";
import ITHelpDesk from "./pages/services/SoftwareDevelopment/IMS/ITHelpDesk";
import CyberThreat from "./pages/services/SoftwareDevelopment/IMS/CyberThreat";
import TerraformServices from "./pages/services/SoftwareDevelopment/IMS/TerraformServices";
import ActiveDirectory from "./pages/services/SoftwareDevelopment/IMS/ActiveDirectory";
import DataCenterMiddleware from "./pages/services/SoftwareDevelopment/IMS/DataCenterMiddleware";
import Kubernetes from "./pages/services/SoftwareDevelopment/IMS/Kubernetes";
import ManagedSIEM from "./pages/services/SoftwareDevelopment/IMS/ManagedSIEM";
import NetworkInfrastructure from "./pages/services/SoftwareDevelopment/IMS/NetworkInfrastructure";
import DataRecoveryServices from "./pages/services/SoftwareDevelopment/IMS/DataRecoveryServices";
import InfrastructureApplicationSupportServices from "./pages/services/SoftwareDevelopment/IMS/InfrastructureApplicationSupportServices";
import CompromiseAssessmentServices from "./pages/services/SoftwareDevelopment/IMS/CompromiseAssessmentServices";
import DigitalCommerceServices from "./pages/services/SoftwareDevelopment/IMS/DigitalCommerceServices";
import ServerMonitoringServices from "./pages/services/SoftwareDevelopment/IMS/ServerMonitoringServices";
import PCIComplianceServices from "./pages/services/SoftwareDevelopment/IMS/PCIComplianceServices";
import Windows365SetupServices from "./pages/services/SoftwareDevelopment/IMS/Windows365SetupServices";
import ManagedITServices from "./pages/services/SoftwareDevelopment/IMS/ManagedITServices";
import QuantumComputingServices from "./pages/services/SoftwareDevelopment/IMS/QuantumComputingServices";
import SugarCRMDevelopmentServices from "./pages/services/SoftwareDevelopment/IMS/SugarCRMDevelopmentServices";
import ManagedITServicesForInsurance from "./pages/services/SoftwareDevelopment/IMS/ManagedITServicesForInsurance";
import VirtualCTOServices from "./pages/services/SoftwareDevelopment/IMS/VirtualCTOServices";
import CIOAdvisoryServices from "./pages/services/SoftwareDevelopment/IMS/CIOAdvisoryServices";
import IAMServices from "./pages/services/SoftwareDevelopment/IMS/IAMServices";
import CyberSecurityResilienceServices from "./pages/services/SoftwareDevelopment/IMS/CyberSecurityResilienceServices";
import ServerManagementServices from "./pages/services/SoftwareDevelopment/IMS/ServerManagementServices";


{/* Enterprise */ }
import EnterpriseSoftwareSolutions from "./pages/services/SoftwareDevelopment/Enterprise/EnterpriseSoftwareSolutions";
import DevSecOpsServices from "./pages/services/SoftwareDevelopment/Enterprise/DevSecOpsServices";
import WorkdayServices from "./pages/services/SoftwareDevelopment/Enterprise/WorkdayServices";
import MetaverseEnterpriseSolutions from "./pages/services/SoftwareDevelopment/Enterprise/MetaverseEnterpriseSolutions";
import SAPProductLifecycleServices from "./pages/services/SoftwareDevelopment/Enterprise/SAPProductLifecycleServices";
import SalesforceApplicationDevelopment from "./pages/services/SoftwareDevelopment/Enterprise/SalesforceApplicationDevelopment";
import UnifiedDataManagement from "./pages/services/SoftwareDevelopment/Enterprise/UnifiedDataManagement";
import SAPHybrisCommerceSolutions from "./pages/services/SoftwareDevelopment/Enterprise/SAPHybrisCommerceSolutions";
import ITServiceContinuityManagement from "./pages/services/SoftwareDevelopment/Enterprise/ITServiceContinuityManagement";
import DigitalQueryAssistantServices from "./pages/services/SoftwareDevelopment/Enterprise/DigitalQueryAssistantServices";
import TwilioConsultingServices from "./pages/services/SoftwareDevelopment/Enterprise/TwilioConsultingServices";
import SAPHANACloudServices from "./pages/services/SoftwareDevelopment/Enterprise/SAPHANACloudServices";
import MicroservicesArchitectureServices from "./pages/services/SoftwareDevelopment/Enterprise/MicroservicesArchitectureServices";
import SAPSupportServices from "./pages/services/SoftwareDevelopment/Enterprise/SAPSupportServices";
import TwilioFlexServices from "./pages/services/SoftwareDevelopment/Enterprise/TwilioFlexServices";
import ApplicationPortfolioServices from "./pages/services/SoftwareDevelopment/Enterprise/ApplicationPortfolioServices";
import CustomerManagementServices from "./pages/services/SoftwareDevelopment/Enterprise/CustomerManagementServices";
import DevOpsAutomationServices from "./pages/services/SoftwareDevelopment/Enterprise/DevOpsAutomationServices";
import DevOpsServices from "./pages/services/SoftwareDevelopment/Enterprise/DevOpsServices";
import DigitalMailroomServices from "./pages/services/SoftwareDevelopment/Enterprise/DigitalMailroomServices";
import ERPDevelopmentServices from "./pages/services/SoftwareDevelopment/Enterprise/ERPDevelopmentServices";
import ITConsultingServices from "./pages/services/SoftwareDevelopment/Enterprise/ITConsultingServices";
import SAPConsultingServices from "./pages/services/SoftwareDevelopment/Enterprise/SAPConsultingServices";
import SIPTrunkingServices from "./pages/services/SoftwareDevelopment/Enterprise/SIPTrunkingServices";
import TwilioIntegrationServices from "./pages/services/SoftwareDevelopment/Enterprise/TwilioIntegrationServices";
import CRMDevelopmentServices from "./pages/services/SoftwareDevelopment/Enterprise/CRMDevelopmentServices";
import EnterpriseApplicationServices from "./pages/services/SoftwareDevelopment/Enterprise/EnterpriseApplicationServices";
import EnterpriseMobilitySolutions from "./pages/services/SoftwareDevelopment/Enterprise/EnterpriseMobilitySolutions";
import MaximoDevelopmentServices from "./pages/services/SoftwareDevelopment/Enterprise/MaximoDevelopmentServices";
import SAPApplicationDevelopmentServices from "./pages/services/SoftwareDevelopment/Enterprise/SAPApplicationDevelopmentServices";
import SAPBusinessOneServices from "./pages/services/SoftwareDevelopment/Enterprise/SAPBusinessOneServices";
import SalesforceAutomationServices from "./pages/services/SoftwareDevelopment/Enterprise/SalesforceAutomationServices";
import SoftwareAssetManagementServices from "./pages/services/SoftwareDevelopment/Enterprise/SoftwareAssetManagementServices";
import SpreadsheetValidationServices from "./pages/services/SoftwareDevelopment/Enterprise/SpreadsheetValidationServices";
import SupplyChainServices from "./pages/services/SoftwareDevelopment/Enterprise/SupplyChainServices";
import WebPortalServices from "./pages/services/SoftwareDevelopment/Enterprise/WebPortalServices";
import WorkflowAutomationServices from "./pages/services/SoftwareDevelopment/Enterprise/WorkflowAutomationServices";
import CRMConsultingServices from "./pages/services/SoftwareDevelopment/Enterprise/CRMConsultingServices";
import DigitalProcessAutomationServices from "./pages/services/SoftwareDevelopment/Enterprise/DigitalProcessAutomationServices";
import Dynamics365BusinessCentralServices from "./pages/services/SoftwareDevelopment/Enterprise/Dynamics365BusinessCentralServices";
import EnterpriseApplicationIntegrationServices from "./pages/services/SoftwareDevelopment/Enterprise/EnterpriseApplicationIntegrationServices";
import OracleConsultingServices from "./pages/services/SoftwareDevelopment/Enterprise/OracleConsultingServices";


{/* Technologies */ }
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment/Technologies/SoftwareDevelopment";
import BubbleAppDevelopment from "./pages/services/SoftwareDevelopment/Technologies/BubbleAppDevelopment";
import ExpressJSServices from "./pages/services/SoftwareDevelopment/Technologies/ExpressJSServices";
import JavascriptDevelopment from "./pages/services/SoftwareDevelopment/Technologies/JavascriptDevelopment";
import QtDevelopment from "./pages/services/SoftwareDevelopment/Technologies/QtDevelopment";
import SmartContractDevelopment from "./pages/services/SoftwareDevelopment/Technologies/SmartContractDevelopment";
import TableauDevelopmentServices from "./pages/services/SoftwareDevelopment/Technologies/TableauDevelopmentServices";
import TensorFlowDevelopment from "./pages/services/SoftwareDevelopment/Technologies/TensorFlowDevelopment";
import AngularDevelopment from "./pages/services/SoftwareDevelopment/Technologies/AngularDevelopment";
import CakePHPDevelopment from "./pages/services/SoftwareDevelopment/Technologies/CakePHPDevelopment";
import CreateJSServices from "./pages/services/SoftwareDevelopment/Technologies/CreateJSServices";
import NextJSDevelopment from "./pages/services/SoftwareDevelopment/Technologies/NextJSDevelopment";
import NuxtJsDevelopment from "./pages/services/SoftwareDevelopment/Technologies/NuxtJsDevelopment";
import ReactJSDevelopment from "./pages/services/SoftwareDevelopment/Technologies/ReactJSDevelopment";
import SilverlightDevelopment from "./pages/services/SoftwareDevelopment/Technologies/SilverlightDevelopment";
import SymfonyDevelopment from "./pages/services/SoftwareDevelopment/Technologies/SymfonyDevelopment";
import BackboneJSDevelopment from "./pages/services/SoftwareDevelopment/Technologies/BackboneJSDevelopment";
import EmberJSDevelopment from "./pages/services/SoftwareDevelopment/Technologies/EmberJSDevelopment";
import KnockoutJSDevelopment from "./pages/services/SoftwareDevelopment/Technologies/KnockoutJSDevelopment";
import MERNStackDevelopment from "./pages/services/SoftwareDevelopment/Technologies/MERNStackDevelopment";
import MagentoDevelopment from "./pages/services/SoftwareDevelopment/Technologies/MagentoDevelopment";
import MeteorJSDevelopment from "./pages/services/SoftwareDevelopment/Technologies/MeteorJSDevelopment";
import NetMVCDevelopment from "./pages/services/SoftwareDevelopment/Technologies/NetMVCDevelopment";
import NodeJSDevelopment from "./pages/services/SoftwareDevelopment/Technologies/NodeJSDevelopment";
import StellarDevelopment from "./pages/services/SoftwareDevelopment/Technologies/StellarDevelopment";
import MEANStackDevelopment from "./pages/services/SoftwareDevelopment/Technologies/MEANStackDevelopment";
import NetDevelopment from "./pages/services/SoftwareDevelopment/Technologies/NetDevelopment";
// import SenchaDevelopment from "./pages/services/SoftwareDevelopment/Technologies/SenchaDevelopment";
// import SpringBootDevelopment from "./pages/services/SoftwareDevelopment/Technologies/SpringBootDevelopment";
// import TezosDevelopment from "./pages/services/SoftwareDevelopment/Technologies/TezosDevelopment";
import UrbanDevelopmentServices from "./pages/services/Engineering-services/Infrastructure-Engineering/UrbanDevelopmentServices";
import DrainageDesignServices from "./pages/services/Engineering-services/Infrastructure-Engineering/DrainageDesignServices";
import GISServices from "./pages/services/Engineering-services/Infrastructure-Engineering/GISServices";
import GISAndCADDServices from "./pages/services/Engineering-services/Infrastructure-Engineering/GISAndCADDServices";
import UndergroundUtilityMapping from "./pages/services/Engineering-services/Infrastructure-Engineering/UndergroundUtilityMapping";
import HighwayEngineering from "./pages/services/Engineering-services/Infrastructure-Engineering/HighwayEngineering";
import PublicHealthEngineering from "./pages/services/Engineering-services/Infrastructure-Engineering/PublicHealthEngineering";
import CorridorMapping from "./pages/services/Engineering-services/Infrastructure-Engineering/CorridorMapping";
import ConstructionSequencing from "./pages/services/Engineering-services/Infrastructure-Engineering/ConstructionSequencing";
import InfrastructurePlanning from "./pages/services/Engineering-services/Infrastructure-Engineering/InfrastructurePlanning";
import GeotechnicalEngineering from "./pages/services/Engineering-services/Infrastructure-Engineering/GeotechnicalEngineering";
import ConstructionPhaseServices from "./pages/services/Engineering-services/Infrastructure-Engineering/ConstructionPhaseServices";
import EnergyAuditServices from "./pages/services/Engineering-services/Infrastructure-Engineering/EnergyAuditServices";
import PHEDesignServices from "./pages/services/Engineering-services/Infrastructure-Engineering/PHEDesignServices";
import LightingControlServices from "./pages/services/Engineering-services/Electrical-Engineering/LightingControlServices";
import ControlSystemServices from "./pages/services/Engineering-services/Electrical-Engineering/ControlSystemServices";
import VLSIDesignServices from "./pages/services/Engineering-services/Electrical-Engineering/VLSIDesignServices";
import HardwareDesignServices from "./pages/services/Engineering-services/Electrical-Engineering/HardwareDesignServices";
import ElectricalInstrumentationServices from "./pages/services/Engineering-services/Electrical-Engineering/ElectricalInstrumentationServices";
import ElectricalSystemsDesign from "./pages/services/Engineering-services/Electrical-Engineering/ElectricalSystemsDesign";
import ElectricalDesignLayout from "./pages/services/Engineering-services/Electrical-Engineering/ElectricalDesignLayout";
import PCBDesignServices from "./pages/services/Engineering-services/Electrical-Engineering/PCBDesignServices";
import SolarPanelLayout from "./pages/services/Engineering-services/Electrical-Engineering/SolarPanelLayout";
import FpgaDesignServices from "./pages/services/Engineering-services/Electrical-Engineering/FpgaDesignServices";
import EmbeddedSystemDesign from "./pages/services/Engineering-services/Electrical-Engineering/EmbeddedSystemDesign";
import ElectricalSchematicDrawing from "./pages/services/Engineering-services/Electrical-Engineering/ElectricalSchematicDrawing";
import ElectronicCircuitDesign from "./pages/services/Engineering-services/Electrical-Engineering/ElectronicCircuitDesign";
import EnergyModelingServices from "./pages/services/Engineering-services/Electrical-Engineering/EnergyModelingServices";
import ElectricalGroundingServices from "./pages/services/Engineering-services/Electrical-Engineering/ElectricalGroundingServices";
import ElectricalDraftingServices from "./pages/services/Engineering-services/Electrical-Engineering/ElectricalDraftingServices";
import PcbReverseEngineering from "./pages/services/Engineering-services/Electrical-Engineering/PcbReverseEngineering";
import ElectricalDrafting from "./pages/services/Engineering-services/Electrical-Engineering/ElectricalDrafting";
import ElectricalCalibrationServices from "./pages/services/Engineering-services/Electrical-Engineering/ElectricalCalibrationServices";
import MechanicalBIMServices from "./pages/services/Engineering-services/Bim/MechanicalBIMServices";
import BIM5DCostEstimation from "./pages/services/Engineering-services/Bim/BIM5DCostEstimation";
import BIMComponentCreation from "./pages/services/Engineering-services/Bim/BIMComponentCreation";
import LaserScanToBIM from "./pages/services/Engineering-services/Bim/LaserScanToBIM";
import AsBuiltBIM from "./pages/services/Engineering-services/Bim/AsBuiltBIM";
import BIMAppDevelopment from "./pages/services/Engineering-services/Bim/BIMAppDevelopment";
import BIMModelAuditing from "./pages/services/Engineering-services/Bim/BIMModelAuditing";
import BIMExecutionPlanning from "./pages/services/Engineering-services/Bim/BIMExecutionPlanning";
import BIMClashDetection from "./pages/services/Engineering-services/Bim/BIMClashDetection";
import BIM6DModeling from "./pages/services/Engineering-services/Bim/BIM6DModeling";
import BIMCoordination from "./pages/services/Engineering-services/Bim/BIMCoordination";
import BIMQuantityEstimation from "./pages/services/Engineering-services/Bim/BIMQuantityEstimation";
import BIMVRServices from "./pages/services/Engineering-services/Bim/BIMVRServices";
import BIMFacilityManagement from "./pages/services/Engineering-services/Bim/BIMFacilityManagement";
import StructuralBIM from "./pages/services/Engineering-services/Bim/StructuralBIM";
import CivilInfrastructureBIM from "./pages/services/Engineering-services/Bim/CivilInfrastructureBIM";
import CivilBIMServices from "./pages/services/Engineering-services/Bim/CivilBIMServices";
import ArchitecturalBIMServices from "./pages/services/Engineering-services/Bim/ArchitecturalBIMServices";
import ElectricalBIMServices from "./pages/services/Engineering-services/Bim/ElectricalBIMServices";
import StructuralBIMServices from "./pages/services/Engineering-services/Bim/StructuralBIMServices";
import BIMEnergyModelingServices from "./pages/services/Engineering-services/Bim/BIMEnergyModelingServices";
import BIMLeanConstructionServices from "./pages/services/Engineering-services/Bim/BIMLeanConstructionServices";
import BIM4DModelingServices from "./pages/services/Engineering-services/Bim/BIM4DModelingServices";
import CADServices from "./pages/services/Engineering-services/CAD-Services/CADServices";
import CADConversionServices from "./pages/services/Engineering-services/CAD-Services/CADConversionServices";
import AutoCADDraftingServices from "./pages/services/Engineering-services/CAD-Services/AutoCADDraftingServices";
import MechanicalCADDraftingPage from "./pages/services/Engineering-services/CAD-Services/MechanicalCADDraftingPage";
import AutoCADConversion from "./pages/services/Engineering-services/CAD-Services/AutoCADConversion";
import MatterportToCAD from "./pages/services/Engineering-services/CAD-Services/MatterportToCAD";
import LegacyConversion from "./pages/services/Engineering-services/CAD-Services/LegacyConversion";
import PaperToCAD from "./pages/services/Engineering-services/CAD-Services/PaperToCAD";
import CADAutomation from "./pages/services/Engineering-services/CAD-Services/CADAutomation";
import CADMigration from "./pages/services/Engineering-services/CAD-Services/CADMigration";
import PrecastDetailing from "./pages/services/Engineering-services/Structural-engineering-services/PrecastDetailing";
import SkidDesign from "./pages/services/Engineering-services/Structural-engineering-services/SkidDesign";
import HighRiseDesign from "./pages/services/Engineering-services/Structural-engineering-services/HighRiseDesign";
import IndustrialStructuresDesign from "./pages/services/Engineering-services/Structural-engineering-services/IndustrialStructuresDesign";
import CustomHomeDesign from "./pages/services/Engineering-services/Structural-engineering-services/CustomHomeDesign";
import RetrofittingServices from "./pages/services/Engineering-services/Structural-engineering-services/RetrofittingServices";
import PeerReviewServices from "./pages/services/Engineering-services/Structural-engineering-services/PeerReviewServices";
import StructuralDesign from "./pages/services/Engineering-services/Structural-engineering-services/StructuralDesign";
import StructuralFabrication from "./pages/services/Engineering-services/Structural-engineering-services/StructuralFabrication";
import SteelDetailing from "./pages/services/Engineering-services/Structural-engineering-services/SteelDetailing";
import StructuralShopDrawing from "./pages/services/Engineering-services/Structural-engineering-services/StructuralShopDrawing";
import Structural3DModeling from "./pages/services/Engineering-services/Structural-engineering-services/Structural3DModeling";
import RebarDetailing from "./pages/services/Engineering-services/Structural-engineering-services/RebarDetailing";
import DroneMappingServices from "./pages/services/Engineering-services/Civil-Engineering/DroneMappingServices";
import ContourMappingServices from "./pages/services/Engineering-services/Civil-Engineering/ContourMappingServices";
import ResidentialDrainageDesign from "./pages/services/Engineering-services/Civil-Engineering/ResidentialDrainageDesign";
import ConstructionGADrawings from "./pages/services/Engineering-services/Civil-Engineering/ConstructionGADrawings";
import HVACDesignServices from "./pages/services/Engineering-services/Civil-Engineering/HVACDesignServices";
import MEPDesignServices from "./pages/services/Engineering-services/Civil-Engineering/MEPDesignServices";
import RemoteDraftingServices from "./pages/services/Engineering-services/Civil-Engineering/RemoteDraftingServices";
import LandSurveyingServices from "./pages/services/Engineering-services/Civil-Engineering/LandSurveyingServices";
import GeospatialServices from "./pages/services/Engineering-services/Civil-Engineering/GeospatialServices";
import PlanimetricMapping from "./pages/services/Engineering-services/Civil-Engineering/PlanimetricMapping";
import OrthophotoProduction from "./pages/services/Engineering-services/Civil-Engineering/OrthophotoProduction";
import TopographicMapping from "./pages/services/Engineering-services/Civil-Engineering/TopographicMapping";
import PhotogrammetricServices from "./pages/services/Engineering-services/Civil-Engineering/PhotogrammetricServices";
import DigitalElevationModeling from "./pages/services/Engineering-services/Civil-Engineering/DigitalElevationModeling";
import TerrainModelingServices from "./pages/services/Engineering-services/Civil-Engineering/TerrainModelingServices";
import LiDARMappingServices from "./pages/services/Engineering-services/Civil-Engineering/LiDARMappingServices";
import GIsSurveyingServices from "./pages/services/Engineering-services/Civil-Engineering/GIsSurveyingServices";
import CadastralMappingServices from "./pages/services/Engineering-services/Civil-Engineering/CadastralMappingServices";
import ThreeDCoordinationServices from "./pages/services/Engineering-services/Civil-Engineering/ThreeDCoordinationServices";
import CivilInformationModelingServices from "./pages/services/Engineering-services/Civil-Engineering/CivilInformationModelingServices";
import VirtualConstructionServices from "./pages/services/Engineering-services/Civil-Engineering/VirtualConstructionServices";
import ConstructionScheduling from "./pages/services/Engineering-services/Civil-Engineering/ConstructionScheduling";
import Simulation5D from "./pages/services/Engineering-services/Civil-Engineering/Simulation5D";
import Simulation4D from "./pages/services/Engineering-services/Civil-Engineering/Simulation4D";
import ContractorSupport from "./pages/services/Engineering-services/Civil-Engineering/ContractorSupport";
import QualityAssurancePage from "./pages/services/Engineering-services/Civil-Engineering/QualityAssurancePage";
import TrafficEngineering from "./pages/services/Engineering-services/Civil-Engineering/TrafficEngineering";
import GeothermalEngineering from "./pages/services/Engineering-services/Civil-Engineering/GeothermalEngineering";
import DigitalTwinImplementation from "./pages/services/Engineering-services/Civil-Engineering/DigitalTwinImplementation";
import PlumbingDesignServices from "./pages/services/Engineering-services/Civil-Engineering/PlumbingDesignServices";
import QuantityTakeoffServices from "./pages/services/Engineering-services/Civil-Engineering/QuantityTakeoffServices";
import StormwaterManagement from "./pages/services/Engineering-services/Civil-Engineering/StormwaterManagement";
import IndoorMappingServices from "./pages/services/Engineering-services/Civil-Engineering/IndoorMappingServices";
import RemoteSensingServices from "./pages/services/Engineering-services/Civil-Engineering/RemoteSensingServices";
import DroneSurveyServices from "./pages/services/Engineering-services/Civil-Engineering/DroneSurveyServices";
import ResilienceEngineeringServices from "./pages/services/Engineering-services/Civil-Engineering/ResilienceEngineeringServices";
import AerialMappingServices from "./pages/services/Engineering-services/Civil-Engineering/AerialMappingServices";
import Civil3DServices from "./pages/services/Engineering-services/Civil-Engineering/Civil3DServices";
import AugmentedRealityInterior from "./pages/services/Engineering-services/Architectural-services/AugmentedRealityInterior";
import MicroStationServices from "./pages/services/Engineering-services/Architectural-services/MicroStationServices";
import VacuumCastingServices from "./pages/services/Engineering-services/Architectural-services/VacuumCastingServices";
import DesignServices from "./pages/services/Engineering-services/Architectural-services/DesignServices";
import PipingSpoolDrawing from "./pages/services/Engineering-services/Architectural-services/PipingSpoolDrawing";
import RetailVisualMerchandising from "./pages/services/Engineering-services/Architectural-services/RetailVisualMerchandising";
import ArchitecturalWalkthrough from "./pages/services/Engineering-services/Architectural-services/ArchitecturalWalkthrough";
import TechnicalDrawingServices from "./pages/services/Engineering-services/Architectural-services/TechnicalDrawingServices";
import VirtualStagingServices from "./pages/services/Engineering-services/Architectural-services/VirtualStagingServices";
import LandscapeDesignServices from "./pages/services/Engineering-services/Architectural-services/LandscapeDesignServices";
import RetailSpaceDesignServices from "./pages/services/Engineering-services/Architectural-services/RetailSpaceDesignServices";
import FurnitureModelingServices from "./pages/services/Engineering-services/Architectural-services/FurnitureModelingServices";
import Architectural3DServices from "./pages/services/Engineering-services/Architectural-services/Architectural3DServices";
import FloorPlan3DServices from "./pages/services/Engineering-services/Architectural-services/FloorPlan3DServices";
import ThreeDPrintingServices from "./pages/services/Engineering-services/Architectural-services/ThreeDPrintingServices";
import ArchitecturalDraftingServices from "./pages/services/Engineering-services/Architectural-services/ArchitecturalDraftingServices";
import MillworkDraftingServices from "./pages/services/Engineering-services/Architectural-services/MillworkDraftingServices";
import SketchUpServices from "./pages/services/Engineering-services/Architectural-services/SketchUpServices";
import PointCloudServices from "./pages/services/Engineering-services/Architectural-services/PointCloudServices";
import ParametricModelingPage from "./pages/services/Engineering-services/Architectural-services/ParametricModelingPage";
import CabinetDrawingServices from "./pages/services/Engineering-services/Architectural-services/CabinetDrawingServices";
import KitchenCabinetDesign from "./pages/services/Engineering-services/Architectural-services/KitchenCabinetDesign";
import RevitModeling from "./pages/services/Engineering-services/Architectural-services/RevitModeling";
import ConstructionSimulation from "./pages/services/Engineering-services/Architectural-services/ConstructionSimulation";
import FloorPlan2D from "./pages/services/Engineering-services/Architectural-services/FloorPlan2D";
import PresentationDrawingServices from "./pages/services/Engineering-services/Architectural-services/PresentationDrawingServices";
import ArchitecturalVisualizationServices from "./pages/services/Engineering-services/Architectural-services/ArchitecturalVisualizationServices";
import AugmentedRealityEngineering from "./pages/services/Engineering-services/Architectural-services/AugmentedRealityEngineering";
import PanoramaRendering from "./pages/services/Engineering-services/Architectural-services/PanoramaRendering";
import VirtualTours from "./pages/services/Engineering-services/Architectural-services/VirtualTours";
import MixedRealityServices from "./pages/services/Engineering-services/Architectural-services/MixedRealityServices";
import VirtualRealityServices from "./pages/services/Engineering-services/Architectural-services/VirtualRealityServices";
import SolidGeometryModeling from "./pages/services/Engineering-services/Architectural-services/SolidGeometryModeling";
import PresentationModeling from "./pages/services/Engineering-services/Architectural-services/PresentationModeling";
import BREPModeling from "./pages/services/Engineering-services/Architectural-services/BREPModeling";
import RealEstateRendering from "./pages/services/Engineering-services/Architectural-services/RealEstateRendering";
import IsometricDrawingServices from "./pages/services/Engineering-services/Architectural-services/IsometricDrawingServices";
import ArchitecturalModelMaking from "./pages/services/Engineering-services/Architectural-services/ArchitecturalModelMaking";
import FacadeEngineering from "./pages/services/Engineering-services/Architectural-services/FacadeEngineering";
import TelecomNetworkDrawings from "./pages/services/Engineering-services/Architectural-services/TelecomNetworkDrawings";
import InteriorRenderingServices from "./pages/services/Engineering-services/Architectural-services/InteriorRenderingServices";
import PhotorealisticRenderingServices from "./pages/services/Engineering-services/Architectural-services/PhotorealisticRenderingServices";
import BIMLODServices from "./pages/services/Engineering-services/Architectural-services/BIMLODServices";
import SkylightDetailingServices from "./pages/services/Engineering-services/Architectural-services/SkylightDetailingServices";
import ConstructionAdministrationServices from "./pages/services/Engineering-services/Architectural-services/ConstructionAdministrationServices";
import LeedConsultingServices from "./pages/services/Engineering-services/Architectural-services/LeedConsultingServices";
import AsBuiltDrawingServices from "./pages/services/Engineering-services/Architectural-services/AsBuiltDrawingServices";
import ConstructionDetailDrawingServices from "./pages/services/Engineering-services/Architectural-services/ConstructionDetailDrawingServices";
import ComponentDrawingServices from "./pages/services/Engineering-services/Architectural-services/ComponentDrawingServices";

import SenchaDevelopment from "./pages/services/SoftwareDevelopment/Technologies/SenchaDevelopment";
import SpringBootDevelopment from "./pages/services/SoftwareDevelopment/Technologies/SpringBootDevelopment";
import TezosDevelopment from "./pages/services/SoftwareDevelopment/Technologies/TezosDevelopment";
import AlfrescoDevelopment from "./pages/services/SoftwareDevelopment/Technologies/AlfrescoDevelopment";
import AngularJSDevelopment from "./pages/services/SoftwareDevelopment/Technologies/AngularJSDevelopment";
import ColdFusionDevelopment from "./pages/services/SoftwareDevelopment/Technologies/ColdFusionDevelopment";
import SaaSDevelopment from "./pages/services/SoftwareDevelopment/Technologies/SaaSDevelopment";
import OpenSourceCMS from "./pages/services/SoftwareDevelopment/Technologies/OpenSourceCMS";
import ContentManagementServices from "./pages/services/SoftwareDevelopment/Technologies/ContentManagementServices";
import DAppDevelopmentServices from "./pages/services/SoftwareDevelopment/Technologies/DAppDevelopmentServices";
import AEMDevelopmentServices from "./pages/services/SoftwareDevelopment/Technologies/AEMDevelopmentServices";
import CodeIgniterDevelopmentServices from "./pages/services/SoftwareDevelopment/Technologies/CodeIgniterDevelopmentServices";
import BizTalkDevelopmentServices from "./pages/services/SoftwareDevelopment/Technologies/BizTalkDevelopmentServices";
import VueJsDevelopmentServices from "./pages/services/SoftwareDevelopment/Technologies/VueJsDevelopmentServices";

{/* Digital Transformation  */ }
import DigitalTransformation from "./pages/services/SoftwareDevelopment/DigitalTransformation/DigitalTransformation";

{/* Network Infrastructure */ }
import NetworkInfrastructures from "./pages/services/SoftwareDevelopment/NetworkInfrastructure/NetworkInfrastructure";

{/* Database Service */ }
import DatabaseServices from "./pages/services/SoftwareDevelopment/DatabaseService/DatabaseServices";
import ApacheIgniteManagedServices from "./pages/services/SoftwareDevelopment/DatabaseService/ApacheIgniteManagedServices";
import CouchDBManagedServices from "./pages/services/SoftwareDevelopment/DatabaseService/CouchDBManagedServices";
import DatabaseAdministrationServices from "./pages/services/SoftwareDevelopment/DatabaseService/DatabaseAdministrationServices";
import DatabaseDevelopmentServices from "./pages/services/SoftwareDevelopment/DatabaseService/DatabaseDevelopmentServices";
import DatabaseManagementServices from "./pages/services/SoftwareDevelopment/DatabaseService/DatabaseManagementServices";
import MongoDBManagedServices from "./pages/services/SoftwareDevelopment/DatabaseService/MongoDBManagedServices";
import Neo4jManagedServices from "./pages/services/SoftwareDevelopment/DatabaseService/Neo4jManagedServices";
import PostgreSQLService from "./pages/services/SoftwareDevelopment/DatabaseService/PostgreSQLService";
import SQLServerManagedServices from "./pages/services/SoftwareDevelopment/DatabaseService/SQLServerManagedServices";
import ArangoDBService from "./pages/services/SoftwareDevelopment/DatabaseService/ArangoDBService";
import CassandraService from "./pages/services/SoftwareDevelopment/DatabaseService/CassandraService";
import DatabaseDesignServices from "./pages/services/SoftwareDevelopment/DatabaseService/DatabaseDesignServices";
import DatabaseMigrationService from "./pages/services/SoftwareDevelopment/DatabaseService/DatabaseMigrationService";
import DevelopmentAndMigrationServices from "./pages/services/SoftwareDevelopment/DatabaseService/DevelopmentAndMigrationServices";
import GraphDBService from "./pages/services/SoftwareDevelopment/DatabaseService/GraphDBService";
import JanusGraphService from "./pages/services/SoftwareDevelopment/DatabaseService/JanusGraphService";
import MySQLDevelopmentServices from "./pages/services/SoftwareDevelopment/DatabaseService/MySQLDevelopmentServices";
import MySQLManagedServices from "./pages/services/SoftwareDevelopment/DatabaseService/MySQLManagedServices";
import PatchManagementService from "./pages/services/SoftwareDevelopment/DatabaseService/PatchManagementService";
import PostgreSQLManagedServices from "./pages/services/SoftwareDevelopment/DatabaseService/PostgreSQLManagedServices";
import ScyllaDBService from "./pages/services/SoftwareDevelopment/DatabaseService/ScyllaDBService";

{/* Industries */ }
import SoftwareDevelopmentForIndustries from "./pages/services/SoftwareDevelopment/Industries/SoftwareDevelopmentForIndustries";
import AerospaceSoftwareServices from "./pages/services/SoftwareDevelopment/Industries/AerospaceSoftwareServices";
import CustomsBrokerageSoftware from "./pages/services/SoftwareDevelopment/Industries/CustomsBrokerageSoftware";
import EducationSoftwareDevelopment from "./pages/services/SoftwareDevelopment/Industries/EducationSoftwareDevelopment";
import FoodAndBeverageSoftware from "./pages/services/SoftwareDevelopment/Industries/FoodAndBeverageSoftware";
import MediaAndEntertainmentServices from "./pages/services/SoftwareDevelopment/Industries/MediaAndEntertainmentServices";
import PublishingAndAdvertisingSoftware from "./pages/services/SoftwareDevelopment/Industries/PublishingAndAdvertisingSoftware";
import RecruitmentSoftwareDevelopment from "./pages/services/SoftwareDevelopment/Industries/RecruitmentSoftwareDevelopment";
import SoftwareDevelopmentForISVs from "./pages/services/SoftwareDevelopment/Industries/SoftwareDevelopmentForISVs";
import TravelPortalDevelopment from "./pages/services/SoftwareDevelopment/Industries/TravelPortalDevelopment";
import AugmentedRealityDriverAssistance from "./pages/services/SoftwareDevelopment/Industries/AugmentedRealityDriverAssistance";
import AutomotiveTelematics from "./pages/services/SoftwareDevelopment/Industries/AutomotiveTelematics";
import BankingAndFinancialSoftware from "./pages/services/SoftwareDevelopment/Industries/BankingAndFinancialSoftware";
import ConsumerGoodsSoftware from "./pages/services/SoftwareDevelopment/Industries/ConsumerGoodsSoftware";
import FashionManagementSoftware from "./pages/services/SoftwareDevelopment/Industries/FashionManagementSoftware";
import HealthcareSoftware from "./pages/services/SoftwareDevelopment/Industries/HealthcareSoftware";
import IoTHCApplicationManagement from "./pages/services/SoftwareDevelopment/Industries/IoTHCApplicationManagement";
import SchoolManagementSoftware from "./pages/services/SoftwareDevelopment/Industries/SchoolManagementSoftware";
import TravelsPortalDevelopment from "./pages/services/SoftwareDevelopment/Industries/TravelsPortalDevelopment";
import AutomotiveSoftwareSolutions from "./pages/services/SoftwareDevelopment/Industries/AutomotiveSoftwareSolutions";
import SportsAppDevelopment from "./pages/services/SoftwareDevelopment/Industries/SportsAppDevelopment";
import TelecomSoftwareDevelopment from "./pages/services/SoftwareDevelopment/Industries/TelecomSoftwareDevelopment";



{/* Other Service */ }
import ProjectPortfolioManagement from "./pages/services/SoftwareDevelopment/OtherService/ProjectPortfolioManagement";
import CorporateITTtraining from "./pages/services/SoftwareDevelopment/OtherService/CorporateITTtraining";
import CustomWebAnalytics from "./pages/services/SoftwareDevelopment/OtherService/CustomWebAnalytics";
import DigitalGameELearning from "./pages/services/SoftwareDevelopment/OtherService/DigitalGameELearning";
import ELearningArtDesign from "./pages/services/SoftwareDevelopment/OtherService/ELearningArtDesign";
import ELearningContentDevelopment from "./pages/services/SoftwareDevelopment/OtherService/ELearningContentDevelopment";
import ELearningContentPorting from "./pages/services/SoftwareDevelopment/OtherService/ELearningContentPorting";
import ELearningMobileAppDev from "./pages/services/SoftwareDevelopment/OtherService/ELearningMobileAppDev";
import ELearningServices from "./pages/services/SoftwareDevelopment/OtherService/ELearningServices";
import ELearningSoftwareDevelopment from "./pages/services/SoftwareDevelopment/OtherService/ELearningSoftwareDevelopment";
import ImageVideoAnalytics from "./pages/services/SoftwareDevelopment/OtherService/ImageVideoAnalytics";
import OpenSourceELearning from "./pages/services/SoftwareDevelopment/OtherService/OpenSourceELearning";
import PredictiveAnalyticsos from "./pages/services/SoftwareDevelopment/OtherService/PredictiveAnalytics";
import PrescriptiveAnalytics from "./pages/services/SoftwareDevelopment/OtherService/PrescriptiveAnalytics";
import WebAnalyticsConfig from "./pages/services/SoftwareDevelopment/OtherService/WebAnalyticsConfig";
import CampaignAnalyticsServices from "./pages/services/SoftwareDevelopment/OtherService/CampaignAnalyticsServices";
import CorporateTrainingELearning from "./pages/services/SoftwareDevelopment/OtherService/CorporateTrainingELearning";
import DomoConsultingServices from "./pages/services/SoftwareDevelopment/OtherService/DomoConsultingServices";
import ELearningSolutions from "./pages/services/SoftwareDevelopment/OtherService/ELearningSolutions";
import GoogleAnalyticsServices from "./pages/services/SoftwareDevelopment/OtherService/GoogleAnalyticsServices";
import PerformanceGapAnalysis from "./pages/services/SoftwareDevelopment/OtherService/PerformanceGapAnalysis";
import PrimaveraConsulting from "./pages/services/SoftwareDevelopment/OtherService/PrimaveraConsulting";
import RemoteWebAnalytics from "./pages/services/SoftwareDevelopment/OtherService/RemoteWebAnalytics";
import TrainingProductDevelopment from "./pages/services/SoftwareDevelopment/OtherService/TrainingProductDevelopment";
import UipathConsulting from "./pages/services/SoftwareDevelopment/OtherService/UipathConsulting";
import WebAnalyticsPhilippines from "./pages/services/SoftwareDevelopment/OtherService/WebAnalyticsPhilippines";
import ClickstreamAnalytics from "./pages/services/SoftwareDevelopment/OtherService/ClickstreamAnalytics";
import CustomDashboard from "./pages/services/SoftwareDevelopment/OtherService/CustomDashboard";
import DataVisualization from "./pages/services/SoftwareDevelopment/OtherService/DataVisualization";
import InstructionalDesign from "./pages/services/SoftwareDevelopment/OtherService/InstructionalDesign";
import MoodleDevelopment from "./pages/services/SoftwareDevelopment/OtherService/MoodleDevelopment";
import ProductDemos from "./pages/services/SoftwareDevelopment/OtherService/ProductDemos";
import RealEstateDashboard from "./pages/services/SoftwareDevelopment/OtherService/RealEstateDashboard";
import WebAnalytics from "./pages/services/SoftwareDevelopment/OtherService/WebAnalytics";
import WorkforceAnalytics from "./pages/services/SoftwareDevelopment/OtherService/WorkforceAnalytics";


{/* Mechanical Engineering */ }
import ModularPlantDesign from "./pages/services/Engineering-services/MechanicalEngineering/ModularPlantDesign";
import CrashAnalysisServices from "./pages/services/Engineering-services/MechanicalEngineering/CrashAnalysisServices";
import FiniteElementAnalysis from "./pages/services/Engineering-services/MechanicalEngineering/FiniteElementAnalysis";
import ProductDesignAndDevelopment from "./pages/services/Engineering-services/MechanicalEngineering/ProductDesignAndDevelopment";
import ProductLifecycleSupport from "./pages/services/Engineering-services/MechanicalEngineering/ProductLifecycleSupport";
import ProposalAndBidManagement from "./pages/services/Engineering-services/MechanicalEngineering/ProposalAndBidManagement";
import PrototypingAndRapidPrototyping from "./pages/services/Engineering-services/MechanicalEngineering/PrototypingAndRapidPrototyping";
import TechnicalPublicationServices from "./pages/services/Engineering-services/MechanicalEngineering/TechnicalPublicationServices";
import VirtualPrototypingServices from "./pages/services/Engineering-services/MechanicalEngineering/VirtualPrototypingServices";
import CATIAServices from "./pages/services/Engineering-services/MechanicalEngineering/CATIAServices";
import DetailedEngineeringDesign from "./pages/services/Engineering-services/MechanicalEngineering/DetailedEngineeringDesign";
import FatigueAnalysisServices from "./pages/services/Engineering-services/MechanicalEngineering/FatigueAnalysisServices";
import PlantDesignEngineering from "./pages/services/Engineering-services/MechanicalEngineering/PlantDesignEngineering";
import PlantDesignManagementSystem from "./pages/services/Engineering-services/MechanicalEngineering/PlantDesignManagementSystem";
import ValueEngineeringServices from "./pages/services/Engineering-services/MechanicalEngineering/ValueEngineeringServices";
import AssemblyDrawings from "./pages/services/Engineering-services/MechanicalEngineering/AssemblyDrawings";
import AutodeskInventorServices from "./pages/services/Engineering-services/MechanicalEngineering/AutodeskInventorServices";
import CNCProgrammingServices from "./pages/services/Engineering-services/MechanicalEngineering/CNCProgrammingServices";
import CastingDesign from "./pages/services/Engineering-services/MechanicalEngineering/CastingDesign";
import LaserScanning from "./pages/services/Engineering-services/MechanicalEngineering/LaserScanning";
import MechanicalConceptDesign from "./pages/services/Engineering-services/MechanicalEngineering/MechanicalConceptDesign";
import MechanicalEngineeringAnalysis from "./pages/services/Engineering-services/MechanicalEngineering/MechanicalEngineeringAnalysis";
import PipingDesign from "./pages/services/Engineering-services/MechanicalEngineering/PipingDesign";
import ProcessPlanning from "./pages/services/Engineering-services/MechanicalEngineering/ProcessPlanning";
import ProductRenderingModeling from "./pages/services/Engineering-services/MechanicalEngineering/ProductRenderingModeling";
import ReverseEngineering from "./pages/services/Engineering-services/MechanicalEngineering/ReverseEngineering";
import RevitFamilyCreation from "./pages/services/Engineering-services/MechanicalEngineering/RevitFamilyCreation";
import SheetMetalDesign from "./pages/services/Engineering-services/MechanicalEngineering/SheetMetalDesign";
import SolidWorksDesign from "./pages/services/Engineering-services/MechanicalEngineering/SolidWorksDesign";
import StructuralStressAnalysis from "./pages/services/Engineering-services/MechanicalEngineering/StructuralStressAnalysis";
import ThermalModeling from "./pages/services/Engineering-services/MechanicalEngineering/ThermalModeling";
import ToleranceStackup from "./pages/services/Engineering-services/MechanicalEngineering/ToleranceStackup";
import VisualMerchandising from "./pages/services/Engineering-services/MechanicalEngineering/VisualMerchandising";
import AssemblyModelingServices from "./pages/services/Engineering-services/MechanicalEngineering/AssemblyModelingServices";
import CAEModalAnalysis from "./pages/services/Engineering-services/MechanicalEngineering/CAEModalAnalysis";
import EngineeringChangeOrder from "./pages/services/Engineering-services/MechanicalEngineering/EngineeringChangeOrder";
import HVACSystemReplacement from "./pages/services/Engineering-services/MechanicalEngineering/HVACSystemReplacement";
import JigsFixturesDesign from "./pages/services/Engineering-services/MechanicalEngineering/JigsFixturesDesign";
import MachineDesignDevelopment from "./pages/services/Engineering-services/MechanicalEngineering/MachineDesignDevelopment";
import ThreeDModelingDrafting from "./pages/services/Engineering-services/MechanicalEngineering/ThreeDModelingDrafting";
import ThreeDPartModeling from "./pages/services/Engineering-services/MechanicalEngineering/ThreeDPartModeling";
import ToolingFixtureDesign from "./pages/services/Engineering-services/MechanicalEngineering/ToolingFixtureDesign";
import MicroStationServiceses from "./pages/services/Engineering-services/Architectural-services/MicroStationServices";
import DWGtoDGN from "./pages/services/Engineering-services/MechanicalEngineering/DWGtoDGN";
import Drafting2DServices from "./pages/services/Engineering-services/MechanicalEngineering/Drafting2DServices";
import MCDtoDWGConversion from "./pages/services/Engineering-services/MechanicalEngineering/MCDtoDWGConversion";
import Max3DServices from "./pages/services/Engineering-services/MechanicalEngineering/Max3DServices";
import Mechanical3DAnimation from "./pages/services/Engineering-services/MechanicalEngineering/Mechanical3DAnimation";
import PDFtoDWGConversion from "./pages/services/Engineering-services/MechanicalEngineering/PDFtoDWGConversion";
import PLMservices from "./pages/services/Engineering-services/MechanicalEngineering/PLMservices";
import RasterToVector from "./pages/services/Engineering-services/MechanicalEngineering/RasterToVector";
import ScanningMeasurementServices from "./pages/services/Engineering-services/MechanicalEngineering/ScanningMeasurementServices";
import CFDservices from "./pages/services/Engineering-services/MechanicalEngineering/CFDservices";
import DFMservices from "./pages/services/Engineering-services/MechanicalEngineering/DFMservices";
import FabricationCost from "./pages/services/Engineering-services/MechanicalEngineering/FabricationCost";
import FailureAnalysis from "./pages/services/Engineering-services/MechanicalEngineering/FailureAnalysis";
import IndustrialAutomationServices from "./pages/services/Engineering-services/MechanicalEngineering/IndustrialAutomationServices";
import ManufacturingServices from "./pages/services/Engineering-services/MechanicalEngineering/ManufacturingServices";
import PlumbingFirefighting from "./pages/services/Engineering-services/MechanicalEngineering/PlumbingFirefighting";
import ProductEngineering from "./pages/services/Engineering-services/MechanicalEngineering/ProductEngineering";
import ProjectManagementServices from "./pages/services/Engineering-services/MechanicalEngineering/ProjectManagementServices";
import TowerDesign from "./pages/services/Engineering-services/MechanicalEngineering/TowerDesign";
import FireProtectionServices from "./pages/services/Engineering-services/MechanicalEngineering/FireProtectionServices";
import OEMservices from "./pages/services/Engineering-services/MechanicalEngineering/OEMservices";
import OfficeFurnitureServices from "./pages/services/Engineering-services/MechanicalEngineering/OfficeFurnitureServices";
import ParametricModelingServices from "./pages/services/Engineering-services/MechanicalEngineering/ParametricModelingServices";
import RadonTestingServices from "./pages/services/Engineering-services/MechanicalEngineering/RadonTestingServices";
import ShipDeckDesignServices from "./pages/services/Engineering-services/MechanicalEngineering/ShipDeckDesignServices";
import SimulationEngineeringServices from "./pages/services/Engineering-services/MechanicalEngineering/SimulationEngineeringServices";
import VisualMerchandisingServices from "./pages/services/Engineering-services/MechanicalEngineering/VisualMerchandisingServices";

{/* Shenbagavel End */ }

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />

              {/* Individual service routes */}
              <Route path="/services/finance-accounting-finops" element={<FinanceAccountingFinOps />} />
              <Route path="/services/legal-corporate-compliance" element={<LegalCorporateCompliance />} />
              <Route path="/services/healthcare-BPO-Service" element={<HealthcareMedTechSupport />} />
              <Route path="/services/it-software-cloud-cybersecurity" element={<ITSoftwareCloudCybersecurity />} />
              <Route path="/services/MortgageService" element={<DataAIAnalyticsResearch />} />
              <Route path="/services/marketing-sales-creative-media" element={<MarketingSalesCreativeMedia />} />
              <Route path="/services/SoftwareDevelopment" element={<CustomerExperienceCommunicationsTelephony />} />
              <Route path="/services/operations-procurement-supplychain-manufacturing" element={<OperationsProcurementSupplychainManufacturing />} />
              <Route path="/services/real-estate-facilities-energy-environment" element={<RealEstateFacilitiesEnergyEnvironment />} />
              <Route path="/services/hr-training-admin-specialized-services" element={<HRTrainingAdminSpecializedServices />} />
              <Route path="/services/global-outsourcing-offshoring" element={<GlobalOutsourcingOffshoring />} />
              <Route path="/services/import-export-services" element={<ResearchAnalysis />} />


              {/* services */}
              {/* finance-accounting-finops */}
              {/* Bookkeeping service */}
              <Route path="/services/finance-accounting-finops/Real-EstateBookkeeping-Services" element={<RealEstateBookkeepingServices />} />
              <Route path="/services/finance-accounting-finops/Accounting-Setup-Services" element={<NimbleAcuityAccountingServices />} />
              <Route path="/services/finance-accounting-finops/CPA-Bookkeeping-Services" element={<CPABookkeepingServices />} />
              <Route path="/services/finance-accounting-finops/SmallBusiness-Bookkeeping" element={<SmallBusinessBookkeeping />} />
              <Route path="/services/finance-accounting-finops/QuickBooks-Bookkeeping" element={<QuickBooksBookkeeping />} />
              <Route path="/services/finance-accounting-finops/Virtual-Bookkeeping" element={<VirtualBookkeeping />} />

              {/* Accounting service */}
              <Route path="/services/finance-accounting-finops/accounting-service/Valuation-Advisory-service" element={<ValuationAdvisory />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Cost-Accounting-service" element={<CostAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Accounting-Automation-services" element={<AccountingAutomation />} />
              <Route path="/services/finance-accounting-finops/accounting-service/RealEstate-Accounting-services" element={<RealEstateAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Wealth-Management-service" element={<WealthManagement />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Accounting-Advisory-sesrvice" element={<FinancialAccountingAdvisory />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Ledger-Management-Services" element={<LedgerManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/General-Accounting-Services" element={<GeneralAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/ESG-Consulting-Services" element={<ESGConsultingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Corporate-Accounting-Services" element={<CorporateAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fixed-Asset-Management-Services" element={<FixedAssetManagement />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Management-Advisory-Services" element={<ManagementAdvisoryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Management-Accounting-Services" element={<ManagementAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Construction-Accounting-Services" element={<ConstructionAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fixed-Asset-Auditing-Services" element={<FixedAssetAuditingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Internal-Audit-Services" element={<InternalAuditServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Portfolio-Investor-Accounting-service" element={<PortfolioInvestorAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/PostMerger-Integration-service" element={<PostMergerIntegration />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Compliance-Audit-service" element={<ComplianceAudit />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fixed-Asset-Accounting-service" element={<FixedAssetAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Startup-Accounting-service" element={<StartupAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Cloud-Accounting-Services" element={<CloudAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Accounting-Cleanup-Services" element={<AccountingCleanupServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/ModelRiskManagementServices" element={<ModelRiskManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Audit-Support-Services" element={<AuditSupportServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/CFO-Services" element={<CFOServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fiduciary-Services" element={<FiduciaryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Finance-Transformation-Services" element={<FinanceTransformationServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/RecordToReport-Services" element={<RecordToReportServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Business-Advisory-Services" element={<BusinessAdvisoryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Forensic-Audit-Services" element={<ForensicAuditServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Order-Management-Services" element={<OrderManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Dental-Accounting-Services" element={<DentalAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Writeup-Services" element={<FinancialWriteupServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/SMSF-Accounting-Services" element={<SMSFAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Retail-Accounting-Services" element={<RetailAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Reporting-Services" element={<FinancialReportingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/SmallBusiness-Accounting-Services" element={<SmallBusinessAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Forensic-Accounting-Services" element={<ForensicAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Accounts-Reconciliation-Services" element={<AccountsReconciliationServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Budgeting-Services" element={<FinancialBudgetingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Automotive-Accounting-Services" element={<AutomotiveAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/BankCredit-Reconciliation-service" element={<BankCreditReconciliation />} />
              <Route path="/services/finance-accounting-finops/accounting-service/CashFlow-Forecasting-services" element={<CashFlowForecasting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Restaurant-Accounting-services" element={<RestaurantAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/CashFlow-Management-services" element={<CashFlowManagement />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Controller-services" element={<FinancialController />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Electrical-Contractors-Accounting-services" element={<ElectricalContractorsAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Statements-Services" element={<FinancialStatementsServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Spac-Transaction-Services" element={<SpacTransactionServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Investigations-Services" element={<FinancialInvestigationsServices />} />

              {/* research->financial_services */}
              <Route path="kpo/financialanalysis/corporate-finance-support-services.asp" element={<CorporateFinanceSupport />} />
              <Route path="kpo/financialanalysis/asset-management-support-services.asp" element={<AssetManagementSupport />} />
              <Route path="kpo/financialanalysis/business-valuation-services.asp" element={<BusinessValuation />} />
              <Route path="kpo/financialanalysis/investment-research.asp" element={<InvestmentResearch />} />
              <Route path="kpo/dtc-eligibility-services.asp" element={<DtcEligibilityPage />} />
              <Route path="kpo/ifrs-reporting-services.asp" element={<IFRSReportingServices />} />
              <Route path="kpo/financialanalysis/buy-side-equity-research-services.asp" element={<BuySideEquityResearch />} />
              <Route path="kpo/financialanalysis/sell-side-research-services.asp" element={<SellSideResearch />} />
              <Route path="kpo/financialanalysis/fixed-income-research-services.asp" element={<FixedIncomeResearch />} />
              <Route path="kpo/financialanalysis/investment-banking-support-services.asp" element={<InvestmentBankingSupport />} />
              <Route path="kpo/financialanalysis/credit-research.asp" element={<CreditResearchServices />} />
              <Route path="kpo/financialanalysis/investment-memorandum-consultation.asp" element={<InvestmentMemorandumServices />} />
              <Route path="kpo/financialanalysis/equity-research.asp" element={<EquityResearchServices />} />
              <Route path="kpo/financialanalysis/financial-analysis.asp" element={<FinancialResearchAnalysisServices />} />
              <Route path="kpo/financial-research/financial-modeling.asp" element={<FinancialModelingServices />} />
              <Route path="kpo/financialanalysis/financial-advisory-services.asp" element={<FinancialAdvisoryServices />} />
              <Route path="kpo/financialanalysis/forex-market-research-services.asp" element={<ForexMarketResearch />} />
              <Route path="kpo/financialanalysis/financial-risk-analysis-services.asp" element={<FinancialRiskAnalysis />} />
              <Route path="kpo/financialanalysis/gap-analysis-services.asp" element={<GapAnalysis />} />
              <Route path="kpo/financial-feasibility-analysis-services.asp" element={<FinancialFeasibilityAnalysis />} />
              <Route path="kpo/credit-risk-modeling-services.asp" element={<CreditRiskModeling />} />
              <Route path="kpo/predictive-financial-analytics-services.asp" element={<PredictiveFinancialAnalytics />} />
              <Route path="kpo/ifrs-valuation-services.asp" element={<IFRSValuationServicesPage />} />
              <Route path="kpo/qualitative-data-analysis-services.asp" element={<QualitativeDataAnalysisPage />} />



              {/* research->market_research */}
              <Route path="kpo/market-basket-analysis-services.asp" element={<MarketBasketAnalysis />} />
              <Route path="kpo/cati-web-surveys.asp" element={<CatiWebSurveys />} />
              <Route path="kpo/news-abstraction-services.asp" element={<NewsAbstraction />} />
              <Route path="kpo/market-feasibility-study.asp" element={<MarketFeasibility />} />
              <Route path="kpo/market-sales-analysis-services.asp" element={<MarketSalesAnalysis />} />
              <Route path="kpo/data-analysis.asp" element={<DataAnalysisServices />} />
              <Route path="kpo/verbatim-coding-services.asp" element={<VerbatimCodingServices />} />
              <Route path="kpo/healthcare-market-research-services.asp" element={<HealthcareMarketResearch />} />
              <Route path="kpo/real-estate-market-research-services.asp" element={<RealEstateMarketResearch />} />
              <Route path="kpo/restaurant-market-research-services.asp" element={<RestaurantMarketResearch />} />
              <Route path="kpo/agriculture-market-research-services.asp" element={<AgricultureMarketResearch />} />
              <Route path="kpo/market-sizing-research-services.asp" element={<MarketSizingResearch />} />
              <Route path="kpo/industry-analysis-services.asp" element={<IndustryAnalysisServices />} />
              <Route path="kpo/online-market-research.asp" element={<OnlineMarketResearch />} />
              <Route path="kpo/marketresearch/call-center-surveys.asp" element={<CallCenterSurveys />} />
              <Route path="kpo/marketresearch/market-research-surveys.asp" element={<MarketResearchSurveys />} />
              <Route path="kpo/marketresearch/questionnaire-design.asp" element={<MarketingQuestionnaireDesign />} />
              <Route path="kpo/newsletter-service.asp" element={<NewsletterServices />} />
              <Route path="kpo/webresearch/syndicated-research.asp" element={<SyndicatedMarketResearchServices />} />
              <Route path="kpo/swot-analysis.asp" element={<SwotAnalysisServices />} />
              <Route path="kpo/fabric-market-research-services.asp" element={<FabricMarketResearch />} />
              <Route path="kpo/insurance-market-research-services.asp" element={<InsuranceMarketResearch />} />
              <Route path="kpo/survey-programming-services.asp" element={<SurveyProgrammingServices />} />
              <Route path="kpo/time-series-analysis-services.asp" element={<TimeSeriesAnalysisPage />} />
              <Route path="kpo/exploratory-data-analysis-services.asp" element={<ExploratoryDataAnalysis />} />
              <Route path="kpo/quantitative-data-analysis-services.asp" element={<QuantitativeResearchPage />} />
              <Route path="kpo/market-segmentation-analysis-services.asp" element={<MarketSegmentationPage />} />
              <Route path="kpo/healthcare-market-segmentation-services.asp" element={<HealthcareMarketSegmentationPage />} />
              <Route path="kpo/pestel-analysis-services.asp" element={<PestelAnalysis />} />
              <Route path="kpo/statistical-analysis-services.asp" element={<StatisticalAnalysis />} />
              <Route path="kpo/product-research-services.asp" element={<ProductResearchServices />} />
              <Route path="kpo/open-end-coding-services.asp" element={<OpenEndCodingServices />} />
              <Route path="kpo/amazon-product-research-services.asp" element={<AmazonProductResearchPage />} />
              <Route path="kpo/consumer-market-research-services.asp" element={<ConsumerMarketResearch />} />
              <Route path="DataManagement/customer-segmentation-services.asp" element={<CustomerSegmentation />} />

              {/* research->business_research */}
              <Route path="kpo/competitor-benchmarking-services.asp" element={<CompetitorBenchmarking />} />
              <Route path="kpo/business-benchmarking-services.asp" element={<BusinessBenchmarking />} />
              <Route path="kpo/business-research/primary-secondary-research.asp" element={<PrimarySecondaryResearch />} />
              <Route path="kpo/research-reports.asp" element={<CustomResearchReports />} />
              <Route path="kpo/business-research/media-research-services.asp" element={<MediaResearchServices />} />
              <Route path="business-research/business-market-research.asp" element={<BusinessMarketResearch />} />
              <Route path="kpo/CompanyProfilePreparation.asp" element={<CompanyProfilingReports />} />
              <Route path="business-research/business-development-support.asp" element={<BusinessDevelopment />} />
              <Route path="kpo/marketresearch/social-media-monitoring.asp" element={<SocialMediaMonitoring />} />
              <Route path="kpo/perceptual-mapping.asp" element={<PerceptualMappingPage />} />
              <Route path="kpo/competitor-analysis.asp" element={<CompetitorAnalysisServices />} />
              <Route path="business-research/industry-profiling.asp" element={<IndustryProfilingServices />} />
              <Route path="kpo/services/trend-analysis.asp" element={<TrendAnalysisServices />} />
              <Route path="kpo/business-research/competitive-business-analysis.asp" element={<CompetitiveBusinessAnalysis />} />
              <Route path="business-research/business-plans.asp" element={<BusinessPlanWriting />} />
              <Route path="kpo/business-intelligence-dashboard-visualization.asp" element={<BIDashboardVisualization />} />
              <Route path="kpo/benchmarking-services.asp" element={<BenchmarkingServices />} />
              <Route path="kpo/performance-benchmarking-services.asp" element={<PerformanceBenchmarking />} />
              <Route path="kpo/it-benchmarking-services.asp" element={<ITBenchmarkingPage />} />
              <Route path="kpo/healthcare-benchmarking-services.asp" element={<HealthcareBenchmarking />} />
              <Route path="kpo/data-benchmarking-services.asp" element={<DataBenchmarkingPage />} />
              <Route path="kpo/cross-tabulation-analysis-services.asp" element={<CrossTabulationAnalysis />} />
              <Route path="kpo/integrated-business-planning-services.asp" element={<IntegratedBusinessPlanning />} />
              <Route path="kpo/benchmarking-analytics-services.asp" element={<BenchmarkingAnalyticsServices />} />
              <Route path="kpo/property-risk-management-services.asp" element={<PropertyRiskManagement />} />
              <Route path="kpo/account-based-marketing-services.asp" element={<ABMServicesPage />} />
              <Route path="kpo/business-modeling-services.asp" element={<BusinessModelingPage />} />


              {/* research analysis -> pharmaceutical research */}
              <Route path="kpo/pharmaceutical-research/intellectual-property-open-innovation.asp" element={<IntellectualProperty />} />
              <Route path="kpo/pharmaceutical-research/market-forecast-analysis.asp" element={<MarketForecast />} />
              <Route path="kpo/pharmaceutical-research/competitive-intelligence-research-services.asp" element={<CompetitiveIntelligencePage />} />
              <Route path="kpo/pharma/medical-writing-support-services.asp" element={<MedicalWritingServices />} />
              <Route path="kpo/services/key-opinion-leaders.asp" element={<KOLServices />} />
              <Route path="kpo/pharma/patent-landscape-analysis.asp" element={<PatentLandscapeAnalysis />} />
              <Route path="kpo/pharmaceutical-research/market-landscape-assessment-services.asp" element={<MarketLandscapeAssessment />} />
              <Route path="kpo/pharma/image-analysis-services.asp" element={<ImageAnalysisServices />} />

              {/* research -> scientific reaserch */}
              <Route path="kpo/scientific-research/crystallography-research-services.asp" element={<CrystallographyServices />} />
              <Route path="kpo/scientific-research/life-science-informatics-services.asp" element={<LifeScienceInformatics />} />
              <Route path="kpo/scientific-research/structural-biology-services.asp" element={<StructuralBiologyServicesPage />} />
              <Route path="kpo/scientific-research/scientific-data-mining-services.asp" element={<ScientificDataMiningPage />} />

              {/* research -> research report */}
              <Route path="kpo/financial-research/market-research-report-services.asp" element={<MarketResearchReports />} />
              <Route path="kpo/financial-research/financial-research-reports.asp" element={<FinancialResearchReport />} />
              <Route path="kpo/financial-research/macroeconomics-reports-services.asp" element={<MacroeconomicsReportsPage />} />
              <Route path="kpo/microeconomics-reports-services.asp" element={<MicroeconomicsReports />} />
              <Route path="kpo/commodities-and-real-estate-reports-services.asp" element={<CommoditiesRealEstateReports />} />
              <Route path="kpo/market-trends-report-services.asp" element={<MarketTrendsReports />} />
              <Route path="kpo/structured-finance-reports-services.asp" element={<StructuredFinanceReports />} />
              <Route path="kpo/report-automation-services.asp" element={<ReportAutomationServices />} />
              <Route path="kpo/syndicated-research-report-services.asp" element={<SyndicatedResearchReports />} />

              {/* research -> articles */}
              <Route path="kpo/financialanalysis/whyNimble Acuity.asp" element={<FinancialAnalysisPage />} />
              <Route path="kpo/articles/b2b-marketing-trends-to-future-proof-your-financial-services.asp" element={<B2BFinancialServicesTrends />} />
              <Route path="kpo/articles/image-analysis-transforming-business.asp" element={<ImageAnalysisBlog />} />
              <Route path="kpo/articles/the-influence-of-technology-on-pharmaceutical-services.asp" element={<PharmaTechAdvancements />} />
              <Route path="kpo/articles/competitive-analytics-benchmarking-in-b2b-growth.asp" element={<CompetitiveAnalyticsBenchmarking />} />
              <Route path="kpo/articles/business-research-services-and-future-of-business-intelligence.asp" element={<BusinessResearchBI />} />
              <Route path="kpo/articles/tips-to-benchmark-your-business.asp" element={<BenchmarkingBlog />} />
              <Route path="kpo/articles/power-of-data-informed-decision-making.asp" element={<BlogPage />} />
              <Route path="kpo/articles/the-definitive-guide-to-healthcare-and-benchmarking.asp" element={<HealthcareBenchmarking />} />
              <Route path="kpo/articles/how-to-stay-ahead-of-your-competitors-by-outsourcing-research-analysis-services.asp" element={<OutsourcingResearch />} />
              <Route path="kpo/articles/revolutionary-growth-of-research-and-analysis-industry-in-next-decade.asp" element={<ResearchGrowthDecade />} />
              <Route path="kpo/articles/outsourcing-research-analysis-services.asp" element={<OutsourcingIndiaResearch />} />
              <Route path="kpo/knowledge-process-outsourcing-knowledge-center.asp" element={<ResearchOutsourcingCenter />} />
              <Route path="kpo/articles/kpo-india-advantage.asp" element={<IndiaResearchServices />} />
              <Route path="kpo/research-process-outsourcing.asp" element={<ResearchProcessOutsourcing />} />
              <Route path="kpo/articles/what-is-knowledge-process-outsourcing.asp" element={<KnowledgeProcessOutsourcing />} />
              <Route path="kpo/articles/logistic-regression-analysis.asp" element={<LogisticRegressionAnalysis />} />
              <Route path="kpo/articles/kpo-areas.asp" element={<ResearchServicesOutsourcing />} />
              <Route path="kpo/articles/kpo-apprehensions.asp" element={<ResearchServicesApprehensions />} />
              <Route path="kpo/webresearch/whyNimble Acuity.asp" element={<WebBasedMarketResearch />} />
              <Route path="kpo/desk-web-research.asp" element={<DeskAndWebResearch />} />

              {/* Data science -> Data Engineering */}
              <Route path="data-science/artificial-intelligence/intelligent-process-automation-services.asp" element={<IntelligentProcessAutomation />} />
              <Route path="data-science/data-engineering/big-data-lake-consulting-services.asp" element={<BigDataLakes />} />
              <Route path="data-science/data-engineering/hadoop-development-services.asp" element={<HadoopDevelopment />} />
              <Route path="data-science/enterprise-data-integration-services.asp" element={<EnterpriseDataIntegration />} />
              <Route path="data-science/data-engineering/big-data-infrastructure-services.asp" element={<BigDataInfrastructure />} />

              {/*Data Science*/}
              <Route path="data-science/cloudera-support-services.asp" element={<ClouderaSupport />} />
              <Route path="data-science/data-science-as-a-service.asp" element={<DataScienceService />} />
              <Route path="data-science/lead-scoring-services.asp" element={<LeadScoringServices />} />
              <Route path="data-science/route-optimization-services.asp" element={<RouteOptimization />} />
              <Route path="data-science/recommender-system-development-services.asp" element={<RecommenderSystem />} />
              <Route path="data-science/video-analytics-software-development-using-deep-learning.asp" element={<VideoAnalyticsPage />} />
              <Route path="data-science/offensive-image-video-recognition-software-development-using-deep-learning.asp" element={<OffensiveImageVideoRecognition />} />
              <Route path="data-science/etl-data-integration-services.asp" element={<ETLDataIntegration />} />
              <Route path="data-science/cloudera-data-science-workbench-services.asp" element={<ClouderaDataScienceWorkbench />} />
              <Route path="data-science/big-data-management-services.asp" element={<BigDataManagement />} />
              <Route path="data-science/data-wrangling-services.asp" element={<DataWrangling />} />
              <Route path="data-science/data-analytics-application-development-services.asp" element={<DataAnalyticsAppDev />} />
              <Route path="data-science/data-fabric-services.asp" element={<DataFabricServices />} />
              <Route path="data-science/data-stack-modernization-services.asp" element={<DataStackModernization />} />
              <Route path="data-science/hyperautomation-services.asp" element={<HyperautomationServices />} />
              <Route path="data-science/pytorch-development-services.asp" element={<PyTorchServices />} />
              <Route path="data-science/concurrent-audit-services.asp" element={<ConcurrentAuditServices />} />
              <Route path="data-science/blockchain-development-services.asp" element={<BlockchainDevelopmentPage />} />
              <Route path="data-science/customer-intelligence-services.asp" element={<CustomerIntelligencePage />} />
              <Route path="data-science/customer-journey-mapping-services.asp" element={<CustomerJourneyMappingPage />} />


              {/* data science -> data science consulting */}
              <Route path="data-science/ai-driven-digital-transformation-solutions.asp" element={<AIDigitalTransformation />} />
              <Route path="data-science/location-intelligence-services.asp" element={<LocationIntelligence />} />


              {/* data science -> artificial intelligence services */}
              <Route path="data-science/artificial-intelligence-services/" element={<AIServicesTable />} />
              <Route path="data-science/artificial-intelligence/automatic-document-classification-indexing-services.asp/" element={<DocumentClassificationPage />} />
              <Route path="data-science/artificial-intelligence/cognitive-process-automation-services.asp" element={<CognitiveAutomationPage />} />
              <Route path="data-science/robotic-process-automation-services.asp" element={<RpaServices />} />
              <Route path="data-science/artificial-intelligence/computer-vision-services.asp" element={<ComputerVisionServices />} />
              <Route path="data-science/artificial-intelligence/natural-language-processing-services.asp" element={<NlpServices />} />
              <Route path="data-science/artificial-intelligence/machine-learning-services.asp" element={<MachineLearningServices />} />
              <Route path="data-science/artificial-intelligence/speech-recognition-services.asp" element={<SpeechRecognitionServices />} />
              <Route path="data-science/artificial-intelligence/machine-vision-services.asp" element={<MachineVisionServices />} />
              <Route path="data-science/artificial-intelligence/artificial-neural-networks-services.asp" element={<NeuralNetworksServices />} />
              <Route path="data-science/artificial-intelligence/automated-visual-inspection-services.asp" element={<AutomatedVisualInspection />} />
              <Route path="data-science/artificial-intelligence/anomaly-detection-services.asp" element={<AnomalyDetection />} />
              <Route path="data-science/artificial-intelligence/conversational-ai-services.asp" element={<ConversationalAI />} />
              <Route path="data-science/artificial-intelligence/ai-consulting-services.asp" element={<AIConsulting />} />
              <Route path="data-science/artificial-intelligence/deep-learning-services.asp" element={<DeepLearning />} />
              <Route path="data-science/artificial-intelligence/cognitive-computing-services.asp" element={<CognitiveComputing />} />
              <Route path="data-science/artificial-intelligence/fraud-analytics-services.asp" element={<FraudAnalytics />} />
              <Route path="data-science/artificial-intelligence/ai-services-in-healthcare.asp" element={<HealthcareAI />} />
              <Route path="data-science/ai-in-supply-chain.asp" element={<AISupplyChain />} />
              <Route path="data-science/artificial-intelligence/ai-in-manufacturing-industry.asp" element={<AIManufacturing />} />


              <Route path="data-science/business-intelligence-services/" element={<BusinessIntelligencePage />} />
              <Route path="data-science/data-science-training-for-corporates.asp/" element={<DataScienceTraining />} />


              {/* Data science -> data analaystics */}
              <Route path="data-science/data-analytics/big-data-analytics-services.asp" element={<BigDataAnalyticsPage />} />
              <Route path="data-science/data-analytics/data-modeling-services.asp" element={<DataModelingServicesPage />} />
              <Route path="data-science/data-analytics/data-intelligence-services.asp" element={<DataIntelligenceServicesPage />} />
              <Route path="data-science/data-analytics/augmented-analytics-services.asp" element={<AugmentedAnalytics />} />
              <Route path="data-science/data-analytics/statistical-data-analysis-services.asp" element={<StatisticalDataAnalysisPage />} />
              <Route path="data-science/data-analytics/reverse-email-appending-services.asp" element={<ReverseEmailAppendingPage />} />
              <Route path="data-science/data-analytics/edge-analytics-services.asp" element={<EdgeAnalytics />} />
              <Route path="data-science/data-analytics/data-tabulation-and-analysis-services.asp" element={<DataTabulationAnalysis />} />
              <Route path="data-science/data-analytics/data-research-services.asp" element={<DataResearchPage />} />
              <Route path="data-science/data-analytics/predictive-modeling-services.asp" element={<PredictiveModelingPage />} />
              <Route path="data-science/data-analytics/azure-stream-analytics-services.asp" element={<AzureStreamAnalyticsPage />} />


              {/* Data science -> business analyst  */}
              <Route path="data-science/business-analytics/risk-analytics-services.asp" element={<RiskAnalyticsPage />} />
              <Route path="data-science/business-analytics/visual-analytics-services.asp" element={<VisualAnalyticsPage />} />
              <Route path="data-science/business-analytics/survey-analytics-services.asp" element={<SurveyAnalyticsPage />} />
              <Route path="data-science/business-analytics/contact-center-analytics-services.asp" element={<ContactCenterAnalytics />} />
              <Route path="data-science/business-analytics/text-analytics-services.asp" element={<TextAnalytics />} />
              <Route path="data-science/business-analytics/financial-analytics-services.asp" element={<FinancialAnalytics />} />
              <Route path="data-science/business-analytics/predictive-analytics-services.asp" element={<PredictiveAnalytics />} />
              <Route path="data-science/business-analytics/supply-chain-analytics-services.asp" element={<SupplyChainAnalytics />} />
              <Route path="data-science/business-analytics/collection-analytics-services.asp" element={<CollectionsAnalytics />} />
              <Route path="data-science/business-analytics/retail-analytics-services.asp" element={<RetailAnalytics />} />
              <Route path="data-science/business-analytics/bpm-analytics-services.asp" element={<BPMAnalytics />} />
              <Route path="data-science/business-analytics/operational-analytics-services.asp" element={<OperationalAnalytics />} />


              {/* Data science -> articles */}
              <Route path="kpo/marketresearch/predictive-modeling-apps-in-social-media.asp" element={<PredictiveModeling />} />
              <Route path="data-science/articles/data-lakes-strategies-for-enterprises.asp" element={<DataLakes />} />
              <Route path="data-science/articles/advanced-strategies-in-data-engineering.asp" element={<DataEngineering />} />
              <Route path="data-science/articles/ways-data-engineering-maximizes-business-potential.asp" element={<DataEngineeringBusiness />} />
              <Route path="data-science/articles/data-engineering-strategies-for-business.asp" element={<DataEngineeringStrategies />} />
              <Route path="data-science/articles/pros-and-cons-outsourcing-data-science-services.asp" element={<OutsourcingDataScience />} />
              <Route path="data-science/articles/can-ai-beat-doctors-in-disease-identification.asp" element={<AiVsDoctors />} />
              <Route path="data-science/articles/introducing-rpa-and-best-rpa-chatbot-tools.asp" element={<RpaChatbots />} />
              <Route path="data-science/articles/predictive-analytics-big-data-future-b2b-sales.asp" element={<PredictiveAnalytics />} />
              <Route path="data-science/articles/all-you-need-know-about-conventional-neural-networks.asp" element={<CNNGuide />} />
              <Route path="data-science/articles/practical-approach-blockchain-analytics-future.asp" element={<BlockchainAnalytics />} />
              <Route path="data-science/articles/how-ai-help-reshaping-customer-experiences.asp" element={<AICustomerExperience />} />
              <Route path="data-science/articles/selecting-the-right-ai-services-for-business.asp" element={<AIBusinessGuide />} />

              {/* data science -> case studies */}
              <Route path="data-science/case-studies/helped-streamline-inventory-management-to-electronics-firm.asp" element={<InventoryRpaCaseStudy />} />
              <Route path="data-science/case-studies/helped-healthcare-service-provider-with-chart-extraction.asp" element={<HealthcareChartExtractionCaseStudy />} />
              <Route path="data-science/case-studies/reduced-client-onboarding-time-for-la-based-bank.asp" element={<LABankOnboardingCaseStudy />} />
              <Route path="data-science/case-studies/digital-transformation-to-african-automotive-firm.asp" element={<AutomotiveFirmCaseStudy />} />
              <Route path="data-science/case-studies/helped-healthcare-company-to-increase-service-portfolio.asp" element={<HealthcarePortfolioCaseStudy />} />
              <Route path="data-science/case-studies/plugin-design-using-predictive-algorithm.asp" element={<NoSQLtoSQLCaseStudy />} />
              <Route path="data-science/case-studies/high-value-transaction-parties-identification.asp" element={<HighValueTransactionsCaseStudy />} />
              <Route path="data-science/case-studies/document-processing-automation-platform-development.asp" element={<DocumentProcessingCaseStudy />} />
              <Route path="data-science/case-studies/open-source-analytics-workbench-for-bank.asp" element={<OpenSourceAnalyticsWorkbenchCaseStudy />} />
              <Route path="data-science/case-studies/created-data-storage-processing-infrastructure.asp" element={<DataStorageProcessingInfrastructureCaseStudy />} />
              <Route path="data-science/case-studies/helped-us-mortgage-company-automating-lqi-process.asp" element={<MortgageLQICaseStudy />} />
              <Route path="data-science/case-studies/route-optimization-to-streamline-delivery.asp" element={<RouteOptimizationCaseStudy />} />
              <Route path="data-science/case-studies/dynamic-data-collection-for-logistics-firm.asp" element={<LogisticsTelemetryCaseStudy />} />

              {/* Photo editing -> Photo retouching */}
              <Route path="photo-editing/photo-retouching/background-removal-services.asp" element={<BackgroundRemoval />} />
              <Route path="photo-editing/photo-retouching/batch-photo-editing-services.asp" element={<BatchPhotoEditing />} />
              <Route path="photo-editing/photo-retouching/photo-enhancement-services.asp" element={<PhotoEnhancement />} />
              <Route path="imaging/album-design-services.asp" element={<AlbumDesignServicesPage />} />
              <Route path="photo-editing/photo-retouching/bulk-photo-editing-services.asp" element={<BulkPhotoEditing />} />


              {/* Photo editing -> clipping path */}
              <Route path="photo-editing/clipping-path/product-photo-editing-services.asp" element={<ProductPhotoEditing />} />
              <Route path="photo-editing/clipping-path/hair-masking-services.asp" element={<HairMaskingServices />} />
              <Route path="photo-editing/clipping-path/car-image-clipping-services.asp" element={<CarImageClipping />} />
              <Route path="photo-editing/clipping-path/ghost-mannequin-service.asp" element={<GhostMannequinServices />} />
              <Route path="photo-editing/clipping-path/image-masking-services.asp" element={<ImageMaskingServices />} />

              {/* Photo editing -> REal estate photo editing */}
              <Route path="photo-editing/real-estate/real-estate-still-image-enhancement-services.asp" element={<RealEstateEnhancement />} />
              <Route path="photo-editing/real-estate/real-estate-hdr-photo-editing-services.asp" element={<RealEstateHDR />} />
              <Route path="photo-editing/real-estate/real-estate-panorama-stitching-services.asp" element={<PanoramaStitchingPage />} />
              <Route path="photo-editing/real-estate/real-estate-digital-decluttering-services.asp" element={<DigitalDeclutteringPage />} />
              <Route path="photo-editing/real-estate/real-estate-aerial-photo-editing-services.asp" element={<AerialPhotoEditingPage />} />
              <Route path="photo-editing/real-estate/real-estate-virtual-tour-services.asp" element={<VirtualTourPage />} />
              <Route path="photo-editing/real-estate/real-estate-floor-plan-conversion-services.asp" element={<FloorPlanConversion />} />
              <Route path="photo-editing/real-estate/focus-stacking-services.asp" element={<FocusStackingPage />} />
              <Route path="photo-editing/real-estate/matterport-services.asp" element={<MatterportServicesPage />} />

              {/* photo printing -> wedding photo editing */}
              <Route path="photo-editing/wedding/wedding-photo-culling-services.asp" element={<WeddingPhotoCullingPage />} />
              <Route path="imaging/density-color-correction-services.asp" element={<PhotoDensityCorrectionPage />} />


              {/* photo printing -> Jewelry photo editing */}
              <Route path="photo-editing/jewelry/jewelry-retouching-services.asp" element={<JewelryRetouchingServices />} />
              <Route path="photo-editing/jewelry/jewelry-photo-clipping-services.asp" element={<JewelryClippingServices />} />

              {/* photo printing -> ecommerce photo editing */}
              <Route path="imaging/articles/ecommerce-image-clipping.asp" element={< EcommerceImageClipping />} />

              {/* photo printing -> portrait retouching */}
              <Route path="photo-editing/portrait/sports-photo-editing-services.asp" element={< SportsPhotoEditing />} />
              <Route path="photo-editing/portrait/fashion-photo-editing-services.asp" element={< FashionPhotoEditing />} />
              <Route path="photo-editing/portrait/photo-restoration-services.asp" element={< PhotoRestorationPage />} />
              <Route path="photo-editing/portrait/photo-manipulation-services.asp" element={< PhotoManipulationPage />} />
              <Route path="photo-editing/portrait/headshot-retouching-services.asp" element={<HeadshotRetouchingPage />} />
              <Route path="photo-editing/portrait/newborn-photo-editing-services.asp" element={<NewbornPhotoEditingPage />} />
              <Route path="photo-editing/portrait/lightroom-editing-services.asp" element={<LightroomEditingPage />} />
              <Route path="photo-editing/portrait/school-photo-editing-services.asp" element={<SchoolPhotoEditing />} />
              <Route path="photo-editing/portrait/cloth-pattern-tiling-services.asp" element={<ClothPatternTilingPage />} />

              {/* photo printing -> photoshop */}
              <Route path="photo-editing/photoshop/photoshop-advanced-retouching-services.asp" element={<PhotoshopAdvancedRetouchingPage />} />


              {/* photo printing -> photo editing UK */}
              <Route path="uk/photo-editing/photo-retouching-services.asp" element={<PhotoRetouchingUK />} />

              <Route path="uk/photo-editing/real-estate-photo-editing-services.asp" element={<RealEstateEditingUK />} />
              <Route path="uk/photo-editing/clipping-path-service.asp" element={<ClippingPathUK />} />
              <Route path="uk/photo-editing/portrait/photo-restoration-services.asp" element={<PhotoRestorationUK />} />

              {/* photo printing -> panorama*/}
              <Route path="photo-editing/panorama/360-degree-panorama-photo-stitching-services.asp" element={<PanoramaStitchingServicesUK />} />
              <Route path="photo-editing/panorama/fisheye-panorama-stitching-services.asp" element={<FisheyePanoramaStitching />} />


              {/* photo printing -> articles*/}
              <Route path="imaging/articles/major-benefits-outsourcing-professional-service-provider.asp" element={<PhotoEditingBenefits />} />
              <Route path="imaging/articles/digital-photo-restoration-process-technique-to-recreate-old-images.asp" element={<PhotoRestorationProcess />} />
              <Route path="imaging/articles/virtual-reality-game-changing-ways-to-sell-real-estate.asp" element={<VirtualRealityRealEstate />} />
              <Route path="imaging/articles/5-most-awaited-photography-trends.asp" element={<PhotographyTrends2018 />} />
              <Route path="imaging/articles/future-photography-trends.asp" element={<PhotographyTrends />} />
              <Route path="imaging/articles/wedding-photography-tips-techniques.asp" element={<WeddingPhotography />} />
              <Route path="imaging/articles/popular-wedding-photography-trends.asp" element={<WeddingTrends2018 />} />
              <Route path="imaging/articles/latest-photography-trends.asp" element={<InsanePhotographyTrends />} />
              <Route path="imaging/articles/outsourcing-photo-editing-services-to-india.asp" element={<OutsourcingPhotoEditing />} />
              <Route path="imaging/articles/raw-image-conversion-benefits.asp" element={<RawImageConversion />} />
              <Route path="imaging/articles/landscape-photography-tips-techniques.asp" element={<LandscapePhotography />} />
              <Route path="imaging/articles/color-calibration.asp" element={<ColorCalibration />} />
              <Route path="imaging/articles/photo-editing-photo-management.asp" element={<PhotoEditingManagement />} />
              <Route path="DataManagement/vectorization.asp" element={<VectorizationFAQ />} />
              <Route path="imaging/articles/photomontage-services.asp" element={<PhotomontageServices />} />
              <Route path="imaging/articles/digital-photography-services.asp" element={<DigitalPhotographyServices />} />
              <Route path="imaging/articles/cylindrical-fisheye-panorama.asp" element={<PanoramaServices />} />
              <Route path="imaging/articles/manual-focus-vs-autofocus-a-complete-guide.asp" element={<ManualVsAutoFocus />} />
              <Route path="imaging/articles/know-how-to-add-parallax-effect-to-your-images.asp" element={<ParallaxEffectGuide />} />
              <Route path="imaging/articles/what-are-lens-filters-and-why-should-you-use-them.asp" element={<LensFiltersGuide />} />
              <Route path="imaging/articles/how-to-turn-ideas-into-reality-with-photo-compositing.asp" element={<PhotoCompositing />} />
              <Route path="imaging/articles/must-try-mobile-photography-tips.asp" element={<MobilePhotographyTips />} />
              <Route path="imaging/articles/everything-you-need-to-know-about-hdr-bracketing.asp" element={<HDRBracketing />} />
              <Route path="imaging/articles/adobe-photoshop-services.asp" element={<PhotoshopServices />} />

              {/* photo printing -> case studies*/}
              <Route path="imaging/case-studies/event-photography-for-a-freelance-photographer.asp" element={<PhotographyVideographyCaseStudy />} />
              <Route path="imaging/case-studies/hair-masking-for-netherlands-based-photographer.asp" element={<HairMaskingCaseStudy />} />
              <Route path="imaging/case-studies/image-clipping-services-for-denmark-based-client.asp" element={<ImageClippingCaseStudy />} />
              <Route path="imaging/case-studies/image-clipping-for-new-zealand-bike-designers.asp" element={<NZBikeClippingCaseStudy />} />
              <Route path="imaging/case-studies/hdr-blending-image-editing-for-bangladeshi-client.asp" element={<BangladeshiClientCaseStudy />} />
              <Route path="imaging/case-studies/portrait-restoration-services-for-south-korean-client.asp" element={<SouthKoreanPortraitRestoration />} />
              <Route path="imaging/case-studies/image-clipping-retouching-for-jewelry-expert.asp" element={<JewelryClippingRetouching />} />
              <Route path="imaging/case-studies/helped-norwegian-photography-client-with-hdr-blending-service.asp" element={<NorwegianHDRBlending />} />
              <Route path="imaging/case-studies/image-clipping-for-wisconsin-insurance-firm.asp" element={<WisconsinInsuranceClipping />} />
              <Route path="imaging/case-studies/photo-masking-for-minneapolis-photographer.asp" element={<MinneapolisPhotoMasking />} />
              <Route path="imaging/case-studies/e-commerce-image-clipping-to-an-american-client.asp" element={<EcommerceImageClipping />} />
              <Route path="imaging/case-studies/panorama-stitching-for-portland-based-client.asp" element={<PanoramaStitchingCaseStudy />} />
              <Route path="imaging/case-studies/portrait-restoration-for-australian-client.asp" element={<PortraitRestorationCaseStudy />} />
              <Route path="imaging/case-studies/panorama-stitching-for-real-estate-company.asp" element={<PanoramaStitchingUKCaseStudy />} />
              <Route path="imaging/case-studies/image-editing-video-creation-3d-real-space-visualization-client.asp" element={<Global3DImageVideoCaseStudy />} />
              <Route path="imaging/case-studies/design-manipulation.asp" element={<BabySwimmingDesignCaseStudy />} />
              <Route path="imaging/case-studies/real-estate-drone-video-editing.asp" element={<RealEstateDroneVideoCaseStudy />} />
              <Route path="imaging/case-studies/outdoor-photography.asp" element={<SwedishPhotographyCaseStudy />} />
              <Route path="imaging/case-studies/image-enhancement.asp" element={<UKPhotoStudioCaseStudy />} />
              <Route path="catalog/case-studies/case-study-image-processing.asp" element={<NorwayPhotoProcessingCaseStudy />} />
              <Route path="imaging/case-studies/automobile-image-clipping.asp" element={<UKAutoTraderClippingCaseStudy />} />
              <Route path="imaging/case-studies/wide-image-stitching.asp" element={<NorwayPhotoStitchingCaseStudy />} />
              <Route path="imaging/case-studies/hdr-image-editing-video-production-company.asp" element={<HdrImageEditingCaseStudy />} />
              <Route path="imaging/case-studies/360-degree-virtual-tour-creation-stitching-drone-footage.asp" element={<DroneVirtualTourCaseStudy />} />


              {/* Insurance BPO Services -> services of insurance agencies*/}
              <Route path="insurance/insurance-eligibility-management-services.asp" element={<InsuranceEligibilityManagement />} />
              <Route path="insurance/loss-run-processing-services.asp" element={<LossRunProcessing />} />
              <Route path="insurance/insurance-quote-summary-proposal.asp" element={<InsuranceQuoteSummary />} />
              <Route path="insurance/documentation-indexing-services.asp" element={<DocumentIndexingFiling />} />
              <Route path="insurance/insurance-accounting-services.asp" element={<InsuranceAccountingBilling />} />
              <Route path="insurance/certificate-of-insurance-services.asp" element={<CertificateOfInsurance />} />
              <Route path="insurance/policy-administration.asp" element={<PolicyCheckingAdministration />} />
              <Route path="insurance/insurance-renewal-exposure-summary-services.asp" element={<RenewalExposureSummary />} />
              <Route path="insurance/insurance-claims-administration.asp" element={<ClaimsAdministration />} />
              <Route path="insurance/insurance-agency-management-services.asp" element={<AgencyManagement />} />
              <Route path="insurance/insurance-bookkeeping-forensic-accounting-services.asp" element={<BookkeepingPage />} />
              <Route path="insurance/public-policy-engagement-services.asp" element={<PublicPolicyEngagement />} />
              <Route path="insurance/policy-owner-services.asp" element={<PolicyOwnerServices />} />
              <Route path="insurance/insurance-credentialing-services.asp" element={<InsuranceCredentialingServices />} />
              <Route path="insurance/back-office-support-for-insurance-companies.asp" element={<BackOfficeAutomation />} />
              <Route path="insurance/insurance-underwriting-services.asp" element={<InsuranceUnderwriting />} />

              {/* Insurance BPO Services -> services of insurance agencies*/}
              <Route path="insurance/loss-run-processing-for-insurance-carriers.asp" element={<LossRunProcessing />} />
              <Route path="insurance/billing-accounts-receivable-services.asp" element={<InsuranceBillingAR />} />
              <Route path="insurance/policy-issuance-services.asp" element={<PolicyIssuancePage />} />
              <Route path="insurance/life-annuity-insurance-claims-management.asp" element={<LifeClaimsManagementPage />} />
              <Route path="insurance/insurance-claims-management-for-property-casualty.asp" element={<InsuranceClaimsPC />} />
              <Route path="insurance/acord-forms-processing-services.asp" element={<ACORDFormsProcessing />} />
              <Route path="insurance/new-business-setup-services.asp" element={<NewBusinessSetup />} />
              <Route path="insurance/insurance-renewals-processing-services.asp" element={<InsuranceRenewalsProcessing />} />
              <Route path="insurance/insurance-claims-management-for-carriers.asp" element={<InsuranceClaimsManagement />} />
              <Route path="insurance/policy-administration-maintenance-servicing.asp" element={<PolicyAdministration />} />

              {/* Insurance BPO Services -> services of MGA*/}
              <Route path="insurance/mga.asp" element={<InsuranceServicesMGA />} />


              {/* Insurance BPO Services -> services of MGA*/}
              <Route path="insurance/caqh-profile-services-for-insurance-credentialing.asp" element={<CAQHProfileServices />} />
              <Route path="insurance/insurance-prospect-market-research.asp" element={<InsuranceMarketResearches />} />
              <Route path="insurance/insurance-appointment-setting-services.asp" element={<InsuranceAppointmentSetting />} />
              <Route path="insurance/insurance-commission-management-services.asp" element={<CommissionManagement />} />
              <Route path="insurance/insurance-data-services.asp" element={<InsuranceDataEntry />} />
              <Route path="insurance/insurance-endorsements.asp" element={<InsuranceEndorsementsPage />} />
              <Route path="insurance/insurance-bpo-customer-support-services.asp" element={<InsuranceBPOCustomerSupport />} />
              <Route path="insurance/insurance-reporting-services.asp" element={<InsuranceReporting />} />
              <Route path="insurance/underwriting-services-for-property-casualty-insurance.asp" element={<UnderwritingPCInsurancePage />} />
              <Route path="insurance/life-annuity-insurance-underwriting-services.asp" element={<LifeAnnuityUnderwriting />} />
              <Route path="insurance/catastrophe-modeling-for-insurance.asp" element={<CatastropheModelingPage />} />
              <Route path="insurance/warranty-claims-management-services.asp" element={<WarrantyClaimsManagementPage />} />
              <Route path="insurance/business-process-management-bpm-for-insurance.asp" element={<InsuranceBPMPage />} />
              <Route path="insurance/insurance-software-development-services.asp" element={<InsuranceSoftwareDevelopment />} />
              <Route path="insurance/insurance-analytics-services.asp" element={<InsuranceAnalyticsServices />} />
              <Route path="insurance/qqcatalyst-management-services.asp" element={<QQCatalystManagement />} />
              <Route path="insurance/insurance-operations-services.asp" element={<InsuranceOperationsServices />} />

              {/* Insurance BPO Services -> Articles*/}
              <Route path="insurance/articles/why-Nimble-insurance-services-to-professional-service-provider.asp" element={<NimbleInsuranceServices />} />
              <Route path="insurance/articles/all-you-need-to-know-about-insurance-claims.asp" element={<InsuranceClaimsArticle />} />
              <Route path="insurance/articles/6-ways-data-analytics-transforming-insurance-industry.asp" element={<InsuranceDataAnalyticsArticle />} />
              <Route path="insurance/articles/all-you-need-to-know-about-e-filing-of-us-dot.asp" element={<USDotEFilingArticle />} />

              {/* Insurance BPO Services -> Case studies*/}
              <Route path="insurance/case-studies/back-office-support-to-florida-based-insurance-agency.asp" element={<InsuranceCaseStudy />} />
              <Route path="insurance/case-studies/back-office-support-for-texas-client.asp" element={<TexasInsuranceCaseStudy />} />
              <Route path="insurance/case-studies/policy-checking-for-brokerage-consulting-firm.asp" element={< PolicyCheckingCaseStudy />} />
              <Route path="insurance/case-studies/business-processing-to-insurance-firm.asp" element={<BusinessProcessingCaseStudy />} />
              <Route path="insurance/case-studies/policy-checking-services-to-insurance-company.asp" element={<PolicyCheckingFloridaCaseStudy />} />
              <Route path="insurance/case-studies/policy-checking-new-york-client.asp" element={<PolicyCheckingNYCaseStudy />} />
              <Route path="insurance/case-studies/insurance-back-office-solutions-healthcare-provider.asp" element={<HealthInsuranceBackOfficeCaseStudy />} />
              <Route path="insurance/case-studies/back-office-operations-miami-client.asp" element={<MiamiInsuranceBackOfficeCaseStudy />} />
              <Route path="financial/case-studies/maintaining-insurance-accounts.asp" element={<InsuranceAccountsCaseStudy />} />



              {/* Data Services -> Data entry*/}
              <Route path="data-support/data-entry/data-annotation-services.asp" element={<DataAnnotationServices />} />
              <Route path="data-support/data-entry/digital-asset-management-services.asp" element={<DigitalAssetManagement />} />
              <Route path="data-support/data-entry/real-estate-data-management-services.asp" element={<RealEstateDataManagement />} />
              <Route path="data-support/data-entry/email-appending-services.asp" element={<EmailAppendingServices />} />
              <Route path="data-support/data-entry/online-data-entry-services.asp" element={<OnlineDataEntryServices />} />
              <Route path="data-support/data-entry/offline-data-entry-services.asp" element={<OfflineDataEntryServices />} />
              <Route path="data-support/data-entry/directory-services.asp" element={<DirectoryServices />} />
              <Route path="data-support/data-entry/real-estate-appraisal-data-entry-services.asp" element={<RealEstateAppraisalDataEntry />} />
              <Route path="data-support/data-entry/geotagging-data-entry-services.asp" element={<GeotaggingDataEntry />} />
              <Route path="data-support/data-entry/business-card-data-entry-services.asp" element={<BusinessCardDataEntry />} />
              <Route path="data-support/data-entry/food-nutrition-scale-data-entry-services.asp" element={<FoodNutritionDataEntry />} />
              <Route path="data-support/data-entry/image-data-entry-services.asp" element={<ImageDataEntry />} />
              <Route path="data-support/data-entry/ebooks-data-entry-services.asp" element={<EbookDataEntry />} />
              <Route path="data-support/data-entry/document-data-entry-services.asp" element={<DocumentDataEntry />} />
              <Route path="data-support/data-entry/document-imaging-services.asp" element={<DocumentImaging />} />
              <Route path="data-support/data-entry/data-extraction-services.asp" element={<DataExtractionServices />} />
              <Route path="data-support/data-entry/document-management-services.asp" element={<DocumentManagementServices />} />
              <Route path="data-support/data-entry/data-entry-from-dictionaries-manuals-encyclopedias.asp" element={<EncyclopediaDataEntry />} />
              <Route path="data-support/data-entry/copy-paste-services.asp" element={<CopyPasteServices />} />
              <Route path="data-support/data-entry/offshore-data-entry-services.asp" element={<OffshoreDataEntryServices />} />
              <Route path="data-support/data-entry/catalog-data-entry-services.asp" element={<CatalogDataEntryServices />} />
              <Route path="data-support/data-entry/mailing-list-data-entry-services.asp" element={<MailingListDataEntry />} />
              <Route path="data-support/data-entry/company-reports-data-entry-services.asp" element={<CompanyReportsDataEntry />} />
              <Route path="data-support/data-entry/questionnaires-dataentry-services.asp" element={<QuestionnairesDataEntry />} />
              <Route path="data-support/data-entry/data-entry-surveys.asp" element={<SurveyDataEntry />} />
              <Route path="data-support/data-entry/invoice-forms-data-entry-services.asp" element={<InvoiceDataEntry />} />
              <Route path="data-support/data-entry/internet-data-input-services.asp" element={<InternetDataInput />} />
              <Route path="data-support/data-entry/database-entry-services.asp" element={<DatabaseDataEntry />} />
              <Route path="data-support/data-entry/restaurant-menu-data-entry-services.asp" element={<RestaurantMenuDataEntry />} />
              <Route path="data-support/data-entry/product-registration-data-entry-services.asp" element={<ProductRegistrationDataEntry />} />
              <Route path="data-support/data-entry/insurance-claims-data-entry-services.asp" element={<InsuranceClaimsDataEntry />} />
              <Route path="data-support/data-entry/enrolment-forms-data-entry-services.asp" element={<EnrollmentFormsDataEntry />} />
              <Route path="data-support/data-entry/text-numeric-data-entry-services.asp" element={<TextNumericDataEntry />} />
              <Route path="data-support/data-entry/classifieds-data-entry-services.asp" element={<ClassifiedsDataEntry />} />
              <Route path="data-support/data-entry/legal-documents-data-entry-services.asp" element={<LegalDocumentsDataEntry />} />
              <Route path="data-support/data-entry/printed-handwritten-documents-data-entry-services.asp" element={<HandwrittenDocumentsDataEntry />} />
              <Route path="data-support/data-entry/mysql-database-data-entry-services.asp" element={<MysqlDatabaseDataEntry />} />
              <Route path="data-support/data-entry/telephone-directory-data-entry-services.asp" element={<TelephoneDirectoryDataEntry />} />
              <Route path="data-support/data-entry/website-data-entry-services.asp" element={<WebsiteDataEntry />} />
              <Route path="data-support/data-entry/translingual-data-entry-services.asp" element={<TranslingualDataEntry />} />
              <Route path="data-support/data-entry/multilingual-invoice-data-entry-services.asp" element={<MultilingualInvoiceDataEntry />} />
              <Route path="data-support/data-entry/biological-species-database-creation-services.asp" element={<BiologicalSpeciesDatabase />} />
              <Route path="data-support/data-entry/quickbooks-data-entry-services.asp" element={<QuickBooksDataEntry />} />
              <Route path="data-support/data-entry/crm-data-entry-services.asp" element={<CRMDataEntry />} />
              <Route path="data-support/data-entry/digital-transaction-processing-services.asp" element={<DigitalTransactionProcessing />} />
              <Route path="data-support/data-entry/survey-forms-processing-services.asp" element={<SurveyFormsProcessing />} />
              <Route path="data-support/data-entry/crm-database-management-services.asp" element={<CRMDatabaseManagement />} />
              <Route path="data-support/data-entry/erp-data-entry-services.asp" element={<ERPDataEntry />} />
              <Route path="data-support/data-entry/sku-data-entry-services.asp" element={<SkuDataEntryPage />} />
              <Route path="data-support/data-entry/data-licensing-services.asp" element={<DataLicensingPage />} />
              <Route path="data-support/data-entry/healthcare-data-mining-services.asp" element={<HealthcareDataMining />} />
              <Route path="data-support/data-entry/remote-data-entry-services.asp" element={<RemoteDataEntry />} />
              <Route path="data-support/data-entry/address-management-services.asp" element={<AddressManagement />} />
              <Route path="data-support/data-entry/crm-data-mining-services.asp" element={<CRMDataMining />} />
              <Route path="data-support/data-entry/banking-data-entry-services.asp" element={<BankingDataEntry />} />
              <Route path="data-support/data-entry/image-search-services.asp" element={<ImageSearchServices />} />
              <Route path="data-support/data-entry/typing-services.asp" element={<TypingServices />} />
              <Route path="data-support/data-entry/medical-image-annotation-tagging-services.asp" element={<MedicalImageAnnotation />} />
              <Route path="data-support/data-entry/data-indexing-services.asp" element={<DataIndexingServices />} />
              <Route path="data-support/data-entry/book-indexing-services.asp" element={<BookIndexingServices />} />
              <Route path="data-service/data-entry/data-validation-services.asp" element={<DataValidationServices />} />
              <Route path="data-support/data-entry/data-masking-services.asp" element={<DataMaskingServices />} />
              <Route path="data-support/data-entry/data-profiling-services.asp" element={<DataProfilingServices />} />
              <Route path="data-support/data-entry/data-labeling-services.asp" element={<DataLabelingServices />} />
              <Route path="DataManagement/data-appending-services.asp" element={<DataAppendingServices />} />
              <Route path="DataManagement/data-enrichment-services.asp" element={<DataEnrichmentServices />} />


              {/* Data Services -> Data conversion*/}
              <Route path="data-support/data-conversion/jats-xml-conversion-services.asp" element={<JATSXMLConversionServices />} />
              <Route path="data-support/data-conversion/document-conversion-services.asp" element={<DocumentConversionServices />} />
              <Route path="data-support/data-conversion/file-format-conversion-services.asp" element={<FileConversionServices />} />
              <Route path="data-support/data-conversion/epub3-conversion-services.asp" element={<EPub3ConversionServices />} />
              <Route path="data-support/data-conversion/xml-conversion-services.asp" element={<XMLConversionServices />} />
              <Route path="data-support/data-conversion/pdf-conversion-services.asp" element={<PDFConversionServices />} />
              <Route path="data-support/data-conversion/book-conversion-services.asp" element={<BookConversionServices />} />
              <Route path="data-support/data-conversion/html-conversion-services.asp" element={<HTMLConversionServices />} />
              <Route path="data-support/data-conversion/sgml-conversion-services.asp" element={<SGMLConversionServices />} />
              <Route path="data-support/data-conversion/electronic-document-management-services.asp" element={<EDMServices />} />
              <Route path="data-support/data-conversion/document-formatting-services.asp" element={<DocumentFormattingServices />} />
              <Route path="data-support/data-conversion/xbrl-conversion-services.asp" element={<XBRLConversionServices />} />
              <Route path="data-support/data-conversion/pubmed-conversion-services.asp" element={<PubMedConversion />} />
              <Route path="data-support/data-conversion/pubmed-conversion-services.asp" element={<DTBookConversion />} />
              <Route path="data-support/data-conversion/psd-to-html-conversion-services.asp" element={<PSDtoHTMLConversion />} />
              <Route path="data-support/data-conversion/figma-to-html-conversion-services.asp" element={<FigmaToHtmlConversion />} />
              <Route path="data-support/data-conversion/html-to-responsive-conversion-services.asp" element={<HtmlToResponsiveConversion />} />
              <Route path="data-support/data-conversion/adobe-xd-to-html-conversion-services.asp" element={<AdobeXDToHTML />} />
              <Route path="data-support/data-conversion/html-to-wordpress-conversion-services.asp" element={<HtmlToWordPressPage />} />
              <Route path="data-support/data-conversion/sketch-to-html-conversion-services.asp" element={<SketchHtmlServices />} />
              <Route path="data-support/data-conversion/zeplin-to-html-conversion-services.asp" element={<ZeplinToHtml />} />
              <Route path="data-support/data-conversion/pdf-accessibility-services.asp" element={<PdfAccessibility />} />

              {/* Data Services -> ebook conversion*/}
              <Route path="data-support/ebook-conversion/epub-conversion-services.asp" element={<EpubConversionPage />} />
              <Route path="data-support/ebook-conversion/epub-services.asp" element={<EPubServicesPage />} />
              <Route path="data-support/ebook-conversion/kindle-conversion-services.asp" element={<KindleConversionPage />} />
              <Route path="data-support/ebook-conversion/ipad-and-iphone-ebook-conversion-services.asp" element={<IPadIPhoneConversionPage />} />
              <Route path="data-support/ebook-conversion/comprehensive-digital-services.asp" element={<ComprehensiveDigitalServices />} />
              <Route path="data-support/ebook-conversion/reflowable-ebook-conversion-services.asp" element={<ReflowableEbookServices />} />
              <Route path="data-support/ebook-conversion/fixed-layout-epub-conversion-services.asp" element={<FixedLayoutPageContent />} />
              <Route path="data-support/ebook-conversion/multilingual-ebook-conversion-services.asp" element={<MultilingualPageContent />} />
              <Route path="data-support/ebook-conversion/enhanced-ebook-conversion-services.asp" element={<EnhancedEbookPage />} />
              <Route path="data-support/ebook-conversion/web-accessible-ebook-development-services.asp" element={<WebAccessibleEbookPage />} />
              <Route path="data-support/ebook-conversion/interactive-ebook-conversion-services.asp" element={<InteractiveEbookPage />} />
              <Route path="data-support/ebook-conversion/docbook-xml-conversion-services.asp" element={<DocBookXMLPage />} />

              {/* Data Services -> property management*/}
              <Route path="DataManagement/property-management-back-office-outsourcing.asp" element={<PropertyManagementPage />} />

              {/* Data Services -> Data Processing*/}
              <Route path="data-support/data-processing/metadata-tagging-services.asp" element={<MetadataTaggingPage />} />
              <Route path="data-support/data-processing/data-transformation-services.asp" element={<DataTransformationPage />} />
              <Route path="data-support/data-processing/master-data-management-services.asp" element={<MasterDataManagementPage />} />
              <Route path="data-support/data-processing/semantic-image-segmentation-services.asp" element={<SemanticImageSegmentation />} />
              <Route path="data-support/data-processing/metadata-management-services.asp" element={<MetadataManagement />} />
              <Route path="data-support/data-processing/data-harmonization-services.asp" element={<DataHarmonization />} />
              <Route path="data-support/data-processing/data-standardization-services.asp" element={<DataStandardization />} />
              <Route path="data-support/data-processing/merge-purge-services.asp" element={<MergePurgeServices />} />
              <Route path="data-support/data-processing/forms-processing-services.asp" element={<FormsProcessingServices />} />
              <Route path="data-support/data-processing/order-processing-services.asp" element={<OrderProcessingServices />} />
              <Route path="data-support/data-processing/image-processing-services.asp" element={<ImageProcessingDS />} />
              <Route path="data-support/data-processing/data-cleansing-services.asp" element={<DataCleansing />} />
              <Route path="DataManagement/insurance-claims-processing.asp" element={<InsuranceClaimsProcessing />} />
              <Route path="data-support/data-processing/market-research-forms-processing-services.asp" element={<MarketResearchFormsProcessing />} />
              <Route path="data-support/data-processing/check-processing-services.asp" element={<CheckProcessing />} />
              <Route path="data-support/data-processing/credit-card-processing-services.asp" element={<CreditCardProcessing />} />
              <Route path="data-support/data-processing/transaction-processing-services.asp" element={<TransactionProcessing />} />
              <Route path="data-support/data-processing/survey-processing-services.asp" element={<SurveyProcessing />} />
              <Route path="data-support/data-processing/data-deduplication-services.asp" element={<DataDeduplication />} />
              <Route path="data-support/data-processing/mailing-list-compilation-services.asp" element={<MailingListCompilation />} />
              <Route path="data-support/data-processing/database-creation-services.asp" element={<DatabaseCreationServices />} />
              <Route path="data-support/data-processing/data-abstraction-services.asp" element={<DataAbstractionServices />} />
              <Route path="data-support/data-processing/data-mining-services.asp" element={<DataMiningServices />} />
              <Route path="data-support/data-processing/text-and-web-data-mining-services.asp" element={<TextWebDataMining />} />
              <Route path="data-support/data-processing/student-loan-processing-services.asp" element={<StudentLoanProcessing />} />
              <Route path="data-support/data-processing/tagging-and-annotation-services.asp" element={<TaggingAnnotationServices />} />
              <Route path="data-support/data-processing/image-annotation-services.asp" element={<ImageAnnotationServices />} />
              <Route path="data-support/data-processing/human-gesture-annotation-services.asp" element={<HumanGestureAnnotation />} />
              <Route path="data-support/data-processing/bounding-box-annotation-services.asp" element={<BoundingBoxServices />} />
              <Route path="data-support/data-processing/purchase-order-processing-services.asp" element={<PurchaseOrderProcessing />} />
              <Route path="data-support/data-processing/sku-data-management-services.asp" element={<SKUDataManagement />} />
              <Route path="data-support/data-processing/product-information-management-services.asp" element={<ProductInformationManagement />} />
              <Route path="data-support/data-processing/data-preparation-services.asp" element={<DataPreparationServices />} />
              <Route path="data-support/data-processing/video-annotation-services.asp" element={<VideoAnnotationServices />} />
              <Route path="data-support/data-processing/crm-data-cleansing-services.asp" element={<CrmDataCleansingServices />} />
              <Route path="data-support/data-processing/data-consolidation-services.asp" element={<DataConsolidationServices />} />
              <Route path="data-support/data-processing/data-provisioning-services.asp" element={<DataProvisioningServices />} />
              <Route path="data-support/data-processing/data-monitoring-services.asp" element={<DataMonitoringServices />} />
              <Route path="data-support/data-processing/data-collection-services.asp" element={<DataCollectionServices />} />
              <Route path="data-support/data-processing/data-collection-services.asp" element={<DataLifecycleManagementServices />} />
              <Route path="data-support/data-processing/dms-support-services.asp" element={<DMSServices />} />
              <Route path="data-support/data-processing/data-verification-services.asp" element={<DataVerification />} />
              <Route path="data-support/data-processing/data-scrubbing-services.asp" element={<DataScrubbing />} />
              <Route path="data-support/data-processing/document-indexing-services.asp" element={<DocumentIndexing />} />
              <Route path="data-support/ocr/document-scanning-services.asp" element={<DocumentScanning />} />


              {/* Data Services -> Data management*/}
              <Route path="data-support/data-entry/data-protection-officer-services.asp" element={<DPOPage />} />
              <Route path="data-support/data-entry/records-management-services.asp" element={<RecordsManagementPage />} />
              <Route path="data-support/data-entry/e-commerce-taxonomy-development-services.asp" element={<EcommerceTaxonomyPage />} />
              <Route path="data-support/data-entry/cloud-data-management-services.asp" element={<CloudDataManagementPage />} />
              <Route path="data-support/data-processing/sports-data-tagging-services.asp" element={<SportsDataTagging />} />
              <Route path="data-support/data-entry/data-formatting-services.asp" element={<DataFormattingServices />} />
              <Route path="data-support/data-entry/ecommerce-product-data-classification-services.asp" element={<EcommerceProductDataClassification />} />
              <Route path="data-support/data-entry/magento-data-entry-services.asp" element={<MagentoDataEntryServices />} />
              <Route path="data-support/data-processing/ecommerce-product-data-cleansing-services.asp" element={<EcommerceDataCleansing />} />
              <Route path="data-support/data-processing/data-protection-consulting-services.asp" element={<DataProtectionConsulting />} />
              <Route path="data-support/data-processing/data-governance-services.asp" element={<DataGovernanceServices />} />
              <Route path="data-support/data-processing/data-virtualization-services.asp" element={<DataVirtualizationServices />} />
              <Route path="data-support/data-processing/financial-data-processing-services.asp" element={<FinancialDataProcessingServices />} />
              <Route path="data-support/data-processing/data-quality-management-services.asp" element={<DataQualityManagementServices />} />
              <Route path="data-support/data-processing/data-modernization-services.asp" element={<DataModernizationServices />} />
              <Route path="data-support/data-entry/property-preservation-data-entry-services.asp" element={<PropertyPreservationDataEntry />} />

              {/* Data Services -> online catalog*/}
              <Route path="data-support/catalog/catalog-conversion-services.asp" element={<CatalogConversionServices />} />
              <Route path="data-support/catalog/ecommerce-product-data-entry-services.asp" element={<EcommerceDataEntryServices />} />
              <Route path="data-support/catalog/catalog-processing-services.asp" element={<CatalogProcessingServices />} />
              <Route path="data-support/catalog/product-catalog-maintenance-services.asp" element={<ProductCatalogMaintenance />} />
              <Route path="data-support/catalog/catalog-content-management-services.asp" element={<CatalogContentManagement />} />
              <Route path="data-support/catalog/catalog-building-and-indexing-services.asp" element={<CatalogBuildingIndexing />} />

              {/* Data Services -> OCR*/}
              <Route path="data-support/ocr/ocr-cleanup-services.asp" element={<OCRCleanupServices />} />
              <Route path="data-support/ocr/document-digitization-services.asp" element={<DocumentDigitizationServices />} />
              <Route path="data-support/ocr/ocr-conversion-services.asp" element={<OCRConversionServices />} />

              {/* Data Services -> Industries*/}
              <Route path="DataManagement/manufacturing-data-entry-services.asp" element={<ManufacturingDataEntry />} />
              <Route path="DataManagement/healthcare-data-entry-services.asp" element={<HealthcareDataEntry />} />
              <Route path="DataManagement/architectural-data-entry-services.asp" element={<ArchitecturalDataEntry />} />
              <Route path="DataManagement/gaming-data-entry-services.asp" element={<GamingDataEntry />} />
              <Route path="DataManagement/government-agencies-data-entry.asp" element={<GovernmentDataEntry />} />
              <Route path="DataManagement/publishing-industry-data-entry.asp" element={<PublishingDataEntry />} />
              <Route path="DataManagement/accounting-data-entry.asp" element={<AccountingDataEntry />} />
              <Route path="DataManagement/legal-organizations-data-entry.asp" element={<LegalDataEntry />} />
              <Route path="DataManagement/educational-institutions-data-entry.asp" element={<EducationalDataEntry />} />
              <Route path="DataManagement/studio-data-entry-services.asp" element={<StudiosDataEntry />} />
              <Route path="DataManagement/aci-e-manifest-services.asp" element={<AciEManifestServices />} />

              {/* Data Services -> Articles*/}
              <Route path="DataManagement/articles/top-things-avoid-while-hiring-perfect-customs-brokerage-service-provider.asp" element={<CustomsBrokerage />} />
              <Route path="DataManagement/articles/how-can-your-firm-benefit-from-Nimble-data-entry-services.asp" element={<DataEntryBenefits />} />
              <Route path="DataManagement/articles/big-data-future-growth-challenges.asp" element={<BigData2020 />} />
              <Route path="DataManagement/articles/common-misconceptions-about-data-management.asp" element={<DataManagementMisconceptions />} />
              <Route path="DataManagement/articles/best-practices-of-ocr-data-capture.asp" element={<OCRDataCapture />} />
              <Route path="DataManagement/articles/ultimate-cheat-sheet-on-big-data-analytics.asp" element={<BigDataAnalyticsCheatSheet />} />
              <Route path="DataManagement/articles/data-mining-techniques.asp" element={<DataMiningTechniques />} />
              <Route path="DataManagement/articles/signs-you-should-invest-in-data-analytics.asp" element={<InvestInDataAnalytics />} />
              <Route path="DataManagement/articles/how-to-solve-manual-data-entry-challenges.asp" element={<ManualDataEntrySolutions />} />
              <Route path="DataManagement/articles/top-data-extraction-tools.asp" element={<TopDataExtractionTools />} />
              <Route path="DataManagement/articles/reasons-to-Nimble-product-data-entry-to-india.asp" element={<ProductDataEntry />} />
              <Route path="DataManagement/articles/cloud-data-management-trends.asp" element={<CloudDataManagement />} />
              <Route path="DataManagement/articles/data-migration-best-practices.asp" element={<DataMigrationBestPractices />} />
              <Route path="DataManagement/articles/big-data-trends.asp" element={<BigDataTrends />} />
              <Route path="DataManagement/articles/restaurant-menu-digitization-benefits.asp" element={<RestaurantMenuDigitization />} />
              <Route path="DataManagement/articles/form-creation-benefits-data-entry.asp" element={<FormCreationBenefits />} />
              <Route path="DataManagement/articles/ways-to-improve-data-accuracy.asp" element={<DataAccuracy />} />
              <Route path="DataManagement/articles/data-entry-clerk-skills.asp" element={<DataEntryClerkPage />} />
              <Route path="DataManagement/articles/get-the-data-entry-advatage-at-Nimble-Acuity.asp" element={<DataEntryIndiaPage />} />
              <Route path="DataManagement/articles/better-data-management.asp" element={<BetterDataManagementPage />} />
              <Route path="DataManagement/articles/Nimble-data-entry-to-india.asp" element={<DataEntryIndiaAdvantage />} />
              <Route path="DataManagement/articles/Nimble-data-entry-services.asp" element={<DataEntryOutsourcing />} />
              <Route path="DataManagement/articles/data-quality-solutions.asp" element={<DataQualitySolution />} />
              <Route path="DataManagement/articles/solve-data-issues.asp" element={<InaccurateDataSolution />} />
              <Route path="DataManagement/articles/spreadsheet-to-excel-conversion.asp" element={<SpreadsheetConversionPage />} />
              <Route path="DataManagement/microfilm-scanning-conversion-services.asp" element={<MicrofilmScanningPage />} />

              {/* Creative-design -> Graphic-design  */}
              <Route path="creative-services/exhibition-design-services.asp" element={<ExhibitionDesignServices />} />
              <Route path="creative-services/powerpoint-design-services.asp" element={<PowerPointDesignServices />} />
              <Route path="creative-services/embroidery-digitizing-services.asp" element={<EmbroideryServices />} />
              <Route path="creative-services/signage-design-services.asp" element={<SignageDesignServices />} />
              <Route path="creative-services/corporate-design-services.asp" element={<CorporateDesignServices />} />
              <Route path="creative-services/e-mail-design-services.asp" element={<EmailDesignServices />} />
              <Route path="creative-services/brand-design-services.asp" element={<BrandDesignServices />} />
              <Route path="creative-services/design/menu-design-services.asp" element={<MenuDesign />} />
              <Route path="creative-services/e-commerce-design-services.asp" element={<EcommerceDesign />} />
              <Route path="creative-services/web-design-services.asp" element={<WebDesign />} />
              <Route path="creative-services/label-design-services.asp" element={<LabelDesign />} />
              <Route path="creative-services/design/promotional-material-design-services.asp" element={<PromotionalMaterialDesign />} />
              <Route path="creative-services/visual-design-services.asp" element={<VisualDesignServices />} />
              <Route path="creative-services/design/business-card-design-services.asp" element={<BusinessCardDesignServices />} />
              <Route path="creative-services/newsletter-design-services.asp" element={<NewsletterDesignServices />} />
              <Route path="creative-services/design/annual-report-design-services.asp" element={<AnnualReportDesignServices />} />
              <Route path="creative-services/design/flyer-design-services.asp" element={<FlyerDesignServices />} />
              <Route path="creative-services/packaging-design-services.asp" element={<PackagingDesignServices />} />
              <Route path="creative-services/packaging-artwork-product-label-design-services.asp" element={<PackagingArtworkServices />} />
              <Route path="creative-services/3d-product-package-design-services.asp" element={<Product3DPackageDesign />} />
              <Route path="creative-services/cover-design-services.asp" element={<CoverDesignServices />} />
              <Route path="creative-services/banner-design.asp" element={<BannerDesignServices />} />
              <Route path="creative-services/brochure-design.asp" element={<BrochureDesignServices />} />
              <Route path="creative-services/hoarding-design-services.asp" element={<HoardingDesignServices />} />
              <Route path="creative-services/interior-branding-design-services.asp" element={<InteriorBrandingServices />} />
              <Route path="creative-services/design/editorial-design-services.asp" element={<EditorialDesignServices />} />
              <Route path="creative-services/design/poster-design-services.asp" element={<PosterDesignServices />} />
              <Route path="creative-services/catalog-designing-services.asp" element={<CatalogDesignServices />} />
              <Route path="creative-services/tote-bag-design-services.asp" element={<ToteBagDesignServices />} />
              <Route path="creative-services/tattoo-design-services.asp" element={<TattooDesignServices />} />
              <Route path="creative-services/infographics-design-services.asp" element={<InfographicDesignServices />} />
              <Route path="creative-services/stationery-design-services.asp" element={<StationeryDesignServices />} />
              <Route path="creative-services/design/car-wrap-design-services.asp" element={<CarWrapDesignServices />} />
              <Route path="creative-services/letterhead-design-services.asp" element={<LetterheadDesignServices />} />
              <Route path="creative-services/design/invitation-design-services.asp" element={<InvitationDesignServices />} />
              <Route path="creative-services/design/calendar-design-services.asp" element={<CalendarDesignServices />} />
              <Route path="creative-services/apparel-design-services.asp" element={<ApparelDesignServices />} />
              <Route path="creative-services/merchandise-design-services.asp" element={<MerchandiseDesignServices />} />
              <Route path="creative-services/trade-show-booth-design-services.asp" element={<TradeShowBoothDesign />} />
              <Route path="creative-services/thank-you-card-design-services.asp" element={<ThankYouCardDesign />} />
              <Route path="creative-services/t-shirt-design-services.asp" element={<TShirtDesign />} />
              <Route path="creative-services/word-template-design-services.asp" element={<WordTemplateDesign />} />
              <Route path="creative-services/sticker-design-services.asp" element={<StickerDesign />} />
              <Route path="creative-services/design/white-paper-design-services.asp" element={<WhitePaperDesign />} />
              <Route path="creative-services/campaign-design-services.asp" element={<CampaignDesign />} />
              <Route path="creative-services/design-thinking-services.asp" element={<DesignThinking />} />
              <Route path="creative-services/web-page-layout-design-services.asp" element={<WebPageLayoutDesign />} />
              <Route path="creative-services/real-estate-brochure-design-services.asp" element={<RealEstateBrochureDesign />} />
              <Route path="creative-services/marketing-and-promotional-design-services.asp" element={<MarketingCollateralDesign />} />
              <Route path="creative-services/marketing-and-promotional-design-services.asp" element={<PresentationDesignServices />} />


              {/* Creative-design -> Logo-design  */}
              <Route path="creative-services/3d-logo-design.asp" element={<Logo3DDesignServices />} />
              <Route path="creative-services/animated-logo-design.asp" element={<AnimatedLogoDesignServices />} />
              <Route path="creative-services/2d-logo-design-services.asp" element={<Logo2DDesignServices />} />
              <Route path="creative-services/vector-artwork-services.asp" element={<VectorArtworkServices />} />
              <Route path="creative-services/logo-cleanup-services.asp" element={<LogoCleanupServices />} />

              {/* Creative-design -> Artwork  */}
              <Route path="creative-services/layout-formatting-design-services.asp" element={<LayoutAndFormatting />} />
              <Route path="services/magazine-typesetting.asp" element={<MagazineDesign />} />
              <Route path="services/DTP.asp" element={<DesktopPublishing />} />
              <Route path="creative-services/book-layout-design.asp" element={<BookLayout />} />
              <Route path="creative-services/image-optimization-vectorization-services.asp" element={<ImageOptimization />} />
              <Route path="creative-services/image-to-vector-conversion-services.asp" element={<ImageToVectorConversion />} />
              <Route path="creative-services/magazine-digitization-services.asp" element={<MagazineDigitization />} />
              <Route path="creative-services/2d-art-services.asp" element={<Art2DServices />} />

              {/* Creative-design -> Prepress */}
              <Route path="creative-services/typesetting-services.asp" element={<TypesettingServices />} />


              {/* Creative-design -> Audio Editing */}
              <Route path="creative-services/podcast-editing-services.asp" element={<PodcastEditing />} />
              <Route path="creative-services/audio-conversion-services.asp" element={<AudioConversion />} />
              <Route path="creative-services/ad-jingle-creation-services.asp" element={<AdJingleCreation />} />
              <Route path="creative-services/corporate-audio-editing-services.asp" element={<CorporateAudioEditing />} />
              <Route path="creative-services/radio-program-editing-services.asp" element={<RadioProgramEditing />} />
              <Route path="creative-services/music-editing-and-mixing-services.asp" element={<MusicEditingMixing />} />

              {/* Creative-design -> Advertising */}
              <Route path="creative-services/digital-advertising.asp" element={<AdvertisingDesignServices />} />

              {/* Creative-design -> Storyboard creation */}
              <Route path="creative-services/character-creation-services.asp" element={<CharacterCreationServices />} />
              <Route path="creative-services/character-designing-services.asp" element={<CharacterDesigningServices />} />
              <Route path="creative-services/storyboard-animatic-services.asp" element={<StoryboardAnimaticServices />} />
              <Route path="creative-services/cartoon-storyboard-services.asp" element={<CartoonStoryboardServices />} />
              <Route path="creative-services/video-game-storyboard-services.asp" element={<VideoGameStoryboardServices />} />
              <Route path="creative-services/photomatic-storyboard-services.asp" element={<PhotomaticStoryboardServices />} />
              <Route path="creative-services/illustration-storyboard-services.asp" element={<IllustrationStoryboardServices />} />
              <Route path="creative-services/elearning-storyboard-services.asp" element={<ELearningStoryboardServices />} />

              {/* Creative-design -> Storyboard creation */}
              <Route path="creative-services/3d-sculpting-services.asp" element={<ThreeDSculptingServices />} />
              <Route path="creative-services/3d-game-modeling-services.asp" element={<ThreeDGameModelingServices />} />
              <Route path="creative-services/3d-texturing-services.asp" element={<ThreeDTexturingServices />} />
              <Route path="creative-services/3d-environment-design-services.asp" element={<ThreeDEnvironmentServices />} />

              {/* Creative-design ->creative-uk*/}
              <Route path="uk/creative/video-editing/wedding-video-editing-services.asp" element={<WeddingVideoEditing />} />
              <Route path="uk/creative/video-editing/video-editing-services.asp" element={<VideoEditingServicesUK />} />
              <Route path="uk/creative/graphic-design-services.asp" element={<GraphicDesignServicesUK />} />
              <Route path="uk/creative/video-editing/real-estate-video-editing-services.asp" element={<RealEstateVideoEditing />} />

              {/* Creative-design ->Video-Editing*/}
              <Route path="creative-services/film/corporate-video-editing.asp" element={<CorporateVideoEditing />} />
              <Route path="creative-services/film/edius-video-editing.asp" element={<EdiusServicesPage />} />
              <Route path="creative-services/film/explainer-video-creation-services.asp" element={<ExplainerVideoPage />} />
              <Route path="creative-services/film/" element={<FilmServicesPage />} />
              <Route path="creative-services/holiday-video-editing-services.asp" element={<HolidayVideoEditing />} />
              <Route path="creative-services/motion-graphic-services.asp" element={<MotionGraphicsPage />} />
              <Route path="creative-services/film/mp4-video-editing.asp" element={<MP4VideoEditingPage />} />
              <Route path="creative-services/film/real-estate-drone-video-editing-services.asp" element={<RealEstateDroneVideoEditing />} />
              <Route path="creative-services/film/real-estate-video-editing-services.asp" element={<RealEstateVideoEditingPage />} />
              <Route path="creative-services/film/360-degree-video-editing.asp" element={<Video360Page />} />
              <Route path="creative-services/film/video-compositing-services.asp" element={<VideoCompositingPage />} />
              <Route path="creative-services/wedding-video-editing-services.asp" element={<WeddingVideoEditing />} />
              <Route path="creative-services/film/youtube-monitoring-services.asp" element={<YouTubeMonitoringPage />} />
              <Route path="creative-services/articles/artwork-personalization-localization-through-ai-in-design.asp" element={<MovieEditingServices />} />
              <Route path="creative-services/film/youtube-video-editing.asp" element={<YouTubeEditingServices />} />
              <Route path="creative-services/film/gopro-video-editing.asp" element={<GoProVideoEditing />} />
              <Route path="creative-services/video-brochure.asp" element={<VideoBrochureServices />} />
              <Route path="creative-services/film/video-summary-services.asp" element={<VideoSummaryServices />} />
              <Route path="creative-services/film/online-video-editing-services.asp" element={<OnlineVideoEditingServices />} />
              <Route path="creative-services/film/home-video-editing-services.asp" element={<HomeVideoEditingServices />} />
              <Route path="creative-services/film/sports-video-editing-services.asp" element={<SportsVideoEditingServices />} />
              <Route path="creative-services/video-cropping-services.asp" element={<VideoCroppingServices />} />
              <Route path="creative-services/video-trimming-services.asp" element={<VideoTrimmingServices />} />
              <Route path="creative-services/film-re-editing-services.asp" element={<FilmReeditingServices />} />
              <Route path="creative-services/film/video-tagging-services.asp" element={<VideoTaggingServices />} />
              <Route path="creative-services/film/video-stabilizing-services.asp" element={<VideoStabilizingServices />} />
              <Route path="creative-services/film/testimonial-video-editing-services.asp" element={<TestimonialVideoEditing />} />
              <Route path="creative-services/film/virtual-reality-post-production-services.asp" element={<VRPostProduction />} />
              <Route path="creative-services/film/product-video-editing-services.asp" element={<ProductVideoEditing />} />
              <Route path="creative-services/film/drone-video-editing-services.asp" element={<DroneVideoEditing />} />
              <Route path="creative-services/film/video-clipping-services.asp" element={<VideoClippingServices />} />
              <Route path="creative-services/medical-video-editing-services.asp" element={<MedicalVideoEditingServices />} />
              <Route path="creative-services/interview-video-editing-services.asp" element={<InterviewVideoEditing />} />
              <Route path="creative-services/film/vlog-video-editing-services.asp" element={<VlogVideoEditing />} />
              <Route path="creative-services/film/picture-to-video-editing-services.asp" element={<PictureToVideoEditing />} />
              <Route path="creative-services/3d-explainer-video-production-services.asp" element={<ExplainerVideoServices />} />
              <Route path="creative-services/sales-pitch-video-editing-services.asp" element={<SalesPitchVideoEditing />} />
              <Route path="creative-services/film/medical-video-production-services.asp" element={<MedicalVideoProduction />} />


              {/* Creative-design ->Articles*/}
              <Route path="creative-services/film/movie-editing-services.asp" element={<OutsourcingCreativeDesign />} />
              <Route path="creative-services/articles/8-tips-to-make-animation-realistic.asp" element={<AnimationTips />} />
              <Route path="creative-services/articles/top-21-graphic-design-trends.asp" element={<GraphicDesignTrends />} />
              <Route path="creative-services/articles/video-editing-tips-and-tricks.asp" element={<VideoEditingTips />} />
              <Route path="creative-services/articles/top-graphic-design-resources.asp" element={<GraphicDesignResources />} />
              <Route path="creative-services/articles/drone-video-editing-tips.asp" element={<DroneVideoEditingTips />} />
              <Route path="creative-services/articles/graphic-design-trends-predictions.asp" element={<GraphicDesignPredictions2018 />} />
              <Route path="creative-services/articles/10-emerging-videography-trends.asp" element={<VideographyTrends2018 />} />
              <Route path="creative-services/articles/quick-effective-video-editing-tools.asp" element={<VideoEditingTools />} />
              <Route path="creative-services/articles/brochure-printing-tips.asp" element={<BrochurePrintingTips />} />
              <Route path="creative-services/articles/prepress-publishing-printing.asp" element={<PrepressTips />} />
              <Route path="creative-services/articles/prepress-infrastructure.asp" element={<PrepressInfrastructure />} />
              <Route path="content/business-writing.asp" element={<BusinessWriting />} />
              <Route path="creative-services/articles/the-potential-and-perils-of-outsourcing-writing-to-india.asp" element={<OutsourcingWriting />} />
              <Route path="creative-services/articles/changing-face-of-virtual-reality.asp" element={<VirtualReality />} />
              <Route path="creative-services/articles/looking-for-a-writer-in-india-discover-diversity.asp" element={<WritersInIndia />} />
              <Route path="creative-services/articles/10-key-elements-magazine-layout-design.asp" element={<MagazineLayoutGuide />} />
              <Route path="creative-services/articles/magazine-design-layout-tips.asp" element={<MagazineTips />} />
              <Route path="creative-services/articles/correct-format-digital-artwork.asp" element={<DigitalArtworkFormat />} />
              <Route path="creative-services/articles/faqs-on-adobe-creative-suite.asp" element={<AdobeSuiteFAQs />} />
              <Route path="creative-services/articles/storyboarding-tips-for-short-films.asp" element={<StoryboardingTips />} />
              <Route path="creative-services/articles/video-editing-software-proficiency.asp" element={<VideoEditingProficiency />} />
              <Route path="creative-services/articles/artwork-personalization-localization-through-ai-in-design.asp" element={<PersonalizingAIArtwork />} />


              {/* Creative-design -> Illustration */}
              <Route path="creative-services/veterinary-illustration-services.asp" element={<VeterinaryIllustration />} />
              <Route path="creative-services/product-illustration-services.asp" element={<ProductIllustration />} />
              <Route path="creative-services/children-book-illustration.asp" element={<ChildrensBookIllustration />} />
              <Route path="creative-services/book-illustration-services.asp" element={<BookIllustrationServices />} />
              <Route path="creative-services/scientific-illustration-services.asp" element={<ScientificIllustrationServices />} />
              <Route path="creative-services/fashion-illustration-services.asp" element={<FashionIllustration />} />
              <Route path="creative-services/sports-illustration-services.asp" element={<SportsIllustration />} />
              <Route path="creative-services/architectural-illustration-services.asp" element={<ArchitecturalIllustration />} />
              <Route path="creative-services/comic-illustration-services.asp" element={<ComicIllustration />} />
              <Route path="creative-services/brand-illustration-services.asp" element={<BrandIllustration />} />
              <Route path="creative-services/storyboard-illustration-services.asp" element={<StoryboardIllustration />} />
              <Route path="creative-services/vector-illustration-services.asp" element={<VectorIllustration />} />
              <Route path="creative-services/pop-art-illustration-services.asp" element={<PopArtIllustration />} />
              <Route path="creative-services/surgical-illustration-services.asp" element={<SurgicalIllustration />} />
              <Route path="creative-services/dental-illustration-services.asp" element={<DentalIllustration />} />
              <Route path="creative-services/ophthalmology-illustration-services.asp" element={<OphthalmologyIllustration />} />
              <Route path="creative-services/image-illustration-services.asp" element={<ImageIllustrationServices />} />
              <Route path="creative-services/mascot-design-services.asp" element={<MascotDesignServices />} />
              <Route path="creative-services/educational-illustration-services.asp" element={<EducationalIllustration />} />
              <Route path="creative-services/character-illustration-services.asp" element={<CharacterIllustration />} />
              <Route path="creative-services/2d-infographics-video-production-services.asp" element={<InfographicsVideoPage />} />
              <Route path="creative-services/insurance-illustration-services.asp" element={<InsuranceIllustration />} />
              <Route path="creative-services/2d-infographic-services.asp" element={<Infographics2D />} />
              <Route path="creative-services/comic-book-illustration-services.asp" element={<ComicIllustrationServices />} />
              <Route path="creative-services/pet-illustration-services.asp" element={<PetIllustrationServices />} />


              {/* Creative-design -> Writing services */}
              <Route path="creative-services/writing/textediting-proofreading-services.asp" element={<TextEditingProofreading />} />
              <Route path="creative-services/writing/proofreading.asp" element={<ProofreadingServices />} />
              <Route path="creative-services/writing/content-editing.asp" element={<ContentEditingServices />} />
              <Route path="creative-services/writing/content-rewriting.asp" element={<ContentRewritingServices />} />
              <Route path="creative-services/writing/content-development-services.asp" element={<ContentWritingServices />} />
              <Route path="creative-services/writing/SEO-content-writing.asp" element={<SEOContentWritingServices />} />
              <Route path="creative-services/writing/review-summary-writing.asp" element={<SummaryReviewWritingServices />} />
              <Route path="creative-services/writing/article-writing.asp" element={<ArticleWritingServices />} />
              <Route path="creative-services/writing/description-writing.asp" element={<ProductDescriptionServices />} />
              <Route path="creative-services/writing/blog-writing.asp" element={<BlogWritingServices />} />
              <Route path="creative-services/writing/business-writing.asp" element={<BusinessWritingServices />} />
              <Route path="creative-services/writing/academic-writing.asp" element={<AcademicWritingServices />} />
              <Route path="creative-services/writing/speech-writing.asp" element={<SpeechWritingServices />} />
              <Route path="creative-services/writing/medical-writing.asp" element={<MedicalWritingService />} />
              <Route path="creative-services/writing/legal-writing.asp" element={<LegalWritingServices />} />
              <Route path="creative-services/writing/travel-writing.asp" element={<TravelWritingServices />} />
              <Route path="content/technical-writing.asp" element={<TechnicalWritingServices />} />
              <Route path="kpo/abstract-writing.asp" element={<AbstractWritingServices />} />
              <Route path="creative-services/writing/website-copywriting-services.asp" element={<WebsiteCopywritingServices />} />
              <Route path="creative-services/writing/scientific-writing-services.asp" element={<ScientificWritingServices />} />
              <Route path="creative-services/writing/manuscript-editing-services.asp" element={<ManuscriptEditingServices />} />

              {/* Creative-design -> Animation */}
              <Route path="creative-services/stock-animation-services.asp" element={<ManuscriptEditingService />} />
              <Route path="creative-services/feature-film-animation-services.asp" element={<FeatureFilmAnimationServices />} />
              <Route path="creative-services/visual-effects-services.asp" element={<VisualEffectsServices />} />
              <Route path="creative-services/rotoscoping-services.asp" element={<RotoscopingServices />} />
              <Route path="creative-services/2D-animation-services.asp" element={<Animation2DServices />} />
              <Route path="creative-services/animatics-services.asp" element={<AnimaticsServices />} />
              <Route path="creative-services/3D-animation-services.asp" element={<ThreeDAnimationServices />} />
              <Route path="creative-services/flash-animation-services.asp" element={<FlashAnimationServices />} />
              <Route path="creative-services/3d-animation-rendering-services.asp" element={<AnimationRenderingServices />} />
              <Route path="creative-services/whiteboard-animation-services.asp" element={<WhiteboardAnimationServices />} />
              <Route path="creative-services/tv-commercial-animation-services.asp" element={<TVCommercialAnimationServices />} />
              <Route path="creative-services/character-animation-services.asp" element={<CharacterAnimationServices />} />
              <Route path="creative-services/stop-motion-animation-services.asp" element={<StopMotionAnimationServices />} />
              <Route path="creative-services/product-animation-services.asp" element={<ProductAnimationServices />} />
              <Route path="creative-services/explainer-video-animation-services.asp" element={<ExplainerVideoServices />} />
              <Route path="creative-services/titling-animation-services.asp" element={<TitlingAnimationServices />} />
              <Route path="creative-services/architectural-animation-services.asp" element={<ArchitecturalAnimationServices />} />
              <Route path="creative-services/animated-feature-films-services.asp" element={<AnimatedFeatureFilms />} />
              <Route path="creative-services/cutout-animation-services.asp" element={<CutoutAnimation />} />
              <Route path="creative-services/forensic-animation-services.asp" element={<ForensicAnimation />} />
              <Route path="creative-services/engineering-animation-services.asp" element={<EngineeringAnimation />} />
              <Route path="creative-services/music-video-animation-services.asp" element={<MusicVideoAnimation />} />
              <Route path="creative-services/kinetic-typography-services.asp" element={<KineticTypography />} />
              <Route path="creative-services/cartoon-animation-services.asp" element={<CartoonAnimation />} />
              <Route path="creative-services/rotopaint-art-services.asp" element={<RotoPaintArt />} />
              <Route path="creative-services/vfx-wire-removal-services.asp" element={<VFXWireRemoval />} />


              {/* Call center services -> Inbound call center */}
              <Route path="call-center/inbound/800-answering-services.asp" element={<AnsweringServices800 />} />
              <Route path="call-center/inbound/order-taking-services.asp" element={<OrderTakingServices />} />
              <Route path="call-center/inbound/rebate-processing-services.asp" element={<RebateProcessing />} />
              <Route path="call-center/inbound/claims-processing-services.asp" element={<ClaimsProcessing />} />
              <Route path="call-center/inbound/product-information-request-services.asp" element={<ProductInformationRequest />} />
              <Route path="call-center/inbound/product-recall-management-services.asp" element={<ProductRecallManagement />} />
              <Route path="call-center/inbound/interactive-voice-response.asp" element={<IVRServices />} />
              <Route path="call-center/inbound/billing-query-services.asp" element={<BillingQueryServices />} />
              <Route path="call-center/inbound/reservation-booking-services.asp" element={<ReservationBooking />} />
              <Route path="call-center/call-center-consulting/omnichannel-contact-center-services.asp" element={<OmnichannelContactCenter />} />
              <Route path="call-center/inbound/inbound-sales-services.asp" element={<InboundSales />} />
              <Route path="call-center/inbound/sales-management-services.asp" element={<SalesManagement />} />
              <Route path="call-center/inbound/consumer-response-services.asp" element={<ConsumerResponse />} />
              <Route path="call-center/inbound/hotline-services.asp" element={<HotlineServices />} />
              <Route path="call-center/inbound/enquiry-handling-services.asp" element={<EnquiryHandling />} />

              {/* Call center services -> Outbound call center */}
              <Route path="call-center/outbound/database-development-management-services.asp" element={<DatabaseDevelopment />} />

              <Route path="call-center/outbound/debt-collection-services.asp" element={<DebtCollection />} />
              <Route path="call-center/outbound/disaster-recovery-services.asp" element={<DisasterRecovery />} />
              <Route path="callcenter/database-selling-services.asp" element={<DatabaseSellingServices />} />
              <Route path="call-center/outbound/direct-mail-follow-up-services.asp" element={<DirectMailFollowUpServices />} />
              <Route path="call-center/outbound/customer-follow-up-services.asp" element={<CustomerFollowUpServices />} />
              <Route path="call-center/outbound/market-intelligence-services.asp" element={<MarketIntelligenceServices />} />
              <Route path="call-center/outbound/customer-satisfaction-survey-services.asp" element={<CustomerSatisfactionSurvey />} />
              <Route path="call-center/outbound/customer-acquisition-services.asp" element={<CustomerAcquisition />} />
              <Route path="call-center/outbound/cati-services.asp" element={<CATIServices />} />
              <Route path="call-center/outbound/subscription-renewal-services.asp" element={<SubscriptionRenewalServices />} />
              <Route path="call-center/outbound/customer-loyalty-management-services.asp" element={<CustomerLoyaltyManagement />} />
              <Route path="call-center/outbound/email-list-management-services.asp" element={<EmailListManagement />} />
              <Route path="call-center/outbound/customer-retention-services.asp" element={<CustomerRetention />} />
              <Route path="call-center/outbound/product-promotion-services.asp" element={<ProductPromotion />} />
              <Route path="call-center/outbound/upselling-and-cross-selling-services.asp" element={<UpsellingCrossSelling />} />

              {/* Call center services -> Telemarketing */}
              <Route path="call-center/telemarketing/cold-calling-services.asp" element={<ColdCallingServices />} />
              <Route path="call-center/telemarketing/real-estate-cold-calling-services.asp" element={<RealEstateColdCalling />} />
              <Route path="call-center/telemarketing/b2b-cold-calling-services.asp" element={<B2BColdCalling />} />
              <Route path="call-center/telemarketing/b2c-cold-calling-services.asp" element={<B2CColdCalling />} />
              <Route path="call-center/telemarketing/teleprospecting-services.asp" element={<TeleprospectingServices />} />
              <Route path="call-center/telemarketing/cold-canvassing-services.asp" element={<ColdCanvassingServices />} />
              <Route path="call-center/telemarketing/b2b-telesales-services.asp" element={<B2BTelesalesServices />} />
              <Route path="call-center/telemarketing/commercial-insurance-telemarketing-services.asp" element={<InsuranceTelemarketingServices />} />
              <Route path="call-center/telemarketing/telecommunication-consulting-services.asp" element={<TelecomConsultingServices />} />
              <Route path="callcenter/b2b-telemarketing-services.asp" element={<B2BTelemarketingServices />} />
              <Route path="call-center/telemarketing/insurance-telemarketing-services.asp" element={<InsuranceTelemarketingPage />} />
              <Route path="call-center/telemarketing/telesales-customer-acquisition-services.asp" element={<TelesalesCustomerAcquisitionPage />} />

              {/* Call center services -> Lead generation */}
              <Route path="call-center/lead-generation/lead-generation-services-for-bfsi-industry.asp" element={<BFSILeadGeneration />} />
              <Route path="call-center/lead-generation/b2c-lead-generation-services.asp" element={<B2CLeadGeneration />} />
              <Route path="call-center/lead-generation/telemarketing-lead-generation-services.asp" element={<TelemarketingLeadGeneration />} />
              <Route path="call-center/lead-generation/lead-generation-for-the-travel-hospitality-industry.asp" element={<TravelHospitalityLeadGen />} />
              <Route path="call-center/lead-generation/lead-generation-for-logistics-transportation-industry.asp" element={<LeadGenerationLogistics />} />
              <Route path="call-center/lead-generation/local-lead-generation-services.asp" element={<LocalLeadGeneration />} />
              <Route path="call-center/lead-generation/b2b-lead-generation-services.asp" element={<B2BLeadGeneration />} />
              <Route path="call-center/lead-generation/lead-generation-process.asp" element={<LeadGenerationProcess />} />
              <Route path="call-center/lead-generation/lead-generation-for-it-companies.asp" element={<LeadGenerationIT />} />
              <Route path="call-center/lead-generation/education-sector-lead-generation-services.asp" element={<LeadGenerationEducation />} />
              <Route path="call-center/lead-generation/ecommerce-lead-generation-services.asp" element={<EcommerceLeadGen />} />
              <Route path="call-center/lead-generation/lead-generation-for-small-business.asp" element={<StartupLeadGen />} />
              <Route path="call-center/lead-generation/real-estate-lead-generation-services.asp" element={<RealEstateLeadGeneration />} />
              <Route path="call-center/lead-generation/mortgage-lead-generation-services.asp" element={<MortgageLeadGeneration />} />
              <Route path="call-center/lead-generation/appointment-setting-services.asp" element={<AppointmentSetting />} />
              <Route path="call-center/lead-generation/outbound-lead-generation-services.asp" element={<OutboundLeadGeneration />} />
              <Route path="call-center/lead-generation/b2b-appointment-setting-services.asp" element={<B2BAppointmentSetting />} />
              <Route path="call-center/lead-generation/b2c-appointment-setting-services.asp" element={<B2CAppointmentSetting />} />
              <Route path="call-center/lead-generation/lead-generation-for-the-chemical-and-manufacturing-industry.asp" element={<LeadGenChemicalManufacturing />} />
              <Route path="call-center/lead-generation/soft-lead-generation-services.asp" element={<SoftLeadGeneration />} />
              <Route path="call-center/lead-generation/lead-qualification-services.asp" element={<LeadQualification />} />
              <Route path="call-center/lead-generation/insurance-lead-generation-services.asp" element={<InsuranceLeadGeneration />} />
              <Route path="call-center/lead-generation/home-insurance-lead-generation-services.asp" element={<HomeInsuranceLeadGen />} />
              <Route path="call-center/lead-generation/health-insurance-lead-generation-services.asp" element={<HealthInsuranceLeadGen />} />
              <Route path="call-center/lead-generation/trucking-insurance-lead-generation-services.asp" element={<TruckingInsuranceLeadGen />} />
              <Route path="call-center/lead-generation/lead-generation-for-insurance-agents.asp" element={<InsuranceAgentLeadGen />} />
              <Route path="call-center/lead-generation/commercial-insurance-lead-generation-services.asp" element={<CommercialInsuranceLeadGen />} />
              <Route path="call-center/lead-generation/pet-insurance-lead-generation-services.asp" element={<PetInsuranceLeadGen />} />
              <Route path="call-center/lead-generation/life-insurance-lead-generation-services.asp" element={<LifeInsuranceLeadGen />} />
              <Route path="call-center/lead-generation/auto-insurance-lead-generation-services.asp" element={<AutoInsuranceLeadGen />} />
              <Route path="call-center/lead-generation/car-insurance-lead-generation-services.asp" element={<CarInsuranceLeadGen />} />


              {/* Call center services -> customer support*/}
              <Route path="call-center/customer-support/reactivating-dormant-client-services.asp" element={<ReactivatingDormantClient />} />
              <Route path="call-center/customer-support/third-party-verification-services.asp" element={<ThirdPartyVerification />} />
              <Route path="call-center/customer-support/click-to-talk-support-services.asp" element={<ClickToTalkSupport />} />
              <Route path="call-center/customer-support/technical-support-call-center-services.asp" element={<TechnicalSupport />} />
              <Route path="call-center/customer-support/remote-it-support-services.asp" element={<RemoteITSupport />} />
              <Route path="call-center/customer-support/toll-free-customer-support-services.asp" element={<TollFreeSupport />} />
              <Route path="call-center/customer-support/multilingual-call-center-services.asp" element={<MultilingualCallCenter />} />
              <Route path="call-center/customer-support/retail-customer-support-services.asp" element={<RetailCustomerSupport />} />
              <Route path="call-center/customer-support/retail-bpo-support-services.asp" element={<RetailBPOSupport />} />
              <Route path="call-center/customer-support/order-tracking-and-status-enquiry-services.asp" element={<OrderTrackingSupport />} />
              <Route path="call-center/customer-support/business-process-reengineering-services.asp" element={<BusinessProcessReengineering />} />
              <Route path="call-center/customer-support/complaint-management-services.asp" element={<ComplaintManagementServices />} />
              <Route path="call-center/customer-support/loyalty-program-management-services.asp" element={<LoyaltyProgramManagement />} />
              <Route path="call-center/customer-support/email-support-services.asp" element={<EmailSupportServices />} />
              <Route path="call-center/customer-support/chat-support-services.asp" element={<ChatSupportServices />} />
              <Route path="call-center/customer-support/social-media-customer-services.asp" element={<SocialMediaCustomerService />} />
              <Route path="call-center/customer-support/video-chat-support-services.asp" element={<VideoChatCustomerService />} />
              <Route path="call-center/customer-support/multi-channel-contact-center-services.asp" element={<MultiChannelContactCenter />} />
              <Route path="call-center/customer-support/railway-logistics-bpo-services.asp" element={<RailwayLogisticsBPO />} />
              <Route path="call-center/customer-support/customer-interaction-services.asp" element={<CustomerInteraction />} />
              <Route path="call-center/customer-support/ecommerce-customer-support-services.asp" element={<EcommerceSupport />} />
              <Route path="call-center/customer-support/seminar-registration-services.asp" element={<SeminarRegistration />} />
              <Route path="call-center/customer-support/consumer-product-support-services.asp" element={<ConsumerProductSupport />} />
              <Route path="call-center/customer-support/digital-agent-services.asp" element={<DigitalAgentServices />} />
              <Route path="call-center/customer-support/pre-sales-support-services.asp" element={<PreSalesSupport />} />
              <Route path="call-center/customer-support/administrative-support-services.asp" element={<AdminSupport />} />
              <Route path="call-center/customer-support/customer-service-representative-services.asp" element={<CSRServices />} />
              <Route path="call-center/customer-support/digital-customer-support-services.asp" element={<DigitalSupportServices />} />
              <Route path="call-center/customer-support/customer-experience-cx-transformation-services.asp" element={<CXTransformationServices />} />
              <Route path="call-center/customer-support/business-continuity-planning-services.asp" element={<BCPServices />} />

              {/* Call center services -> Virtual Assistant*/}
              <Route path="call-center/customer-support/business-continuity-planning-services.asp" element={<RealEstateVA />} />
              <Route path="call-center/virtual-assistant/virtual-assistant-phone-answering-services.asp" element={<VirtualAssistantPhone />} />
              <Route path="call-center/virtual-assistant/virtual-assistants-for-accounting-and-bookkeeping-services.asp" element={<AccountingBookkeepingVA />} />
              <Route path="call-center/virtual-assistant/data-entry-virtual-assistant-services.asp" element={<DataEntryVA />} />
              <Route path="call-center/virtual-assistant/virtual-appointment-scheduling-assistant-services.asp" element={<VirtualAssistantAppointments />} />
              <Route path="call-center/virtual-assistant/virtual-internet-research-assistant-services.asp" element={<VirtualAssistantInternetResearch />} />
              <Route path="call-center/virtual-assistant/virtual-business-card-scanning-assistant-services.asp" element={<VirtualAssistantBusinessCards />} />
              <Route path="call-center/virtual-assistant/virtual-desktop-publishing-assistant-services.asp" element={<VirtualAssistantDTP />} />
              <Route path="call-center/virtual-assistant/travel-planning-virtual-assistant-services.asp" element={<VirtualAssistantTravel />} />
              <Route path="call-center/virtual-assistant/virtual-correspondence-management-assistant-services.asp" element={<CorrespondenceVA />} />
              <Route path="call-center/virtual-assistant/virtual-event-planning-assistant-services.asp" element={<EventPlanningVA />} />
              <Route path="call-center/virtual-assistant/virtual-assistants-for-supply-management-services.asp" element={<SupplyManagementVA />} />
              <Route path="call-center/virtual-assistant/transaction-coordinator-services.asp" element={<TransactionCoordinator />} />
              <Route path="call-center/virtual-assistant/virtual-receptionist-services.asp" element={<VirtualReceptionistServices />} />
              <Route path="call-center/virtual-assistant/virtual-medical-assistant-services.asp" element={<VirtualMedicalAssistant />} />
              <Route path="call-center/virtual-assistant/virtual-assistant-for-healthcare.asp" element={<HealthcareVirtualAssistant />} />
              <Route path="call-center/virtual-assistant/virtual-assistant-for-small-business.asp" element={<SmallBusinessVA />} />


              {/* Call center services -> Monitoring support*/}
              <Route path="call-center/virtual-assistant/transaction-coordinator-services.asp" element={<AudioMonitoring />} />
              <Route path="call-center/call-center-monitoring/cctv-monitoring-services.asp" element={<CCTVMonitoring />} />
              <Route path="call-center/call-center-monitoring/call-quality-analytics-services.asp" element={<CallQualityAnalytics />} />
              <Route path="call-center/call-center-monitoring/call-quality-monitoring-support.asp" element={<CallQualityMonitoring />} />
              <Route path="call-center/call-center-monitoring/video-monitoring-services.asp" element={<VideoMonitoringServices />} />
              <Route path="call-center/call-center-monitoring/text-monitoring-services.asp" element={<TextMonitoringServices />} />
              <Route path="call-center/call-center-monitoring/ai-monitoring-support.asp" element={<AIMonitoringSupport />} />
              <Route path="call-center/call-center-monitoring/call-auditing-services.asp" element={<CallAuditingServices />} />
              <Route path="call-center/call-center-monitoring/voice-broadcasting-services.asp" element={<VoiceBroadcastingServices />} />
              <Route path="call-center/call-center-monitoring/content-monitoring-support-services.asp" element={<ContentMonitoring />} />
              <Route path="call-center/call-center-monitoring/remote-video-monitoring-services.asp" element={<RemoteVideoMonitoring />} />
              <Route path="call-center/call-center-monitoring/content-moderation-services.asp" element={<ContentModeration />} />

              {/* Call center services -> Answering services*/}
              <Route path="call-center/answering-service/phone-answering-services.asp" element={<PhoneAnsweringServices />} />
              <Route path="call-center/answering-service/medical-answering-services.asp" element={<MedicalAnsweringServices />} />
              <Route path="call-center/answering-service/real-estate-call-answering-services.asp" element={<RealEstateCallAnswering />} />
              <Route path="call-center/answering-service/after-hours-call-center-services.asp" element={<AfterHoursCallCenter />} />\

              {/* Call center services -> Call center consulting*/}
              <Route path="call-center/call-center-consulting/contact-center-services.asp" element={<ContactCenterServices />} />
              <Route path="call-center/call-center-consulting/cloud-contact-center-services.asp" element={<CloudContactCenterServices />} />
              <Route path="call-center/call-center-consulting/business-process-as-a-service.asp" element={<BPaaSServices />} />
              <Route path="call-center/call-center-consulting/contact-center-modernization-services.asp" element={<ContactCenterModernization />} />
              <Route path="call-center/call-center-consulting/contact-center-transformation-services.asp" element={<ContactCenterTransformation />} />

              {/* Call center services -> Articles*/}
              <Route path="callcenter/articles/faqs-on-inbound-customer-services.asp" element={<InboundCustomerFAQs />} />
              <Route path="call-center/articles/faqs-on-outsourcing-call-center-services.asp" element={<CallCenterFAQ />} />
              <Route path="callcenter/articles/outsourcing-inbound-customer-support-to-o2i.asp" element={<InboundCustomerSupport />} />
              <Route path="callcenter/articles/how-outsourcing-order-taking-can-increase-your-profit.asp" element={<OrderTakingProfit />} />
              <Route path="callcenter/articles/shaping-the-future-of-call-centers-efficient-workforce-management-strategies.asp" element={<CallCenterWorkforce2024 />} />
              <Route path="callcenter/articles/why-should-you-embrace-24-7-customer-support.asp" element={<CustomerSupport24x7 />} />
              <Route path="callcenter/articles/strategies-for-overcoming-call-center-challenges.asp" element={<CallCenterChallenges />} />
              <Route path="callcenter/articles/6-call-center-trends-charting-the-course-of-customer-service.asp" element={<CallCenterTrends />} />
              <Route path="callcenter/articles/embracing-offshore-call-center-services-for-strategic-business-growth.asp" element={<OffshoreCallCenters />} />
              <Route path="callcenter/articles/10-tips-to-leverage-virtual-assistant-services.asp" element={<VirtualAssistantServices />} />
              <Route path="callcenter/articles/the-impact-of-customer-support-outsourcing-on-customer-satisfaction.asp" element={<CustomerSupportOutsourcing />} />
              <Route path="callcenter/articles/what-intelligent-contact-center.asp" element={<IntelligentContactCenter />} />
              <Route path="callcenter/articles/post-pandemic-challenges-contact-centers-solutions.asp" element={<PostPandemicChallenges />} />
              <Route path="callcenter/articles/call-centers-chatbots-use-cases-opportunities.asp" element={<ChatbotsInCallCenters />} />
              <Route path="callcenter/articles/how-ai-becoming-instrumental-boosting-call-center-productivity.asp" element={<AIInCallCenters />} />
              <Route path="callcenter/articles/unique-selling-proposition-your-key-to-successful-marketing.asp" element={<USPArticle />} />
              <Route path="callcenter/articles/ivr-setup-benefits.asp" element={<IVRArticle />} />
              <Route path="callcenter/articles/benefits-of-outsourcing-call-center-services-you-must-not-miss.asp" element={<CallCenterOutsourcing />} />
              <Route path="callcenter/articles/top-benefits-of-ringless-voicemail-for-businesses.asp" element={<RinglessVoicemailBenefits />} />
              <Route path="callcenter/articles/top-post-covid-contact-center-trends-insights.asp" element={<PostCovidContactCenterTrends />} />
              <Route path="callcenter/articles/call-center-security-trends-predictions.asp" element={<CallCenterSecurityTrends />} />
              <Route path="callcenter/articles/10-reasons-why-ecom-sites-should-have-live-chat-support.asp" element={<LiveChatSupport />} />

              {/* Engineeering services - Enginerring-uk */}
              <Route path="uk/engineering/bim-services.asp" element={<BIMServicesUK />} />
              <Route path="uk/engineering/architectural-3d-modelling-drafting-rendering-services.asp" element={<ArchitecturalServicesUK />} />
              <Route path="uk/engineering/cad-services.asp" element={<CADServicesUK />} />
              <Route path="uk/engineering/revit-modeling-services.asp" element={<RevitModellingServices />} />

              {/* Engineeering services - Industries */}
              <Route path="engineering/engineering-design-for-retail-stores.asp" element={<RetailEngineeringDesign />} />

              <Route path="engineering/engineering-services-for-construction-companies.asp" element={<ConstructionEngineeringServices />} />
              <Route path="eso/construction/engineering-for-oil-gas-industry.asp" element={<OilGasEngineeringPage />} />
              <Route path="eso/construction/engineering-for-kitchen-equipment-manufacturer.asp" element={<KitchenEquipmentEngineering />} />
              <Route path="engineering/engineering-services-for-quick-service-restaurant.asp" element={<QsrEngineering />} />
              <Route path="engineering/cad-engineering-for-glass-industry.asp" element={<GlassIndustryPage />} />

              {/* Engineeering services - Infrastructure engineering */}
              <Route path="engineering/infrastructure/construction-documentation-services.asp" element={<ConstructionDocumentationPage />} />
              <Route path="engineering/infrastructure/construction-support-services.asp" element={<ConstructionSupportPage />} />
              <Route path="engineering/infrastructure/thematic-mapping-services.asp" element={<ThematicMappingPage />} />
              <Route path="engineering/infrastructure/parcel-mapping-services.asp" element={<ParcelMappingPage />} />
              <Route path="engineering/infrastructure/land-development-design-services.asp" element={<LandDevelopmentServices />} />
              <Route path="engineering/infrastructure/town-planning-services.asp" element={<TownPlanningServices />} />
              <Route path="engineering/infrastructure/urban-development-services.asp" element={<UrbanDevelopmentServices />} />
              <Route path="engineering/infrastructure/storm-sewer-drainage-design-services.asp" element={<DrainageDesignServices />} />
              <Route path="engineering/infrastructure/geographic-information-system-services.asp" element={<GISServices />} />
              <Route path="engineering/infrastructure/gis-cadd-data-development-maintenance.asp" element={<GISAndCADDServices />} />
              <Route path="engineering/infrastructure/underground-utility-mapping-services.asp" element={<UndergroundUtilityMapping />} />
              <Route path="engineering/infrastructure/highway-engineering-services.asp" element={<HighwayEngineering />} />
              <Route path="engineering/infrastructure/public-health-engineering-services.asp" element={<PublicHealthEngineering />} />
              <Route path="engineering/infrastructure/3d-corridor-mapping-generation-of-gis-database-services.asp" element={<CorridorMapping />} />
              <Route path="engineering/infrastructure/construction-sequencing-services.asp" element={<ConstructionSequencing />} />
              <Route path="engineering/infrastructure/infrastructure-planning-services.asp" element={<InfrastructurePlanning />} />
              <Route path="engineering/infrastructure/geotechnical-engineering-services.asp" element={<GeotechnicalEngineering />} />
              <Route path="engineering/infrastructure/construction-phase-services.asp" element={<ConstructionPhaseServices />} />
              <Route path="engineering/infrastructure/energy-auditing-services.asp" element={<EnergyAuditServices />} />
              <Route path="engineering/infrastructure/public-health-engineering-design-services.asp" element={<PHEDesignServices />} />

              {/* Engineeering services - Electrical engineering */}
              <Route path="engineering/electrical/lighting-control-and-design-services.asp" element={<LightingControlServices />} />

              <Route path="engineering/electrical/control-system-engineering-services.asp" element={<ControlSystemServices />} />
              <Route path="engineering/electrical/vlsi-design-services.asp" element={<VLSIDesignServices />} />
              <Route path="engineering/electrical/hardware-design-services.asp" element={<HardwareDesignServices />} />
              <Route path="engineering/electrical/electrical-instrumentation-services.asp" element={<ElectricalInstrumentationServices />} />
              <Route path="engineering/electrical/electrical-systems-design-and-drafting-services.asp" element={<ElectricalSystemsDesign />} />
              <Route path="engineering/electrical/electrical-design-and-layout-services.asp" element={<ElectricalDesignLayout />} />
              <Route path="engineering/electrical/PCB-design-and-layout-services.asp" element={<PCBDesignServices />} />
              <Route path="engineering/electrical/solar-panel-design-services.asp" element={<SolarPanelLayout />} />
              <Route path="engineering/electrical/fpga-design-services.asp" element={<FpgaDesignServices />} />
              <Route path="engineering/electrical/embedded-system-design-services.asp" element={<EmbeddedSystemDesign />} />
              <Route path="engineering/electrical/electrical-schematic-drawing-services.asp" element={<ElectricalSchematicDrawing />} />
              <Route path="engineering/electrical/electronic-circuit-design-services.asp" element={<ElectronicCircuitDesign />} />
              <Route path="engineering/electrical/energy-modeling-services.asp" element={<EnergyModelingServices />} />
              <Route path="engineering/electrical/electrical-grounding-system-design-services.asp" element={<ElectricalGroundingServices />} />
              <Route path="engineering/electrical/electrical-drafting-services.asp" element={<ElectricalDraftingServices />} />
              <Route path="engineering/electrical/pcb-reverse-engineering-services.asp" element={<PcbReverseEngineering />} />
              <Route path="engineering/electrical/electrical-2d-drafting-services.asp" element={<ElectricalDrafting />} />
              <Route path="engineering/electrical/electrical-calibration-services.asp" element={<ElectricalCalibrationServices />} />


              {/* Engineeering services - Bim */}
              <Route path="engineering/bim/mechanical-bim-services.asp" element={<MechanicalBIMServices />} />
              <Route path="engineering/bim/bim-5d-cost-estimation-services.asp" element={<BIM5DCostEstimation />} />
              <Route path="engineering/bim/bim-component-creation-services.asp" element={<BIMComponentCreation />} />
              <Route path="engineering/bim/laser-scan-to-bim-services.asp" element={<LaserScanToBIM />} />
              <Route path="engineering/bim/as-built-bim-modeling-services.asp" element={<AsBuiltBIM />} />
              <Route path="engineering/bim/bim-app-development-services.asp" element={<BIMAppDevelopment />} />
              <Route path="engineering/bim/bim-model-auditing-services.asp" element={<BIMModelAuditing />} />
              <Route path="engineering/bim/bim-execution-planning-services.asp" element={<BIMExecutionPlanning />} />
              <Route path="engineering/bim/bim-clash-detection-services.asp" element={<BIMClashDetection />} />
              <Route path="engineering/bim/bim-6d-modeling-services.asp" element={<BIM6DModeling />} />
              <Route path="engineering/bim/bim-coordination-services.asp" element={<BIMCoordination />} />
              <Route path="engineering/bim/bim-quantity-estimation-services.asp" element={<BIMQuantityEstimation />} />
              <Route path="engineering/bim/bim-3d-virtual-reality-services.asp" element={<BIMVRServices />} />
              <Route path="engineering/bim/bim-for-facility-management-services.asp" element={<BIMFacilityManagement />} />
              <Route path="engineering/bim/structural-bim-consulting-design-services.asp" element={<StructuralBIM />} />
              <Route path="engineering/bim/bim-for-civil-infrastructure-projects.asp" element={<CivilInfrastructureBIM />} />
              <Route path="engineering/bim/civil-bim-services.asp" element={<CivilBIMServices />} />
              <Route path="engineering/bim/architectural-bim-services.asp" element={<ArchitecturalBIMServices />} />
              <Route path="engineering/bim/electrical-bim-services.asp" element={<ElectricalBIMServices />} />
              <Route path="engineering/bim/structural-bim-drafting-services.asp" element={<StructuralBIMServices />} />
              <Route path="engineering/bim/bim-energy-modeling-services.asp" element={<BIMEnergyModelingServices />} />
              <Route path="engineering/bim/bim-lean-construction-services.asp" element={<BIMLeanConstructionServices />} />
              <Route path="engineering/bim/4d-bim-modeling-services.asp" element={<BIM4DModelingServices />} />


              {/* Engineeering services - CAD Services */}
              <Route path="engineering/cad/cad-design-and-drafting-services.asp" element={<CADServices />} />
              <Route path="engineering/mechanical/cad-conversion-services.asp" element={<CADConversionServices />} />
              <Route path="engineering/cad/autocad-drafting-services.asp" element={<AutoCADDraftingServices />} />
              <Route path="engineering/mechanical/mechanical-cad-drafting-services.asp" element={<MechanicalCADDraftingPage />} />
              <Route path="engineering/mechanical/autocad-conversion-services.asp" element={<AutoCADConversion />} />
              <Route path="engineering/architectural/matterport-cad-conversion-services.asp" element={<MatterportToCAD />} />
              <Route path="engineering/mechanical/legacy-conversion-services.asp" element={<LegacyConversion />} />
              <Route path="engineering/civil/paper-to-cad-conversion-services.asp" element={<PaperToCAD />} />
              <Route path="engineering/mechanical/cad-automation-services.asp" element={<CADAutomation />} />
              <Route path="engineering/mechanical/cad-migration-services.asp" element={<CADMigration />} />

              {/* Engineeering services - Structural engineering Services */}
              <Route path="engineering/structural/precast-panel-detailing-services.asp" element={<PrecastDetailing />} />
              <Route path="engineering/structural/skid-design-services.asp" element={<SkidDesign />} />
              <Route path="engineering/structural/high-rise-structures-design-analysis-services.asp" element={<HighRiseDesign />} />
              <Route path="engineering/structural/industrial-structures-design-and-analysis-services.asp" element={<IndustrialStructuresDesign />} />
              <Route path="engineering/structural/custom-home-design-and-analysis-services.asp" element={<CustomHomeDesign />} />
              <Route path="engineering/structural/retrofitting-rehabilitation-existing-structures.asp" element={<RetrofittingServices />} />
              <Route path="engineering/structural/peer-review-services.asp" element={<PeerReviewServices />} />
              <Route path="engineering/structural/structural-design-and-drafting-services.asp" element={<StructuralDesign />} />
              <Route path="engineering/structural/structural-fabrication-drawing-services.asp" element={<StructuralFabrication />} />
              <Route path="engineering/structural/structural-steel-detailing-services.asp" element={<SteelDetailing />} />
              <Route path="engineering/structural/structural-shop-drawings-services.asp" element={<StructuralShopDrawing />} />
              <Route path="structural-design/structural-3d-modeling-drafting-rendering-services.asp" element={<Structural3DModeling />} />
              <Route path="engineering/structural/rebar-detailing-services.asp" element={<RebarDetailing />} />



              {/* Engineeering services - Civil engineering */}
              <Route path="engineering/civil/drone-mapping-services.asp" element={<DroneMappingServices />} />
              <Route path="engineering/civil/contour-mapping-services.asp" element={<ContourMappingServices />} />
              <Route path="engineering/civil/residential-drainage-design-services.asp" element={<ResidentialDrainageDesign />} />
              <Route path="engineering/civil/construction-drawing-services.asp" element={<ConstructionGADrawings />} />
              <Route path="engineering/civil/hvac-services.asp" element={<HVACDesignServices />} />
              <Route path="engineering/civil/mep-design-drafting-services.asp" element={<MEPDesignServices />} />
              <Route path="engineering/civil/remote-drafting-services.asp" element={<RemoteDraftingServices />} />
              <Route path="engineering/civil/land-surveying-services.asp" element={<LandSurveyingServices />} />
              <Route path="engineering/civil/geospatial-services.asp" element={<GeospatialServices />} />
              <Route path="engineering/civil/planimetric-mapping-services.asp" element={<PlanimetricMapping />} />
              <Route path="engineering/civil/orthophoto-production-services.asp" element={<OrthophotoProduction />} />
              <Route path="engineering/civil/topographic-mapping-services.asp" element={<TopographicMapping />} />
              <Route path="engineering/civil/photogrammetric-services.asp" element={<PhotogrammetricServices />} />
              <Route path="engineering/civil/digital-elevation-modeling-services.asp" element={<DigitalElevationModeling />} />
              <Route path="engineering/civil/terrain-modeling-services.asp" element={<TerrainModelingServices />} />
              <Route path="engineering/civil/lidar-mapping-services.asp" element={<LiDARMappingServices />} />
              <Route path="engineering/civil/gis-surveying-services.asp" element={<GIsSurveyingServices />} />
              <Route path="engineering/civil/cadastral-mapping-services.asp" element={<CadastralMappingServices />} />
              <Route path="engineering/civil/drainage-design-services.asp" element={<DrainageDesignServices />} />
              <Route path="engineering/civil/3d-coordination-services.asp" element={<ThreeDCoordinationServices />} />
              <Route path="engineering/civil/civil-information-modeling-services.asp" element={<CivilInformationModelingServices />} />
              <Route path="engineering/civil/virtual-construction-services.asp" element={<VirtualConstructionServices />} />
              <Route path="engineering/civil/construction-scheduling-tracking-services.asp" element={<ConstructionScheduling />} />
              <Route path="engineering/civil/5d-simulation-services.asp" element={<Simulation5D />} />
              <Route path="engineering/bim/4d-simulation-services.asp" element={<Simulation4D />} />
              <Route path="engineering/civil/contractor-support-services.asp" element={<ContractorSupport />} />
              <Route path="engineering/civil/construction-quality-assurance-services.asp" element={<QualityAssurancePage />} />
              <Route path="engineering/civil/traffic-engineering-services.asp" element={<TrafficEngineering />} />
              <Route path="engineering/civil/geothermal-engineering-services.asp" element={<GeothermalEngineering />} />
              <Route path="engineering/civil/digital-twin-implementation-services.asp" element={<DigitalTwinImplementation />} />
              <Route path="engineering/civil/plumbing-design-services.asp" element={<PlumbingDesignServices />} />
              <Route path="engineering/civil/construction-quantity-takeoff-services.asp" element={<QuantityTakeoffServices />} />
              <Route path="engineering/civil/stormwater-management-services.asp" element={<StormwaterManagement />} />
              <Route path="engineering/civil/indoor-mapping-services.asp" element={<IndoorMappingServices />} />
              <Route path="engineering/civil/remote-sensing-services.asp" element={<RemoteSensingServices />} />
              <Route path="engineering/civil/drone-survey-services.asp" element={<DroneSurveyServices />} />
              <Route path="engineering/architectural/resilience-engineering-services.asp" element={<ResilienceEngineeringServices />} />
              <Route path="engineering/civil/aerial-mapping-services.asp" element={<AerialMappingServices />} />
              <Route path="eso/construction/civil-3d-modeling-drafting-rendering-services.asp" element={<Civil3DServices />} />


              {/* Engineeering services - Architectural services */}
              <Route path="engineering/architectural/augmented-reality-interior-design-services.asp" element={<AugmentedRealityInterior />} />
              <Route path="engineering/architectural/microstation-drafting-and-modeling-services.asp" element={<MicroStationServices />} />
              <Route path="engineering/mechanical/vacuum-casting-services.asp" element={<VacuumCastingServices />} />
              <Route path="engineering/architectural/architectural-schematic-design-services.asp" element={<DesignServices />} />
              <Route path="engineering/architectural/piping-spool-drawing-services.asp" element={<PipingSpoolDrawing />} />
              <Route path="engineering/architectural/retail-visual-merchandising-services.asp" element={<RetailVisualMerchandising />} />
              <Route path="engineering/architectural/3d-architectural-walkthrough-services.asp" element={<ArchitecturalWalkthrough />} />
              <Route path="engineering/architectural/technical-drawing-services.asp" element={<TechnicalDrawingServices />} />
              <Route path="engineering/architectural/virtual-staging-services.asp" element={<VirtualStagingServices />} />
              <Route path="engineering/architectural/landscape-design-drafting-services.asp" element={<LandscapeDesignServices />} />
              <Route path="engineering/architectural/retail-space-planning-design-services.asp" element={<RetailSpaceDesignServices />} />
              <Route path="engineering/architectural/3d-furniture-modeling-services.asp" element={<FurnitureModelingServices />} />
              <Route path="engineering/architectural/architectural-3d-modeling-drafting-rendering-services.asp" element={<Architectural3DServices />} />
              <Route path="engineering/architectural/3d-floor-plan-creation-services.asp" element={<FloorPlan3DServices />} />
              <Route path="engineering/architectural/3d-printing-file-creation-services.asp" element={<ThreeDPrintingServices />} />
              <Route path="engineering/architectural/architectural-drafting-services.asp" element={<ArchitecturalDraftingServices />} />
              <Route path="engineering/architectural/millwork-drafting-services.asp" element={<MillworkDraftingServices />} />
              <Route path="engineering/architectural/sketchup-services.asp" element={<SketchUpServices />} />
              <Route path="engineering/architectural/point-cloud-services.asp" element={<PointCloudServices />} />
              <Route path="engineering/architectural/parametric-computational-modeling-services.asp" element={<ParametricModelingPage />} />
              <Route path="engineering/architectural/cabinet-drawing-services-using-cabinet-vision-software.asp" element={<CabinetDrawingServices />} />
              <Route path="engineering/architectural/kitchen-cabinet-design-services.asp" element={<KitchenCabinetDesign />} />
              <Route path="engineering/architectural/revit-modeling-services.asp" element={<RevitModeling />} />
              <Route path="engineering/architectural/4d-construction-simulation-services.asp" element={<ConstructionSimulation />} />
              <Route path="engineering/architectural/2d-floor-plan-creation-services.asp" element={<FloorPlan2D />} />
              <Route path="engineering/architectural/presentation-drawing-services.asp" element={<PresentationDrawingServices />} />
              <Route path="eso/construction/3d-architectural-visualization-services.asp" element={<ArchitecturalVisualizationServices />} />
              <Route path="engineering/architectural/augmented-reality-engineering-services.asp" element={<AugmentedRealityEngineering />} />
              <Route path="engineering/architectural/360-degree-panorama-rendering-services.asp" element={<PanoramaRendering />} />
              <Route path="engineering/architectural/3d-virtual-tours-and-walkthrough-services.asp" element={<VirtualTours />} />
              <Route path="engineering/architectural/mixed-reality-engineering-services.asp" element={<MixedRealityServices />} />
              <Route path="engineering/architectural/virtual-reality-engineering-services.asp" element={<VirtualRealityServices />} />
              <Route path="engineering/architectural/construction-solid-geometry-modeling-services.asp" element={<SolidGeometryModeling />} />
              <Route path="engineering/architectural/presentation-modeling-services.asp" element={<PresentationModeling />} />
              <Route path="engineering/architectural/boundary-representation-modeling-services.asp" element={<BREPModeling />} />
              <Route path="engineering/architectural/real-estate-rendering-services.asp" element={<RealEstateRendering />} />
              <Route path="engineering/architectural/isometric-drawing-services.asp" element={<IsometricDrawingServices />} />
              <Route path="engineering/architectural/architectural-model-making-services.asp" element={<ArchitecturalModelMaking />} />
              <Route path="engineering/architectural/facade-engineering-services.asp" element={<FacadeEngineering />} />
              <Route path="engineering/architectural/telecom-network-drawings-services.asp" element={<TelecomNetworkDrawings />} />
              <Route path="engineering/architectural/interior-rendering-services.asp" element={<InteriorRenderingServices />} />
              <Route path="engineering/architectural/photorealistic-rendering-services.asp" element={<PhotorealisticRenderingServices />} />
              <Route path="engineering/architectural/bim-level-of-development-services.asp" element={<BIMLODServices />} />
              <Route path="engineering/architectural/skylight-detailing-services.asp" element={<SkylightDetailingServices />} />
              <Route path="engineering/architectural/construction-administration-services.asp" element={<ConstructionAdministrationServices />} />
              <Route path="engineering/architectural/leed-consulting-services.asp" element={<LeedConsultingServices />} />
              <Route path="engineering/architectural/as-built-drawings-services.asp" element={<AsBuiltDrawingServices />} />
              <Route path="engineering/architectural/construction-detail-drawings-services.asp" element={<ConstructionDetailDrawingServices />} />
              <Route path="engineering/architectural/component-drawing-services.asp" element={<ComponentDrawingServices />} />








              {/* Shenbagavel Start */}
              {/* services */}
              {/* finance-accounting-finops */}
              {/* Bookkeeping service */}
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services" element={<BookkeepingServices />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/Real-EstateBookkeeping-Services" element={<RealEstateBookkeepingServices />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/Accounting-Setup-Services" element={<NimbleAcuityAccountingServices />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/CPA-Bookkeeping-Services" element={<CPABookkeepingServices />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/SmallBusiness-Bookkeeping" element={<SmallBusinessBookkeeping />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/QuickBooks-Bookkeeping" element={<QuickBooksBookkeeping />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/Virtual-Bookkeeping" element={<VirtualBookkeeping />} />

              {/* Accounting service */}
              <Route path="/services/finance-accounting-finops/accounting-service/Accounting-Services" element={<AccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Valuation-Advisory-service" element={<ValuationAdvisory />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Cost-Accounting-service" element={<CostAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Accounting-Automation-services" element={<AccountingAutomation />} />
              <Route path="/services/finance-accounting-finops/accounting-service/RealEstate-Accounting-services" element={<RealEstateAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Wealth-Management-service" element={<WealthManagement />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Accounting-Advisory-sesrvice" element={<FinancialAccountingAdvisory />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Ledger-Management-Services" element={<LedgerManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/General-Accounting-Services" element={<GeneralAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/ESG-Consulting-Services" element={<ESGConsultingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Corporate-Accounting-Services" element={<CorporateAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fixed-Asset-Management-Services" element={<FixedAssetManagement />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Management-Advisory-Services" element={<ManagementAdvisoryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Management-Accounting-Services" element={<ManagementAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Construction-Accounting-Services" element={<ConstructionAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fixed-Asset-Auditing-Services" element={<FixedAssetAuditingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Internal-Audit-Services" element={<InternalAuditServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Portfolio-Investor-Accounting-service" element={<PortfolioInvestorAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/PostMerger-Integration-service" element={<PostMergerIntegration />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Compliance-Audit-service" element={<ComplianceAudit />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fixed-Asset-Accounting-service" element={<FixedAssetAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Startup-Accounting-service" element={<StartupAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Cloud-Accounting-Services" element={<CloudAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Accounting-Cleanup-Services" element={<AccountingCleanupServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/ModelRiskManagementServices" element={<ModelRiskManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Audit-Support-Services" element={<AuditSupportServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/CFO-Services" element={<CFOServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fiduciary-Services" element={<FiduciaryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Finance-Transformation-Services" element={<FinanceTransformationServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/RecordToReport-Services" element={<RecordToReportServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Business-Advisory-Services" element={<BusinessAdvisoryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Forensic-Audit-Services" element={<ForensicAuditServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Order-Management-Services" element={<OrderManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Dental-Accounting-Services" element={<DentalAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Writeup-Services" element={<FinancialWriteupServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/SMSF-Accounting-Services" element={<SMSFAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Retail-Accounting-Services" element={<RetailAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Reporting-Services" element={<FinancialReportingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/SmallBusiness-Accounting-Services" element={<SmallBusinessAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Forensic-Accounting-Services" element={<ForensicAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Accounts-Reconciliation-Services" element={<AccountsReconciliationServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Budgeting-Services" element={<FinancialBudgetingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Automotive-Accounting-Services" element={<AutomotiveAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/BankCredit-Reconciliation-service" element={<BankCreditReconciliation />} />
              <Route path="/services/finance-accounting-finops/accounting-service/CashFlow-Forecasting-services" element={<CashFlowForecasting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Restaurant-Accounting-services" element={<RestaurantAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/CashFlow-Management-services" element={<CashFlowManagement />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Controller-services" element={<FinancialController />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Electrical-Contractors-Accounting-services" element={<ElectricalContractorsAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Statements-Services" element={<FinancialStatementsServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Spac-Transaction-Services" element={<SpacTransactionServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Investigations-Services" element={<FinancialInvestigationsServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Order-Processing-Services" element={<OrderProcessingServicesaccounts />} />
              <Route path="/services/finance-accounting-finops/accounting-service/XBRL-Filing-Services" element={<XBRLFilingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Business-Recovery-Services" element={<BusinessRecoveryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/ManualJournalEntry-Services" element={<ManualJournalEntryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Corporate-Secretarial-Services" element={<CorporateSecretarialServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Transaction-Advisory-Services" element={<TransactionAdvisoryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Invoice-Processing-Services" element={<InvoiceProcessingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/RealEstate-Financial-Reporting-services" element={<RealEstateFinancialReporting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Trucking-Accounting-Services" element={<TruckingAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Virtual-Accounting-Services" element={<VirtualAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Xero-Accounting-Services" element={<XeroAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Global-Accounting-Services" element={<GlobalAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/SpendAnalysis-Services" element={<SpendAnalysisServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/GeneralLedger-Accounting-Services" element={<GeneralLedgerAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Excel-Accounting-Services" element={<ExcelAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Banking-Financial-Analysis-Services" element={<BankingFinancialAnalysisServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/LIBORTransition-Services" element={<LIBORTransitionServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/YearEnd-Accounting-Services" element={<YearEndAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Invoice-Factoring-Services" element={<InvoiceFactoringServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/FixedAsset-Reconciliation-Services" element={<FixedAssetReconciliationServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Cloud-Financial-Management-Services" element={<CloudFinancialManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/VirtualCFO-Services" element={<VirtualCFO_Services />} />
              <Route path="/services/finance-accounting-finops/accounting-service/BAS-Services" element={<BAS_Services />} />
              <Route path="/services/finance-accounting-finops/accounting-service/FractionalCFO-Services" element={<FractionalCFO_Services />} />
              <Route path="/services/finance-accounting-finops/accounting-service/QuickBooks-CleanUp-Services" element={<QuickBooksCleanUpServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Transaction-Support-Services" element={<TransactionSupportServices />} />

              {/* Accounts Payable */}
              <Route path="/services/finance-accounting-finops/Accounts-Payable/Accounts-Payable-Services" element={<AccountsPayableServices />} />

              {/* Accounts Receivable */}
              <Route path="/services/finance-accounting-finops/Accounts-Receivable-Services" element={<AccountsReceivableServices />} />
              <Route path="/services/finance-accounting-finops/Accounts-Receivable-Services/RealEstate-Accounts-Receivable" element={<RealEstateAccountsReceivable />} />
              <Route path="/services/finance-accounting-finops/Accounts-Receivable-Services/Accounts-Receivable-Factoring" element={<AccountsReceivableFactoring />} />
              <Route path="/services/finance-accounting-finops/Accounts-Receivable-Services/ARAging-Reports-Services" element={<ARAgingReports />} />

              {/* Tax Prepareation */}
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services" element={<TaxPreparationServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/TaxRegulatory-Services" element={<TaxRegulatoryServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/TaxProcessing-Services" element={<TaxProcessingServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/TaxConsulting-Services" element={<TaxConsultingServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/ProSeriesTax-Processing-Services" element={<ProSeriesTaxProcessing />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/SalesTax-Services" element={<SalesTaxServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/BusinessTax-Services" element={<BusinessTaxServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/HRBlockTaxCut-Processing-service" element={<HRBlockTaxCutProcessing />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/FederalTax-Services" element={<FederalTaxServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/VATReturn-Services" element={<VATReturnServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/VirtualTax-Preparation-Services" element={<VirtualTaxPreparationServices />} />

              {/* CPA Service */}
              <Route path="/services/finance-accounting-finops/CPA-Service" element={<CPAServicePage />} />
              <Route path="/services/finance-accounting-finops/CPA-Service/SmallBusiness-CPA-service" element={<SmallBusinessCPA />} />
              <Route path="/services/finance-accounting-finops/CPA-Service/CPATax-Services" element={<CPATaxServices />} />
              <Route path="/services/finance-accounting-finops/CPA-Service/CPA-Payroll-Services" element={<CPAPayrollServices />} />
              <Route path="/services/finance-accounting-finops/CPA-Service/CPA-Accounting-Services" element={<CPAAccountingServices />} />

              {/* Financial Analysis */}
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services" element={<FinancialAnalysisServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/DueDiligence-Services" element={<DueDiligenceServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/Portfolio-Analysis-Services" element={<PortfolioAnalysisServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/FinancialStatement-Audit-Services" element={<FinancialStatementAuditServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/Treasury-Management-Services" element={<TreasuryManagementServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/Regulatory-Compliance-Services" element={<RegulatoryComplianceServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/Enterprise-Performance-Management" element={<EnterprisePerformanceManagement />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/Investment-Analysis-Services" element={<InvestmentAnalysisServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/BusinessForecasting-Services" element={<BusinessForecastingServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/BudgetingForecasting-Services" element={<BudgetingForecastingServices />} />


              {/* Payroll Services */}
              <Route path="/services/finance-accounting-finops/Payroll-Processing-Services" element={<PayrollProcessingServices />} />
              <Route path="/services/finance-accounting-finops/Payroll-Processing-Services/Payroll0Compliance-Services" element={<PayrollComplianceServices />} />
              <Route path="/services/finance-accounting-finops/Payroll-Processing-Services/Payroll-Data-Analytics-Services" element={<PayrollDataAnalyticsServices />} />
              <Route path="/services/finance-accounting-finops/Payroll-Processing-Services/Payroll-Administration-Services" element={<PayrollAdministrationServices />} />




              {/* Healthcare BPO */}
              {/* Medical Billing */}
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service" element={<MedicalBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PhysicianBilling-service" element={<PhysicianBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/FQHCBilling-service" element={<FQHCBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Gynecology-Billing-service" element={<GynecologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Patient-Demographic-Entry-service" element={<PatientDemographicEntry />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Patient-AdviceLiaison-service" element={<PatientAdviceLiaison />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/FamilyPractice-Billing-service" element={<FamilyPracticeBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PhysicalTherapy-Billing-service" element={<PhysicalTherapyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/ManagedCare-Contracting-service" element={<ManagedCareContracting />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Internal-Medicine-Billing-service" element={<InternalMedicineBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/UrgentCare-Billing-service" element={<UrgentCareBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Intelligent-Billing-Software-service" element={<IntelligentBillingSoftware />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/plastic-Surgery-Billing-service" element={<SurgeryBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/SleepMedicine-Billing-service" element={<SleepMedicineBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Medical-Record-Abstraction-service" element={<MedicalRecordAbstraction />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Otolaryngology-Billing-service" element={<OtolaryngologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/MedicalRecord-Indexing-service" element={<MedicalRecordIndexing />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Occupational-HealthBilling-service" element={<OccupationalHealthBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Physician-Credentialing-service" element={<PhysicianCredentialing />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Hospital-Billing-service" element={<HospitalBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/SurgeryCenter-Billing-service" element={<SurgeryCenterBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Hospice-Billing-service" element={<HospiceBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/UrologyBilling-service" element={<UrologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/EMSBilling-service" element={<EMSBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/ChiropracticBilling-service" element={<ChiropracticBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/DentalBilling-service" element={<DentalBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/DmeBilling-service" element={<DmeBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PathologyBilling-service" element={<PathologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/AnesthesiaBilling-service" element={<AnesthesiaBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/ASCBilling-service" element={<ASCBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PediatricBilling-service" element={<PediatricBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PainManagementBilling-service" element={<PainManagementBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/ChargeEntry-service" element={<ChargeEntry />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/AmbulanceBilling-service" element={<AmbulanceBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Gastroenterology-Billing-service" element={<GastroenterologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/EmergencyMedicineBilling-service" element={<EmergencyMedicineBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/RadiologyBilling-service" element={<RadiologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PodiatryBilling-service" element={<PodiatryBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/OrthopedicBilling-service" element={<OrthopedicBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/CardiologyBilling-service" element={<CardiologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PersonalInjuryBilling-service" element={<PersonalInjuryBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/WorkersCompBilling-service" element={<WorkersCompBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/NeurologyBilling-service" element={<NeurologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/CloudRecordsRetrieval-service" element={<CloudRecordsRetrieval />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Medical-Document-Scanning-service" element={<MedicalDocumentScanning />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/HealthBilling-Solutions-service" element={<HealthBillingSolutions />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/BackOfficeSupport-service" element={<BackOfficeSupport />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/EHRChartBuilding-service" element={<EHRChartBuilding />} />

              {/* Medical coding */}
              <Route path="/services/healthcare-BPO-Service/Medical-coding-service" element={<MedicalCoding />} />
              <Route path="/services/healthcare-BPO-Service/Medical-coding-service/MedicalCoding-Audit-Service" element={<MedicalCodingAudit />} />
              <Route path="/services/healthcare-BPO-Service/Medical-coding-service/CPTICD10Coding-Service" element={<CPTICD10Coding />} />
              <Route path="/services/healthcare-BPO-Service/Medical-coding-service/HCCHcc-Coding-Service" element={<HCCHccCoding />} />
              <Route path="/services/healthcare-BPO-Service/Medical-coding-service/Medical-Coding-Analysis-Service" element={<MedicalCodingAnalysis />} />

              {/* Revenue Cycle Management */}
              <Route path="/services/healthcare-BPO-Service/RCM" element={<RevenueCycleManagement />} />
              <Route path="/services/healthcare-BPO-Service/RCM/Healthcare-DueDiligence-Service" element={<HealthcareDueDiligence />} />
              <Route path="/services/healthcare-BPO-Service/RCM/PaymentPosting-Services" element={<PaymentPostingServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/Patient-FinancialClearance-Service" element={<PatientFinancialClearance />} />
              <Route path="/services/healthcare-BPO-Service/RCM/MIPS-QualityReporting-Service" element={<MIPSQualityReporting />} />
              <Route path="/services/healthcare-BPO-Service/RCM/PPO-ClaimsRepricing-Service" element={<PPOClaimsRepricing />} />
              <Route path="/services/healthcare-BPO-Service/RCM/PLM-Service" element={<PLMServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/CaseManagement-Services" element={<CaseManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/Revenue-Improvement-Services" element={<RevenueImprovementServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/Healthcare-Collection-Services" element={<HealthcareCollectionServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/Medical-AR-Services" element={<MedicalARServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/HealthInsuranceRecovery-Service" element={<HealthInsuranceRecovery />} />
              <Route path="/services/healthcare-BPO-Service/RCM/MedicalClaimsProcessing-Service" element={<MedicalClaimsProcessing />} />
              <Route path="/services/healthcare-BPO-Service/RCM/ReceivableAnalysis-Service" element={<ReceivableAnalysis />} />
              <Route path="/services/healthcare-BPO-Service/RCM/AccountsReceivableConversion-Service" element={<AccountsReceivableConversion />} />
              <Route path="/services/healthcare-BPO-Service/RCM/MedicareReimbursement-Service" element={<MedicareReimbursementServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/AccountsReceivableFollowUp-Service" element={<AccountsReceivableFollowUp />} />
              <Route path="/services/healthcare-BPO-Service/RCM/PaymentAccuracy-Service" element={<PaymentAccuracyServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/MedicalClaimsEncounterProcessing-Service" element={<MedicalClaimsEncounterProcessing />} />
              <Route path="/services/healthcare-BPO-Service/RCM/ARCalling-Service" element={<ARCallingServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/HealthRiskAssessment-Services" element={<HealthRiskAssessmentServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/HealthcarePayer-Services" element={<HealthcarePayerServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/DenialManagement-Services" element={<DenialManagement />} />
              <Route path="/services/healthcare-BPO-Service/RCM/DentalRCM-Services" element={<DentalRCM />} />
              <Route path="/services/healthcare-BPO-Service/RCM/InsuranceEligibility-Services" element={<InsuranceEligibility />} />
              <Route path="/services/healthcare-BPO-Service/RCM/RevenueIntegrity-Services" element={<RevenueIntegrity />} />


              {/* Medical Transcription */}
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription" element={<MedicalTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/VirtualScribing-Service" element={<VirtualScribing />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/MedicalReports-Transcription" element={<MedicalReportsTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/InternalMedicine-Transcription" element={<InternalMedicineTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Genetics-Transcription" element={<GeneticsTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Cardiology-Transcription" element={<CardiologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/OphthalmologyTranscription" element={<PhysicalTherapyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/PhysicalTherapy-Transcription" element={<OphthalmologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/EMR-Transcription" element={<EMRTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Chiropractic-Transcription" element={<ChiropracticTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/DischargeSummary-Transcription" element={<DischargeSummaryTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Deaf-Transcription" element={<DeafTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Rehabilitation-Transcription" element={<RehabilitationTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/EmergencyRoom-Transcription" element={<EmergencyRoomTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Hospital-Transcription" element={<HospitalTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/VirtualMedicalScribe-Transcription" element={<VirtualMedicalScribe />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Hl7-Transcription" element={<Hl7Transcription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Oncology-Transcription" element={<OncologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/FollowUpNotes-Transcription" element={<FollowUpNotesTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Neurology-Transcription" element={<NeurologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/OrthopedicsTranscription" element={<OrthopedicsTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/HistoryPhysicalNotes-Transcription" element={<HistoryPhysicalNotes />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Psychiatry-Transcription" element={<PsychiatryTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Dermatology-Transcription" element={<DermatologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/BSLInterpreting-Transcription" element={<BSLInterpreting />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/OperativeReports-Transcription" element={<OperativeReportsTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Anesthesiology-Transcription" element={<AnesthesiologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/ProgressNotes-Transcription" element={<ProgressNotesTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Pathology-Transcription" element={<PathologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Urology-Transcription" element={<UrologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Surgery-Transcription" element={<SurgeryTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Radiology-Transcription" element={<RadiologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Gastroenterology-Transcription" element={<GastroenterologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/ENT-Transcription" element={<ENTTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/PainManagement-Transcription" element={<PainManagementTranscription />} />


              {/* Teleradiology Services */}
              <Route path="/services/healthcare-BPO-Service/Teleradiology" element={<Teleradiology />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/eRAD-PACS-System" element={<EradPacs />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/Emergency-Radiology" element={<EmergencyRadiology />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/StatReporting-Radiology" element={<StatReporting />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/RadiologyInformationSystem" element={<RadiologyInformationSystem />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/Preliminary-Teleradiology" element={<PreliminaryTeleradiology />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/MRIInterpretation-Radiology" element={<MRIInterpretation />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/Nighthawk-Teleradiology" element={<NighthawkTeleradiology />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/OnsiteTeleradiology" element={<OnsiteTeleradiology />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/BoneDensityScan" element={<BoneDensityScan />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/ImageProcessing" element={<ImageProcessing />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/NeurologyPETCT" element={<NeurologyPETCT />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/ThoracicImaging" element={<ThoracicImaging />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/MedicalImaging" element={<MedicalImaging />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/PETCTReporting" element={<PETCTReporting />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/AfterTeleradiology-Services" element={<AfterTeleradiologyServices />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/FinalTeleradiologyReads" element={<FinalTeleradiologyReads />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/CardiacPETCTReporting" element={<CardiacPETCTReporting />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/CTInterpretation" element={<CTInterpretation />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/DentalXrayImaging" element={<DentalXrayImaging />} />

              {/*  EMR Services */}
              <Route path="/services/healthcare-BPO-Service/EMRServices" element={<EMRServices />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PediatricsEMRServices" element={<PediatricsEMRServices />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OphthalmologyEMRServices" element={<OphthalmologyEMRServices />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/InfectiousDiseaseEMR" element={<InfectiousDiseaseEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/EndocrinologyEMR" element={<EndocrinologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PulmonaryEMR" element={<PulmonaryEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/HouseCallEMR" element={<HouseCallEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/EMRSoftwareDevelopment" element={<EMRSoftwareDevelopment />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/AllergyImmunologyEMR" element={<AllergyImmunologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/UrologyEMR" element={<UrologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/DermatologyEMR" element={<DermatologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PainManagementEMR" element={<PainManagementEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/MedicalRecordSummary" element={<MedicalRecordSummary />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/SleepMedicineEMR" element={<SleepMedicineEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/InternalMedicineEMR" element={<InternalMedicineEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OfficeAllyEHR" element={<OfficeAllyEHR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OncologyEMR" element={<OncologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/RehabilitativeEMR" element={<RehabilitativeEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/NephrologyEMR" element={<NephrologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/CardiologyEMR" element={<CardiologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/SpeechTherapyEMR" element={<SpeechTherapyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/AmbulatorySurgeryEMR" element={<AmbulatorySurgeryEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PhysicalMedicineEMR" element={<PhysicalMedicineEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PrimaryCareEMR" element={<PrimaryCareEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/EMRIntegration" element={<EMRIntegration />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OBGYNEMR" element={<OBGYNEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/RheumatologyEMR" element={<RheumatologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/VirtualEMR" element={<VirtualEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OrthopedicsEMR" element={<OrthopedicsEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PsychiatryEMR" element={<PsychiatryEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PrechartingServices" element={<PrechartingServices />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OtolaryngologyEMR" element={<OtolaryngologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/BehavioralHealthEHR" element={<BehavioralHealthEHR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/EMRDataMigration" element={<EMRDataMigration />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/UrgentCareEHR" element={<UrgentCareEHR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/VascularSurgeryEMR" element={<VascularSurgeryEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/EMRDataEntry" element={<EMRDataEntry />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/GeneralSurgeryEMR" element={<GeneralSurgeryEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/GastroenterologyEMR" element={<GastroenterologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/NeurologyEMR" element={<NeurologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/HandSurgeryEMR" element={<HandSurgeryEMR />} />

              {/* Claims Adjudication Services */}
              <Route path="/services/healthcare-BPO-Service/ClaimsAdjudication" element={<ClaimsAdjudication />} />
              <Route path="/services/healthcare-BPO-Service/ClaimsAdjudication/RemittanceProcessing" element={<RemittanceProcessing />} />
              <Route path="/services/healthcare-BPO-Service/ClaimsAdjudication/DentalClaimsAdjudication" element={<DentalClaimsAdjudication />} />


              {/* Medical Animation Services */}
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices" element={<MedicalAnimationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalAnimation2D" element={<MedicalAnimation2D />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalIllustration3D" element={<MedicalIllustration3D />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MolecularAnimation" element={<MolecularAnimation />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/Medical3DAnimation" element={<Medical3DAnimation />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/BiomedicalIllustration" element={<BiomedicalIllustration />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/PharmaceuticalAnimation" element={<PharmaceuticalAnimation />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/SurgicalAnimationServices" element={<SurgicalAnimationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/AnatomyIllustrationServices" element={<AnatomyIllustrationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/OrthopedicAnimationServices" element={<OrthopedicAnimationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/ScientificAnimationServices" element={<ScientificAnimationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalDeviceAnimationServices" element={<MedicalDeviceAnimationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalDevicePrototypingServices" element={<MedicalDevicePrototypingServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalIllustration" element={<MedicalIllustration />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/SpineAnimation" element={<SpineAnimation />} />


              {/* Pharmacy Business Services */}
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices" element={<PharmacyBusinessServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/GxPComplianceServices" element={<GxPComplianceServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacyBillingServices" element={<PharmacyBillingServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacovigilanceServices" element={<PharmacovigilanceServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacyManagementServices" element={<PharmacyManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacyDocumentManagementServices" element={<PharmacyDocumentManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/PhysicianReferralServices" element={<PhysicianReferralServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/MailOrderPharmacyServices" element={<MailOrderPharmacyServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/MedicationTherapyManagementServices" element={<MedicationTherapyManagementServices />} />

              {/* Healthcare Management Services */}
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices" element={<HealthcareManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/UrgentCareBackofficeSupport" element={<UrgentCareBackofficeSupport />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalDocumentationImprovement" element={<ClinicalDocumentationImprovement />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/DecentralizedClinicalTrials" element={<DecentralizedClinicalTrials />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HospitalBackofficeSupport" element={<HospitalBackofficeSupport />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PatientEngagementServices" element={<PatientEngagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/OnlineTelehealthServices" element={<OnlineTelehealthServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareConsultingServices" element={<HealthcareConsultingServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalPracticeTransformationServices" element={<MedicalPracticeTransformationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PatientAdherenceServices" element={<PatientAdherenceServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareDocumentationServices" element={<HealthcareDocumentationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HedisMeasurementServices" element={<HedisMeasurementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalRecordReviewServices" element={<MedicalRecordReviewServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ChartDocumentationServices" element={<ChartDocumentationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareSurveysServices" element={<HealthcareSurveysServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/TelemedicineAppointmentServices" element={<TelemedicineAppointmentServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthInformationManagementServices" element={<HealthcareManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PatientSatisfactionSurveyServices" element={<PatientSatisfactionSurveyServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareDataManagement" element={<HealthcareDataManagement />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PharmaceuticalOutsourcing" element={<PharmaceuticalOutsourcing />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalDocumentationIntegrity" element={<ClinicalDocumentationIntegrity />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PriorAuthorization" element={<PriorAuthorization />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalServices" element={<ClinicalServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/RemotePatientMonitoring" element={<RemotePatientMonitoring />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PreventiveCarez" element={<PreventiveCare />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareAnalytics" element={<HealthcareAnalytics />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/TelemedicineServices" element={<TelemedicineServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareInteroperability" element={<HealthcareInteroperability />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareCallCenterServices" element={<HealthcareCallCenterServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalDecisionSupportServices" element={<ClinicalDecisionSupportServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalDataEntryServices" element={<MedicalDataEntryServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HospitalCapacityManagementServices" element={<HospitalCapacityManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/VirtualHealthcareBPOServices" element={<VirtualHealthcareBPOServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClaimsProcessingSoftwareDevelopment" element={<ClaimsProcessingSoftwareDevelopment />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalResearchOrganizationServices" element={<ClinicalResearchOrganizationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareProviderDataManagementServices" element={<HealthcareProviderDataManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/EDIIntegrationServices" element={<EDIIntegrationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/RiskBasedQualityManagementServices" element={<RiskBasedQualityManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/DentalInsuranceVerificationServices" element={<DentalInsuranceVerificationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthInformationTechnology" element={<HealthInformationTechnology />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PatientOnboardingServices" element={<PatientOnboardingServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalInsuranceClaimsProcessing" element={<MedicalInsuranceClaimsProcessing />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalBillingSoftwareSupport" element={<MedicalBillingSoftwareSupport />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalPeerReviewServices" element={<MedicalPeerReviewServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/EOBProcessingServices" element={<EOBProcessingServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PopulationHealthAnalytics" element={<PopulationHealthAnalytics />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/NurseTriageServices" element={<NurseTriageServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/UtilizationManagement" element={<UtilizationManagement />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PatientInteractionServices" element={<PatientInteractionServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalTrialRegulatory" element={<ClinicalTrialRegulatory />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PracticeManagementServices" element={<PracticeManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/CareManagementServices" element={<CareManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/DigitalHealthServices" element={<DigitalHealthServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/StatisticalProgrammingServices" element={<StatisticalProgrammingServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/CareCoordinationServices" element={<CareCoordinationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalPresentationServices" element={<MedicalPresentationServices />} />


              {/* Mortgage Services */}
              {/* Loan Processing Services */}
              <Route path="/services/MortgageService/MortgageLoanProcessing" element={<MortgageProcessing />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/JumboMortgageProcessing" element={<JumboMortgageProcessing />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageRPA" element={<MortgageRPA />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/NoMoneyDownMortgage" element={<NoMoneyDownMortgage />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageIndexingAndExtraction" element={<MortgageIndexingAndExtraction />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/BrokerPriceOpinion" element={<BrokerPriceOpinion />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageDocumentRecording" element={<MortgageDocumentRecording />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageTitlePolicy" element={<MortgageTitlePolicy />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/PreFundQCAudit" element={<PreFundQCAudit />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/ForeclosureTitleAndResolution" element={<ForeclosureTitleAndResolution />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageAccountingAndBookkeeping" element={<MortgageAccountingAndBookkeeping />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageLienRelease" element={<MortgageLienRelease />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageVirtualAssistant" element={<MortgageVirtualAssistant />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageCreditUnion" element={<MortgageCreditUnion />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageUXSupport" element={<MortgageUXSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageAudit" element={<MortgageAudit />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/USDAMortgageSupport" element={<USDAMortgageSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/WarehouseQCAudit" element={<WarehouseQCAudit />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgagePreprocessing" element={<MortgagePreprocessing />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/ReverseMortgageSupport" element={<ReverseMortgageSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageQualityRetention" element={<MortgageQualityRetention />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageDashboardCreation" element={<MortgageDashboardCreation />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/VALoanSupport" element={<VALoanSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/AssignmentOfMortgage" element={<AssignmentOfMortgage />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/FHALoanSupport" element={<FHALoanSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/ConventionalLoanProcessing" element={<ConventionalLoanProcessing />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageLoanBoarding" element={<MortgageLoanBoarding />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageLoanSetup" element={<MortgageLoanSetup />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/ResidentialMortgageLoanSupport" element={<ResidentialMortgageLoanSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/WholeLoanPurchaseReview" element={<WholeLoanPurchaseReview />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/ConformingMortgageLoanSupport" element={<ConformingMortgageLoanSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/FixedAndAdjustableMortgageSupport" element={<FixedAndAdjustableMortgageSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MLOClientSupport" element={<MLOClientSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/SecondMortgageSupport" element={<SecondMortgageSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/RenovationMortgageSupport" element={<RenovationMortgageSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/TrailingDocumentsSupport" element={<TrailingDocumentsSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/EquipmentLeasingSupport" element={<EquipmentLeasingSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageDefaultSupport" element={<MortgageDefaultSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageComplianceSupport" element={<MortgageComplianceSupport />} />

              {/* Underwriting Services */}
              <Route path="/services/MortgageService/MortgageUnderwritingSupport" element={<MortgageUnderwritingSupport />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageUnderwritingSupportCreditUnion" element={<MortgageUnderwritingSupportCreditUnion />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageOriginationUnderwriting" element={<MortgageOriginationUnderwriting />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/BorrowerSolicitationSupport" element={<BorrowerSolicitationSupport />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageUnderwritingSupportLenders" element={<MortgageUnderwritingSupportLenders />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageLoanModificationAssistance" element={<MortgageLoanModificationAssistance />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageUnderwritingQC" element={<MortgageUnderwritingQC />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/ModificationUnderwritingSupport" element={<ModificationUnderwritingSupport />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/ForeclosureAssistanceServices" element={<ForeclosureAssistanceServices />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageAppraisalUnderwriting" element={<MortgageAppraisalUnderwriting />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/LossMitigationAssistance" element={<LossMitigationAssistance />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/ShortSaleSupportServices" element={<ShortSaleSupportServices />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/SigningSupportServices" element={<SigningSupportServices />} />

              {/* Mortgage Closing Services */}
              <Route path="/services/MortgageService/MortgageClosingSupportServices" element={<MortgageClosingSupportServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/MortgageLenderSupportServices" element={<MortgageLenderSupportServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/PrePostClosingComplianceServices" element={<PrePostClosingComplianceServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/PostCloseQCSupportServices" element={<PostCloseQCSupportServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/MortgageCreditUnionSupport" element={<MortgageCreditUnionSupport />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/MortgageDisclosurePreparation" element={<MortgageDisclosurePreparation />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/PreClosingQCSupportServices" element={<PreClosingQCSupportServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/MortgagePreClosingSupportServices" element={<MortgagePreClosingSupportServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/MortgagePostClosingSupportServices" element={<MortgagePostClosingSupportServices />} />

              {/* Title Support */}
              <Route path="/services/MortgageService/MortgageTitleSupportServices" element={<MortgageTitleSupportServices />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageTitleSupportServicesCompanies" element={<MortgageTitleSupportServicesCompanies />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageTitleCommitmentPreparation" element={<MortgageTitleCommitmentPreparation />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageTitleSupportForLenders" element={<MortgageTitleSupportForLenders />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageTitleInsuranceProcessing" element={<MortgageTitleInsuranceProcessing />} />

              {/* Appraisal Support */}
              <Route path="/services/MortgageService/MortgageAppraisalSupport" element={<MortgageAppraisalSupport />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageAppraisalSupportForCompanies" element={<MortgageAppraisalSupportForCompanies />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/RealEstateAppraisalDataEntrySupport" element={<RealEstateAppraisalDataEntrySupport />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageAppraisalReviewSupport" element={<MortgageAppraisalReviewSupport />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageValuationSupport" element={<MortgageValuationSupport />} />

              {/* Digital Marketing */}
              <Route path="/services/MortgageService/DigitalMarketingServicesForMortgage" element={<DigitalMarketingServicesForMortgage />} />
              <Route path="/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForBrokers" element={<DigitalMarketingServicesForBrokers />} />
              <Route path="/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForCreditUnions" element={<DigitalMarketingServicesForCreditUnions />} />
              <Route path="/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForBanks" element={<DigitalMarketingServicesForBanks />} />
              <Route path="/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForLenders" element={<DigitalMarketingServicesForLenders />} />


              {/* REO Support */}
              <Route path="/services/MortgageService/REOSupport" element={<REOSupport />} />
              <Route path="/services/MortgageService/REOSupport/REOReimbursementServices" element={<REOReimbursementServices />} />
              <Route path="/services/MortgageService/REOSupport/REOListingSupportServices" element={<REOListingSupportServices />} />
              <Route path="/services/MortgageService/REOSupport/RealEstateTitleSupport" element={<RealEstateTitleSupport />} />
              <Route path="/services/MortgageService/REOSupport/LeaseAbstactionSupportServices" element={<LeaseAbstactionSupportServices />} />

              {/* Mortgage Loan */}
              <Route path="/services/MortgageService/MortgageLoanServicing" element={<MortgageLoanServicing />} />

              {/* SoftwareDevelopment */}
              {/* custom Software */}
              <Route path="/services/ITServices/CustomSoftwareDevelopment" element={<CustomSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/EmbeddedSoftwareDevelopment" element={<EmbeddedSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/AlgorithmAnalysisDesign" element={<AlgorithmAnalysisDesign />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/HighFidelityDesign" element={<HighFidelityDesign />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/OTTAppDevelopment" element={<OTTAppDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/RestAPIDevelopment" element={<RestAPIDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/InteractiveKioskSoftwareDevelopment" element={<InteractiveKioskSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/FirmwareDevelopment" element={<FirmwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/LMSDevelopmentServices" element={<LMSDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/IoTAnalyticsDevelopment" element={<IoTAnalyticsDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/DeviceDriversDevelopment" element={<DeviceDriversDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/MVPDevelopment" element={<MVPDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/AndroidTVAppDevelopment" element={<AndroidTVAppDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SitecoreDevelopment" element={<SitecoreDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareModernization" element={<SoftwareModernization />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/BespokeSoftwareDevelopment" element={<BespokeSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/CustomTemplateDesign" element={<CustomTemplateDesign />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/BSPDevelopment" element={<BSPDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ChromecastAppDevelopment" element={<ChromecastAppDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareRequirementAnalysis" element={<SoftwareRequirementAnalysis />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/HMIDevelopment" element={<HMIDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ElixirDevelopment" element={<ElixirDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareArchitectureDesign" element={<SoftwareArchitectureDesign />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/CISasService" element={<CISasService />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/EthereumDevelopment" element={<EthereumDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/IoTasAService" element={<IoTasAService />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/FileMakerDevelopment" element={<FileMakerDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/FullStackDevelopment" element={<FullStackDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareProductDevelopment" element={<SoftwareProductDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/MachineLearningConsulting" element={<MachineLearningConsulting />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/IeoDevelopmentServices" element={<IeoDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareProgramming" element={<SoftwareProgramming />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/IotAppDevelopment" element={<IotAppDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/InteractivePrototypeServices" element={<InteractivePrototypeServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/DesktopApplicationDevelopment" element={<DesktopApplicationDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/NopcommerceDevelopment" element={<NopcommerceDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/LegacyApplicationModernization" element={<LegacyApplicationModernization />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/AgileSoftwareDevelopment" element={<AgileSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/NearshoreSoftwareDevelopment" element={<NearshoreSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/LiferayDevelopment" element={<LiferayDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/GameDevelopmentServices" element={<GameDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareRndServices" element={<SoftwareRndServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/MatlabDevelopmentServices" element={<MatlabDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareMaintenanceServices" element={<SoftwareMaintenanceServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/OffshoreSoftwareDevelopment" element={<OffshoreSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/PocDevelopment" element={<PocDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ChatbotDevelopment" element={<ChatbotDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/CoreModernizationServices" element={<CoreModernizationServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/StoDevelopmentServices" element={<StoDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ProductManagementServices" element={<ProductManagementServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/PaymentGatewayIntegrationServices" element={<PaymentGatewayIntegrationServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ApplicationDevelopmentServices" element={<ApplicationDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ApplicationLifecycleManagementServices" element={<ApplicationLifecycleManagementServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/NFTMarketplaceDevelopmentServices" element={<NFTMarketplaceDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/RecognitionSoftwareDevelopmentServices" element={<RecognitionSoftwareDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/DigitalInteractiveServices" element={<DigitalInteractiveServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareProductEngineering" element={<SoftwareProductEngineering />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/FraudDetectionSoftwareDevelopmentServices" element={<FraudDetectionSoftwareDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ApplicationReengineeringServices" element={<ApplicationReengineeringServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/VRPrototypingServices" element={<VRPrototypingServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/BusinessApplicationDevelopment" element={<BusinessApplicationDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ICODevelopmentServices" element={<ICODevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareDevelopmentForStartups" element={<SoftwareDevelopmentForStartups />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/FintechSoftwareDevelopmentServices" element={<FintechSoftwareDevelopmentServices />} />

              {/* Mobile App */}
              <Route path="/services/ITServices/MobileAppDevelopmentServices" element={<AppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/AndroidAppDevelopmentServices" element={<AndroidAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/XamarinAppDevelopmentServices" element={<XamarinAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/FintechAppDevelopmentServices" element={<FintechAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/ReactNativeDevelopmentServices" element={<ReactNativeDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/J2MEAppDevelopmentServices" element={<J2MEAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/RapidApplicationDevelopmentServices" element={<RapidApplicationDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/iOSAppDevelopmentServices" element={<IOSAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/MobileCommerceDevelopmentServices" element={<MobileCommerceDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/KotlinAppDevelopmentServices" element={<KotlinAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/IosAppMaintenanceServices" element={<IosAppMaintenanceServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/ArabicAppDevelopmentServices" element={<ArabicAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/XcodeAppDevelopmentServices" element={<XcodeAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/WearableAppDevelopmentServices" element={<WearableAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/IpadAppDevelopmentServices" element={<IpadAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/TitaniumAppDevelopmentServices" element={<TitaniumAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/NativeAppDevelopmentServices" element={<NativeAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/Html5MobileAppDevelopmentServices" element={<Html5MobileAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/HoloLensAppDevelopmentServices" element={<HoloLensAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/IPhoneAppDevelopmentServices" element={<IPhoneAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/SwiftAppDevelopmentServices" element={<SwiftAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/JQueryAppDevelopmentServices" element={<JQueryAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/AppleWatchAppDevelopmentServices" element={<AppleWatchAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/PhoneGapAppDevelopmentServices" element={<PhoneGapAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/OnDemandServicesAppDevelopment" element={<OnDemandServicesAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/MobileAppDesignServices" element={<MobileAppDesignServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/IBeaconAppDevelopment" element={<IBeaconAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/DatingAppDevelopment" element={<DatingAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/HybridAppDevelopment" element={<HybridAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/FlutterAppDevelopment" element={<FlutterAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/AndroidAppMaintenance" element={<AndroidAppMaintenance />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/IonicAppDevelopment" element={<IonicAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/CrossPlatformAppDevelopment" element={<CrossPlatformAppDevelopment />} />

              {/* ApplicationServices */}
              <Route path="/services/ITServices/ApplicationServices" element={<ApplicationServices />} />
              <Route path="/services/ITServices/ApplicationServices/ADACompliance" element={<ADACompliance />} />
              <Route path="/services/ITServices/ApplicationServices/HederaDevelopment" element={<HederaDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/OdooDevelopment" element={<OdooDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/APIDevelopment" element={<APIDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/HyperledgerDevelopment" element={<HyperledgerDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/PimcoreDevelopment" element={<PimcoreDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/APIManagement" element={<APIManagement />} />
              <Route path="/services/ITServices/ApplicationServices/KonyDevelopment" element={<KonyDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/PythonDevelopment" element={<PythonDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/ApplicationModernization" element={<ApplicationModernization />} />
              <Route path="/services/ITServices/ApplicationServices/LAMPDevelopment" element={<LAMPDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/SvelteDevelopment" element={<SvelteDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/ARGameDevelopment" element={<ARGameDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/LaravelDevelopment" element={<LaravelDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/APIIntegration" element={<APIIntegration />} />
              <Route path="/services/ITServices/ApplicationServices/DAppsDevelopment" element={<DAppsDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/LinuxDevelopment" element={<LinuxDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/UnityDevelopment" element={<UnityDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/DartDevelopment" element={<DartDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/MotionUIDevelopment" element={<MotionUIDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/ApplicationSupport" element={<ApplicationSupport />} />
              <Route path="/services/ITServices/ApplicationServices/GraphQLDevelopment" element={<GraphQLDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/ObjectiveCDevelopment" element={<ObjectiveCDevelopment />} />

              {/* Web Development Services */}
              <Route path="/services/ITServices/WebDevelopment" element={<WebDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/ScalaDevelopment" element={<ScalaDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/LandingPageDesign" element={<LandingPageDesign />} />
              <Route path="/services/ITServices/WebDevelopment/WordPressMigration" element={<WordPressMigration />} />
              <Route path="/services/ITServices/WebDevelopment/PHPDevelopment" element={<PHPDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/PWA" element={<PWA />} />
              <Route path="/services/ITServices/WebDevelopment/WordPressPlugin" element={<WordPressPlugin />} />
              <Route path="/services/ITServices/WebDevelopment/RubyOnRails" element={<RubyOnRails />} />
              <Route path="/services/ITServices/WebDevelopment/WebApplication" element={<WebApplication />} />
              <Route path="/services/ITServices/WebDevelopment/WordPressSupport" element={<WordPressSupport />} />
              <Route path="/services/ITServices/WebDevelopment/JoomlaDevelopment" element={<JoomlaDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/BootstrapDevelopment" element={<BootstrapDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WordPressTheme" element={<WordPressTheme />} />
              <Route path="/services/ITServices/WebDevelopment/ResponsiveWebDesign" element={<ResponsiveWebDesign />} />
              <Route path="/services/ITServices/WebDevelopment/DjangoDevelopment" element={<DjangoDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WordPressDevelopment" element={<WordPressDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/UiUxDevelopment" element={<UiUxDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/DotNetNukeDevelopment" element={<DotNetNukeDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/ZendDevelopment" element={<ZendDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WebsiteMaintenance" element={<WebsiteMaintenance />} />
              <Route path="/services/ITServices/WebDevelopment/FlaskDevelopment" element={<FlaskDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/AspNetDevelopment" element={<AspNetDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WebsiteMigration" element={<WebsiteMigration />} />
              <Route path="/services/ITServices/WebDevelopment/GatsbyDevelopment" element={<GatsbyDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WebSocketDevelopment" element={<WebSocketDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WireframeDesign" element={<WireframeDesign />} />
              <Route path="/services/ITServices/WebDevelopment/GolangDevelopment" element={<GolangDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/OpenCartDevelopment" element={<OpenCartDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/KenticoDevelopment" element={<KenticoDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/DrupalDevelopment" element={<DrupalDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/MobileWebsiteDesign" element={<MobileWebsiteDesign />} />
              <Route path="/services/ITServices/WebDevelopment/RiaDevelopment" element={<RiaDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/SpaDevelopment" element={<SpaDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/ParallaxDesign" element={<ParallaxDesign />} />
              <Route path="/services/ITServices/WebDevelopment/SitefinityDevelopment" element={<SitefinityDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/EcommerceDevelopment" element={<EcommerceDevelopment />} />


              {/* Service Now */}
              <Route path="/services/ITServices/ServiceNow" element={<ServiceNowServices />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowConsulting" element={<ServiceNowConsulting />} />
              <Route path="/services/ITServices/ServiceNow/HrServiceNow" element={<HrServiceNow />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowChange" element={<ServiceNowChange />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowITOM" element={<ServiceNowITOM />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowResourceManagement" element={<ServiceNowResourceManagement />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowAppDevelopment" element={<ServiceNowAppDevelopment />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowCSM" element={<ServiceNowCSM />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowMigration" element={<ServiceNowMigration />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowITBM" element={<ServiceNowITBM />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowIntegration" element={<ServiceNowIntegration />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowITSM" element={<ServiceNowITSM />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowSecOps" element={<ServiceNowSecOps />} />

              {/* Azure */}
              <Route path="/services/ITServices/AzureConsulting" element={<AzureConsulting />} />
              <Route path="/services/ITServices/AzureConsulting/AzureManagedServices" element={<AzureManagedServices />} />
              <Route path="/services/ITServices/AzureConsulting/AzureIntegration" element={<AzureIntegration />} />
              <Route path="/services/ITServices/AzureConsulting/AzureCloudConsulting" element={<AzureCloudConsulting />} />
              <Route path="/services/ITServices/AzureConsulting/AzureMigration" element={<AzureMigration />} />
              <Route path="/services/ITServices/AzureConsulting/AzureApplicationDevelopment" element={<AzureApplicationDevelopment />} />
              <Route path="/services/ITServices/AzureConsulting/AzureSynapseAnalytics" element={<AzureSynapseAnalytics />} />

              {/* Microsoft Services */}
              <Route path="/services/ITServices/MicrosoftConsulting" element={<MicrosoftConsulting />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftPowerAutomate" element={<MicrosoftPowerAutomate />} />
              <Route path="/services/ITServices/MicrosoftConsulting/SharePointDevelopment" element={<SharePointDevelopment />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftSharePoint" element={<MicrosoftSharePoint />} />
              <Route path="/services/ITServices/MicrosoftConsulting/PowerAppsConsulting" element={<PowerAppsConsulting />} />
              <Route path="/services/ITServices/MicrosoftConsulting/PowerBIServices" element={<PowerBIServices />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftDynamics" element={<MicrosoftDynamics />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftDynamicsCustomization" element={<MicrosoftDynamicsCustomization />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftOffice365" element={<MicrosoftOffice365 />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftStackDevelopment" element={<MicrosoftStackDevelopment />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftTeamsConsulting" element={<MicrosoftTeamsConsulting />} />


              {/* E-Commerce */}
              <Route path="/services/ITServices/ECommerceDevelopment" element={<ECommerceDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/ThreeDCartDevelopment" element={<ThreeDCartDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/PrestashopDevelopment" element={<PrestashopDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/VirtuemartDevelopment" element={<VirtuemartDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/BigCommerceDevelopment" element={<BigCommerceDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/ShopifyDevelopment" element={<ShopifyDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/WooCommerceDevelopment" element={<WooCommerceDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/CsCartDevelopment" element={<CsCartDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/SpreeCommerceDevelopment" element={<SpreeCommerceDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/OsCommerceDevelopment" element={<OsCommerceDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/SquarespaceDevelopment" element={<SquarespaceDevelopment />} />

              {/* Cloud Counsulting */}
              <Route path="/services/ITServices/CloudConsulting" element={<CloudConsulting />} />
              <Route path="/services/ITServices/CloudConsulting/HybridCloudServices" element={<HybridCloudServices />} />
              <Route path="/services/ITServices/CloudConsulting/MultiCloudManagement" element={<MultiCloudManagement />} />
              <Route path="/services/ITServices/CloudConsulting/MultiCloudServices" element={<MultiCloudServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudBusinessTransformation" element={<CloudBusinessTransformation />} />
              <Route path="/services/ITServices/CloudConsulting/AlibabaCloudServices" element={<AlibabaCloudServices />} />
              <Route path="/services/ITServices/CloudConsulting/IbmCloudManagedServices" element={<IbmCloudManagedServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudSecurityServices" element={<CloudSecurityServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudIntegrationServices" element={<CloudIntegrationServices />} />
              <Route path="/services/ITServices/CloudConsulting/ManagedApplicationServices" element={<ManagedApplicationServices />} />
              <Route path="/services/ITServices/CloudConsulting/AlexaSkillDevelopmentServices" element={<AlexaSkillDevelopmentServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudMonitoringServices" element={<CloudMonitoringServices />} />
              <Route path="/services/ITServices/CloudConsulting/BSSTransformationServices" element={<BSSTransformationServices />} />
              <Route path="/services/ITServices/CloudConsulting/AWSApplicationIntegrationServices" element={<AWSApplicationIntegrationServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudApplicationDevelopmentServices" element={<CloudApplicationDevelopmentServices />} />
              <Route path="/services/ITServices/CloudConsulting/ContainerizationServices" element={<ContainerizationServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudComputingApplicationDevelopmentServices" element={<CloudComputingApplicationDevelopmentServices />} />
              <Route path="/services/ITServices/CloudConsulting/Office365SetupAndMigrationServices" element={<Office365SetupAndMigrationServices />} />
              <Route path="/services/ITServices/CloudConsulting/AmazonRedshiftServices" element={<AmazonRedshiftServices />} />
              <Route path="/services/ITServices/CloudConsulting/DataWarehouseServices" element={<DataWarehouseServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudMigrationServices" element={<CloudMigrationServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudOptimizationServices" element={<CloudOptimizationServices />} />
              <Route path="/services/ITServices/CloudConsulting/AdobeCreativeCloudServices" element={<AdobeCreativeCloudServices />} />
              <Route path="/services/ITServices/CloudConsulting/DigitalWorkplaceServices" element={<DigitalWorkplaceServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudNativeAppDevelopmentServices" element={<CloudNativeAppDevelopmentServices />} />
              <Route path="/services/ITServices/CloudConsulting/OracleCloudServices" element={<OracleCloudServices />} />
              <Route path="/services/ITServices/CloudConsulting/AmazonWebServices" element={<AmazonWebServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudEnablementServices" element={<CloudEnablementServices />} />
              <Route path="/services/ITServices/CloudConsulting/SnowflakeDataWarehouseServices" element={<SnowflakeDataWarehouseServices />} />
              <Route path="/services/ITServices/CloudConsulting/InfrastructureAsAService" element={<InfrastructureAsAService />} />
              <Route path="/services/ITServices/CloudConsulting/ToktivBusinessVoip" element={<ToktivBusinessVoip />} />
              <Route path="/services/ITServices/CloudConsulting/HybridInfrastructureManagedServices" element={<HybridInfrastructureManagedServices />} />
              <Route path="/services/ITServices/CloudConsulting/PlatformAsAService" element={<PlatformAsAService />} />
              <Route path="/services/ITServices/CloudConsulting/VirtualDesktopInfrastructure" element={<VirtualDesktopInfrastructure />} />


              {/* IT Staffing */}
              <Route path="/services/ITServices/ITStaffingServices" element={<ITStaffingServices />} />
              <Route path="/services/ITServices/ITStaffingServices/HireAngularDevelopers" element={<HireAngularDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ITStaffingForWordPress" element={<ITStaffingForWordPress />} />
              <Route path="/services/ITServices/ITStaffingServices/HireMaximoDevelopers" element={<HireMaximoDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/HireNodeJSDevelopers" element={<HireNodeJSDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ITStaffingForDrupal" element={<ITStaffingForDrupal />} />
              <Route path="/services/ITServices/ITStaffingServices/HireSpringBootDevelopers" element={<HireSpringBootDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/HireOpenCartDevelopers" element={<HireOpenCartDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ITStaffingForWebDevelopers" element={<ITStaffingForWebDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/HireElixirDevelopers" element={<HireElixirDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ITStaffingForLAMP" element={<ITStaffingForLAMP />} />
              <Route path="/services/ITServices/ITStaffingServices/DedicatedPHPDevelopers" element={<DedicatedPHPDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/HireKonyAppDevelopers" element={<HireKonyAppDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/JavaStaffing" element={<JavaStaffing />} />
              <Route path="/services/ITServices/ITStaffingServices/MagentoDevelopers" element={<MagentoDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ExpressJSDevelopers" element={<ExpressJSDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/MicrosoftStaffing" element={<MicrosoftStaffing />} />
              <Route path="/services/ITServices/ITStaffingServices/ARDevelopers" element={<ARDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/GolangDevelopers" element={<GolangDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/DigitalMarketingStaffing" element={<DigitalMarketingStaffing />} />
              <Route path="/services/ITServices/ITStaffingServices/PythonDevelopers" element={<PythonDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/SvelteJSDevelopers" element={<SvelteJSDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/AndroidDevelopers" element={<AndroidDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/IosDevelopers" element={<IosDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/NuxtJSDevelopers" element={<NuxtJSDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/WebDesignStaffing" element={<WebDesignStaffing />} />
              <Route path="/services/ITServices/ITStaffingServices/IpadAppDevelopers" element={<IpadAppDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ReactJSDevelopers" element={<ReactJSDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/MobileAppDevelopers" element={<MobileAppDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/BlockchainDevelopers" element={<BlockchainDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/FlutterDevelopers" element={<FlutterDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/OracleDevelopers" element={<OracleDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/SwiftDevelopers" element={<SwiftDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/OracleDBA" element={<OracleDBA />} />
              <Route path="/services/ITServices/ITStaffingServices/IPhoneAppDevelopers" element={<IPhoneAppDevelopers />} />


              {/* Software Testing */}
              <Route path="/services/ITServices/SoftwareTestingServices" element={<SoftwareTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/RegressionTestingServices" element={<RegressionTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SoftwareTestingServices" element={<SoftwareTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/NetworkTestingServices" element={<NetworkTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/TestingKnowledgeManagementServices" element={<TestingKnowledgeManagementServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/AcceptanceTestDrivenDevelopmentServices" element={<AcceptanceTestDrivenDevelopmentServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ContinuousIntegrationServices" element={<ContinuousIntegrationServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ReliabilityTestingServices" element={<ReliabilityTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/IndependentTestingServices" element={<IndependentTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ManagedTestingServices" element={<ManagedTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/CompatibilityTestingServices" element={<CompatibilityTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/BetaTestingServices" element={<BetaTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/MainframeTestingServices" element={<MainframeTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/StressTestingServices" element={<StressTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/DevOpsTestingServices" element={<DevOpsTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ManagedCrowdTestingServices" element={<ManagedCrowdTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ComplianceTestingServices" element={<ComplianceTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/NetworkPenetrationTesting" element={<NetworkPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SoaWebServicesTesting" element={<SoaWebServicesTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/LocalizationTesting" element={<LocalizationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SoaTesting" element={<SoaTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/TestAutomationServices" element={<TestAutomationServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/LoadTesting" element={<LoadTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SeleniumTesting" element={<SeleniumTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/TypesOfSoftwareTesting" element={<TypesOfSoftwareTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/VolumeTesting" element={<VolumeTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/RobotFrameworkTesting" element={<RobotFrameworkTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/IndustryTestingServices" element={<IndustryTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/RecoveryTesting" element={<RecoveryTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/BillingTesting" element={<BillingTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ECommerceTesting" element={<ECommerceTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/InstallationTesting" element={<InstallationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/EDITesting" element={<EDITesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/EmbeddedTesting" element={<EmbeddedTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ETLTesting" element={<ETLTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/UsabilityTesting" element={<UsabilityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/MobileApplicationTesting" element={<MobileApplicationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SoakTesting" element={<SoakTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/OutcomeBasedTesting" element={<OutcomeBasedTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ComputerSystemValidation" element={<ComputerSystemValidation />} />
              <Route path="/services/ITServices/SoftwareTestingServices/PerformanceTesting" element={<PerformanceTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/HappyPathTesting" element={<HappyPathTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/DesktopApplicationTesting" element={<DesktopApplicationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ScalabilityTesting" element={<ScalabilityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/APITesting" element={<APITesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/MobileTesting" element={<MobileTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SAPTesting" element={<SAPTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/WebsiteTesting" element={<WebsiteTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ExternalPenetrationTesting" element={<ExternalPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/BackwardCompatibilityTesting" element={<BackwardCompatibilityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/CrmTestingServices" element={<CrmTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/InternalNetworkPenetrationTesting" element={<InternalNetworkPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/BrowserCompatibilityTesting" element={<BrowserCompatibilityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SmokeTestingServices" element={<SmokeTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/FirewallPenetrationTesting" element={<FirewallPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/RiskManagementTesting" element={<RiskManagementTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SystemTestingServices" element={<SystemTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/PenetrationTestingServices" element={<PenetrationTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/CyberSecurityTesting" element={<CyberSecurityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/WebServicesTesting" element={<WebServicesTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/TestEnvironmentManagement" element={<TestEnvironmentManagement />} />
              <Route path="/services/ITServices/SoftwareTestingServices/GUITesting" element={<GUITesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/CloudTesting" element={<CloudTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/TestProcessImprovement" element={<TestProcessImprovement />} />
              <Route path="/services/ITServices/SoftwareTestingServices/GameTesting" element={<GameTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/UnitTesting" element={<UnitTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SecurityTesting" element={<SecurityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/VAPTServices" element={<VAPTServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/IntegrationTesting" element={<IntegrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/GDPRCompliance" element={<GDPRCompliance />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SocialEngineering" element={<SocialEngineering />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SanityTesting" element={<SanityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SoftwareTestingProjects" element={<SoftwareTestingProjects />} />
              <Route path="/services/ITServices/SoftwareTestingServices/WirelessPenetrationTesting" element={<WirelessPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ExploratoryTesting" element={<ExploratoryTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ManagedQualityAssurance" element={<ManagedQualityAssurance />} />
              <Route path="/services/ITServices/SoftwareTestingServices/WebAppPenetrationTesting" element={<WebAppPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/UserAcceptanceTesting" element={<UserAcceptanceTesting />} />


              {/* IMS */}
              <Route path="/services/ITServices/ITInfrastructureManagement" element={<ITInfrastructureManagement />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/CybersecurityCountermeasures" element={<CybersecurityCountermeasures />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ManagedVirtualizationServices" element={<ManagedVirtualizationServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ApplicationPerformanceMonitoring" element={<ApplicationPerformanceMonitoring />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ITRiskAndSecurity" element={<ITRiskAndSecurity />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ManagedStorageServices" element={<ManagedStorageServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/SecurityRiskAssessment" element={<SecurityRiskAssessment />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/CybersecurityDueDiligence" element={<CybersecurityDueDiligence />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ManagedBackupServices" element={<ManagedBackupServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/VulnerabilityManagement" element={<VulnerabilityManagement />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/CyberSecurityAssessment" element={<CyberSecurityAssessment />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ITAuditServices" element={<ITAuditServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/Windows365Consulting" element={<Windows365Consulting />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/RemoteMonitoring" element={<RemoteMonitoring />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ApplicationManagedServices" element={<ApplicationManagedServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/Windows365ChangeManagement" element={<Windows365ChangeManagement />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/DigitalForensics" element={<DigitalForensics />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/NetworkMonitoring" element={<NetworkMonitoring />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/Windows365" element={<Windows365 />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/DataCenterServices" element={<DataCenterServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/SOCService" element={<SOCService />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/Windows365Migration" element={<Windows365Migration />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/EnterpriseSecurity" element={<EnterpriseSecurity />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/NOCMonitoringServices" element={<NOCMonitoringServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/DigitalWorkforce" element={<DigitalWorkforce />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ITHelpDesk" element={<ITHelpDesk />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/CyberThreat" element={<CyberThreat />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/TerraformServices" element={<TerraformServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ActiveDirectory" element={<ActiveDirectory />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/DataCenterMiddleware" element={<DataCenterMiddleware />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/Kubernetes" element={<Kubernetes />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/NetworkInfrastructure" element={<NetworkInfrastructure />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ManagedSIEM" element={<ManagedSIEM />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/DataRecoveryServices" element={<DataRecoveryServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/InfrastructureApplicationSupportServices" element={<InfrastructureApplicationSupportServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/CompromiseAssessmentServices" element={<CompromiseAssessmentServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/DigitalCommerceServices" element={<DigitalCommerceServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ServerMonitoringServices" element={<ServerMonitoringServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/PCIComplianceServices" element={<PCIComplianceServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/Windows365SetupServices" element={<Windows365SetupServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ManagedITServices" element={<ManagedITServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/QuantumComputingServices" element={<QuantumComputingServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/SugarCRMDevelopmentServices" element={<SugarCRMDevelopmentServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ManagedITServicesForInsurance" element={<ManagedITServicesForInsurance />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/VirtualCTOServices" element={<VirtualCTOServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/CIOAdvisoryServices" element={<CIOAdvisoryServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/IAMServices" element={<IAMServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/CyberSecurityResilienceServices" element={<CyberSecurityResilienceServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ServerManagementServices" element={<ServerManagementServices />} />


              {/* Enterprise */}
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions" element={<EnterpriseSoftwareSolutions />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/DevSecOpsServices" element={<DevSecOpsServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/WorkdayServices" element={<WorkdayServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/MetaverseEnterpriseSolutions" element={<MetaverseEnterpriseSolutions />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SAPProductLifecycleServices" element={<SAPProductLifecycleServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SalesforceApplicationDevelopment" element={<SalesforceApplicationDevelopment />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/UnifiedDataManagement" element={<UnifiedDataManagement />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SAPHybrisCommerceSolutions" element={<SAPHybrisCommerceSolutions />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/ITServiceContinuityManagement" element={<ITServiceContinuityManagement />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/DigitalQueryAssistantServices" element={<DigitalQueryAssistantServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/TwilioConsultingServices" element={<TwilioConsultingServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SAPHANACloudServices" element={<SAPHANACloudServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/MicroservicesArchitectureServices" element={<MicroservicesArchitectureServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SAPSupportServices" element={<SAPSupportServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/TwilioFlexServices" element={<TwilioFlexServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/CustomerManagementServices" element={<CustomerManagementServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/ITConsultingServices" element={<ITConsultingServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SIPTrunkingServices" element={<SIPTrunkingServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/DevOpsAutomationServices" element={<DevOpsAutomationServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SAPConsultingServices" element={<SAPConsultingServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/ApplicationPortfolioServices" element={<ApplicationPortfolioServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/DevOpsServices" element={<DevOpsServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/ERPDevelopmentServices" element={<ERPDevelopmentServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/TwilioIntegrationServices" element={<TwilioIntegrationServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/DigitalMailroomServices" element={<DigitalMailroomServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/CRMDevelopmentServices" element={<CRMDevelopmentServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SAPBusinessOneServices" element={<SAPBusinessOneServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/EnterpriseApplicationServices" element={<EnterpriseApplicationServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SupplyChainServices" element={<SupplyChainServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SpreadsheetValidationServices" element={<SpreadsheetValidationServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/EnterpriseMobilitySolutions" element={<EnterpriseMobilitySolutions />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/WebPortalServices" element={<WebPortalServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SalesforceAutomationServices" element={<SalesforceAutomationServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/MaximoDevelopmentServices" element={<MaximoDevelopmentServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/WorkflowAutomationServices" element={<WorkflowAutomationServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SAPApplicationDevelopmentServices" element={<SAPApplicationDevelopmentServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/SoftwareAssetManagementServices" element={<SoftwareAssetManagementServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/EnterpriseApplicationIntegrationServices" element={<EnterpriseApplicationIntegrationServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/Dynamics365BusinessCentralServices" element={<Dynamics365BusinessCentralServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/OracleConsultingServices" element={<OracleConsultingServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/CRMConsultingServices" element={<CRMConsultingServices />} />
              <Route path="/services/ITServices/EnterpriseSoftwareSolutions/DigitalProcessAutomationServices" element={<DigitalProcessAutomationServices />} />

              {/* Technologies */}
              <Route path="/services/ITServices/SoftwareDevelopment" element={<SoftwareDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/JavascriptDevelopment" element={<JavascriptDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/SmartContractDevelopment" element={<SmartContractDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/BubbleAppDevelopment" element={<BubbleAppDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/TableauDevelopmentServices" element={<TableauDevelopmentServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/QtDevelopment" element={<QtDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ExpressJSServices" element={<ExpressJSServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/TensorFlowDevelopment" element={<TensorFlowDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ReactJSDevelopment" element={<ReactJSDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/NextJSDevelopment" element={<NextJSDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/AngularDevelopment" element={<AngularDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CakePHPDevelopment" element={<CakePHPDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/NuxtJsDevelopment" element={<NuxtJsDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/SilverlightDevelopment" element={<SilverlightDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/SymfonyDevelopment" element={<SymfonyDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CreateJSServices" element={<CreateJSServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/NetMVCDevelopment" element={<NetMVCDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/BackboneJSDevelopment" element={<BackboneJSDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/MeteorJSDevelopment" element={<MeteorJSDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/MagentoDevelopment" element={<MagentoDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/StellarDevelopment" element={<StellarDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/KnockoutJSDevelopment" element={<KnockoutJSDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/NodeJSDevelopment" element={<NodeJSDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/MERNStackDevelopment" element={<MERNStackDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/EmberJSDevelopment" element={<EmberJSDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/SenchaDevelopment" element={<SenchaDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/SpringBootDevelopment" element={<SpringBootDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/MEANStackDevelopment" element={<MEANStackDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/TezosDevelopment" element={<TezosDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/NetDevelopment" element={<NetDevelopment />} />

              <Route path="/services/ITServices/SoftwareDevelopment/ColdFusionDevelopment" element={<ColdFusionDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/SaaSDevelopment" element={<SaaSDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/AlfrescoDevelopment" element={<AlfrescoDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/AngularJSDevelopment" element={<AngularJSDevelopment />} />

              {/* 22-09-2025 */}
              <Route path="/services/ITServices/SoftwareDevelopment/OpenSourceCMS" element={<OpenSourceCMS />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ContentManagementServices" element={<ContentManagementServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/DAppDevelopmentServices" element={<DAppDevelopmentServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/AEMDevelopmentServices" element={<AEMDevelopmentServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CodeIgniterDevelopmentServices" element={<CodeIgniterDevelopmentServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/BizTalkDevelopmentServices" element={<BizTalkDevelopmentServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/VueJsDevelopmentServices" element={<VueJsDevelopmentServices />} />


              {/* Digital Transformation  */}
              <Route path="/services/ITServices/SoftwareDevelopment/DigitalTransformation" element={<DigitalTransformation />} />

              {/* Network Infrastructure */}
              <Route path="/services/ITServices/SoftwareDevelopment/NetworkInfrastructures" element={<NetworkInfrastructures />} />

              {/* Database Service */}
              <Route path="/services/ITServices/SoftwareDevelopment/DatabaseServices" element={<DatabaseServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/DatabaseDevelopmentServices" element={<DatabaseDevelopmentServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/SQLServerManagedServices" element={<SQLServerManagedServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/Neo4jManagedServices" element={<Neo4jManagedServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/DatabaseAdministrationServices" element={<DatabaseAdministrationServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ApacheIgniteManagedServices" element={<ApacheIgniteManagedServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CouchDBManagedServices" element={<CouchDBManagedServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/DatabaseManagementServices" element={<DatabaseManagementServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/MongoDBManagedServices" element={<MongoDBManagedServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/PostgreSQLService" element={<PostgreSQLService />} />
              <Route path="/services/ITServices/SoftwareDevelopment/DatabaseDesignServices" element={<DatabaseDesignServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/PostgreSQLManagedServices" element={<PostgreSQLManagedServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/JanusGraphService" element={<JanusGraphService />} />
              <Route path="/services/ITServices/SoftwareDevelopment/DatabaseMigrationService" element={<DatabaseMigrationService />} />
              <Route path="/services/ITServices/SoftwareDevelopment/GraphDBService" element={<GraphDBService />} />
              <Route path="/services/ITServices/SoftwareDevelopment/PatchManagementService" element={<PatchManagementService />} />
              <Route path="/services/ITServices/SoftwareDevelopment/MySQLManagedServices" element={<MySQLManagedServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ArangoDBService" element={<ArangoDBService />} />
              <Route path="/services/ITServices/SoftwareDevelopment/MySQLDevelopmentServices" element={<MySQLDevelopmentServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CassandraService" element={<CassandraService />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ScyllaDBService" element={<ScyllaDBService />} />
              <Route path="/services/ITServices/SoftwareDevelopment/DevelopmentAndMigrationServices" element={<DevelopmentAndMigrationServices />} />


              {/* Industries */}
              <Route path="/services/ITServices/SoftwareDevelopment/SoftwareDevelopmentForIndustries" element={<SoftwareDevelopmentForIndustries />} />
              <Route path="/services/ITServices/SoftwareDevelopment/industries/AerospaceSoftwareServices" element={<AerospaceSoftwareServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/MediaAndEntertainmentServices" element={<MediaAndEntertainmentServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/FoodAndBeverageSoftware" element={<FoodAndBeverageSoftware />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CustomsBrokerageSoftware" element={<CustomsBrokerageSoftware />} />
              <Route path="/services/ITServices/SoftwareDevelopment/RecruitmentSoftwareDevelopment" element={<RecruitmentSoftwareDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/SoftwareDevelopmentForISVs" element={<SoftwareDevelopmentForISVs />} />
              <Route path="/services/ITServices/SoftwareDevelopment/EducationSoftwareDevelopment" element={<EducationSoftwareDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/TravelPortalDevelopment" element={<TravelPortalDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/PublishingAndAdvertisingSoftware" element={<PublishingAndAdvertisingSoftware />} />
              <Route path="/services/ITServices/SoftwareDevelopment/BankingAndFinancialSoftware" element={<BankingAndFinancialSoftware />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ConsumerGoodsSoftware" element={<ConsumerGoodsSoftware />} />
              <Route path="/services/ITServices/SoftwareDevelopment/AugmentedRealityDriverAssistance" element={<AugmentedRealityDriverAssistance />} />
              <Route path="/services/ITServices/SoftwareDevelopment/TravelsPortalDevelopment" element={<TravelsPortalDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/SchoolManagementSoftware" element={<SchoolManagementSoftware />} />
              <Route path="/services/ITServices/SoftwareDevelopment/AutomotiveTelematics" element={<AutomotiveTelematics />} />
              <Route path="/services/ITServices/SoftwareDevelopment/HealthcareSoftware" element={<HealthcareSoftware />} />
              <Route path="/services/ITServices/SoftwareDevelopment/FashionManagementSoftware" element={<FashionManagementSoftware />} />
              <Route path="/services/ITServices/SoftwareDevelopment/IoTHCApplicationManagement" element={<IoTHCApplicationManagement />} />
              <Route path="/services/ITServices/SoftwareDevelopment/AutomotiveSoftwareSolutions" element={<AutomotiveSoftwareSolutions />} />
              <Route path="/services/ITServices/SoftwareDevelopment/SportsAppDevelopment" element={<SportsAppDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/TelecomSoftwareDevelopment" element={<TelecomSoftwareDevelopment />} />


              {/* Other Service */}
              <Route path="/services/ITServices/SoftwareDevelopment/ProjectPortfolioManagement" element={<ProjectPortfolioManagement />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ELearningContentDevelopment" element={<ELearningContentDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/PredictiveAnalytics" element={<PredictiveAnalyticsos />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CorporateITTtraining" element={<CorporateITTtraining />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ELearningArtDesign" element={<ELearningArtDesign />} />
              <Route path="/services/ITServices/SoftwareDevelopment/PrescriptiveAnalytics" element={<PrescriptiveAnalytics />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ELearningServices" element={<ELearningServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/OpenSourceELearning" element={<OpenSourceELearning />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ImageVideoAnalytics" element={<ImageVideoAnalytics />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ELearningMobileAppDev" element={<ELearningMobileAppDev />} />
              <Route path="/services/ITServices/SoftwareDevelopment/DigitalGameELearning" element={<DigitalGameELearning />} />
              <Route path="/services/ITServices/SoftwareDevelopment/WebAnalyticsConfig" element={<WebAnalyticsConfig />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ELearningSoftwareDevelopment" element={<ELearningSoftwareDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ELearningContentPorting" element={<ELearningContentPorting />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CustomWebAnalytics" element={<CustomWebAnalytics />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ELearningSolutions" element={<ELearningSolutions />} />
              <Route path="/services/ITServices/SoftwareDevelopment/UipathConsulting" element={<UipathConsulting />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CampaignAnalyticsServices" element={<CampaignAnalyticsServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CorporateTrainingELearning" element={<CorporateTrainingELearning />} />
              <Route path="/services/ITServices/SoftwareDevelopment/PrimaveraConsulting" element={<PrimaveraConsulting />} />
              <Route path="/services/ITServices/SoftwareDevelopment/GoogleAnalyticsServices" element={<GoogleAnalyticsServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/PerformanceGapAnalysis" element={<PerformanceGapAnalysis />} />
              <Route path="/services/ITServices/SoftwareDevelopment/DomoConsultingServices" element={<DomoConsultingServices />} />
              <Route path="/services/ITServices/SoftwareDevelopment/RemoteWebAnalytics" element={<RemoteWebAnalytics />} />
              <Route path="/services/ITServices/SoftwareDevelopment/TrainingProductDevelopment" element={<TrainingProductDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/WebAnalyticsPhilippines" element={<WebAnalyticsPhilippines />} />
              <Route path="/services/ITServices/SoftwareDevelopment/MoodleDevelopment" element={<MoodleDevelopment />} />
              <Route path="/services/ITServices/SoftwareDevelopment/CustomDashboard" element={<CustomDashboard />} />
              <Route path="/services/ITServices/SoftwareDevelopment/RealEstateDashboard" element={<RealEstateDashboard />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ProductDemos" element={<ProductDemos />} />
              <Route path="/services/ITServices/SoftwareDevelopment/WebAnalytics" element={<WebAnalytics />} />
              <Route path="/services/ITServices/SoftwareDevelopment/ClickstreamAnalytics" element={<ClickstreamAnalytics />} />
              <Route path="/services/ITServices/SoftwareDevelopment/InstructionalDesign" element={<InstructionalDesign />} />
              <Route path="/services/ITServices/SoftwareDevelopment/DataVisualization" element={<DataVisualization />} />
              <Route path="/services/ITServices/SoftwareDevelopment/WorkforceAnalytics" element={<WorkforceAnalytics />} />

              {/* Mechanical Engineering */}
              <Route path="/engineering/mechanical/modular-plant-design-services.asp" element={<ModularPlantDesign />} />
              <Route path="/engineering/mechanical/prototyping-rapid-prototyping-services.asp" element={<PrototypingAndRapidPrototyping />} />
              <Route path="/engineering/mechanical/crash-analysis-services.asp" element={<CrashAnalysisServices />} />
              <Route path="/engineering/mechanical/proposal-review-and-bid-management.asp" element={<ProposalAndBidManagement />} />
              <Route path="/engineering/mechanical/finite-element-analysis-services.asp" element={<FiniteElementAnalysis />} />
              <Route path="/engineering/mechanical/technical-publication-services.asp" element={<TechnicalPublicationServices />} />
              <Route path="/engineering/mechanical/virtual-prototyping-services.asp" element={<VirtualPrototypingServices />} />
              <Route path="/engineering/mechanical/product-design-and-development-services.asp" element={<ProductDesignAndDevelopment />} />
              <Route path="/engineering/mechanical/product-lifecycle-support-services.asp" element={<ProductLifecycleSupport />} />
              <Route path="/engineering/mechanical/detailed-engineering-design-services.asp" element={<DetailedEngineeringDesign />} />
              <Route path="/engineering/mechanical/value-engineering-services.asp" element={<ValueEngineeringServices />} />
              <Route path="/engineering/mechanical/finite-element-analysis-services.asp" element={<FatigueAnalysisServices />} />
              <Route path="/engineering/mechanical/plant-design-engineering-services.asp" element={<PlantDesignEngineering />} />
              <Route path="/engineering/mechanical/plant-design-management-system-services.asp" element={<PlantDesignManagementSystem />} />
              <Route path="/engineering/mechanical/catia-services.asp" element={<CATIAServices />} />

              {/* 23-09-2025 */}
              <Route path="/engineering/mechanical/thermal-modeling-services.asp" element={<ThermalModeling />} />
              <Route path="/engineering/mechanical/piping-design-drafting-services.asp" element={<PipingDesign />} />
              <Route path="/engineering/mechanical/autodesk-inventor-services.asp" element={<AutodeskInventorServices />} />
              <Route path="engineering/mechanical/tolerance-stackup-analysis-services.asp" element={<ToleranceStackup />} />
              <Route path="/engineering/mechanical/sheet-metal-design-services.asp" element={<SheetMetalDesign />} />
              <Route path="/engineering/mechanical/mechanical-concept-design-services.asp" element={<MechanicalConceptDesign />} />
              <Route path="/engineering/mechanical/mechanical-engineering-analysis-services.asp" element={<MechanicalEngineeringAnalysis />} />
              <Route path="/engineering/mechanical/casting-design-and-manufacturing-services.asp" element={<CastingDesign />} />
              <Route path="/engineering/bim/revit-family-creation-services.asp" element={<RevitFamilyCreation />} />
              <Route path="/engineering/mechanical/visual-merchandising-and-display-services.asp" element={<VisualMerchandising />} />
              <Route path="/engineering/mechanical/reverse-engineering-services.asp" element={<ReverseEngineering />} />
              <Route path="/engineering/mechanical/3d-laser-scanning-services.asp" element={<LaserScanning />} />
              <Route path="/engineering/mechanical/cnc-programming-services.asp" element={<CNCProgrammingServices />} />
              <Route path="/engineering/mechanical/process-planning-automation-solutions.asp" element={<ProcessPlanning />} />
              <Route path="/engineering/mechanical/solidworks-design-services.asp" element={<SolidWorksDesign />} />
              <Route path="/engineering/mechanical/3d-product-rendering-modeling-services.asp" element={<ProductRenderingModeling />} />
              <Route path="/engineering/mechanical/structural-stress-analysis-services.asp" element={<StructuralStressAnalysis />} />
              <Route path="/engineering/mechanical/assembly-drawing-services.asp" element={<AssemblyDrawings />} />
              <Route path="/engineering/mechanical/3d-rendering-modeling-drafting-services.asp" element={<ThreeDModelingDrafting />} />
              <Route path="/engineering/mechanical/3d-part-modeling-services.asp" element={<ThreeDPartModeling />} />
              <Route path="/engineering/mechanical/assembly-modeling-services.asp" element={<AssemblyModelingServices />} />
              <Route path="/engineering/mechanical/cae-modal-analysis-services.asp" element={<CAEModalAnalysis />} />
              <Route path="/engineering/mechanical/jigs-and-fixture-design-services.asp" element={<JigsFixturesDesign />} />
              <Route path="/engineering/mechanical/tooling-fixture-design-drafting-services.asp" element={<ToolingFixtureDesign />} />
              <Route path="/engineering/mechanical/engineering-change-order-services.asp" element={<EngineeringChangeOrder />} />
              <Route path="/engineering/mechanical/machine-design-and-development-services.asp" element={<MachineDesignDevelopment />} />
              <Route path="/engineering/mechanical/hvac-system-replacement-services.asp" element={<HVACSystemReplacement />} />
              <Route path="/engineering/mechanical/3ds-max-modeling-services.asp" element={<Max3DServices />} />
              <Route path="/engineering/mechanical/mechanical-3d-product-animation-services.asp" element={<Mechanical3DAnimation />} />
              <Route path="/engineering/mechanical/2d-drafting-services.asp" element={<Drafting2DServices />} />
              <Route path="/engineering/mechanical/raster-to-vector-conversion-services.asp" element={<RasterToVector />} />
              <Route path="/engineering/mechanical/microstation-conversion-services.asp" element={<MicroStationServiceses />} />
              <Route path="/engineering/mechanical/pdf-to-dwg-conversion-services.asp" element={<PDFtoDWGConversion />} />
              <Route path="/engineering/mechanical/dwg-to-dgn-conversion-services.asp" element={<DWGtoDGN />} />
              <Route path="/engineering/mechanical/mcd-to-dwg-conversion-services.asp" element={<MCDtoDWGConversion />} />
              <Route path="/engineering/mechanical/scanning-measurement-digitizing-services.asp" element={<ScanningMeasurementServices />} />
              <Route path="/engineering/mechanical/plm-implementation-customization-services.asp" element={<PLMservices />} />
              <Route path="/engineering/mechanical/tower-design-services.asp" element={<TowerDesign />} />
              <Route path="/engineering/mechanical/project-management-tools-and-services.asp" element={<ProjectManagementServices />} />
              <Route path="/engineering/mechanical/manufacturing-process-planning-and-support-services.asp" element={<ManufacturingServices />} />
              <Route path="/engineering/mechanical/design-for-manufacturing-services.asp" element={<DFMservices />} />
              <Route path="/engineering/mechanical/product-engineering-and-development-services.asp" element={<ProductEngineering />} />
              <Route path="/engineering/mechanical/plumbing-and-firefighting-services.asp" element={<PlumbingFirefighting />} />
              <Route path="/engineering/mechanical/fabrication-production-cost-estimation-services.asp" element={<FabricationCost />} />
              <Route path="/engineering/mechanical/industrial-automation-services.asp" element={<IndustrialAutomationServices />} />
              <Route path="/engineering/mechanical/failure-analysis-services.asp" element={<FailureAnalysis />} />
              <Route path="/engineering/mechanical/computational-fluid-dynamics-services.asp" element={<CFDservices />} />
              <Route path="/engineering/mechanical/fire-protection-engineering-services.asp" element={<FireProtectionServices />} />
              <Route path="/engineering/mechanical/office-furniture-design-services.asp" element={<OfficeFurnitureServices />} />
              <Route path="/engineering/mechanical/parametric-3d-modeling-services.asp" element={<ParametricModelingServices />} />
              <Route path="/engineering/mechanical/simulation-engineering-services.asp" element={<SimulationEngineeringServices />} />
              <Route path="/engineering/mechanical/radon-testing-services.asp" element={<RadonTestingServices />} />
              <Route path="/engineering/mechanical/3d-modeling-drafting-rendering-oem.asp" element={<OEMservices />} />
              <Route path="/engineering/mechanical/3d-rendering-modeling-drafting-for-visual-merchandising-manufacturers.asp" element={<VisualMerchandisingServices />} />
              <Route path="/engineering/mechanical/ship-deck-design-drafting-services.asp" element={<ShipDeckDesignServices />} />

              {/* Shenbagavel End */}


              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
