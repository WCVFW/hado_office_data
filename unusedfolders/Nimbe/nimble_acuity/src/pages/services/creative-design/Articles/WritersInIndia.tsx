import React from "react";
import CSmainmenu from "../CSmainmenu";

const WritersInIndia: React.FC = () => {
  const services = [
    "Technical Writing",
    "Academic Writing, White Papers",
    "Medical Writing",
    "Copywriting",
    "Book Summaries and Book Reviews",
    "Fiction Writing and Book Authoring",
    "Script Writing",
    "Business Writing",
    "News Item Writing, Journalism, News Release Writing",
    "Speech Writing",
    "Travel Writing",
    "Product Descriptions, Manuals, Online Help, Tutorials",
    "Report Writing",
    "Software and Technical Book Writing",
    "Biography Writing",
    "Game Writing",
    "Presentations",
    "Promotional leaflets and more"
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Looking for a Writer in India? Discover Diversity
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          You may be surprised to find such a range of writing talent at your fingertips.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          Look no further. Nimble can take care of you through our content writing division. We specialize in quality writing services that conform to international standards, with a wide network of talented writers and documentation experts across almost every area of writing.
        </p>
        <p className="mb-4">
          English is widely spoken among Indian professionals, allowing you to access high-quality writing at a fraction of the cost, without hiring full-time staff.
        </p>
        <p>
          Nimble's writers manage all types and sizes of projects, ensuring timely delivery and budget compliance. Time-to-market is crucial, and we value your time.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-green-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Writing Services</h2>
        <ul className="columns-1 md:columns-2 lg:columns-3 gap-4 list-disc list-inside">
          {services.map((service, index) => (
            <li key={index} className="mb-2">{service}</li>
          ))}
        </ul>
      </section>

      {/* Detailed Service Descriptions */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-12">
        {/* Technical Writing */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Technical Writing</h3>
          <p className="mb-2">
            Nimble provides specialized technical writing across industries including software, hardware, manufacturing, finance, medical, and web design. Our services include:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>Project Manuals</li>
            <li>Product Testing Documents</li>
            <li>Proposals</li>
            <li>User Guides</li>
            <li>Technical Abstracts & References</li>
            <li>Policies and Procedures Manuals</li>
            <li>Online Help Systems & Tutorials</li>
            <li>Quality Documentation</li>
            <li>Functional Specifications</li>
            <li>Solution Design Documents</li>
            <li>Requirements Documents</li>
            <li>Usability Test Reports</li>
            <li>White Papers</li>
            <li>Business Process Re-engineering Documents</li>
          </ul>
        </div>

        {/* Academic Writing & White Papers */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Academic Writing & White Papers</h3>
          <p className="mb-2">
            Our experts excel at academic writing, including essays, reports, and white papers. White papers serve as powerful marketing tools, helping decision-makers justify implementing solutions.
          </p>
        </div>

        {/* Medical Writing */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Medical Writing</h3>
          <p className="mb-2">
            Nimble provides clinical documentation, medical content for web, articles, and books. Services include:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>Clinical Development Plans</li>
            <li>Protocols & Study Reports</li>
            <li>Abstracts, Manuscripts & Journal Articles</li>
            <li>Medical Books</li>
            <li>Medical Web Content</li>
          </ul>
        </div>

        {/* Copywriting */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Copywriting</h3>
          <p className="mb-2">
            Our team crafts persuasive copy, flyers, banners, newsletters, websites, multimedia content, and brand naming that engages audiences and delivers results.
          </p>
        </div>

        {/* Fiction, Script, and Business Writing */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Fiction, Script & Business Writing</h3>
          <p className="mb-2">
            Nimble helps authors, publishers, and companies develop stories, scripts, books, presentations, resumes, letters, memos, and academic applications tailored to your audience.
          </p>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Other Services</h3>
          <p className="mb-2">
            We also provide news item writing, journalism, speech writing, travel writing, product manuals, help systems, report writing, technical book writing, biographies, game writing, presentations, and promotional material development.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-green-50 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Started with Nimble Auity</h2>
        <p className="mb-6">
          Contact Nimble Auity for high-quality writing services that save you time, cost, and effort while delivering professional results across multiple domains.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Contact Nimble Auity
        </button>
      </section>
    </div>
  );
};

export default WritersInIndia;
