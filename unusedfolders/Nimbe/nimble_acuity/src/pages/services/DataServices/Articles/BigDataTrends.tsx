import React from "react";
import DSmainmenu from "../DSmainmenu";

const BigDataTrends: React.FC = () => {
  const trends = [
    {
      title: "More Amount of Localized Data",
      desc: "Large amounts of data will be stored locally due to increasing privacy laws. Countries like Russia and China have already enforced localization laws, and others are expected to follow.",
    },
    {
      title: "Data Monetization Will be Difficult",
      desc: "While opportunities exist, businesses will struggle to create meaningful products. Success will require strict IT strategies including acquisition, transformation, storage, analytics, and security.",
    },
    {
      title: "Predictive Analysis to Rise",
      desc: "Marketers can now track client journeys and analyze requirements. Data lakes will grow smarter, enabling better decision-making from massive datasets.",
    },
    {
      title: "Faster Databases Will be in Demand",
      desc: "Cloud innovations like Amazon Athena make analytics easier. Companies are shifting to faster databases such as MemSQL, Kudu, and Exasol.",
    },
    {
      title: "The Demand for IoT Architecture Will Soar",
      desc: "With IoT expected to reach $1.46 trillion by 2020, demand for skilled IoT specialists and architects designing both central and distributed analytics will surge.",
    },
    {
      title: "Streaming Analytics Will Make a Comeback",
      desc: "Real-time event processing is expanding from niche use to mainstream. IoT growth will fuel demand for streaming apps that analyze and respond instantly.",
    },
    {
      title: "Machine Learning Will be of Great Help",
      desc: "Machine learning will detect inconsistencies, predict risks, and combine with micro-services to unlock insights from historical and streaming data.",
    },
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-10 space-y-12">
      {/* Header */}
      <DSmainmenu/>
      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-green-600">
          7 Big Data Predictions You May be Interested In
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Big data is transforming industries worldwide. From analytics to IoT and machine learning, here are the major trends shaping the future of big data.
        </p>
      </header>

      {/* Trends */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Big Data Trends to Watch
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-indigo-50 to-green-50 rounded-xl p-8 grid sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-indigo-600 mb-1">{stat.value}</h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 p-8 sm:p-12 rounded-xl text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-green-600">
          We Can Help Leverage Big Data and Improve Business ROI
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Nimble Auity provides cutting-edge big data analytics services across industries including travel, finance, telecom, retail, insurance, manufacturing, and healthcare. Our expert analysts use advanced infrastructure and techniques to extract meaningful insights, reduce costs, and accelerate ROI.
        </p>
        <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default BigDataTrends;
