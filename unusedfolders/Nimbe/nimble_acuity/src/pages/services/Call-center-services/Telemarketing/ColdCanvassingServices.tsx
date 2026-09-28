import React from "react";
import CCmainmenu from "../CCmainmenu";

const ColdCanvassingServices: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Cold Canvassing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Accelerate customer acquisition through statistically validated cold canvassing workflows implemented by rigorously trained outreach specialists.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Expanding your customer base in a competitive market can be challenging. Nimble’s cold canvassing framework uses VoC-to-CTQ mapping and DMAIC-optimized workflows to convert initial contacts into high-conversion interactions.
        </p>
        <p>
          Unlike traditional cold calling, our approach focuses on meaningful, customer-driven conversations that increase client base, brand value, and positioning.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Cold Canvassing Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "B2B Cold Canvassing Services",
              desc: "Engage decision-makers using stakeholder mapping and persona-driven CTQs for precise B2B outreach."
            },
            {
              title: "B2C Cold Canvassing Services",
              desc: "Expert B2C canvassing using dynamic scripts, databases, and high improvisation to generate interest without disturbing prospects."
            },
            {
              title: "Developing Customized Scripts",
              desc: "Scripts are built post VoC analysis to align with CTQ metrics and customer behavior patterns."
            },
            {
              title: "Meticulously Devised Strategies",
              desc: "Agents improvise scripts based on customer responses to create meaningful conversations and purchase intent."
            },
            {
              title: "Follow-up Calls and Feedback",
              desc: "Regular follow-ups and feedback sessions ensure lasting customer connections."
            },
            {
              title: "Marketing Automation",
              desc: "We leverage advanced marketing automation tools and can integrate your in-house systems for transparency and efficiency."
            },
            {
              title: "Appointment Setting",
              desc: "Only high-quality leads are qualified for appointments, saving your sales team’s time and boosting conversion."
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
        <h2 className="text-2xl font-bold text-center mb-8">Cold Canvassing Process We Follow</h2>
        {[
          {
            step: "01. Target Market Definition",
            desc: "Coordinate with your sales/marketing team to identify potential clients and their purchase behavior."
          },
          {
            step: "02. Goal Definition",
            desc: "Set quantifiable goals like generating awareness, inquiries, or sales based on market and business scope."
          },
          {
            step: "03. Content Strategy",
            desc: "Create customized scripts, messages, and questionnaires using VoC analysis and persona segmentation."
          },
          {
            step: "04. Making Calls & Understanding the Customer",
            desc: "Agents actively listen and adjust scripts to build urgency and purchase intent."
          },
          {
            step: "05. Quality Check",
            desc: "Match deadlines and goals, ensuring quality and completeness of generated leads."
          },
          {
            step: "06. Appointment Setting & Lead Transferring",
            desc: "Leads are transferred to your sales team or appointments arranged for high-conversion opportunities."
          },
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
          {[
            "Cold Calling Services",
            "Real Estate Cold Calling Services",
            "B2B Cold Calling Services",
            "Teleprospecting Services"
          ].map((service, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Nimble for Cold Canvassing?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "High-quality assertive selling without coercion, focusing on responsive prospects.",
            "Accomplished telemarketers with experience, training, and empathy.",
            "Affordable services with superior quality.",
            "State-of-the-art infrastructure for efficient operations.",
            "Tailor-made approach for each business requirement.",
            "Faster turnaround with DMAIC-driven workflow reducing cycle time by 32.2%.",
            "ISO/IEC 27001:2022 certified for transparency and data security."
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
            <p>We provided moderate yet solid call quality monitoring services, improving operational efficiency and client satisfaction.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Live Video, Audio & Text Monitoring for a Major Internet Company in Singapore</h3>
            <p>Integrated monitoring solutions helped reduce costs and improve productivity for the client.</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-6 bg-gray-50">
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "I just wanted to thank Jay / Customer Service Rep. who contacted me twice regarding my order status. What wonderful customer service!!"
          <footer className="mt-4 font-semibold">– Spokesperson, Pet Pharmacy Company, Florida, USA</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Outsource Cold Canvassing Services to Nimble Auity</h2>
        <p className="max-w-2xl mx-auto mb-6">
          With 21+ years of experience, ISO certifications, and a skilled outreach team, Nimble ensures high-quality lead generation and meaningful customer interactions.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default ColdCanvassingServices;
