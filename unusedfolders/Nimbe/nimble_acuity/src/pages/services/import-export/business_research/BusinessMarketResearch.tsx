import { motion } from "framer-motion";
import { CheckCircle, BarChart3, Globe2, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function BusinessMarketResearch() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nimble Business Market Research Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Gain strategic insights, beat competition, and transform data into
          business intelligence with Nimble Acuity’s expert research services.
        </motion.p>
        <Button size="lg" variant="secondary">
          Contact Us Today
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Business Market Research Services
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Tighter marketing budgets, decreased ROI, and market fluctuations tempt
          companies to cut expenses for market research. Nimble Acuity provides
          custom business market research services to help you stay ahead in a
          fast-paced environment. With over two decades of experience, we deliver
          actionable insights through qualitative and quantitative techniques to
          meet complex requirements.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Business Market Research Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "SWOT Analysis",
            "Competitor Analysis",
            "PEST / PESTEL / STEEPLED Analysis",
            "Porter Five Forces Analysis",
            "Sector Research",
            "Country Analysis & Profiling",
            "Business & Investment Environment Assessment",
            "Country Risk Assessment",
            "Industry Analysis & Profiling",
            "Industry Feasibility Studies",
            "Market Sizing Study",
            "Company Analysis & Profiling",
            "Sectional Highlights",
            "Target Screening",
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
            >
              <Card className="shadow-md hover:shadow-lg transition rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">{service}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Industries We Cater To
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            "Agriculture",
            "IT & Telecom",
            "Chemicals & Material",
            "Food & Beverage",
            "Healthcare",
            "Education",
            "Automotive",
            "Energy & Power",
            "Pharma & Biotechnology",
            "Medical Devices",
            "Aerospace & Defense",
          ].map((industry, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white rounded-full shadow text-gray-700 font-medium"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16 px-6 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          5-Step Market Research Process We Follow
        </h2>
        <ol className="space-y-8">
          {[
            "Defining the objective of the research project",
            "Research plan design",
            "Data collection",
            "Data analysis with statistical methods",
            "Presentation of findings through charts & reports",
          ].map((step, idx) => (
            <motion.li
              key={idx}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="text-blue-600 font-bold text-2xl">{idx + 1}</div>
              <p className="text-lg">{step}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Choosing Nimble Acuity
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Team of globally trained research analysts",
            "Latest research tools for accurate insights",
            "High-quality, cost-effective services",
            "Tailor-made solutions for every client",
            "Cutting-edge infrastructure & technologies",
            "Multiple global delivery centers",
            "Strict confidentiality & data security policies",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Partner with Nimble Acuity for All Your Business Market Research Needs
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Whether it’s B2B or consumer market research, we bring in expertise to
          maximize your business goals with up to 40% cost benefits.
        </p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </section>
    </div>
  );
}
