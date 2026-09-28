import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ITStaffingForLAMP: React.FC = () => {
  return (
    <>
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              IT Staffing for LAMP Developers
            </h1>
            <p className="text-lg text-gray-600">
              LAMP (Linux, Apache, MySQL, and PHP) form the cornerstones of the Free and Open Source Software architecture.
            </p>
          </div>

          <hr className="my-16" />

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              This software bundle can be locally developed, is easy to code and deploy, and can be cheaply hosted on almost any hosting service. If you are looking for staff augmentation solutions for projects involving the LAMP bundle, look no further than **Nimble Acuity**, the pioneers in LAMP development services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide staffing solutions for LAMP professionals who are qualified and have extensive knowledge in the domains that constitute LAMP. They have expertise in working for international projects, which require a skill set that integrates these different elements. Importantly, our LAMP experts have excellent communication skills, project management know-how, and soft skills, which are critical for working in tight schedules and stringent quality standards, while reporting to customers across the world.
            </p>
          </div>

          <hr className="my-16" />

          {/* IT Staffing for LAMP */}
          <div className="max-w-6xl mb-16">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              IT Staffing for LAMP
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a part of outsourcing IT Staffing for Linux, Apache, MySQL, and PHP, we allow our clients to hire FTE LAMP Specialists, who are proficient in the following areas:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>
                <strong>Linux:</strong> We provide IT staffing for Linux developers with expertise in operating systems based on the Linux kernel that can customize any Distro and interface environment.
              </li>
              <li>
                <strong>Apache HTTP Server:</strong> The most popular web server, our dedicated IT professionals are trained and experienced in Apache and can extend their core functionality.
              </li>
              <li>
                <strong>MySQL:</strong> This is another area where our LAMP executives can provide a high level of expertise. If you need to install, modify, and maintain a full-featured RDBMS in a free-software environment, MySQL is your most likely choice.
              </li>
              <li>
                <strong>PHP / Python / Perl:</strong> Scripting in a Reflective Programming Language such as PHP, Python, or Perl is vital to the development of dynamic web pages. Get IT staffing services for LAMP developers from us with substantial skills in the domain.
              </li>
            </ul>
          </div>

          <hr className="my-16" />

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose Nimble Acuity for LAMP Staffing Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** offers IT Outsourcing Solutions (Full-Time Equivalents /FTEs) for all your programming requirements related to LAMP applications. Whether your needs involve working with the Linux Operating System, Apache HTTP Server, MySQL Database Software, or PHP/Python/Perl Scripting Language, you will find substantial benefits in using the services of our LAMP professionals available on a full-time equivalent basis.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us for IT Staffing Solutions in the LAMP domain.
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

export default ITStaffingForLAMP;