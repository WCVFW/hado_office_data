import React from "react";
import DSMainMenu from "../mainmenu";

const AiVsDoctors: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-16">
        <DSMainMenu/>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Can AI Beat Doctors in Disease Identification?
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-8">
          According to Frost & Sullivan, the market for Artificial Intelligence
          (AI) in healthcare was projected to cross $6.6 billion USD by 2021.
          AI promises to cut treatment costs by up to 50% and improve clinical
          outcomes by 40%. With machine learning (ML) aiding diagnosis and image
          analysis, AI is set to transform healthcare—but the journey is complex.
        </p>

        {/* Future of AI */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Future of Artificial Intelligence in Healthcare
        </h2>
        <p className="text-gray-700 mb-6">
          From chest x-rays to predicting abnormalities, deep learning models
          assist in diagnosis and treatment recommendations. AI in dermatology
          has already proven effective, diagnosing 95% of skin cancers compared
          to 86.6% by experienced dermatologists, showcasing its immense
          potential.
        </p>

        {/* Ways AI is Used */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ways AI in Healthcare is Being Used
        </h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-3 mb-8">
          <li>
            <strong>Personalized and Predictive Medicine:</strong> Tailored
            treatments based on patient data.
          </li>
          <li>
            <strong>Prevention of Mistakes:</strong> Pattern recognition helps
            reduce human errors in medical practice.
          </li>
          <li>
            <strong>Early Detection:</strong> AI algorithms identify symptoms
            and detect diseases in real-time with minimal error.
          </li>
        </ul>

        {/* Data & Pathology */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Making the Most with Data and Images
        </h2>
        <p className="text-gray-700 mb-6">
          AI-driven image analysis is helping radiologists detect diseases,
          analyze pathology, and reduce costs. McKinsey reports that AI and big
          data could save pharma companies $100 billion annually by improving
          decision-making and treatment precision.
        </p>

        {/* Developments */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Developments in AI for Healthcare
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
          <li>
            Early detection of dementia and Alzheimer’s through ML algorithms.
          </li>
          <li>
            Collaboration between healthcare professionals and AI innovators for
            accurate diagnoses.
          </li>
          <li>
            AI-driven DNA analysis by companies like Sophia Genetics.
          </li>
          <li>
            Mobile apps predicting concussions, jaundice, and lung function.
          </li>
          <li>
            AI predicting and preventing heart attacks through enhanced
            monitoring.
          </li>
        </ul>

        {/* Accuracy */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Accuracy of AI in Disease Identification
        </h2>
        <p className="text-gray-700 mb-6">
          Human-machine collaboration has achieved up to{" "}
          <strong>99.5% accuracy</strong> in cancer diagnosis (Harvard study,
          2016). AI-enabled systems using convolutional neural networks can
          differentiate normal cells from cancerous ones, making diagnosis more
          precise and timely.
        </p>

        {/* Replacement Debate */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Would AI Replace Doctors?
        </h2>
        <p className="text-gray-700 mb-6">
          While AI assists with surgeries, x-rays, CT scans, and automated
          diagnostics, it cannot replace the human element in healthcare. AI
          processes data faster, but collaboration—not competition—between
          doctors and AI is the key to better outcomes.
        </p>

        {/* Verdict */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          The Verdict
        </h2>
        <p className="text-gray-700 mb-6">
          Yes, AI can outperform doctors in specific diagnostic tasks—but it
          requires government approval, large datasets, and strong data science
          expertise. AI is a partner, not a replacement, helping physicians
          deliver better, faster, and more accurate care.
        </p>

        {/* Nimble Acuity Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Partner with Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            With 26+ years of experience, Nimble Acuity develops custom AI and
            data science solutions for healthcare. Our experts in deep learning,
            machine learning, and AI collaborate with healthcare professionals
            to create robust, intuitive systems.
          </p>
          <p className="text-gray-700 mb-4">
            We prioritize security through NDAs, encrypted data transfers, and
            real-time monitoring. Let us help you leverage AI to transform your
            healthcare business.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AiVsDoctors;
