import React from "react";
import DSMainMenu from "../mainmenu";

const DocumentClassificationPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-3xl font-bold text-gray-900">
          Automated Document Classification and Indexing
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Maintain high accuracy in automatic document categorization and
          streamline workflow. We ensure consistency across all documents while
          lowering error-related costs.
        </p>

        {/* Dynamic Stats */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-4 bg-white rounded-2xl shadow">
            <p className="text-2xl font-bold text-blue-600">30%</p>
            <p className="text-sm text-gray-600">Increase in Productivity</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <p className="text-2xl font-bold text-blue-600">99%</p>
            <p className="text-sm text-gray-600">Classification Accuracy</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <p className="text-2xl font-bold text-blue-600">1,000+</p>
            <p className="text-sm text-gray-600">Successful Implementations</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We specialize in providing automated document classification and
          indexing services to clients across multiple industries. Our focus on
          precision enables you to retrieve information and enhance operational
          outcomes. We simplify complex business needs through tailor-made
          categorization and indexing to help you achieve accuracy, scalability,
          and security.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center">
            Our Comprehensive Automated Document Classification Solutions
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Classification Database Creation",
                points: [
                  "Tailored databases for specific business needs",
                  "Scalable solutions for growing data volumes",
                  "Seamless integration with existing systems",
                ],
              },
              {
                title: "Document Classification",
                points: [
                  "Machine learning for precise categorization",
                  "Support for multilingual documents",
                  "Customizable categories for diverse industries",
                ],
              },
              {
                title: "Processing Electronic PDF Files",
                points: [
                  "Efficient handling of large PDF volumes",
                  "Advanced OCR for text extraction",
                  "Conversion of PDFs into searchable formats",
                ],
              },
              {
                title: "File Naming & Classification",
                points: [
                  "Intelligent naming based on content analysis",
                  "Automated workflows reduce manual intervention",
                  "Consistent & standardized file organization",
                ],
              },
              {
                title: "Auto-discovery of Documents",
                points: [
                  "Identification & classification of hidden documents",
                  "Real-time indexing for accessibility",
                  "Enhanced data visibility & retrieval",
                ],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold">Tools We Use</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          {["Drango", "Hadoop", "MongoDB", "OCR", "Python"].map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-lg"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center">
            Why Choose Us as Your Document Classification Partner?
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Innovative Tech Integrations",
              "Real-time Data Availability",
              "360 Degree Data Insight",
              "Advanced Predictive Insights",
              "Effortless System Integration",
              "Scalable Solutions",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center">Case Studies</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title:
                "Nimble Acuity Helped Streamline Inventory Management for an Electronics Firm",
              desc: "The customer is a well-known electronics solutions provider with operations in 80+ countries and over 1M customers.",
            },
            {
              title:
                "Nimble Acuity Helped a Healthcare Provider with Chart Extraction Services",
              desc: "A California-based healthcare firm needed chart extraction support for Medicaid, Medicare Advantage, and ACA programs.",
            },
          ].map((cs, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{cs.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{cs.desc}</p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600 text-center text-white">
        <h2 className="text-2xl font-semibold">
          Achieve Higher Accuracy with Automated Document Classification
        </h2>
        <p className="mt-3 text-blue-100">
          Nimble document classification using machine learning to us and get
          results beyond traditional methods.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100">
          Get Your Personalized Quotation
        </button>
      </section>
    </div>
  );
};

export default DocumentClassificationPage;
