import React from "react";
import { motion } from "framer-motion";
import {
  Map,
  LineChart,
  Users,
  ClipboardList,
  Search,
  RefreshCw,
  Target,
  PhoneCall,
  CheckCircle,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const CustomerJourneyMappingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Nimble Customer Journey Mapping Services
        </motion.h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg">
          We focus on providing customer journey mapping services that help you
          recognize consumer expectations and attain new customers to boost
          sales — starting at just $10/hour.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          Get a Free Quote
        </motion.a>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Journey Mapping Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Map,
              title: "Creation of Customer Journey Map",
              desc: "Visual representation of customer perspective including stages, emotions, and touchpoints.",
            },
            {
              icon: LineChart,
              title: "Real-time Reporting",
              desc: "Weekly and monthly journey maps delivered for fast and informed decision making.",
            },
            {
              icon: Users,
              title: "Design Better Training Programs",
              desc: "Optimize training, processes, and call flows to empower agents effectively.",
            },
            {
              icon: ClipboardList,
              title: "Find Flaws in Your Processes",
              desc: "Identify and fix gaps in sales, marketing, and backend processes.",
            },
            {
              icon: Target,
              title: "Monitoring Touchpoints",
              desc: "Track customer touchpoints to improve experiences and agent interactions.",
            },
            {
              icon: RefreshCw,
              title: "Driving Process Improvement",
              desc: "Leverage data to tweak and enhance customer satisfaction strategies.",
            },
            {
              icon: PhoneCall,
              title: "Effective Customer Communication",
              desc: "Engage with customers via calls, emails, social media, and live chat.",
            },
            {
              icon: CheckCircle,
              title: "Follow-up",
              desc: "Post-purchase follow-ups to ensure satisfaction and loyalty.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg"
            >
              <service.icon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Customer Journey Mapping Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            "Team Meet – Discuss client requirements",
            "Comprehensive Market Study – Understand customer demands",
            "Developing Customer Journey Maps – Plan customer communication",
            "Implement – Apply insights to optimize sales",
            "Post-purchase Experience – Collect feedback & track satisfaction",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow"
            >
              <div className="text-indigo-600 font-bold text-lg">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p className="text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Acuity for Customer Journey Mapping?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Cost-effective Services",
            "Quality Control",
            "State-of-art Technology",
            "Experienced Team",
            "Error-free Services",
            "Remote Assistance",
            "Rapid Turnaround",
            "Customization",
            "Client Confidentiality",
            "Personalized Assistance",
            "Precision in Data Archiving",
            "High-priority Service",
            "All-round Support",
          ].map((perk, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md"
            >
              <CheckCircle className="h-7 w-7 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold">{perk}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Other Services You May Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Inbound Call Center Services",
            "Outbound Call Center Services",
            "Telemarketing Services",
            "Lead Generation Services",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md"
            >
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Lead Generation for Singapore Financial Firm
            </h3>
            <p className="text-gray-600">
              Delivered high-quality lead generation services quickly for a
              financial services provider in Singapore.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Chat Support for UK Packers & Movers Firm
            </h3>
            <p className="text-gray-600">
              Provided reliable chat support and lead generation for a leading
              English packers and movers firm.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-indigo-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-2xl mx-auto text-lg italic">
          "I'm impressed! :) You ladies and gentlemen are doing fantastic work.
          Thank you so much!"
        </blockquote>
        <p className="mt-4 font-semibold">
          — Reservations Supervisor, Travel Website Company, CA
        </p>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Map Your Customers' Journey?
        </h2>
        <p className="mt-4 text-lg">
          Get end-to-end customer journey mapping services tailored to your
          business needs.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          Get Started Today
        </motion.a>
      </section>
    </div>
  );
};

export default CustomerJourneyMappingPage;
