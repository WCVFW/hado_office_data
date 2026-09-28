import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const ContentModeration: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Content Moderation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Ensure brand integrity, regulatory compliance, and user trust with our
          AI, Human, and Hybrid content moderation services for enterprise
          digital ecosystems.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-10 space-y-4">
        <p>
          Nimble Auity prioritizes cultural sensitivity, error-proof content
          control, and VoC-to-CTQ alignment in the design of our multilingual
          content moderation services, which follow Lean Six Sigma best
          practices. With real-time or near real-time moderation, we help
          monitor, filter, and manage voluminous user-generated content while
          ensuring cultural sensitivity and adherence to global and regional
          content laws (COPPA/DSA/GDPR, etc.).
        </p>
        <p>
          Our automated content moderation solutions are backed by proprietary
          algorithms designed to handle high-volume content with remarkable
          speed and accuracy. Aligning with your community policies, our in-house
          moderation system allows for a 50% decrease in review turnaround time,
          supported by verified increases in process effectiveness.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Our Range of Professional Content Moderation Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Image Content Moderation",
              desc: "AI-driven monitoring to detect and filter inappropriate images. Customizable filters, industry-specific parameters, and specialized guidelines for listings, photos, and graphics.",
            },
            {
              title: "Social Media Content Moderation",
              desc: "Statistical root cause detection with NLP to reduce NVA tagging. Sentiment analysis, brand safety protocols, and hybrid moderation models for trending content.",
            },
            {
              title: "Video Content Moderation",
              desc: "AI-powered frame-by-frame video analysis, inappropriate content detection, and enriched metadata for better categorization.",
            },
            {
              title: "Metaverse Moderation",
              desc: "Robust moderation for AR/VR spaces. Protect users from harassment, abuse, and unsafe content creation within the metaverse.",
            },
            {
              title: "User-generated Content Moderation",
              desc: "AI capabilities to evaluate UGC contextually. Promote positive interactions and refine moderation strategies using customer feedback.",
            },
          ].map((service, i) => (
            <Card key={i} className="shadow-md rounded-2xl">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Additional Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          <li>Inbound Call Center Services</li>
          <li>Outbound Call Center Services</li>
          <li>Cold Calling Services</li>
          <li>Telemarketing Services</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Why Choose Nimble Auity for Content Moderation?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Precision-driven AI Moderation",
              desc: "Deliver high-precision content filtering and reduce error rates by up to 70%.",
            },
            {
              title: "Scalable Solutions",
              desc: "Adapt to fluctuating content volumes with scalable hybrid solutions.",
            },
            {
              title: "Compliance Adherence",
              desc: "Stay compliant with COPPA, DSA, GDPR, and more while avoiding risks.",
            },
            {
              title: "Operational Efficiency",
              desc: "Reduce costs and streamline moderation workflows by outsourcing to Nimble.",
            },
            {
              title: "Multi-lingual Moderation",
              desc: "AI models and native moderators trained in 20+ languages.",
            },
            {
              title: "Humanized Moderation",
              desc: "Culturally informed moderation that evaluates intent, context, and sensitivities.",
            },
          ].map((benefit, i) => (
            <Card key={i} className="shadow-md rounded-2xl">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Client Success Stories
        </h2>
        <div className="space-y-4">
          <p>
            Nimble provided Call Quality Monitoring to a leading tech firm,
            improving operational oversight.
          </p>
          <p>
            Nimble delivered customer support services to an online medication
            retailer, ensuring high-quality user experiences.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Testimonials</h2>
        <blockquote className="bg-white shadow-md rounded-2xl p-6 italic text-gray-700">
          “Working with Nimble has been a great experience. They quickly learned
          our line of business, adapted to our requirements, and have consistently
          performed well. They’ve also gone above and beyond their duty. A
          reliable partner.”
          <footer className="mt-4 text-right font-semibold">
            – Spokesperson, Executive Recruitment Firm, US
          </footer>
        </blockquote>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Partner with Nimble Auity</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Are you ready to use Lean Six Sigma-aligned moderation services to
          lower risk, cycle time, and compliance exposure? Create a secure
          digital ecosystem by partnering with us today.
        </p>
        <Button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default ContentModeration;
