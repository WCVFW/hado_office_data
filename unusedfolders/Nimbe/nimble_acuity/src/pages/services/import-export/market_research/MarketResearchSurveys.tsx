import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, BarChart3, ClipboardList, Database, FileText, Layers } from "lucide-react"
import { motion } from "framer-motion"
import NavigationMenu from "../MegaMenu"

export default function MarketResearchSurveys() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Market Research Surveys
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Understand the pulse of your target market with customized market research surveys. 
          Gain insights into customer behavior, competition, and emerging trends to make informed decisions.
        </motion.p>
        <Button size="lg" variant="secondary">Get a Custom Quote</Button>
      </section>

      {/* Offerings Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Market Research Survey Offerings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ClipboardList, title: "Survey Design", desc: "Designing surveys to capture market trends, consumer interests, and competitor insights." },
            { icon: FileText, title: "Questionnaire", desc: "Drafting tailored questionnaires to meet specific survey objectives." },
            { icon: Layers, title: "Programming", desc: "Employing advanced survey programming for faster turnarounds and robust execution." },
            { icon: Database, title: "Hosting", desc: "Hosting surveys on secure servers for seamless data collection." },
            { icon: BarChart3, title: "Quota Management", desc: "Creating effective samples for accurate data representation and report generation." },
            { icon: CheckCircle, title: "Data Analysis", desc: "Analyzing results with SPSS and advanced tools to extract actionable insights." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg rounded-2xl">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Market Research Process</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6 text-center">
          {[
            "Identify the problem",
            "Define survey & objectives",
            "Conduct survey & analysis",
            "Create survey reports",
            "Final delivery of reports",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold mb-3">
                {idx + 1}
              </div>
              <p className="text-gray-700 text-sm">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Cost Savings", desc: "Save up to 60% on conducting market research surveys." },
            { title: "Dedicated Resources", desc: "A skilled team of market research experts working exclusively for you." },
            { title: "Assured Data Security", desc: "We use strong security protocols and technologies to protect your data." },
            { title: "Superior Service", desc: "Trusted by global clients with a proven track record of excellence." },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Market Research Surveys to India</h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          Let us help you transform market insights into business growth. Contact us today, and 
          we’ll get back within one business day with a customized quote.
        </p>
        <Button size="lg" variant="secondary">Contact Us Today</Button>
      </section>
    </div>
  )
}
