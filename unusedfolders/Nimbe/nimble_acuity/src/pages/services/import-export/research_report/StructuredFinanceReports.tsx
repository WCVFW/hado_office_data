import React from "react";
import NavigationMenu from "../MegaMenu";

const StructuredFinanceReports: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Structured Finance Reports Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Get access to high-quality and cost-effective structured finance
          reports (starting at only $14/hour) created by a highly-qualified and
          experienced team of finance professionals
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Are you finding it difficult to create high-quality structured finance
          reports in-house? Are you looking for a capable provider of structured
          finance reports services? … If so, you are at the right place.
        </p>
        <p>
          Nimble Acuity (Nimble Acuity) is a leading provider of top-quality structured
          finance reports for small and large businesses across the world. Our
          structured finance report solutions have helped numerous investors,
          borrowers, financial intermediaries, and government entities better
          manage their risk factors, gain clarity on investment plans, and
          improve transparency.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Structured Finance Report Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Financial Instruments Reports",
            "Collateralized Debt Obligations Reports",
            "Syndicated Loan-portfolio Reports",
            "Funding Assessment Reports",
            "Loan Tapes Reports",
            "Valuation and Loss Analysis Reports",
            "Project-level Financial Reports",
            "Collateralized Bond Obligations Reports",
            "Asset-backed Reports",
            "Modeling Cash Flow",
            "Collateral Reports",
            "Post-issuance Requirements Reports",
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-sm text-gray-600">
                High-quality insights, detailed reporting, and actionable
                analysis tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Process
        </h2>
        <ol className="space-y-4">
          {[
            "Requirement Analysis",
            "Planning",
            "Strategizing",
            "Research",
            "Collation and Analysis of Data",
            "Creation of Report",
            "Final Submission",
          ].map((step, i) => (
            <li key={i} className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {i + 1}
              </span>
              <p className="pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Nimble Acuity for Structured Finance Report Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Affordable Pricing Options",
            "World-class Infrastructure",
            "High-quality Services",
            "Fast Turnaround Time",
            "Data Security (ISO/IEC 27001:2022)",
            "Latest Software Used",
            "Experienced Team",
            "Global Delivery Centers",
            "Single Point of Contact",
            "Easy Scalability",
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-2">{benefit}</h3>
              <p className="text-sm text-gray-600">
                Ensuring value, security, and excellence in every report we
                deliver.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">
              Company Profiling Services for an Investment Firm
            </h3>
            <p className="text-sm text-gray-600">
              Delivered top-quality company profiling services for a leading
              Texas-based private investment firm.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">
              Business Research for Wealth Management Firm
            </h3>
            <p className="text-sm text-gray-600">
              Created detailed profiles of family businesses for a global wealth
              management firm.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic text-gray-700">
          “We have carefully reviewed your documents and are suitably impressed
          with the meticulous details with which you are conducting your audits
          to ensure exceptionally high quality for the extracted data delivered.”
          <footer className="mt-4 text-gray-600">— VP, Leading STM Publisher, USA</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Structured Finance Report Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Whatever your structured financial report requirement, we can help.
          Our team of highly-qualified finance professionals provides you with
          the best insights you need to take your business to the next level.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default StructuredFinanceReports;
