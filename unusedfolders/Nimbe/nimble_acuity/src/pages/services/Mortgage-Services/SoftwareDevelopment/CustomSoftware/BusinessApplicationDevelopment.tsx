import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const BusinessApplicationDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Business Application Development
            </h2>
            <p className="text-lg text-gray-600">
              We provide a complete business application development life cycle for small to complex business applications, ensuring superior quality and lower costs.
            </p>
          </div>

          {/* Intro & Lifecycle */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              As a renowned business app development services provider, Nimble Acuity has been developing small to complex business applications for global companies spanning different industries. Our transparent development processes, technical expertise, and global delivery ensure superior quality apps at competitive costs. We have extensive experience in software application development and provide solutions for the complete development lifecycle including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Requirement Analysis</li>
              <li>Conceptualization</li>
              <li>Planning</li>
              <li>App Design</li>
              <li>Business Application Development and coding</li>
              <li>Application Implementation and Deployment</li>
              <li>Software Testing</li>
              <li>Quality Assurance</li>
              <li>Change Management</li>
              <li>Security Management</li>
              <li>User Acceptance Testing</li>
              <li>Release Management</li>
              <li>Maintenance and Support</li>
            </ul>
          </div>
          
          {/* Development Competencies */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Business Application Development Competencies
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether it is small business application development or catering to the needs of big businesses, Nimble Acuity has the talent and resources to meet demands of any nature. Over the years, we have developed different types of business applications including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Content and Document Management Software</li>
              <li>Supply Chain Management Software</li>
              <li>Accounting Software</li>
              <li>Customer Relationship Management Software</li>
              <li>Project Management Software</li>
              <li>Inventory Software</li>
              <li>e-Learning Software</li>
              <li>Retail Management Systems</li>
              <li>Management Information Systems, and more</li>
            </ul>
          </div>

          {/* Popular Solutions */}
          <div className="max-w-6xl mb-16 space-y-12">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Popular Business Application Solutions
            </h3>
            
            {/* Solution 1: Content and Document Management */}
            <div>
              <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Content and Document Management</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                A lot of data and information is generated in an enterprise daily that needs to be managed well. As businesses grow, so do their needs to manage new and legacy documents, online content, sharing, and communication. We make your business data easy-to-access, accurate, and scalable through our applications, ensuring information is stored centrally at a secure virtual and physical location. We offer solutions for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Web Content Management</li>
                <li>Enterprise Knowledge Management</li>
                <li>Document Management</li>
              </ul>
            </div>

            {/* Solution 2: Customer Relationship Management (CRM) */}
            <div>
              <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Customer Relationship Management (CRM)</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our CRM solutions integrate customer, market, and sales information to strengthen relationships with end-customers. We design applications for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Lead Tracking</li>
                <li>Contacts Management</li>
                <li>Marketing Campaigns Planning</li>
                <li>Sales Process Management and more</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our solutions allow your organization to maintain customer data centrally and access information from any area of activity. We create an optimum solution that makes customer management easy and efficient.
              </p>
            </div>

            {/* Solution 3: Supply Chain Management (SCM) */}
            <div>
              <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Supply Chain Management (SCM)</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Supply Chain Management applications take care of the entire supply process, helping you manage events as efficiently as possible. To optimize the flow of material and information and bring greater value, our solutions include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Procurement</li>
                <li>Product Flow and Delivery</li>
                <li>Warehouse Management</li>
                <li>Collaboration with Suppliers and Partners</li>
                <li>Distribution</li>
              </ul>
            </div>

            {/* Solution 4: Interactive Learning */}
            <div>
              <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Interactive Learning</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Persistent learning and training have become an integral part of organizations. We have expertise in designing powerful learning applications for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Courseware Management</li>
                <li>Test-ware Management</li>
                <li>Information Systems</li>
                <li>Interactive Learning, and more</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We leverage our experience to develop resilient interactive learning solutions that add value to the entire system by streamlining the learning process.
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Build Innovative Business Apps
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is an established business application development company offering world-class applications that are in tune with the latest technological advancements. We focus on building long-standing relationships with our clients and view ourselves as a strategic extension of their capacities. This results in enhanced productivity and profitability while reducing risks.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact Nimble Acuity’s business application development experts and increase your business ROI.
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

export default BusinessApplicationDevelopment;