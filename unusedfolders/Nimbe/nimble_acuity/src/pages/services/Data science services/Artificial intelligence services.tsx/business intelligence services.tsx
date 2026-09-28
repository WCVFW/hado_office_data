import React from "react";
import DSMainMenu from "../mainmenu";

const BusinessIntelligencePage: React.FC = () => {
  return (
    <div className="px-6 md:px-16 lg:px-28 py-12 text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Nimble Business Intelligence Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Take faster decisions with automated machine learning, natural
          language query and data lineage tracking. Contact our BI experts to
          drive the power of analytics.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto mb-16 space-y-4">
        <p>
          Are you bogged down with data silos and fragmentation issues that
          hinder your business decision-making skills? Gain immediate insights
          through real time data processing with us. We forecast future trends
          using machine learning algorithms and predictive modeling. The
          AI-powered insights we provide help uncover hidden patterns that give
          you a richer analytical depth.
        </p>
        <p>
          Leverage our interactive dashboards for dynamic exploration of data;
          use our self-service data prep tools to manipulate data without any
          technical expertise. In addition, our seamless cloud integrations
          ensure scalable computing resources, so that your BI solutions grow
          with your business. Find out how our cutting-edge solutions can turn
          your data into strategic assets!
        </p>
      </section>

      {/* Success Stories */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Customer Success Stories
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-2">
              Robust Big Data Platform for Document Processing Automation
            </h3>
            <p className="text-gray-700">
              A prominent banking organization leveraged our services to develop
              a data-driven document processing automation platform. Our data
              science team created the platform while considering every need of
              the customer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">
              Processing Infrastructure and Data Storage for a Leading Bank
            </h3>
            <p className="text-gray-700">
              A premier Indian bank approached us to build a powerful data
              processing infrastructure that could store all their data. Our
              team completed the project in a short period of time.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Our Business Intelligence Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Business Intelligence and Analytics",
              points: [
                "Real-time data processing capabilities",
                "Predictive analytics for trend forecasting",
                "Interactive dashboards for visualization",
                "Advanced data mining techniques",
              ],
            },
            {
              title: "Amazon Web Services Business Intelligence",
              points: [
                "Seamless AWS cloud integration",
                "Scalability with AWS infrastructure",
                "AI-driven insights and analytics",
                "Real-time data stream processing",
              ],
            },
            {
              title: "Business Intelligence Cloud Service",
              points: [
                "Cloud-native BI architecture",
                "Real-time data synchronization",
                "Automated ETL processes",
                "Scalable cloud storage solutions",
              ],
            },
            {
              title: "BI Consumer Services",
              points: [
                "Consumer behavior analytics",
                "Sentiment analysis using NLP",
                "Customer segmentation modeling",
                "Personalized marketing insights",
              ],
            },
            {
              title: "BI Integration Services",
              points: [
                "Seamless system integration",
                "Cross-platform data harmonization",
                "API-driven data access",
                "Unified data governance framework",
              ],
            },
            {
              title: "BI Managed Services",
              points: [
                "Fully managed BI solutions",
                "Proactive system monitoring",
                "Automated backups and updates",
                "SLA-driven performance guarantees",
              ],
            },
            {
              title: "BI Reporting Services",
              points: [
                "Customizable report generation",
                "Real-time reporting capabilities",
                "Interactive report dashboards",
                "Automated report distribution",
              ],
            },
            {
              title: "BI Testing Services",
              points: [
                "Data accuracy validation",
                "Performance stress testing",
                "ETL process testing",
                "Automated test scripts",
              ],
            },
            {
              title: "Procurement BI Services",
              points: [
                "Spend analysis optimization",
                "Supplier performance metrics",
                "Predictive procurement insights",
                "Contract compliance monitoring",
              ],
            },
            {
              title: "Magento BI Services",
              points: [
                "E-commerce data integration",
                "Sales performance analytics",
                "Customer behavior tracking",
                "Inventory management insights",
              ],
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold mb-3 text-blue-700">
                {service.title}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Our Process Flow for BI Services
        </h2>
        <ol className="space-y-6 max-w-3xl mx-auto list-decimal list-inside">
          <li>
            <span className="font-bold">Requirement Analysis:</span> Meetings
            with stakeholders to define business questions, data sources, and
            KPIs.
          </li>
          <li>
            <span className="font-bold">Data Collection:</span> Gather data from
            ERP, CRM, APIs, and other systems.
          </li>
          <li>
            <span className="font-bold">Data Cleaning & Preparation:</span>{" "}
            Remove duplicates, normalize fields, merge datasets.
          </li>
          <li>
            <span className="font-bold">Data Analysis & Exploration:</span> Use
            SQL, R, Python to identify patterns and insights.
          </li>
          <li>
            <span className="font-bold">Visualization & Reporting:</span>{" "}
            Create dashboards with Tableau, Power BI, QlikView.
          </li>
          <li>
            <span className="font-bold">Implementation & Training:</span>{" "}
            Deploy BI tools, integrate systems, train end-users.
          </li>
        </ol>
      </section>

      {/* Industries */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Industries We Empower with Advanced BI
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
          {[
            "Telecom",
            "Media & Entertainment",
            "Travel & Hospitality",
            "Hotel Management",
            "Aerospace",
            "Banking & Financial Services",
            "Sports",
            "Education",
            "Healthcare",
            "Fashion",
            "Insurance",
            "Retail",
            "Manufacturing",
            "Oil & Gas",
            "Logistics & Transportation",
            "Public Services",
            "Gaming",
          ].map((industry, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-3 text-center bg-white hover:shadow"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Benefits of Choosing Us as Your BI Service Provider
        </h2>
        <ul className="list-disc list-inside space-y-2 max-w-3xl mx-auto text-gray-700">
          <li>Unified Data Integration from CRM, ERP, and cloud sources</li>
          <li>AI-Powered Insights and Augmented Analytics</li>
          <li>Customizable Reporting and Automated Alerts</li>
          <li>End-to-End Managed Services with proactive monitoring</li>
          <li>Expert Consulting and Strategic Advisory</li>
          <li>Modern Data Analytics for strategy formulation</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 p-10 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Nimble Business Intelligence Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-700">
          Business intelligence services have become indispensable in the
          modern-day business scenario. By analyzing the data and aiding in
          meaningful insights, we provide the right solutions for your current
          business condition. Reach out to us today to maintain data quality,
          ensure consistency, and derive meaningful insights from your data
          assets.
        </p>
        <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default BusinessIntelligencePage;
