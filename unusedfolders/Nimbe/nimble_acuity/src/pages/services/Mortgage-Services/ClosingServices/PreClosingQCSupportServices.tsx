import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const PreClosingQCSupportServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pre-Closing QC Audit Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to complete and reliable back-office support to assist you with your pre-closing QC audit process at highly cost-effective rates.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling with a lack of adequate back-office support for your pre-closing QC audit process? Are you interested in partnering with an experienced and reliable company that can help you with mortgage pre-fund QC audit services? If so, then outsourcing pre-closing QC audit services to an established partner can be a game-changer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of mortgage pre-closing support services. We have decades of experience in helping mortgage firms identify and uncover discrepancies in loan documentation so that all documents meet GSE regulatory requirements. With a robust infrastructure and access to experienced mortgage resources, we ensure that all underlying issues in loan transactions are identified and resolved promptly.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mortgage Pre-Closing Support Services We Offer
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nimble Acuity offers a comprehensive range of services, including:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Assessing Income and Liabilities:</strong> With our back-office support, we meticulously verify all documents submitted by borrowers, such as pay stubs, bank statements, and W-2 forms. We provide you with in-depth reports that give you a comprehensive understanding of all your customers' liabilities.
              </li>
              <li>
                <strong>Reviewing Loan Applications:</strong> We have significant expertise in performing detailed reviews of all information provided in loan application documents. We verify details like name, employment status, employment history, and past mortgage details. All inconsistencies are flagged and brought to your notice.
              </li>
              <li>
                <strong>Quality Review of the Underwriting Process:</strong> Our pre-closing QC audit services also include detailed assessments of the risk associated with every customer's file. Our highly experienced agents pay close attention to ensure the entire process is as meticulous and precise as possible.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Our Pre-Closing QC Audit Company?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Some major benefits of working with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Affordable Pricing Options:</strong> Our solutions are priced extremely affordably. With both hourly and FTE (full-time equivalent) pricing options, you receive world-class services at unbeatable prices.
              </li>
              <li>
                <strong>High-Quality Services:</strong> We are an ISO-certified firm and leave nothing to chance in our quest for excellence in every project we undertake.
              </li>
              <li>
                <strong>Tools and Technologies:</strong> Our team is highly trained and uses the latest tools, techniques, and workflows to provide the most effective services.
              </li>
              <li>
                <strong>Superb Infrastructure:</strong> We provide our mortgage experts with world-class offices that enable them to maximize their productivity.
              </li>
              <li>
                <strong>Short Turnaround:</strong> Our experts will always provide their services quickly since we are highly stringent about timelines.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Mortgage Support Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of mortgage back-office support services. We have a team of highly experienced, qualified, and certified professionals ready to tackle any mortgage back-office challenge with the utmost professionalism and sincerity. Our team leverages the best and latest tools and technologies to deliver top-notch services at cost-effective prices.
            </p>
            <p className="text-gray-700 mb-6">
              If you are looking for a cost-effective and professional mortgage support service provider, get in touch with us today!
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

export default PreClosingQCSupportServices;