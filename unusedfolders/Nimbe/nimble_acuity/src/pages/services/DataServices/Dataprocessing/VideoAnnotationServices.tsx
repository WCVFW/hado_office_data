import React from "react";
import DSmainmenu from "../DSmainmenu";

const VideoAnnotationServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Video Annotation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Accurately label and define elements in diverse video formats with Nimble Auity’s video annotation services for AIML model training and actionable insights.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get a Free Quote
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Custom Video Annotation Solutions</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Object Tracking",
              desc: "Continuous object trajectory monitoring, dynamic interaction analysis, enhances surveillance and logistics precision.",
            },
            {
              title: "Semantic Segmentation",
              desc: "Pixel-level object classification, detailed scene context understanding, supports autonomous systems.",
            },
            {
              title: "Action Annotation",
              desc: "Precise labeling of specific actions, boosts behavior analysis accuracy, improves customer interaction insights.",
            },
            {
              title: "Event Annotation",
              desc: "Key incident detection and tagging, facilitates quick incident analysis, improves security response.",
            },
            {
              title: "Facial Recognition Annotation",
              desc: "Detailed facial feature labeling, bolsters recognition system accuracy, essential for security and personalization.",
            },
            {
              title: "Pose Estimation Annotation",
              desc: "Key body point marking, analyzes human and animal poses, supports health and fitness applications.",
            },
            {
              title: "Scene Change Detection",
              desc: "Scene transition identification, streamlines content management, aids in editing and curation.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h3 className="font-semibold mb-2 text-teal-600">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-50 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Tool Competencies</h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700 font-medium">
          <span className="bg-white px-6 py-3 rounded-full shadow hover:shadow-lg transition">CVAT</span>
          <span className="bg-white px-6 py-3 rounded-full shadow hover:shadow-lg transition">SuperAnnotate</span>
          <span className="bg-white px-6 py-3 rounded-full shadow hover:shadow-lg transition">Scale AI</span>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          (Disclaimer: Tools usage follows Nimble Auity practices. We do not officially endorse these tools.)
        </p>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Sets Nimble Auity Apart?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Performance Metrics Dashboard for real-time monitoring",
            "NLP-enhanced annotations for semantic context",
            "Advanced collaboration environment for stakeholders",
            "Cloud-native solutions for scalability and accessibility",
            "Predictive analytics integration for workflow optimization",
            "Regular regulatory compliance audits",
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Services You Can Benefit From</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {["Data Conversion Services", "Advanced OCR Services", "Data Processing Services", "Online Catalog Management Services"].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <blockquote className="bg-white p-8 rounded-xl shadow-lg text-gray-700 italic">
          “We were very satisfied with the quality-of-service Nimble Auity provided. They were able to meet our requests with great professionalism and flexibility. We look forward to having your team fulfill future projects for us.”
          <cite className="block mt-4 font-semibold not-italic">Spokesperson, Online Health Lessons Company, Canada</cite>
        </blockquote>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Visual Search & Image Recognition Company</h3>
            <p>Annotation & bounding box services to create and store accurately annotated datasets for improved machine learning model performance.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Leading Skin Cream Manufacturer</h3>
            <p>Delivered high-quality image annotation services, enhancing data accuracy and improving AI/ML model outcomes.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Contact Nimble Auity
        </a>
      </section>
    </div>
  );
};

export default VideoAnnotationServices;
