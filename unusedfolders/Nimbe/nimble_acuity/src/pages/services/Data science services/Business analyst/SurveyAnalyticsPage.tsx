import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  PieChart,
  LineChart,
  Search,
  Filter,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const SurveyAnalyticsPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6 text-center">
        <motion.div {...fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nimble Survey Analytics Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            Transform survey data into actionable insights with Nimble Acuity’s
            expert survey analytics solutions.
          </p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div {...fadeInUp} className="space-y-6 text-lg">
          <p>
            In today’s competitive market, businesses must constantly improve
            services and customer experience. At Nimble Acuity, we provide
            reliable survey analytics to help you understand customer behavior,
            preferences, and needs with precision.
          </p>
          <p>
            Backed by decades of business analytics experience, we offer
            cost-effective, high-quality survey analytics services to global
            clients—empowering you with data-driven decisions.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Survey Analytics Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <ClipboardList className="h-8 w-8 text-indigo-600" />,
              title: "Survey Data Collection",
              desc: "Accurate and relevant survey data collection stored in secure databases.",
            },
            {
              icon: <Filter className="h-8 w-8 text-indigo-600" />,
              title: "Survey Data Segmentation",
              desc: "Categorization of survey data into segments for easy retrieval and analysis.",
            },
            {
              icon: <Search className="h-8 w-8 text-indigo-600" />,
              title: "Pattern Recognition",
              desc: "Identify meaningful patterns in survey data to improve service delivery.",
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
              title: "Trend Analysis",
              desc: "Analyze market and customer trends to guide business strategy.",
            },
            {
              icon: <PieChart className="h-8 w-8 text-indigo-600" />,
              title: "Principal Component Analysis",
              desc: "Break down uncorrelated data into components for simplified analysis.",
            },
            {
              icon: <ShieldCheck className="h-8 w-8 text-indigo-600" />,
              title: "Data Quality Analysis",
              desc: "Ensure survey data accuracy with cleansing and consistency checks.",
            },
            {
              icon: <Users className="h-8 w-8 text-indigo-600" />,
              title: "Client Analysis",
              desc: "Understand customer likes, dislikes, and preferences for better targeting.",
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

      {/* Reasons to Choose */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose Nimble Acuity for Survey Analytics?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Team trained on latest survey analytic software",
            "Cost-effective services with flexible pricing models",
            "Strict confidentiality agreements with NDAs",
            "Quick turnaround through multiple delivery centers",
            "Access to cutting-edge tools and infrastructure",
            "ISO-certified processes ensuring high quality",
            "Experience in segmentation, pricing, and satisfaction studies",
            "Dedicated helpdesk for continuous reporting",
          ].map((reason, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="h-6 w-6 text-green-600 mt-1" />
              <p className="text-gray-700">{reason}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-16 px-6">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Client Success Stories
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title:
                "Case Study on Document Processing Automation Platform Development",
              desc: "A banking firm partnered with Nimble Acuity to automate its document processing workflow. Our data scientists built a big data platform for rapid automation.",
            },
            {
              title: "Case Study on Open Source Analytics Workbench Creation",
              desc: "We created an open-source analytics platform for a finance provider to analyze structured and unstructured data efficiently.",
            },
          ].map((story, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white text-center py-16 px-6">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">
            Nimble Survey Analytics Services to Nimble Acuity
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            With 20+ years of expertise in survey data analytics, Nimble Acuity
            helps you plan, design, and analyze surveys with precision. Get in
            touch with us today to transform your customer insights.
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Contact Us Today
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default SurveyAnalyticsPage;
