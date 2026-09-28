import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HealthcareManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Create a sustainable foundation for healthcare by eliminating costs, adopting new ways of care delivery, and improving overall quality. <strong>Nimble Acuity</strong>'s healthcare BPO services address the latest industry trends while providing a holistic approach to outsourcing.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We have over 26+ years of experience in providing end-to-end, customized business process management solutions and revenue cycle management solutions to healthcare payers. Our superior solutions offer your company an unmatched focus on quality of care delivery, productivity, and customer experience.
            </p>
          </div>

          {/* Healthcare BPO Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Healthcare BPO Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Healthcare Consulting:</strong> We help you maximize operational efficiency and reduce costs, from setting up health information management systems to back-office consulting.</li>
              <li><strong>Pharmaceutical Outsourcing:</strong> We provide services such as pharmaceutical development, manufacturing, and packaging to help you navigate frequent regulatory changes and rising costs.</li>
              <li><strong>Medical Animation:</strong> Our high-quality, accurate medical animations help you explain complex medical cases and minimize expenses without compromising on quality.</li>
              <li><strong>Clinical Services:</strong> We provide high-quality clinical services, including 3D reconstruction, teleradiology, and medical management services, to increase your work efficiency.</li>
              <li><strong>Telemedicine Services:</strong> We help you connect and consult with certified specialists and care providers at nominal rates, bridging the gap between patients and doctors.</li>
              <li><strong>Remote Patient Monitoring Services:</strong> Let us take over patient monitoring tasks, capturing accurate real-time data and issuing alerts for potential risks to hospitals or physicians.</li>
              <li><strong>Population Health Analytics Services:</strong> We use deep-dive analytics to help you gather demographic health information, enabling informed decision-making and improved healthcare product development.</li>
              <li><strong>Clinical Documentation Improvement Services:</strong> We improve the accuracy of your clinical records in real-time, leading to quick resolution, better accuracy, and comprehensive reimbursement.</li>
              <li><strong>Patient Satisfaction Survey Services:</strong> We provide comprehensive, customized patient satisfaction surveys to help you analyze patients' viewpoints and address potential service failings promptly.</li>
              <li><strong>Clinical Decision Support Services:</strong> We analyze data and manage the administration of doses, keeping you updated on the latest regulations to help you provide the best care.</li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Specialized Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Chart Documentation Services</li>
              <li>Healthcare Documentation Services</li>
              <li>Healthcare Back-office Support for Urgent Care Centers & Hospitals</li>
              <li>Medical Call Center Services</li>
              <li>Healthcare Analytics</li>
              <li>Medical Billing Software Support</li>
              <li>Patient Engagement Services</li>
              <li>Clinical Documentation Integrity Services</li>
              <li>Telehealth Services</li>
              <li>Medical Record Review Services</li>
              <li>Prior Authorization Services</li>
              <li>And many more...</li>
            </ul>
          </div>

          {/* Pharmacy Business Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Pharmacy Business Services
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Nimble Acuity</strong> offers value-driven pharmacy business services that cater to all pharmaceutical and medicine process management requirements.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Pharmacy Management Services:</strong> We offer timely pharmacy management and prescription processing services, including refill order entry, new facility entry, and refill request management.</li>
              <li><strong>Mail Order Pharmacy Services:</strong> Our integrated and well-planned processes leverage technology to ensure process efficiency and faster delivery for enhanced patient satisfaction.</li>
              <li><strong>Pharmacy Billing Services:</strong> We provide highly reliable and customized billing services for pharmaceutical firms, taking care of the entire billing cycle from start to finish.</li>
              <li><strong>Pharmacy Document Management Services:</strong> Our online document management solutions are reputed for data integrity, accuracy, and confidentiality, helping you move towards a paperless pharmacy.</li>
              <li><strong>Healthcare Analytics:</strong> Our analytics services help you solve challenges from disconnected systems and fragmented data, enabling informed decision-making and high-quality patient care.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Healthcare BPO Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Highly Skilled Team:</strong> Our team includes experienced healthcare professionals and licensed pharmacists, all well-versed in HIPAA compliance.</li>
              <li><strong>Subject Matter Specialists:</strong> Our specialists are trained to work on pharmacy information systems (PIS) with expertise in various tools and formats.</li>
              <li><strong>Global Delivery Model:</strong> Our Centers of Excellence in India and the US operate 24/7, offering great operational reliability.</li>
              <li><strong>Vast Expertise:</strong> We have over 26+ years of experience serving healthcare clients globally.</li>
              <li><strong>Quick Turnaround Time:</strong> We offer high-quality services with a quick turnaround time at highly competitive prices.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare BPO Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With the skill, expertise, and familiarity with international norms, <strong>Nimble Acuity</strong> can offer quality solutions for your healthcare needs. As a leading healthcare BPO provider, we can provide high-quality services at cost-effective rates while ensuring significant operational benefits for your business.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Outsource healthcare BPO to us and give your organization a competitive advantage!
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

export default HealthcareManagementServices;
