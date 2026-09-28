import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SoftwareModernization: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Software Modernization Services
            </h2>
            <p className="text-lg text-gray-600">
              Modernize your legacy software to enhance efficiency and performance that improves current and future business priorities.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Software modernization is the redesign of old software to adapt it to current business needs. The process works by integrating the latest features and functionality into your existing systems. Nimble Acuity's software modernization services facilitate the transfer of existing systems into new software platforms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We help companies turn established legacy software into new technology architectures that offer higher value to the company. Our team of software modernization developers works to strengthen your business and help you achieve higher returns on a budget that makes sense for your business.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Software Modernization Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Portfolio Assessment & Planning:</strong> We evaluate your existing applications and develop a detailed plan for your legacy systems.</li>
              <li><strong>Application Re-Architecture:</strong> We build a modern framework based on your business functionality to enhance system responsiveness and reduce costs.</li>
              <li><strong>Application Re-Engineering:</strong> We use agile methods to rebuild legacy applications and move them to a new platform or upgrade to new technology.</li>
              <li><strong>Application Migration:</strong> We provide a quick and effective way of migrating your legacy systems to a new language without disrupting your business.</li>
              <li><strong>Application Re-Hosting:</strong> Our services are a combination of scalable hardware, robust technology, and cloud environments to streamline the migration process.</li>
              <li><strong>Cloud Migration:</strong> We help you migrate your IT, applications, and infrastructure to a secure platform to lower costs and increase responsiveness.</li>
              <li><strong>Application Integration:</strong> We bring all your apps into one single app to boost overall efficiency and automate business processes.</li>
              <li><strong>Re-platforming of Applications:</strong> We help you move your old applications and software to new, modern technology platforms.</li>
              <li><strong>Application Recoding:</strong> We restructure the codes of existing legacy applications without changing the behavior of the app.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Software Modernization Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Strategy and Analyzing:</strong> We collect information, assess your application, and check the architectural changes required.</li>
              <li><strong>Designing:</strong> We create a roadmap for the software modernization to repurpose your legacy system and applications to new platforms.</li>
              <li><strong>Approval:</strong> The roadmap is sent to you for your approval, and we implement any requested changes.</li>
              <li><strong>Development and Integration:</strong> A dedicated team will refactor old codes and add new technologies to boost the functionality and performance of your software.</li>
              <li><strong>Quality Check and Testing:</strong> We run the application through several quality checks and testing parameters to fix any bugs and flaws.</li>
              <li><strong>Delivery and Live:</strong> Once the new modernized software has passed all checks, we will move your entire legacy system to the new platform and make it live.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Reduced Costs:</strong> Outsourcing these services can drastically reduce the cost compared to in-house modernization.</li>
              <li><strong>ISO Certified Company:</strong> We are an ISO 9001 and ISO 27001 accredited company, ensuring data security and quality.</li>
              <li><strong>Cutting-Edge Solutions:</strong> We provide high-value solutions to increase the value of existing applications with no limitations for future changes.</li>
              <li><strong>Improved Security:</strong> We provide advanced security measures, updated encryption, and other software-related security efforts.</li>
              <li><strong>Quality Assurance:</strong> We provide a rigorous quality check and assurance to ensure the new systems perform at the highest level.</li>
              <li><strong>Operational Efficiency:</strong> Our solutions are easier to implement and scale, improving your business's overall operational efficiency.</li>
              <li><strong>Maintenance:</strong> Our experienced staff provides round-the-clock maintenance of your systems.</li>
              <li><strong>Latest Technology:</strong> You get access to updated technology from consultation to development to deployment.</li>
              <li><strong>Meet Deadlines:</strong> We minimize the time it takes for your product to reach the market and ensure prompt, on-time delivery.</li>
              <li><strong>24/7 Support:</strong> Our team provides round-the-clock support, catering to companies worldwide and across different time zones.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Modernize Your Software?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a preferred software development company with a unique combination of qualified people, world-class processes, and robust technologies. We help you reduce costs and grow your business faster.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable, trustworthy, and efficient software modernization services provider, then get in touch with us today!
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default SoftwareModernization;