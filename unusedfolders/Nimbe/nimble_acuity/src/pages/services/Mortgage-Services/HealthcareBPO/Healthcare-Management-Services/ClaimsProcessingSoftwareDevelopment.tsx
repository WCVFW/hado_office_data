import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const ClaimsProcessingSoftwareDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Claims Processing Software Development
            </h2>
            <p className="text-lg text-gray-600">
              Our claims processing software services have enabled our healthcare customers to improve their customer services, streamline their business processes, and increase their return on investment.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Outsource medical claims processing software services to **nimble acuity** and benefit from expert services at a cost-effective price. **nimble acuity**, a leading provider in outsourcing, has been providing professional, cost-effective, and high-quality claims processing software development services to a large number of global customers. Our claims processing software solutions have benefited many healthcare organizations.
            </p>
          </div>

          {/* Why Outsource to Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Claims Processing Software to nimble acuity?
            </h3>
            <p className="text-gray-700 mb-6">
              At **nimble acuity**, we provide claims processing solutions that effectively meet the requirements of our healthcare customers. We can competently develop a solution that is best suited for your needs and ensure the software application is scalable to your business size. We use Java and J2EE technologies to offer greater flexibility and scalability in an open-structure environment.
            </p>
            <p className="text-gray-700 mb-6">
              Outsourcing to us can help you benefit from a reduced total cost of ownership and improved customer service. It can also help you administer new market demands, integrate distinct processes into one solution, and maintain HIPAA compliance.
            </p>
            <p className="text-gray-700 mb-6">
              Our high-quality services, collaboration, quick turnaround time, innovation, and customer support have set us apart. We have been a pioneer in using relational database technology based on ANSI X12 standards and continue to deliver high-quality claims processing software solutions using high-end J2EE applications.
            </p>
          </div>

          {/* Our Claims Processing Software */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              nimble acuity's Claims Processing Software
            </h3>
            <p className="text-gray-700 mb-6">
              We ensure the medical claims processing software we develop is an easy-to-use and integrated system, specialized to suit the unique needs of every practice. Our software produces HIPAA-compliant medical claims and transmits them electronically.
            </p>
            <p className="text-gray-700 mb-6">
              Our software contains seamless accounts receivable, EMR software, and claim validation for different medical specialties, such as mental health clinics, behavioral health, drug, and alcohol programs. You can efficiently generate dental, medical, and institutional claims and directly post electronic remittance advice.
            </p>
            <p className="text-gray-700 mb-6">
              The claims processing software we develop complies with the American National Standards Institute (ANSI) and the Accredited Standards Committee (ASC), including ANSI 837 Dental, ANSI 837 Institutional, ANSI 837 Professional, and ANSI 835 Remittance.
            </p>
            <p className="text-gray-700 mb-6">
              Other features include a wide range of pre-configured reports and the ability to create your own custom-built software. We also offer software updates, technical support, and training on new features.
            </p>
          </div>

          {/* Benefits of Outsourcing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing Claims Processing Software Services to nimble acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Cost-effective and professional services.</li>
              <li>Skilled, experienced, and highly qualified team of software professionals.</li>
              <li>HIPAA compliant processes.</li>
              <li>Stringent quality control processes.</li>
              <li>Quick turnaround time.</li>
              <li>24/7 customer support.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with nimble acuity for Claims Processing Software
            </h3>
            <p className="text-gray-700 mb-6">
              Outsource medical claims processing software services to **nimble acuity** and streamline your business processes. Our expert team ensures HIPAA compliance, reduced total cost of ownership, and improved customer service.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us today to discuss your claims processing needs.
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

export default ClaimsProcessingSoftwareDevelopment;