
import React from "react";
import NavigationMenu from "../MegaMenu";

const IFRSValuationServicesPage: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nimble IFRS Valuation Services</h1>
        <p className="text-lg text-gray-700 mb-6">
          At Nimble Acuity, we enable businesses to rapidly update their accounting systems as per IFRS guidelines at the most affordable rates. Prices start at <strong>$14/hour</strong>.
        </p>
        <p className="text-gray-600">
          The International Accounting Standards Board (IASB) establishes accounting principles known as International Financial Reporting Standards (IFRS). They provide a global standard for corporations when creating balance sheets and financial statements, eliminating complicated country-specific standards.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">IFRS Valuation Services We Provide</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Valuation of Customer Loyalty Programs",
              desc: "We evaluate companies with loyalty programs and enable them to make appropriate provisions in financial statements.",
            },
            {
              title: "Valuation of Product Warranties",
              desc: "Using actuarial principles, we help businesses evaluate liabilities for repairing or replacing faulty products.",
            },
            {
              title: "Valuation of Employee Benefits Liabilities",
              desc: "We enable companies to account for benefits like gratuity, leave encashment, and flexible plans under IFRS.",
            },
            {
              title: "Valuation of Insurance Contracts",
              desc: "We help develop accounting procedures under new IFRS standards with auditing and exposure support.",
            },
            {
              title: "Preparing IFRS Financial Statements",
              desc: "Our professionals ensure your financial statements are consistent and IFRS-compliant.",
            },
            {
              title: "Generating Reports under IFRS",
              desc: "We optimize reporting as per IFRS valuations to streamline accounting across subsidiaries.",
            },
            {
              title: "Restructuring Account Policies",
              desc: "We assist in complying with new IFRS requirements to help improve or retain company value.",
            },
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Other Services You Can Benefit From</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["Financial Research Report Services", "Market Research Services", "Business Research Services", "Pharmaceutical Research Services"].map((item, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl border shadow-sm">
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Why Nimble IFRS Valuation Services to Nimble Acuity?</h2>
        <ul className="space-y-4 text-gray-700">
          <li><strong>Competitive Pricing:</strong> Immediate access to technical expertise at the most reasonable pricing.</li>
          <li><strong>Complete Data Security:</strong> Strict data privacy ensures your critical data remains safe.</li>
          <li><strong>Highly Qualified Team:</strong> Chartered accountants with extensive IFRS reporting expertise.</li>
          <li><strong>Global Delivery Centres:</strong> Quick turnaround with international delivery hubs.</li>
          <li><strong>24/7 Customer Support:</strong> Always available to ensure you’re fully supported.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Client Success Stories</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <h3 className="font-semibold">Luxury Air Travel Provider</h3>
            <p>We provided high-quality research services quickly to a leading California-based air travel company.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <h3 className="font-semibold">Top USA-based Technology Leader</h3>
            <p>We delivered accurate and high-quality research services quickly to a leading US technology provider.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="p-6 bg-white rounded-xl shadow text-gray-700 italic">
          “The services that Nimble Acuity provided helped us achieve substantial cost and time savings on several difficult projects.”
          <footer className="mt-2 font-semibold">— Senior Vice President, Automotive & Transportation Industry Solutions Group</footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-50 p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">Nimble IFRS Valuation Services to Nimble Acuity</h2>
        <p className="text-gray-700 mb-6">
          Increase efficiency, compliance, and cost-effectiveness with our IFRS valuation services. We help you understand and apply IFRS requirements tailored to your business needs.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">
          Get in Touch Today
        </button>
      </section>
    </div>
  );
};

export default IFRSValuationServicesPage;

