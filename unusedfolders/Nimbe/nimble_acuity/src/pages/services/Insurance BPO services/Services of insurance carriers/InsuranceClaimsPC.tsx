import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceClaimsPC: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Insurance Claims Management for Property and Casualty
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          By outsourcing insurance claims management for property and casualty
          to us, you can save on costs, time, and boost your business
          profitability.
        </p>
      </section>

      {/* Intro */}
      <section className="py-10 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Is your insurance organization struggling to reduce operational costs,
          serve your customers in a better way, and increase the profitability
          of your business? Are you falling short of resources to handle your
          insurance claims management for property and casualty service needs?
          Then, it is time to Nimble insurance claims management for property
          and casualty to an experienced service provider.
        </p>
        <p>
          Nimble Acuity is one such service provider who will be a
          one-stop-shop for all your property insurance claims management needs.
          Our team comprises some of the most talented and skilled insurance
          claims management experts who can deliver quality services within a
          quick time.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Insurance Claims Management for Property and Casualty Services We
          Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">Policy Administration</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Premium audits</li>
              <li>Loss billing and accounting</li>
              <li>Remittances & DMV error corrections</li>
              <li>Case adjudication and inspection</li>
              <li>New application enrollment</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Claims Processing</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Case assignment & data entry</li>
              <li>Task management & adjudication</li>
              <li>Payment/settlement confirmation</li>
              <li>Fraud detection & claims tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Claims Servicing</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Data entry & database design</li>
              <li>Query resolution</li>
              <li>First notice of loss review</li>
              <li>Claims status calls</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Billing & Agency Administration</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>E-billing & payment processing</li>
              <li>Billing dispute resolution</li>
              <li>Agent helpdesk & commission processing</li>
              <li>Customer support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Nimble Acuity's Insurance Claims Management Process
        </h2>
        <ol className="max-w-4xl mx-auto list-decimal pl-6 space-y-2">
          <li>
            <span className="font-bold">Analysis:</span> Review client’s
            business, requirements & challenges.
          </li>
          <li>
            <span className="font-bold">Strategic Planning:</span> Create a
            tailored outsourcing plan.
          </li>
          <li>
            <span className="font-bold">Implementation:</span> Dedicated team
            executes claims management.
          </li>
          <li>
            <span className="font-bold">Validation & Verification:</span> All
            records are verified and validated.
          </li>
          <li>
            <span className="font-bold">Delivery:</span> Final reports delivered
            within deadlines.
          </li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Choose Nimble Acuity for Offshore Insurance Claims Management?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Affordable and flexible pricing options</li>
          <li>ISO/IEC 27001:2022 certified data security</li>
          <li>Quick turnaround with global delivery centers</li>
          <li>Experienced property insurance claims experts</li>
          <li>ISO-certified high-quality services</li>
          <li>Modern insurance infrastructure</li>
          <li>Dedicated single point of contact</li>
          <li>24/7 availability for client support</li>
          <li>Easy scalability as per client needs</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nimble Insurance Claims Management for Property & Casualty to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity has been a pioneer in providing quality insurance claims
          management for property and casualty in India and beyond. Get in touch
          with us today to boost efficiency, cut costs, and ensure reliable
          claims management.
        </p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsuranceClaimsPC;
