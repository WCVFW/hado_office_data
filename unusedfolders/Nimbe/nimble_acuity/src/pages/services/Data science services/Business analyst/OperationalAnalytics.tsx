import React from "react";
import DSMainMenu from "../mainmenu";

const OperationalAnalytics: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Operational Analytics Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Use our operational analytics expertise to optimize asset performance,
          lower maintenance costs, and transform your business operations.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Our operational analytics services focus on enhancing business
          operations by leveraging data mining and aggregation tools. With
          certified experts and secure environments, we deliver custom solutions
          tailored to your needs while ensuring data confidentiality.
        </p>
        <p>
          At Nimble Acuity, we help clients across India, UK, North America, and APAC
          realize the full potential of their analytical initiatives. With
          decades of experience, we’ve partnered with Fortune 1000 companies to
          deliver exceptional results.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Operational Analytics Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Predictive Operational Analytics",
              desc: "We combine machine learning and data mining for predictions to drive decision-making, fraud detection, campaign optimization, risk analysis, and operational improvements.",
            },
            {
              title: "Demand and Sales Analytics",
              desc: "Leverage AI-based prediction models for demand forecasting, inventory management, and targeted campaigns, boosting customer satisfaction and ROI.",
            },
            {
              title: "HR Analytics",
              desc: "Design predictive models for workforce analytics, attrition, compensation, and employee performance, enabling better recruitment and process streamlining.",
            },
            {
              title: "Finance Analytics",
              desc: "Use real-time data to design predictive models for customer acquisition, retention, and improved services in the banking and financial sector.",
            },
            {
              title: "Contact Center Analytics",
              desc: "Analyze customer interactions across channels for staffing optimization, fraud prevention, customer loyalty, call forecasting, and text analytics.",
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

      {/* Benefits */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Transform Your Day-To-Day Analytics Processes Faster with Nimble Acuity
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Fix processes proactively and respond to urgent analytic questions
            quickly.
          </li>
          <li>
            Maximize real estate investments and adapt models to changing
            business needs.
          </li>
          <li>
            Improve distribution-center performance using all relevant data
            sources, including spreadsheets and cloud data.
          </li>
          <li>
            Leverage flexible analytics to increase process improvement and
            operational efficiency.
          </li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Artificial Intelligence Services",
              desc: "Automate and enhance processes using advanced AI technologies.",
            },
            {
              title: "AI-Driven Digital Transformation",
              desc: "Reimagine processes with AI to boost efficiency and scalability.",
            },
            {
              title: "Computer Vision Services",
              desc: "Use image and video analytics to automate and gain deeper insights.",
            },
            {
              title: "Cognitive Process Automation",
              desc: "Streamline complex processes through AI-powered cognitive automation.",
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

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Nimble Operational Analytics Services to Nimble Acuity?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc pl-6 text-gray-700">
          {[
            "Significant business value delivered through our expert analytics professionals.",
            "Exclusive predictive analytics framework to scale analytical maturity.",
            "Time-tested methodology for improving operational processes.",
            "Cutting-edge tools like SAS, R, SQL, Business Objects, Python, MATLAB, etc.",
            "Identify bottlenecks, streamline processes, and track improvements with dashboards.",
            "Reduce and manage costs while optimizing efficiency.",
          ].map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
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
                "Case Study on Document Processing Automation Platform Development",
              desc: "We built a big data platform for a banking firm to automate document processing quickly and efficiently.",
            },
            {
              title:
                "Case Study on Open Source Analytics Workbench Creation",
              desc: "We implemented an open-source analytics platform for a finance provider to manage structured and unstructured data.",
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

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Operational Analytics Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          We bring together production, asset management, supply chain, and
          procurement analytics to help you gain operational excellence. Unlock
          hidden insights and achieve real-time outcomes with Nimble Acuity.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default OperationalAnalytics;
