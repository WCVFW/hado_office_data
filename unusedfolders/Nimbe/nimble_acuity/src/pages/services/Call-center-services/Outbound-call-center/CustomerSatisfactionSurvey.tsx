import React from "react";
import CCmainmenu from "../CCmainmenu";

const CustomerSatisfactionSurvey: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Customer Satisfaction Survey Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          We implement DMAIC-optimized processes in our customer satisfaction
          survey services to guarantee quantifiable results and enhance loyalty
          by providing the right service at the right time.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg leading-relaxed">
            Customer satisfaction surveys remain a potent tool in how businesses
            grow and manage customer relationships. By including periodic
            feedback collection and analysis into your sales and marketing
            cycles, you can gain significant insights to grow your business and
            acquire more customers.
          </p>
        </div>
        <div>
          <p className="text-lg leading-relaxed">
            Nimble Auity uses Lean Six Sigma frameworks to provide end-to-end
            customer satisfaction survey services with CTQ-aligned feedback
            loops, quick VoC recording, and actionable analytics. With our
            experience and expertise, we design and analyze surveys tailored to
            your business goals.
          </p>
        </div>
      </section>

      {/* Survey Process */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Customer Satisfaction Survey Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Survey Setup",
              desc: "Standardized processes and Poka-Yoke techniques minimize bias, increase response rates, and align feedback with CTQs.",
            },
            {
              title: "Survey Design",
              desc: "We create questionnaires and mechanisms to maximize customer responses and insights.",
            },
            {
              title: "Information Collection",
              desc: "Choose from online, telephone, or email surveys depending on the nature of your project.",
            },
            {
              title: "Survey Scanning & Data Entry",
              desc: "With OCR and ICR technologies, we ensure high data integrity and faster entry times.",
            },
            {
              title: "Survey Analysis & Reporting",
              desc: "We use ANOVA, Correlation, and data mining to extract meaningful insights and present results in charts and tables.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Telemarketing Services", "Virtual Assistant Services", "Customer Support Services", "Lead Generation Services"].map(
            (service, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition"
              >
                <h3 className="font-semibold text-lg">{service}</h3>
                <a href="#" className="text-blue-600 mt-2 inline-block">
                  Read more »
                </a>
              </div>
            )
          )}
        </div>
      </section>

      {/* Call Center Software */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Call Center Software We Use
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700">
          HubSpot, Bitrix24, Talkdesk, Five9, Zendesk, Dixa, Salesforce,
          LiveAgent, Avaya
        </p>
      </section>

      {/* Staffing Calculator */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">
          Call Center Staffing Calculator
        </h2>
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow p-6 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold">Project Type</label>
            <select className="w-full p-2 border rounded">
              <option>Inbound</option>
              <option>Outbound - One time</option>
              <option>Outbound - Ongoing</option>
              <option>Email</option>
              <option>Chat</option>
            </select>

            <label className="block mt-4 mb-2 font-semibold">Service Type</label>
            <select className="w-full p-2 border rounded">
              <option>Order Taking Services</option>
            </select>

            <label className="block mt-4 mb-2 font-semibold">Target Country</label>
            <select className="w-full p-2 border rounded">
              <option>USA</option>
            </select>

            <label className="block mt-4 mb-2 font-semibold">Shift Coverage</label>
            <select className="w-full p-2 border rounded">
              <option>24/7 Coverage</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Average Call Count Per Week</label>
            <input type="number" placeholder="Enter Number of Calls" className="w-full p-2 border rounded" />

            <label className="block mt-4 mb-2 font-semibold">Average Handling Time (Min)</label>
            <input type="number" placeholder="Enter Minutes" className="w-full p-2 border rounded" />

            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
              Check Result
            </button>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          What Can Be Measured in Online Customer Satisfaction Surveys?
        </h2>
        <ul className="max-w-4xl mx-auto list-disc pl-6 space-y-2 text-gray-700">
          <li>Digital navigation quality, service resistance points, CTQ-aligned benefit realization, and product satisfaction mapping.</li>
          <li>Customer happiness with your product or service.</li>
          <li>Identifying issues and addressing problems effectively.</li>
          <li>Market performance insights and sales trends.</li>
          <li>Discovering new market opportunities.</li>
          <li>Improving customer service to better serve patrons.</li>
          <li>User response to website navigation, content, and design.</li>
          <li>Measuring customer benefits from your product/service.</li>
          <li>Employee satisfaction surveys to measure internal customer sentiment.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Contact Us for Customer Satisfaction Surveys
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          We’ll be happy to discuss your needs and provide customer references on request.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CustomerSatisfactionSurvey;