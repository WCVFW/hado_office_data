import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Database, ShieldCheck, Users, BookOpen, Cpu, Cog } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

export default function DMSServices() {
  return (
    <div className="w-full bg-gradient-to-b from-indigo-100 via-white to-indigo-50">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="relative text-center py-20 px-6 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Nimble Auity DMS Support Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl max-w-3xl mx-auto opacity-90"
          >
            Collect, organize, secure, and protect your data efficiently with
            Nimble Auity. Plans start at{" "}
            <span className="font-semibold">$6/hour</span>.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 md:px-20 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Manage Your Data the Smart Way
        </motion.h2>
        <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
          For 20+ years, Nimble Auity has empowered businesses to optimize their
          data lifecycle—ensuring compliance, accuracy, and security. From data
          access to disaster recovery, analytics, and automation, our experts
          deliver solutions that scale with your enterprise needs.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-indigo-50 to-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Core DMS Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: Database,
              title: "DMS Consultation",
              desc: "Expert guidance in cloud data management, mining, warehousing, and integration."
            },
            {
              icon: Cog,
              title: "Custom DMS Solutions",
              desc: "Tailor-made software & database models built for your enterprise."
            },
            {
              icon: Users,
              title: "End-User Support",
              desc: "Virtual helpdesks, ticket resolution, and on-demand assistance."
            },
            {
              icon: BookOpen,
              title: "Training & Change Management",
              desc: "Helping your teams adopt and maximize DMS applications."
            },
            {
              icon: ShieldCheck,
              title: "Security & Compliance",
              desc: "Prevent breaches, ensure privacy, and safeguard your data assets."
            },
            {
              icon: Cpu,
              title: "Automation & RPA",
              desc: "Smarter workflows using ServiceNow and robotic process automation."
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100"
            >
              <service.icon className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Accurate Data Extraction
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A NZ-based consulting firm received highly reliable and accurate
                data extraction services with quick turnaround.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                High-Quality Data Entry
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A US retailer availed our proficient and timely data entry
                services tailored to its business needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-600 text-white px-6 md:px-20 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto italic text-lg"
        >
          “They have been able to learn our procedures quicker than I ever
          thought possible.”
          <footer className="mt-3 text-indigo-200 font-medium">
            — General Partner, Manufacturing Company (US)
          </footer>
        </motion.blockquote>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Elevate Your Data Management?
        </h2>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Nimble Auity delivers secure, scalable, and efficient DMS solutions
          that adapt to your business challenges.
        </p>
        <Button
          size="lg"
          className="rounded-2xl px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
        >
          Contact Us
        </Button>
      </section>
    </div>
  );
}
