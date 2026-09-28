import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PriorAuthorization: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Robust Prior Authorization Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your prior authorization process with our integrated solutions. Enjoy shorter processing times, higher approval rates, and fewer claim denials.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We understand the operational intricacies of managing prior authorizations in healthcare. Our services are designed to streamline this crucial process, reducing administrative overhead and expediting patient access to necessary care. We offer system-integrated solutions that not only harmonize with your existing infrastructure but also enhance its efficiency. With <strong>nimble acuity</strong>, you gain the advantage of shorter processing times, higher approval rates, and a significant decrease in claim denials.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our advanced offerings, such as real-time status tracking, predictive analytics, and rule-based decision-making capabilities, provide a competitive edge. These tools equip you with data-driven insights for informed decision-making and proactive management of authorizations. We work alongside you as a strategic partner dedicated to operational excellence and patient satisfaction. Our commitment to HIPAA-compliant data security, waste reduction, and process optimization places us at the forefront of prior authorization services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Prior Authorization Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Pre-authorization Approval:</strong> We leverage advanced software to expedite the pre-authorization approval process, improving claim acceptance rates.</li>
              <li><strong>Verification of Medical Necessity:</strong> Our team of clinical experts ensures accurate justification of treatments, reducing denials and improving reimbursement rates.</li>
              <li><strong>Insurance Coverage Checking:</strong> We use automated tools to quickly and accurately confirm patients' coverage details, reducing administrative burden.</li>
              <li><strong>Patient Eligibility Verification:</strong> Our automated process ensures quick and accurate results, improving efficiency and patient satisfaction.</li>
              <li><strong>Formulary Exceptions:</strong> Our team ensures patients receive necessary medications by managing formulary exceptions.</li>
              <li><strong>Appeals and Follow-ups:</strong> Our expert negotiators effectively manage denied claims, improving your reimbursement rates.</li>
              <li><strong>Documentation and Reporting:</strong> Our software maintains a comprehensive and accessible record of all transactions, ensuring compliance.</li>
              <li><strong>ICD-10 Coding:</strong> Our expert coders ensure accurate ICD-10 coding, improving claim acceptance rates.</li>
              <li><strong>Tracking Services:</strong> Our real-time tracking provides transparency and identifies bottlenecks, improving efficiency.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Prior Authorization?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Streamlined Workflow:</strong> We improve operational efficiency by reducing administrative burden and allowing your team to focus on core healthcare services.</li>
              <li><strong>Reduced Claim Denials:</strong> By ensuring accurate and timely authorizations, we significantly reduce claim denials, leading to a smoother billing process.</li>
              <li><strong>Advanced Technology:</strong> We leverage cutting-edge AI technology to automate repetitive tasks, increasing speed and accuracy.</li>
              <li><strong>24/7 Support:</strong> Our team provides round-the-clock support, ensuring prompt responses to authorization requests and reduced treatment delays.</li>
              <li><strong>Experienced Team:</strong> Our team of experts with deep industry knowledge handles the complex process of prior authorizations efficiently and correctly.</li>
              <li><strong>Compliance Assurance:</strong> We stay abreast of ever-changing healthcare regulations and insurance policies to ensure your institution remains compliant.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Demographics Entry:</strong> We helped a Georgia-based medical billing company resolve quality issues by processing 1,200 claims a month with 98% accuracy, rapidly clearing their backlog.</li>
              <li><strong>Medical Claims Processing:</strong> A Houston-based medical billing company resolved issues of employee turnover and cash flow delays by outsourcing to us, saving 45% in operational costs and improving claim processing efficiency.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I want to thank you for the professional way in which you are managing the project and meeting our deadlines."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — CEO, Medical Company, UK
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Prior Authorization Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Our services are meticulously designed to improve efficiency, reduce administrative burden, and enhance your revenue cycle management. We use advanced AI technology to automate the prior authorization process, seamlessly integrating with your existing system.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to enhance your revenue cycle management? Let us help you navigate the complexities of healthcare administration so you can focus on what you do best: providing exceptional patient care.
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

export default PriorAuthorization;