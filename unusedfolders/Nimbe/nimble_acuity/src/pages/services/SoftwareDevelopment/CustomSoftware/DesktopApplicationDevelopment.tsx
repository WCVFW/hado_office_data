import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DesktopApplicationDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Desktop Application Development Services
            </h2>
            <p className="text-lg text-gray-600">
              In this age of mobile and web apps, desktop applications still offer unmatched convenience, security, and stability.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we are passionate about desktop application development that makes a meaningful difference in our clients' daily business lives. We offer a wide range of services—from re-development and re-platforming to creating new software from the ground up and integrating cloud backends.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From design to implementation, we ensure your desired objectives are met by taking an **Agile Development Approach (SCRUM)** for faster development and on-time delivery. We excel at blending the latest features within a simple, easy-to-understand UI, which is essential for software being used in critical fields like healthcare.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Desktop Application Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              With experienced resources and expertise in multiple development technologies, we create software using C#, Visual Basic, ASP.NET, VB.NET, JAVA, Adobe Air, and more. Our software is characterized by its ease of maintenance and a lifelong update policy that ensures feature compatibility across OS versions.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Cross-platform Application Development:</strong> We develop high-quality desktop apps that run seamlessly on Mac, Windows, and Linux using a single codebase for better interoperability. Technologies we use include ElectronJS, JavaFX, and React Native Desktop.
              </li>
              <li>
                <strong>Patient Engagement Platform Development:</strong> We design and develop engaging wellness and health applications that help users move towards positive lifestyle changes by gaining a deep understanding of clinic workflows and patient interactions.
              </li>
              <li>
                <strong>Interoperable Application Development:</strong> We develop software that integrates with existing systems like PACS and EMRs via uni-directional or bi-directional connections. Our solutions can also parse DICOM files or connect through FHIR APIs, and we have expertise in medical standards such as HL7, CCD, and DICOM.
              </li>
              <li>
                <strong>Custom Software Development:</strong> We can develop software at any stage of a project, including add-ins and platform-specific versions of existing software. We also offer desktop application testing.
              </li>
              <li>
                <strong>Desktop Application Development Consulting:</strong> Our experienced software consultants focus on the key aspects of desktop development—technology, user, and regulatory requirements—to help you choose the right framework and leverage big data.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Desktop Application Development Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our process is defined by our expert team of developers who have extensive experience working with global clients.
            </p>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Understanding Your Requirement:</strong> We analyze the feasibility of your project and suggest enhancements based on our capabilities and experience to create a final project outline.
              </li>
              <li>
                <strong>Software Design:</strong> Our senior developers design the software architecture and finalize the process roadmap based on your inputs.
              </li>
              <li>
                <strong>Building the Team:</strong> We assign an experienced team and a dedicated project manager to handle your questions.
              </li>
              <li>
                <strong>QA and Testing:</strong> The project goes through several rounds of QA and testing to ensure it works correctly and can undertake all necessary functions easily.
              </li>
              <li>
                <strong>Project Delivery:</strong> The completed application is delivered to you with all required documentation and source code. We also begin the maintenance and update period based on our agreement.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We pride ourselves on helping our clients enhance their business performance and productivity. By choosing us for your desktop application development, you can immediately start reaping the benefits of simple and streamlined processes.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                We use proven quality processes and development methodologies.
              </li>
              <li>
                Our flexible pricing options ensure your project stays within budget.
              </li>
              <li>
                Our multi-domain experts work with the latest state-of-the-art technologies.
              </li>
              <li>
                We deliver a high-quality final product that is compatible with strict regulatory requirements like HIPAA and ISO.
              </li>
              <li>
                We ensure 100% confidentiality and offer rapid scalability and flexibility to meet deadlines.
              </li>
              <li>
                We provide 24/7 availability for long-term product support and maintenance.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Custom Desktop App?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in developing high-quality desktop applications and a series of other software development services. We are committed to ensuring 100% compliance while building flexible, cloud-ready software.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To know more about how we can help you achieve better business performance, contact us right away!
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesktopApplicationDevelopment;