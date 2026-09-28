import React from "react";
import CSmainmenu from "../CSmainmenu";

const SEOContentWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Nimble SEO Content Writing Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Internet marketing is highly competitive. Nimble Auity provides SEO content writing services to help your website rank higher, reach a wider audience, and convert visitors effectively. We combine search engine-friendly content with readability to engage your customers.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">SEO Content Writing Services We Offer</h2>
        <p className="mb-4">
          Nimble Auity has over a decade of experience providing SEO content services across multiple industries, including Travel, Hospitality, Healthcare, and IT. We ensure content is search engine-friendly, relevant, original, and keyword-optimized without compromising readability.
        </p>
      </div>

      {/* Process Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">SEO Content Writing Process</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li><strong>Outline SEO Content Requirement:</strong> Define keywords, publication frequency, and analysis schedules.</li>
            <li><strong>Engage in Trial SEO Exercise:</strong> Trial document with keywords inserted; gather client feedback.</li>
            <li><strong>Plan Schedules, SLA, and Cost:</strong> Set up team, delivery schedules, and pricing.</li>
            <li><strong>Define SEO Style Guide:</strong> Create guidelines for keyword insertion and editing.</li>
            <li><strong>Initiate SEO Content Plan:</strong> Execute content plan based on style guide.</li>
            <li><strong>Course Corrections on SEO:</strong> Adjust content based on SEO analysis and keyword performance.</li>
            <li><strong>Send SEO Activity Report:</strong> Provide regular SEO performance reports to clients.</li>
          </ol>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Benefits of Outsourcing SEO Content Writing Services to Nimble</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Higher website ranking and better visibility on search engines.</li>
          <li>More potential visitors due to keyword-rich content.</li>
          <li>Relevant and original SEO content.</li>
          <li>Target primary and secondary keywords effectively.</li>
          <li>Increased conversion ratios through sales-driven content.</li>
          <li>Improved website branding using the latest SEO techniques.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Leverage Nimble SEO Content Writing Services
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Nimble Auity’s team of skilled SEO writers ensures your website content ranks higher, reaches a wider audience, and engages readers effectively. Contact us to make the most of our result-oriented SEO content writing services.
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

export default SEOContentWritingServices;
