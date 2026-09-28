import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Activity,
  Monitor,
  Database,
  Cloud,
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

export default function AzureStreamAnalyticsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 text-center">
        <motion.div {...fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nimble Azure Stream Analytics Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Effectively and efficiently analyze large streams of data using
            Azure Data Analysis tools at highly affordable prices.
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
          Azure Stream Analytics Services We Offer
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
              title: "Azure Power BI",
              desc: "Gain better visualization across data fields and interpret analytics effectively with advanced Power BI strategies.",
            },
            {
              icon: <Activity className="h-8 w-8 text-blue-600" />,
              title: "Azure Streaming Analytics",
              desc: "Leverage real-time analytics and event processing to uncover trends across data from apps, sensors, social media, and more.",
            },
            {
              icon: <Monitor className="h-8 w-8 text-blue-600" />,
              title: "Azure Stream Analytics Monitoring",
              desc: "Use monitoring tools to ensure that real-time insights are captured and analyzed efficiently for premium results.",
            },
            {
              icon: <Database className="h-8 w-8 text-blue-600" />,
              title: "Azure Data Lake Stream Analytics",
              desc: "Transform massive datasets with Azure Data Lake using languages like .NET, R, Python, and SQL seamlessly.",
            },
            {
              icon: <Cloud className="h-8 w-8 text-blue-600" />,
              title: "Azure Stream Analytics Edge",
              desc: "Deploy Azure Analytics into IoT Edge devices for streamlined, real-time analytics powered by IoT and Edge.",
            },
          ].map((service, idx) => (
            <motion.div key={idx} {...fadeInUp}>
              <Card className="h-full shadow-md rounded-2xl">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
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
          Why Choose Nimble Acuity for Stream Analytics?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "Affordable Pricing Options",
            "High-Quality ISO-Certified Solutions",
            "100% Information Security",
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
            {
              icon: <Cpu className="h-6 w-6 text-blue-600" />,
              name: "Artificial Intelligence",
            },
            {
              icon: <Sparkles className="h-6 w-6 text-blue-600" />,
              name: "AI-Driven Digital Transformation",
            },
            {
              icon: <Eye className="h-6 w-6 text-blue-600" />,
              name: "Computer Vision",
            },
            {
              icon: <Workflow className="h-6 w-6 text-blue-600" />,
              name: "Cognitive Process Automation",
            },
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
              title:
                "Nimble Acuity Developed a Big Data Platform for Document Processing Automation",
              desc: "Our data scientists designed and implemented a big data-based platform to automate document workflows quickly for a client.",
            },
            {
              title:
                "Nimble Acuity Architected an Open-Source Analytics Workbench for a Bank",
              desc: "We created an open-source analytics platform for analyzing unstructured and structured data within tight deadlines.",
            },
          ].map((story, idx) => (
            <motion.div key={idx} {...fadeInUp}>
              <Card className="rounded-2xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {story.title}
                  </CardTitle>
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
          Choose Nimble Acuity for World-Class Azure Stream Analytics
        </motion.h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Harness our expertise in Azure Stream Analytics to transform your data
          into actionable insights and stay ahead with real-time decision-making.
        </p>
        <Button size="lg" variant="secondary" className="px-8">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
