import React from "react";
import CSmainmenu from "../CSmainmenu";

const TextEditingProofreading: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Text Editing and Proofreading Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Elevate your manuscripts with professional editing and proofreading services that ensure readability, accuracy, and marketability.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Text Editing and Proofreading Services
        </h2>
        <p className="mb-6">
          Writing an article is the beginning, but the challenge lies in giving it the readability and marketability factor. 
          Regardless of the genre, writers often face content fatigue, grammatical errors, and textual inconsistencies. 
          Nimble Auity offers professional text editing and proofreading services where our editorial team carefully 
          sanitizes manuscripts for grammar, structure, and flow — radically transforming them.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Text Editing and Proofreading Services We Offer</h2>
          <p className="mb-6">
            Our services are flexible and can be customized to your needs. Whether per word or per article, 
            we ensure high-quality, error-free content. We handle:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-xl shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Editorial Proofreading Services</h3>
              <p>
                Nimble Auity offers comprehensive proofreading for writers across industries. 
                We handle multiple subjects and ensure documents are grammatically perfect, 
                polished, and publication-ready.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Content Editing Services</h3>
              <p>
                Nimble’s content editing helps businesses and individuals enhance clarity, 
                precision, and professionalism. Our goal is to develop content that is 
                error-free and captivating to readers or publishers.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Rewriting Services</h3>
              <p>
                Nimble provides rewriting services to improve clarity, coherence, and readability. 
                We simplify and realign content while maintaining originality and value for your audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Define Need – Scope of editing and proofreading projects</li>
          <li>Present Sample – Free sample provided for approval</li>
          <li>Create Style Guide – Based on feedback</li>
          <li>Fix Timelines, SLA, and Cost – Team setup and schedules</li>
          <li>Execute Final – Work on defined style guide</li>
          <li>Quality Check – Verified by team before sign-off</li>
          <li>Upload Documents – Delivered in client’s preferred format</li>
        </ol>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Nimble Auity?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Save Time and Money with efficient editing services</li>
            <li>Highly qualified editors from reputed academic backgrounds</li>
            <li>Exceptional language skills for professional, polished writing</li>
            <li>Audience-focused content free of jargon and errors</li>
            <li>Strengthened conceptual clarity and consistency</li>
            <li>Value addition by enhancing readability and emphasis</li>
            <li>Original, unique, and accurate editing with an eye for detail</li>
          </ul>
        </div>
      </div>

      {/* Closing Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Choose Nimble Auity for Accurate Text Editing and Proofreading
        </h2>
        <p className="mb-6">
          With Nimble, you’re assured of flawless manuscripts with enhanced vocabulary, corrected grammar, 
          and refined clarity. Our editors review from the reader’s perspective to ensure your message is 
          impactful and professional. Contact Nimble today for text editing and proofreading that goes beyond expectations.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default TextEditingProofreading;
