import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceBillingAR: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Insurance Billing and Accounts Receivable Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get accurate and error-free insurance billing and AR services at an
          affordable price by partnering with{" "}
          <span className="font-semibold">Nimble Acuity</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6 text-lg">
        <p>
          Is your billing and accounts receivable team unable to handle the high
          volume of work? Are you struggling to maintain accuracy without the
          latest technologies? Nimble Acuity is your one-stop partner for
          insurance billing and AR services.
        </p>
        <p>
          With 26+ years of experience and advanced tools, our qualified finance
          experts ensure your finances are always on track, monitored, and
          error-free.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Insurance Billing & Accounting Services We Offer
        </h2>
        <ul className="space-y-4 text-lg list-disc list-inside">
          <li>
            Calculating premiums and applicable government charges for insurance
            policies.
          </li>
          <li>
            Preparing AR reports and tracking receivables on the carrier’s
            behalf.
          </li>
          <li>
            Entering AR transactions into systems and sharing periodic
            statements with stakeholders.
          </li>
          <li>
            Generating invoices in the required format using carrier systems.
          </li>
          <li>
            Maintaining AR ledgers, disbursing amounts, and resolving account
            issues.
          </li>
          <li>
            Preparing invoices with tax breakup, commission details, and report
            categorization.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Insurance Billing & AR Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "01",
              title: "Establish Credit Practices",
              desc: "We help set up credit applications, terms, and methodology for smoother financial operations."
            },
            {
              step: "02",
              title: "Invoicing Customers",
              desc: "Our team prepares and sends electronic or paper invoices depending on client preferences."
            },
            {
              step: "03",
              title: "Tracking AR",
              desc: "We track receivables, record deposits, allocate them to invoices, and update AR systems."
            },
            {
              step: "04",
              title: "Accounting for AR",
              desc: "We establish due dates, identify unpaid debts, and create journal entries for accurate accounting."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow hover:shadow-md"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-700 text-white rounded-full text-lg font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Document Indexing Services",
            "Certificate of Insurance Services",
            "Claims Processing",
            "Insurance Agency Management"
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-50 py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose Nimble Acuity for Insurance Billing & AR Services?
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          <li>
            <strong>Affordable Pricing:</strong> Cost-effective packages suited
            to your budget.
          </li>
          <li>
            <strong>Advanced Infrastructure:</strong> Modern tools, secure
            networks, and world-class office spaces.
          </li>
          <li>
            <strong>Experienced Experts:</strong> Qualified insurance veterans
            deliver error-free services.
          </li>
          <li>
            <strong>Dedicated Manager:</strong> A single point of contact keeps
            you updated throughout.
          </li>
          <li>
            <strong>Data Security:</strong> ISO/IEC 27001:2022 certified for
            secure handling of sensitive data.
          </li>
          <li>
            <strong>Scalability:</strong> Scale resources up or down to match
            demand.
          </li>
          <li>
            <strong>Quick Turnaround:</strong> Global delivery centers ensure
            speed without compromise.
          </li>
          <li>
            <strong>24/7 Support:</strong> Always-available support across time
            zones.
          </li>
          <li>
            <strong>Error-free Billing:</strong> ISO-certified, 98%+ accuracy in
            AR processing.
          </li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Client Success Stories</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">
              Back-office Solutions – Health Insurance Company
            </h3>
            <p>
              Provided complete back-office support to a leading health
              insurance firm, streamlining operations with speed.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">
              Streamlined Back-office – Miami-based Agency
            </h3>
            <p>
              Helped a Miami-based insurance agency reduce costs and improve
              efficiency with tailored back-office solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Insurance Billing & Accounts Receivable Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-3xl mx-auto text-lg">
          With expert teams, advanced tools, and proven processes, we deliver
          cost-effective, accurate, and fast billing and AR services.
        </p>
        <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsuranceBillingAR;
