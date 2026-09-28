import React from "react";
import CCmainmenu from "../CCmainmenu";

const LocalLeadGeneration: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Outsource Local Lead Generation Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          If gaining high-quality local leads is impacting your revenue growth, it may be time to shift to a process-led lead generation model. At Nimble Acuity, we implement a Voice of the Customer (VoC) to Critical to Quality (CTQ) mapping approach to ensure your lead qualification aligns with revenue goals.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <p className="mb-6">
          Nimble Acuity has been a leading provider of local lead generation services and can be your one-stop shop for all your needs. Our team specializes in generating local leads that help boost revenue quickly. We leverage the latest tools, technologies, and infrastructure to ensure delivery of only high-quality leads.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Local Lead Generation Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Local Sales Leads",
            "Local B2C Leads",
            "Local B2B Leads",
            "Local Technology Sales Leads",
            "Qualified Local Sales Leads",
            "Local Insurance Sales Leads",
            "Local Telemarketing Leads",
            "Local Building Permit Sales Leads",
            "Local Industrial Sales Leads",
            "Local MLM Lead Generation",
          ].map((service) => (
            <div key={service} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call Center Software */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Call Center Software We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-green-700 font-medium">
          {["HubSpot","Bitrix24","Talkdesk","Five9","Zendesk","Dixa","Salesforce","LiveAgent","Avaya"].map((tool) => (
            <span key={tool} className="border px-4 py-2 rounded-full bg-green-50 hover:bg-green-100 transition">
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Local Lead Generation Process */}
      <section className="bg-green-50 py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Nimble Acuity's Local Lead Generation Process
        </h2>
        {[
          {
            step: "01. Project Assignment",
            desc: "After the project is outsourced, our project manager assigns a dedicated team based on volume, client requirements, and deadlines."
          },
          {
            step: "02. Implementation of the Strategy",
            desc: "Trained agents implement a DMAIC-guided lead generation strategy, isolating root causes behind low lead yield and applying validated improvements. A similar workflow redesign resulted in a 32.2% cycle time reduction for a B2B client."
          },
          {
            step: "03. Quality Control and Transfer",
            desc: "Once potential customers are identified, the quality is tracked, and leads are transferred to the client."
          },
          {
            step: "04. Feedback Installation",
            desc: "As the process evolves, we streamline it to improve lead quality over time."
          }
        ].map((item) => (
          <div key={item.step} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Nimble Section */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Why Choose Nimble for Local Lead Generation Services?
        </h2>
        <ul className="list-disc list-inside space-y-4">
          <li><strong>Affordable Prices:</strong> Very affordable options perfect for your budget.</li>
          <li><strong>ISO 9001:2015 Certified:</strong> Standardized workflows and Lean Six Sigma process controls ensure CTQ compliance.</li>
          <li><strong>Best Infrastructure:</strong> Cutting-edge call center tools, technologies, and office spaces.</li>
          <li><strong>Information Security:</strong> ISO/IEC 27001:2022 ISMS certification ensures data safety.</li>
          <li><strong>Experienced Call Center Agents:</strong> Talented agents with excellent communication skills.</li>
          <li><strong>Single Point of Contact:</strong> Dedicated project manager for all client needs.</li>
          <li><strong>24/7 Availability:</strong> Project managers, sales teams, and call center personnel available round the clock.</li>
          <li><strong>Fast Processing Time:</strong> Lean Six Sigma scheduling reduces cycle time and accelerates lead delivery. 45.28% increase in client retention achieved through standardized handoffs.</li>
          <li><strong>Easy Scalability:</strong> Skills, resources, and bandwidth to scale service requirements as needed.</li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Other Services You May Benefit From
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-green-700 font-medium">
          {["Outbound Call Center","800 Answering Services","Telemarketing Services","Appointment Setting"].map((service) => (
            <span key={service} className="border px-4 py-2 rounded-full bg-green-50 hover:bg-green-100 transition">{service}</span>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-green-50 py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Outbound Call Center & B2B Lead Generation</h3>
            <p>
              Nimble provided a leading European manufacturing company with fast, reliable lead generation services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Outbound Telemarketing & B2C Lead Generation</h3>
            <p>
              Nimble drove brand awareness for a US retail giant, rolling out festive offers to increase customer footfalls during the holiday season.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto text-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Customer Testimonials</h2>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
          "I'm impressed! :) You ladies and gentlemen are doing fantastic work. Thank you so much!"
          <footer className="mt-4 font-semibold">Reservations Supervisor, Travel Website Company, CA</footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Outsource Local Lead Generation Services to Nimble Acuity</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          If you are looking for a profitable, efficient, reliable, and fast local lead generation service provider, Nimble Acuity is the right partner for you.
        </p>
        <button className="bg-white text-green-600 font-bold px-6 py-3 rounded shadow hover:bg-green-100 transition">
          Get in Touch Today
        </button>
      </section>
    </div>
  );
};

export default LocalLeadGeneration;
