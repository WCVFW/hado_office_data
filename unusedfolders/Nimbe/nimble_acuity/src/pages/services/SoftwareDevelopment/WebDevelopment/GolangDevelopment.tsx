import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const GolangDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Golang Web Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Our expert developers use the powerful Golang framework to build high-quality, robust, and scalable websites and web applications for your business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we believe in leveraging the best tools to drive your business forward. That's why we use **Golang**, a powerful open-source framework known for its seamless cloud connectivity, garbage collection, and scalability. Our team of professionals knows how to harness Golang's immense potential to build agile, light, and robust web projects that truly engage your customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With decades of experience in the industry, we practice the latest Golang web programming strategies to create high-performing sites that give your business a competitive edge.
            </p>
          </div>

          {/* Our Golang Web Development Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Golang Web Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Golang App Development</h4>
                <p>We harness the power of Golang to build apps that are light, fast, and fully functional across all platforms and devices, ensuring a strong presence in competitive markets.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Scalable App Development</h4>
                <p>We build applications with scalability as a key feature, allowing your site or web app to evolve and handle future needs as your business grows.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Custom Golang Programming</h4>
                <p>Our experts take a custom approach to your unique requirements, implementing bespoke solutions rather than a one-size-fits-all approach.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Hire Golang Developers</h4>
                <p>You can hire our highly experienced Golang developers to work as a remote extension of your team, ensuring projects are delivered with speed and quality while aligning with your company's philosophy.</p>
              </div>
            </div>
          </div>

          {/* Golang Development Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Golang Development Process
            </h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">01.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Strategy & Proposal</h4>
                  <p>We begin by interacting with you to understand your specific business needs and requirements for a custom solution.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">02.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Design & Approval</h4>
                  <p>We develop a strategic plan for cost-effective development and share our concepts with you for your feedback and approval before proceeding.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">03.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Development & Integration</h4>
                  <p>Once approved, our project team carries out the development, using the necessary technology to build and integrate the solution.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">04.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Quality Check & Go-Live</h4>
                  <p>We rigorously test the implementation for any flaws or bugs. After passing all checks, we provide full support to deploy your website or web app.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">05.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Support & Maintenance</h4>
                  <p>Post-deployment, we provide ongoing support and maintenance to ensure your website or app remains secure and performs optimally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Pricing:</strong> Our services are highly customizable to meet your specific requirements, helping you control costs while getting a superior product.</li>
              <li><strong>High-Quality Services:</strong> We rigorously test every implementation to ensure it is 100% in tune with our quality standards and your SLA.</li>
              <li><strong>Seamless Integration:</strong> We can integrate our solutions into your existing framework without disrupting data or workflow.</li>
              <li><strong>Rapid Turnaround Time:</strong> We are committed to a quick implementation process, delivering projects on time or ahead of schedule.</li>
              <li><strong>ISO Certified:</strong> As an ISO 9001:2015 accredited company, we consistently ensure quality, timeliness, and security in every project.</li>
              <li><strong>100% Data Security:</strong> Your data is protected by our robust security system, safeguarding it from unauthorized access and risks.</li>
              <li><strong>24/7 Support:</strong> We provide round-the-clock support via phone, email, and webchat to clients in nearly all global regions.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build with Golang?
            </h3>
            <p className="text-gray-700 mb-6">
              At Nimble Acuity, superb infrastructure, cutting-edge technologies, and experienced professionals come together to deliver powerful Golang solutions. We build custom apps and websites with a 100% reliability guarantee.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default GolangDevelopment;