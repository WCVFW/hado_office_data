import React from "react";
import CSmainmenu from "../CSmainmenu";

const ScientificWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Scientific Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Get high-quality scientific content developed by subject matter experts, starting at $10/hour. Nimble Auity ensures accuracy, clarity, and research-backed writing.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Services Offered */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Scientific Writing Services We Offer</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li><strong>Review Scientific Articles:</strong> Summarize, synthesize, and critically analyze research articles to identify gaps and key findings.</li>
          <li><strong>Research Proposals:</strong> Convince scientific audiences of the significance and benefits of proposed research.</li>
          <li><strong>Research Paper / Lab Reports:</strong> Present primary research results in analytical, factual, and descriptive formats.</li>
          <li><strong>Original Scientific Writing:</strong> Assist scientists in documenting experiments, observations, and survey findings in a clear format.</li>
          <li><strong>Editing Scientific Writings:</strong> Improve readability, accuracy, and presentation of scientific manuscripts with professional editing.</li>
          <li><strong>Case Report Writing:</strong> Document complex healthcare cases for physicians, enhancing scientific knowledge and credibility.</li>
          <li><strong>Meta-analysis:</strong> Analyze data across studies to present concise, accurate summaries and overviews.</li>
          <li><strong>Systematic Review:</strong> Conduct thorough research using reproducible methods to provide critical scientific analyses.</li>
          <li><strong>Short Communication Writing:</strong> Deliver precise, high-quality notes highlighting significant research updates.</li>
          <li><strong>Scientific Newsletter Writing:</strong> Produce informative, concise newsletters for internal and external audiences.</li>
        </ul>
      </div>

      {/* Scientific Writing Process */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Scientific Writing Process We Follow</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li><strong>01. Requirement Gathering:</strong> Collect background information, define problems, gaps, and research solutions.</li>
          <li><strong>02. Organize Thoughts:</strong> Develop logical writing pathways with sufficient context and clarity.</li>
          <li><strong>03. Dedicated Writing Team:</strong> Assign specialized writers and provide research manuscripts for guidance.</li>
          <li><strong>04. Quality Check:</strong> Multi-level review for logic, flow, and connection with the audience.</li>
          <li><strong>05. Proofread & Delivery:</strong> Final proofread to ensure accuracy, style consistency, and client satisfaction.</li>
        </ul>
      </div>

      {/* Benefits of Choosing Nimble */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble Scientific Writing Services?</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li><strong>Cost-effective Solutions:</strong> Customizable services to pay only for what you need.</li>
          <li><strong>Expert Team:</strong> Writers with minimum 5 years’ experience and domain expertise.</li>
          <li><strong>Professional Writing:</strong> Concise, clear, and engaging content suitable for publishing.</li>
          <li><strong>Quality Output:</strong> Multi-level quality control ensures impactful and accurate documents.</li>
          <li><strong>Latest Technology:</strong> Use of advanced writing & publishing software without client investment.</li>
          <li><strong>Quick Turnaround:</strong> Global delivery centers leverage time-zone advantages for fast delivery.</li>
          <li><strong>Data Security:</strong> NDA agreements, firewalls, and monitoring ensure confidentiality.</li>
          <li><strong>One-Stop Solution:</strong> Writing, editing, proofreading, and project management all in one place.</li>
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
          "The quality of scientific content delivered during the trial period was exceptional and helped us choose Nimble as our new outsourced partner."
        </p>
        <p className="text-gray-700 font-semibold">Director - Operations, Leading Pharmaceutical Company, Netherlands</p>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble Auity for Scientific Writing</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          With 26+ years of experience, Nimble Auity provides accurate, research-backed, and publish-ready scientific content.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ScientificWritingServices;
