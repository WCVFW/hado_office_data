import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CoreModernizationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Core Modernization Services
            </h2>
            <p className="text-lg text-gray-600">
              Cost-effectively prepare your IT infrastructure to predict and meet today's and tomorrow's business needs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to modernize and reimagine your core IT infrastructure and applications to meet the challenging demands of your business and customers? Are you interested in mitigating digital transformation risks that could crop up while you prepare your applications and IT infrastructure for the future? If so, you can benefit significantly from our core modernization services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading core modernization service provider that can help you envision and deploy elegant and sophisticated solutions to transform and streamline your infrastructure and applications. We help you provide richer, more useful, and user-friendly experiences to your customers and stakeholders with a high level of agility and resilience.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Core Modernization Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Application Stack Management</h4>
                <p className="text-gray-700">Our team of software engineers leverages the full power of automation to modernize all your workplace technologies. We provide high-quality engineering and quality assurance services and industry-leading DevOps consulting.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Infrastructure Modernization</h4>
                <p className="text-gray-700">We help you cost-effectively migrate your IT environment to the cloud and include new functionality. Our services include cloud enablement, infrastructure services, and application value management.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Enhance Enterprise-wide Security</h4>
                <p className="text-gray-700">Today's firms face many security challenges, including advanced cyber-threats and outdated solutions. Our team helps you proactively anticipate and resolve threats before they become a reality.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Core Applications Redesigning</h4>
                <p className="text-gray-700">Nimble Acuity helps you design, develop, and deliver products and experiences that drive enhanced value. We transform legacy applications and make them cloud-native while modernizing core platforms and infrastructure.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Experienced Team:</strong> Our team of highly motivated, qualified, and experienced IT and cloud-certified engineers provides industry-leading solutions at the cutting-edge of new developments.</li>
              <li><strong>Affordable Services:</strong> We use streamlined workflows and processes to eliminate waste, ensuring our world-class services are provided with significant cost savings.</li>
              <li><strong>Customized Solutions:</strong> Our engineers work closely with you to understand your business requirements and provide highly customized consulting services.</li>
              <li><strong>Fast Turnaround:</strong> We provide our services without any delay, giving you access to cutting-edge expertise on the quickest timelines in the industry.</li>
              <li><strong>Multi-domain Experience:</strong> Our team is highly capable and experienced in working with multiple technologies, infrastructure, and cloud environments.</li>
              <li><strong>Security:</strong> We fully understand the importance of managing and using data according to the highest standards of data security and privacy.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Modernize Your Core IT?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has catered to the modernization requirements of a diverse clientele from across the world. We provide our clients with access to a diverse range of certified software, IT, and cloud engineers with significant experience in specialized niches.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We will ensure that your core modernization processes fully comply with all legal and regulatory requirements and provide our services with full transparency. Get in touch with us for a custom quote.
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

export default CoreModernizationServices;