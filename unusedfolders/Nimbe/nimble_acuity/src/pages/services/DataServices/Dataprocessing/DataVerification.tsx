import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Database,
  ClipboardList,
  Layers,
  ShieldCheck,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import DSmainmenu from "../DSmainmenu";

export default function DataVerification() {
  return (
    <div className="w-full bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Nimble Auity Data Verification Services
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          The foundation of your business is only as good as its data. At Nimble
          Auity, our experts verify every detail for{" "}
          <span className="font-semibold">$6/hour</span> to ensure 100% accuracy.
        </p>
      </section>

      {/* Why Data Verification */}
      <section className="px-6 md:px-20 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Data Verification Matters
        </h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Inaccurate data wastes time, increases costs, and impacts your
          marketing. With Nimble Auity’s forensic data verification services, you
          can uncover issues, optimize decisions, and unlock the full potential
          of your business data.
        </p>
      </section>

      {/* Our Services */}
      <section className="px-6 md:px-20 py-16 bg-indigo-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Data Verification Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Database,
              title: "Data Input Services",
              desc: "We check error rates and validate complete datasets, delivering accurate timelines.",
            },
            {
              icon: ClipboardList,
              title: "Validation & Formatting",
              desc: "We remove duplicates, incomplete, or incorrect data and replace them with accurate info.",
            },
            {
              icon: Layers,
              title: "Multichannel Validation",
              desc: "We run tests across multiple channels to boost retention and optimize engagement.",
            },
            {
              icon: ShieldCheck,
              title: "Accurate Database Creation",
              desc: "We ensure compliant, unique, and accurate data to strengthen your business foundation.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl p-6 text-center"
            >
              <service.icon className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: CheckCircle,
              title: "Low-Cost Pricing",
              desc: "Affordable data verification solutions delivering excellent ROI.",
            },
            {
              icon: TrendingUp,
              title: "Quality Services",
              desc: "ISO 9001:2015 certified to ensure high-quality standards.",
            },
            {
              icon: ShieldCheck,
              title: "Data Security",
              desc: "ISO/IEC 27001:2022 certified with strong security protocols.",
            },
            {
              icon: Clock,
              title: "Fast Turnaround",
              desc: "10+ global centers delivering reliable, timely outcomes.",
            },
            {
              icon: Layers,
              title: "Structured Processes",
              desc: "Streamlined methods ensure accuracy and consistency.",
            },
            {
              icon: Users,
              title: "Expert Team",
              desc: "Experienced professionals delivering international-grade service.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <item.icon className="w-10 h-10 text-indigo-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 md:px-20 py-16 bg-indigo-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Data Research & Extraction
              </h3>
              <p className="text-gray-600 text-sm">
                A UAE-based app developer required data research for a nightlife
                app. Nimble Auity delivered timely, accurate results that
                exceeded expectations.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Accurate Data Entry
              </h3>
              <p className="text-gray-600 text-sm">
                A leading platform needed CRM cleansing. Nimble Auity delivered
                accurate and reliable results within a tight deadline.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto italic text-lg"
        >
          “Nimble Auity is a fantastic resource. They pay close attention to all
          our needs and always exceed expectations.”
          <footer className="mt-3 text-indigo-200 font-medium">
            — General Partner, Manufacturing Company (US)
          </footer>
        </motion.blockquote>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Partner with Nimble Auity Today
        </h2>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Eliminate errors, optimize campaigns, and boost ROI with secure,
          scalable, and cost-effective data verification.
        </p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl shadow-md">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
