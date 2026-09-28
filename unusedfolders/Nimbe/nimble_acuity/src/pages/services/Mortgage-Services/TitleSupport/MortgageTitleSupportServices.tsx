import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const MortgageTitleSupportServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Title Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Maximize efficiency with our expert-level document recording, gap coverage solutions, and precise mortgagee clause preparation.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Ensuring the accuracy and integrity of property titles is a critical yet challenging aspect of real estate transactions. Nimble Acuity’s mortgage title support services utilize advanced title search algorithms and a comprehensive database of historical records to identify potential discrepancies early, minimizing unexpected complications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide digital document management systems for secure and efficient processing and offer tailored title insurance solutions for robust claim protection. Our team places a strong emphasis on efficient communication with all parties involved in the transaction, ensuring a smooth procedure. By emphasizing accuracy and effectiveness, we reduce risks and quicken the mortgage process.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Mortgage Title Support Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer a full suite of services to streamline your property transactions and ensure their integrity:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Mortgage Title Ordering:</strong> We initiate detailed and thorough title searches, collect essential property data, and coordinate effectively with title vendors.
              </li>
              <li>
                <strong>Mortgage Title Commitment:</strong> Our team prepares and issues preliminary title reports, addresses and resolves any title exceptions, and collaborates with underwriters for commitment clarity.
              </li>
              <li>
                <strong>Mortgage Title Examination:</strong> We analyze the historical chain of property ownership, identify any encumbrances, liens, or easements, and verify the accuracy of legal property descriptions.
              </li>
              <li>
                <strong>Mortgage Title Insurance:</strong> We issue comprehensive lender and owner policies, assess risks, determine coverage needs, and handle claims and title disputes promptly.
              </li>
              <li>
                <strong>Title Support for Companies:</strong> We conduct comprehensive corporate entity verification, retrieve critical documents like deeds and liens, and efficiently execute and manage UCC filings.
              </li>
              <li>
                <strong>Title Support for Lenders:</strong> Our experts ensure correct lender lien priority, accurately calculate and verify lien payoffs, and clear encumbrances to secure the lending position.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Mortgage Title Services?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We optimize your mortgage procedures using the latest technologies and our in-depth knowledge, guaranteeing precision, effectiveness, and security at every stage.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Advanced Technology Integration:</strong> Our advanced solutions automate data management and title searches to significantly cut down on processing times and human error.
              </li>
              <li>
                <strong>Expert Team and Technical Proficiency:</strong> Our experienced title professionals have industry-specific expertise and diligent attention to detail, staying ahead of industry developments through continuous training.
              </li>
              <li>
                <strong>Enhanced Security Protocols:</strong> We value your data's confidentiality and integrity through advanced encryption and multi-layer security controls, ensuring compliance with all regulations.
              </li>
              <li>
                <strong>Seamless Integration and Customization:</strong> Our services improve operational efficiency by seamlessly integrating with your current systems, offering solutions customized to your specific requirements.
              </li>
              <li>
                <strong>Proven Track Record:</strong> Our reputation is built on a solid track record of successful collaborations and satisfied clients, providing excellence, dependability, and trust.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Flawless Property Transactions
            </h3>
            <p className="text-gray-700 mb-6">
              Our team provides expert title reviews, escrow coordination, and issue resolution to ensure flawless property transactions. We help you benefit from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Increased efficiency and reduced processing times</li>
              <li>Greater accuracy and minimized risk</li>
              <li>Enhanced security for all sensitive data</li>
              <li>Dedicated support tailored to your needs</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Experience the difference that precision and expertise can make. Contact us today to optimize your mortgage process.
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

export default MortgageTitleSupportServices;