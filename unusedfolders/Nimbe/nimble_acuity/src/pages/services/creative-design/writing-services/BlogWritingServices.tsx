import React from "react";
import { FaPenNib, FaBlog, FaClock, FaUsers, FaSearch, FaStar } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const BlogWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Blog Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Nimble Auity helps you engage readers, boost SEO, and create compelling blogs that drive traffic, leads, and conversions.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Types of Blogs Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Blog Writing Services We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaUsers />, title: "Lifestyle Blogs", desc: "Cover trends in food, travel, shopping, cinema, and fitness to keep your readers updated." },
            { icon: <FaStar />, title: "Review Blogs", desc: "Provide detailed product and service reviews that engage and convert your audience." },
            { icon: <FaPenNib />, title: "Art Blogs", desc: "Share opinions on books, movies, and cultural events with insights for art enthusiasts." },
            { icon: <FaBlog />, title: "Niche Blogs", desc: "Focus on specialized topics like health, wellness, travel, food, and parenting." },
          ].map((blog, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-purple-600 text-4xl mb-4">{blog.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700">{blog.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Writing Process Section */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Blog Writing Process</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Scope and Plan Blog Topic: Discuss category and objectives with client.",
              "Engage in Research: Analyze relevant blogging trends and audience needs.",
              "Define Timelines, Costs, Team and SLA: Allocate writers and project managers.",
              "Create Sample Blog: Present sample blog for feedback and approval.",
              "Regularize Blogging Frequency: Write blogs according to schedule and strategy.",
              "Language and Quality Check: Perform multiple checks for facts, context, and grammar.",
              "Upload Blogs: Deliver final blogs according to client-required medium.",
            ].map((step, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <span className="text-purple-600 font-bold text-xl">{idx + 1}.</span>
                <p className="text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Benefits of Choosing Nimble Blog Writing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Leverage blogging as a marketing tool for higher engagement.",
            "Engage with knowledgeable writers in Technology, Medicine, Travel, Art, and more.",
            "Boost SEO with fresh, keyword-rich, and consistent content.",
            "Connect with potential and existing customers through insightful posts.",
            "Build industry credibility and establish your business as a thought leader.",
            "Show the human side of your brand to strengthen customer trust.",
            "Opportunities for content sharing, social promotion, and virality.",
          ].map((benefit, idx) => (
            <div key={idx} className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-gray-900">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-purple-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your Blog Writing Journey with Nimble</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Let Nimble Auity create engaging, original, and SEO-friendly blog posts that resonate with your audience and boost your online presence.
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

export default BlogWritingServices;
