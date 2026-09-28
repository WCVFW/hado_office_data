import { motion } from "framer-motion";
import { Mail, BookOpen, DollarSign, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function NewsletterServices() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Nimble Newsletter Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg mb-6"
        >
          Engage your audience with impactful, professional newsletters that combine research,
          copywriting, and design to maximize visibility and awareness.
        </motion.p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Newsletter Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Educational / Informative Newsletters",
              desc: "Newsletters that educate and impress the right consumers while supporting sales goals.",
            },
            {
              icon: FileText,
              title: "Research Journals",
              desc: "Custom journals created with authentic research data, enhancing brand credibility.",
            },
            {
              icon: DollarSign,
              title: "Financial Newsletters",
              desc: "Up-to-date newsletters with financial insights, trends, and economic updates.",
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
                  <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Acuity for Newsletter Services?
        </h2>
        <ul className="space-y-6 max-w-4xl mx-auto">
          {[
            "Stay connected to your customers in an unobtrusive yet effective way.",
            "Pioneer communication that engages and informs.",
            "Easily publish research reports, graphs, and in-depth insights.",
            "Leverage our expertise in market research and news abstraction.",
            "Deliver targeted newsletters for multiple industries.",
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

      {/* Process Flow */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process Flow</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              step: "01",
              title: "Project Initiation",
              desc: "Define scope, set timeline, finalize content strategy, and distribution calendar.",
            },
            {
              step: "02",
              title: "Newsletter Creation",
              desc: "Finalize template, approve agenda, create content, and run a quality audit.",
            },
            {
              step: "03",
              title: "Final Delivery",
              desc: "Send for approval, incorporate changes, deliver final files, and upload via SMTP.",
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
              <div className="text-5xl font-bold text-blue-600 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Choose Nimble Acuity as Your Newsletter Partner
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Combine flawless content with industry expertise to create impactful newsletters that
          build awareness and connect with your audience effectively.
        </p>
        <Button size="lg" className="bg-white text-cyan-700 font-semibold hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
