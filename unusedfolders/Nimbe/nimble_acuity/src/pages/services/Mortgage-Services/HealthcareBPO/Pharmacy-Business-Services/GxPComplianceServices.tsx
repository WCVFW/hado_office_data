import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const GxPComplianceServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              GxP Compliance Services
            </h2>
            <p className="text-lg text-gray-600">
              Comply with standard pharmaceutical industry rules and regulations by choosing our team's compliance services at competitive prices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              GxP compliance services in pharmacy help ensure companies meet industry regulations and produce safe products that meet all quality standards throughout the production process. The challenge, however, lies in interpreting and implementing these regulations correctly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> has over 2 decades of experience in providing pharma companies with high standards of GxP services. We have a team of experts with in-depth knowledge and experience in assisting numerous pharma companies to implement and follow the right GxP standards.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              GxP Compliance Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Strategic Advisory:</strong> Comprehensive consulting for gap analysis, process flow evaluation, and regulatory strategies.</li>
              <li><strong>Auditing:</strong> Cost-effective audit services with comprehensive reports, dedicated account managers, and support in multiple languages.</li>
              <li><strong>Data Integrity:</strong> Services including subject matter training, fraud investigations, and internal evaluations to ensure the accuracy and security of your data.</li>
              <li><strong>Inspection Support:</strong> We partner with businesses to conduct mock inspections, supplier audits, and gap assessments to align with new and evolving regulations.</li>
              <li><strong>Documentation Support:</strong> Our specialists have vast expertise in developing validation protocols, SOPs, and technical reports to ensure a quality system is in place.</li>
            </ul>
          </div>
          
          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Pharmacy Management Services:</strong> Get assistance with the day-to-day management of your pharmacy business.</li>
              <li><strong>Pharmacy Billing Services:</strong> Ensure accurate and timely pharmacy billing and claims processing.</li>
              <li><strong>Mail Order Pharmacy Services:</strong> Streamline your mail order operations for efficiency and speed.</li>
              <li><strong>Pharmacy Document Management Services:</strong> Securely manage all your pharmacy-related documents.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing GxP Compliance to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost Savings:</strong> Significant cost reduction compared to hiring in-house GxP auditors.</li>
              <li><strong>Minimize Staff Involvement:</strong> Reduce the need for full-time staff to handle audit functions.</li>
              <li><strong>Access to Skilled Auditors:</strong> Easy access to a large pool of experienced auditors with deep industry exposure.</li>
              <li><strong>In-depth Expertise:</strong> Our experts provide additional expertise and mentorship to support your internal teams.</li>
              <li><strong>Geographic Flexibility:</strong> We have auditors from several geographic locations, maximizing efficiency and reducing costs.</li>
              <li><strong>Quality and Standard Audits:</strong> Our well-developed and exhaustive audit processes are based on proven practices.</li>
            </ul>
          </div>
          
          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Charge and Demographics Entry:</strong> We provided reliable and cost-effective demographics entry services for a leading ambulance billing company.</li>
              <li><strong>Research and DME Billing Services:</strong> We delivered cost-effective DME billing services to a Tustin-based client.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "The verifications are going well. Anytime there is an issue or something additional we need, it gets addressed and usually gets corrected quickly. We appreciate your follow-up. Thank you so much."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Leading Doctor, Kids Dental Clinic, Tampa, FL
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource GxP Compliance Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> has over 26+ years of experience in compliance services. We are driven by experts with in-depth knowledge and expertise in all GxP areas you may need to comply with regulatory requirements.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If your business is looking for comprehensive, end-to-end GxP compliance services, get in touch with our experts now.
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

export default GxPComplianceServices;