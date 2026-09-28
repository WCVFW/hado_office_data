import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const HireMaximoDevelopers: React.FC = () => {
  return (
    <>
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Maximo Developers
            </h1>
            <p className="text-lg text-gray-600">
              Hire Maximo developers from Nimble Acuity to support and transform your organization's asset management journey.
            </p>
          </div>

          <hr className="my-16" />

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Want to quickly spin up your development team and collaborate with exceptional, highly-experienced developers who support all the phases of your product/software development lifecycle? Are you tired of spending your precious work hours looking for skilled and experienced developers who can support your organization's goals and objectives?
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hire Maximo developers from **Nimble Acuity** to instantly access highly experienced and certified tech pros who help you navigate your digital transformation journey successfully. With thorough knowledge and understanding of the latest technologies and trends, our developers help you conceptualize clear, quality codes to develop the best software. We help you achieve your business objectives quickly, easily, and effectively.
            </p>
          </div>

          <hr className="my-16" />

          {/* Maximo Developers Hiring Solutions */}
          <div className="max-w-6xl mb-16">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Maximo Developers Hiring Solutions We Offer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a leading Maximo Development Company with a global footprint. We are powered by a highly experienced and diversified pool of skilled developers who have rich experience in delivering asset management services to our global clients. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>
                <strong>Enterprise Asset Management (EAM) Consulting:</strong> Our IBM Maximo developers provide functional and technical consultancy regarding Maximo implementation, development, and upgradation.
              </li>
              <li>
                <strong>Maximo Implementation and Testing:</strong> Our developers help you implement IBM Maximo's fully integrated platform across your organization and design software that precisely meets your project needs.
              </li>
              <li>
                <strong>Maximo Upgrades and Patches:</strong> Be it determining the best Maximo upgrade path or implementing a Maximo upgrade to eliminate risks, our certified professionals help your organization migrate to the desired version.
              </li>
              <li>
                <strong>Data Management and Cloud Migration:</strong> Our developers are data management experts with in-depth product knowledge and experience.
              </li>
              <li>
                <strong>Maximo Application Development and Maintenance:</strong> When you outsource Maximo developers hiring needs to us, our offsite Maximo Java development teams develop and maintain custom applications.
              </li>
            </ul>
          </div>

          <hr className="my-16" />

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit from
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Custom Software Development</li>
              <li>Enterprise Solutions</li>
              <li>ServiceNow Services</li>
              <li>Infrastructure Management Services</li>
            </ul>
          </div>

          <hr className="my-16" />

          {/* Why Nimble Acuity is the Preferred Provider */}
          <div className="max-w-6xl mb-16">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why is Nimble Acuity the Preferred Provider of Maximo Staffing Services?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are many benefits of outsourcing Maximo developers hiring to us. Our IT staffing for Maximo developers assures:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Prices and Hiring Plans:</strong> We offer our services at extremely cost-effective rates.</li>
              <li><strong>Access to Certified Experts:</strong> You get access to the best and the most talented developers in the market.</li>
              <li><strong>Excellent Infrastructure:</strong> Choosing to work with us, gives you access to our world-class infrastructure.</li>
              <li><strong>Best-in-class Technologies:</strong> Our developers use cutting-edge tools and technologies to develop software.</li>
              <li><strong>Quick Turnaround Time:</strong> Our global workforce across multiple delivery centers ensures you hire the best resources within a short turnaround time.</li>
              <li><strong>100% Data Safety:</strong> We follow international data protection norms and stringent protocols to safeguard your business data.</li>
              <li><strong>24/7 Support:</strong> Our service executives are available round the clock to provide you with instant help and assistance.</li>
            </ul>
          </div>

          <hr className="my-16" />

          {/* Get the Hiring Support You Need */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get the Hiring Support You Need with Our Maximo Staffing Services
            </h3>
            <p className="text-gray-700 mb-6">
              Hire Maximo developers from us and get the skills you need for your next job. Being a leading Maximo development services company, we help you onboard the best Maximo specialists, build a trusted, long-lasting relationship, and achieve more together. When you choose us, we:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Understand your needs and business requirements</li>
              <li>Define hiring criteria</li>
              <li>Shortlist eligible candidates</li>
              <li>Help you through the interview process</li>
              <li>Implement and manage the signing of SLAs</li>
            </ul>
            <p className="text-gray-700 mb-8 font-medium">
              Connect with us now to evaluate your Maximo staffing requirements and hire savvy, tech pros who help you grow your business.
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

export default HireMaximoDevelopers;