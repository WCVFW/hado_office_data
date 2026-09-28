import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Database,
  RefreshCw,
  FileCheck,
  Layers,
  ShieldCheck,
  Clock,
  DollarSign,
  Settings,
} from "lucide-react";
import DSmainmenu from "../DSmainmenu";

export default function DataScrubbing() {
  return (
    <div className="w-full bg-gradient-to-b from-purple-50 via-white to-purple-100">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-purple-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Nimble Auity Data Scrubbing Services
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Modify and clean your data with our world-class scrubbing solutions —
          starting at <span className="font-semibold">$6/hour</span>.
        </p>
      </section>

      {/* Why Scrubbing */}
      <section className="px-6 md:px-20 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Data Scrubbing Matters
        </h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Inaccurate and duplicate data can waste resources and affect
          decision-making. Nimble Auity ensures your datasets are accurate,
          standardized, and valuable at all times — helping you achieve your
          data objectives effectively.
        </p>
      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-16 bg-purple-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Data Scrubbing Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Database,
              title: "Standardize Data",
              desc: "We normalize and standardize your records to keep data consistent and reliable.",
            },
            {
              icon: RefreshCw,
              title: "De-Duplicate Data",
              desc: "We remove duplicate entries using modern tools, ensuring only premium-quality data remains.",
            },
            {
              icon: FileCheck,
              title: "Complete Missing Data",
              desc: "We fill in incomplete records with accurate information for seamless business processes.",
            },
            {
              icon: Layers,
              title: "Correct Records",
              desc: "Our experts review and correct business records to eliminate errors cost-effectively.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl p-6 text-center"
            >
              <service.icon className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Settings,
              title: "Customized Services",
              desc: "Tailored solutions to fit your unique business requirements.",
            },
            {
              icon: DollarSign,
              title: "Pocket-Friendly Rates",
              desc: "Affordable services designed to match your budget.",
            },
            {
              icon: Clock,
              title: "Quick Turnaround",
              desc: "Global delivery centers ensure fast and efficient service.",
            },
            {
              icon: ShieldCheck,
              title: "Data Security",
              desc: "Strict policies ensure your business data stays safe.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <item.icon className="w-10 h-10 text-purple-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 md:px-20 py-16 bg-purple-50">
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
                A UAE-based app developer needed data research for a nightlife
                app. Nimble Auity delivered timely, accurate results exceeding
                expectations.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Accurate Data Entry
              </h3>
              <p className="text-gray-600 text-sm">
                A global platform company required CRM cleansing. Nimble Auity
                provided reliable results within a tight TAT.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto italic text-lg"
        >
          “They learned our procedures quicker than I ever thought possible. We
          are highly satisfied with Nimble Auity’s services.”
          <footer className="mt-3 text-purple-200 font-medium">
            — General Partner, Manufacturing Company (US)
          </footer>
        </motion.blockquote>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Nimble Auity Today
        </h2>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Get tailored, secure, and cost-effective data scrubbing services to
          optimize your business operations and boost ROI.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-2xl shadow-md">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
