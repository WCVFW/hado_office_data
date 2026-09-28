import React from "react";
import CCmainmenu from "../CCmainmenu";

const TelesalesCustomerAcquisitionPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Telesales Customer Acquisition Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          We promote your products and services to the right audience by educating and offering a value proposition through voice calls.
        </p>
        <p className="mt-4 text-lg">Starting at $8/hour</p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Increasing your existing customer base is the fastest way to achieve short-term goals and grow your business. Acquiring new customers requires efficient sales personnel and well-planned infrastructure, and today's disruptive technologies make reaching new customers more challenging. Nimble Acuity provides cutting-edge telesales customer acquisition services that integrate omnichannel marketing strategies to help you identify opportunities for business growth.
        </p>
        <p>
          Whether you are a startup onboarding new customers or an established business aiming to expand your market share, our telesales services can help you reach your goals efficiently.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Telesales Customer Acquisition Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          {[
            {
              title: "Customized Inbound and Outbound Telesales Services",
              desc: "Our team makes custom outbound calls and handles incoming calls regarding your business efforts. Our state-of-the-art CRM ensures you stay on top of every potential customer and their queries."
            },
            {
              title: "Lead Generation",
              desc: "We create focused messages, research target markets, and ensure your value proposition is clearly defined, resulting in definitive appointments for your sales team."
            },
            {
              title: "Online Market Research",
              desc: "We handle surveys, customer opinion research, mystery shopping, and more to customize offerings according to consumer demands."
            },
            {
              title: "Multi-media Campaigns",
              desc: "We plan and execute efficient telesales campaigns through calls, emails, and social media for maximum campaign effectiveness."
            },
            {
              title: "Customer Retention Services",
              desc: "Our expert telecallers help retain customers by implementing timely retention strategies to prevent churn."
            },
            {
              title: "Search Engine Marketing",
              desc: "Target wide demographics efficiently with our SEM strategies to influence customers researching online service providers."
            },
            {
              title: "Cross-sell and Up-sell Programs",
              desc: "Enhance profits and customer service through cost-effective cross-selling and up-selling programs."
            }
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Other Specialized Telesales Services
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 list-disc list-inside text-gray-700">
          {[
            "Product Information Requests",
            "Project Detection & Qualification",
            "Appointment Scheduling",
            "B2B & B2C Telesales",
            "Database Creation and Update",
            "Workflow Management",
            "Email Confirmation and Follow-Up",
            "Fulfillment and Payment Processing",
            "Personal Contact Programs"
          ].map((item, idx) => (
            <li key={idx} className="p-4 bg-gray-100 rounded-xl text-center shadow hover:shadow-md transition">{item}</li>
          ))}
        </ul>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Telesales Customer Acquisition Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              step: "01. Create the Right Database",
              desc: "We identify the best list of prospective clients or customers based on analytics and history, tailored to local or global markets."
            },
            {
              step: "02. Employ Omnichannel Approach",
              desc: "Reach prospects not only through calls but also via email, social media, and other channels for maximum engagement."
            },
            {
              step: "03. Lead Nurturing through Marketing Automation",
              desc: "We nurture leads based on their readiness, ensuring minimal loss and automating repetitive tasks for efficiency."
            },
            {
              step: "04. Powerful CRM Pipeline",
              desc: "Our CRM provides a bird's-eye view of all telesales activities, enabling direct collaboration, campaign monitoring, and relationship nurturing."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{item.step}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clientele Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Our Clientele</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          {[
            "Online & Retail Consumer Catalog Companies",
            "B2B Suppliers and Vendors",
            "Online Retailers",
            "Resellers of Consumer & Business Products",
            "Nonprofit & Fund-raising Organizations",
            "Business Publishers",
            "Advertising Agencies",
            "Multinational Companies"
          ].map((client, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">{client}</div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">IT Support to UK Motorcycle Insurance Company</h3>
            <p>Nimble Acuity provided L1, L2, and L3 support, scaling service from 30% to 90% for the client.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Inbound Technical Support Help Desk Services</h3>
            <p>Streamlined inbound support for a leading IT services company to improve efficiency and handle bottlenecks.</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-6 bg-gray-50">
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "I'm impressed! Nimble Acuity is doing fantastic work and providing exceptional telesales customer acquisition services."
          <footer className="mt-4 font-semibold">– Reservations Supervisor, Travel Website Company, CA</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Maximize Your Customer Reach</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Partner with Nimble Acuity to implement customized acquisition solutions and expert telesales strategies to grow your customer base and boost revenue.
        </p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default TelesalesCustomerAcquisitionPage;
