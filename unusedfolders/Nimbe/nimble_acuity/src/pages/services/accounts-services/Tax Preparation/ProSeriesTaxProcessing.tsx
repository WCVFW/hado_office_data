import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ProSeriesTaxProcessing = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Elevate Your Tax Processing with ProSeries & Nimble Acuity
            </h2>
            <p className="text-lg text-gray-600">
              Outsource your ProSeries tax processing to Nimble Acuity for
              secure, accurate, and cost-effective solutions—starting from just{" "}
              <span className="font-semibold">$35 per return.</span> Our expertise
              and technology ensure a seamless experience tailored to your
              business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              As a global leader in tax processing, Nimble Acuity leverages the
              power of ProSeries software to simplify complex tax laws and ensure
              compliance with accuracy. With years of experience, we’ve helped
              businesses streamline their tax operations and gain a competitive
              edge.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Explore the ProSeries Advantage
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>ProSeries Basic:</strong> Simple and user-friendly. Handles
                a high volume of returns with unlimited e-filing, step-by-step
                guidance, and category-specific checklists.
              </li>
              <li>
                <strong>ProSeries Express:</strong> Built for speed and efficiency.
                Ideal for professionals filing 50+ returns annually, with unlimited
                federal and business forms, bilingual questionnaires, and network
                capabilities.
              </li>
              <li>
                <strong>ProSeries Professional:</strong> The most advanced option.
                Offers versatile data entry, robust error checking, and reliable
                support for quick, accurate state and federal returns.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Unmatched Accuracy:</strong> Flawless quality with
                meticulous attention to detail.
              </li>
              <li>
                <strong>Cost-Effective Solutions:</strong> Competitive pricing
                without compromising service.
              </li>
              <li>
                <strong>Expert Team:</strong> Highly trained professionals with
                deep expertise in US tax processes.
              </li>
              <li>
                <strong>Rapid Delivery:</strong> Quick turnaround times for peak
                tax season efficiency.
              </li>
              <li>
                <strong>Customer-Centric Approach:</strong> Tailored solutions
                built around your business needs.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Transform Your Business with Smarter Tax Processing
            </h3>
            <p className="text-gray-700 mb-6">
              Outsourcing is more than a trend—it’s a strategy. With Nimble Acuity,
              you get flawless tax processing powered by ProSeries and delivered by
              experts who understand US tax laws inside and out.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">
                Accuracy, speed, and cost-effectiveness are within reach.
              </span>{" "}
              Contact us today to simplify your tax processing.
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us Today
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProSeriesTaxProcessing;
