import React from "react";
import {
  Factory,
  Bot,
  Gauge,
  BarChart3,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Layers,
  Workflow,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const AIManufacturing: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700">
          Nimble AI in Manufacturing
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Get high-value, low-cost AI solutions to detect production flaws,
          forecast demands, and automate systems for enhanced speed and
          precision in your manufacturing processes.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16">
        {[
          {
            icon: <Bot className="w-10 h-10 text-blue-600" />,
            title: "AI in Robotics",
            desc: "Self-directed robotic systems, path optimization, and adaptive learning algorithms.",
          },
          {
            icon: <Workflow className="w-10 h-10 text-green-600" />,
            title: "Production Planning & Scheduling",
            desc: "Demand forecasting models, resource allocation algorithms, and scheduling optimization engines.",
          },
          {
            icon: <Gauge className="w-10 h-10 text-purple-600" />,
            title: "Visual Inspection & Quality Control",
            desc: "AI-powered defect detection, anomaly detection models, and computer vision inspection.",
          },
          {
            icon: <Cpu className="w-10 h-10 text-orange-600" />,
            title: "Factory Automation",
            desc: "IoT-enabled automation, process optimization, and smart factory integrations.",
          },
          {
            icon: <CheckCircle2 className="w-10 h-10 text-red-600" />,
            title: "Predictive Maintenance",
            desc: "Failure prediction algorithms, condition monitoring, and predictive analytics models.",
          },
          {
            icon: <Layers className="w-10 h-10 text-indigo-600" />,
            title: "Product Development",
            desc: "Generative design algorithms, AI prototyping tools, and demand analysis AI.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Process Flow */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-700">
            Our Approach to AI in Manufacturing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "Evaluate workflows, equipment efficiency, and key performance indicators.",
              },
              {
                step: "02",
                title: "Analysis",
                desc: "Analyze equipment data to detect inefficiencies, risks, and opportunities.",
              },
              {
                step: "03",
                title: "Prototyping",
                desc: "Validate AI solutions with prototypes, test feasibility, and refine.",
              },
              {
                step: "04",
                title: "Custom AI Development",
                desc: "Develop and tune AI modules to align with your automation requirements.",
              },
              {
                step: "05",
                title: "Integration & Testing",
                desc: "Deploy AI solutions in controlled pilots, monitor performance, and iterate.",
              },
              {
                step: "06",
                title: "Full Deployment",
                desc: "Implement solutions across production floors, monitor, and continuously improve.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-blue-600 font-bold text-lg">
                  {item.step}
                </span>
                <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Why Choose Us for AI in Manufacturing?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Factory className="w-8 h-8 text-blue-600" />,
              title: "Digital Twin Technology",
              desc: "Create virtual replicas of production processes to reduce errors and accelerate innovation.",
            },
            {
              icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
              title: "Rapid Prototyping",
              desc: "Iterative testing of AI models to reduce time-to-market and ensure deployment efficiency.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
              title: "Data Security",
              desc: "Robust cybersecurity to safeguard sensitive production data from threats.",
            },
            {
              icon: <Layers className="w-8 h-8 text-orange-600" />,
              title: "Adaptive Learning Systems",
              desc: "AI that adjusts to changing production conditions for ongoing optimization.",
            },
            {
              icon: <Gauge className="w-8 h-8 text-red-600" />,
              title: "Energy Efficiency",
              desc: "Automated energy management systems to reduce consumption and environmental impact.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {item.icon}
              <h4 className="font-semibold text-lg mt-4">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">
            Customer Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title:
                  "Electronics Giant Streamlined Inventory Management",
                desc: "We helped an electronics firm systematize its inventory using tailored RPA solutions for cost-efficiency.",
              },
              {
                title:
                  "African Automotive Firm’s Digital Transformation",
                desc: "An automotive giant adopted digital transformation with our low-cost, efficient RPA services.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:underline">
                  Read more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIManufacturing;
