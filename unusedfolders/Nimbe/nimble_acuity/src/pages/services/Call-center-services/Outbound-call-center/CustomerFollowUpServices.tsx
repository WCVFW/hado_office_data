import React from "react";
import CCmainmenu from "../CCmainmenu";

const CustomerFollowUpServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Customer Follow-up Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Simplify your marketing campaign and strengthen your core activities by
          building customer relationships and tracking them across multiple
          communication channels.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 text-gray-700">
        <p>
          Are you facing challenges in your marketing campaigns because of
          inconsistent customer follow-ups? If yes, do not worry. Our customer
          follow-up services can help you streamline your marketing campaigns
          and strengthen your core marketing activities by building customer
          relationships and following up with them via multiple communication
          channels, including phones, email, chats, etc.
        </p>
        <p>
          Nimble Auity is an expert provider of customer follow-up services in
          India. We have a highly experienced team of contact center executives
          who are proficient in soft-selling procedures. They can forge
          relationships with the clients by providing information and rendering
          support.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Customer Follow-up Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">
              Follow-up for Providing Information
            </h3>
            <p>
              We use Value Stream Mapping (VSM) to identify and eliminate
              Non-Value-Add (NVA) customer interactions across channels. This
              ensures productive engagements and steady rapport without
              overwhelming customers.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">
              Follow-up for Rendering Testimonials
            </h3>
            <p>
              We gather customer insights by focusing on touchpoints and create
              effective marketing campaigns. Our team simplifies case studies and
              manuals to help customers better understand your services.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">Ongoing Support</h3>
            <p>
              Rely on us for round-the-clock support. We leverage modern tools
              and Poka-Yoke mechanisms to lower errors and provide prompt,
              organized client service.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">
              Follow-up for Audit
            </h3>
            <p>
              We collect customer feedback via phone, SMS, or email to help you
              refine business processes and adopt necessary improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Call Center Software We Use</h2>
        <p className="text-gray-700">
          HubSpot · Bitrix24 · Talkdesk · Five9 · Zendesk · Dixa · Salesforce ·
          LiveAgent · Avaya
        </p>
      </section>

      {/* Industries */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">
          Industries We Cater To
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700">
          Aerospace · Agriculture · Automotive · Customs Brokerage · Defense ·
          Energy · Education · Entertainment · Finance · Food · Healthcare ·
          Hospitality · IT · Logistics · Manufacturing · Multimedia · Public
          Sector · Pharmaceutical · Retail & e-Commerce · Telecom · Insurance ·
          Legal · Real Estate
        </p>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Nimble for Customer Follow-up Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Flexible Pricing Options",
              desc: "Custom models based on volume, industry, and business needs.",
            },
            {
              title: "100% Information Security",
              desc: "ISO/IEC 27001:2022 certified with foolproof infrastructure.",
            },
            {
              title: "State-of-the-art Infrastructure",
              desc: "Modern tools, communication systems, and uninterrupted facilities.",
            },
            {
              title: "High Quality",
              desc: "Verified increases in ROI and campaign success.",
            },
            {
              title: "24/7 Availability",
              desc: "Real-time monitoring and VoC-to-CTQ mapping.",
            },
            {
              title: "Experienced Team",
              desc: "26+ years of experience with 50+ specialists and 100+ man-years of management expertise.",
            },
            {
              title: "Ease of Scalability",
              desc: "Resources and infrastructure to scale up seamlessly.",
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

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">
              Nimble Built a Robust Outbound Cold Call Process
            </h3>
            <p>
              Helped a US IT giant launch a new product with B2B outbound call
              center services that built awareness among potential customers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">
              Nimble Provided Lead Generation to a European Company
            </h3>
            <p>
              Assisted a precision equipment manufacturer in generating leads
              through pre-sales certification and B2B outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Customer Testimonials</h2>
        <blockquote className="italic text-gray-700 bg-gray-100 p-6 rounded-2xl shadow">
          “The team Nimble Auity have provided excellent support and always gone
          the extra mile. It has been a great experience working with them.”
          <br />
          <span className="block mt-4 font-semibold">
            — Co-Founder, Tech-startup (UK)
          </span>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Customer Follow-up Services
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          By validating customer value delivery at each touchpoint, our
          CTQ-focused follow-up services increase campaign ROI and loyalty in
          quantifiable ways.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default CustomerFollowUpServices;
