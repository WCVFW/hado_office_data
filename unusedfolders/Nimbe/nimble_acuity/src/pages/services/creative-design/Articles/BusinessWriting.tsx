import React from "react";
import CSmainmenu from "../CSmainmenu";

const BusinessWriting: React.FC = () => {
  const services = [
    "White papers",
    "Business case studies",
    "Executive summaries",
    "Newsletters",
    "Business reports",
    "Business research",
    "Corporate analyses, reports, abstracts & summaries",
    "Press releases",
    "Business writing for websites",
    "Business blogs with aggregated content",
    "How-to business books",
    "Book reviews and summaries"
  ];

  const interviewMethods = [
    "On the phone",
    "On Chat/Instant Messenger",
    "Via email"
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Business Writing Services at Nimble Auity
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Our qualified writers craft professional business content, from white papers and case studies to executive summaries and blogs.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Our Business Writing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Well-qualified Writers */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Well-qualified Writers</h2>
        <p className="mb-4">
          Writers at Nimble Auity specialize in various domains and have graduate-level or higher qualifications, including MBAs, MDs, and PhDs. Their combined academic credentials and industry experience ensure top-quality business writing.
        </p>
        <p>
          Our network includes professionals such as doctors, lawyers, accountants, business journalists, HR professionals, software engineers, and college professors, enabling us to tackle almost any business writing project.
        </p>
      </section>

      {/* White Papers */}
      <section className="py-16 px-6 bg-blue-50 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">White Papers – Powerful Marketing Tools</h2>
        <p>
          White papers educate your audience about specific issues, offering solutions and insights. They are effective marketing tools, particularly for technical or innovative products, helping decision-makers justify their choices.
        </p>
      </section>

      {/* Research & Case Studies */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Business Research, Case Studies & Report Writing</h2>
        <p className="mb-4">
          Nimble Auity has expertise across a wide range of business research topics. Our writers craft well-researched content that communicates business concepts clearly, adding measurable value to your organization.
        </p>
        <p>
          We ensure that content creation aligns with both subject expertise and industry experience, providing informative and actionable insights.
        </p>
      </section>

      {/* Professional Interviewing */}
      <section className="py-16 px-6 bg-blue-50 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Professional Interviewing Skills</h2>
        <p className="mb-4">
          Nimble Auity can interview almost anyone worldwide and provide either raw transcripts or polished content. We conduct interviews via:
        </p>
        <ul className="list-disc list-inside">
          {interviewMethods.map((method, idx) => (
            <li key={idx}>{method}</li>
          ))}
        </ul>
      </section>

      {/* Authoring Business Books */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Authoring Business Books</h2>
        <p className="mb-4">
          Our team has authored business books, white papers, case studies, executive summaries, and more. Clients retain rights to all work, except in collaborative projects where ownership is discussed beforehand.
        </p>
        <p>
          Ghostwriting projects involve closer collaboration with clients but maintain the same structure for deliverables and copyright ownership.
        </p>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-6">
          Have a business writing project? Fill out our inquiry form with a brief description and our Client Engagement Team will reach out within 24 hours.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Contact Nimble Auity
        </button>
      </section>
    </div>
  );
};

export default BusinessWriting;
