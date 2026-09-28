import React from "react";
import { Truck, Map, Users, Clock, BarChart3, Globe } from "lucide-react";
import DSMainMenu from "../mainmenu";

const RouteOptimization: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Route Optimization Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Leverage accurate and flexible routing algorithms that account for
          real-time data of vehicle locations, delivery status, and more for
          highly efficient routes with our Route Optimization Services.
        </p>
      </section>

      {/* Challenge Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Overcome Challenges of Inefficient Routing
        </h2>
        <p className="text-center text-gray-600">
          Outdated data, unexpected obstacles, and inflexible routing algorithms
          can cause delays, lower deliveries, and higher costs. With our dynamic
          route optimization, you can streamline delivery routing systems and
          dispatch management for better efficiency.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Route Optimization Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Truck,
              title: "Vehicle Routing Optimization",
              desc: "Automate delivery processes and optimize vehicle routes to overcome inefficiencies.",
            },
            {
              icon: Map,
              title: "Sales Territory Optimization",
              desc: "Allot resources based on geography, industry, and customer size for maximum sales.",
            },
            {
              icon: Users,
              title: "Workforce Optimization",
              desc: "Efficient workforce management for lower overheads and higher productivity.",
            },
            {
              icon: Clock,
              title: "Real-Time Route Optimization",
              desc: "Determine best delivery routes instantly using predictive analytics and real-time data.",
            },
            {
              icon: Globe,
              title: "Multi-Modal Transportation",
              desc: "Optimize supply chains across rail, truck, air, and ocean freight delivery modes.",
            },
            {
              icon: BarChart3,
              title: "Interactive Dashboards",
              desc: "Analyze your entire delivery chain and compare planned vs actual performance.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <item.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Route Optimization Workflow
        </h2>
        <ol className="space-y-6">
          {[
            "Collection of data from fleets, telemetry, ERP, and operator systems.",
            "Schema-less repository creation for fast access and reporting.",
            "Aggregation of delivery points into groups based on constraints.",
            "Computation of optimal routes considering real-time variables.",
            "Integration with existing systems and 3rd party map displays.",
          ].map((step, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 bg-white shadow p-4 rounded-xl"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                {idx + 1}
              </span>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us for Route Optimization?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Automated planning with real-time tracking and updates.",
            "Dynamic re-routing to save time and reduce costs.",
            "Hardware-independent, cloud-based solutions.",
            "Global coverage with geocoded optimization.",
            "Data security with strict user management and purging options.",
            "Cost efficiency — save 30% on distance and 25% on travel time.",
          ].map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow"
            >
              <span className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></span>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Optimize Your Fleet?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          With 23+ years of expertise in logistics and data science, we help you
          reduce overheads, increase deliveries, and improve efficiency with
          intelligent routing solutions.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default RouteOptimization;
