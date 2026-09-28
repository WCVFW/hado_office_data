import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MachineLearningConsulting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Machine Learning Consulting Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide highly advanced ML consulting services that help you design and implement machine learning solutions to address complex business problems and solve a variety of use cases.
            </p>
            <p className="text-lg text-gray-600 mt-2 font-medium">
              Prices start at $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to solve complex business issues by leveraging the full power of machine learning (ML)? Do you want to incorporate machine learning into various aspects of your business to automate digital experiences, improve operational efficiency, and enhance business value? If so, you can benefit significantly from our machine learning consulting services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading provider of machine learning consulting services with significant capabilities in this emerging field. We have a team of highly experienced and capable ML consultants who design and implement custom solutions after carefully analyzing our clients' business challenges and needs. If you have a lot of data and want to leverage it for optimal outcomes, we are the perfect partner for you. With our machine learning solutions—including asset health monitoring, predictive analytics, and customer analytics—we provide the tools you need to navigate complex data challenges and deploy machine learning across your enterprise.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Machine Learning Consulting Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nimble Acuity can help you obtain optimal outcomes from your machine learning investment. Our range of services includes:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>ML for Marketing and Sales:</strong> We provide solutions to help marketing and sales departments drive efficiency and productivity. This includes determining the most effective ads for individual viewers, alerting social media teams about positive or negative posts, and identifying sales leads most likely to convert.
              </li>
              <li>
                <strong>ML for Product Design and Strategy:</strong> Our ML capabilities can be leveraged to obtain data-driven customer segmentation, better identify regions with a strong need for your products, detect fraud, and automate discovery for litigation.
              </li>
              <li>
                <strong>ML for Talent Management:</strong> We help optimize your talent management and HR functions by analyzing your requirements to identify areas where ML solutions can be deployed. This can help with filtering prospective employees, identifying at-risk employees, and forecasting workforce demand.
              </li>
              <li>
                <strong>ML for Operations:</strong> We have significant experience helping clients design and deploy ML solutions that process huge amounts of data to identify areas for operational improvement. This can include automating common requests and testing proposed changes to verify and quantify the results.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nimble Acuity is a leading provider of machine learning consulting services, offering customized and expert solutions to address your exact requirements.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Experienced Team:</strong> We have a highly driven, qualified, and experienced team of ML and IT engineers who provide cutting-edge solutions.
              </li>
              <li>
                <strong>Affordable Services:</strong> We use streamlined processes and workflows to eliminate waste and inefficiencies, ensuring our world-class services are cost-effective.
              </li>
              <li>
                <strong>Customized Solutions:</strong> Our engineers work closely with you to understand your business and identify where ML can be leveraged to drive value.
              </li>
              <li>
                <strong>Fast Turnaround:</strong> We provide our services on timelines that are the fastest in the industry without compromising on quality.
              </li>
              <li>
                <strong>Multi-domain Experience:</strong> Our team is highly proficient in many areas of machine learning, ensuring we can provide a comprehensive range of solutions.
              </li>
              <li>
                <strong>Data Security:</strong> As a premier firm, we handle your data with the strictest regard for security.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Innovate with Machine Learning?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading machine learning consulting firm that has catered to clients from across industries and the world. When you work with us, you get access to a wide pool of certified machine learning specialists with significant experience in specialized niches like deep learning, data mining, and predictive analytics.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We offer transparent, cost-effective pricing. Simply get in touch with us, and we will be happy to understand your requirements and provide you with a custom and highly competitive quote.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachineLearningConsulting;