// TalkToCA.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  CheckCircle,
  PhoneCall,
  ChevronDown,
  Mail,
  MapPin,
  Smartphone,
  Languages,
  User,
  Star,
} from "lucide-react";
import Layout from "@/components/Layout";

export default function TalkToCA() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who should consult a Chartered Accountant for tax planning?",
      a: "Anyone who wants better tax planning, accurate ITR filing, and expert compliance support should consult a CA. Individuals, businesses, and NRIs benefit most.",
    },
    {
      q: "How can a Chartered Accountant help with GST compliance?",
      a: "CAs assist in GST registration, timely returns, audits, compliance training, and ensuring you avoid penalties.",
    },
    {
      q: "What services does a CA provide?",
      a: "Income tax return filing, tax planning, business registration, compliance, GST audits, financial advisory, bookkeeping, and valuation.",
    },
    {
      q: "Can I hire a CA online?",
      a: "Yes, with Vakilsearch you can consult CAs online across India, instantly and affordably.",
    },
    {
      q: "What is the due date for filing ITR for AY 2025-26?",
      a: "The due date for most individuals is July 31, 2025, unless extended by the government.",
    },
    {
      q: "How much does a CA charge for filing ITR?",
      a: "Our plans start at ₹649 for a 30-minute consultation. Pricing depends on complexity.",
    },
    {
      q: "Can I talk to a CA online?",
      a: "Yes, over 160+ CAs are available for instant online calls and appointments.",
    },
    {
      q: "Can I file ITR without a CA?",
      a: "Yes, but hiring a CA ensures accuracy, maximizes benefits, and reduces risk of penalties.",
    },
    {
      q: "How can a CA help in filing a revised return?",
      a: "CAs ensure your corrections are filed properly and follow-up with authorities to avoid notices.",
    },
    {
      q: "What are the benefits of filing ITR with Vakilsearch experts?",
      a: "Expert advice, accurate filing, priority support, and complete compliance guidance.",
    },
    {
      q: "Is online CA consultation expensive?",
      a: "No, we offer affordable plans with transparent pricing and discounts.",
    },
    {
      q: "How long does it take for a CA to file ITR?",
      a: "Usually within 24–48 hours once all documents are provided.",
    },
  ];

  const plans = [
    {
      id: "lite",
      title: "Lite",
      short: "Filing support for salaried individuals in completing the ITR-1 form",
      oldPrice: 1999,
      price: 1499,
      discountLabel: "25% discount",
      cta: "Get Started",
      features: [
        "Computation of Tax calculation",
        "Automatic Form 16 import",
        "Basic income tax return filing",
        "Email support",
      ],
      recommended: false,
    },
    {
      id: "standard",
      title: "Standard",
      short: "Filing includes salary, one house property, capital gains, and interest income",
      oldPrice: 3845,
      price: 2499,
      discountLabel: "35% discount",
      cta: "Get Started",
      features: [
        "Includes everything in Lite",
        "Deductions and Exemptions: Calculation and claim of eligible deductions under sections 80C, 80D, etc., and exemptions like HRA",
        "Capital gains from stocks or mutual funds Computation",
        "Income from other sources (interest, etc.)",
        "Priority email and chat support",
      ],
      recommended: true,
    },
    {
      id: "elite",
      title: "Elite",
      short: "Filing includes salary, one house property, capital gains, interest & other sources of income",
      oldPrice: null,
      price: null,
      discountLabel: null,
      cta: "Book an Appointment Now",
      features: [
        "Includes everything in Standard",
        "Dedicated tax expert assistance: A session with a tax expert before filing to ensure all income and deductions are accounted",
        "Tailoring deductions and exemptions to perfectly fit your financial profile",
        "Assistance after post filings and follow-up till the refund",
      ],
      recommended: false,
      note: "*Speak with our CA for exclusive pricing",
    },
  ];

  const experts = [
    {
      name: "Komal",
      exp: "3 years",
      spec: "Specialises in direct and indirect tax strategies",
      desc: "Get comprehensive solutions for tax compliance.",
    },
    {
      name: "Jebin Vargese",
      exp: "5 years",
      spec: "Specialises in bookkeeping and FEMA compliance",
      desc: "Get expert financial management and support.",
    },
    {
      name: "S J Anakha",
      exp: "6 years",
      spec: "Specialises in tax planning and filing",
      desc: "File accurately and on time with expert advice.",
    },
  ];

  const expertise = [
    "Tax Advisory",
    "GST Audit Report (GSTR 9 & 9C)",
    "Transfer Pricing (Opinion Report)",
    "Transfer Pricing (Audit Report)",
    "ITR Filing for Companies",
    "Income Tax Notices",
    "Income Tax Audit",
    "Net Worth and Valuation Certificate",
    "Accountancy",
    "Auditing & Taxation",
    "ITR Filing",
    "GST Compliance, Audit, and Training",
    "Tax on Property Purchase & Sales",
    "NRI Taxation and ITR Filings",
    "Tax on Consultancy & Freelancing",
    "ITR for Tenders",
  ];

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-gradient-to-b from-blue-50 via-white to-white">
            <div className="container mx-auto px-6 lg:px-12 py-20 text-center relative z-10">
              <motion.h1
                className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Online CA Consultation
              </motion.h1>

              <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                #1 Legal service provider in India — Consult expert CA support
                for tax filing, accounting, compliance, and financial planning.
              </p>

              <div className="mt-6 flex flex-col md:flex-row justify-center gap-3 items-center">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    Badge Image
                  </span>
                  <span className="font-medium">Trusted on Google & Trustpilot</span>
                </div>

                <a
                  href="#consult"
                  className="mt-3 md:mt-0 inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
                >
                  Book An Appointment Now
                </a>
              </div>

              <div className="mt-6 flex justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-green-500" />
                  <span>162+ CAs are online</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-green-500" />
                  <span>38 live ongoing calls</span>
                </div>
              </div>
            </div>
          </section>

          {/* Consultation + Offer */}
          <section id="consult" className="py-12 container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Left: Offer graphic & trust */}
              <div className="lg:col-span-1">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                  <img
                    src="/offer-image.jpg"
                    alt="offer"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">Consult CA Online</h3>
                    <p className="mt-2 text-gray-600">
                      Get easy updates through Whatsapp. Experienced CAs for all
                      financial matters.
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <div>
                          <div className="text-sm font-semibold">4.5/5</div>
                          <div className="text-xs text-gray-500">19k+ Happy Reviews</div>
                        </div>
                      </div>

                      <div className="ml-auto text-xs text-gray-500">Trusted Platform</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center: Form */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow">
                  <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>

                  <form className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                        <Mail className="w-5 h-5 text-gray-400 mr-2" />
                        <input placeholder="Email" className="w-full outline-none bg-transparent" />
                      </label>
                      <label className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                        <Smartphone className="w-5 h-5 text-gray-400 mr-2" />
                        <input placeholder="Mobile Number" className="w-full outline-none bg-transparent" />
                      </label>
                    </div>

                    <label className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                      <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                      <input placeholder="City / Pincode" className="w-full outline-none bg-transparent" />
                    </label>

                    <label className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                      <Languages className="w-5 h-5 text-gray-400 mr-2" />
                      <input placeholder="Preferred Language" className="w-full outline-none bg-transparent" />
                    </label>

                    <label className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                      <input placeholder="Problem Type" className="w-full outline-none bg-transparent" />
                    </label>

                    <div className="flex items-center gap-3">
                      <button type="button" className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                        Book Appointment — ₹1299 ₹649
                      </button>
                      <button type="button" className="px-4 py-3 rounded-lg border text-sm">
                        Whatsapp
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-green-500" />
                      162+ CAs online • 38 live ongoing calls
                    </p>
                  </form>
                </div>
              </div>

              {/* Right: Quick info */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow">
                  <h3 className="text-lg font-semibold mb-2">Trusted Reviews</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-sm">
                      <div className="font-semibold">Google Reviews</div>
                      <div className="text-xs text-gray-500">4.5/5 — 19k+ Happy Reviews</div>
                    </div>
                  </div>

                  <h4 className="text-sm font-medium mt-4">A leading legal-tech platform</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Delivering reliable and expert services nationwide — Vakilsearch helps with tax, compliance, registrations and more.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Plans Section (FULL content as requested) */}
          <section className="py-16 container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold">Choose the Right Plan For Your ITR Filing</h2>
              <p className="mt-3 text-gray-600">Vakilsearch's experts file over 10,000+ ITRs every month.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((p) => (
                <div
                  key={p.id}
                  className={`relative bg-white rounded-xl p-6 shadow hover:shadow-lg transition ${
                    p.recommended ? "border-2 border-blue-600" : ""
                  }`}
                >
                  {p.recommended && (
                    <div className="absolute -top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      Recommended Plan
                    </div>
                  )}

                  <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{p.short}</p>

                  <div className="flex items-baseline gap-3">
                    {p.oldPrice ? (
                      <div className="text-gray-400 line-through">₹{p.oldPrice}</div>
                    ) : null}
                    <div className="text-2xl font-bold text-gray-900">
                      {p.price ? `₹${p.price}` : p.note ?? "*Contact us for pricing"}
                    </div>
                  </div>

                  {p.discountLabel && (
                    <div className="mt-2 inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                      {p.discountLabel}
                    </div>
                  )}

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">What you'll get</h4>
                    <ul className="space-y-2 text-gray-700">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                      {p.cta}
                    </button>

                    {p.id === "elite" && (
                      <div className="mt-3 text-xs text-gray-500 text-center">
                        {p.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experts */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <h3 className="text-2xl font-bold text-center mb-8">Scholarly Work by Our Panel of Consultants</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {experts.map((e, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 p-3 rounded-full">
                        <User className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">{e.name}</div>
                        <div className="text-xs text-gray-500">{e.exp} experience</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-700">{e.spec}</p>
                    <p className="mt-2 text-xs text-gray-500">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Areas of Expertise */}
          <section className="py-16 container mx-auto px-6 lg:px-12">
            <h3 className="text-2xl font-bold text-center mb-8">Areas of Expertise</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {expertise.map((ex, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">{ex}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits, Process & Why Us */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-3">Benefits of Online CA Services</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Convenience and Accessibility</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Time Efficiency</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Expert Advice</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Secure Document Sharing</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">How It Works</h4>
                <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
                  <li>Fill out the form – Share your details</li>
                  <li>Schedule Your Consultation</li>
                  <li>Make the Payment</li>
                  <li>Talk to a CA – Get expert personalised advice</li>
                </ol>
              </div>

              <div>
                <h4 className="font-bold mb-3">Why Vakilsearch</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-yellow-400 mt-1" /> Experienced Professionals</li>
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-yellow-400 mt-1" /> Tailored Solutions</li>
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-yellow-400 mt-1" /> Secure & Confidential</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16 container mx-auto px-6 lg:px-12">
            <h3 className="text-2xl font-bold text-center mb-8">FAQs</h3>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border rounded-lg p-4">
                  <button
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left font-semibold text-gray-900"
                  >
                    {faq.q}
                    <ChevronDown className={`w-5 h-5 transition-transform ${faqOpen === idx ? "rotate-180" : ""}`} />
                  </button>
                  {faqOpen === idx && <p className="mt-2 text-gray-700">{faq.a}</p>}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
