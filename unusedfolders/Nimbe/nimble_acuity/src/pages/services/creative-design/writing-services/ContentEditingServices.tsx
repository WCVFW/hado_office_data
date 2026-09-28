import React from "react";
import CSmainmenu from "../CSmainmenu";

const ContentEditingServices: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Content Editing Services</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Perfect your manuscripts, business documents, and digital content with
          Nimble Auity’s professional content editing services.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">Content Editing Services</h2>
        <p className="mb-6">
          Writers often struggle to spot mistakes in their own work. After
          spending hours developing content, the subconscious mind tends to skip
          common errors. This is where experienced editors step in. Editing is
          refining a document until it becomes the best possible version for the
          reader or publisher. At Nimble Auity, we provide professional content
          editing services for everything from simple marketing collaterals to
          complex fiction novels. Our editors ensure your ideas are presented
          effectively, clearly, and ready for publishing.
        </p>
      </div>

      {/* Services */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Content Editing Services We Offer
          </h2>
          <p className="mb-6">
            Our editing services are flexible and can accommodate projects on a
            per word or per article model. We handle:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Newsprint Content Editing Services –</strong> Nimble Auity
                edits articles across diverse subjects to make them newsworthy for
                newsletters and magazines.
              </li>
              <li>
                <strong>Business Content Editing Services –</strong> We specialize
                in business writing and edit brochures, catalogues, proposals, and
                correspondences using the right tone for engagement.
              </li>
              <li>
                <strong>Technical & Commercial Content Editing –</strong> Our
                editorial team produces flawless manuals, technical documents, and
                commercial assignments like job applications and advertisements.
              </li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Book Content Editing Services –</strong> From fiction to
                biographies, we perfect grammar, punctuation, and spelling for
                large-scale editing projects.
              </li>
              <li>
                <strong>Academic & Research Editing –</strong> We edit research
                papers, essays, and reference books with the help of SMEs and
                quality analysts.
              </li>
              <li>
                <strong>Digital Content Editing –</strong> Editing for websites,
                SEO, blogs, articles, and social media platforms to suit online
                audiences.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Our Content Editing Process</h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>Client Defines Editing Scope – Break down of the editing task</li>
          <li>Present Sample Edit – Share a sample edit for client feedback</li>
          <li>
            Determine Style Guide – Build editing style guide based on feedback
          </li>
          <li>
            Decide Timelines, SLA, and Cost – Set up editors, schedules, and
            pricing
          </li>
          <li>Execute Final Edit – Apply edits as per the style guide</li>
          <li>Quality Check Before Handover – Review and approval</li>
          <li>Upload Edit Documents – Deliver final files as required</li>
        </ol>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Benefits of Choosing Nimble Auity
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Save Time & Money – Access trained editors with specialized skills
            </li>
            <li>
              Highly Qualified Editing Team – From reputed academic institutions
            </li>
            <li>
              Exceptional Language Skills – Delivering professional, polished copy
            </li>
            <li>
              Audience-Focused Writing – Clear, engaging, and error-free content
            </li>
            <li>
              Strengthen Conceptual Thinking – Improve clarity and coherence
            </li>
            <li>
              Add Value to Manuscripts – Refine content and highlight key areas
            </li>
            <li>
              Originality & Attention to Detail – Maintain uniqueness with
              precision
            </li>
          </ul>
        </div>
      </div>

      {/* Closing Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Content Editing Services You Can Trust
        </h2>
        <p className="mb-6">
          At Nimble Auity, we correct grammar, remove redundancies, fix problem
          sentences, and sharpen vocabulary. Our specialized editors examine
          content from the reader’s perspective to ensure clarity and impact. We
          deliver on time and with unmatched accuracy.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContentEditingServices;
