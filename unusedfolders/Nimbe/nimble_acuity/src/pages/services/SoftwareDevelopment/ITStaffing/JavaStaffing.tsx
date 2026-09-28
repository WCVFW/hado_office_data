import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const JavaStaffing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              IT Staffing for Java Developers
            </h2>
            <p className="text-lg text-gray-600">
              If you are looking for full-time programmers or FTEs who can code almost anything in Java, **Nimble Acuity** is your premier partner. We offer specialized IT staffing services for Java / JEE / Hibernate / Struts / Spring application development.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Nimble Acuity Advantage: Highly Experienced Team of Java Developers
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we have a team of professional Java developers with extensive experience in Java development, programming for various frameworks, and advanced Java environments. Their expertise across diverse application platforms ensures your project requirements are not just met, but exceeded.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our Java application developers can be hired for full-time or part-time, short-term or long-term assignments, on a contract-to-hire basis, or as specialty staff. We offer multiple flexible hiring options to perfectly match your project's needs.
            </p>
          </div>

          {/* Specializations */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Specialization in IT Staffing of Java Developers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can hire or outsource Java experts for your specific project needs in the following areas:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Java Enterprise Edition (Java EE/JEE):</strong> Our JEE professionals are ready to tackle any project using this internationally renowned, fault-tolerant platform for multi-tier, distributed applications.
              </li>
              <li>
                <strong>Hibernate:</strong> If you're looking for a Java Hibernate professional for powerful object-relational mapping, our IT staffing services can provide a perfect fit.
              </li>
              <li>
                <strong>Struts:</strong> We can meet your requirements at short notice for Java Struts professionals, who excel at developing Java EE web applications using this open-source framework.
              </li>
              <li>
                <strong>Spring Framework:</strong> This is another area of our expertise. Hiring a professional from **Nimble Acuity** for the Java Spring Framework allows you to complete projects cost-effectively.
              </li>
            </ul>
          </div>

          {/* Outsource to Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Outsource IT Staffing/Augmentation to Nimble Acuity
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Java has been a popular programming language for many years due to its robustness, security, and portability. **Nimble Acuity** has a large pool of Java professionals who can help you meet all your Java-related needs. Our IT experts can function as a regular, part-time, or contractual employee in your team while remaining on our payroll.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outsourcing IT staffing to **Nimble Acuity** relieves you from the administrative and infrastructural burdens, allowing you to focus on day-to-day results. Additionally, we maintain complete confidentiality and security of your project, and you can stay in touch with your virtual team whenever you want for better coordination.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Staff Your Next Java Project?
            </h3>
            <p className="text-gray-700 mb-6">
              Our flexible and cost-effective IT staffing services can provide you with the perfect Java professionals to help you succeed.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to find the ideal Java developer for your team.
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

export default JavaStaffing;