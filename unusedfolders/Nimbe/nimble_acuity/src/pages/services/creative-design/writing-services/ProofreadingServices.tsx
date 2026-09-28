import React from "react";
import CSmainmenu from "../CSmainmenu";

const ProofreadingServices: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Proofreading Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Ensure flawless, polished, and market-ready content with Nimble Auity’s
          expert editorial proofreading services.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">Proofreading Services</h2>
        <p className="mb-6">
          A poorly proofread document can jeopardize your message. The larger the
          content volume, the higher the chances of errors — from grammar and
          spelling to structural issues. Writers often struggle with textual
          elusiveness due to familiarity with their work, making it essential to
          rely on professionals. Nimble Auity offers editorial proofreading
          services so authors can focus on writing while we ensure their content
          is flawless, coherent, and marketable.
        </p>
      </div>

      {/* Services */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Our Proofreading Services</h2>
          <p className="mb-6">
            We specialize in proofreading a wide variety of documents, including:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <ul className="list-disc list-inside space-y-1">
              <li>Books (Autobiographies, Biographies, Fiction, Educational)</li>
              <li>Business (Correspondence, Proposals, Job Applications)</li>
              <li>News & Media (Newsprint, Articles, Magazines, Newsletters)</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Marketing & Advertising (Ads, Brochures, Catalogues)</li>
              <li>Documentation (Research Papers, Manuals, Reference Books)</li>
              <li>Essays & Translations</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Websites & Online Content</li>
              <li>Job Advertisements</li>
              <li>Catalogues & Brochures</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Our Proofreading Process</h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>Outline Editing Need – Define the scope of the project</li>
          <li>Create Sample Edit – Provide a sample document for client review</li>
          <li>Define Style Guide – Develop style guide based on feedback</li>
          <li>Plan Schedules, SLA, and Cost – Set up team, delivery, and pricing</li>
          <li>Implement Final Edit – Edit documents as per defined guide</li>
          <li>Handover after Quality Check – Review and approve for upload</li>
          <li>Upload Documents – Deliver in required formats</li>
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
              Save on Full-time Proofreaders – Flexible and cost-effective
              solutions
            </li>
            <li>
              Engage with Specialists – Experts who catch and correct every
              detail
            </li>
            <li>
              Shape Saleable Concepts – Ensure your prose is polished and
              market-ready
            </li>
            <li>
              Create a Masterpiece – Transform writing with meticulous precision
            </li>
            <li>
              Extraordinary Eye for Detail – Spotting even the smallest errors
            </li>
            <li>
              Accurate, Quick, and Affordable – Fast turnaround without
              compromising quality
            </li>
          </ul>
        </div>
      </div>

      {/* Closing Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Proofreading Services Tailored for You
        </h2>
        <p className="mb-6">
          At Nimble Auity, we understand the fine line between excellent and
          mediocre writing. Our versatile proofreaders handle diverse projects
          — from academic documents to corporate materials. Whether per word, per
          page, or per screen, we deliver professional results that make your
          content impactful and memorable.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ProofreadingServices;
