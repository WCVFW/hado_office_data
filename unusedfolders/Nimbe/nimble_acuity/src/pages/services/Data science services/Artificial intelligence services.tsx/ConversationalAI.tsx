import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Languages,
  Shield,
  TrendingUp,
  Database,
  Mic,
  BarChart3,
  Smile,
  Headphones,
  CheckCircle,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const ConversationalAI: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Conversational AI Services</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Step into the Future of Customer Engagement and Retention with
          Human-like Conversational AI Services.
        </p>
        <Button size="lg" variant="secondary">
          Talk to Our Experts
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-4">
          Our conversational AI services simulate human interactions with
          precision, providing your business with personalized, scalable, and
          intelligent solutions that enhance customer experience and convert
          leads effortlessly.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Profound Conversational AI Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: MessageSquare,
              title: "Natural Language Processing (NLP)",
              desc: "Enhance system intelligence, comprehension, and contextual recognition for richer conversations.",
            },
            {
              icon: Mic,
              title: "Speech Recognition",
              desc: "Deliver engaging, real-time interactions with precise voice-to-text and transcription solutions.",
            },
            {
              icon: Headphones,
              title: "Chatbot Development",
              desc: "Automate inquiries with customizable chatbots integrated across multiple channels.",
            },
            {
              icon: Smile,
              title: "Sentiment Analysis",
              desc: "Extract and analyze customer sentiment to adapt responses and improve satisfaction.",
            },
            {
              icon: Mic,
              title: "Speech Synthesis",
              desc: "Produce realistic, natural-sounding voice outputs with multilingual support.",
            },
            {
              icon: Languages,
              title: "Multilingual Support",
              desc: "Expand global reach and ensure cultural sensitivity by removing language barriers.",
            },
            {
              icon: TrendingUp,
              title: "Intent Recognition",
              desc: "Precisely map customer intent with advanced algorithms and continuous learning.",
            },
            {
              icon: BarChart3,
              title: "Conversational Analytics",
              desc: "Monitor and refine interactions with 24/7 analytics and behavior-driven insights.",
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <item.icon className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Our Conversational AI Services?
        </h2>
        <ul className="space-y-4">
          {[
            "Cultural and Linguistic Adaptability to reach diverse global markets.",
            "Scalability for Growth, adapting to market demands seamlessly.",
            "Advanced Data Security with encryption and compliance controls.",
            "Enhanced Decision Making powered by conversational analytics.",
            "Seamless Integration with existing enterprise systems.",
            "Expert Support and Consultation for long-term success.",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Additional Services to Power Your Business
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Artificial Intelligence Services",
            "Data Engineering Services",
            "Data Analytics Services",
            "Data Science Consulting Services",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Clients Speak</h2>
        <blockquote className="italic text-lg text-gray-700 mb-4">
          “I am more than pleased with the way the project has turned out and
          with the overall experience itself. I have been raving about your
          company to everyone I know, and I will definitely be sending you more
          projects in the future.”
        </blockquote>
        <p className="font-semibold">CEO, Top Logistics Company in the US</p>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
                Reducing Onboarding Time for LA-based Bank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our UiPath RPA solutions helped a Los Angeles bank cut client
                onboarding time by 90%, saving 40+ hours of workload daily.
              </p>
              <Button variant="link" className="mt-3">
                Read the Case Study
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Streamlined Inventory for Electronics Firm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our automation solutions improved accuracy and speed for a
                global electronics company managing 50,000+ packages daily.
              </p>
              <Button variant="link" className="mt-3">
                Read the Case Study
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Revolutionize Your Communication Strategies
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Partner with Nimble Acuity to implement human-like conversational AI that
          transforms engagement, boosts retention, and maximizes ROI.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default ConversationalAI;
