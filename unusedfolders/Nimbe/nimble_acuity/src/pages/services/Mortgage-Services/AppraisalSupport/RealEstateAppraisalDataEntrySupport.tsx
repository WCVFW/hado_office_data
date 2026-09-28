import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const RealEstateAppraisalDataEntrySupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Real Estate Appraisal Data Entry Support Services
            </h2>
            <p className="text-lg text-gray-600">
              The real estate industry often brings an information overload. Our data entry services can help you organize and leverage information at your fingertips.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Legal paperwork, sales details, property valuations—the list of documents goes on. Managing this information is crucial for efficiency. At **Nimble Acuity**, we are an experienced and reputable provider of various back-office services. We can handle all your data entry-related tasks and document management needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have served many clients globally and are confident that we can meet your needs with the highest levels of satisfaction. By letting us manage your real estate data entry, you can focus on your core business functions.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Real Estate Appraisal Data Entry Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our data entry services for the real estate industry include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                Data entry for consolidating customer details
              </li>
              <li>
                Property documents and legal documents management
              </li>
              <li>
                Creation of new databases
              </li>
              <li>
                Legal documents preparation and filing
              </li>
              <li>
                Data entry of residential and commercial valuation information
              </li>
              <li>
                Data entry of sales history
              </li>
              <li>
                Insurance and tax-related data entry
              </li>
              <li>
                Data entry from hard copies
              </li>
              <li>
                Online and offline data entry
              </li>
              <li>
                Data capture and extraction services
              </li>
              <li>
                Data processing and management services
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The real estate industry demands your full dedication. With your data entry needs taken care of by us, you can concentrate on core functions. Our services ensure that your office runs more efficiently, and you never have to hunt for lost data.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Significant Cost Savings:</strong> Save up to 60% on operational costs.
              </li>
              <li>
                <strong>High Accuracy:</strong> We digitize your information with an accuracy level of more than 98%.
              </li>
              <li>
                <strong>Customized Services:</strong> We understand the unique needs of the real estate industry and can provide customized solutions.
              </li>
              <li>
                <strong>Quick Turnaround:</strong> Our large pool of experienced professionals ensures a quick turnaround for projects.
              </li>
              <li>
                <strong>Quality Assurance:</strong> Quality is assured through our streamlined data entry and quality control processes.
              </li>
              <li>
                <strong>Data Security:</strong> We have stringent information security policies and practices to prevent any loss or leak of information.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Real Estate Data Entry to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              By choosing **Nimble Acuity** as your data entry partner, you not only save on costs but also gain a comprehensive range of benefits that ensure a fruitful outsourcing experience. We can provide you with a **FREE trial offer** for any data entry service you're interested in, allowing you to gauge our expertise firsthand.
            </p>
            <p className="text-gray-700 mb-6">
              Get in touch with us today to enjoy a successful outsourcing experience.
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

export default RealEstateAppraisalDataEntrySupport;