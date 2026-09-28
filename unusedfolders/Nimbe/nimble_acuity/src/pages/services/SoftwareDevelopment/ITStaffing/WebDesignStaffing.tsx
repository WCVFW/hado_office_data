import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WebDesignStaffing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              IT Staffing for Web Design
            </h2>
            <p className="text-lg text-gray-600">
              Hire talented web designers proficient in Adobe Flex, Flash, Fireworks, Photoshop, and more to create stunning web and print graphics.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** provides IT staffing for web and print graphics, offering a team of web designers proficient in a wide range of Adobe products. Our professionals are available on a Full Time Equivalent (FTE), part-time, or contract basis.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our professionals are well-versed in the following technologies:
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Web Design and Staffing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Adobe Flex:</strong> Our staff augmentation services help you hire Adobe-certified experts with substantial experience in using Adobe Flex to develop and deploy rich web applications across multiple platforms. They are well-versed in creating traditional, desktop, and mobile applications for iOS, Android, and BlackBerry.
              </li>
              <li>
                <strong>Adobe Flash:</strong> If your web design requirements include animation, games, streaming media, and other rich internet applications, our graphic designers are well-equipped to meet them. Our professionals have the expertise to develop outstanding websites and online applications using this popular multi-media platform.
              </li>
              <li>
                <strong>Adobe Dreamweaver:</strong> We have a certified team well-versed in Adobe Dreamweaver, allowing them to create applications that focus on the creative aspects rather than complex coding. They can craft applications that are best suited to convey your message to the target audience.
              </li>
              <li>
                <strong>Brochure Designing:</strong> Our expertise extends beyond online projects to print media. We have the capability and tools to provide high-quality graphic design, brochure creation, and print design services. We have provided staff augmentation for print designing to several customers worldwide.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Advantages of IT Staffing Services from Nimble Acuity
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our IT staffing services for web and graphics design provide you with the advantage of a full-time resource without the hassle of payroll or infrastructural setup. When you hire from us, you get the following benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Qualified and Experienced Professionals</strong></li>
              <li><strong>Simple Hiring Process (FTE, part-time, or contract)</strong></li>
              <li><strong>Dedicated professionals at one-third the cost of permanent employees</strong></li>
              <li><strong>Complete Control Over the Resource and Your Project</strong></li>
              <li><strong>Non-Disclosure Agreement for Data Security</strong></li>
              <li><strong>No Administrative or HR Related Hassles</strong></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Web Design Staff?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a premier outsourcing company with over 26 years of experience, providing a wide spectrum of IT-related services. We have a huge pool of professionals, including web designers, SEO/SEM/SMO experts, programmers, and testers, all with substantial experience working on client projects.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Try our IT Staff Augmentation services today to outsource your web design or any other IT requirement, and save time and cost.
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

export default WebDesignStaffing;