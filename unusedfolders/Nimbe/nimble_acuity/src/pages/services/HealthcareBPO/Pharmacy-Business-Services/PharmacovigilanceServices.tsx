import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PharmacovigilanceServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pharmacovigilance Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your drug safety efforts with our expert pharmacovigilance services. Partner with <strong>Nimble Acuity</strong> to ensure compliance and operational efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The responsibilities of staying compliant with GVP, managing Individual Case Safety Reports (ICSRs), and preparing for inspections can stretch your resources thin. Leveraging the expertise of a professional service provider like us makes a difference. When you outsource pharmacovigilance services, you can stay on top of drug safety and efficacy monitoring without worrying about operational complexities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of physicians, medics, and medical writers is proficient in managing diverse product portfolios spanning pharma, vaccines, cosmetics, medical devices, and combination products. Our flexible solutions range from assisting individual activities to setting up and managing a global pharmacovigilance system.
            </p>
          </div>
          
          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Custom Pharmacovigilance Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Individual Case Safety Reports (ICSRs):</strong> We handle adverse reaction reporting, drug-related problem management, and regulatory filing compliance.</li>
              <li><strong>Literature Monitoring:</strong> Identify adverse reactions by scanning medical literature and clinical publications for product safety assessments.</li>
              <li><strong>Aggregate Reporting:</strong> We provide detailed safety reports to evaluate the risks and benefits of drugs and support regulatory submissions.</li>
              <li><strong>Signal Detection and Management:</strong> We identify safety signals from various data sources and develop strategies to mitigate potential safety issues.</li>
              <li><strong>Risk Management Plan (RMP):</strong> We create RMPs to minimize drug risks through communication and mitigation strategies.</li>
              <li><strong>Pharmacovigilance Audit and Training:</strong> Our team conducts safety audits, provides compliance training, and implements corrective actions.</li>
              <li><strong>Safety Database Solutions:</strong> We build safety databases, conduct data analysis, and maintain data integrity.</li>
              <li><strong>Medical Device Vigilance:</strong> We monitor device safety, report adverse events, and manage risk assessments.</li>
              <li><strong>Regulatory Intelligence and Consulting:</strong> We gather regulatory insights and ensure compliance management.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Steps We Follow for Pharmacovigilance
            </h3>
            <p className="text-gray-700 mb-4">
              We implement a systematic approach to collect and evaluate information from healthcare providers and patients.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Data Collection:</strong> We gather all relevant safety information from sources like clinical trials and healthcare providers.</li>
              <li><strong>Case Processing:</strong> Each case is processed and assessed with thorough data entry, medical reviews, and quality checks.</li>
              <li><strong>Signal Detection and Risk Management:</strong> We use advanced analytics to identify potential safety signals and implement appropriate risk management strategies.</li>
              <li><strong>Report Generation and Submission:</strong> We generate comprehensive periodic safety reports and submit them to regulatory authorities, adhering to international guidelines.</li>
            </ol>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Pharmacovigilance?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>HIPAA Compliance:</strong> Our services are HIPAA-compliant, ensuring patient data privacy and confidentiality.</li>
              <li><strong>Access to Expertise in Drug Safety:</strong> We help you maintain the highest standards of drug safety to ensure stakeholder trust.</li>
              <li><strong>Mitigating Risks in Drug Safety:</strong> Our team helps identify and manage potential risks to protect patient and company interests.</li>
              <li><strong>24/7 Drug Reaction Monitoring:</strong> Expert clinicians monitor adverse drug reactions round-the-clock for enhanced patient safety.</li>
              <li><strong>Flexible Pricing:</strong> Our affordable pricing options leverage the latest technology and years of experience.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Medical Billing Services:</strong> Our experts improve accuracy, compliance, and reimbursement rates.</li>
              <li><strong>Revenue Cycle Management Services:</strong> We streamline billing processes to maximize revenue and drive financial sustainability.</li>
              <li><strong>Healthcare Claims Adjudication Services:</strong> Our meticulous services accelerate claims processing and reduce denials.</li>
              <li><strong>Pharmacy Management Services:</strong> We offer end-to-end services to improve pharmacy operations, safety, and regulatory adherence.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Quick Teleradiology Services:</strong> We delivered fast teleradiology services for a medical imaging firm within the requested turnaround time.</li>
              <li><strong>Insurance Eligibility Services:</strong> We provided consultation for an insurer and their reps, delivering requested insights to their client.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "Hello, I wanted to reach out to you directly and express my gratitude for the hard work that the Data team, as well as the AR team, has done with EJ practice. I have pushed both teams extremely hard over the past month and their efforts, as well as ours, have paid off."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — RCM Account Manager, EMR System Provider, FL, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Strategic Pharmacovigilance for Enhanced Drug Safety
            </h3>
            <p className="text-gray-700 mb-6">
              Our pharmacovigilance solutions provide complete support for your drug safety needs. We specialize in risk management plans and offer comprehensive post-marketing surveillance services to ensure adverse events are promptly detected and addressed.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Choose <strong>Nimble Acuity</strong> as your business partner to transform safety from a regulatory obligation into a strategic asset.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PharmacovigilanceServices;