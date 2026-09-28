import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mic,
  Brain,
  Headphones,
  FileText,
  BarChart3,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const SpeechRecognitionServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Speech Recognition Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Reduce front office operational costs while improving your bottom-line
          performance with our advanced speech recognition services.
        </p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-4">
          Get secure cloud and on-premise speech recognition services to
          transcribe and document phone calls, conferences, interviews, and more
          with our AI-powered transcription solutions.
        </p>
        <p className="text-lg">
          Using ML, AI, and NLP, we deliver accurate, scalable, and
          context-sensitive transcripts designed for modern workflows.
        </p>
      </section>

      {/* Customer Success Stories */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Big Data Platform for Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A leading bank automated document workflows with our big data
                platform, accelerating efficiency and accuracy.
              </p>
              <Button variant="link" className="mt-3">
                Read more
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Open-Source Analytics Workbench</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We crafted an analytics workbench for a banking client using
                structured and unstructured data, enabling 100% accuracy.
              </p>
              <Button variant="link" className="mt-3">
                Read more
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Speech & Voice Recognition Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "AI Speech/Voice Recognition",
              desc: "Deep learning models, neural optimization, and real-time processing.",
            },
            {
              icon: FileText,
              title: "Speech-to-Text Recognition",
              desc: "Acoustic modeling, NLP, and adaptive learning algorithms.",
            },
            {
              icon: Mic,
              title: "Cognitive Speech Recognition",
              desc: "Semantic analysis, emotion detection, and contextual understanding.",
            },
            {
              icon: Headphones,
              title: "Voice Transcription",
              desc: "Phonetic segmentation, language modeling, and verbatim accuracy.",
            },
            {
              icon: BarChart3,
              title: "Speech Analytics",
              desc: "Keyword spotting, sentiment analysis, and trend identification.",
            },
            {
              icon: Brain,
              title: "Enterprise Speech Recognition",
              desc: "Custom models, adaptive cloud, and high transcript accuracy.",
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

      {/* Industries */}
      <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Sectors We Cater To
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            "Healthcare",
            "Pharmaceutical",
            "Technology",
            "Education",
            "Retail",
            "eCommerce",
            "Automotive",
            "Hospitality",
            "Finance",
            "Insurance",
            "Mortgage",
            "Entertainment",
            "Sports",
            "Real Estate",
            "Legal",
            "Media/Marketing",
          ].map((sector, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-xl shadow-sm border"
            >
              {sector}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Our Speech Recognition Company?
        </h2>
        <ul className="space-y-4">
          {[
            "Robust data security with encryption and GDPR compliance",
            "Continuous innovation with AI, ML, and NLP advancements",
            "Experienced team of linguists, engineers, and scientists",
            "Real-time transcription and interactive voice response",
            "High accuracy even in noisy or multi-speaker environments",
            "Voice intelligence solutions with sentiment analysis & keyword spotting",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Machine Learning",
            "Natural Language Processing (NLP)",
            "Deep Learning",
            "Artificial Neural Networks",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industry Pulse */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">The Industry Pulse</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Predictive Market Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Predictive market research is transforming strategies by
                anticipating market trends with accuracy.
              </p>
              <Button variant="link" className="mt-3">
                Read the Article
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Augmented Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Augmented analytics blends AI and human intelligence to drive
                smarter business decisions.
              </p>
              <Button variant="link" className="mt-3">
                Read the Article
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Speech Recognition Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Engage our end-to-end speech recognition services to benefit from
          phonetic segmentation, language modeling, and AI-driven accuracy.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default SpeechRecognitionServices;
