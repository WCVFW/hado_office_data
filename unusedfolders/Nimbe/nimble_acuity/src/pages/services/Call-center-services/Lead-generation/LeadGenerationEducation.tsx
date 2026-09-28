import React from "react";
import CCmainmenu from "../CCmainmenu";

const LeadGenerationEducation: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Lead Generation for Education Sector
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Connect with enrollees searching for courses and training programs. Outsource your lead generation to experts and boost conversions.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <p className="mb-6">
          If your sales team is stretched, it’s time to unburden them by outsourcing lead generation for the education sector to Nimble. We help you connect with high-quality leads and maximize revenue while saving time and effort.
        </p>
        <p>
          Our proven methodology ensures that your business reaches the right audience and nurtures them into paying customers.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Lead Generation Services for Education Sector</h2>
        {[
          {
            title: "Appointment Setting",
            desc: "Lock appointments with informed leads after educating them about your courses, services, and benefits for faster conversions."
          },
          {
            title: "Cold Calling",
            desc: "Reach verified prospects and present solutions to their pain points, ensuring higher engagement and lead quality."
          },
          {
            title: "Lead Generation",
            desc: "Craft multichannel campaigns to nurture leads until they are ready to enroll, boosting ROI and bottom line."
          }
        ].map(service => (
          <div key={service.title} className="mb-6 bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Call Center Software */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Call Center Software We Use</h2>
        <div className="flex flex-wrap justify-center gap-4 text-green-700 font-medium">
          {["HubSpot","Bitrix24","Talkdesk","Five9","Zendesk","Dixa","Salesforce","LiveAgent","Avaya"].map(tool => (
            <span key={tool} className="border px-4 py-2 rounded-full bg-green-50 hover:bg-green-100 transition">{tool}</span>
          ))}
        </div>
      </section>

      {/* Lead Generation Process */}
      <section className="bg-green-50 py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Lead Generation Process for Education Sector</h2>
        {[
          { step: "01. Requirement Analysis", desc: "Analyze your needs and create detailed documentation to plan a comprehensive strategy." },
          { step: "02. Building Portal for Engagement", desc: "Implement content marketing on your website to become quickly discoverable and engaging." },
          { step: "03. Capture & Nurture Online and Offline Demand", desc: "Enhance your online/offline presence to build reputation and attract leads." },
          { step: "04. Conversion of Traffic into Subscribers", desc: "Guide responsive audiences through lead nurturing to move them into the sales stage." },
          { step: "05. Appointment Setting", desc: "Map appointments with your sales team once leads are warmed for efficient closure." },
          { step: "06. Delivery of Lead Database", desc: "Hand over a comprehensive database of qualified leads for faster sales processing." }
        ].map(item => (
          <div key={item.step} className="mb-6 bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">{item.step}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Nimble for Education Lead Generation?</h2>
        <ul className="list-disc list-inside space-y-4">
          <li><strong>Certified Provider:</strong> ISO 9001:2015 certified with 26+ years of experience delivering high-quality solutions.</li>
          <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, NDA-signed experts, and secure handling of all data.</li>
          <li><strong>High Accuracy & Quality:</strong> Multichannel verified leads delivered into your CRM with zero errors.</li>
          <li><strong>Short Turnaround Time:</strong> Fast deployment and delivery to avoid missing new sales opportunities.</li>
          <li><strong>Scalability:</strong> Easily scale up or down based on your business needs and campaign response.</li>
          <li><strong>Pocket-friendly Pricing:</strong> Competitive pricing with flexible service add-ons for cost-effective solutions.</li>
          <li><strong>Single Point of Contact:</strong> Dedicated agent managing your campaign progress and support.</li>
          <li><strong>Experienced Team:</strong> 200+ members including lead generation agents, analysts, and project managers.</li>
          <li><strong>Modern Infrastructure:</strong> Secure, cutting-edge technology to manage and deliver leads efficiently.</li>
          <li><strong>Lead Generation Tools & Secure File Sharing:</strong> AI/ML-enabled automation, secure VPN & FTP for file sharing.</li>
          <li><strong>Round-the-clock Availability:</strong> 24/7/365 support in your local time zone.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Inbound Technical Support</h3>
            <p>Nimble provided inbound tech support to a leading IT company, managing help desk operations with stellar performance.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Outbound Telemarketing & B2C Lead Generation</h3>
            <p>Nimble drove brand awareness for a US retail giant and rolled out festive offers to increase footfalls at brand outlets.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-12 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Customer Testimonials</h2>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
          "I'm impressed! You ladies and gentlemen have done a fabulous work. Thank you so much!"
          <footer className="mt-4 font-semibold">Reservations Supervisor, Travel Website Company, CA</footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Outsource Education Lead Generation to Nimble</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Generate warm, qualified leads, scale effortlessly, and increase enrolments with Nimble’s expert lead generation services for education.
        </p>
        <button className="bg-white text-green-600 font-bold px-6 py-3 rounded shadow hover:bg-green-100 transition">
          Get Started Today
        </button>
      </section>

    </div>
  );
};

export default LeadGenerationEducation;
