import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, ListChecks, Database, CheckCircle, Users, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

export default function MailingListCompilation() {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <DSmainmenu/>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          Mailing List Compilation Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Deliver personalized campaigns with accurate, clean, and updated mailing lists.
          Nimble Auity ensures your customer data is transformed into a powerful marketing tool.
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        <Card className="shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <ListChecks className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              Mailing List Data Sorting & Cleansing
            </h2>
            <p className="text-gray-600">
              We eliminate missing address components, verify details, proofread, and standardize
              addresses as per postal guidelines, ensuring accuracy and reliability.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <Database className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              Mailing List Data Entry & Formatting
            </h2>
            <p className="text-gray-600">
              We update, validate, and format databases—adding/removing addresses, collating fields,
              and formatting zip codes to ensure maximum reach and readability.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Process Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">
          Our Process for Compiling Mailing Lists
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "Identify Need", desc: "Define scope & document requirements.", icon: Mail },
            { step: "Project Sampling", desc: "Execute sample based on client inputs.", icon: ListChecks },
            { step: "Estimate & Pricing", desc: "Provide time, resources & pricing.", icon: Clock },
            { step: "Assign Project", desc: "Project Manager delegates resources.", icon: Users },
            { step: "Execution", desc: "Analyze, sort & compile data as planned.", icon: Database },
            { step: "Quality Check", desc: "QA team validates and cleans final data.", icon: CheckCircle },
            { step: "Scheduled Delivery", desc: "Deliver securely via client portal.", icon: ShieldCheck },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="shadow-lg rounded-2xl hover:shadow-2xl transition bg-white"
            >
              <CardContent className="p-6 text-center flex flex-col items-center">
                <item.icon className="w-10 h-10 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  {item.step}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-5 gap-6 mt-20 text-center">
        {[
          { label: "Cost Reduction", value: "40%" },
          { label: "Faster Turnaround", value: "8-24 Hrs" },
          { label: "Satisfied Clients", value: "500+" },
          { label: "Skilled Experts", value: "350+" },
          { label: "Accuracy", value: "99%" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <p className="text-3xl font-extrabold text-indigo-700">
                  {item.value}
                </p>
                <p className="text-gray-600 text-sm mt-1">{item.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
          Benefits of Choosing Nimble Auity
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[ 
            { title: "Better Focus on Core Strengths", desc: "Free your team to focus on strategies while we handle compilation." },
            { title: "Best Technology & Resources", desc: "Skilled experts backed with advanced tools for efficiency." },
            { title: "Superior Project Management", desc: "Project managers ensure communication & quality at every stage." },
            { title: "Assurance of Quality", desc: "Dedicated editors validate every detail for accuracy." }
          ].map((benefit, idx) => (
            <Card key={idx} className="shadow-xl rounded-2xl hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center flex justify-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Choose Nimble Auity for Mailing List Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            With open communication and transparent processes, Nimble delivers the
            best solutions in the industry. Let’s power your campaigns with precise,
            clean, and actionable mailing lists.
          </p>
          <div className="flex justify-center">
            <Button className="px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
