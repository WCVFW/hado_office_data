import React from "react";
import { FaPenFancy, FaBookOpen, FaLightbulb, FaSearch } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const ArticleWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Article Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Nimble Auity delivers high-quality, research-backed articles that engage your audience and enhance brand visibility. Over 26+ years of global experience.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Article Writing Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaPenFancy />, title: "Advertising, Marketing & Sales", desc: "Content that introduces your products/services effectively to engage your audience." },
            { icon: <FaBookOpen />, title: "Cooking & Fashion", desc: "High-quality blog or website content with a style that connects to your audience." },
            { icon: <FaLightbulb />, title: "Current Affairs", desc: "Well-researched articles on trending news to inform and engage your readers." },
            { icon: <FaBookOpen />, title: "Finance Articles", desc: "Simplifying complex finance topics to educate and retain readers." },
            { icon: <FaLightbulb />, title: "Home Improvement & Architecture", desc: "Magazines-ready content that expands awareness about your services." },
            { icon: <FaSearch />, title: "Knowledge Process Outsourcing (KPO)", desc: "Research-backed content to boost your brand perception online." },
            { icon: <FaLightbulb />, title: "Motivational Articles", desc: "Content to inspire, educate, and personally connect with readers." },
            { icon: <FaBookOpen />, title: "News Print", desc: "Professional news content adhering to journalistic style and format." },
            { icon: <FaPenFancy />, title: "Self-development Articles", desc: "Educative content with actionable steps to support personal growth." },
            { icon: <FaBookOpen />, title: "Target-specific Journals", desc: "High-quality journals and blogs for niche audiences." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Outline Article Required: Define scope, objectives, and research inputs.",
              "Present Sample Article: Share sample for tone, style, and approach approval.",
              "Define Article Details: Establish guidelines, style, and word count.",
              "Create Timelines, SLA, and Cost: Allocate team and delivery schedule.",
              "Write Final Article: Research, collate, and produce content based on style guide.",
              "Final Edit Before Handover: Senior editors perform quality check.",
              "Upload Final Article: Deliver in client’s required format.",
            ].map((step, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <span className="text-blue-600 font-bold text-xl">{idx + 1}.</span>
                <p className="text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Nimble Auity?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Cost-effective services tailored to per word, per article, or project-based pricing.",
            "ISO 9001:2015 certified services ensuring quality and consistency.",
            "Access to highly skilled editors and subject matter experts.",
            "Multi-language content creation for international reach.",
            "Fast turnaround without compromising quality.",
            "24/7 customer support to address queries and ensure satisfaction.",
            "High confidentiality and security of your data and content.",
          ].map((benefit, idx) => (
            <div key={idx} className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-gray-900">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Started with Nimble Article Writing</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Let our expert writers create content that connects with your audience and drives measurable results.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ArticleWritingServices;
