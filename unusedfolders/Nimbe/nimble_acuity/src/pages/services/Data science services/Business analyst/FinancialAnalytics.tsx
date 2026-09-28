import React from "react";
import DSMainMenu from "../mainmenu";

const FinancialAnalytics: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Financial Analytics Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Faster, accurate, and smarter financial analytics services to help you
          gain a competitive edge. At Nimble Acuity, we empower enterprises to
          make intelligent, data-driven decisions while minimizing risks.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Using the results of our financial analytics services, enterprises can
          fine-tune business strategies to maximize revenues, attract and retain
          customers, and make more informed business decisions. With decades of
          experience, we deliver best-in-class analytics services that support
          sustainable growth.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Nimble Acuity's Financial Analytics Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Financial Data Collection",
              desc: "Expert collection and organization of financial data into structured databases.",
            },
            {
              title: "Financial Data Segmentation",
              desc: "Categorizing financial data into relevant groups for streamlined analysis.",
            },
            {
              title: "Pattern Recognition",
              desc: "Using advanced tools to detect financial patterns and optimize processes.",
            },
            {
              title: "Principle Component Analysis",
              desc: "Detailed analysis of data sets to guide business processes in the right direction.",
            },
            {
              title: "Predictive Financial Analytics",
              desc: "Forecasting financial trends and patterns to help you take corrective actions early.",
            },
            {
              title: "Client Analytics",
              desc: "Creating models to analyze past and future customer behavior for smarter decisions.",
            },
            {
              title: "Financial Data Quality Analysis",
              desc: "Cleansing and validating financial data to ensure accuracy in analytics.",
            },
            {
              title: "Financial Data Layout & Quality Checks",
              desc: "Performing stringent quality checks to ensure reliability of financial information.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Us for Financial Analytics Services?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Skilled team of financial analysts trained in the latest tools and
            techniques.
          </li>
          <li>
            World-class analytics services at cost-effective rates with flexible
            pricing models.
          </li>
          <li>
            Strict non-disclosure agreements and workstation security to protect
            client data.
          </li>
          <li>
            Proven track record of delivering results quickly with global
            delivery centers.
          </li>
          <li>
            Expertise in forecasting revenue, risk analytics, fraud detection,
            and compliance.
          </li>
          <li>
            Strong background in market risk analytics, operations risk
            management, and regulatory compliance.
          </li>
          <li>
            Helping clients increase revenue, optimize costs, manage risks, and
            boost customer satisfaction.
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Financial Analytics Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          With 26+ years of experience, Nimble Acuity is a leader in financial
          analytics services. We help businesses improve revenue, manage risks,
          and maximize returns with ISO-certified processes and proven
          expertise.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default FinancialAnalytics;
