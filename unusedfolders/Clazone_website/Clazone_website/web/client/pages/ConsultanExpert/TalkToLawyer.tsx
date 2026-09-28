"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  CheckCircle,
  PhoneCall,
  Star,
  ChevronDown,
  Languages,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";

export default function TalkToLawyer() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is online lawyer consultation?",
      a: "It is a convenient way to connect with qualified lawyers via video or phone call, without visiting in person.",
    },
    {
      q: "Do I need to visit the lawyer in person?",
      a: "No. All consultations happen 100% online at your convenience.",
    },
    {
      q: "Are Vakilsearch lawyers qualified?",
      a: "Yes, all our lawyers are verified, licensed, and experts in their fields.",
    },
    {
      q: "Can I get help with property law issues?",
      a: "Yes, we have senior lawyers specializing in property succession, registration, and disputes.",
    },
    {
      q: "Is online consultation safe & secure?",
      a: "Yes, all sessions are encrypted and your privacy is guaranteed.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* ===== Main Content ===== */}
      <main className="flex-1">
        {/* ===== Hero Section ===== */}
        <section className="relative bg-gradient-to-b from-indigo-50 via-white to-white">
          <div className="container mx-auto px-6 lg:px-12 py-24 text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="block bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                Online Lawyer Consultation
              </span>
              <span className="block mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
                India’s <span className="text-indigo-600">#1 Legal Service Provider</span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Affordable legal consultations starting at just{" "}
              <span className="font-semibold text-indigo-600">₹399</span>. Verified
              senior lawyers across specialties are ready to answer your legal
              questions instantly.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#consult"
                className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
              >
                Talk To Lawyer Now
              </a>
              <a
                href="#experts"
                className="px-8 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 transition"
              >
                Explore Experts
              </a>
            </motion.div>
          </div>
        </section>

        {/* ===== Offer Section ===== */}
        <section
          id="consult"
          className="py-20 container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center  text-white"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop"
              alt="Offer"
              className="rounded-2xl shadow-xl w-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Get Expert Legal Consultation
            </h2>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <InputWithIcon icon={<Mail size={20} />} placeholder="Email" />
                <InputWithIcon icon={<Smartphone size={20} />} placeholder="Mobile Number" />
              </div>
              <InputWithIcon icon={<MapPin size={20} />} placeholder="City / Pincode" />
              <InputWithIcon icon={<Languages size={20} />} placeholder="Preferred Language" />
              <InputWithIcon placeholder="Problem Type" />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold hover:from-teal-600 hover:to-cyan-700 transition transform hover:-translate-y-1"
              >
                Talk To Lawyer Now — <span className="line-through">₹799</span>{" "}
                <span className="text-yellow-300">₹399</span>
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-400 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-green-500" />
              239+ lawyers are online • 94+ live ongoing calls
            </p>
          </div>
        </section>

        {/* ===== Expertise Section ===== */}
        <section id="experts" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Our lawyers provide expert consultation in a wide range of legal
              matters.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                "Legal Notices",
                "Employment Issues",
                "Property Succession",
                "Cheque Bounce Cases",
                "Money Recovery Issues",
                "Mutual Divorce",
                "Consumer Cases",
                "Criminal Complaints",
                "Business Setup",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-600 mb-3" />
                  <h3 className="font-semibold text-lg">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Benefits Section ===== */}
        <section className="py-20 container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Benefits of Online Consultation
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Trusted Legal Advice from verified experts",
              "Affordable Consultation Fees",
              "Secure & Confidential Online Process",
              "Quick and Convenient Legal Help",
              "Negotiation Support",
              "Seamless Experience from start to finish",
            ].map((benefit, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Reviews Section ===== */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold mb-12">Trusted by Thousands</h2>
            <div className="flex flex-wrap justify-center gap-12">
              <ReviewBox score="4.5/5" text="19k+ Google Reviews" />
              <ReviewBox score="4.5/5" text="7500+ Trustpilot Reviews" />
            </div>
          </div>
        </section>

        {/* ===== FAQ Section ===== */}
        <section className="py-20 container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <div key={i} className="border-b py-4">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <span className="font-medium text-gray-800">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${faqOpen === i ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {faqOpen === i && <p className="mt-2 text-gray-600">{f.a}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* === Small Reusable Components === */

function InputWithIcon({
  icon,
  placeholder,
}: {
  icon?: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
      {icon && <span className="w-5 h-5 text-gray-400 mr-2">{icon}</span>}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none text-sm"
      />
    </div>
  );
}

function ReviewBox({ score, text }: { score: string; text: string }) {
  return (
    <div className="bg-white/10 rounded-xl p-6 shadow-lg w-56">
      <Star className="w-8 h-8 mx-auto text-yellow-300" />
      <p className="mt-2 font-bold text-2xl">{score}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}
