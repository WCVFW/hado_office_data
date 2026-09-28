import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const BusinessTaxServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Expert Business Tax Services for a Dynamic World
            </h2>
            <p className="text-lg text-gray-600">
              Tax regulations are constantly shifting, making it difficult to stay
              compliant while optimizing your processes. Our end-to-end business
              tax services help you manage risk, maximize benefits, and implement
              a strategy that supports your growth.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              From provisions to planning, we provide tailored solutions that
              address the complexities of your business structure. With our
              support, you’ll gain a clear understanding of liabilities and adopt
              tax strategies that align with your long-term objectives.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive Tax Solutions, Tailored to You
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Tax Advisory:</strong> Strategic guidance on tax
                management, risk mitigation, and corporate restructuring.
              </li>
              <li>
                <strong>Tax Preparation & Filing:</strong> Accurate reporting and
                timely filing for businesses of all sizes.
              </li>
              <li>
                <strong>Tax Planning:</strong> Tax-efficient strategies to
                minimize liabilities and strengthen long-term financial health.
              </li>
              <li>
                <strong>Specialized Tax Support:</strong> Expertise across{" "}
                <em>Corporate Tax, International Tax, SALT,</em> and{" "}
                <em>Federal Tax</em>.
              </li>
              <li>
                <strong>Indirect Tax Services:</strong> Support for VAT, GST,
                sales tax, customs, and excise duties.
              </li>
              <li>
                <strong>Small Business Tax Services:</strong> Tailored solutions
                for SMEs to manage liabilities, meet deadlines, and ensure
                compliance.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Us for Your Business Tax Needs?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Specialized Expertise:</strong> Solutions designed to
                reduce liabilities and maintain accurate financial records.
              </li>
              <li>
                <strong>Absolute Data Security:</strong> ISO-certified processes
                safeguard your sensitive information.
              </li>
              <li>
                <strong>Fast & Scalable:</strong> Services that adapt quickly to
                growth or seasonal demands.
              </li>
              <li>
                <strong>High-Quality & Compliant:</strong> IFRS-compliant services
                delivered at flexible, affordable rates.
              </li>
              <li>
                <strong>Skilled Professionals:</strong> Experienced tax experts
                and dedicated project managers for seamless delivery.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Minimize Liabilities, Maximize Growth
            </h3>
            <p className="text-gray-700 mb-6">
              From multinational corporations to SMEs, we help businesses meet
              deadlines, optimize tax structures, and manage complex data with
              ease.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">
                Ready to streamline your tax operations?
              </span>{" "}
              Contact us today to get started.
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

export default BusinessTaxServices;
