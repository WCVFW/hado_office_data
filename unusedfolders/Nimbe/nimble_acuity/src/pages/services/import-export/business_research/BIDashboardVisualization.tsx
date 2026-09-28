import React from "react";
import NavigationMenu from "../MegaMenu";

const BIDashboardVisualization: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nimble Business Intelligence Dashboard Visualization Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Smarter BI dashboards that streamline your data visualization process,
          enabling informed decision-making and business growth.
        </p>
      </section>

      {/* Intro Section */}
      <section className="bg-white shadow-sm border rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Business Intelligence Dashboard Visualization Services
        </h2>
        <p className="text-gray-600 mb-4">
          At Nimble Acuity, we design intuitive BI dashboards that help you
          organize goals, enhance data presentation, and make better decisions.
          With expertise in big data and visualization, our dashboards are
          tailored to your evolving business needs.
        </p>
        <p className="text-gray-600">
          We provide concise, secure, and cost-effective dashboards with
          attractive visuals, ensuring your company’s data is represented clearly
          and effectively.
        </p>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Nimble Acuity's Business Intelligence Dashboard Visualization Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            "Marketing Dashboards",
            "Performance Dashboards",
            "Metrics Dashboards",
            "Business Analytics Dashboards",
            "Executive Dashboards",
            "KPI's Dashboards",
            "Sales Dashboards",
            "Operational Dashboards",
            "Business Research Dashboards"
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-medium text-gray-800 text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Benefits of Nimble Acuity's BI Dashboard Visualization Services
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 list-disc pl-6">
          <li>Custom BI dashboards tailored to client needs or industry standards</li>
          <li>Backend database connectivity with modern visualization tools</li>
          <li>Redesign and upgrade of existing BI dashboards</li>
          <li>Collaborative tools for all levels of your organization</li>
          <li>Stunning visuals with QlikView and Tableau expertise</li>
          <li>Flexible features – mobile access, PDF export, cloud sharing</li>
          <li>Monitor project performance, billing forecasts, and resource allocation</li>
          <li>Adaptive API features for diverse data sources (Excel, DBs, PDFs)</li>
          <li>Advanced infographics – tables, bar graphs, charts, gauges, and more</li>
        </ul>
      </section>

      {/* Why Choose Nimble Acuity Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Choose Nimble Acuity for Professional BI Dashboard Visualization Services
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-6">
          We are a leading provider of BI dashboard visualization services with
          expertise in creating engaging, intuitive dashboards that handle large
          amounts of data. From line charts to gauges, we ensure data is
          represented in the most concise and impactful way possible.
        </p>
        <div className="bg-white border rounded-2xl shadow-sm p-6 inline-block">
          <p className="text-gray-700 font-medium">
            Looking for a reliable, efficient, and cost-effective BI dashboard
            service provider? <br /> Get in touch with us today!
          </p>
        </div>
      </section>
    </div>
  );
};

export default BIDashboardVisualization;
