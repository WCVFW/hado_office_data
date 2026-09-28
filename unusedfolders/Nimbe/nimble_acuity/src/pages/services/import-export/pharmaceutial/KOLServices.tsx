import React from "react";
import { CheckCircle, Users, Shield, Clock, BarChart3, Headphones } from "lucide-react";
import NavigationMenu from "../MegaMenu";

const KOLServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Key Opinion Leader (KOL) Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Stay ahead of the curve with data you can trust! Gain real-time information on key opinion leaders, elevate engagement strategies, and foster impactful collaborations.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          In the dynamic healthcare landscape, Medical Science Liaisons (MSLs), experts, and medical affairs teams face challenges in finding and engaging the right influencers. Outsourcing brings a transformative solution, helping overcome resource limitations, ensure data security, and build comprehensive KOL databases.
        </p>
        <p>
          With 20+ years of experience, we combine advanced algorithms and machine learning to scan networks with precision, delivering ISO-quality compliant results tailored to your requirements.
        </p>
      </section>

      {/* KOL Services */}
      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">KOL Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "KOL Identification and Mapping",
            "KOL Engagement and Collaboration",
            "Thought Leadership Development",
            "Advisory Board Management",
            "Key Messaging and Content Development",
            "Performance Tracking and Analytics",
          ].map((service) => (
            <div key={service} className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-sm text-gray-600">
                Comprehensive support to strengthen KOL strategies and maximize engagement outcomes.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Clients We Serve</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          {[
            "Pharmaceutical Manufacturers",
            "Biotechnology Companies",
            "Contract Research Organizations (CROs)",
            "Healthcare Technology Companies",
            "Marketing & Advertising Agencies",
            "Hospitals & Institutions",
            "Academic & Research Institutions",
          ].map((client) => (
            <div key={client} className="bg-blue-50 rounded-xl p-4 font-medium">
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: CheckCircle, title: "Error-free Services" },
            { icon: Shield, title: "Project Security" },
            { icon: Clock, title: "Quick Turnaround Time" },
            { icon: Users, title: "Skilled Research Team" },
            { icon: BarChart3, title: "Highly Scalable Services" },
            { icon: Headphones, title: "24/7 Support" },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="bg-white shadow rounded-2xl p-6 flex items-start space-x-3">
              <Icon className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-600">Delivering reliable, secure, and efficient KOL solutions.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {[
            "Financial Research Services",
            "Market Research Services",
            "Business Research Services",
            "Scientific Research Services",
          ].map((service) => (
            <div key={service} className="bg-blue-50 rounded-xl p-4 font-medium">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 bg-gray-50 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="space-y-6">
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold mb-2">
              KOL Identification for a UK Healthcare Provider
            </h3>
            <p className="text-sm text-gray-600">
              Delivered hundreds of KOL database services across geographies using proprietary research methodologies.
            </p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold mb-2">
              Secondary Research for a Swiss Company
            </h3>
            <p className="text-sm text-gray-600">
              Provided accurate and reliable secondary research services within quick timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700">
          "Nimble Acuity has been a tremendous resource for our team. They are precise, attentive, and quick learners of our procedures."
        </blockquote>
        <p className="mt-4 font-semibold">— General Partner, US Manufacturing Company</p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Enhance Your KOL Engagement Strategies
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Unlock impactful collaborations, ensure secure data handling, and drive success with our expert Key Opinion Leader (KOL) services.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default KOLServices;
