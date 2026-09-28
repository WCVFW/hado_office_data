import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Search, BarChart3, LineChart, FileText, Users } from "lucide-react";
import DSMainMenu from "../mainmenu";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function DataResearchPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 text-center">
        <motion.div {...fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nimble Data Research Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Get access to high-quality and accurate data research services to help you make
            better-informed business decisions at prices starting at{" "}
            <span className="font-semibold text-blue-600">$6/hour</span>.
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
          Data Research Services We Offer
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8 text-blue-600" />,
              title: "Company Research",
              desc: "In-depth company profiling, SWOT analysis, benchmarking, and organizational mapping.",
            },
            {
              icon: <Search className="h-8 w-8 text-blue-600" />,
              title: "Business Research",
              desc: "Identify clients, predict industry trends, and gather intelligence on competitors and partners.",
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
              title: "Market Research",
              desc: "Evaluate markets, study consumer behavior, benchmark competitors, and design surveys.",
            },
            {
              icon: <LineChart className="h-8 w-8 text-blue-600" />,
              title: "Industry Analysis",
              desc: "PESTLE analysis, competitive landscape, historical trend analysis, and demand-supply studies.",
            },
            {
              icon: <FileText className="h-8 w-8 text-blue-600" />,
              title: "Reporting & Analytics",
              desc: "Detailed reports, dashboards, charts, and KPI tracking for actionable insights.",
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

      {/* Why Nimble Section */}
      <section className="bg-gray-50 py-16 px-6">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Why Nimble Data Research Services to Nimble Acuity?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "Affordable Pricing Options",
            "High-quality ISO-certified Services",
            "Strict Data Security Measures",
            "Quick Turnaround Times",
            "Robust Infrastructure & Tools",
            "Experienced Research Team",
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

      {/* Other Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Other Services You Can Benefit From
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Data Entry Services",
            "Data Conversion Services",
            "Data Analytics Services",
            "Data Processing Services",
          ].map((service, idx) => (
            <motion.div key={idx} {...fadeInUp}>
              <Card className="shadow rounded-xl hover:shadow-lg transition">
                <CardContent className="p-6 text-center font-semibold text-gray-700">
                  {service}
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
                "Nimble Acuity Provides Invoice Factoring Services to a UK-based Land and Water Management Company",
              desc: "Processed over 80,000 invoices/month with utmost accuracy by capturing and recording invoice data in CRM.",
            },
            {
              title:
                "Nimble Acuity Provided Data Entry Services to a Leading Online Platform Builder",
              desc: "Cleansed CRM records and delivered accurate data entry services with a tight turnaround time.",
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

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <motion.h2 {...fadeInUp} className="text-3xl font-bold text-gray-800 mb-8">
          Testimonials
        </motion.h2>
        <motion.blockquote
          {...fadeInUp}
          className="italic text-gray-700 text-lg max-w-3xl mx-auto"
        >
          “They have been able to learn our procedures quicker than I ever thought possible.”
          <footer className="mt-4 font-semibold text-gray-800">
            – General Partner, Manufacturing Company, US
          </footer>
        </motion.blockquote>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Nimble Data Research Services to Nimble Acuity
        </motion.h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Gain a competitive edge with cost-effective, reliable, and accurate
          data research solutions tailored to your business.
        </p>
        <Button size="lg" variant="secondary" className="px-8">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
