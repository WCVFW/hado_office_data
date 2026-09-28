import { useState } from "react";

interface DropdownLink {
  text: string;
  href: string;
}

interface DropdownMenu {
  subheading: string;
  subheadingHref: string;
  links: DropdownLink[];
}

interface MegaMenuItem {
  title: string;
  href: string;
  dropdown?: DropdownMenu;
}

const megaMenuData: MegaMenuItem[] = [
  {
    title: "Medical Billing",
    href: "/services/healthcare-BPO-Service/MedicalBilling-service",
    dropdown: {
      subheading: "Medical Billing Services",
      subheadingHref: "/services/healthcare-BPO-Service/MedicalBilling-service",
      links: [
        { text: "Physician Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/PhysicianBilling-service" },
        { text: "FQHC Medical Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/FQHCBilling-service" },
        { text: "Gynecology Medical Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Gynecology-Billing-service" },
        { text: "Patient Demographic Entry Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Patient-Demographic-Entry-service" },
        { text: "Patient Advice and Liaison Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Patient-AdviceLiaison-service" },
        { text: "Family Practice Billing Service", href: "/services/healthcare-BPO-Service/MedicalBilling-service/FamilyPractice-Billing-service" },
        { text: "Physical Therapy Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/PhysicalTherapy-Billing-service" },
        { text: "Managed Care Contracting Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/ManagedCare-Contracting-service" },
        { text: "Internal Medicine Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Internal-Medicine-Billing-service" },
        { text: "Urgent Care Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/UrgentCare-Billing-service" },
        { text: "Billing Services using Intelligent Medical Service", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Intelligent-Billing-Software-service" },
        { text: "Plastic Surgery Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/plastic-Surgery-Billing-service" },
        { text: "Sleep Medicine Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/SleepMedicine-Billing-service" },
        { text: "Medical Record Abstraction Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Medical-Record-Abstraction-service" },
        { text: "Otolaryngology Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Otolaryngology-Billing-service" },
        { text: "Medical Record Indexing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/MedicalRecord-Indexing-service" },
        { text: "Occupational Health Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Occupational-HealthBilling-service" },
        { text: "Physician Credentialing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Physician-Credentialing-service" },
        { text: "Hospital Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Hospital-Billing-service" },
        { text: "Surgery Center Medical Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/SurgeryCenter-Billing-service" },
        { text: "Hospice Billing Service", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Hospice-Billing-service" },
        { text: "Urology Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/UrologyBilling-service" },
        { text: "EMS Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/EMSBilling-service" },
        { text: "Chiropractic Medical Billing Service", href: "/services/healthcare-BPO-Service/MedicalBilling-service/ChiropracticBilling-service" },
        { text: "Dental Billing Solutions", href: "/services/healthcare-BPO-Service/MedicalBilling-service/DentalBilling-service" },
        { text: "DME Billing Solutions", href: "/services/healthcare-BPO-Service/MedicalBilling-service/DmeBilling-service" },
        { text: "Pathology Billing Service", href: "/services/healthcare-BPO-Service/MedicalBilling-service/PathologyBilling-service" },
        { text: "Anesthesia Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/AnesthesiaBilling-service" },
        { text: "ASC Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/ASCBilling-service" },
        { text: "Pediatric Medical Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/PediatricBilling-service" },
        { text: "Pain Management Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/PainManagementBilling-service" },
        { text: "Charge Entry Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/ChargeEntry-service" },
        { text: "Ambulance Medical Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/AmbulanceBilling-service" },
        { text: "Gastroenterology Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Gastroenterology-Billing-service" },
        { text: "Emergency Medicine Billing Services ", href: "/services/healthcare-BPO-Service/MedicalBilling-service/EmergencyMedicineBilling-service" },
        { text: "Radiology Medical Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/RadiologyBilling-service" },
        { text: "Podiatry Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/PodiatryBilling-service" },
        { text: "Orthopedic Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/OrthopedicBilling-service" },
        { text: "Cardiology Medical Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/CardiologyBilling-service" },
        { text: "Personal Injury Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/PersonalInjuryBilling-service" },
        { text: " Workers Compensation Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/WorkersCompBilling-service" },
        { text: "Neurology Medical Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/NeurologyBilling-service" },
        { text: "Medical Records Retrieval Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/CloudRecordsRetrieval-service" },
        { text: "Medical Document Scanning Services ", href: "/services/healthcare-BPO-Service/MedicalBilling-service/Medical-Document-Scanning-service" },
        { text: "Mental Health Billing Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/HealthBilling-Solutions-service" },
        { text: "Services for Medical Billing Companies", href: "/services/healthcare-BPO-Service/MedicalBilling-service/BackOfficeSupport-service" },
        { text: "EHR Chart Building Services", href: "/services/healthcare-BPO-Service/MedicalBilling-service/EHRChartBuilding-service" },

      ],
    },
  },
  {
    title: "Medical Coding",
    href: "/services/healthcare-BPO-Service/Medical-coding-service",
    dropdown: {
      subheading: "Medical Coding Services",
      subheadingHref: "/services/healthcare-BPO-Service/Medical-coding-service",
      links: [
        { text: "Medical Coding Audit Services", href: "/services/healthcare-BPO-Service/Medical-coding-service/MedicalCoding-Audit-Service" },
        { text: "ICD-10 and CPT Coding Services", href: "/services/healthcare-BPO-Service/Medical-coding-service/CPTICD10Coding-Service" },
        { text: "HCC Coding Services", href: "/services/healthcare-BPO-Service/Medical-coding-service/HCCHcc-Coding-Service" },
        { text: "Medical Coding Analysis Services", href: "/services/healthcare-BPO-Service/Medical-coding-service/Medical-Coding-Analysis-Service" },
      ],
    },
  },
  {
    title: "Revenue Cycle Management",
    href: "/services/healthcare-BPO-Service/RCM",
    dropdown: {
      subheading: "RCM Solutions",
      subheadingHref: "/services/healthcare-BPO-Service/RCM",
      links: [
        { text: "Healthcare Due Diligence Services", href: "/services/healthcare-BPO-Service/RCM/Healthcare-DueDiligence-Service" },
        { text: "payment-posting-services", href: "/services/healthcare-BPO-Service/RCM/PaymentPosting-Services" },
        { text: "Patient Financial Clearance Services", href: "/services/healthcare-BPO-Service/RCM/Patient-FinancialClearance-Service" },
        { text: "MIPS Quality Reporting Services", href: "/services/healthcare-BPO-Service/RCM/MIPS-QualityReporting-Service" },
        { text: "PPO Health Insurance Claims Repricing Service", href: "/services/healthcare-BPO-Service/RCM/PPO-ClaimsRepricing-Service" },
        { text: "Provider Lifecycle Management Service", href: "/services/healthcare-BPO-Service/RCM/PLM-Service" },
        { text: "Medical Case Management Services", href: "/services/healthcare-BPO-Service/RCM/CaseManagement-Services" },
        { text: "Revenue Improvement Services", href: "/services/healthcare-BPO-Service/RCM/Revenue-Improvement-Services" },
        { text: "Healthcare Collection Services", href: "/services/healthcare-BPO-Service/RCM/Healthcare-Collection-Services" },
        { text: "Healthcare Accounts Receivable Services", href: "/services/healthcare-BPO-Service/RCM/Medical-AR-Services" },
        { text: "Health Insurance Recovery Services", href: "/services/healthcare-BPO-Service/RCM/HealthInsuranceRecovery-Service" },
        { text: "Medical Claims Processing Services", href: "/services/healthcare-BPO-Service/RCM/MedicalClaimsProcessing-Service" },
        { text: "Accounts Receivable Analysis Services", href: "/services/healthcare-BPO-Service/RCM/ReceivableAnalysis-Service" },
        { text: "Accounts Receivable Conversion Services", href: "/services/healthcare-BPO-Service/RCM/AccountsReceivableConversion-Service" },
        { text: "Medical Reimbursement Services", href: "/services/healthcare-BPO-Service/RCM/MedicareReimbursementServices-Service" },
        { text: "Accounts Receivable Follow-up Services", href: "/services/healthcare-BPO-Service/RCM/AccountsReceivableFollowUp-Service" },
        { text: "Payment Accuracy Services", href: "/services/healthcare-BPO-Service/RCM/PaymentAccuracy-Service" },
        { text: "Medical Claims and Encounter Processing Services", href: "/services/healthcare-BPO-Service/RCM/MedicalClaimsEncounterProcessing-Service" },
        { text: "AR Calling Services", href: "/services/healthcare-BPO-Service/RCM/ARCalling-Service" },
        { text: "Health Risk Assessment Services", href: "/services/healthcare-BPO-Service/RCM/HealthRiskAssessment-Services" },
        { text: "Healthcare Payer Services", href: "/services/healthcare-BPO-Service/RCM/HealthcarePayer-Services" },
        { text: "Denial Management Services", href: "/services/healthcare-BPO-Service/RCM/DenialManagement-Services" },
        { text: "Dental Revenue Cycle Management Services", href: "/services/healthcare-BPO-Service/RCM/DentalRCM-Services" },
        { text: "Insurance Eligibility Verification Services", href: "/services/healthcare-BPO-Service/RCM/InsuranceEligibility-Services" },
        { text: "Healthcare Revenue Integrity Services", href: "/services/healthcare-BPO-Service/RCM/RevenueIntegrity-Services" },
      ],
    },
  },
  {
    title: "Medical Transcription",
    href: "/services/healthcare-BPO-Service/MedicalTranscription",
    dropdown: {
      subheading: "Transcription Services",
      subheadingHref: "/services/healthcare-BPO-Service/MedicalTranscription",
      links: [
        { text: "Physician Assistant Virtual Scribing Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/VirtualScribing-Service" },
        { text: "Medical Reports Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/MedicalReports-Transcription" },
        { text: "Internal Medicine Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/InternalMedicine-Transcription" },
        { text: "Genetics Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Genetics-Transcription" },
        { text: "Cardiology Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Cardiology-Transcription" },
        { text: "Physical Therapy Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/PhysicalTherapy-Transcription" },
        { text: "Ophthalmology Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/PhysicalTherapy-Transcription" },
        { text: "EMR Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/EMR-Transcription" },
        { text: "Chiropractic Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Chiropractic-Transcription" },
        { text: "discharge summary transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/DischargeSummary-Transcription" },
        { text: "Deaf Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Deaf-Transcription" },
        { text: "Rehabilitation Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Rehabilitation-Transcription" },
        { text: "Emergency room transcription services", href: "/services/healthcare-BPO-Service/MedicalTranscription/EmergencyRoom-Transcription" },
        { text: "Hospital Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Hospital-Transcription" },
        { text: "Virtual Medical Scribing Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/VirtualMedicalScribe-Transcription" },
        { text: "Hl7 Transcription Services ", href: "/services/healthcare-BPO-Service/MedicalTranscription/Hl7-Transcription" },
        { text: "Oncology Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Oncology-Transcription" },
        { text: "Follow-up Notes Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/FollowUpNotes-Transcription" },
        { text: "Neurology  Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Neurology-Transcription" },
        { text: "Orthopedic Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/OrthopedicsTranscription" },
        { text: "History and Physical Notes Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/HistoryPhysicalNotes-Transcription" },
        { text: "Psychiatry Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Psychiatry-Transcription" },
        { text: "Dermatology Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Dermatology-Transcription" },
        { text: "BSL Interpreting Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/BSLInterpreting-Transcription" },
        { text: "Operative Reports Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/OperativeReports-Transcription" },
        { text: "Anesthesiology Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Anesthesiology-Transcription" },
        { text: "Progress Notes Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/ProgressNotes-Transcription" },
        { text: "Pathology Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Pathology-Transcription" },
        { text: "Urology Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Urology-Transcription" },
        { text: "Surgery Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Surgery-Transcription" },
        { text: "Radiology Transcription", href: "/services/healthcare-BPO-Service/MedicalTranscription/Radiology-Transcription" },
        { text: "Gastroenterology Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/Gastroenterology-Transcription" },
        { text: "ENT Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/ENT-Transcription" },
        { text: "Pain Management Transcription Services", href: "/services/healthcare-BPO-Service/MedicalTranscription/PainManagement-Transcription" },

      ],
    },
  },
  {
    title: "Teleradiology",
    href: "/services/healthcare-BPO-Service/Teleradiology",
    dropdown: {
      subheading: "Teleradiology Services",
      subheadingHref: "/services/healthcare-BPO-Service/Teleradiology",
      links: [
        { text: "eRAD PACS System for Teleradiology", href: "/services/healthcare-BPO-Service/Teleradiology/eRAD-PACS-System" },
        { text: "Emergency Radiology Services", href: "/services/healthcare-BPO-Service/Teleradiology/Emergency-Radiology" },
        { text: "STAT Reporting and Critical Results Reporting", href: "/services/healthcare-BPO-Service/Teleradiology/StatReporting-Radiology" },
        { text: "Radiology Information System Services", href: "/services/healthcare-BPO-Service/Teleradiology/RadiologyInformationSystem" },
        { text: "Preliminary Teleradiology Reporting Services", href: "/services/healthcare-BPO-Service/Teleradiology/Preliminary-Teleradiology" },
        { text: "MRI Interpretation Services", href: "/services/healthcare-BPO-Service/Teleradiology/MRIInterpretation-Radiology" },
        { text: "Nighthawk Teleradiology Services", href: "/services/healthcare-BPO-Service/Teleradiology/Nighthawk-Teleradiology" },
        { text: "On-site Radiology and Interpretation Services", href: "/services/healthcare-BPO-Service/Teleradiology/OnsiteTeleradiology" },
        { text: "Bone Density Scan Services", href: "/services/healthcare-BPO-Service/Teleradiology/BoneDensityScan" },
        { text: "3D Image Processing Services", href: "/services/healthcare-BPO-Service/Teleradiology/ImageProcessing" },
        { text: "Neurology PET/CT Reporting Services", href: "/services/healthcare-BPO-Service/Teleradiology/NeurologyPETCT" },
        { text: "Thoracic Imaging Services", href: "/services/healthcare-BPO-Service/Teleradiology/ThoracicImaging" },
        { text: "Medical Imaging Services", href: "/services/healthcare-BPO-Service/Teleradiology/MedicalImaging" },
        { text: "PET/CT Reporting Services", href: "/services/healthcare-BPO-Service/Teleradiology/PETCTReporting" },
        { text: "Afterhours Teleradiology Services", href: "/services/healthcare-BPO-Service/Teleradiology/AfterTeleradiology-Services" },
        { text: "Final Teleradiology Reads and Reporting Services", href: "/services/healthcare-BPO-Service/Teleradiology/FinalTeleradiologyReads" },
        { text: "Cardiac PET/CT Reporting Services", href: "/services/healthcare-BPO-Service/Teleradiology/CardiacPETCTReporting"},
        { text: "CT Interpretation Services", href: "/services/healthcare-BPO-Service/Teleradiology/CTInterpretation"},
        { text: "Dental X-Ray Imaging Services", href: "/services/healthcare-BPO-Service/Teleradiology/DentalXrayImaging"},
      ],
    },
  },
  {
    title: "EMR",
    href: "/services/healthcare-BPO-Service/EMRServices",
    dropdown: {
      subheading: "EMR Services",
      subheadingHref: "/services/healthcare-BPO-Service/EMRServices",
      links: [
        { text: "Pediatrics EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/PediatricsEMRServices" },
        { text: "Ophthalmology EHR Services", href: "/services/healthcare-BPO-Service/EMRServices/OphthalmologyEMRServices" },
        { text: "Infectious Disease EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/InfectiousDiseaseEMR" },
        { text: "Endocrinology EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/EndocrinologyEMR" },
        { text: "Pulmonary EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/PulmonaryEMR" },
        { text: "House Call EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/HouseCallEMR" },
        { text: "EMR Software Development Services", href: "/services/healthcare-BPO-Service/EMRServices/EMRSoftwareDevelopment" },
        { text: "Allergy and Immunology EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/AllergyImmunologyEMR" },
        { text: "Urology EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/UrologyEMR" },
        { text: "Dermatology EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/DermatologyEMR" },
        { text: "Pain Management EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/PainManagementEMR" },
        { text: "Medical Record Summary Services", href: "/services/healthcare-BPO-Service/EMRServices/MedicalRecordSummary" },
        { text: "Sleep Medicine EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/SleepMedicineEMR" },
        { text: "Internal Medicine EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/InternalMedicineEMR" },
        { text: "Office Ally EHR Services", href: "/services/healthcare-BPO-Service/EMRServices/OfficeAllyEHR" },
        { text: "Oncology EMR ServiceS", href: "/services/healthcare-BPO-Service/EMRServices/OncologyEMR" },
        { text: "Rehabilitative Medicine EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/RehabilitativeEMR" },
        { text: "Nephrology EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/NephrologyEMR" },
        { text: "Cardiology EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/CardiologyEMR" },
        { text: "Speech Therapy EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/SpeechTherapyEMR" },
        { text: "Ambulatory Surgery EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/AmbulatorySurgeryEMR" },
        { text: "Physical Medicine EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/PhysicalMedicineEMR" },
        { text: "Primary Care EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/PrimaryCareEMR" },
        { text: "EMR Integration Services", href: "/services/healthcare-BPO-Service/EMRServices/EMRIntegration" },
        { text: "OB/GYN EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/OBGYNEMR" },
        { text: "Rheumatology EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/RheumatologyEMR" },
        { text: "Virtual EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/VirtualEMR" },
        { text: "Orthopedics EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/OrthopedicsEMR" },
        { text: "Psychiatry EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/PsychiatryEMR" },
        { text: "Precharting Services", href: "/services/healthcare-BPO-Service/EMRServices/PrechartingServices" },
        { text: "Otolaryngology EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/OtolaryngologyEMR" },
        { text: "Behavioral Health EHR Services", href: "/services/healthcare-BPO-Service/EMRServices/BehavioralHealthEHR" },
        { text: "EMR Data Migration Services", href: "/services/healthcare-BPO-Service/EMRServices/EMRDataMigration" },
        { text: "Urgent Care EHR Services", href: "/services/healthcare-BPO-Service/EMRServices/UrgentCareEHR" },
        { text: "Vascular Surgery EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/VascularSurgeryEMR" },
        { text: "EMR Data Entry Services", href: "/services/healthcare-BPO-Service/EMRServices/EMRDataEntry" },
        { text: "General Surgery EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/GeneralSurgeryEMR" },
        { text: "Gastroenterology EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/GastroenterologyEMR" },
        { text: "Neurology EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/NeurologyEMR" },
        { text: "Hand Surgery EMR Services", href: "/services/healthcare-BPO-Service/EMRServices/HandSurgeryEMR" },
        
      ],
    },
  },
  {
    title: "Claims Adjudication",
    href: "/services/healthcare-BPO-Service/ClaimsAdjudication",
    dropdown: {
      subheading: "Claims Services",
      subheadingHref: "/services/healthcare-BPO-Service/ClaimsAdjudication",
      links: [
        { text: "Remittance Processing Services", href: "/services/healthcare-BPO-Service/ClaimsAdjudication/RemittanceProcessing" },
        { text: "Dental Claims Adjudication Services", href: "/services/healthcare-BPO-Service/ClaimsAdjudication/DentalClaimsAdjudication" },
      ],
    },
  },
  {
    title: "Medical Animation",
    href: "/services/healthcare-BPO-Service/MedicalAnimationServices",
    dropdown: {
      subheading: "Animation Services",
      subheadingHref: "/services/healthcare-BPO-Service/MedicalAnimationServices",
      links: [
        { text: "2D Medical Animation Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalAnimation2D" },
        { text: "3D Medical Illustration Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalIllustration3D" },
        { text: "Molecular Animation Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/MolecularAnimation" },
        { text: "3D Medical Animation Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/Medical3DAnimation" },
        { text: "Biomedical Illustration Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/BiomedicalIllustration" },
        { text: "Pharmaceutical Animation Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/PharmaceuticalAnimation" },
        { text: "Surgery Animation Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/SurgicalAnimationServices" },
        { text: "Anatomy Illustration Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/AnatomyIllustrationServices" },
        { text: "Orthopedic Animation Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/OrthopedicAnimationServices" },
        { text: "Scientific Animation Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/ScientificAnimationServices" },
        { text: "Medical Device Animation Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalDeviceAnimationServices" },
        { text: "Medical Device Prototyping Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalDevicePrototypingServices" },
        { text: "Medical Device Prototyping Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalIllustration" },
        { text: "Spine Animation Services", href: "/services/healthcare-BPO-Service/MedicalAnimationServices/SpineAnimation" },
      ],
    },
  },
  {
    title: "Pharmacy Business",
    href: "/services/healthcare-BPO-Service/PharmacyBusinessServices",
    dropdown: {
      subheading: "Pharmacy Solutions",
      subheadingHref: "/services/healthcare-BPO-Service/PharmacyBusinessServices",
      links: [
        { text: "GxP Compliance Services", href: "/services/healthcare-BPO-Service/PharmacyBusinessServices/GxPComplianceServices" },
        { text: "Pharmacy Billing Services", href: "/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacyBillingServices" },
        { text: "Pharmacovigilance Services", href: "/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacovigilanceServices" },
        { text: "Pharmacy Management Service", href: "/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacyManagementServices" },
        { text: "Pharmacy Document Management Services", href: "/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacyDocumentManagementServices" },
        { text: "Physician Referral Services", href: "/services/healthcare-BPO-Service/PharmacyBusinessServices/PhysicianReferralServices" },
        { text: "Mail Order Pharmacy Services", href: "/services/healthcare-BPO-Service/PharmacyBusinessServices/MailOrderPharmacyServices" },
        { text: "Medication Therapy Management Services", href: "/services/healthcare-BPO-Service/PharmacyBusinessServices/MedicationTherapyManagementServices" },
      ],
    },
  },
  {
    title: "Healthcare Management",
    href: "/services/healthcare-BPO-Service/HealthcareManagementServices",
    dropdown: {
      subheading: "Management Services",
      subheadingHref: "/services/healthcare-BPO-Service/HealthcareManagementServices",
      links: [
        { text: "Healthcare Back-office Support Services for Urgent Care Centers Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/UrgentCareBackofficeSupport" },
        { text: "Clinical Documentation Improvement Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalDocumentationImprovement" },
        { text: "Decentralized Clinical Trials Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/DecentralizedClinicalTrials" },
        { text: "Healthcare Back-office Support Services for Hospitals", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HospitalBackofficeSupport" },
        { text: "Patient Engagement Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/PatientEngagementServices" },
        { text: "Telehealth Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/OnlineTelehealthServices" },
        { text: "Healthcare Consulting Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareConsultingServices" },
        { text: "Medical Practice Transformation Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalPracticeTransformationServices" },
        { text: "Patient Adherence Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/PatientAdherenceServices" },
        { text: "Healthcare Documentation Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareDocumentationServices" },
        { text: "HEDIS Measurement Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HedisMeasurementServices" },
        { text: "Medical Review Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalRecordReviewServices" },
        { text: "Chart Documentation Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/ChartDocumentationServices" },
        { text: "Healthcare Surveys Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareSurveysServices" },
        { text: "Telemedicine Appointment Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/TelemedicineAppointmentServices" },
        { text: "Health Information Management Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HealthInformationManagementServices" },
        { text: "Patient Satisfaction Survey Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/PatientSatisfactionSurveyServices" },
        { text: "Healthcare Data Management Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareDataManagement" },
        { text: "Pharmaceutical Outsourcing Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/PharmaceuticalOutsourcing" },
        { text: "Clinical Documentation Integrity Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalDocumentationIntegrity" },
        { text: "Prior Authorization Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/PriorAuthorization" },
        { text: "Clinical Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalServices" },
        { text: "Remote Patient Monitoring Solutions", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/RemotePatientMonitoring" },
        { text: "Preventive Healthcare Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/PreventiveCarez" },
        { text: "Healthcare Analytics Service ", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareAnalytics" },
        { text: "Telemedicine Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/TelemedicineServices" },
        { text: "Healthcare Interoperability Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareInteroperability" },
        { text: "Healthcare Call Center Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareCallCenterServices" },
        { text: "Clinical Decision Support Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalDecisionSupportServices" },
        { text: "Medical Data Entry Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalDataEntryServices" },
        { text: "Hospital Capacity Management Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HospitalCapacityManagementServices" },
        { text: "Virtual Healthcare BPO Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/VirtualHealthcareBPOServices" },
        { text: "Claims Processing Software Development", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/ClaimsProcessingSoftwareDevelopment" },
        { text: "Clinical Research Organization Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalResearchOrganizationServices" },
        { text: "Healthcare Provider Data Management Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareProviderDataManagementServices" },
        { text: "EDI Integration Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/EDIIntegrationServices" },
        { text: "Risk-based Quality Management Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/RiskBasedQualityManagementServices" },
        { text: "Dental Insurance Verification Solutions", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/DentalInsuranceVerificationServices" },
        { text: "Health Information Technology Service", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/HealthInformationTechnology" },
        { text: "Patient Onboarding Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/PatientOnboardingServices" },
        { text: "Medical Insurance Claims Processing Services ", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalInsuranceClaimsProcessing" },
        { text: "Medical Billing Software Support", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalBillingSoftwareSupport" },
        { text: "Medical Peer Review Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalPeerReviewServices" },
        { text: "EOB Processing Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/EOBProcessingServices" },
        { text: "Population Health Analytics Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/PopulationHealthAnalytics" },
        { text: "Nurse Triage Specializations", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/NurseTriageServices" },
        { text: "Healthcare Utilization Management", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/UtilizationManagement" },
        { text: "Patient Interaction Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/PatientInteractionServices" },
        { text: "Clinical Trial Regulatory Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalTrialRegulatory" },
        { text: "Practice Management Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/PracticeManagementServices" },
        { text: "Care Management Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/CareManagementServices" },
        { text: "Digital Health Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/DigitalHealthServices" },
        { text: "Statistical Programming Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/StatisticalProgrammingServices" },
        { text: "Care Coordination Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/CareCoordinationServices" },
        { text: "Medical Presentation Services", href: "/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalPresentationServices" },
      ],
    },
  },
];

const HealthcareHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-20 px-4 md:px-6 py-4">
      <div className="flex justify-between md:justify-start items-center max-w-7xl mx-auto">
        {/* Mobile hamburger menu */}
        <div className="relative md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-1">
              {megaMenuData.map((item, index) => (
                <a
                  key={index}
                  href={item.href || "#"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Navigation with Mega Menu */}
        <ul className="hidden md:flex space-x-4">
          {megaMenuData.map((item, index) => {
            const isLast = index === megaMenuData.length - 1;

            return (
              <li
                key={index}
                className="relative group px-1 py-1 -ml-10 cursor-pointer hover:text-[#006A7C] transition-colors duration-200"              >
                <a href={item.href} className="font-medium text-black text-sm whitespace-nowrap">
                  {item.title}
                </a>

                {item.dropdown && (
                  <div
                    className={`absolute top-full mt-4 min-w-[22rem] max-w-[40rem] bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    ${isLast ? "right-0" : index === 0 ? "left-2" : "left-1/3 -translate-x-1/3"}`}
                  >
                    {/* Subheading */}
                    <div className="px-6 py-3 border-b border-gray-100">
                      <h4 className="font-bold text-[#006A7C] text-lg">
                        <a href={item.dropdown.subheadingHref}>
                          {item.dropdown.subheading}
                        </a>
                      </h4>
                    </div>

                    {/* Scrollable Links */}
                    <div className="max-h-[400px] overflow-y-auto p-6">
                      <ul className="grid grid-cols-2 gap-3">
                        {item.dropdown.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.href}
                              className="block text-sm text-gray-800 px-2 py-1 rounded-md hover:bg-[#006A7C] hover:text-white transition"
                            >
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default HealthcareHeader;
