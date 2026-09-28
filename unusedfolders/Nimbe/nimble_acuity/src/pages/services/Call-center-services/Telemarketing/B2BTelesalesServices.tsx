import React from "react";
import CCmainmenu from "../CCmainmenu";

const B2BTelesalesServices: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble B2B Telesales Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Reach a bigger market, generate genuine leads, and increase CTQ-aligned conversions with our structured B2B telesales workflows.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          A team of well-trained telesales professionals can take your business to new heights. Nimble's B2B telesales solutions use DMAIC-structured workflows, ensuring measurable improvements across lead generation, event promotion, and brand development.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">B2B Telesales Solutions We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Outbound B2B Telesales Services",
              desc: "VoC-to-CTQ mapped scripts, tracked for conversion metrics and refined continuously."
            },
            {
              title: "Event Promotion & Reservation Services",
              desc: "Personalized invites and event confirmations to boost attendance and engagement."
            },
            {
              title: "Lead-response Management",
              desc: "Immediate follow-up on generated leads to maximize conversion potential."
            },
            {
              title: "Technical Support Services",
              desc: "Agents trained on company-specific SLAs ensuring CTQ-aligned issue resolution."
            },
            {
              title: "Help Desk Services",
              desc: "Expert support for inbound calls from service-based industries, reducing operational burden."
            },
            {
              title: "Virtual Receptionist",
              desc: "Professional appointment management and call handling by trained tele-assistants."
            },
            {
              title: "Bilingual Agents",
              desc: "Localized communication for enhanced Customer Value Add (CVA) while maintaining brand consistency."
            },
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">B2B Telesales Process We Follow</h2>
        {[
          { step: "01. Company Analysis", desc: "Understand company needs, scope, and target audience to design strategy and content." },
          { step: "02. Assigning a Dedicated Team", desc: "Select executives with expertise in your industry to manage the telesales campaign." },
          { step: "03. Establishing Goals & Calling", desc: "Define short-term goals while executing long-term strategy through structured calling." },
          { step: "04. Prospect Follow-up", desc: "Periodic follow-ups with potential customers to ensure maximum conversion." },
          { step: "05. Collecting Lead Response", desc: "Quick response tracking and measurement of each lead's potential." },
          { step: "06. Goal Revision", desc: "Analyze results and set higher goals for the next cycle with refined strategies." },
          { step: "07. Full Confidentiality", desc: "All strategies, leads, and data are kept strictly confidential." },
        ].map((process, idx) => (
          <div key={idx} className="mb-6 p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">{process.step}</h3>
            <p className="text-gray-700">{process.desc}</p>
          </div>
        ))}
      </section>

      {/* Related Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Other Services You May Benefit From</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          {["Cold Calling Services","Real Estate Cold Calling Services","B2B Cold Calling Services","Teleprospecting Services"].map((service, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Nimble for B2B Telesales?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Personalized calls that build rapport and trust.",
            "Flexible pricing based on measurable KPIs for transparency.",
            "Cloud-based call systems and CRM dashboards for seamless operations.",
            "Objection-handling techniques to convert 'no' into 'yes'.",
            "Goal sheets ensuring efficiency, transparency, and ROI-focused campaigns.",
            "Verified and clean data to reduce errors and improve lead quality.",
            "Safe, trustworthy, and ISO-certified operations maintaining confidentiality."
          ].map((reason, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-blue-50">
        <h2 className="text-2xl font-bold text-center mb-6">Client Success Stories</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Call Quality Monitoring for a Leading Tech Firm</h3>
            <p>Moderate and robust call quality monitoring services improved operational efficiency and client satisfaction.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Live Video, Audio & Text Monitoring for a Major Internet Company in Singapore</h3>
            <p>Integrated backend monitoring reduced costs and improved productivity for the client.</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-6 bg-gray-50">
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "We only use Nimble Auity for marketing purposes due to their professionalism and clear communication. Their campaigns deliver measurable results consistently."
          <footer className="mt-4 font-semibold">– Marketing Director, Spray Foam Insulation Company, UK</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-teal-500 to-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Outsource B2B Telesales Services to Nimble Auity</h2>
        <p className="max-w-2xl mx-auto mb-6">
          With 26+ years of telemarketing experience, ISO certifications, and a skilled telesales team, Nimble ensures high-quality leads, measurable results, and sustainable sales growth.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default B2BTelesalesServices;
