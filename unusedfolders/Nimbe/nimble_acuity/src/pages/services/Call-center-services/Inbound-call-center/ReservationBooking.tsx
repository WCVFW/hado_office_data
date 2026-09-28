import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, PhoneCall, CheckCircle2, Star } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ReservationBooking: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Outsource Reservation Booking Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          Get your reservations booked on schedule with our global agents —
          efficient, reliable, and available 24/7.
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 mb-4">
            With 27 years of experience, we provide reservation systems that
            match CTQ (Critical-to-Quality) to VoC (Voice of Customer) inputs,
            ensuring every engagement is prompt, reliable, and value-oriented.
          </p>
          <ul className="space-y-3">
            {[
              "ISO 9001:2015 Certified Provider",
              "Global Infrastructure & Contact Centers",
              "Lean Six Sigma Best Practices",
              "Multi-lingual, 24/7 Availability",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            What We Do
          </h3>
          <p className="text-gray-600 mb-2">
            We optimize encounters using CVA (Customer-Value Add), BVA
            (Business-Value Add), and NVA (Non-Value Add) mapping to guarantee
            transaction success.
          </p>
          <p className="text-gray-600">
            Our call center agents are trained to handle diverse reservation
            booking needs across industries.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Healthcare",
              items: [
                "Doctor’s Appointments",
                "Hospitals",
                "Fitness Clubs",
                "Seminars",
              ],
            },
            {
              title: "Hospitality",
              items: [
                "Hotels",
                "Resorts",
                "Hostels",
                "Serviced Apartments",
              ],
            },
            {
              title: "Travel & Tourism",
              items: ["Airlines", "Tours", "Cruises", "Taxis"],
            },
            {
              title: "Entertainment",
              items: [
                "Concerts",
                "Theatres",
                "Studio Tours",
                "Movie Houses",
              ],
            },
            {
              title: "Food & Beverage",
              items: [
                "Restaurants",
                "Nightclubs",
                "Lounges",
                "Catering",
              ],
            },
            {
              title: "Recreation",
              items: ["Spas", "Parks", "Zoos", "Gyms"],
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                {service.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {service.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Our Booking Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Requirement Gathering",
              desc: "VoC-to-CTQ mapping to define intake metrics.",
            },
            {
              step: "02",
              title: "Implementing Booking",
              desc: "System design & booking executives for revenue growth.",
            },
            {
              step: "03",
              title: "Performance Testing",
              desc: "Stress test for reliability and seamless UX.",
            },
            {
              step: "04",
              title: "Transaction Support",
              desc: "24/7 agent support for flawless transactions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-indigo-50 rounded-xl p-6 text-center shadow"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-600 text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto bg-white text-gray-800 p-8 rounded-2xl shadow-xl"
        >
          <p className="italic mb-4">
            "I'm impressed! You ladies and gentlemen are doing fantastic work.
            Thank you so much!"
          </p>
          <div className="flex items-center gap-3">
            <Star className="text-yellow-400" />
            <span className="font-semibold">
              Reservations Supervisor, Travel Website (CA)
            </span>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Ready to Streamline Your Bookings?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Get in touch with us today to discover how our reservation booking
          services can maximize efficiency, reliability, and client satisfaction.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ReservationBooking;
