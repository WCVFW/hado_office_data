import React from "react";
import CSmainmenu from "../CSmainmenu";

const ContentRewritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Nimble Content Rewriting Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Today there is a dearth of writers in the market yet there is a demand for content rewriting services. With multiple research inputs readily available, every writer is aware that rewriting content is not about altering words but restoration of existing text and rewriting to make it more intelligible and interesting.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Content Writing Services We Offer</h2>
        <p className="mb-4">
          When a client chooses to partner with Nimble Auity for content rewriting, we ensure to do a thorough job. We cut the frills if required and ensure the content is well worth a read. Nimble's team of writers envisions taking the existing content to a different level by inducing distinctly new concepts. Nimble's list of rewriting services is extensive and we have capabilities to handle almost all types of content rewriting services.
        </p>

        <ul className="list-disc list-inside space-y-1 mb-8">
          <li>Books</li>
          <li>Autobiographies</li>
          <li>Biographies</li>
          <li>Educational</li>
          <li>Fiction books</li>
          <li>Business</li>
          <li>Correspondence</li>
          <li>Job Advertisements & Applications</li>
          <li>Proposals, Documentation, Research papers, Manuals</li>
          <li>Reference books</li>
          <li>Marketing & Advertising materials</li>
          <li>Websites, Articles, Magazines, Newsletters</li>
        </ul>
      </div>

      {/* Process Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Our Content Rewriting Process</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Content Rewriting Project Requirements:</strong> Express scope of content rewriting for the project - check content that requires rewriting</li>
            <li><strong>Present Rewritten Content Sample:</strong> Sample document of rewritten content presented to client</li>
            <li><strong>Determine Rewritten Content Guidelines:</strong> Based on feedback create content rewriting style guide for project</li>
            <li><strong>Decide on Timelines, SLA & Cost:</strong> Set up a team of writers, editors, & QC</li>
            <li><strong>Execute Final Rewritten Content:</strong> Rewrite content based on defined style guide for the project</li>
            <li><strong>Quality Check Before Handover:</strong> Quality check by editorial team, signed off for uploading</li>
            <li><strong>Upload Rewritten Documents:</strong> Upload rewritten content files based on client requirement & need</li>
          </ol>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Benefits of Outsourcing Content Rewriting Services to Nimble</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Work according to a brief - Every new assignment gets us charged up with enthusiasm and an overflow of ideas.</li>
          <li>Match client's requirement - Intensive rewriting services to meet customer needs.</li>
          <li>Rewritten for a Target Audience - Content polished to engage the audience effectively.</li>
          <li>Engage with a new pair of eyes - Specialists spot errors and improve readability.</li>
          <li>Work with the specialists - Writers study goals, target audience, and competitors to enhance content.</li>
          <li>Diverse background of experience and industries - Quality content regardless of domain.</li>
          <li>Regenerate and Refurbishing Content - Revamp outdated or low-quality content for maximum impact.</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Choose Nimble Auity for Professional Content Rewriting Services</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
          Words can sell a product like nothing else! Whether it is software, education, or business community, poorly written content reduces credibility. Nimble rewrites your content to be simple, effective, and impactful.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ContentRewritingServices;
