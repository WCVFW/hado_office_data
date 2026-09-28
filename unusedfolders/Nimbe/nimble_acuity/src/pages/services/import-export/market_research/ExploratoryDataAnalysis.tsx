import { motion } from "framer-motion";
import { CheckCircle, Database, Filter, BarChart3, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function ExploratoryDataAnalysis() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Nimble Exploratory Data Analysis Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          We decrypt data points to help you gain crucial information about anomalies, irregularities,
          and patterns to ensure accurate data-driven decision-making at rates starting at $14/hour.
        </p>
        <Button size="lg" className="rounded-full bg-white text-blue-700 hover:bg-gray-200">
          Get a Free Quote
        </Button>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold">Unlock the Power of Your Business Data</h2>
        <p>
          At Nimble Acuity, we help companies mobilize, visualize, and analyze their data to gain deep insights
          for informed decision-making. Through Exploratory Data Analysis (EDA), we uncover patterns, trends, and
          relationships that influence business growth.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl font-semibold text-center">Exploratory Data Analysis Services We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
              title: "Data Quality Auditing",
              desc: "We scan through vast datasets to ensure usefulness and reliability."
            },
            {
              icon: <Database className="w-8 h-8 text-blue-600" />,
              title: "Data Cleaning",
              desc: "We scrub data to remove inconsistencies, missing values, and errors."
            },
            {
              icon: <Filter className="w-8 h-8 text-blue-600" />,
              title: "Data Screening",
              desc: "We apply statistical EDA tools to uncover deep insights and patterns."
            },
            {
              icon: <LineChart className="w-8 h-8 text-blue-600" />,
              title: "Modeling Technique Selection",
              desc: "We identify the right modeling approach to highlight critical insights."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 rounded-2xl max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our 5-Step EDA Process</h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {["Understanding Requirements", "Data Collection", "Data Filtration", "Data Analysis", "Modeling"].map(
            (step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-lg mb-2">{`0${i + 1}.`}</h3>
                <p>{step}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center">Benefits of EDA</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>Gain deep insight into business-critical data</li>
          <li>Reduce cost and time in designing processes</li>
          <li>Understand customer behavior under different conditions</li>
          <li>Accurately predict trends for marketing strategies</li>
          <li>Optimize processes using advanced informatics</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Cost-effective Services",
            "Expert Certified Analysts",
            "Customized Solutions",
            "Strict Data Protection",
            "Fast Turnaround",
            "Advanced Tools & Reporting",
            "24/7 Global Support",
            "Complete Peace of Mind"
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-4 bg-white rounded-xl shadow-md text-center"
            >
              <p className="font-medium">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-indigo-700 text-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-4">Ready to Unlock Hidden Insights?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Partner with Nimble Acuity for Exploratory Data Analysis services and make smarter, data-driven decisions.
        </p>
        <Button size="lg" className="rounded-full bg-white text-indigo-700 hover:bg-gray-200">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
