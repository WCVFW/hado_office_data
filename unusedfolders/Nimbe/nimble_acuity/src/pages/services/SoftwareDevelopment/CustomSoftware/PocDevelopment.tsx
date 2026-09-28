import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const PocDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              PoC Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We design and build a functional Proof of Concept (PoC) for rapid prototyping and better cost efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If you have a product idea and want to carry it further from your vision, outsourcing PoC development services to Nimble Acuity is the perfect next step. We collect your preliminary inputs and use the best PoC development and analysis strategies to shape your ideas into a functional prototype.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading PoC development service provider, offering exceptional value through our services. We commit to deliverables and go to all lengths to keep our end of assurances, with a major focus on rapid prototyping and enhanced cost-efficiency.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              PoC Development Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Digital Certificate Creation</h4>
                <p className="text-gray-700">We expertly develop custom platforms that issue authentic, auditable certificates on the blockchain to ensure transparency and trust in your system.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Management of AML</h4>
                <p className="text-gray-700">For the banking sector, we ensure transaction protection by flagging suspicious incidents that are undiscovered by usual means, helping you maintain clean ledgers.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Automation of Claim Settlement</h4>
                <p className="text-gray-700">We can carry out PoC for insurance and settlement, automating the process using IoT data to provide a reliable solution for the crop industry.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Traceability in Supply Chain</h4>
                <p className="text-gray-700">We provide real-time tracing solutions for supply chain companies, evaluating supply paths and value chain requirements to improve end-to-end processes.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Invoice Discounting</h4>
                <p className="text-gray-700">We specialize in developing P2P invoice discounting systems to create partnerships between stakeholders, improving supplier credibility and ensuring lenders are always covered.</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our PoC Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Strategy and Proposal:</strong> We identify client challenges and business requirements through consultation to perceive your goals.</li>
              <li><strong>Designing:</strong> We develop a wireframe for the process to showcase what can be implemented and any limitations.</li>
              <li><strong>Client Approval:</strong> The client verifies the project proposal and either approves it or recommends changes.</li>
              <li><strong>Development and Integration:</strong> After client approval, the project commences with a team chosen from our talent reserves.</li>
              <li><strong>Quality Check:</strong> QA teams validate the project, and after conformance, the production is marked as complete and reports are created.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Pricing:</strong> We provide not just discounted rates but also amazing quality that is unmatched in the market.</li>
              <li><strong>High-quality Services:</strong> The quality of our PoC development services is our top priority, and we make no compromises.</li>
              <li><strong>Rapid Turnaround Time:</strong> Our services are agile, and we always deliver on our promises within the stipulated time.</li>
              <li><strong>Scalable Solutions:</strong> Our solutions are highly scalable and can easily keep up with the pace of your business growth.</li>
              <li><strong>ISO Certified Provider:</strong> We are ISO 9001:2015 certified, demonstrating our commitment to meeting and exceeding client expectations.</li>
              <li><strong>100% Data Security:</strong> Your data is in safe hands, as we have professionals who take exceptional care to keep it secure and constantly monitored.</li>
              <li><strong>Round-the-clock Support:</strong> You can easily reach us via your preferred channel to get agent support in your local language within a few hours.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Validate Your Idea?
            </h3>
            <p className="text-gray-700 mb-6">
              At Nimble Acuity, we have expert teams and advanced methodologies to bring world-class PoC development services within your reach. With over 26 years of experience in software technologies, we are a top PoC development service provider in the industry.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To know more about our services, get in touch with us now. We guarantee to provide a quick quote.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PocDevelopment;