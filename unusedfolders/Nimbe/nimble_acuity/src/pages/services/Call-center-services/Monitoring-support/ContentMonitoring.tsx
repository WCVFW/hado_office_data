import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Monitor, Globe, Shield, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ContentMonitoring: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nimble Auity Content Monitoring Support Services
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Remove inappropriate and offensive content instantly and safeguard your brand reputation with
            real-time monitoring — starting at just <span className="font-bold">$8/hour</span>.
          </p>
          <Button className="bg-white text-indigo-700 font-semibold hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Businesses need organized monitoring systems tied to CTQ (Critical-to-Quality) metrics derived from
          Voice of the Customer (VoC). User-generated material can boost or harm your brand reputation.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Nimble provides DMAIC (Define, Measure, Analyze, Improve, Control)-validated content moderation services
          that improve accuracy, ensure compliance, and protect your brand image across websites, blogs,
          forums, social media, and more.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Content Monitoring Support Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Text Monitoring",
              desc: "We eliminate inappropriate comments, spam, trolling, and harmful text across platforms.",
            },
            {
              title: "Multimedia Monitoring",
              desc: "24/7 screening of visual content with Poka-Yoke compliance to prevent violations.",
            },
            {
              title: "Social Media Monitoring",
              desc: "Moderate tweets, posts, and messages before they affect your audience.",
            },
            {
              title: "Self-Owned Machine Report",
              desc: "Screen videos globally with rules tailored to each region’s guidelines.",
            },
            {
              title: "Sensitive Word Inspection",
              desc: "Root cause analysis to detect and block objectionable words or expressions.",
            },
            {
              title: "Live Streaming",
              desc: "Real-time monitoring of live streams across Asia, LATAM, and beyond.",
            },
            {
              title: "Online News Monitoring",
              desc: "Track news to identify risks and maximize PR response time.",
            },
          ].map((service, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nimble’s Content Monitoring Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            "Study Client & Regional Guidelines",
            "Screening & Monitoring Online Content",
            "Flagging",
            "Restriction & Moderation",
            "Community Engagement",
          ].map((step, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow">
              <CheckCircle className="mx-auto text-indigo-600 mb-3" size={32} />
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble for Content Monitoring?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield size={32} className="text-indigo-600" />,
              title: "Automated Detection",
              desc: "Smart AI tools eliminate errors and scan every corner of the web.",
            },
            {
              icon: <Users size={32} className="text-indigo-600" />,
              title: "Multilingual Team",
              desc: "Monitor content in multiple languages and dialects across regions.",
            },
            {
              icon: <Monitor size={32} className="text-indigo-600" />,
              title: "Global Reach",
              desc: "Efficient moderation for SMEs to global enterprises with 45%+ retention boost.",
            },
            {
              icon: <Globe size={32} className="text-indigo-600" />,
              title: "Press Monitoring",
              desc: "Track content across broadcast, print, and online channels.",
            },
            {
              icon: <CheckCircle size={32} className="text-indigo-600" />,
              title: "Affordable Plans",
              desc: "Flexible, customizable pricing starting at just $8/hour.",
            },
          ].map((benefit, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p className="italic text-gray-700 mb-3">
              “What wonderful customer service! I never had this superb support from any other company before.”
            </p>
            <footer className="text-gray-900 font-semibold">
              Spokesperson, Pet Pharmacy Company, Florida, USA
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Protect Your Brand with Nimble Content Monitoring
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Leverage real-time monitoring, global compliance, and AI-driven moderation to maintain a strong
          brand reputation.
        </p>
        <Button className="bg-white text-indigo-700 font-semibold hover:bg-gray-100">
          Get Started Today
        </Button>
      </section>
    </div>
  );
};

export default ContentMonitoring;
