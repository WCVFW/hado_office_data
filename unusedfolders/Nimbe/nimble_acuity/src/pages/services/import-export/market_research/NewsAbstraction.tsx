import React from "react";
import NavigationMenu from "../MegaMenu";

const NewsAbstraction: React.FC = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Nimble News Abstraction Services</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nimble Acuity helps clients curate data from all possible sources to deliver 
          the right data at the right time. By simplifying the exhaustive process of 
          data abstraction, we provide neatly compiled and customized reports of the latest 
          market trends, industry news, economic updates, and trade developments.
        </p>
      </section>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">News Abstraction Services We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Corporate Developments",
              desc: "Compilation and analysis of stocks on a daily basis.",
            },
            {
              title: "Earnings Surprises",
              desc: "Accounting reports and daily updates for expected measured earnings.",
            },
            {
              title: "Market Performance Reports",
              desc: "Comprehensive reports on industry and economic trends relevant to your market.",
            },
            {
              title: "News Abstracts and Summaries",
              desc: "Detailed summaries prepared from multiple news sources.",
            },
            {
              title: "Press Reportage Analysis",
              desc: "In-depth analysis of current press and news reports for specific businesses.",
            },
            {
              title: "Media Content Analysis",
              desc: "Deconstructed research-based media analysis for actionable insights.",
            },
            {
              title: "Newsletter Creation",
              desc: "Custom industry newsletters with organized and comprehensive information.",
            },
          ].map((service, i) => (
            <div key={i} className="p-4 border rounded-xl shadow-sm">
              <h3 className="font-bold">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Process We Follow</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-bold">Capture</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Identify sources (offline, online & print)</li>
              <li>Document and review sources</li>
            </ul>
          </div>
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-bold">Review</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Prepare review charts</li>
              <li>Check content relevance</li>
            </ul>
          </div>
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-bold">Calculate</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Abstract data</li>
              <li>Prepare structured reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Benefits of Outsourcing News Abstraction to Nimble Acuity
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Expertise across multiple industries – Pharma, Finance, Retail, Telecom, BFSI, Oil & Gas, and more.</li>
          <li>Receive detailed analysis of market trends, stock, and economic updates.</li>
          <li>Save time and resources by outsourcing content curation and analysis.</li>
          <li>Access frequently updated reports, newsletters, or summaries daily or monthly.</li>
          <li>Stay ahead of competitors by monitoring market movements and industry changes.</li>
          <li>Get structured classification of data by ranks, types, and industries.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">
          Contact Nimble Acuity to Nimble News Abstraction Services
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          With 26+ years of experience in research services, Nimble Acuity is a trusted 
          provider of news abstraction and newsletter creation services. Our expert team 
          delivers curated insights that keep your business informed, efficient, and competitive.
        </p>
        <p className="text-lg font-medium text-blue-600">
          Contact us today to learn more about our complete range of options!
        </p>
      </section>
    </div>
  );
};

export default NewsAbstraction;
