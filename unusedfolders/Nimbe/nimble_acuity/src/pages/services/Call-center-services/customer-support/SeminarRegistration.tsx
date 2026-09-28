import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, CheckCircle, Globe2, Mail, Phone } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const SeminarRegistration: React.FC = () => {
  const services = [
    {
      title: "Securing Attendance to Industry Events",
      desc: "Nimble's proficient team registers participants for seminars and events across industries like BFSI, hospitality, travel, education, and more.",
      icon: Users,
    },
    {
      title: "Online Webinar Registrations",
      desc: "We manage webinar registrations with SOP-governed controls, ensuring repeatability, minimal deviation, and scalability.",
      icon: Calendar,
    },
    {
      title: "Registration Confirmation & Scheduling Changes",
      desc: "We confirm attendance, notify attendees of schedule changes, and optionally upsell/cross-sell services.",
      icon: CheckCircle,
    },
    {
      title: "Multiplatform Reservation Hosting",
      desc: "Nimble hosts registration platforms with Poka-Yoke enabled interfaces for error-free, frictionless operations.",
      icon: Globe2,
    },
  ];

  const processSteps = [
    "Consult with your team to understand seminar registration needs",
    "Collect and segment invitee list into priority categories",
    "Assign qualified agents for invitee communication",
    "Complete registration & set reminders for attendees",
    "Follow up as the event date approaches",
    "Compile reports on registration process",
  ];

  const clientStories = [
    {
      title: "Advanced IT Support for UK Motorcycle Insurance Company",
      desc: "Nimble's L1, L2, and L3 support improved IT service efficiency from 30% to 90% for a top-tier motorcycle insurance brand.",
    },
    {
      title: "Inbound Technical Support for IT Services Company",
      desc: "Nimble's technical support team managed all in-bound queries for a leading IT services giant, rescuing the client from service ticket overload.",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Seminar Registration Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Get professional help to handle seminar registration & get invitees registered
          systematically at rates starting at $10 per hour.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Contact Us
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Seminar Registration Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <srv.icon className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Seminar Registration Process</h2>
        <ol className="max-w-4xl mx-auto space-y-6 list-decimal list-inside text-gray-700">
          {processSteps.map((step, idx) => (
            <motion.li
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {step}
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Other Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Other Services You May Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-semibold">
          {["Technical Support Services", "Remote IT Support Services", "Toll-Free Customer Support", "Multilingual Call Center Services"].map(
            (srv, idx) => (
              <motion.div
                key={idx}
                className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {srv}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="bg-gray-100 py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {clientStories.map((story, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-purple-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <motion.blockquote
          className="max-w-3xl mx-auto italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          “I'm impressed! :) You ladies and gentlemen are doing fantastic work. Thank you so much!”
        </motion.blockquote>
        <p className="mt-4 font-semibold">— Reservations Supervisor, Travel Website Company, CA</p>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-600 text-white text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Simplify Your Seminar Registration?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Focus on priorities while Nimble handles registrations, follow-ups, and confirmations with precision.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Get a Custom Quote
        </motion.button>
      </section>
    </div>
  );
};

export default SeminarRegistration;
