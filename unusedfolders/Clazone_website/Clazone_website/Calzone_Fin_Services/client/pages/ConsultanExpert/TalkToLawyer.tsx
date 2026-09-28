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
  Briefcase, // Icon for Expertise section
  Handshake, // Icon for Benefits section
} from "lucide-react";

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

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

  const expertise = [
    "Legal Notices",
    "Employment Issues",
    "Property Succession",
    "Property Registration",
    "Property Verification",
    "Cheque Bounce Cases",
    "Money Recovery Issues",
    "Mutual Divorce",
    "Divorce & Matrimonial Consultation",
    "File a Consumer Case",
    "Will Drafting and Registration",
    "File a Criminal Complaint",
    "Debt Recovery Tribunal",
    "National Green Tribunal Cases",
    "Motor Accident Claims",
    "Setting up of a Business",
    "Fundraising for Businesses",
  ];

  const benefits = [
    "Trusted Legal Advice from verified experts",
    "Advocacy and Representation",
    "Risk Reduction and Cost Savings",
    "Access to Resources and Networks",
    "Negotiation Support",
  ];

  const lawyers = [
    {
      name: "SJ Anakha",
      exp: "6 years of experience",
      desc: "Specialises in tax planning and filing. File accurately and on time with expert advice.",
    },
    {
      name: "Kavitha Natesan",
      exp: "5 years of experience",
      desc: "Specialises in cheque bounce cases and GST consulting. Offers practical solutions for legal and tax matters.",
    },
    {
      name: "Srijita",
      exp: "5 years of experience",
      desc: "Expert in accident claims, employment issues, and consumer complaints. Provides timely and strategic legal support.",
    },
    {
      name: "Kanisha",
      exp: "3 years of experience",
      desc: "Specialises in property succession, registration, and verification. Delivers efficient legal solutions for property matters.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <main className="flex-1">
        {/* Hero Section - Elevated Design */}
        <section className="relative overflow-hidden pt-24 pb-32 bg-indigo-50/50">
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              variants={fadeIn} initial="initial" animate="animate"
            >
              <span className="block bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                Online Lawyer Consultation
              </span>
              <span className="block mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
                India’s <span className="text-indigo-600">#1 Legal Service Provider</span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Personalized legal consultation starting at <span className="font-bold text-indigo-600">₹13 per minute</span>.
              Senior lawyers across specialties are ready to answer your legal questions instantly. Secure, confidential online process.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-4"
              variants={stagger} initial="initial" animate="animate" transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#consult"
                className="px-8 py-3 rounded-full bg-indigo-600 text-white font-bold shadow-xl shadow-indigo-300/50 hover:bg-indigo-700 transition transform hover:scale-105"
                variants={fadeIn}
              >
                Talk To Lawyer Now
              </motion.a>
              <motion.a
                href="#experts"
                className="px-8 py-3 rounded-full border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-100 transition shadow-md"
                variants={fadeIn}
              >
                Explore Experts
              </motion.a>
            </motion.div>

            {/* Online Stats - Enhanced Design */}
            <div className="mt-16 flex flex-wrap justify-center gap-8">
              <StatBox title="286 Lawyers Online" icon={<Briefcase className="w-6 h-6 text-indigo-700" />} />
              <StatBox title="93 Live Ongoing Calls" icon={<PhoneCall className="w-6 h-6 text-indigo-700" />} />
            </div>
          </div>
        </section>

        {/* Consultation Form Section - Modern Dark Card */}
        <section
          id="consult"
          className="py-24 container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            className="md:order-2" 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 rounded-3xl bg-gray-800 shadow-2xl shadow-gray-900/50 text-white">
              <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">
                Get Expert Legal Consultation
              </h2>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <InputWithIcon icon={<Mail size={20} />} placeholder="Email" />
                  <InputWithIcon icon={<Smartphone size={20} />} placeholder="Mobile Number" />
                </div>
                <InputWithIcon icon={<MapPin size={20} />} placeholder="City / Pincode" />
                <InputWithIcon icon={<Languages size={20} />} placeholder="Preferred Language" />
                <InputWithIcon placeholder="Problem Type" />

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold text-lg shadow-lg hover:from-teal-600 hover:to-cyan-700 transition transform hover:-translate-y-0.5 mt-6"
                >
                  Talk To Lawyer Now — <span className="line-through opacity-80">₹799</span>{" "}
                  <span className="text-yellow-300">₹399</span>
                </button>
              </form>

              <p className="mt-6 text-sm flex items-center justify-center gap-2 text-gray-400">
                <PhoneCall className="w-4 h-4 text-green-500" /> Secure Call • 100% Confidential
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:order-1"
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop"
              alt="Offer"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-video md:aspect-square lg:aspect-video transform transition-transform duration-500 hover:scale-[1.02]"
            />
          </motion.div>
        </section>

        {/* Expertise Section - Clean Grid */}
        <section id="experts" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Legal Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
              Our lawyers provide expert consultation in a wide range of legal matters including legal notices, employment issues, property disputes, and more.
            </p>

            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 text-left"
              variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
            >
              {expertise.map((item, i) => (
                <motion.div
                  key={i}
                  className="p-5 bg-white rounded-xl shadow-md border-t-4 border-indigo-500 hover:shadow-lg transition cursor-pointer"
                  variants={fadeIn}
                >
                  <Briefcase className="w-6 h-6 text-indigo-600 mb-3" />
                  <h3 className="font-semibold text-base">{item}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lawyers Profiles Section - Professional Look */}
        <section className="py-24 container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Meet Our Panel of Consultants
          </h2>
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
          >
            {lawyers.map((lawyer, i) => (
              <motion.div 
                key={i} 
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition"
                variants={fadeIn}
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full mb-4 flex items-center justify-center text-indigo-600 text-2xl font-bold">
                  {lawyer.name.charAt(0)}
                </div>
                <h3 className="font-bold text-xl mb-1">{lawyer.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{lawyer.exp}</p>
                <p className="text-gray-600 text-sm">{lawyer.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Benefits Section - Tighter List */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Core Benefits of Online Consultation
            </h2>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
            >
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  className="p-6 bg-white rounded-xl shadow-md border-l-4 border-green-500 flex items-start gap-4 hover:shadow-lg transition"
                  variants={fadeIn}
                >
                  <Handshake className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Reviews Section - Prominent Callout */}
        <section className="py-24 bg-indigo-700 text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold mb-16">Trusted by 260,000+ Clients</h2>
            <div className="flex flex-wrap justify-center gap-16">
              <ReviewBox score="4.5/5" text="19k+ Google Reviews" />
              <ReviewBox score="4.5/5" text="7500+ Trustpilot Reviews" />
            </div>
          </div>
        </section>

        {/* FAQ Section - Interactive & Clean */}
        <section className="py-24 container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  className={`w-full flex justify-between items-center p-5 text-left transition ${faqOpen === i ? 'bg-indigo-50 text-indigo-700' : 'bg-white hover:bg-gray-50'}`}
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <span className="font-semibold text-lg">{f.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${faqOpen === i ? "rotate-180" : ""}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: faqOpen === i ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="px-5 py-4 text-gray-600 bg-white">{f.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* === Small Reusable Components === */
function InputWithIcon({ icon, placeholder }: { icon?: React.ReactNode; placeholder: string }) {
  return (
    <div className="flex items-center border border-gray-700 rounded-lg px-4 py-3 bg-gray-700/50 shadow-inner focus-within:border-teal-400 transition">
      {icon && <span className="w-5 h-5 text-gray-400 mr-3">{icon}</span>}
      <input 
        type="text" 
        placeholder={placeholder} 
        className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-base" 
      />
    </div>
  );
}

function ReviewBox({ score, text }: { score: string; text: string }) {
  return (
    <div className="bg-white/10 rounded-2xl p-8 shadow-2xl w-full max-w-xs border-b-4 border-yellow-400 transition transform hover:scale-[1.05]">
      <Star className="w-10 h-10 mx-auto text-yellow-300" fill="currentColor" />
      <p className="mt-4 font-extrabold text-4xl">{score}</p>
      <p className="text-lg mt-1 font-medium">{text}</p>
    </div>
  );
}

function StatBox({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-600 flex items-center gap-4 w-full sm:w-64 transform hover:scale-[1.02] transition">
      {icon}
      <h3 className="text-xl font-bold text-gray-700">{title}</h3>
    </div>
  );
}
