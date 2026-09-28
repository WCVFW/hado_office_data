import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  ShoppingCart,
  Wallet,
  TrendingDown,
  LineChart,
  Cpu,
  Sparkles,
  Eye,
  Workflow,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function PredictiveModelingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 text-center">
        <motion.div {...fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nimble Predictive Modeling Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Get access to industry-leading predictive and clustering modeling
            solutions provided by seasoned data scientists at cost-effective
            rates.
          </p>
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Predictive Modeling Services We Offer
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8 text-blue-600" />,
              title: "Behavioral Clustering",
              desc: "Scale your marketing efforts and increase revenue by building models that uncover deep connections with your target customers.",
            },
            {
              icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
              title: "Product-Based Clustering",
              desc: "Predict purchase behavior by analyzing customers’ historical buying patterns for smarter targeting.",
            },
            {
              icon: <Wallet className="h-8 w-8 text-blue-600" />,
              title: "Wallet Estimate",
              desc: "Gain insights into customer budgets and allocation patterns to optimize product/service positioning.",
            },
            {
              icon: <TrendingDown className="h-8 w-8 text-blue-600" />,
              title: "Churn Percentage Likelihood",
              desc: "Analyze historical marketing data to predict churn risks and create proactive retention strategies.",
            },
            {
              icon: <LineChart className="h-8 w-8 text-blue-600" />,
              title: "Lifetime Value Forecasting",
              desc: "Forecast long-term customer value with advanced predictive models for better ROI planning.",
            },
          ].map((service, idx) => (
            <motion.div key={idx} {...fadeInUp}>
              <Card className="h-full shadow-md rounded-2xl">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="bg-gray-50 py-16 px-6">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Why Choose Nimble Acuity for Predictive Modeling?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "Affordable & Flexible Pricing",
            "Expert Data Scientists",
            "Scalable Returns on Investment",
          ].map((benefit, idx) => (
            <motion.div key={idx} {...fadeInUp}>
              <Card className="shadow-sm rounded-2xl">
                <CardContent className="p-6 text-center font-medium text-gray-700">
                  {benefit}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Other Services You Can Benefit From
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Cpu className="h-6 w-6 text-blue-600" />, name: "Artificial Intelligence" },
            { icon: <Sparkles className="h-6 w-6 text-blue-600" />, name: "AI-Driven Digital Transformation" },
            { icon: <Eye className="h-6 w-6 text-blue-600" />, name: "Computer Vision" },
            { icon: <Workflow className="h-6 w-6 text-blue-600" />, name: "Cognitive Process Automation" },
          ].map((service, idx) => (
            <motion.div key={idx} {...fadeInUp}>
              <Card className="shadow rounded-xl hover:shadow-lg transition">
                <CardContent className="p-6 flex flex-col items-center gap-3 text-center font-semibold text-gray-700">
                  {service.icon}
                  {service.name}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-16 px-6">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Client Success Stories
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Nimble Acuity Created a Big Data Platform to Automate Document Processing",
              desc: "For a leading banking firm, our team designed and implemented a big data-based platform to automate document workflows within a quick turnaround.",
            },
            {
              title: "Nimble Acuity Designed an Analytics Platform for a Finance Provider",
              desc: "We built an open-source analytics platform for structured and unstructured data, delivering faster insights for a global finance client.",
            },
          ].map((story, idx) => (
            <motion.div key={idx} {...fadeInUp}>
              <Card className="rounded-2xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{story.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Nimble Predictive and Data Modeling Services to Nimble Acuity
        </motion.h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Partner with expert data scientists and leverage predictive analytics
          to drive smarter decisions, boost ROI, and stay ahead of the
          competition.
        </p>
        <Button size="lg" variant="secondary" className="px-8">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
