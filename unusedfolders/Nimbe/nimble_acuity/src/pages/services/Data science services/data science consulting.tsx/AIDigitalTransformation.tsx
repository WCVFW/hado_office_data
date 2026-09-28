import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Cpu, BarChart3, MessageSquare, FileText, Bot, GitMerge, Users } from "lucide-react";
import DSMainMenu from "../mainmenu";

const services = [
  {
    title: "AI-Driven Strategic Consulting",
    description:
      "Specialized in AI strategy development, implementation, and performance measurement using tools such as Machine Learning, Predictive Analytics, and NLP.",
    icon: Cpu,
  },
  {
    title: "Conversational AI",
    description:
      "Deliver intelligent conversational solutions to enhance customer interactions and streamline communication with AI-powered chatbots and assistants.",
    icon: MessageSquare,
  },
  {
    title: "Computer Vision Services",
    description:
      "Enable machines to interpret and understand visual data through image recognition and object detection, revolutionizing industries from retail to healthcare.",
    icon: BarChart3,
  },
  {
    title: "Intelligent Document Processing",
    description:
      "Automate extraction and processing of unstructured data using AI, ML, and OCR to deliver actionable insights.",
    icon: FileText,
  },
  {
    title: "AI Analytics",
    description:
      "Convert raw data into actionable insights using Machine Learning and Predictive Modelling to drive strategic decision-making.",
    icon: BarChart3,
  },
  {
    title: "Natural Language Processing",
    description:
      "Leverage AI to analyze human language with technologies like Sentiment Analysis and Text Mining to enhance customer engagement.",
    icon: Bot,
  },
  {
    title: "Custom Technology Integration",
    description:
      "Seamlessly integrate AI into your existing systems with expertise in API development and system integration.",
    icon: GitMerge,
  },
  {
    title: "AI-Driven Influencer Marketing",
    description:
      "Use predictive analytics and machine learning to identify the right influencers, maximizing reach and engagement.",
    icon: Users,
  },
];

const tools = ["IBM Watson", "SAP Leonardo", "H2O.ai", "Alteryx", "UiPath"];

const processSteps = [
  "Assessment and Planning",
  "AI Strategy Development",
  "Technology Selection and Pilot Implementation",
  "Scaling Up",
  "Monitoring and Optimization",
  "Feedback Loop and Iteration",
  "Measuring ROI and Business Impact",
  "Future Roadmap",
];

const AIDigitalTransformation: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Intro Section */}
      <DSMainMenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Nimble AI-driven Digital Transformation Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Access advanced algorithms and intelligent automation tools to
          constantly innovate with our AI-driven digital transformation services.
          Engage with us to drive sustainable growth and experience tangible value.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Artificial Intelligence Powered Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="shadow-md hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <service.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Tools We Use</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Process We Follow
        </h2>
        <ol className="space-y-4 max-w-2xl mx-auto">
          {processSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 w-6 h-6 mt-1" />
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Why Should You Partner With Us?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We combine proven expertise, client-centric approaches, and cutting-edge
          AI solutions to deliver innovation and sustainable growth. Our services
          focus on efficiency, scalability, and measurable business impact.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Accelerate Your Success with AI-Driven Digital Transformation
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Don’t just adapt to the digital revolution – actively steer it with our
          AI-powered services. Engage with our team today.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AIDigitalTransformation;
