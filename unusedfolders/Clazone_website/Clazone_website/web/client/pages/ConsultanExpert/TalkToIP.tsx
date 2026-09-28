import { useState } from "react";
import { Star, Mail, Smartphone, MapPin, ChevronDown, Search } from "lucide-react";
import HeaderNav from "@/components/HeaderNav";

export default function TalkToIP() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    { q: "What does an Intellectual Property case do?", a: "IP cases help protect trademarks, patents, copyrights, and trade secrets, resolving disputes and enforcing rights." },
    { q: "How do I choose the right Intellectual Property lawyer for my case?", a: "Choose based on expertise, years of experience, practice areas, and client reviews." },
    { q: "What are the consultation fees for an Intellectual Property lawyer?", a: "Fees vary based on experience and service. Vakilsearch offers transparent consultation rates." },
    { q: "Can I consult an Intellectual Property lawyer online?", a: "Yes, consultations can be booked online via chat, call, or video meeting." },
    { q: "How do I book a consultation with an Intellectual Property lawyer on Vakilsearch?", a: "Fill the online form with your details and select a preferred lawyer to book instantly." },
    { q: "Who is a lawyer for intellectual property, and what do they do?", a: "They specialize in protecting and enforcing trademarks, patents, copyrights, and designs, advising clients on IP strategy and handling disputes." },
    { q: "What types of IP are protected under Indian law?", a: "Trademarks, patents, copyrights, designs, geographical indications, and trade secrets are protected." },
    { q: "What does the intellectual property process involve in India?", a: "It involves registration, monitoring, enforcement, licensing, and strategic portfolio management under relevant IP laws." },
    { q: "What is the role of IP lawyers in protecting trademarks and patents?", a: "They ensure proper registration, prevent infringement, draft agreements, and represent clients in disputes." },
    { q: "How do patent lawyers differ from trademark lawyers?", a: "Patent lawyers focus on inventions and technical IP, while trademark lawyers focus on brands and logos." },
    { q: "What is the importance of intellectual property for startups and businesses?", a: "IP protects innovation, enhances valuation, and provides legal rights against misuse." },
    { q: "What kind of cases do IP lawyers handle in court?", a: "Infringement disputes, licensing issues, patent oppositions, copyright claims, and trademark violations." },
  ];

  const services = [
    "Trademark Search",
    "Patent Registration",
    "Trademark Renewal",
    "Provisional Patent Application",
    "Patent Infringement",
    "Trademark Class Search",
    "Indian Patent Search",
    "Copyright Infringement",
    "Trademark Objection",
    "Design Registration",
    "US Trademark Registration",
  ];

  const lawyers = [
    { name: "Adv Raymond Gadkar", experience: "8 years", location: "Mumbai", skills: "Intellectual Property + 5 more", phone: "+91 9059****16" },
    { name: "Gagan Oberoi", experience: "18 years", location: "Chandigarh, Delhi, Gurgaon, Ludhiana", skills: "Intellectual Property + 6 more", phone: "+91 6060****16" },
    { name: "Bhailappa Balagali", experience: "2 years", location: "Bangalore", skills: "Intellectual Property + 5 more", phone: "+91 8062****16" },
    { name: "Kamil Saiyed", experience: "3 years", location: "Ahmedabad", skills: "Intellectual Property + 5 more", phone: "+91 6064****16" },
    { name: "Aakash Verma", experience: "3 years", location: "Delhi", skills: "Intellectual Property + 6 more", phone: "+91 8350****34" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-1">
        {/* ===== Hero Section ===== */}
        <section className="bg-gradient-to-b from-purple-50 via-white to-white py-20">
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            {/* ===== Left Content ===== */}
            <div>
              <p className="text-gray-500 mb-2">Home &gt; Intellectual Property Lawyers</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Experienced Intellectual Property Lawyers in India
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-6">
                Talk to an IP lawyer to protect your creations and innovations,
                including trademarks, patents, copyrights, and trade secrets.
                We offer legal guidance, ensure your rights, and represent you
                in disputes.
              </p>

              {/* Stats */}
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 text-center">
                {[
                  { value: "440+", label: "Lawyers are online" },
                  { value: "140+", label: "Ongoing calls" },
                  { value: "5,00,000+", label: "Happy Users" },
                  { value: "1,00,000+", label: "Cases Resolved" },
                  { value: "300+", label: "Expert Lawyers" },
                  { value: "50+", label: "Specialities" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow">
                    <p className="text-2xl font-bold text-purple-600">{item.value}</p>
                    <p className="text-gray-700 text-sm">{item.label}</p>
                  </div>
                ))}
              </ul>

              <button className="px-8 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
                Facing a Legal Issue? Connect with an Expert Lawyer Now!
              </button>
            </div>

            {/* ===== Right Form ===== */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Book Your Consultation
                </h2>
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
                  <input type="text" placeholder="City/Pincode" className="w-full outline-none" />
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <input type="text" placeholder="Problem Type" className="w-full outline-none" />
                </div>
                <p className="text-sm text-gray-500">By proceeding, you agree to our T&C*</p>
                <button className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
                  Connect with Lawyer
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Google Reviews ===== */}
        <section className="py-16 container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Trusted on Google</h2>
          <div className="flex justify-center items-center gap-6">
            <Star className="w-6 h-6 text-yellow-400" />
            <p className="font-semibold text-gray-700">4.5/5 — 19k+ Happy Reviews</p>
          </div>
        </section>

        {/* ===== Filter/Search ===== */}
        <section className="py-8 container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center border rounded-lg px-3 py-2 bg-white flex-1">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input type="text" placeholder="Search Lawyers or City" className="w-full outline-none" />
            </div>
            <button className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
              Filter
            </button>
            <button className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition">
              Clear all
            </button>
          </div>
        </section>

        {/* ===== Lawyer Profiles ===== */}
        <section className="py-16 container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-8">Top Intellectual Property Lawyers</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawyers.map((lawyer, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-1">{lawyer.name}</h3>
                <p className="text-gray-500 text-sm mb-1">{lawyer.experience} Experience</p>
                <p className="text-gray-500 text-sm mb-1">{lawyer.location}</p>
                <p className="text-gray-700 text-sm mb-2">{lawyer.skills}</p>
                <p className="text-purple-600 font-semibold">{lawyer.phone}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== How IP Lawyers Help ===== */}
        <section className="py-16 container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-6">How Intellectual Property Lawyer Can Help You</h2>
          <p className="text-gray-700 mb-4">
            IP lawyers assist individuals, businesses, and creators in securing and enforcing intellectual assets. They guide clients through registration, provide strategic advice, and represent clients in disputes. Whether protecting a brand, invention, artistic work, or business secret, an IP lawyer ensures legal safeguards and helps maximize the value of intellectual property.
          </p>
        </section>

        {/* ===== Why Choose Vakilsearch ===== */}
        <section className="py-16 container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Vakilsearch for Hire IP Lawyer?</h2>
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Expert Guidance on IP Registration",
              "Protection Against Infringement",
              "Strategic IP Portfolio Management",
              "Legal Representation in Disputes",
              "Contract Drafting and Licensing Support",
              "Global IP Compliance and Protection",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-white p-4 rounded-lg shadow">
                <Star className="w-5 h-5 text-purple-600 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== FAQs ===== */}
        <section className="py-16 container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
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

        {/* ===== Other IP Services ===== */}
        <section className="py-16 container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-6">Explore Other Intellectual Property Services</h2>
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <li key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex justify-between items-center">
                {service}
                <span className="text-purple-600 font-bold">→</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
