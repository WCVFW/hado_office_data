import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const ChatSupportServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Chat Support Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Transform your chat support with instant response, higher accessibility, 
          and complete control over your customer data.
        </p>
        <Button className="mt-6 bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-700 space-y-4">
        <p>
          Web users appreciate quick responses. At Nimble Auity, we offer just 
          that with our online chat support services. To improve customer 
          retention without adding more staff, our team uses Voice of the 
          Customer (VoC)-to-Critical-to-Quality (CTQ) mapping to streamline 
          agent handoffs and provide statistically consistent, real-time chat support.
        </p>
        <p>
          Chat support features like intelligent routing, sentiment analysis, 
          and CRM integration are embedded after validated improvements 
          identified through standardized workflows. This facilitates personalized 
          and context-aware interactions that enhance user experience.
        </p>
        <p>
          Whether you want to embed advanced live chat capabilities into your apps 
          and websites or adopt a blended model with AI chatbots and live agents, 
          we deliver futuristic, failproof solutions. Our live chat support 
          outsourcing solutions integrate seamlessly with platforms like Salesforce, 
          Zendesk, and Freshdesk.
        </p>
        <p>
          Nimble live chat support services are engineered around CTQ metrics 
          such as rapid response and First Contact Resolution (FCR), ensuring 
          measurable value from every customer interaction.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          24/7 Live Chat Support Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Video Chat Support",
              desc: "Live video support with screen sharing, encrypted connections, and HD clarity.",
            },
            {
              title: "Business Chat Support",
              desc: "Automated workflows, enterprise-level security, and omni-channel integration.",
            },
            {
              title: "Web Chat Support",
              desc: "Browser-based chat, cross-platform access, and real-time performance monitoring.",
            },
            {
              title: "Live Managed Chat Support",
              desc: "CTQ-aligned operators, SLA-backed responses, and live quality monitoring.",
            },
            {
              title: "Lead Generation Chat Support",
              desc: "Warm up prospects, qualify leads, and capture CRM-integrated lead details.",
            },
            {
              title: "Inbound Live Chat Support",
              desc: "Quick resolutions, multilingual support, and visitor behavior mapping.",
            },
            {
              title: "Social Media Chat Support",
              desc: "Unified messaging, proactive engagement, and social listening tools.",
            },
            {
              title: "Chatbot Integration",
              desc: "AI chatbots with NLP, 24/7 automation, and CRM system integration.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md border-none hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button className="bg-blue-700 text-white font-semibold hover:bg-blue-800">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Email Support Services",
              desc: "Enable faster, AI-driven communication for efficient query resolution.",
            },
            {
              title: "Multi-channel Support",
              desc: "Offer email, chat, social, and phone support from one dashboard.",
            },
            {
              title: "Technical Support Services",
              desc: "Certified experts offering remote troubleshooting and knowledge-based solutions.",
            },
            {
              title: "Consumer Product Support",
              desc: "Product-specific assistance to improve customer satisfaction and retention.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md border-none hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose Nimble Auity for Chat Support?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Customizable Agent Assist",
              desc: "Real-time suggestion engines and contextual workflows tested under DMAIC.",
            },
            {
              title: "Rapid Deployment",
              desc: "Custom APIs ensure zero disruption and seamless CRM integration.",
            },
            {
              title: "AI-Enabled Context Understanding",
              desc: "AI models for higher FCR and improved contextual conversations.",
            },
            {
              title: "Dynamic Chat Automation",
              desc: "Adaptive automation that reduces wait times and boosts service quality.",
            },
            {
              title: "Predictive Analytics",
              desc: "DMAIC analytics forecast demand and minimize inconsistency.",
            },
            {
              title: "Multi-layer Feedback Loop",
              desc: "Continuous learning from each interaction to refine AI and workflows.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md border-none hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Testimonials
        </h2>
        <Card className="shadow-md border-none max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className="italic text-gray-700">
              "We started our relationship with Nimble Auity, which helped us answer chats, emails, 
              and texts. They did the task with utmost professionalism and adhered to timelines. 
              They have been a joy to work with. By placing your bet on this firm, you join a 
              long list of happy clients."
            </p>
            <p className="mt-4 font-semibold">Practice Director,</p>
            <p className="text-gray-600">Mental Health Clinic, Boston, MA</p>
          </CardContent>
        </Card>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Chat Support Services to a UK-based Packers and Movers Firm" },
            { title: "Product Support Services to a Leading Network Security Company" },
          ].map((caseStudy, idx) => (
            <Card key={idx} className="shadow-md border-none hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{caseStudy.title}</h3>
                <Button variant="link" className="text-blue-600 hover:underline p-0">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Try Nimble Chat Support Outsourcing Solutions
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          Grow your business 24/7, drive repeat transactions, and increase 
          positive reviews with our professional chat support.
        </p>
        <Button className="bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default ChatSupportServices;
