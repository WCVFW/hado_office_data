import React from "react";
import NavigationMenu from "../MegaMenu";

const MacroeconomicsReportsPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Macroeconomics Reports Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Read our well-researched macroeconomics reports to understand the
          economic system and make the right decisions to keep your firm's
          growth trajectory at an all-time high.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Are you looking for insights into the macroeconomic developments and
          trends that are affecting the global and domestic economy? Are you
          looking for visually-appealing and data-driven macroeconomic reports
          that present reliable and accurate macroeconomic trends and patterns?
          If so, you are in the right place.
        </p>
        <p>
          Nimble Acuity is a leading macroeconomics reports service provider.
          We help businesses and individuals better navigate the global and
          national economic landscape through customized reports presented in a
          visually compelling manner.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Macroeconomics Reports Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Reports on Fiscal Policies",
              "Audit Support Services",
              "Reports on Product Competition",
              "Capital Asset Advisory Services",
              "Reports on Gross National Products (GNP)",
              "Structured Finance and Private Equity Reports",
              "Reports on Inflation Rate and Unemployment",
              "Valuation of Start-ups",
              "Reports on Supply and Demand",
              "Assessment of Intellectual Property",
              "Transaction Advisory Services",
              "Valuation of Intangible Assets",
              "Tax Advisory Services",
              "Reports on Key Indicators",
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  Detailed, reliable, and visually compelling reports tailored to
                  your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Macroeconomics Reports Creation Process
        </h2>
        <ol className="space-y-6">
          {["Requirement Gathering","Planning","Strategizing","Research in Phases","Analysis and Data Collation","Report Creation","Final Delivery"].map((step, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-700 font-bold mr-3">{idx + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Advantages of Using Nimble Acuity's Macroeconomics Reports
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Improved Decision-making",
              "Assess Growth",
              "Receive Important Insights",
              "Build Successful Investment Portfolios",
              "Determine Business Uncertainty",
              "Receive Government Budget Intelligence",
              "Crucial Domestic & International Analysis",
              "Optimally-Visualized Reports",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Nimble Acuity for Macroeconomics Reports?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside">
          {["Cost-effective Pricing","World-class Infrastructure","High-quality Services","Data Security","Fast Turnaround Time","Latest Software Tools","Experienced Team","Single Point of Contact"].map((reason, idx) => (
            <li key={idx} className="bg-gray-100 p-4 rounded-xl">
              {reason}
            </li>
          ))}
        </ul>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Customer Success Stories
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-2">
                Case Study on Market Entry Strategy for the South African Market
              </h3>
              <p className="text-sm text-gray-600">
                A US-based footcare major needed a successful market entry
                strategy. Nimble Acuity delivered a detailed report spanning 23 cities in
                South Africa within 15 days.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-2">
                Research Report Provided to Leading UK-based Headhunting Firm
              </h3>
              <p className="text-sm text-gray-600">
                Nimble Acuity conducted due diligence on candidates using trade and
                industry sources and presented a comprehensive research report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <blockquote className="bg-gray-100 p-6 rounded-2xl italic">
          “Let me thank you for the professional way in which you are managing
          the project and meeting our deadlines. Unfortunately, our second
          supplier I cannot say the same for and have let us down considerably.”
          <br />
          <span className="font-semibold block mt-2">
            CEO, Technology Company, UK
          </span>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nimble Macroeconomics Reports Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          If you are looking for high-quality and cost-effective macroeconomic
          reports, get in touch with us today!
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MacroeconomicsReportsPage;
``