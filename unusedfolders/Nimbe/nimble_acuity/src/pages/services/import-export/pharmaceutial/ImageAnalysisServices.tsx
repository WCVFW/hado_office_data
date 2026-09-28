import React from "react";
import { CheckCircle, Camera, Cpu, Search, FileText, Smile, Shield } from "lucide-react";
import NavigationMenu from "../MegaMenu";

const ImageAnalysisServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Image Analysis Services</h1>
        <p className="text-lg max-w-3xl mx-auto">
          We offer impeccable services using advanced digital pathology tools. Get in touch for AI-powered services at just <span className="font-semibold">$10/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Image analysis is the process of recognizing key attributes present in images via digital imagery. It helps businesses enhance their development and production needs. However, not all businesses have the in-house expertise to deliver the required outcomes. Hence, it is best to Nimble your requirement to a reliable partner like Nimble Acuity.
        </p>
        <p>
          Nimble Acuity is a leading global research services provider with a huge team of experts capable of meticulously analyzing digital images from various industries. Our professionals are experienced in analyzing images obtained from SIMS, global infra-red maps, Transmission Electron Microscopy, SEM, and even mobile/DSLR cameras.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Image Analysis Services We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Camera, title: "Facial Recognition", desc: "Identify specifics like trespassers, suspects, and more." },
            { icon: Search, title: "Grading and Sorting", desc: "Analyze object quality to classify and sort." },
            { icon: Cpu, title: "Computer-Aided Diagnosis", desc: "Analyze CT, PET, X-ray, isotope scans, and more." },
            { icon: FileText, title: "Optical Character Recognition", desc: "Read printed and handwritten texts and numbers." },
            { icon: Smile, title: "Emotion Recognition", desc: "Assess customer satisfaction through image-based analysis." },
            { icon: Shield, title: "Quality Control", desc: "Detect missing components, defects, discoloration, and more." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <service.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Additional Services</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            3D Reconstruction, Damage Assessment, Event Detection, Organizing Visual Information
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Nimble Image Analysis to Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Quality Services", desc: "ISO-certified firm delivering accuracy to 160+ countries." },
            { title: "Team of Qualified Experts", desc: "Experienced digital imagery scientists catering to diverse needs." },
            { title: "Flexible Pricing", desc: "Affordable and customized quotations to match your budget." },
            { title: "Quick Turnarounds", desc: "24/7 operations with multiple delivery centers for faster results." },
            { title: "Data Security", desc: "Strict NDAs and robust ISMS systems ensure top-level confidentiality." },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 bg-gray-50 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">KOL Identification for UK Healthcare Provider</h3>
            <p className="text-gray-600 mb-2">
              Nimble Acuity delivered hundreds of KOL database services using proprietary methodologies, irrespective of geography.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read more →</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Secondary Research for Swiss Company</h3>
            <p className="text-gray-600 mb-2">
              A leading Swiss firm received accurate and reliable secondary research services within quick turnaround times.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read more →</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-gray-700">
          “The services that Nimble Acuity provided helped us achieve substantial cost and time savings on several difficult projects.”
        </blockquote>
        <p className="mt-4 font-semibold">Senior Vice President, Automotive & Transportation Industry Solutions Group</p>
        <a href="#" className="text-blue-600 font-medium block mt-2">More Testimonials »</a>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-12 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Nimble Image Analysis Solutions to Nimble Acuity</h2>
        <p className="max-w-2xl mx-auto mb-6">
          With 26+ years of experience and 18,000+ clients, we deliver accurate, error-free, and cost-effective image analysis solutions. Nimble to us and reap up to 40% cost benefits.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default ImageAnalysisServices;
