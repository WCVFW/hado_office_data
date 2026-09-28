import { useState } from "react";
import {
  CheckCircle,
  ChevronDown,
  Star,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";
import HeaderNav from "@/components/HeaderNav";

export default function TalkToCS() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What Are the Qualifications Needed to Become an Online CS?",
      a: "A degree in commerce or equivalent and completion of the CS course from ICSI.",
    },
    {
      q: "What Skills Are Required to Be an Effective Company Secretary?",
      a: "Legal knowledge, corporate governance, communication, compliance management, and organizational skills.",
    },
    {
      q: "How Can a Company Secretary Contribute to the Success of a Company?",
      a: "By ensuring compliance, maintaining corporate records, and advising management on legal and governance matters.",
    },
    {
      q: "Can a Small Business Benefit From Having a Company Secretary?",
      a: "Yes, even small businesses can avoid compliance issues and improve governance with a CS.",
    },
    {
      q: "What is the Difference Between a Company Secretary and a Company Director?",
      a: "A CS is an advisor responsible for compliance, while a Director makes strategic decisions for the company.",
    },
    { q: "What are the stages of the CS exam in India?", a: "Foundation, Executive, and Professional stages." },
    {
      q: "What are the educational requirements to start the CS Executive Course?",
      a: "Completion of 10+2 (for Foundation) or Graduation (for Executive direct entry).",
    },
    {
      q: "How long does it take to complete the CS Course?",
      a: "Typically 3-4 years depending on entry point and exam attempts.",
    },
    { q: "What is the CSEET Exam?", a: "Company Secretary Executive Entrance Test, mandatory for CS Foundation course entry." },
    {
      q: "Are there any alternative routes to the CS Executive Programme?",
      a: "Graduates in commerce or law may directly enter the Executive Programme bypassing Foundation.",
    },
    {
      q: "What is required to become a Company Secretary after completing the CS Course?",
      a: "Completion of training, passing all exams, and membership registration with ICSI.",
    },
    {
      q: "Is there any certification required for financial professionals in New Delhi?",
      a: "No separate certification is required beyond ICSI membership.",
    },
  ];

  const areas = [
    "Legal Compliances",
    "Annual Compliances",
    "Expert Board Advisors",
    "Corporate Governance",
    "Corporate Restructuring",
    "Corporate Funding",
    "FEMA Advisory and Compliance",
    "RBI Advisory and Compliance",
    "SEBI Registration and Compliance",
    "NCLT Dispute",
    "Arbitration & Alternative Dispute Resolution",
    "Secretarial Audit",
    "Cost Audit",
  ];

  const updates = [
    { activity: "Annual Return of LLP", form: "Form 11", due: "May 30, 2024", period: "FY 2023-24" },
    { activity: "Statement of Account & Solvency", form: "Form 8", due: "October 30, 2024", period: "FY 2023-24" },
    { activity: "KYC of Directors/Designated Partners", form: "DIR-3 KYC", due: "September 30, 2024", period: "FY 2023-24" },
    { activity: "Return of Deposits", form: "DPT-3", due: "June 30, 2024", period: "FY 2023-24" },
    { activity: "Appointment of Auditor", form: "ADT-1", due: "October 14, 2024", period: "Within 15 days of AGM" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-1">
        {/* ===== Hero Section ===== */}
        <section className="bg-gradient-to-b from-blue-100 via-white to-white py-20">
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            {/* ===== Left Content ===== */}
            <div className="text-center lg:text-left">
              <p className="text-gray-500 mb-2">Home &gt; Company Secretary</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Company Secretary Services
              </h1>
              <img
                src="https://your-hosted-url.com/legal-badge.png"
                alt="Top Legal Provider Badge"
                className="w-40 mx-auto lg:mx-0 mb-6"
              />
              <p className="text-lg text-gray-600 max-w-xl mb-8">
                #1 Legal service provider in India with 200+ verified experts.
              </p>
              <ul className="space-y-3 max-w-md mx-auto lg:mx-0 mb-8 text-left">
                {[
                  "Consult 200+ verified company secretaries for expert compliance guidance",
                  "Clear, hassle-free advice to keep your business compliant at every step",
                  "Transparent pricing with no hidden fees and satisfaction guaranteed",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            {/* ===== Right Form ===== */}
            <div>
              <div className="bg-blue-50 border border-blue-100 p-10 rounded-2xl shadow-md space-y-5">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Book Your Consultation
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
                    <Mail className="w-5 h-5 text-gray-400 mr-2" />
                    <input type="email" placeholder="Email" className="w-full outline-none" />
                  </div>
                  <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
                    <Smartphone className="w-5 h-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="Mobile Number" className="w-full outline-none" />
                  </div>
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <input type="text" placeholder="City/Pincode" className="w-full outline-none" />
                </div>
                <input
                  type="text"
                  placeholder="Language"
                  className="w-full border rounded-lg px-3 py-2 bg-white"
                />
                <input
                  type="text"
                  placeholder="Problem Type"
                  className="w-full border rounded-lg px-3 py-2 bg-white"
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="whatsapp" className="w-4 h-4" />
                  <label htmlFor="whatsapp" className="text-gray-700">
                    Get easy updates through WhatsApp
                  </label>
                </div>
                <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                  Book Appointment — ₹999 / 30 min
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Reviews ===== */}
        <section className="py-20 container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Thousands</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {[
              { name: "Google Reviews", rating: "4.5/5 — 19k+ Reviews" },
              { name: "Trustpilot", rating: "4.5/5 — 7500+ Reviews" },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 w-64">
                <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="font-semibold">{review.name}</p>
                <p className="text-gray-600 text-sm">{review.rating}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Expertise ===== */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Areas of Expertise</h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area, idx) => (
                <li key={idx} className="bg-white p-5 rounded-lg shadow text-gray-700 hover:shadow-lg transition">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== Updates ===== */}
        <section className="py-20 container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Compliance Updates</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="w-full text-left border-collapse">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-3 font-semibold border-b">Compliance Activity</th>
                  <th className="p-3 font-semibold border-b">Form</th>
                  <th className="p-3 font-semibold border-b">Due Date</th>
                  <th className="p-3 font-semibold border-b">Applicable Period</th>
                </tr>
              </thead>
              <tbody>
                {updates.map((u, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="p-3">{u.activity}</td>
                    <td className="p-3">{u.form}</td>
                    <td className="p-3">{u.due}</td>
                    <td className="p-3">{u.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== FAQs ===== */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border rounded-lg p-4 bg-white shadow-sm">
                  <button
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left font-semibold text-gray-900"
                  >
                    {faq.q}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${faqOpen === idx ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {faqOpen === idx && <p className="mt-2 text-gray-700">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
