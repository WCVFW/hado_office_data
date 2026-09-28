import React from "react";
import CCmainmenu from "../CCmainmenu";

const MarketIntelligenceServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Market Intelligence Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Build and maintain profitable customer relationships with Nimble Auity’s
          expert market intelligence services.
        </p>
      </section>

      {/* What are Market Intelligence Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          What are Market Intelligence Services?
        </h2>
        <p>
          Market intelligence deals with providing a company with a strategic
          view of the market using primary and secondary sources of information.
          It helps businesses understand exactly what is happening in the
          marketplace and the potential of the market. The more real-time market
          intelligence data you gather, the better informed your decisions will
          be.
        </p>
      </section>

      {/* Offerings */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">
          Nimble Auity’s Offshore Market Intelligence Research Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Lead generation via customer awareness, account management, and outbound services.",
            "Survey programs designed to capture real-time customer insights.",
            "Ideas to nurture relationships with potential customers during the buying cycle.",
            "Ad tracking, brand equity research, advertising research, customer satisfaction studies, and sales forecasting.",
            "Real-time campaign preparation using state-of-the-art technology.",
            "Online intelligence services like email marketing, newsletter marketing, PPC, SEO, viral marketing, and text-based ads.",
            "Expert advice on managing complicated campaigns.",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Call Center Software */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Call Center Software We Use</h2>
        <p className="text-gray-700">
          HubSpot · Bitrix24 · Talkdesk · Five9 · Zendesk · Dixa · Salesforce ·
          LiveAgent · Avaya
        </p>
      </section>

      {/* Portfolio */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Call Center Portfolio</h2>
        <p className="text-gray-700">
          Dashboard · View Overview · View Campaign Stats · View Report · Gross
          TPH
        </p>
      </section>

      {/* Staffing Calculator */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Call Center Staffing Calculator
        </h2>
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <p className="text-gray-600">
            Calculate staffing & costing for your project
          </p>
          <form className="grid md:grid-cols-2 gap-4 text-gray-700">
            <select className="border p-2 rounded">
              <option>Project Type</option>
              <option>Inbound</option>
              <option>Outbound - One time</option>
              <option>Outbound - Ongoing</option>
              <option>Email</option>
              <option>Chat</option>
            </select>
            <select className="border p-2 rounded">
              <option>Service Type</option>
              <option>Order Taking Services</option>
            </select>
            <select className="border p-2 rounded">
              <option>Select Target Country</option>
              <option>USA</option>
            </select>
            <select className="border p-2 rounded">
              <option>Shift Coverage</option>
              <option>24/7 Coverage</option>
            </select>
            <input
              type="number"
              placeholder="Average Call Count Per Week"
              className="border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Average Handling Time (Min)"
              className="border p-2 rounded"
            />
          </form>
          <button className="bg-indigo-700 text-white px-6 py-3 rounded-full mt-4 hover:bg-indigo-800">
            Check Result
          </button>
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">
          Nimble Auity – Your Ideal Market Research Partner
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Experienced Workforce",
              desc: "Qualified and skilled executives providing best-of-breed market intelligence.",
            },
            {
              title: "Confidentiality",
              desc: "We respect privacy and ensure no information is disclosed without consent.",
            },
            {
              title: "Faster TAT",
              desc: "Quick turnaround times without compromising on quality.",
            },
            {
              title: "Customized Solutions",
              desc: "Tailored services to suit your market intelligence needs.",
            },
            {
              title: "Quality Assurance",
              desc: "Stringent quality controls ensure excellence at every step.",
            },
            {
              title: "Range of Services",
              desc: "Including lead generation, customer acquisition, disaster recovery, and more.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 text-center"
            >
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Contact Nimble Auity for Market Intelligence Services
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Start offshoring market intelligence services today and gain the
          insights to grow your business smarter and faster.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MarketIntelligenceServices;
