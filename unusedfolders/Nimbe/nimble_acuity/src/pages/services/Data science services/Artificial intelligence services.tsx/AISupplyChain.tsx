import React from "react";
import { Truck, Package, BarChart3, ShieldCheck, Cpu, Clock } from "lucide-react";
import DSMainMenu from "../mainmenu";

const AISupplyChain: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700">
          Nimble AI in Supply Chain Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Optimize your supply chain with AI solutions. Boost efficiency, predict demand trends, 
          and ensure better risk management.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16">
        {[
          {
            icon: <Package className="w-10 h-10 text-blue-600" />,
            title: "Supply Chain Optimization",
            desc: "IoT sensors for asset management, supplier collaboration, process automation, and performance data integration.",
          },
          {
            icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
            title: "Healthcare Supply Chain",
            desc: "Centralized patient data, demand forecasting, real-time inventory tracking, and HIPAA compliance.",
          },
          {
            icon: <BarChart3 className="w-10 h-10 text-purple-600" />,
            title: "Supply Chain Analytics",
            desc: "Dashboards, predictive analytics, scenario modeling, and supplier performance monitoring.",
          },
          {
            icon: <Cpu className="w-10 h-10 text-orange-600" />,
            title: "AI in Manufacturing",
            desc: "Predictive maintenance, assembly optimization, quality inspection, route optimization, and supplier risk management.",
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
            Our Approach to AI in Supply Chain
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { step: "01", title: "Data Collection", desc: "Gather data from internal systems, external partners, and IoT devices." },
              { step: "02", title: "Data Processing", desc: "Clean, transform, and structure data for accuracy and consistency." },
              { step: "03", title: "Predictive Analytics", desc: "Apply ML algorithms to detect patterns, trends, and predictions." },
              { step: "04", title: "Decision Making", desc: "Use insights to optimize inventory, routing, and risk management." },
              { step: "05", title: "Action Implementation", desc: "Execute optimized strategies for orders, shipments, and resources." },
              { step: "06", title: "Monitoring & Feedback", desc: "Track performance, refine processes, and ensure improvement." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-blue-600 font-bold text-lg">{item.step}</span>
                <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Benefits of Choosing Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Clock className="w-8 h-8 text-blue-600" />, title: "Improved Efficiency", desc: "Automate workflows and streamline processes for faster turnaround times." },
            { icon: <BarChart3 className="w-8 h-8 text-purple-600" />, title: "Predictive Capabilities", desc: "Forecast demand, predict disruptions, and adapt proactively." },
            { icon: <Cpu className="w-8 h-8 text-orange-600" />, title: "Automation", desc: "AI-driven robotics and automation to minimize errors and manual work." },
            { icon: <ShieldCheck className="w-8 h-8 text-green-600" />, title: "Risk Management", desc: "Real-time visibility to detect risks, ensure continuity, and prevent disruptions." },
            { icon: <Truck className="w-8 h-8 text-red-600" />, title: "Improved Customer Service", desc: "Deliver faster, improve accuracy, and offer personalized experiences." },
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
    </div>
  );
};

export default AISupplyChain;
