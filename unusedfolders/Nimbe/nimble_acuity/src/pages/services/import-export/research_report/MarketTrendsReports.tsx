import React from "react";
import NavigationMenu from "../MegaMenu";

const MarketTrendsReports: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Nimble Market Trends Report Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Get access to high-quality market trends report services provided by a
          highly-skilled and qualified team of research analysts and stay ahead
          of the competition. Prices start at <span className="font-semibold">$14/hour</span>.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-12 space-y-6">
        <p>
          Are you looking for ways to stay in sync with your current market? Is
          there a gap in your understanding of current market trends which is
          impacting your productivity? Are constant fluctuations in the market
          causing you to lose business? Nimble Acuity provides customized
          market trends report solutions that are comprehensive and provide
          actionable intelligence.
        </p>
        <p>
          We help you understand how your business and industry are affected by
          market trends and how you can take advantage of new opportunities
          provided by changing market conditions. Offshore market trends report
          services to us to see a tangible positive effect on your business.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">
          Market Trends Report Services We Offer
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Government and Federal Reports</h3>
            <p>
              We provide comprehensive government and federal reserve reports,
              analyzing interest rates, fiscal and monetary policies, and their
              impact on businesses at local, national, and international levels.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">International Market Trends Reports</h3>
            <p>
              We accurately analyze international market trends to help
              companies engaged in global trade. With access to advanced
              databases, we help you navigate fluctuating global economic
              environments.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Supply and Demand Reports</h3>
            <p>
              Our reports provide insights on supply and demand trends across
              investments, products, pricing, currencies, and global supply
              chains to optimize risks and opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Industry-Specific Market Reports</h3>
            <p>
              We deliver market reports customized for your industry,
              incorporating primary and secondary research to support
              competitive positioning, new launches, and re-branding strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">
          Our Process - Market Trends Report Creation
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-800">
          <li>Requirement Analysis – We reach out to understand your needs.</li>
          <li>Planning – Defining the project scope and reach.</li>
          <li>Strategizing the Methodology – Setting the right research approach.</li>
          <li>Research in Phases – Analysts begin executing the plan.</li>
          <li>Analysis & Data Collation – Sorting, tabulating, and analyzing data.</li>
          <li>Report Creation – Draft insights delivered for feedback.</li>
          <li>Final Delivery – Incorporating feedback and final submission.</li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">
          Other Services You Can Benefit From
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
          <li>Market Research Report Services</li>
          <li>Syndicated Research Report Services</li>
          <li>Financial Research Report Services</li>
          <li>Corporate Finance Support</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">
          Why Choose Nimble Acuity for Market Trends Report Services?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Cost-effective pricing without compromising quality.</li>
          <li>World-class infrastructure for consistent results.</li>
          <li>ISO-certified, high-quality, error-free services.</li>
          <li>Robust data security with ISO/IEC 27001:2022 ISMS certification.</li>
          <li>Quick turnaround times with efficient methodologies.</li>
          <li>Experienced team of qualified research analysts.</li>
          <li>Dedicated project manager as a single point of contact.</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Testimonials</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
          “The services that Nimble Acuity provided helped us achieve
          substantial cost and time savings on several difficult projects. Their
          prompt attention to our requests and attention to detail are
          excellent.”
        </blockquote>
        <p className="mt-2 text-sm text-gray-600">
          – Senior Vice President, Automotive & Transportation Industry Solutions Group
        </p>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 py-10 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Nimble Market Trends Report to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Nimble Acuity is a pioneer in providing high-quality market trends
          reports to clients across the world. Get in touch with us today for
          reliable and cost-effective solutions.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MarketTrendsReports;
