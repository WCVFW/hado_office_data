import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Globe,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  Cpu,
  BarChart,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const OffshoreCallCenters: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="relative text-center px-6 md:px-20 py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Offshore Call Center Services: <br /> A Global B2B Strategy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Discover why more businesses are choosing offshore call centers like
          Nimble Auity to scale globally, reduce costs, and deliver exceptional
          24/7 customer service.
        </motion.p>
      </section>

      {/* Market Intro */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Digitalization has reshaped global business. The offshore call center
          market, valued at <strong>USD 75.1 billion in 2020</strong>, is
          projected to grow steadily at a 3.1% CAGR through 2028. Nimble Auity
          is at the forefront of this transformation.
        </p>
      </section>

      {/* Why Businesses Choose Offshore */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700">
          Why Businesses Choose Offshore Call Centers
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Global Transformation",
              desc: "India and the Philippines lead offshore services, ranked in the Tholons Services Globalization Index top 10 for digital innovation.",
              icon: Globe,
            },
            {
              title: "Cost Advantage",
              desc: "Competitive pricing saves businesses up to 70%, as highlighted by Deloitte’s studies—making it a key growth driver.",
              icon: DollarSign,
            },
            {
              title: "24/7 Customer Service",
              desc: "Leverage global time zones to deliver round-the-clock support, boosting customer satisfaction and retention.",
              icon: Clock,
            },
            {
              title: "Skilled Talent Pool",
              desc: "English-speaking professionals, government support, and cultural adaptability fuel India and the Philippines’ dominance.",
              icon: TrendingUp,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="p-4 bg-blue-100 rounded-full">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
            Challenges & Solutions in Offshore Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Quality Concerns",
                desc: "Nimble Auity invests in advanced training and QA to ensure world-class service delivery.",
                icon: Shield,
              },
              {
                title: "Cultural & Language Barriers",
                desc: "Cultural training and multilingual capabilities ensure seamless global customer interactions.",
                icon: Globe,
              },
              {
                title: "Cybersecurity Risks",
                desc: "Compliance with ISO/IEC 27001, GDPR, and regular security audits safeguard sensitive data.",
                icon: Shield,
              },
              {
                title: "Customer Insights",
                desc: "Analytics tools uncover behavior patterns, enabling tailored and proactive engagement.",
                icon: BarChart,
              },
            ].map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-4"
                >
                  <Icon className="text-blue-600 mt-1" size={26} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
                    <p className="text-gray-600 text-sm">{c.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Tech */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">
          Future Tech Trends in Offshore Call Centers
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Automation, AI, and cloud-based call centers are reshaping offshore
          services. India and the Philippines are embracing predictive
          technologies, proactive customer engagement, and advanced cybersecurity
          for a digitally enabled future.
        </p>
        <Cpu className="mx-auto text-blue-600" size={42} />
      </section>

      {/* Conclusion */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          The Future of Offshore Call Center Services
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
          Offshore call center services powered by Nimble Auity provide more
          than operational efficiency—they set the benchmark for adaptive,
          customer-first business models. India and the Philippines are not just
          participants in the global market—they’re leading its transformation.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-8 py-3 text-lg shadow-md">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default OffshoreCallCenters;
