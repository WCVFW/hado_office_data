import React from "react";
import DSmainmenu from "../DSmainmenu";

const DigitalAssetManagement: React.FC = () => {
  const services = [
    {
      title: "Digital Asset Metadata Management",
      points: [
        "Custom Metadata Templates for consistency.",
        "Automated Metadata Capture on asset upload.",
        "AI-Driven Metadata Enrichment for relevance.",
      ],
    },
    {
      title: "Digital Asset Storage & Archiving",
      points: [
        "Secure Cloud-Based Storage for accessibility.",
        "Redundant Backup Systems prevent data loss.",
        "Long-Term Archiving with lifecycle management.",
      ],
    },
    {
      title: "Asset Tagging & Categorization",
      points: [
        "AI-Driven Automated Tagging for efficiency.",
        "Customizable Taxonomies meet business needs.",
        "User-Driven Tagging enhances discoverability.",
      ],
    },
    {
      title: "Digital Asset Version Control",
      points: [
        "Detailed Version Tracking for asset changes.",
        "Rollback Functionality ensures content accuracy.",
        "Collaboration Tools aid collective refinement.",
      ],
    },
    {
      title: "Asset Level Analytics",
      points: [
        "Track reports, views, and downloads.",
        "Engagement Metrics analyze asset performance.",
        "Custom Dashboards visualize key data points.",
      ],
    },
  ];

  const tools = ["Aprimo", "MediaValet", "Canto", "Bynder", "Acquia", "Brandfolder"];

  const additionalServices = [
    "Data Conversion Services",
    "Data Processing Services",
    "Online Catalog Management Services",
    "Optical Character Recognition (OCR) Services",
  ];

  const advantages = [
    "Dynamic Asset Expiration Management",
    "Scalable Workflow Templates",
    "Comprehensive Audit Trails",
    "Performance Benchmarking",
    "Custom User Roles and Permissions",
    "Embedded Analytics Dashboards",
  ];

  const successStories = [
    {
      title: "Better Data Management",
      description:
        "Nimble Acuity's Data Management Services to a Funding Company in The US-Led to Increased Business Closures",
    },
    {
      title: "How to Solve Manual Data Entry Challenges?",
      description:
        "Nimble Acuity Provided Scanning & Data Entry to a UK-based Software Firm",
    },
  ];

  const testimonials = [
    {
      quote:
        "We were very satisfied with the quality of service Nimble Acuity provided. They met our requests with great professionalism and flexibility. We look forward to having your team fulfill future projects for us.",
      author: "Spokesperson, Online health lessons company in Canada",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Digital Asset Management Services</h1>
        <p className="text-lg text-gray-700 mb-4">
          Get advanced tools to organize and manage your enterprise data to make it easy to retrieve and distribute with our digital asset management services.
        </p>
        <p className="text-gray-600">
          Our cloud-based solution centralizes all digital assets in a secure repository. With AI-driven auto-tagging, workflow automation, and integrated DRM, we help your organization manage digital assets strategically and effectively.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Custom Digital Asset Management Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Tool Competencies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition"
            >
              {tool}
            </span>
          ))}
        </div>
        <p className="text-gray-500 mt-2 text-sm">
          (Disclaimer: We are neither a business partner nor endorses these tools. The usage of these tools is exclusive to the scope of this service.)
        </p>
      </section>

      {/* Additional Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Additional Services You Can Benefit From</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-center md:text-left">
          {additionalServices.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us / Advantages */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">What Sets Our Digital Asset Management Company Apart?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((adv, idx) => (
            <div key={idx} className="border-l-4 border-blue-600 pl-4 py-2 text-gray-700 bg-gray-50 rounded">
              {adv}
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-bold mb-2">{story.title}</h3>
              <p className="text-gray-700">{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Customer Testimonials</h2>
        {testimonials.map((t, idx) => (
          <blockquote
            key={idx}
            className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4 bg-gray-50 p-4 rounded"
          >
            "{t.quote}"
            <span className="block mt-2 font-bold">{t.author}</span>
          </blockquote>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Partner with Us
        </button>
      </section>
    </div>
  );
};

export default DigitalAssetManagement;
