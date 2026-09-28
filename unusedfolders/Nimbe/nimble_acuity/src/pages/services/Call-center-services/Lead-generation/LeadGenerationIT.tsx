import React from "react";
import CCmainmenu from "../CCmainmenu";

const LeadGenerationIT: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">

      {/* Hero Section */}
        <CCmainmenu/>
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Lead Generation for IT Companies
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Leverage our lead generation for IT services to expand your business and focus on high-converting leads.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <p className="mb-6">
          We position your IT offerings using a VoC-to-CTQ mapping approach that ensures messaging aligns with buyer expectations. Beyond initial outreach, we implement standardized workflows that nurture leads through the funnel, minimizing NVA handoffs and maximizing lead quality.
        </p>
        <p>
          Our experts understand your business needs and provide niche-specific solutions. Outsource your IT lead generation requirement to Nimble to boost revenue with high-converting prospects.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Lead Generation Services for IT Companies</h2>
        {[
          {
            title: "B2B Lead Generation Services",
            desc: "Cost-effective method of business expansion leveraging domain experience to generate quality leads."
          },
          {
            title: "Appointment Setting",
            desc: "Define buyer personas via data-driven segmentation and execute CTQ-aligned campaigns under DMAIC lifecycle for improved lead readiness."
          },
          {
            title: "Cold Calling",
            desc: "Increase sales while gathering intel about prospects’ product and brand insights through surveys and outreach."
          },
          {
            title: "SAAS Lead Generation",
            desc: "Fine-tune campaigns and B2B marketing programs to improve conversions using compelling content and messaging."
          },
          {
            title: "IoT Lead Generation",
            desc: "Apply Lean Six Sigma tools like VSM and controlled A/B testing to validate message alignment and eliminate NVA steps."
          }
        ].map(service => (
          <div key={service.title} className="mb-6 bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Call Center Software */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Call Center Software We Use</h2>
        <div className="flex flex-wrap justify-center gap-4 text-blue-700 font-medium">
          {["HubSpot","Bitrix24","Talkdesk","Five9","Zendesk","Dixa","Salesforce","LiveAgent","Avaya"].map(tool => (
            <span key={tool} className="border px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 transition">{tool}</span>
          ))}
        </div>
      </section>

      {/* IT Lead Generation Process */}
      <section className="bg-blue-50 py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Process Flow for IT Lead Generation</h2>
        {[
          { step: "01. Requirement Analysis", desc: "Assess requirements to design a systematic approach for the right audience." },
          { step: "02. Sales Briefing", desc: "Provide a simple sales brief including benefits of choosing Nimble's IT lead generation services." },
          { step: "03. Data Standardization", desc: "Pre-verify contact lists to ensure multi-channel reachability, reducing bounce and increasing response rates." },
          { step: "04. Customized Email & Prospecting", desc: "Tailor campaigns to each channel for improved feedback and higher click-through." },
          { step: "05. Leads Segmentation", desc: "Segment and nurture responding leads to filter out those that don't match sales criteria." },
          { step: "06. Lead Delivery", desc: "Send qualified leads to your sales team to ensure higher conversion into sales." }
        ].map(item => (
          <div key={item.step} className="mb-6 bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.step}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Why Hire Us */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Hire Nimble for IT Lead Generation?</h2>
        <ul className="list-disc list-inside space-y-4">
          <li><strong>Certified Service Provider:</strong> ISO 9001:2015 certified with global presence in 160+ countries.</li>
          <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified; NDAs ensure 100% confidentiality.</li>
          <li><strong>Quality Services:</strong> Multi-channel validation via VoC and CTQ metrics. Lean Six Sigma optimization led to 32.2% cycle time reduction.</li>
          <li><strong>Short Turnaround Time:</strong> Agile processing ensures high-quality lead delivery quickly.</li>
          <li><strong>Single Point of Contact:</strong> Dedicated representative for timely support and responses.</li>
          <li><strong>Experienced Professionals:</strong> Pool of experts with 10+ years of IT lead generation experience.</li>
          <li><strong>Round-the-clock Availability:</strong> 24/7 support in your local time zone.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Additional Services You Can Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-4 text-blue-700 font-medium">
          {[
            "Outbound Lead Generation",
            "Insurance Lead Generation",
            "E-Commerce Lead Generation",
            "B2C Lead Generation",
            "B2B Lead Generation",
            "Real Estate Lead Generation"
          ].map(service => (
            <span key={service} className="border px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 transition">{service}</span>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">CATI Services for Health Insurance</h3>
            <p>Nimble conducted a blind phone survey on 4000 customers for a client to evaluate referral management preference with 99% accuracy.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Lead Generation for Web Development Firm</h3>
            <p>Nimble provided cost-effective lead generation services to a leading website development and SEO company, boosting qualified leads and conversions.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Customer Testimonials</h2>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
          "I'm impressed! You ladies and gentlemen have done a fabulous work. Thank you so much!"
          <footer className="mt-4 font-semibold">Reservations Supervisor, Travel Website Company, CA</footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Outsource Lead Generation for IT Companies to Nimble</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Generate qualified IT leads, increase conversion, reduce attrition, and cut costs by up to 40%. Partner with Nimble to ensure shorter sales cycles and tremendous business growth.
        </p>
        <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded shadow hover:bg-blue-100 transition">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default LeadGenerationIT;
