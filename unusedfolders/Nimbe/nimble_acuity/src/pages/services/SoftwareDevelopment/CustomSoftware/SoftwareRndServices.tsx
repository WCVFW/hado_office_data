import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SoftwareRndServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Software Research and Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Partner with Nimble Acuity to access a wide pool of talent and expertise to enhance your project at competitive prices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Software research and development is a necessity for most companies, but unfortunately, they often lack the in-house skills or knowledge to carry it out successfully. The best option is to outsource these services to an expert partner.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading software R&D service provider qualified to provide the talent, time, and resources required to complete any project flawlessly. We help companies develop products that aim to solve specific business problems and achieve their objectives.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Software Research and Development Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Custom Application Development</h4>
                <p className="text-gray-700">We leverage our engineering expertise to develop any type of web, mobile, desktop, and hybrid apps to meet your business needs.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">QA and Software Testing</h4>
                <p className="text-gray-700">Comprehensive quality assurance is integrated into our model, with an on-demand QA suite for all functional and user-friendly software test requirements.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">App Maintenance Services</h4>
                <p className="text-gray-700">Our services are designed to ensure the scalability, performance, and sustainability of your software applications as your business grows.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">API Integration Services</h4>
                <p className="text-gray-700">We develop and implement custom APIs for each application to add functionality and facilitate communication between your systems.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">IT Security Services</h4>
                <p className="text-gray-700">We identify vulnerabilities in your software infrastructure and integrate encryption, security services, and access protocols as needed.</p>
              </div>
              {/* Service Card 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Data Backup and Recovery Services</h4>
                <p className="text-gray-700">We implement a robust backup/recovery strategy for cloud, on-site, and hybrid servers, ensuring the integrity of your data and business continuity.</p>
              </div>
              {/* Service Card 7 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Software Deployment Services</h4>
                <p className="text-gray-700">Our specialists work with your IT team to set detailed goals for software deployment, including configuration, testing, and troubleshooting.</p>
              </div>
              {/* Service Card 8 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Infrastructure Support Services</h4>
                <p className="text-gray-700">We provide integrated IT infrastructure, including helpdesk management, network management, and system administration services.</p>
              </div>
              {/* Service Card 9 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Software Migration Services</h4>
                <p className="text-gray-700">We execute cloud-based migrations and system updates while prioritizing system availability and data integrity.</p>
              </div>
              {/* Service Card 10 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">System Integration Services</h4>
                <p className="text-gray-700">We ensure your different systems work together in a way that is specific to your workflow and business needs.</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Software Research and Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Analysis and Planning:</strong> We meet to determine requirements, define the software design, and choose the programming language.</li>
              <li><strong>Requirements:</strong> We analyze the project's technical needs, including what problem it solves, security measures, and data input/output.</li>
              <li><strong>Designing and Prototyping:</strong> We create a wireframe or full-fledged prototype to test with users and gather feedback.</li>
              <li><strong>Software Development & Implementation:</strong> Our programmers write the code, making sure to detect and correct errors to stay on schedule.</li>
              <li><strong>Testing:</strong> The test team uses various test cases to debug the software and ensure optimal functionality.</li>
              <li><strong>Deployment:</strong> We work to get your code into production, ensuring a flawless launch.</li>
              <li><strong>Operation and Maintenance:</strong> We perform regular maintenance to ensure the program runs smoothly and provide ongoing support.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Services:</strong> Our rates are at industry standards, eliminating your extra administrative expenses.</li>
              <li><strong>Qualified Team:</strong> We have a team of over 100 qualified experts to meet your specific business needs.</li>
              <li><strong>Reliable Partner:</strong> We have a proven track record of successfully delivering projects for clients across the globe.</li>
              <li><strong>ISO Certification:</strong> We are ISO 9001:2015 and ISO/IEC 27001:2022 certified, demonstrating our commitment to quality and security.</li>
              <li><strong>Increased Flexibility:</strong> You can hire our team on a temporary or long-term basis to meet your fluctuating development requirements.</li>
              <li><strong>Access to New Technology:</strong> We stay on top of all the latest technologies to ensure your project doesn't fall behind.</li>
              <li><strong>Improved Productivity:</strong> By outsourcing one-time projects to us, your in-house team can focus on core needs.</li>
              <li><strong>Transparency:</strong> We offer complete transparency with regular updates on your project and fees.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your Software R&D?
            </h3>
            <p className="text-gray-700 mb-6">
              Outsourcing software research and development services to Nimble Acuity can help you access expert teams with specific technological capabilities. We can speed up your software development process, reduce time to market, and deliver high-quality software from the ground up.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable, expert, and trustworthy partner, contact us for a free consultation.
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

export default SoftwareRndServices;