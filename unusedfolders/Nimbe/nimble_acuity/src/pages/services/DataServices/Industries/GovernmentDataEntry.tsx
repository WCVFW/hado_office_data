import React from "react";
import DSmainmenu from "../DSmainmenu";

const GovernmentDataEntry = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-300 to-indigo-500 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Government Agencies Data Entry Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Nimble Auity helps government agencies digitize data efficiently, ensuring accuracy, compliance, and faster turnaround.
        </p>
      </section>

      {/* Call to Action Form */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Get a FREE Quote!</h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-6 text-center">
          Will outsourcing work for you? Know in 24 hours!
        </p>
        <form className="max-w-2xl mx-auto space-y-4 bg-white p-6 rounded-lg shadow-md">
          <input className="w-full border border-gray-300 rounded p-3" type="text" placeholder="Name*" required />
          <input className="w-full border border-gray-300 rounded p-3" type="email" placeholder="Email*" required />
          <input className="w-full border border-gray-300 rounded p-3" type="tel" placeholder="Phone*" required />
          <textarea className="w-full border border-gray-300 rounded p-3" placeholder="Enter your requirements*" required />
          <input className="w-full border border-gray-300 rounded p-3" type="text" placeholder="Enter Captcha" required />
          <button className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Secure Submit
          </button>
          <p className="text-sm text-gray-500 mt-2 text-center">
            We respect your privacy. Our Policy.
          </p>
        </form>
      </section>

      <section className="py-16 px-6 md:px-20 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    5 Reasons to Outsource Data Entry as a Government Agency
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
    {[
      { title: "Focus on Core Functions", desc: "Let Nimble handle data entry while you concentrate on main government tasks.", icon: "🛡️" },
      { title: "Save Costs", desc: "Outsourcing helps you provide efficient services while reducing operating expenses.", icon: "💰" },
      { title: "Flexible Resource Use", desc: "Scale your data entry requirements without hiring full-time staff.", icon: "⚡" },
      { title: "Quick Turnaround", desc: "Get your data keyed and organized within a short timeframe.", icon: "⏱️" },
      { title: "Advanced Technology", desc: "Access top-notch tools and resources at low costs without compromising quality.", icon: "🖥️" }
    ].map((item, idx) => (
      <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
        <div className="text-5xl mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

<section className="py-16 px-6 md:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Why Choose Nimble Auity for Government Agencies
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { title: "Trusted & Experienced", desc: "We are a respected provider for data entry and back-office services.", icon: "🏆" },
      { title: "Proven Processes", desc: "Our established processes deliver top-quality results consistently.", icon: "📈" },
      { title: "Cost Savings", desc: "Save up to 60% on operating costs by leveraging our services.", icon: "💵" },
      { title: "Guaranteed Accuracy", desc: "98% accuracy is guaranteed for every data entry task.", icon: "✅" },
      { title: "Free Trial Available", desc: "Test our capabilities and see how we can help before committing.", icon: "🧪" },
      { title: "Handle Huge Volumes", desc: "We can manage large-scale data entry projects with customized solutions.", icon: "📂" }
    ].map((item, idx) => (
      <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
        <div className="text-5xl mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Stats Section */}
      <section className="py-16 px-6 md:px-20 flex flex-wrap justify-around text-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-blue-600">40%</h3>
          <p className="text-gray-700">Cost Reduction</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-blue-600">8-24 Hrs</h3>
          <p className="text-gray-700">Faster Turnaround</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-blue-600">500+</h3>
          <p className="text-gray-700">Satisfied Clients</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-blue-600">350+</h3>
          <p className="text-gray-700">Skilled Data Management Experts</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-blue-600">99%</h3>
          <p className="text-gray-700">Accuracy</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-blue-600">21</h3>
          <p className="text-gray-700">Years Experience</p>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Data Security & Confidentiality</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Nimble Auity understands the critical importance of data confidentiality. Our rigorous information security policies ensure zero data breaches, providing a risk-free outsourcing experience for government agencies.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Choose Nimble Auity as Your Data Entry Partner</h2>
        <p className="max-w-4xl mx-auto mb-6 text-gray-700 text-lg">
          With over 26 years of experience serving 18,000+ customers globally, Nimble Auity delivers fast, accurate, and quality data entry services for government agencies. Trust us to exceed your expectations.
        </p>
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default GovernmentDataEntry;
