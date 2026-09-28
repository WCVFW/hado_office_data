import React from "react";
import DSmainmenu from "../DSmainmenu";

const HumanGestureAnnotation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Human Gesture Annotation Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Artificial Intelligence (AI) has made leaps forward. Collaborating with human intelligence is the key to building reliable AI systems. Nimble Auity provides specialized, high-quality, human gesture datasets for machine learning and AI solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Services We Offer</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Posture & Gesture Recognition</h3>
            <p className="text-gray-600">
              Improve AI and ML products with high-volume, accurate human gesture data.
            </p>
          </li>
          <li className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Semantic Text Annotation</h3>
            <p className="text-gray-600">
              Entity identification for sentiment analysis, data mining, and search applications.
            </p>
          </li>
          <li className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Time-stamped Transcription</h3>
            <p className="text-gray-600">
              Accurately describe image content to train machines for optimal results.
            </p>
          </li>
          <li className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Quality Training Material</h3>
            <p className="text-gray-600">
              Human-annotated data based on subjectivity and intent for machine learning.
            </p>
          </li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mb-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Nimble for Human Gesture Annotation?</h2>
        <ul className="space-y-4 text-gray-700 list-disc list-inside">
          <li>Access to global, enriched image libraries for high-quality data.</li>
          <li>Flexible pricing for proficient services at affordable rates.</li>
          <li>Enhanced data security and leak-proof labs.</li>
          <li>High-quality output ensured by trained resources and strict QA.</li>
          <li>State-of-the-art infrastructure and latest data annotation tools.</li>
          <li>Global delivery model with ISO-certified processes.</li>
        </ul>
      </section>

      {/* Stats Section */}
      <section className="mb-12 grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-indigo-600">40%</p>
          <p className="text-gray-600">Cost Reduction</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-indigo-600">8-24 Hrs</p>
          <p className="text-gray-600">Faster Turnaround</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-indigo-600">500+</p>
          <p className="text-gray-600">Satisfied Clients</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-indigo-600">350+</p>
          <p className="text-gray-600">Skilled Data Experts</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-indigo-600">99%</p>
          <p className="text-gray-600">Accuracy</p>
        </div>
      </section>

      {/* Contact Button */}
      <section className="text-center">
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default HumanGestureAnnotation;
