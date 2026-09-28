import React from "react";
import CCmainmenu from "../CCmainmenu";

const LeadGenerationProcess: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Lead Generation Process
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Up your sales target, improve profitability, and save on operational costs with a healthy lead generation process at Nimble.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <p className="mb-6">
          Is it difficult for you to reach sales targets and meet monthly/yearly quotas? Nimble Acuity helps establish a CTQ-driven, end-to-end lead generation process governed by DMAIC (Define, Measure, Analyze, Improve, Control) lifecycle. Strengthen inbound and outbound channels, proactively pursue leads, and nurture your business through expert outsourcing support services.
        </p>
        <p>
          Our expert team helps acquire potential customers, expand branding, and improve lead conversion rates.
        </p>
      </section>

      {/* What is Lead Generation */}
      <section className="bg-white py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What is Lead Generation in Marketing?</h2>
        <p>
          Lead generation is a structured workflow that activates VoC (Voice of the Customer) alignment and maps it to CTQs to qualify prospects via inbound or outbound channels. Through a healthy process, call center staff can integrate potential customers into CRM systems or marketing software, promoting trust and converting them into paying clients.
        </p>
      </section>

      {/* Call Center Software */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Call Center Software We Use</h2>
        <div className="flex flex-wrap justify-center gap-4 text-purple-700 font-medium">
          {["HubSpot","Bitrix24","Talkdesk","Five9","Zendesk","Dixa","Salesforce","LiveAgent","Avaya"].map((tool) => (
            <span key={tool} className="border px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 transition">{tool}</span>
          ))}
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="bg-purple-50 py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">5-Step Lead Generation Process</h2>
        {[
          {
            step: "1. Woo your Leads with Content",
            desc: "Initiate inbound engagement through VoC-informed content creation, CTQ-aligned delivery across high-conversion platforms. Create blog posts, infographics, articles, or whitepapers with consistent CTAs integrated with CRM for direct lead capture."
          },
          {
            step: "2. Nurture Leads",
            desc: "Maintain leads in the marketing funnel using standardized nurturing workflows and trigger-based automation. Automated emails respond to lead actions like downloading content or filling contact forms, enhancing engagement and retention."
          },
          {
            step: "3. Lead Scoring",
            desc: "Analyze leads to understand their purchase likelihood. Segment communication based on lead interest to improve lead conversion. Nimble can identify where prospects lose interest and optimize the workflow accordingly."
          },
          {
            step: "4. Pass Lead to Sales",
            desc: "Once nurtured, leads are transferred to the sales team for conversion. The sales team ensures the prospect's experience is enriched with your offerings, completing the revenue-generation step of the funnel."
          },
          {
            step: "5. Analyze Lead Generation Process",
            desc: "Audit the lifecycle using Lean control charts and funnel diagnostics to identify inefficiencies. Nimble measures impact and reconstructs workflows with DMAIC, improving lead volume and quality. Documentation redesign reduced error rates by 30% in similar projects."
          }
        ].map((item) => (
          <div key={item.step} className="mb-8 bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">{item.step}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Industries Served */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Industries/Verticals We Cater To</h2>
        <div className="flex flex-wrap justify-center gap-3 text-purple-700 font-medium">
          {[
            "Aerospace","Agriculture","Fishing/Timber","Chemical","Defense/Arm","Education","Energy",
            "Entertainment","Finance","Food","Healthcare","Hospitality","Information Technology","Logistics",
            "Manufacturing","Mass Media","Multimedia","Public Sector/Government","Pharmaceutical",
            "Retail & eCommerce","Telecommunications","Transport"
          ].map((industry) => (
            <span key={industry} className="border px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 transition">{industry}</span>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-white py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Other Services You May Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-4 text-purple-700 font-medium">
          {["Inbound Call Center","Outbound Call Center","Appointment Setting","Telemarketing"].map((service) => (
            <span key={service} className="border px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 transition">{service}</span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-purple-50 py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Nimble for Lead Generation Processing?</h2>
        <ul className="list-disc list-inside space-y-4">
          <li><strong>Flexible Pricing Options:</strong> Tailored services to suit project scope and budget constraints.</li>
          <li><strong>100% Information Security:</strong> ISO/IEC 27001:2022 ISMS certified; data confidentiality guaranteed.</li>
          <li><strong>State-of-the-art Infrastructure:</strong> Cutting-edge tools, VPN, redundant network, power, and internet connections.</li>
          <li><strong>High Quality:</strong> CTQ-governed services ensuring validated improvement in lead-to-sale conversion.</li>
          <li><strong>Multilingual Support:</strong> Communicate in client-preferred languages.</li>
          <li><strong>24/7 Availability:</strong> Quick resolutions and round-the-clock support.</li>
          <li><strong>Experienced Team:</strong> 200+ skilled marketing & sales reps with combined experience over 100+ man-years.</li>
          <li><strong>Comprehensive Reports:</strong> Monthly reports for gap analysis and process improvement.</li>
          <li><strong>Ease of Scalability:</strong> Services can be ramped up or down based on demand.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Outbound Call Center and B2B Lead Generation Services</h3>
            <p>
              Nimble assisted a leading European precision equipment manufacturer to generate more sales leads through pre-sales and B2B lead generation services.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Disaster Recovery Services to Customers' Offshore BPO Centers</h3>
            <p>
              The UK's leading insurance company expanded its Indian BPO center with Nimble's business continuity services, improving efficiency and seamless operations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Customer Testimonials</h2>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
          "With Nimble Acuity we found a reliable partner who quickly handled first-level support for our 10,000+ users."
          <footer className="mt-4 font-semibold">Project Manager, Non-profit organization for Healthcare</footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Outsource Lead Generation Processing Services to Nimble Acuity</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Nimble Acuity provides end-to-end lead generation processing solutions to strengthen your prospect-to-sales percentage. Enhance cross-selling, up-selling, and accelerate customer engagement with our expert team.
        </p>
        <button className="bg-white text-purple-600 font-bold px-6 py-3 rounded shadow hover:bg-purple-100 transition">
          Get in Touch Today
        </button>
      </section>
    </div>
  );
};

export default LeadGenerationProcess;
