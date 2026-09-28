import React from "react";
import CSmainmenu from "../CSmainmenu";

const OutsourcingWriting: React.FC = () => {
  const creativeDesignList = [
    "Illustrations",
    "Business Writing",
    "Animation",
    "Photography",
    "Photo Editing",
    "Screenwriting",
    "Creative Writing",
    "Proofreading",
    "Design Services",
    "White Paper Development",
    "Journalistic Writing",
    "Art",
    "Technical Writing",
    "Graphic Design",
    "Storyboarding",
    "Video Editing",
    "Textbook Manuscript Layout",
    "Music Composition",
    "Medical Writing",
    "Review Writing"
  ];

  const businessContentCategories = [
    "Media and Communication",
    "Future Asian Trends",
    "Cross Cultural Communications",
    "Outsourcing Case Studies",
    "Cultural Insights for Global Marketing",
    "Business Technology, Business Execution in a Developing Country",
    "Strategy in a Global Internet Economy",
    "Indian Corporate Governance",
    "Cross Cultural Leadership",
    "Emerging Asian Markets",
    "Opening New Markets With the Internet",
    "Labor Arbitrage"
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The Potential and Perils of Outsourcing Writing to India
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Learn what to expect from Indian service providers, the benefits of creative outsourcing, and tips to mitigate potential pitfalls.
        </p>
      </section>

      {/* Creative Design Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Creative Design that can be Outsourced</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {creativeDesignList.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">What to Expect from India</h2>
        <p className="mb-4">
          The Indian education system and natural talent have produced a large pool of technically competent professionals, including technical writers, scriptwriters, and artists. Combined with global exposure and internet access, Indian professionals offer a unique bi-cultural perspective that adds value to content for global audiences.
        </p>
      </section>

      {/* Business Content Categories */}
      <section className="py-16 px-6 bg-green-50 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Categories of Business Content for Outsourcing</h2>
        <ul className="list-disc list-inside">
          {businessContentCategories.map((category, idx) => (
            <li key={idx}>{category}</li>
          ))}
        </ul>
      </section>

      {/* Risks Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">The Risks of Outsourcing Creative Design</h2>
        <p className="mb-4">
          Limit deliverables and payments to small chunks initially to mitigate risk. Starting with a sample project helps establish trust, quality, and reliability.
        </p>
        <p>
          Establishing a clear process and a detailed document of requirements can prevent confusion. A good vendor often provides a checklist or questionnaire to ensure your expectations are captured accurately.
        </p>
      </section>

      {/* Recommendations */}
      <section className="py-16 px-6 bg-green-50 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Recommendations</h2>
        <p className="mb-4">
          Expect minor differences in grammar, spelling, and style. British English is common, but many Indian writers adapt to American nuances. Providing writing guidelines helps ensure the content aligns with your audience.
        </p>
        <p>
          Editing or tweaking content may be necessary, especially for journalistic writing or culturally nuanced material. Nimble Auity has editors with international experience to adjust content for your target market.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Outsourcing Creative Design to India</h2>
        <p className="mb-6">
          Get in touch with Nimble Auity to outsource creative design or learn more. Our Customer Engagement Team will contact you within 24 hours or the next working day.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Contact Nimble Auity
        </button>
      </section>
    </div>
  );
};

export default OutsourcingWriting;
