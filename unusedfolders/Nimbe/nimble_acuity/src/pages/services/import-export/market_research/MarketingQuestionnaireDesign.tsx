import { motion } from "framer-motion";
import { CheckCircle, ClipboardList, Users, BarChart3, FileText, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function MarketingQuestionnaireDesign() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Marketing Questionnaire Design Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg mb-6"
        >
          Get smart, engaging, and result-driven questionnaire designs that deliver accurate data
          for business analytics, market research, and decision-making.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold hover:bg-gray-100">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Questionnaire Design Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: ClipboardList,
              title: "Academic Research",
              desc: "Questionnaires for teachers, students, and institutes designed to capture meaningful insights in education.",
            },
            {
              icon: Users,
              title: "Business Analysis",
              desc: "Surveys to evaluate industries, technologies, and enterprise performance for better decision-making.",
            },
            {
              icon: FileText,
              title: "Customer Surveys",
              desc: "Customer satisfaction, awareness, and feedback surveys to help you connect effectively with your audience.",
            },
            {
              icon: BarChart3,
              title: "Market Surveys",
              desc: "Market research questionnaires targeted to assess opportunities, risks, and investment potential.",
            },
            {
              icon: Star,
              title: "Advanced Analysis",
              desc: "Custom questionnaires designed for in-depth research, targeted data, and specialized insights.",
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

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Questionnaire Design Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Project Kickoff",
              desc: "We analyze requirements and finalize survey methods tailored to your project needs.",
            },
            {
              step: "02",
              title: "Questionnaire Design",
              desc: "Our experts design and test sample questionnaires to align with survey objectives.",
            },
            {
              step: "03",
              title: "Review & Programming",
              desc: "We review with clients, perform quality checks, and optimize for clarity and usability.",
            },
            {
              step: "04",
              title: "Final Delivery",
              desc: "The final optimized questionnaire is delivered, ensuring better engagement and insights.",
            },
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

      {/* Advantages Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Acuity?</h2>
        <ul className="space-y-6">
          {[
            "Experienced research professionals with 2-5 years of expertise in survey design.",
            "Cost-effective services with flexible pricing models.",
            "Strict confidentiality with NDAs to protect client data.",
            "Proven track record of high-quality deliverables across industries.",
            "Quick turnaround times with global delivery centers.",
            "Strong expertise in business and market research.",
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

      {/* Case Study Section */}
      <section className="bg-indigo-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Client Case Study</h2>
          <p className="text-gray-700 mb-6">
            Nimble Acuity provided real-time news monitoring support for a Japanese food brand. Our team of
            dedicated research associates designed search criteria, questionnaires, and feedback
            forms to track negative news and provide actionable insights quickly.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
            Read Full Case Study
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Surveys with Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble your marketing questionnaire design to Nimble Acuity and turn surveys into powerful tools
          for business growth and market insights.
        </p>
        <Button size="lg" className="bg-white text-purple-700 font-semibold hover:bg-gray-100">
          Partner with Us
        </Button>
      </section>
    </div>
  );
}
