import React from "react";
import CSmainmenu from "../CSmainmenu";

const DesignThinking: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-8">
<CSmainmenu/>
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble Design Thinking Services
      </h1>
      <p className="text-gray-700 text-lg">
        When you want products launched in the market, we'll help you conceive the best product ideas and incorporate features that make a strong impact on consumers starting at $12 per hour.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        In a world of changing consumer needs, strong design skills are essential. Nimble Auity helps businesses understand market trends, implement the latest prototyping principles, and create impactful enterprise design solutions for startups and medium-sized businesses.
      </p>

      {/* Services We Offer */}
      <h2 className="text-2xl font-semibold text-gray-800">Design Thinking Services We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Product Strategy:</strong> Identify audience needs and create value propositions for success.</li>
        <li><strong>Product Roadmapping:</strong> Build products iteratively to improve customer retention and market edge.</li>
        <li><strong>User Journey Mapping:</strong> Enhance mobile and multi-device experiences with holistic journey design.</li>
        <li><strong>Feature Incorporation:</strong> Integrate features that balance functionality, performance, and market impact.</li>
        <li><strong>User Research:</strong> Conduct research on demographics, behavior, and interests to improve product decisions.</li>
        <li><strong>Rapid Prototyping:</strong> Create clickable prototypes with user feedback for optimal product compliance.</li>
      </ul>

      {/* Design Thinking Process */}
      <h2 className="text-2xl font-semibold text-gray-800">Design Thinking Process We Follow</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li><strong>Product Strategy:</strong> Understand product vision, objectives, and demographics to define problems.</li>
        <li><strong>Definition of Product:</strong> Generate user personas and map features, journeys, and interactions.</li>
        <li><strong>Validation of Concepts:</strong> Create information architecture and low-fidelity wireframes.</li>
        <li><strong>Visualization:</strong> Develop high-fidelity prototypes with clickable workflows.</li>
        <li><strong>Presentation and Feedback:</strong> Deliver technical assessment, documents, and roadmap.</li>
      </ol>

      {/* Other Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Other Services You Can Benefit From</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Corporate Design Services</li>
        <li>Annual Report Design</li>
        <li>Logo Design Services</li>
        <li>Newsletter Design Services</li>
      </ul>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-gray-800">Why Choose Nimble Design Thinking Services?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Cost-effective Pricing:</strong> Largest portfolio at affordable prices without compromising quality.</li>
        <li><strong>Original Illustrations:</strong> Unique solutions customized per client guidelines.</li>
        <li><strong>ISO Certification:</strong> ISO standards compliance ensuring quality and reliability.</li>
        <li><strong>Experienced & Skilled Experts:</strong> Professionals with years of design workflow experience.</li>
        <li><strong>World-class Infrastructure:</strong> Access to top tools and environment for complex tasks.</li>
        <li><strong>Quick Turnaround Time:</strong> Timely delivery respecting client deadlines.</li>
        <li><strong>Scalability:</strong> Efficient upscaling solutions for evolving client needs.</li>
        <li><strong>Data Security:</strong> Confidentiality maintained and sensitive data protected.</li>
      </ul>

      {/* Client Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Nimble Provided 50 Illustrations a Day to a US-based Client:</strong> Cost-effective, high-quality illustration services.</li>
        <li><strong>Nimble Provided Illustrations for a Denmark-based Writer:</strong> Creative solutions for a children's fantasy book project.</li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic mb-4">
        "The quality of artwork delivered during the trial period was exceptional and helped us decide on our new partner."
        <br />
        <span className="font-semibold">— Director, Operations, Leading Pharmaceutical Company, Netherlands</span>
      </p>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Get in Touch for Design Thinking Services
        </a>
      </div>

    </div>
  );
};

export default DesignThinking;
