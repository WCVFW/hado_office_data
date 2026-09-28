import React from "react";
import CSmainmenu from "../CSmainmenu";

const ManuscriptEditingService: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Manuscript Editing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Turn your good book into a great book with expert manuscript editing. Hire experienced editors at Nimble Auity starting at $10/hour.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Services Offered */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Manuscript Editing Services We Offer</h2>
        <ul className="space-y-6 text-gray-700 text-lg">
          <li>
            <strong>Line Editing:</strong> Focus on flow, transitions, tone, character development, sentence construction, vocabulary, and style. <em>(Estimated Time: 10 business days)</em>
          </li>
          <li>
            <strong>Content Editing:</strong> Correct structure, logic, organization, consistency, tenses, repetition, references, and titles. Ideal for non-fiction.
          </li>
          <li>
            <strong>Copy Editing:</strong> Check grammar, spelling, punctuation, and consistency. <em>(Estimated Time: 8 business days)</em>
          </li>
          <li>
            <strong>Proofreading:</strong> Final review for minor errors, grammar, spelling, and formatting. <em>(Estimated Time: 6 business days)</em>
          </li>
          <li>
            <strong>Publication Support:</strong> Assistance with submission, artwork, book covers, and review processes.
          </li>
        </ul>
      </div>

      {/* Genres and Formats */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Genres We Edit</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-lg">
          <li>Fiction: Mystery, Sci-Fi, Thriller, Romance, Literary, Children, Young Adult, Short Stories, Plays, Poems</li>
          <li>Non-fiction: Memoirs, Self-Help, Biography, Education, Business, Health, Scientific, Manuals, Articles</li>
          <li>Academic Papers / Research: Thesis, Dissertation, Journal, Technical, Research Papers</li>
        </ul>
        <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Formats We Support</h2>
        <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-lg">
          <li>Google Docs</li>
          <li>Google Sheets</li>
          <li>MS Word</li>
          <li>PDF</li>
          <li>Plain Text</li>
          <li>PPT / Excel</li>
          <li>JPG / PNG</li>
        </ul>
      </div>

      {/* Editing Process */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Manuscript Editing Process We Follow</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Send your manuscript (MS Word, Times New Roman, 12pt, Double spacing, No markups).</li>
          <li>Go to the Pricing Page.</li>
          <li>Click on Manuscript Editing.</li>
          <li>Choose the editing service you require.</li>
          <li>Select the genre of your manuscript.</li>
          <li>Upload your manuscript as a Word file.</li>
          <li>Submit and Checkout.</li>
        </ol>
        <p className="mt-6 text-gray-700">
          After editing, you'll receive an email with your document ready to download. Revisions are available if required. Final manuscript is delivered once satisfied.
        </p>
      </div>

      {/* Benefits of Choosing Nimble */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble Manuscript Editing Services?</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li><strong>Cost-effective Services:</strong> Affordable editing without compromising quality.</li>
          <li><strong>ISO Certified:</strong> ISO 9001:2015 certified with strict confidentiality standards.</li>
          <li><strong>Skilled Editors:</strong> English-speaking native editors with genre expertise.</li>
          <li><strong>Subject Matter Experts:</strong> Manuscripts matched with editors specialized in the genre.</li>
          <li><strong>Multi-language Support:</strong> Editing services available in multiple major languages.</li>
          <li><strong>High-quality Services:</strong> Experienced editors across every genre and bestseller publications.</li>
          <li><strong>Fast Turnaround:</strong> Editing typically completed in 8-10 business days.</li>
          <li><strong>24/7 Support:</strong> Continuous support through phone, email, or chat.</li>
          <li><strong>High Security:</strong> NDA agreements and secure handling of all manuscripts.</li>
        </ul>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-lg mb-4">
          "The manuscript editing services by Nimble were exceptional and helped us achieve a polished final product."
        </p>
        <p className="text-gray-700 font-semibold">
          Director - Operations, Leading Pharmaceutical Company, Netherlands
        </p>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble Auity for Manuscript Editing</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          With 26+ years of experience, Nimble Auity provides professional, accurate, and publish-ready manuscript editing services.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ManuscriptEditingService;
