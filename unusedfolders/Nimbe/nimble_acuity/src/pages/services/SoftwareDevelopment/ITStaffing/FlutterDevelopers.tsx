import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const FlutterDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Flutter Developers
            </h2>
            <p className="text-lg text-gray-600">
              Hire pre-vetted, dedicated Flutter developers who work on flexible engagement models to build powerful applications.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              As the popularity of the Flutter framework skyrockets, so does the demand for skilled developers. Screening, shortlisting, and onboarding proficient Flutter developers can be exhausting. Professional IT staffing service providers like **Nimble Acuity** help you find the right fit for your Flutter projects without the grind.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are an experienced firm providing global clients instant access to Flutter developers who work remotely from global workspaces. Our developers use a tech stack of advanced tools and software. We thrive with complex hiring needs and help you lockstep in the digital landscape with a process that goes beyond traditional resumes.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              IT Staffing Solutions for Flutter Projects
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you need resources to begin projects from scratch or to support ongoing projects, we have you covered. We help clients with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Flutter Game Developers:</strong> Build responsive, multi-player game apps that create an immersive experience.
              </li>
              <li>
                <strong>Mobile App Developers:</strong> Develop intuitive mobile apps suitable for multiple operating systems.
              </li>
              <li>
                <strong>Flutter Web Developers:</strong> Build powerful web applications that enable native mobile app-like experiences.
              </li>
              <li>
                <strong>Flutter Developers for IoT Apps:</strong> Create well-optimized and scalable apps for IoT devices.
              </li>
              <li>
                <strong>Flutter Developers for UI/UX Strategy:</strong> Build innovative apps with exceptional UI/UX capabilities for mobile, desktop, and embedded systems.
              </li>
              <li>
                <strong>Desktop App Developers:</strong> Get the necessary support for your desktop devices to scale across macOS, Windows, and Linux without rewriting the codebase.
              </li>
              <li>
                <strong>Widget Customization:</strong> Accelerate your UI development and improve user experience with widget customization.
              </li>
              <li>
                <strong>App Migration:</strong> Migrate your Android and native iOS applications to the Flutter ecosystem to forgo maintenance costs.
              </li>
              <li>
                <strong>App Support & Maintenance:</strong> Get app support and maintenance for applications built across multiple platforms using a single codebase.
              </li>
              <li>
                <strong>Cross-platform Developers:</strong> Build desktop, embedded, and mobile applications using a single codebase.
              </li>
              <li>
                <strong>Flutter e-commerce developer:</strong> Build highly functional e-commerce apps that ensure a better user experience.
              </li>
              <li>
                <strong>Flutter for Embedded Devices:</strong> Build applications for low-powered hardware devices such as thermostats and smart displays.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For over 26 years, we've helped global organizations hire top IT talent. Here are some of the reasons that set us apart:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Quality Hiring Process:</strong> We evaluate code quality, delivery timelines, and communication from previous engagements.</li>
              <li><strong>Project Confidentiality and Security:</strong> We sign NDAs and MoUs to ensure all your project data remains safe and secure as an ISO-certified company.</li>
              <li><strong>Swift Hiring and Project Delivery:</strong> Our multi-step approach accelerates the hiring process and helps you hire senior developers who work according to your time zones and deadlines.</li>
              <li><strong>Post-implementation Support:</strong> We offer post-implementation support, including bug fixes, continuous monitoring, and framework upgrades.</li>
              <li><strong>Flexible Hiring Model:</strong> We provide multiple engagement options, so you can hire a single developer or a full team based on your project requirements.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Flutter Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              We shortlist Flutter developers with hands-on experience in using Flutter widgets, programming native experiences, and making Flutter apps cloud-powered. Our network includes developers who have worked on custom projects such as on-demand applications, embedded app development, game app development, and more.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We analyze your requirements and help you employ the right fit, ensuring you get the necessary support to build evolving Flutter apps without the burden of operational overhead. Get highly skilled Flutter developers, programmers, UI/UX designers, and engineers with our hiring solutions.
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

export default FlutterDevelopers;