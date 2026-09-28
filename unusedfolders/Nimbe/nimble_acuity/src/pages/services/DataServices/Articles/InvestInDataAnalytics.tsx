import React from "react";
import DSmainmenu from "../DSmainmenu";

const InvestInDataAnalytics: React.FC = () => {
  const reasons = [
    {
      title: "Helps You Engage Better with Customers",
      desc: "Data analysis helps identify trends in client needs, buying habits, and social behavior, enabling better engagement and targeted services.",
    },
    {
      title: "Incorrect Data Can Cost Your Business",
      desc: "Accurate data is critical for analysis and decision making. Data analytics ensures data quality and avoids costly errors.",
    },
    {
      title: "Your Competitors are Already Investing in Data Analytics",
      desc: "75% of companies have invested or plan to invest in data analytics. Staying ahead requires leveraging data to compete effectively.",
    },
    {
      title: "Can Help You Speed Up Your Firm's Operations",
      desc: "Data analytics streamlines reporting, forecasting, and decision making, improving operational efficiency.",
    },
    {
      title: "Will Make Your Company More Secure",
      desc: "Analytics can detect fraud, threats, and anomalies, protecting organizational data from breaches and suspicious activities.",
    },
    {
      title: "Cloud-based Solutions Will Reduce your Costs",
      desc: "Cloud solutions enable storage and processing of large data sets without heavy hardware investment, reducing operational costs.",
    },
    {
      title: "Help You Find New Business Opportunities",
      desc: "Data analytics identifies new products, services, and market opportunities, enabling growth and innovation.",
    },
    {
      title: "Easily Personalize Services for Customers",
      desc: "Segregate customers based on preferences and interests to deliver personalized services, improving satisfaction and loyalty.",
    },
    {
      title: "You Can Monetize Data",
      desc: "Maximize economic benefits from data by collaborating with external sources, partners, suppliers, and customers.",
    },
    {
      title: "Aids to Create a Smarter Company",
      desc: "Use data-driven insights to make efficient decisions across functions, building a smarter, agile organization.",
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
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          10 Signs You Should Invest in Data Analytics
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Global data volumes are growing exponentially, and businesses need analytics to leverage insights, stay competitive, and optimize operations.
        </p>
      </header>

      {/* Reasons Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          10 Key Reasons to Invest in Data Analytics
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-8 grid sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
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

      {/* CTA Section */}
      <section className="bg-indigo-50 p-8 sm:p-12 rounded-xl text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Partner with Nimble Auity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Nimble Auity is a leading data analytics service provider with 26+ years of multi-domain experience. Our skilled data analysts use the latest tools and technologies to deliver top-quality analytics services with quick turnaround times.
        </p>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Investment in data analytics is smart. Choosing Nimble is smarter. Make your data work for you and transform your business operations.
        </p>
        <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default InvestInDataAnalytics;
