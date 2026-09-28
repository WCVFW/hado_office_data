import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const ForeclosureAssistanceServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Foreclosure Assistance Services
            </h2>
            <p className="text-lg text-gray-600">
              Foreclosures are an expensive, time-consuming, and complex process that can significantly reduce profit margins and a lender's ability to lend more funds in the future. By outsourcing these services, you can efficiently manage the foreclosure timeline and focus on more important business objectives.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity provides top-tier mortgage foreclosure assistance to clients worldwide. Our team of mortgage experts has years of experience managing foreclosure services and has a proven track record of delivering streamlined and timely support. We have the capability to assist any private owner or lender in successfully foreclosing upon or re-selling a property in default.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Foreclosure Assistance Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With extensive experience working with a diverse range of clients, Nimble Acuity accurately understands your business and provides the services you need. Our key mortgage foreclosure support services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Property Evaluation:</strong> We conduct thorough evaluations to ensure accurate valuations.
              </li>
              <li>
                <strong>Attorney Management:</strong> We manage all legal aspects of the foreclosure process.
              </li>
              <li>
                <strong>Remediation Management:</strong> We oversee and manage any necessary property remediation.
              </li>
              <li>
                <strong>Eviction Services:</strong> We provide professional assistance with eviction procedures.
              </li>
              <li>
                <strong>Pre-foreclosure Valuation:</strong> We conduct valuations before the foreclosure process begins.
              </li>
              <li>
                <strong>Foreclosure Documentation:</strong> We meticulously prepare and handle all foreclosure documentation.
              </li>
              <li>
                <strong>Post-Sale REO:</strong> We provide comprehensive support for properties acquired through foreclosure.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Foreclosure Support?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our mortgage experts are well-trained to handle various foreclosure situations. Here are some key reasons to choose us for top-quality mortgage foreclosure support:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Customized Strategy:</strong> We evaluate individual cases, customize the appropriate foreclosure strategy, and provide unique bankruptcy solutions.
              </li>
              <li>
                <strong>Quality Monitoring:</strong> We have a strong review process to monitor all our processes at various stages to ensure high quality.
              </li>
              <li>
                <strong>Cutting-Edge Technology:</strong> We use state-of-the-art mortgage infrastructure and cutting-edge technologies to provide the best back-office services.
              </li>
              <li>
                <strong>Transparency and Updates:</strong> We maintain complete transparency with our clients, providing real-time updates as needed.
              </li>
              <li>
                <strong>Scalable Services:</strong> Our multiple global delivery centers allow us to scale processes based on mortgage market fluctuations.
              </li>
              <li>
                <strong>Affordable Prices:</strong> We provide the best foreclosure assistance at unbeatable prices, helping you save time and money.
              </li>
              <li>
                <strong>Buyer Protection:</strong> We double-check buyer records and the state of the loan to ensure the foreclosure process does not inadvertently harm any buyer.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Contact Us for Reliable Foreclosure Management
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides high-quality mortgage foreclosure assistance and a plethora of other support solutions at cost-effective rates. Our vast experience helps us understand how foreclosure processes work at your organization and provide the required service accordingly. We also offer post-foreclosure assistance for services such as eviction, post-sale REO management, and lien tracking.
            </p>
            <p className="text-gray-700 mb-6">
              If you're looking for a reliable mortgage foreclosure partner, don't hesitate. Contact one of our representatives today.
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

export default ForeclosureAssistanceServices;