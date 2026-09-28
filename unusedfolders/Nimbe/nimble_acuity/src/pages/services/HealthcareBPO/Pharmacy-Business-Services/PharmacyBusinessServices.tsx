import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PharmacyBusinessServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pharmacy Business Services
            </h2>
            <p className="text-lg text-gray-600">
              Delegate cumbersome pharmacy operations, improve patient medication adherence, and minimize churn with our world-class pharmacy business services from <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              One of the challenges that globalization poses for pharmacy businesses is striking a balance between patient care and business management. This is where involving experts through pharmacy business outsourcing can help you have an edge in the industry without deviating from your main focus - patient care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We offer outcome-based pharmacy business solutions to take care of all your critical needs and go beyond pharmaceutical process management. With over 26+ years of experience and in-depth subject matter expertise, we leverage our team of licensed professionals to offer you all-inclusive pharmacy business support.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pharmacy Business Solutions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Pharmacovigilance Services:</strong> Carefully assess the benefits and risks associated with drugs, ensuring regulatory compliance and accelerating the drug discovery process.</li>
              <li><strong>Pharmacy Management Services:</strong> Maximize your bottom-line by gaining a comprehensive understanding of your end-to-end pharmacy business processes.</li>
              <li><strong>GxP Compliance Services:</strong> We help you comply with all “good practice” guidelines and regulations, following the best measures as an experienced pharmacy business outsourcing company.</li>
              <li><strong>Medication Therapy Management Services:</strong> Ensure top-notch MTM practices for the best therapeutic outcomes for your patients.</li>
              <li><strong>Mail Order Pharmacy Services:</strong> Efficiently automate tasks associated with mail order pharmacy to ensure quick and easy deliveries.</li>
              <li><strong>Pharmacy Billing Services:</strong> Ensure your billing requirements are well taken care of, from patient verifications to payment posting.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Pharmacy Business Support?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Experienced Professionals:</strong> Our team of handpicked experts provides professional pharmacy business support.</li>
              <li><strong>ISO-Certified Company:</strong> We are an ISO-certified service provider, ensuring we follow the best practices and methodologies.</li>
              <li><strong>Complete Transparency:</strong> We maintain complete transparency regarding our process, strategy, and pricing models with no hidden costs.</li>
              <li><strong>24/7 Support:</strong> Our customer support team is available around the clock to help you with any queries.</li>
              <li><strong>Cost-Effective Services:</strong> Our pricing is tailored to businesses with varying budgets, ensuring quality services are not a constraint.</li>
            </ul>
          </div>
          
          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Medical Billing Services:</strong> Effectively manage your billing needs while saving costs.</li>
              <li><strong>Medical Coding Services:</strong> Perform specialized medical and healthcare coding for your inpatient and outpatient facilities.</li>
              <li><strong>Medical Transcription Services:</strong> Accurate, consistent, and compliant medical transcription services.</li>
              <li><strong>Healthcare Revenue Cycle Management:</strong> Streamline your administrative operations for improved financial viability.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Accounts Receivable Management & Medical Billing:</strong> A leading client received accounts receivable management services within a quick time.</li>
              <li><strong>Patient Demographics and Charge Entry:</strong> We provided accurate and error-free patient demographics entry services to a leading medical billing company.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "We provide a reliable and efficient medical billing service. You have helped improve collections and lower receivables for my clients."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Founder & CEO, Billing Company in the east coast
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Pharmacy Business Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              As you outsource pharmacy business services to the experts in the industry, you can dedicate your 100% focus to what’s more important. Being a professional company with over 26+ years of experience, partnering with us will enhance how your business operates.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us now for professional-grade solutions that add value to your business.
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

export default PharmacyBusinessServices;