import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const OffshoreSoftwareDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Offshore Software Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Optimize resource allocation, adapt to evolving needs, and scale effortlessly with our offshore software development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Staying relevant in the rapidly evolving digital landscape requires continuous maintenance of up-to-date technology, which can be both time-consuming and resource-intensive. The unyielding constraints of project deadlines and the growing demand for skilled developers present formidable challenges.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity provides tailored offshore software development solutions that address these pressing concerns. We offer a comprehensive suite of services to augment your development capabilities and optimize your software solutions for the best possible result. Our dedicated offshore teams specialize in various technologies and domains, ensuring your projects are executed with precision and expertise.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Offshore Software Solutions We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">ServiceNow Services</h4>
                <p className="text-gray-700">We harness ServiceNow's power to streamline workflows, improve customer service, and boost productivity with customized solutions tailored to your unique needs.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Microsoft Consulting Services</h4>
                <p className="text-gray-700">We analyze your requirements and tailor Microsoft tools to maximize efficiency, collaboration, and growth, leveraging deep expertise in Microsoft technologies.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Custom Software Development</h4>
                <p className="text-gray-700">We craft custom software solutions using advanced programming languages and contemporary architectural patterns, ensuring seamless integration and scalability.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mobile App Development</h4>
                <p className="text-gray-700">Our team excels in creating user-friendly, high-performance mobile apps with a focus on responsive design, guiding you from concept to launch.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Web Development Services</h4>
                <p className="text-gray-700">We use the latest web technologies to create a robust, visually appealing, and user-friendly website tailored to your brand, optimized for speed, security, and SEO.</p>
              </div>
              {/* Service Card 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Application Development</h4>
                <p className="text-gray-700">We use agile practices and containerization tools like Docker and Kubernetes to provide expedited release cycles, flexible scaling, and smooth system connectivity.</p>
              </div>
              {/* Service Card 7 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Ecommerce Development</h4>
                <p className="text-gray-700">Our offerings harness the latest innovations like headless commerce to empower seamless sales across various channels and enhance your digital retail footprint.</p>
              </div>
              {/* Service Card 8 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Cloud Consulting Services</h4>
                <p className="text-gray-700">We provide expert guidance on cloud technologies and migration, ensuring a smooth transition to cloud-based solutions and helping you harness their full potential.</p>
              </div>
              {/* Service Card 9 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">IT Staff Augmentation Services</h4>
                <p className="text-gray-700">We provide on-demand access to a vast talent pool of certified IT professionals, allowing you to scale your teams nimbly in response to project demands.</p>
              </div>
              {/* Service Card 10 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">IT Infrastructure Services</h4>
                <p className="text-gray-700">Trust us to optimize your infrastructure for peak performance and efficiency with 24/7 monitoring, proactive maintenance, and rapid issue resolution.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Unparalleled Data Security:</strong> We prioritize 100% data security and confidentiality, ensuring your sensitive information is never shared with third parties.</li>
              <li><strong>Expertise of Certified Professionals:</strong> Our team is a diverse group of handpicked experts with in-depth knowledge and talent from across the globe.</li>
              <li><strong>Lightning-Fast Turnaround Time:</strong> With a presence in 10+ global delivery centers, we excel at delivering services with unparalleled speed.</li>
              <li><strong>World-Class Infrastructure:</strong> Our superior infrastructure allows our experts to craft detailed test cases and ensure the highest quality of service.</li>
              <li><strong>Round-the-Clock Support:</strong> Our dedicated staff provides 24/7 support to help you overcome challenges promptly via phone, email, or web chat.</li>
              <li><strong>Scalable Solutions:</strong> Our solutions are highly scalable and can adapt to your changing business needs seamlessly, so we can grow with you.</li>
              <li><strong>Cost-Effective Solutions:</strong> We offer customized solutions that meet your budget while exceeding your expectations with world-class service.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Unlock Your Digital Potential?
            </h3>
            <p className="text-gray-700 mb-6">
              Finding and retaining top-tier talent can be an uphill battle, but our offshore software development services are here to redefine the journey. With a proven track record of proficiency, we provide solutions that empower your organization with a distinct competitive edge, budget optimization, and streamlined project execution.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We are not just delivering software; we are reshaping the way businesses operate, innovate, and interact with their customers in the digital age. Partner with us to unlock the full potential of your digital endeavors.
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

export default OffshoreSoftwareDevelopment;