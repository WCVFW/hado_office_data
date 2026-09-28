import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Workflow,
  LineChart,
  Settings,
  Shield,
  BarChart3,
  BookOpen,
  Users,
  CheckCircle,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const AIConsulting: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble AI Consulting Services</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Put AI into action and move from pilots to large-scale deployment. Fine-tune AI solutions
          to achieve measurable outcomes that accelerate growth and outsmart competition.
        </p>
        <Button size="lg" variant="secondary">Contact Us</Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg">
          We help you identify the right use cases, run pilot projects, and provide Proof of
          Concept (PoC) to showcase digital transformation in action. From predictive maintenance
          in manufacturing to personalized retail marketing, our AI consulting services maximize
          returns while ensuring transparency, security, and scalability.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Custom Generative AI Consulting Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Workflow,
              title: "Digital Transformation",
              desc: "Modernize legacy systems, integrate digital-first strategies, and enhance agility.",
            },
            {
              icon: Settings,
              title: "Predictive Maintenance",
              desc: "IoT-driven monitoring and condition-based models to reduce downtime.",
            },
            {
              icon: LineChart,
              title: "Analytics Consulting",
              desc: "Data-driven frameworks, BI dashboards, and advanced statistical modeling.",
            },
            {
              icon: Brain,
              title: "AI Product Configuration",
              desc: "Custom neural networks, hyperparameter tuning, and pre-trained models.",
            },
            {
              icon: BookOpen,
              title: "AI Strategy Consulting",
              desc: "AI adoption roadmap, feasibility studies, and value stream mapping.",
            },
            {
              icon: Shield,
              title: "Fully Managed AI",
              desc: "End-to-end lifecycle management, model optimization, and cloud scaling.",
            },
          ].map((s, i) => (
            <Card key={i}>
              <CardHeader>
                <s.icon className="w-10 h-10 text-indigo-600 mb-2" />
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Approach to AI Consulting</h2>
        <ol className="space-y-6">
          {[
            "Discovery Workshop – identify challenges & opportunities for AI intervention.",
            "Rapid Prototyping – create prototypes to demonstrate AI potential.",
            "Data Engineering – preprocess and clean data for optimal outcomes.",
            "Iterative Model Development – enhance models continuously with feedback.",
            "User Acceptance Testing – validate solutions against business needs.",
            "Scaling & Support – deploy enterprise-wide and provide ongoing support.",
          ].map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Sectors We Cater To</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Telecom", "Media & Entertainment", "Travel & Hospitality", "Aerospace",
            "Banking & Financial Services", "Sports", "Education", "Healthcare",
            "Fashion", "Insurance", "Retail", "Manufacturing",
            "Oil & Gas", "Logistics & Transportation",
          ].map((sector, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{sector}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Sets Our AI Consulting Apart?
        </h2>
        <ul className="space-y-4">
          {[
            "Explainable AI (XAI) for transparency and interpretability.",
            "Real-time data processing for immediate insights.",
            "Robust data governance frameworks for compliance and quality.",
            "Continuous model monitoring and optimization.",
            "Ethical AI practices to ensure fairness and trust.",
            "Comprehensive training and post-implementation support.",
          ].map((point, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Generative AI Services",
            "Artificial Intelligence Services",
            "Machine Learning Services",
            "Cognitive Process Automation",
            "Business Intelligence Services",
            "Robotic Process Automation",
          ].map((srv, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{srv}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Electronics Firm Inventory Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our RPA solutions helped an electronics giant streamline inventory management,
                cut costs, and save time.
              </p>
              <Button variant="link" className="mt-3">Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>African Automotive Digital Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We implemented phase-wise automation support, saving costs and improving efficiency
                for a leading automotive firm.
              </p>
              <Button variant="link" className="mt-3">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-left">
          {[
            {
              q: "Can you define AI consulting?",
              a: "It provides strategic advice and technical expertise to implement AI solutions that improve efficiency and competitiveness.",
            },
            {
              q: "What are the primary responsibilities of an AI consultant?",
              a: "Assess business needs, design AI models, integrate solutions, and provide training and support.",
            },
            {
              q: "Which sectors can benefit from AI consulting?",
              a: "Healthcare, automotive, energy, telecommunications, e-commerce, and more.",
            },
            {
              q: "What are the potential risks?",
              a: "Data security concerns, ethical issues, hidden costs, and integration challenges.",
            },
            {
              q: "How do we measure success?",
              a: "By improvements in KPIs, ROI, user adoption, and efficiency gains.",
            },
          ].map((faq, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Transform Obstacles into Opportunities with AI Consulting
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Harness the full potential of intelligent systems to streamline workflows,
          mitigate risks, and accelerate innovation.
        </p>
        <Button size="lg" variant="secondary">Talk to Us Today</Button>
      </section>
    </div>
  );
};

export default AIConsulting;
