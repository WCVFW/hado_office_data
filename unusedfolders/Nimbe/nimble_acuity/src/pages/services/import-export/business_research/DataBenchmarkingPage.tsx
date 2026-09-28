import React from "react";
import NavigationMenu from "../MegaMenu";

const DataBenchmarkingPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Data Benchmarking Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Effectively and efficiently analyze how your business stacks up against
          your competitors or industry norms by choosing our data benchmarking
          services. <span className="font-semibold">Prices start at $14/hour</span>
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Data benchmarking helps in measuring the success of a business by
          comparing a current process with past processes of the company or
          processes of competitors. It is the most widely practiced and
          acceptable way of analyzing how a business stacks up against current
          industry norms or understanding how your competitors are doing things
          differently from you.
        </p>
        <p>
          Nimble Acuity has over <strong>26+ years of experience</strong> in
          providing data benchmarking services to international companies. We
          have assisted several large and small companies to identify and compare
          benchmarks to understand performance goals, measure important metrics,
          and continue improving and growing.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Data Benchmarking Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Internal Data Benchmarking",
                desc: "Compare data of two departments within an organization for quality and performance issues, ensuring consistency across departments.",
              },
              {
                title: "External Data Benchmarking",
                desc: "Map an internal process with data of a competing or non-competing organization, often using industry standards and agreements.",
              },
              {
                title: "Competitive Data Benchmarking",
                desc: "Compare metrics with direct competitors using tools, social media data, and subtle surveys to gain insights on customer satisfaction.",
              },
              {
                title: "Performance Data Benchmarking",
                desc: "Contrast yearly performances by tracking KPIs and metrics to continuously improve standards and outcomes.",
              },
              {
                title: "Strategic Data Benchmarking",
                desc: "Analyze successful strategies of similar organizations to design effective sales and marketing roadmaps.",
              },
              {
                title: "Practice Data Benchmarking",
                desc: "Monitor processes and practices within your business to improve operations, including process mapping.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Data Benchmarking Process
        </h2>
        <ol className="space-y-6">
          {[
            "Understand the Data to be Benchmarked",
            "Decide Which Organizations or Companies You Want to Benchmark",
            "Collect and Analyze Data",
            "Measure Performance of Your Data",
            "Create a Plan",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold">
                {idx + 1}
              </span>
              <p className="pt-2 text-lg">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Benefits of Outsourcing Data Benchmarking to Nimble Acuity
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Maintain Quality at Reduced Costs",
              "Expert Data Scientists",
              "Complete Data/Security Protection",
              "Improved Productive Hours",
              "Improved Customer Satisfaction",
              "Demonstrable ROI",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-white shadow rounded-2xl hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Research Support for Global Marketing Strategy Firm
            </h3>
            <p>
              Nimble Acuity's experienced analysts provided robust and reliable research
              services from both online and offline sources for a leading
              marketing strategy consulting firm.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              KOL Identification for UK-based Healthcare Provider
            </h3>
            <p>
              Nimble Acuity used a proprietary methodology to research, collate, and
              analyze KOL information for a leading UK-based provider of
              healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Data Benchmarking Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          With 26+ years of expertise, we help businesses compare performance,
          improve critical areas, and evaluate quality problems using reliable
          data-driven metrics. Get in touch with our experts today.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default DataBenchmarkingPage;
