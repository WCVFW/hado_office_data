import React from "react";
import DSmainmenu from "../DSmainmenu";

const CloudDataManagement: React.FC = () => {
  const trends = [
    {
      title: "The Rise of the Enterprise Cloud",
      desc: "Enterprise cloud will evolve into a common suite of design, management, reporting, and provisioning tools controlling hybrid clouds, enabling each service to be hosted and managed on the most appropriate platform.",
    },
    {
      title: "Cloud Architecture Will Change",
      desc: "Migrating data to the cloud requires advanced IT skills. Public cloud services will offer standard building blocks that need integration rather than unique configuration.",
    },
    {
      title: "Data will be the New Currency",
      desc: "With massive amounts of data driving business operations, data has become the most valuable asset, transforming business models and technology strategies.",
    },
    {
      title: "New Technologies Will Become Standard",
      desc: "Emerging cloud-based technologies will dominate the industry as their business value increases, moving from niche solutions to mainstream adoption.",
    },
    {
      title: "Machine Learning for Big Data",
      desc: "Machine learning enables intelligent storage and analysis of cloud data, offering faster, cost-effective, and accurate extraction of insights for business decision-making.",
    },
    {
      title: "Increase in Investments for Cloud Security",
      desc: "Security remains a top concern for cloud adoption. Businesses will continue investing in IT security, with around 82% of companies prioritizing security in their spending.",
    },
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const providers = [
    "GoDaddy", "ORACLE CLOUD", "CloudSigma", "1&1", "Google Cloud Platform",
    "HYVE", "IBM Cloud", "Rackspace", "RedHat", "Verizon", "VMware",
    "Amazon", "Microsoft Azure", "DigitalOcean"
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-10 space-y-12">
      {/* Header */}
      <DSmainmenu/>
      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-600">
          Cloud Data Management Trends to Watch Out For
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Cloud data management is transforming how businesses handle data. With in-memory databases, streaming, and multi-tenant databases, cloud solutions are faster, scalable, and more efficient than traditional on-premise software.
        </p>
      </header>

      {/* Trends Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          6 Latest Cloud Data Management Trends for 2018
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map((trend) => (
            <div
              key={trend.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{trend.title}</h3>
              <p className="text-gray-700">{trend.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 grid sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Providers Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Top 14 Cloud Data Management Service Providers
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {providers.map((provider) => (
            <div key={provider} className="bg-white p-4 rounded-lg shadow hover:shadow-lg text-center">
              <p className="text-gray-800 font-medium">{provider}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 p-8 sm:p-12 rounded-xl text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-600">
          Need Best Data Management Services? Hire Us!
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Nimble Auity offers reliable, quick, and efficient cloud-based data management services. Focus on your core activities while we ensure high data accuracy, security, and timely delivery.
        </p>
        <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
          Get in Touch Now
        </button>
      </section>
    </div>
  );
};

export default CloudDataManagement;
