import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const BrokerPriceOpinion: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Broker Price Opinion (BPO) Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Our licensed real estate agents can carry out a broker price opinion by performing an exterior drive-by and full interior review at reasonable rates.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for an alternative to a traditional appraisal? **Broker Price Opinion support** is a cost-effective solution to get a fair estimate of a property, especially for mortgage modification or foreclosure. Lenders are often unaware of changing real estate bylaws, which makes it difficult to effectively understand a property's value without a full appraisal. If you face similar hurdles, **Nimble Acuity** can help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, our certified brokers perform a drive-by of the property and its neighborhood for exterior assessment. We can also perform an internal assessment with the owner's consent to take photographs. Our brokers evaluate the living conditions and document trail, including ownership and tax history, to help you avoid dealing with liens and encumbrances.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive BPO Support Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer broker price opinion support services that provide a great return on your investment. The reports we provide will benefit your lending business significantly, whether you are looking for a change of ownership, foreclosure, or mortgage refinancing. Our services are cost-effective and tailored to your budget.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 columns-1 sm:columns-2">
              <li>
                <strong>BPO Order Management:</strong> We can help you order BPOs and keep track of every order to ensure timely completion of the analysis and report. We also verify property compliance with regulatory bylaws.
              </li>
              <li>
                <strong>BPO Status Tracking:</strong> We maintain a highly organized approach to track all BPO orders, ensuring timely payments and documentation for future needs. All records are stored in a CRM accessible to you.
              </li>
              <li>
                <strong>Data Entry for BPO:</strong> We maintain a checklist to ensure all relevant data is captured accurately during the evaluation, including details on nearby real estate listings, photographs, and geographical descriptions.
              </li>
              <li>
                <strong>BPO Report Creation & Review:</strong> We create a detailed, readable report based on the data collected, providing excellent insights that enable lenders to make informed decisions.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our BPO Support Process
            </h3>
            <p className="text-gray-700 mb-6">
              A broker price opinion costs only a fraction of a full property appraisal. We ensure this process is transparent, and our workflow is designed for maximum efficiency:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Work Initiation:</span> Once you place an order, we assign the task to a qualified broker familiar with the local geography and market.
              </li>
              <li>
                <span className="font-bold">Follow-Up:</span> We schedule an appointment and routinely contact the broker for timely updates on the property.
              </li>
              <li>
                <span className="font-bold">BPO Review:</span> The broker conducts a drive-by assessment and, with consent, an internal evaluation, considering nearby listing rates and geographical features.
              </li>
              <li>
                <span className="font-bold">Data Entry & Reporting:</span> A detailed report is created with accurate details and furnished to lenders for quick decision-making.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for BPO Support Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified and Secure:</strong> Our reports are accurate and reliable. We are an ISO/IEC 27001:2022 certified company, ensuring strict data security protocols.
              </li>
              <li>
                <strong>High Accuracy and Quality:</strong> We perform multi-tier verification to ensure the quality and accuracy of every report.
              </li>
              <li>
                <strong>Short Turnaround:</strong> Our brokers can perform both drive-by and internal BPOs quickly, allowing you to make decisions up to 30% faster.
              </li>
              <li>
                <strong>Scalability:</strong> We are prepared to handle higher volumes of BPO orders without stretching your budget or timeframe.
              </li>
              <li>
                <strong>Flexible Pricing:</strong> Our services are a cost-effective alternative to full-scale property appraisals, with flexible pricing options to fit your needs.
              </li>
              <li>
                <strong>Single Point of Contact:</strong> You will be provided with a dedicated broker who will assist you via phone, email, or web chat.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our skilled brokers have extensive experience and are well-versed in regional regulations and market trends.
              </li>
              <li>
                <strong>Secure Data Exchange:</strong> We ensure end-to-end data transmission is done securely through our secure FTP and VPN.
              </li>
              <li>
                <strong>24/7 Availability:</strong> Our contact centers are operational 24/7, so support is always within reach.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get an Accurate Property Valuation Today
            </h3>
            <p className="text-gray-700 mb-6">
              When you choose **Nimble Acuity** for broker price opinion support, you gain peace of mind from a reliable estimate of the collateral provided by our expert brokers. We also offer a full range of other mortgage services at competitive rates.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out to us now if you are looking for BPO support to accurately evaluate a property.
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

export default BrokerPriceOpinion;