import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const MortgageClosingSupportServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Closing Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Materialize each business opportunity with our mortgage closing services. Ensure same-day closings at cost-effective rates.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Did you know that outsourcing mortgage closing services ensures up to 40% faster closings? The real estate and mortgage market has been through seismic shifts, leading to increased demands, internal efficiency strains, tighter deadlines, and bottlenecks. As your flexible business partner, Nimble Acuity automates your business processes to ensure same-day closings. Our end-to-end support services include ordering title reviews, revisiting loan terms, liaising with agents, and reviewing closed files.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              As an ISO-certified mortgage closing company, we ensure 100% accuracy and absolute data privacy. Outsource mortgage closing services to Nimble Acuity for business scalability, better regulatory compliance, and enhanced revenue generation.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Closing Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Materialize each business opportunity and cater to your clients more effectively with our mortgage closing support services:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Mortgage Closing Support for Lenders:</strong> We collect mortgage closing documents, review documented legal rights of the property, and inquire into liens, taxes, and ongoing lawsuits. We also ensure that the closing disclosure is delivered within three business days.
              </li>
              <li>
                <strong>Mortgage Closing Support for Credit Unions:</strong> Our end-to-end mortgage closing support includes document collection, title reviews, preparation of closing instruction statements, and tax evaluations.
              </li>
              <li>
                <strong>Mortgage Pre-closing Support:</strong> We provide a team of qualified experts to help you with the down payment and closing costs from the bank. We also review the payoff statement and collect initial taxes and fees from the settlement companies.
              </li>
              <li>
                <strong>Mortgage Closing Disclosure Preparation Support:</strong> Our experts help validate data across multiple documents. We review closing conditions and prepare and send closing instructions statements with the closing documents to the settlement agent.
              </li>
              <li>
                <strong>Pre-Closing QC Audit Services:</strong> Our professionals scrutinize every document to ensure proper adherence to all the latest guidelines, limiting risks and liabilities.
              </li>
            </ul>
          </div>

          {/* The Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mortgage Closing Support Process We Follow
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We follow a streamlined and systematic process to provide top-quality support services to our clients. The steps include:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Collecting the required data from the buyer and the lawyer.</li>
              <li>Keeping all the latest documents needed for the closing ready.</li>
              <li>Preparing an assumption agreement and requesting a loan assumption package.</li>
              <li>Obtaining personal contact details of your buyer and the seller.</li>
              <li>Getting the commission split verified by all parties.</li>
              <li>Checking whether the property survey was ordered and completed on time.</li>
              <li>Making sure that all the parties involved are informed about the mortgage closing time and date.</li>
            </ol>
          </div>

          {/* Benefits of Outsourcing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Hire Nimble Acuity as Your Mortgage Closing Services Company?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team of highly qualified mortgage processing professionals can efficiently address any mortgage processing requirements. Other reasons to work with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Streamlined Closing Process:</strong> We follow a systematic process for a mortgage closing.
              </li>
              <li>
                <strong>Experienced Team of Professionals:</strong> We have a highly experienced team of financial and mortgage experts ready to take on any challenge.
              </li>
              <li>
                <strong>Affordable Prices:</strong> We provide quality services at affordable prices, allowing clients to save big and generate better revenues.
              </li>
              <li>
                <strong>Data Security:</strong> We ensure that all your data remains safe and confidential.
              </li>
              <li>
                <strong>Quick Turnaround Time:</strong> Our global delivery centers allow us to provide accurate services within a quick turnaround time.
              </li>
              <li>
                <strong>Use of Latest Technologies:</strong> Our team is trained and proficient in using some of the latest tools and technologies.
              </li>
              <li>
                <strong>Best Infrastructure:</strong> We have access to state-of-the-art infrastructure.
              </li>
              <li>
                <strong>Scalability:</strong> We have the resources to scale up or scale down operations depending on the client's requirements.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Mortgage Closing Support Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been serving global lenders and brokers for years. We follow a strict and systematic process that enables us to deliver the best services within a quick turnaround without compromising on quality. Our team comprises experienced and dynamic financial experts who provide customized solutions to your business requirements.
            </p>
            <p className="text-gray-700 mb-6">
              For more accurate and time-bound processes, reach out to our customer service experts today!
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

export default MortgageClosingSupportServices;