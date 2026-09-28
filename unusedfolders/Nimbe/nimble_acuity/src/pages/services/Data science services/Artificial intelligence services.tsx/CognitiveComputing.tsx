import React from "react";
import { Brain, Database, Search, Bot, Headphones, LineChart, Cpu, Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSMainMenu from "../mainmenu";

const services = [
  {
    title: "Speech Recognition",
    icon: <Headphones className="w-6 h-6 text-blue-600" />,
    points: [
      "Enable seamless voice-to-text conversions",
      "Enhance user interaction through voice commands",
      "Improve accessibility and communication efficiency",
    ],
  },
  {
    title: "Research & Development",
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    points: [
      "Innovate with cutting-edge technology solutions",
      "Drive progress through targeted research initiatives",
      "Foster innovation in product and process design",
    ],
  },
  {
    title: "Decision Support Systems",
    icon: <LineChart className="w-6 h-6 text-green-600" />,
    points: [
      "Facilitate data-driven strategic decision-making",
      "Optimize operations with real-time insights",
      "Enhance accuracy in complex business scenarios",
    ],
  },
  {
    title: "Cognitive Search",
    icon: <Search className="w-6 h-6 text-orange-600" />,
    points: [
      "Deliver relevant and contextual search results",
      "Improve information retrieval across platforms",
      "Enhance user experience with intuitive searches",
    ],
  },
  {
    title: "Natural Language Processing",
    icon: <Database className="w-6 h-6 text-red-600" />,
    points: [
      "Enable understanding of human language nuances",
      "Automate language-based tasks and analysis",
      "Enhance communication through intelligent interfaces",
    ],
  },
  {
    title: "Cognitive Robotics",
    icon: <Bot className="w-6 h-6 text-indigo-600" />,
    points: [
      "Automate tasks with intelligent robotic systems",
      "Enhance precision and efficiency in operations",
      "Integrate human-like reasoning in robotics",
    ],
  },
  {
    title: "Data Mining & Analytics",
    icon: <Cpu className="w-6 h-6 text-pink-600" />,
    points: [
      "Extract insights from complex data sets",
      "Enable predictive analysis for strategic planning",
      "Enhance decision-making with actionable data",
    ],
  },
  {
    title: "Image & Video Analysis",
    icon: <ImageIcon className="w-6 h-6 text-teal-600" />,
    points: [
      "Recognize patterns in visual data streams",
      "Enhance security through intelligent surveillance",
      "Automate content categorization and tagging",
    ],
  },
];

const CognitiveComputing: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Cognitive Computing Services
        </h1>
        <p className="text-lg text-gray-600">
          Analyze historical data and patterns, detect fraudulent activities, and make data-driven decisions with real-time analysis using NLP and AI.
        </p>
        <div className="flex justify-center gap-8 text-gray-800 font-medium">
          <div>
            <span className="text-2xl font-bold text-blue-600">22+</span>
            <p>Years of Experience</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-blue-600">24/7</span>
            <p>Customer Support</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-blue-600">500+</span>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Proven Performance in Complex Environments",
            "Seamless Cross-Platform Integration",
            "Scalability to Meet Growing Demands",
            "Real-Time Data Processing Capabilities",
            "Custom-Driven Innovation",
            "Holistic Approach to Cognitive Solutions",
          ].map((item, i) => (
            <Card key={i} className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4 bg-blue-50 py-12 rounded-2xl">
        <h2 className="text-2xl font-bold">Partner with us to leverage AI that analyzes complex data in milliseconds.</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default CognitiveComputing;
