import React from "react";
import { FileText, ClipboardList, BookOpen, CheckCircle2, Shield, Users, Globe, Timer } from "lucide-react";
import NavigationMenu from "../MegaMenu";

const MedicalWritingServices: React.FC = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nimble Medical Writing Support Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Get access to specialized, accurate, and secure medical writing support
          services provided by seasoned writers and researchers within quick
          turnaround times. Prices start at <span className="font-semibold">$14/hour</span>.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-6">
          Are you looking for high-quality, reliable, and professional medical writing
          support to aid your clinical research and help you document relevant
          information in a comprehensible and precise manner? Nimble Acuity's
          professional medical writing support services help you plan and deliver the
          required content, easing your day-to-day documentation and submission
          requirements.
        </p>
        <p>
          With our medical writing support services, you can ensure a higher ROI and
          obtain assured benefits. From regulatory documenting to medical dissertation
          writing services, we deliver better-than-expected results at a shorter
          turnaround time.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
          Our Medical Writing Support Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Clinical medical writing services",
            "Medical dissertation writing services",
            "Regulatory medical support writing",
            "Medical compliance writing",
            "Regulatory documenting",
            "Publication planning & data presentations",
            "Clinical study reports, papers & summaries",
            "Drug, Scientific, and Investigator's Brochures",
            "Sales training materials",
            "Medical editing of scientific material",
            "New drug applications (NDAs)",
            "Common technical documents (CTDs)",
            "Preparation of IND annual reports",
            "Targeted Product Plans (TPPs)",
            "White papers, scientific research papers/thesis",
            "Nonclinical safety data reports",
            "SAE reports & execution reports of clinical trials",
            "Periodic safety update reports (PSURs)",
            "Package Inserts, Product Monographs, etc.",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <ClipboardList className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          Our Medical Writing Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Infectious diseases",
            "Ophthalmology",
            "Osteoarthritis",
            "Nephrology",
            "Neurology",
            "Pediatrics",
            "Anesthesiology",
            "Cardiovascular diseases",
            "Clinical pharmacology",
            "Psychiatry",
            "Obstetrics and Gynecology",
            "Urology",
            "Endocrinology",
            "Gastroenterology",
            "Geriatrics",
            "Radiology",
          ].map((area, idx) => (
            <div key={idx} className="p-4 bg-blue-50 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-700 inline mr-2" />
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
          Why Nimble Medical Writing Support Services to Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Users,
              text: "Writers with medical backgrounds and global pharma experience",
            },
            {
              icon: FileText,
              text: "Clear, well-structured, and concise regulatory-compliant documents",
            },
            {
              icon: Shield,
              text: "NDA agreements & strict data security policies",
            },
            {
              icon: CheckCircle2,
              text: "Rigorous quality control for 100% satisfaction",
            },
            {
              icon: Globe,
              text: "Expertise across therapeutic areas with international standards",
            },
            {
              icon: Timer,
              text: "Quick turnaround with efficient processes and software tools",
            },
          ].map(({ icon: Icon, text }, idx) => (
            <div
              key={idx}
              className="flex items-start p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <Icon className="w-8 h-8 text-blue-600 mr-4" />
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="font-semibold text-gray-800 mb-2">
              Reliable Research Services for Shanghai Trade Consultants
            </p>
            <p className="text-gray-600 text-sm">
              Delivered highly accurate and cost-effective primary research
              solutions to meet client requirements.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="font-semibold text-gray-800 mb-2">
              Secondary Research for a Swiss Company
            </p>
            <p className="text-gray-600 text-sm">
              Provided accurate and reliable secondary research services within a
              quick turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Testimonials
        </h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity has been a tremendous resource for our team. They are
          very precise and attentive to all our needs and have been able to learn
          our procedures quicker than I ever thought possible.”
        </blockquote>
        <p className="mt-4 text-gray-900 font-semibold">
          — General Partner, Manufacturing company in the US
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Medical Writing Support Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Get expert medical writing and documentation support from experienced
          professionals. Contact us today for high-quality, secure, and compliant
          services delivered within the stipulated time.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MedicalWritingServices;
