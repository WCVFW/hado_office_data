import { motion } from "framer-motion";
import { Search, Database, FileText, BarChart3, CheckCircle, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function SyndicatedMarketResearchServices() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Nimble Syndicated Market Research Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg mb-6"
        >
          Mitigate risks, enhance planning, and gain actionable insights with our syndicated
          research services — designed to empower data-driven decisions and competitive advantage.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold hover:bg-gray-100">
          Get a Free Consultation
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Comprehensive Syndicated Market Research Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Database,
              title: "Data Analysis Services",
              desc: "Advanced regression models, predictive analytics, clustering techniques, and cohort analysis.",
            },
            {
              icon: Search,
              title: "Data Collection Services",
              desc: "Multi-channel aggregation, real-time acquisition, longitudinal studies, and survey stratification.",
            },
            {
              icon: FileText,
              title: "Report Writing Services",
              desc: "Narrative synthesis, executive summaries, market trend analysis, and strategic recommendations.",
            },
            {
              icon: BarChart3,
              title: "Annual Report Design",
              desc: "Infographic-rich storytelling, interactive visualizations, and brand-aligned layouts.",
            },
            {
              icon: Settings,
              title: "Consultation & Personnel Support",
              desc: "Expert market strategy formulation, skilled analysts, and customized workshops.",
            },
            {
              icon: CheckCircle,
              title: "Industry Analysis Services",
              desc: "Demand forecasting, benchmarking, SWOT & PESTEL analysis, and emerging opportunities.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg rounded-2xl hover:shadow-xl transition">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Step-by-Step Approach
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { step: "01", title: "Market Needs Assessment", desc: "Identify industry needs and data gaps." },
            { step: "02", title: "Research Design", desc: "Build frameworks with collection methods and tools." },
            { step: "03", title: "Data Collection", desc: "Compile quantitative and qualitative datasets." },
            { step: "04", title: "Data Analysis", desc: "Turn raw data into actionable insights." },
            { step: "05", title: "Report Compilation", desc: "Create reports and dashboards for stakeholders." },
            { step: "06", title: "Client Engagement", desc: "Interpret results and provide ongoing support." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-indigo-600 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Hire Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Hire Us for Syndicated Market Research?
        </h2>
        <ul className="space-y-6">
          {[
            "Data-driven hyper-segmentation for precision targeting.",
            "Exclusive proprietary data sources with strict validation protocols.",
            "Long-term studies providing temporal insights and cyclical patterns.",
            "Automated survey scripting using NLP and adaptive techniques.",
            "Anomaly detection systems for proactive market response.",
            "Robust API integration for real-time data connectivity.",
          ].map((point, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">{point}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Software & Industries */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">Software We Leverage</h3>
            <p className="text-gray-700 mb-4">
              We integrate cutting-edge tools for advanced market intelligence:
            </p>
            <div className="flex flex-wrap gap-3">
              {["QuickBooks", "FreshBooks", "Zoho Books", "Sage", "Xero", "NetSuite"].map((tool, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white shadow rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Banking & Finance",
                "Healthcare",
                "Hospitality",
                "Manufacturing",
                "Retail & Restaurants",
                "Technology",
                "Insurance",
                "Education",
                "Legal Services",
                "Distributors",
              ].map((industry, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white shadow rounded-full text-sm font-medium"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curated Reads & Additional Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Curated Reads & Additional Services</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Curated Reads</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>IoT – The Game Changer for Market Researchers</li>
              <li>Conducting Market Research for New Products & Services</li>
              <li>Healthcare Forecasting Case Studies</li>
              <li>Hospitality Market Insights Case Studies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Business Research & Strategic Insights</li>
              <li>Financial Modeling & Forecasting</li>
              <li>Competitor Analysis & Benchmarking</li>
              <li>Comprehensive Market Research Solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Syndicated Market Research to Flatworld Solutions
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Gain unmatched market intelligence with predictive analytics, geospatial insights, and
          secure data systems. Stay ahead with real-time dashboards and adaptive research strategies.
        </p>
        <Button size="lg" className="bg-white text-purple-700 font-semibold hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
