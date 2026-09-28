import React from "react";
import NavigationMenu from "../MegaMenu";

const MarketSalesAnalysis: React.FC = () => {
  return (
    <div className="p-6 space-y-12">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Nimble Market Sales Analysis Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Get a clear understanding of your sales trends and optimize your
          processes with our expert services — starting at just{" "}
          <span className="font-semibold text-blue-600">$14/hour</span>.
        </p>
      </section>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Market Sales Analysis Services We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Sales Dashboard Creation",
              desc: "We transform raw sales data into dashboards that reveal trends, KPIs, and patterns you may otherwise miss.",
            },
            {
              title: "Sales Forecasting Services",
              desc: "Using historical data, seasonal trends, and promotions, we accurately forecast your future sales.",
            },
            {
              title: "Sales Data Analysis Services",
              desc: "Our analysts generate detailed reports on revenue, inventory, and customer interactions.",
            },
            {
              title: "Product Performance Analysis",
              desc: "We track product-level performance, revenue distribution, pricing patterns, and profitability.",
            },
            {
              title: "Data Integration Services",
              desc: "We integrate data across platforms like CRM, SCM, and Salesforce for a 360° view of your business.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Other Services You Can Benefit From</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li className="p-3 border rounded-lg">Newsletter Services</li>
          <li className="p-3 border rounded-lg">Market Research Surveys</li>
          <li className="p-3 border rounded-lg">Online Market Research</li>
          <li className="p-3 border rounded-lg">Syndicated Research Support</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Why Choose Nimble Acuity for Market Sales Analysis Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Flexible Pricing Packages</li>
          <li>✔ ISO/IEC 27001:2022 Certified – Information Security</li>
          <li>✔ Experienced Research Team</li>
          <li>✔ Error-free, World-class Services</li>
          <li>✔ Advanced Infrastructure & Tools</li>
          <li>✔ Dedicated Project Manager</li>
          <li>✔ Scalable & Fast Turnaround Services</li>
          <li>✔ 24/7 Global Support</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-bold">American Healthcare Compliance Giant</h3>
            <p className="text-gray-700 mt-2">
              Assisted with updating KOL information, enabling nationwide patient
              and doctor outreach on budget.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-bold">Swiss Hospitality Provider</h3>
            <p className="text-gray-700 mt-2">
              Delivered reliable secondary research, helping optimize resort
              strategies with actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
          “Let me thank you for the professional way in which you are managing
          the project and meeting our deadlines. Unfortunately, our second
          supplier has let us down considerably.”
        </blockquote>
        <p className="text-gray-600">— CEO, Technology Company, UK</p>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">
          Nimble Market Sales Analysis Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          For 26+ years, Nimble Acuity has been a pioneer in market sales
          analysis, combining strategic planning with advanced tools and global
          expertise. We help businesses achieve consistent, measurable growth.
        </p>
        <p className="text-lg font-medium text-blue-600">
          Get in touch with us today for reliable, cost-effective sales
          analysis services!
        </p>
      </section>
    </div>
  );
};

export default MarketSalesAnalysis;
