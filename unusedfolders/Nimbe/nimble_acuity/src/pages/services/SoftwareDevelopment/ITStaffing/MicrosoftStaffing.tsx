import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MicrosoftStaffing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              IT Staffing for Microsoft SQL and ASP.NET
            </h2>
            <p className="text-lg text-gray-600">
              At **Nimble Acuity**, we provide IT staffing services on a full-time (FTE) and part-time basis for a wide range of Microsoft platforms, including ASP.NET, Microsoft SQL, and Microsoft Dynamics.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our IT outsourcing solutions help companies get IT staffing for .NET and MS SQL developers at affordable rates in no time, without any administrative overheads. As Microsoft applications continue to hold a substantial market share worldwide, we provide expert IT staff augmentation services for ASP.NET, MS SQL programmers, and other Microsoft application developers.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Microsoft Application Expertise
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our IT professionals are proficient in a wide range of Microsoft technologies to meet your specific needs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>ASP.NET:</strong> Our .NET developers have the expertise to develop web applications using an event-driven GUI model. They can build customized controls and master pages for template-based development, helping you create dynamic websites and web-based services.
              </li>
              <li>
                <strong>Microsoft SQL:</strong> If you have a project that uses MS SQL as the back-end, our well-qualified and experienced SQL programmers are fully conversant in all necessary tools, such as SQLCMD, Business Intelligence, Server Management, and Visual Studios. You can count on them for quality and timely output.
              </li>
              <li>
                <strong>Microsoft Dynamics:</strong> Our dedicated team of software professionals and Microsoft application developers can customize all your project requirements for Microsoft Dynamics products (AX, GP, NAV, SL, RMS, and POS 2009 for Retail). Our experts can also work on Microsoft Dynamics CRM, including the online version.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The professional community at **Nimble Acuity** includes a large number of qualified software engineers with extensive experience in Microsoft-based software development projects. When you partner with us, you get:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Outstanding Competence:</strong> Our developers bring a high level of expertise and motivation to your operations.</li>
              <li><strong>Reduced Administrative Burden:</strong> We take care of all human resources, payroll, and administrative responsibilities for the staff you hire.</li>
              <li><strong>Cost-Effective Solutions:</strong> Get access to highly skilled professionals at affordable rates.</li>
              <li><strong>Timely and Quality Output:</strong> Our experts are dedicated to delivering precise and high-quality results for your projects.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Staff Your Microsoft Projects?
            </h3>
            <p className="text-gray-700 mb-6">
              Our experienced team is ready to provide you with the professional resources you need to get your Microsoft-based software development projects off the ground.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to outsource IT staffing services for Microsoft applications and start your project with confidence.
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

export default MicrosoftStaffing;