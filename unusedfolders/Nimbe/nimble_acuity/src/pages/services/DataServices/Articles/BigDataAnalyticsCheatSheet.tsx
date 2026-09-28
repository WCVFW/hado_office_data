import React from "react";
import DSmainmenu from "../DSmainmenu";

const BigDataAnalyticsCheatSheet: React.FC = () => {
  return (
    <div><DSmainmenu/>
    <div className="max-w-7xl mx-auto p-6 sm:p-10">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
        The Ultimate Cheat Sheet on Big Data Analytics
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 mb-6">
        Did you know that by 2020 about 1.7 MB of new data will be created every second per human being on the planet?
      </p>

      <p className="text-gray-700 mb-6">
        We know that data volumes have exploded in the past few years and are being generated like never before. We are just at the beginning of a revolution that will touch every business and affect each individual, yet many businesses are still ignoring the benefits of big data analytics. It's high time that businesses educate themselves about big data and leverage it in their operations.
      </p>

      <p className="text-gray-700 mb-6">
        Companies must find practical ways to use big data to surpass their competitors and learn new ways to capture and analyze growing data about products, services, and customers. The new data sources include sensors, personal devices, machines, social sites, website interaction, etc., which can be used to source information for analysis. Read the detailed cheat sheet on big data analytics below.
      </p>

      {/* 3 Vs */}
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">The 3 Vs of Big Data</h2>
        <p className="text-gray-700 mb-4">
          Big data allows organizations to store, manage, analyze, and manipulate large volumes of data at the right speed and at the right time. To obtain the right insights using big data, it is broken down into three major characteristics:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Volume:</strong> Refers to the massively increasing amount of data, which is growing at a rapid rate.</li>
          <li><strong>Velocity:</strong> Refers to the rapid response or the movement of information in and out of the system.</li>
          <li><strong>Variety:</strong> Refers to the huge differences in the types or sources of data encountered during the data analysis.</li>
        </ul>
      </section>

      {/* 3 Layers */}
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">The Three Layers of Big Data Technologies</h2>
        <p className="text-gray-700 mb-4">
          It is important that business organizations understand the concept of big data and use it for their benefit in the best possible manner. Generally, there are three layers of big data technologies:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Infrastructure:</strong> This layer comprises the infrastructure needed to integrate and store data. Data may come in different formats and need careful integration.</li>
          <li><strong>Analytics Engine:</strong> This layer comprises a powerful processor that processes all the data. High volumes and high-speed requirements have driven the need for advanced analytics engines.</li>
          <li><strong>Visualization Tools:</strong> This layer comprises visualization and big data analytics tools for users to explore and communicate data intuitively.</li>
        </ul>
      </section>

      {/* Why Companies Need */}
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">Why Companies Need Big Data Analytics</h2>
        <p className="text-gray-700 mb-4">
          Achieving organizational and financial goals is the hardest part of any business. Big data analytics can be leveraged to achieve this. Key reasons include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Better Decision Making:</strong> Big data analytics improves decision-making, discovers new insights, optimizes processes, promotes innovation, and enables timely decisions.</li>
          <li><strong>Provides Customer Insights:</strong> It provides insights into customers and measures their satisfaction with products and services.</li>
          <li><strong>Real-time Feature:</strong> Real-time data enables quick decisions and allows personalization of websites according to customer preferences.</li>
        </ul>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 rounded-lg p-6 mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
        <div>
          <h3 className="text-2xl font-bold text-indigo-600">40%</h3>
          <p className="text-gray-700">Cost Reduction</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-indigo-600">8-24 Hrs</h3>
          <p className="text-gray-700">Faster Turnaround</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-indigo-600">500+</h3>
          <p className="text-gray-700">Satisfied Clients</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-indigo-600">350+</h3>
          <p className="text-gray-700">Skilled Data Experts</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-indigo-600">99%</h3>
          <p className="text-gray-700">Accuracy</p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h3 className="text-2xl font-bold text-indigo-600">21</h3>
          <p className="text-gray-700">Years Experience</p>
        </div>
      </section>

      {/* Future */}
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">The Future of Big Data Analytics</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Data volumes will continue to grow exponentially with the increase of connected devices.</li>
          <li>The number of analytics tools will grow and continue to improve.</li>
          <li>Machine learning will dominate big data analytics, essential for preparation and predictive analysis.</li>
          <li>Security and privacy concerns will remain a major challenge.</li>
          <li>More companies will form dedicated big data teams led by Chief Data Officers.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-50 p-6 sm:p-10 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Nimble Auity to Leverage Big Data Analytics</h2>
        <p className="text-gray-700 mb-4">
          Nimble Auity is a leading data management service provider to global clients for over 26+ years. With rich multi-domain experience, we handle any big data challenge and provide top-quality analytics solutions with quick turnaround.
        </p>
        <p className="text-gray-700 mb-6">
          Partnering with Nimble gives you access to state-of-the-art infrastructure, cutting-edge technologies, latest trends, and a skilled workforce at highly affordable prices.
        </p>
        <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
          Get in Touch Today
        </button>
      </section>
    </div>
    </div>
  );
};

export default BigDataAnalyticsCheatSheet;
