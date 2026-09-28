import { motion } from "framer-motion";
import { useState } from "react";
import {
  CheckCircle,
  PhoneCall,
  Star,
  ChevronDown,
  Mail,
  MapPin,
  Smartphone,
  Languages,
  Clock,
} from "lucide-react";
import HeaderNav from "@/components/HeaderNav";

export default function TalkToCA() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    { q: "Who should consult a chartered accountant for tax planning?", a: "Individuals and businesses seeking accurate tax filing and planning guidance." },
    { q: "How can a chartered accountant help with GST compliance?", a: "They assist in GST registration, returns, audits, and compliance requirements." },
    { q: "What services does a Chartered Accountant (CA) provide?", a: "Tax planning, ITR filing, audits, business advisory, accounting, bookkeeping, and more." },
    { q: "Can I hire a CA online?", a: "Yes, Vakilsearch provides expert online CA consultations across India." },
    { q: "What is the due date for filing ITR for AY 2025-26?", a: "The due date is usually July 31, 2025, for individuals." },
    { q: "How much does a CA charge for filing an ITR?", a: "Fees start from ₹649 for a 30-minute consultation, varying with plan complexity." },
    { q: "Can I talk to a CA online?", a: "Yes, our platform enables real-time consultations with qualified CAs." },
    { q: "Can I file an ITR without a CA?", a: "Yes, but expert guidance ensures accurate filing and maximized benefits." },
    { q: "How can a CA help in filing a revised return?", a: "They ensure all corrections are accurately filed to prevent notices and penalties." },
    { q: "What are the benefits of filing ITR with Vakilsearch CA experts?", a: "Accuracy, timely filing, expert advice, and hassle-free experience." },
    { q: "Is hiring an online CA consultation for tax filing expensive?", a: "No, we offer affordable and transparent pricing plans." },
    { q: "How long does a tax expert take to file an Income Tax Return?", a: "Typically within 24-48 hours depending on documents provided." },
  ];

  const plans = [
    {
      title: "Lite",
      price: 1499,
      oldPrice: 1999,
      discount: "25%",
      features: [
        "Computation of Tax calculation",
        "Automatic Form 16 import",
        "Basic income tax return filing",
        "Email support",
      ],
    },
    {
      title: "Standard",
      price: 2499,
      oldPrice: 3845,
      discount: "35%",
      features: [
        "Includes everything in Lite",
        "Deductions and Exemptions under sections 80C, 80D, HRA",
        "Capital gains from stocks or mutual funds Computation",
        "Income from other sources (interest, etc.)",
        "Priority email and chat support",
      ],
      recommended: true,
    },
    {
      title: "Elite",
      price: null,
      oldPrice: null,
      discount: null,
      features: [
        "Includes everything in Standard",
        "Dedicated tax expert assistance",
        "Tailored deductions and exemptions",
        "Assistance post filings and follow-up till refund",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-1">
        {/* ===== Hero Section ===== */}
        <section className="relative bg-gradient-to-b from-blue-50 via-white to-white">
          <div className="container mx-auto px-6 lg:px-12 py-24 text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Online CA Consultation <br />
              <span className="text-blue-600">#1 Legal Service Provider in India</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Consult expert CA support for tax filing, accounting, compliance, and financial planning. Comprehensive services for individuals & businesses.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#consult"
                className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                Book an Appointment Now
              </a>
            </motion.div>
          </div>
        </section>

        {/* ===== Offer / Consultation Form ===== */}
        <section id="consult" className="py-20 container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/offer-image.jpg"
              alt="Consult CA Online"
              className="rounded-2xl shadow-xl w-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <form className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Consult CA Online</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <Mail className="w-5 h-5 text-gray-400 mr-2" />
                  <input type="email" placeholder="Email" className="w-full outline-none" />
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <Smartphone className="w-5 h-5 text-gray-400 mr-2" />
                  <input type="text" placeholder="Mobile Number" className="w-full outline-none" />
                </div>
              </div>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <input type="text" placeholder="City / Pincode" className="w-full outline-none" />
              </div>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <Languages className="w-5 h-5 text-gray-400 mr-2" />
                <input type="text" placeholder="Preferred Language" className="w-full outline-none" />
              </div>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <input type="text" placeholder="Problem Type" className="w-full outline-none" />
              </div>
              <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Book Appointment — ₹1299 ₹649
              </button>
              <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-green-500" />
                225+ CAs are online • 83+ live ongoing calls
              </p>
            </form>
          </div>
        </section>

        {/* ===== Plans Section ===== */}
        <section className="py-20 container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Choose the Right Plan For Your ITR Filing
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`p-6 rounded-xl shadow hover:shadow-lg transition ${plan.recommended ? "border-2 border-blue-600" : "bg-white"}`}>
                <h3 className="font-semibold text-xl mb-2">{plan.title}</h3>
                <p className="text-gray-400 line-through">{plan.oldPrice && `₹${plan.oldPrice}`}</p>
                <p className="text-2xl font-bold text-gray-900">{plan.price ? `₹${plan.price}` : "*Speak with our CA for exclusive pricing"}</p>
                {plan.discount && <p className="text-green-600 font-medium">{plan.discount} OFF</p>}
                <ul className="mt-4 space-y-2 text-gray-700">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQs Section ===== */}
        <section className="py-20 container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">FAQs</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left font-semibold text-gray-900"
                >
                  {faq.q}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${faqOpen === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {faqOpen === idx && (
                  <p className="mt-2 text-gray-700">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
