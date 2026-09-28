import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const NearshoreSoftwareDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nearshore Software Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to specialized nearshore software development services provided by seasoned software engineers at competitive prices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity has extensive experience in providing IT talent and cost-effective solutions from nearshore delivery centers. Our proximity assists clients in developing incremental and flexible solutions faster than traditional offshore models, while still matching their price advantage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As an experienced nearshore software development company, we draw the best global talent to assist our clients in focusing on their core competencies. We work as an extended team, supporting your in-house staff at an equal pace and scaling to improve service quality.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Nearshore Software Development Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mobile App Development Services</h4>
                <p className="text-gray-700">We develop high-performance B2B and B2C apps from scratch, covering everything from iOS to Android and cross-platform solutions like Xamarin.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Custom Software Development</h4>
                <p className="text-gray-700">We specialize in providing all-around custom software development, from website design to application re-engineering and modernization services.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Software Maintenance</h4>
                <p className="text-gray-700">Our end-to-end software maintenance services include ongoing support, perfective upgrades, and real-time assistance to avoid downtime.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Infrastructure Management Services</h4>
                <p className="text-gray-700">We help you adapt to fast-changing business needs by providing the right technology infrastructure, from cloud computing to network management.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Web Analytics Services</h4>
                <p className="text-gray-700">We offer top-notch web analytics services to track visitors, categorize leads, and provide actionable insights for increased conversions.</p>
              </div>
              {/* Service Card 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Software Testing Services</h4>
                <p className="text-gray-700">Our testing professionals specialize in manual, automated, and defect-tracking technologies to ensure your software is 100% bug-free.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nearshore */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for Nearshore Development?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Planned Development Process:</strong> We use a disciplined, mature approach to deliver value that offsets low-cost offshore models.</li>
              <li><strong>Best for Long-Term Partnerships:</strong> Our shared time zones allow for greater efficiency and long-term, productive engagements.</li>
              <li><strong>Easily Measurable Results:</strong> We focus on measurable output and strong collaboration, making it easy to track progress and success.</li>
              <li><strong>Favors Agile Development Model:</strong> Our proximity and communication advantage make us ideal for Agile development, unlike traditional offshore models.</li>
              <li><strong>Improved Communication:</strong> Proximity ensures better collaboration and fewer face-to-face meeting expenses.</li>
              <li><strong>Quality and Productivity:</strong> Our teams work in the same time zone as you, allowing for quick calls, faster bug fixes, and a shorter time-to-market.</li>
              <li><strong>IP Security:</strong> We operate under strong IP protection requirements, providing peace of mind for your proprietary ideas.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Nearshore Software Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Software Proposal and Strategy:</strong> We discuss your business objectives and prepare a detailed Systems Requirements Specification document.</li>
              <li><strong>Prototyping and Wireframe Creation:</strong> We create a design layout and a prototype to ensure optimal performance and functionality.</li>
              <li><strong>Software Development:</strong> Our dedicated team converts the wireframe into code, providing clients with access to every stage of the development process.</li>
              <li><strong>Software Testing:</strong> We use a combination of manual and automated testing to ensure the software is 100% bug-free and meets all requirements.</li>
              <li><strong>Software Delivery and Support:</strong> We assist with implementation and integration, offering a pilot program, installation, onboarding, and post-launch support.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Looking to Extend Your In-House Team?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a reliable nearshore services company that combines quality talent with streamlined processes and advanced technology to match the capabilities of your in-house team. We help expedite the delivery of cutting-edge solutions for your business.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking to extend and unify your in-house team with nearshore software development services, get in touch with our experts now.
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

export default NearshoreSoftwareDevelopment;