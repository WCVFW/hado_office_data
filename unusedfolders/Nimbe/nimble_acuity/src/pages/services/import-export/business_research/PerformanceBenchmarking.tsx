import React from "react";
import { CheckCircle2, BarChart3, Users2, ShieldCheck, Timer, Award, PhoneCall } from "lucide-react";
import NavigationMenu from "../MegaMenu";

const PerformanceBenchmarking: React.FC = () => {
  const services = [
    {
      title: "Internal Performance Benchmarking",
      desc: "Compare processes, performance, and practices among different teams and areas of your business to identify improvement opportunities.",
    },
    {
      title: "External Performance Benchmarking",
      desc: "Evaluate your company’s performance against competitors or across industries to determine strengths, weaknesses, and growth areas.",
    },
  ];

  const process = [
    { step: "01", title: "Requirement Analysis", desc: "We study your business, industry, and goals to plan a tailored benchmarking approach." },
    { step: "02", title: "Planning", desc: "We run SWOT analysis and define areas requiring benchmarking for precise insights." },
    { step: "03", title: "Data Collection", desc: "Our team gathers data through surveys, research, and competitor analysis." },
    { step: "04", title: "Analysis", desc: "We analyze data with BI tools, identify gaps, and visualize insights." },
    { step: "05", title: "Implementation", desc: "We collaborate to bridge performance gaps and enhance outcomes." },
    { step: "06", title: "Continuous Evaluation", desc: "We track and measure improvements to ensure long-term success." },
  ];

  const benefits = [
    { icon: <CheckCircle2 className="w-6 h-6 text-green-600" />, title: "Customized Services", desc: "Tailor-made benchmarking solutions at flexible rates." },
    { icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, title: "Complete Data Security", desc: "Strict policies ensure confidentiality and safety of your data." },
    { icon: <BarChart3 className="w-6 h-6 text-purple-600" />, title: "Stringent Quality Control", desc: "Accurate, error-free processes with top-notch standards." },
    { icon: <Timer className="w-6 h-6 text-orange-600" />, title: "Fast TAT", desc: "Quick delivery without compromising on quality." },
    { icon: <Award className="w-6 h-6 text-yellow-600" />, title: "ISO-Certified Provider", desc: "Certified processes aligned with global standards." },
    { icon: <Users2 className="w-6 h-6 text-pink-600" />, title: "Dedicated Manager", desc: "Single point of contact for seamless communication." },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Performance Benchmarking Services</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Gain key insights by effectively comparing your performance with peers. <br />
          <span className="font-semibold">Prices start at just $14/hour</span>
        </p>
      
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Performance Benchmarking Matters</h2>
          <p className="mb-4">
            Benchmarking helps you compare performance internally and externally, offering insights that enhance operations, revenue, and customer satisfaction.
          </p>
          <p>
            With Nimble Acuity, you get systematic, streamlined services backed by 26+ years of expertise.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-3">Our Expertise</h3>
          <p>
            We deliver comprehensive benchmarking insights to promote sales, maximize revenues, and drive efficiency across business units.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-2xl font-bold text-center mb-12">Performance Benchmarking Services We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-white shadow rounded-2xl border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">Our Performance Benchmarking Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {process.map((p, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-2xl border hover:scale-105 transition">
              <div className="text-3xl font-bold text-blue-600 mb-2">{p.step}</div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-2xl font-bold text-center mb-12">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="mb-4">{b.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow border">
            <h3 className="font-semibold mb-2">Chinese Trade Consultants</h3>
            <p className="text-sm text-gray-600">
              We provided cost-effective primary research services that helped the client achieve actionable insights.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow border">
            <h3 className="font-semibold mb-2">Swiss Hospitality Company</h3>
            <p className="text-sm text-gray-600">
              Delivered secondary research services with a quick turnaround time to support key business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Nimble Performance Benchmarking Services To Nimble Acuity</h2>
        <p className="mb-6">Partner with us for reliable, efficient, and cost-effective benchmarking solutions.</p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition inline-flex items-center gap-2">
          <PhoneCall className="w-5 h-5" /> Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default PerformanceBenchmarking;
