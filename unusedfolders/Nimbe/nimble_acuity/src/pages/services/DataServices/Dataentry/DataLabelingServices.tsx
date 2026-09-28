import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataLabelingServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Data Labeling Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Manage large-scale, multi-dimensional datasets while implementing real-time data analytics and insights for personalized marketing strategies.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Nimble Acuity provides precise data labeling solutions across industries to enhance machine learning model performance. From text, image, audio, and video annotation to AI-specific labeling, we ensure accuracy and consistency while helping you focus on your core business.
        </p>
        <p>
          We leverage advanced tools and skilled annotators to deliver scalable, uniform, and high-quality labeling services.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Data Labeling and Annotation Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Data Annotation:</strong> Transform raw data into machine-learning-ready formats and enhance training effectiveness.</li>
          <li><strong>Data Classification Services:</strong> Organize data into categories for streamlined usage and better decision-making.</li>
          <li><strong>Text Sentiment Analysis:</strong> Decode textual sentiment for customer insights and reactions.</li>
          <li><strong>AI Data Labeling:</strong> Label data for AI applications to improve learning capabilities.</li>
          <li><strong>Image & Computer Vision Labeling:</strong> Annotate images and videos for recognition by machine learning models.</li>
          <li><strong>Google & GCP Data Labeling:</strong> Specialized labeling for Google's AI/ML and GCP applications.</li>
          <li><strong>NLP Labeling:</strong> Label text data for NLP models, enabling machine understanding of human language.</li>
        </ul>
      </section>

      {/* Platforms */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Data Labeling Platforms We Leverage
        </h2>
        <p className="text-gray-700">
          Our professionals are proficient with platforms including Amazon SageMaker Ground Truth, Labelbox, CloudFactory, Hive Data, Appen, Scale AI, SuperAnnotate. <em>(Disclaimer: Nimble Acuity does not endorse these brands.)</em>
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Us as Your Data Labeling Partner?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Reliable Label Consistency:</strong> Advanced annotation tools ensure uniformity and reduce model training time.</li>
          <li><strong>Increased Accuracy:</strong> AI-driven quality checks guarantee precise labeling for better model reliability.</li>
          <li><strong>Object Recognition Technology:</strong> Dynamic segmentation for accurate computer vision projects.</li>
          <li><strong>Seamless Data Integration:</strong> Optimized software accelerates video annotation and complex projects.</li>
          <li><strong>Easy Visual Training:</strong> High-precision visual labeling improves accuracy of visual data models.</li>
          <li><strong>Insightful Sentiment Analysis:</strong> Advanced NLP frameworks uncover nuanced customer emotions and insights.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Additional Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Data Engineering Services: Scalable data systems and ETL processes.</li>
          <li>Data Science Consulting: Predictive analytics systems and statistical modeling.</li>
          <li>Artificial Intelligence Services: Client-specific AI models for intelligent decision-making.</li>
          <li>Data Analytics Services: Advanced data visualization and business intelligence solutions.</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Case Studies
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Funding Company (US):</strong> Enhanced business closures with optimized data management services.</li>
          <li><strong>Leading IT Solutions Provider:</strong> Improved purchase order processing efficiency and accuracy.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Data Labeling Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Ensure accurate, consistent, and high-quality labeled data for your AI and ML models. Partner with us to enhance your machine learning processes and achieve superior results.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataLabelingServices;
