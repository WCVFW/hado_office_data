import React from "react";
import { motion } from "framer-motion";
import { BarChart3, PieChart, Activity, Users, Building2, LineChart } from "lucide-react";
import DSMainMenu from "../mainmenu";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const VisualAnalyticsPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <motion.div {...fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nimble Visual Analytics Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            Transform complex data into interactive, actionable insights with
            Nimble Acuity’s Visual Analytics Services.
          </p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div {...fadeInUp} className="space-y-6 text-lg">
          <p>
            The exponential growth in enterprise data makes it crucial to
            capitalize on insights — record keeping alone is no longer enough.
            At Nimble Acuity, we help you go beyond static charts and tables
            to deliver interactive, meaningful visualizations that accelerate
            smarter decision-making.
          </p>
          <p>
            Our expert analysts use cutting-edge tools like SAS Visual
            Analytics, Tableau, and SPSS to design dashboards and visual models
            that decode complex datasets into business opportunities.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Visual Analytics Services We Offer
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
              title: "Dashboards & Summaries",
              desc: "Interactive dashboards to summarize key business insights across departments.",
            },
            {
              icon: <PieChart className="h-8 w-8 text-blue-600" />,
              title: "Advanced Data Visualization",
              desc: "Transform complex textual data into clear visual insights using charts, graphs, and treemaps.",
            },
            {
              icon: <Activity className="h-8 w-8 text-blue-600" />,
              title: "Predictive Visual Analytics",
              desc: "Visual models for trends, forecasts, and anomaly detection for strategic planning.",
            },
            {
              icon: <Users className="h-8 w-8 text-blue-600" />,
              title: "Customer & Market Insights",
              desc: "Visual profiling of customer behavior, segmentation, and demand analysis.",
            },
            {
              icon: <Building2 className="h-8 w-8 text-blue-600" />,
              title: "Corporate Visualizations",
              desc: "Executive-level dashboards for CEOs and COOs to track KPIs and strategy execution.",
            },
            {
              icon: <LineChart className="h-8 w-8 text-blue-600" />,
              title: "Financial & Sales Analytics",
              desc: "CFOs and CMOs can track financial health and sales performance through real-time visuals.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits by Department */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Benefits of Visual Analytics
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              dept: "Corporate",
              benefit:
                "Discover new data relationships and strengthen strategic leadership with interactive dashboards.",
            },
            {
              dept: "Finance & Business Planning",
              benefit:
                "Monitor financial stability, mitigate risks, and reduce manual effort for recurring analysis.",
            },
            {
              dept: "Sales & Marketing",
              benefit:
                "Uncover new business opportunities and track campaign performance with real-time insights.",
            },
            {
              dept: "Human Resources",
              benefit:
                "Gain deep insights into staffing patterns, engagement, and succession planning.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              className="p-6 border rounded-2xl hover:shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{item.dept}</h3>
              <p className="text-gray-600">{item.benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">
            Nimble Visual Analytics Services to Us
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            With 26+ years of experience and a global client base, Nimble Acuity
            delivers cost-effective, cutting-edge visual analytics services that
            turn your data into actionable strategies.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Contact Us Today
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default VisualAnalyticsPage;
