import React from "react";
import CCmainmenu from "../CCmainmenu";

const ContactCenterTransformation: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Center Transformation Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Transform legacy call center operations using Lean Six Sigma techniques, validated improvement initiatives, and standardized workflows.
        </p>
        <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Get a Free Consultation
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="text-lg mb-6">
          Businesses need contact centers that deliver <strong>CTQ-driven service improvements</strong> and are in line with <strong>VoC insights</strong> in today's dynamic market. Nimble Acuity provides measurable service quality by redesigning obsolete operations using the <strong>DMAIC lifecycle</strong>. 
        </p>
        <p className="text-lg">
          We help modernize traditional contact centers into future-ready experience centers by implementing digital transformation strategies across self-service channels, mobile apps, chatbots, cognitive IVR, and voicebots.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Contact Center Transformation Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card */}
          {[
            {
              title: "Business Services Support",
              desc: "We analyze areas for improvement with modern workflows and provide strategies to upgrade processes, technologies, and blueprints to deliver the best customer experience."
            },
            {
              title: "Contact Center Cloud Migration Services",
              desc: "Our experts streamline migration to the cloud using DMAIC stabilization, guaranteeing verified progress before switching platforms."
            },
            {
              title: "Conversational AI, Chatbots, and Voicebots",
              desc: "Leverage AI-driven self-service solutions with Poka-Yoke logic to provide uniform customer care across omnichannel touchpoints."
            },
            {
              title: "Contact Center Analytics Services",
              desc: "Perform advanced analysis of live and recorded calls using AI/ML to improve customer experience and provide real-time agent assistance."
            },
            {
              title: "Mobile Applications",
              desc: "We identify and deliver the right mobile apps to enhance customer experience and improve turnaround times."
            },
            {
              title: "Knowledge Management",
              desc: "Support agents in real-time with AI/ML-based decision-making and training to resolve customer issues efficiently."
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Contact Center Transformation</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Flexible Pricing Plans",
            "International Quality Standards (ISO 9001:2015)",
            "ISO/IEC 27001:2022 Certified Data Security",
            "Use of Latest Tools and Technologies",
            "Experienced and Dedicated Lean Six Sigma Team",
            "Quick Turnaround Time"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-blue-600 font-bold text-2xl">✓</span>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Advanced IT Support to UK Motorcycle Insurance Company",
              desc: "We provided level 1 and level 2 support, helping the client increase service levels from 30% to 90%.",
            },
            {
              title: "Inbound Technical Support Help Desk Services",
              desc: "Our team resolved in-depth technical issues for a leading IT services company with multiple IT applications and plug-ins.",
            }
          ].map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
              <p className="text-gray-700">{story.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="italic text-lg mb-6">
            "Nimble Acuity will have a positive effect on any company's turnover. I do not doubt that."
          </p>
          <span className="font-semibold">Marketing Director, Insulation Company, UK</span>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Contact Center?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Contact Nimble Acuity today and get a free consultation on how to modernize and transform your contact center for superior customer experience.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default ContactCenterTransformation;
