import React from "react";
import CSmainmenu from "../CSmainmenu";

const WebsiteCopywritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Website Copywriting Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Give your website a professional look with unique, impression-making content. Starting at $10/hour, Nimble Auity delivers high-quality website copywriting tailored to your brand.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* End-to-End Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our End-to-End Website Copywriting Services</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li>
            <strong>Home Page:</strong> Engaging copy from the customer's perspective to leave the best impression and guide visitors to explore further.
          </li>
          <li>
            <strong>Service/Product Pages:</strong> Convert visitors to buyers with compelling product descriptions, USPs, and persuasive storytelling.
          </li>
          <li>
            <strong>Contact Pages & Forms:</strong> Encourage communication with visitors, backed by live chat, phone, and email integration.
          </li>
          <li>
            <strong>About Us Pages:</strong> Connect emotionally with visitors, humanize your business, and build trust.
          </li>
          <li>
            <strong>Achievement Pages:</strong> Showcase your achievements to instill confidence and remove doubts.
          </li>
          <li>
            <strong>Resources Pages:</strong> Build authority with articles, blogs, whitepapers, case studies, and infographics.
          </li>
          <li>
            <strong>Portfolio Pages:</strong> Highlight your best work with a professional, emotionally engaging tone.
          </li>
          <li>
            <strong>Testimonials Pages:</strong> Make customer experiences shine with authentic, concise testimonials.
          </li>
          <li>
            <strong>Team Pages:</strong> Introduce employees professionally, providing transparency and a personal touch.
          </li>
          <li>
            <strong>Career/Jobs Pages:</strong> Attract top talent with persuasive content about your culture, benefits, and opportunities.
          </li>
          <li>
            <strong>Gallery Pages:</strong> Present images with context and engaging copy for strong first impressions.
          </li>
          <li>
            <strong>FAQ Pages:</strong> Build trust with clear, convincing answers demonstrating authority and thought leadership.
          </li>
          <li>
            <strong>Terms, Cookie Policy & Affiliate Disclosures:</strong> Protect rights, ensure clarity, and maintain transparency with visitors.
          </li>
        </ul>
      </div>

      {/* Copywriting Process */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Website Copywriting Process</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li><strong>01. Understanding Requirements:</strong> Gather target audience, messages, competitors, and objectives to create a winning strategy.</li>
          <li><strong>02. Competitor & Audience Analysis:</strong> Analyze competitors and audience preferences to write superior content.</li>
          <li><strong>03. Dedicated Copywriting Team:</strong> Assign professional writers with domain expertise led by a senior copywriter.</li>
          <li><strong>04. Quality Check:</strong> Senior writers ensure excellence, comparing with competitor websites for top-quality content.</li>
          <li><strong>05. Pre-Delivery Feedback:</strong> Incorporate client feedback for final approval before delivery.</li>
        </ul>
      </div>

      {/* Why Choose Nimble */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble Website Copywriting Services?</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li><strong>Cost-effective Prices:</strong> High-quality content at competitive rates, maximizing ROI.</li>
          <li><strong>Expert Team:</strong> Skilled writers with command over English and multiple industry domains.</li>
          <li><strong>Content Presentation:</strong> Revamp existing content, making it modern and captivating.</li>
          <li><strong>Clear Messaging:</strong> Ensure clarity, consistency, and audience connection with your brand.</li>
          <li><strong>Emotional Quotient:</strong> Address customer concerns, demonstrate value, and enhance relevance.</li>
          <li><strong>24/7 Service:</strong> Dedicated managers ensure smooth communication, feedback, and timely delivery.</li>
        </ul>
      </div>

      {/* Other Services */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Other Services You Can Benefit From</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-lg">
          <li>Article Writing Services</li>
          <li>Content Development Services</li>
          <li>SEO Content Writing Services</li>
          <li>Technical Writing Services</li>
        </ul>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-lg mb-4">
          "Thanks for your high-quality work and attention to detail that has helped our reputed Australian ad agency better reach out to its prospects. We appreciate your hard work."
        </p>
        <p className="text-gray-700 font-semibold">CEO, Digital Marketing Agency, Australia</p>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble Auity for Professional Website Copywriting</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          With 26+ years of experience, Nimble Auity crafts content that impresses customers and drives conversions.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default WebsiteCopywritingServices;
