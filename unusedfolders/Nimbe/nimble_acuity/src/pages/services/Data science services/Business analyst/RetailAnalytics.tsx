import React from "react";
import DSMainMenu from "../mainmenu";

const RetailAnalytics: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Retail Analytics Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Enhance your retail business with insightful data sets and
          state-of-the-art technologies. Drive personalized shopping experiences,
          inventory management, and more.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          The retail industry is an indispensable sector that keeps the enterprise
          world running. The importance of the retail industry demands leveraging
          and interpreting big data for success and sustainability. We provide
          comprehensive retail analytics services designed to reinforce businesses
          with insights, enhance customer experience, and optimize operations.
        </p>
        <p>
          Our services allow your business to harness progressive retail data
          analysis and transform raw data into actionable strategies. With AI,
          machine learning, and advanced statistical methods, we deliver
          in-depth insights that empower smarter decisions.
        </p>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title:
                "Case Study on Digital Transformation to an African Automotive Firm",
              desc: "We empowered a leading African automotive firm with end-to-end digital transformation using RPA, delivering cost-effective services.",
            },
            {
              title:
                "Case Study on Open Source Analytics Workbench Creation",
              desc: "We developed a big data-based platform for a banking organization, automating document processing and minimizing operational costs.",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
              <button className="mt-4 text-blue-700 font-semibold hover:underline">
                Read the case study →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Our Range of Retail Analytics Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Range of Retail Analytics Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Customer Behavior Analytics",
              points: [
                "Enhances Customer Segmentation",
                "Accurate Prediction of Emerging Trends",
              ],
            },
            {
              title: "Sales Performance Analytics",
              points: [
                "Real-Time Sales Monitoring",
                "Identify Growth Opportunities",
              ],
            },
            {
              title: "Inventory Optimization",
              points: [
                "Data-Driven Inventory Management",
                "Predictive Analytics for Supply Chain",
              ],
            },
            {
              title: "Market Basket Analysis",
              points: [
                "Advanced Product Pairings and Cross-Selling Algorithms",
                "Strategic Product Placements and Purchase Combinations",
              ],
            },
            {
              title: "Demand Forecasting",
              points: [
                "Accurate Forecast Through ML Algorithms",
                "Analyze Sales History to Predict Future Demands",
              ],
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {service.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Seamless Process Flow */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Seamless Process Flow of Our Retail Analytics Services
        </h2>
        <ol className="space-y-6 max-w-5xl mx-auto text-gray-700">
          {[
            "Comprehensive Data Harvesting and Ingestion – Gather multi-source datasets with advanced scraping techniques for complete analytics.",
            "Sophisticated Data Warehousing and ETL Processes – Transform and store data in secure, scalable warehouses for analytical readiness.",
            "Predictive Modelling and Machine Learning Deployment – Build ML models to forecast retail trends and support strategic planning.",
            "Granular Segmentation and Cohort Analysis – Uncover detailed customer behavior patterns for hyper-targeted marketing.",
            "Dynamic Dashboard Creation and KPI Benchmarking – Intuitive dashboards with real-time KPI tracking for quick decision-making.",
            "Actionable Insights Delivery and Strategic Feedback Loop – Deliver insights with a feedback loop for continuous improvement.",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="text-blue-900 font-bold">{String(idx + 1).padStart(2, "0")}.</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Proficient Tools */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Proficient Tools We Offer
        </h2>
        <p className="text-center text-gray-700">
          Tableau • SAS Retail Analytics
        </p>
      </section>

      {/* Clients */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Clients We Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-center text-gray-700">
          {[
            "Supermarkets and Grocery",
            "Fashion and Apparel Retailers",
            "Electronics and Appliance Stores",
            "Home Improvement and DIY Stores",
            "Health and Beauty Retailers",
            "Department Stores",
            "Sporting Goods Retailers",
            "E-commerce Platforms",
          ].map((client, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Business Analytics Services",
              desc: "Transform complex datasets into strategic insights that drive efficiency and competitive edge.",
            },
            {
              title: "Data Analytics Services",
              desc: "Use advanced data mining techniques to maximize value and improve performance metrics.",
            },
            {
              title: "Predictive Modeling Services",
              desc: "Employ algorithms to forecast trends, understand behaviors, and reduce uncertainties.",
            },
            {
              title: "Statistical Data Analysis Services",
              desc: "Uncover intricate patterns and correlations that improve operational outcomes.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Recommended Reading Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Predictive Market Research - What Does the Future Look Like?",
              desc: "Understand the future of business operations by leveraging predictive market research.",
            },
            {
              title: "Pros and Cons of Outsourcing Data Science Services",
              desc: "Discover the pros and cons of outsourcing data science and how it benefits businesses.",
            },
          ].map((resource, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.desc}</p>
              <button className="mt-4 text-blue-700 font-semibold hover:underline">
                Read the article →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Retail Analytics Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Our retail analytics solutions convert complex data into strategies
          that empower your business with precision and agility. Partner with us
          today to implement AI-driven frameworks, improve efficiency, and boost
          profitability.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default RetailAnalytics;
