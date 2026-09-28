import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const HMIDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              HMI Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get real-time information to control your systems and monitor your production with our HMI development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              For the efficient functioning of your automated devices and equipment, it’s crucial to power your software with a seamless human-machine interface (HMI). A great HMI not only allows users to interact with a device but also provides real-time data and information about its performance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, we provide comprehensive HMI development services to help you create a smooth graphical representation of your automated systems. Created by expert HMI developers and modelers, our innovative, power-packed, and future-ready HMI solutions improve human-machine interactions, reduce distractions, shorten response times, and deliver an excellent user experience.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our HMI Development Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Multi-platform HMI Framework Development:</strong>
                <p className="mt-2">We use industry-leading tools and technologies to create superlative HMI frameworks that work across platforms and devices. Our multi-platform compatible HMI designs ensure ease of operation and help achieve the desired efficiency.</p>
              </li>
              <li>
                <strong>Touch and Gesture Controlled HMI Design:</strong>
                <p className="mt-2">We help you develop apps and software that allow users to interact with systems through traditional touchpads, multi-touch dashboards, control panels, built-in screens, and more. Our smart sensors and embedded systems make human-machine interfaces simple and intuitive.</p>
              </li>
              <li>
                <strong>3D Graphics Design and Development:</strong>
                <p className="mt-2">Our expert graphic designers and UI experts create pixel-perfect 3D graphics and animations, allowing you to easily organize your data and take your 2D and 3D assets to the next phase of development.</p>
              </li>
              <li>
                <strong>End-user Friendly UI Controls:</strong>
                <p className="mt-2">Leveraging industry-leading technologies, our expert UI/UX engineers effortlessly fuse engineering disciplines with human experience to create powerful and user-friendly UI controls that help you seamlessly interact with and customize your technologies.</p>
              </li>
              <li>
                <strong>Operator and Process-centric UI/UX Design:</strong>
                <p className="mt-2">We use the best HMI technologies to organize data around your goals and cater to how your operators process information and make decisions. Our operator-centric HMIs provide real-time, actionable insights to help your team control systems and monitor production.</p>
              </li>
              <li>
                <strong>Plug-in Development & Integration:</strong>
                <p className="mt-2">Our experts can also help you develop customized plug-ins and integrations to tailor your products to your specific requirements and augment the user experience for smooth performance.</p>
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our HMI Development Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a leading HMI development service provider, we follow a holistic, step-by-step process to create an interactive, user-friendly, and fully functional HMI that enhances efficiency and reduces operational costs.
            </p>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Requirement Gathering:</strong> We meet with you to precisely understand your HMI development needs and the features you want to incorporate.
              </li>
              <li>
                <strong>Project Collaboration:</strong> Our expert UI/UX designers then collaborate to choose the best software platform and features for your HMI.
              </li>
              <li>
                <strong>Intuitive Design:</strong> We create a graphical representation of your HMI, ensuring it is intuitive, user-friendly, and offers measurable efficiency improvements.
              </li>
              <li>
                <strong>Quality Assurance:</strong> Our quality analysts thoroughly check the HMI for any possible errors or gaps, ensuring it highlights all relevant and critical information.
              </li>
              <li>
                <strong>Graphics Migration:</strong> Once developed and functional, we migrate your graphics to new systems to ensure a seamless transition and minimal operator training.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Fast and Affordable Services:</strong> We provide customized HMI solutions with a quick turnaround time, delivering measurable project efficiencies and cost savings.
              </li>
              <li>
                <strong>Certified Experts:</strong> Our team of experienced engineers is capable of designing and building exceptional HMIs for high-value products and solutions.
              </li>
              <li>
                <strong>Latest Tools and Software:</strong> We leverage the best tools and technologies to enhance and maximize real-time interactions between machines and humans.
              </li>
              <li>
                <strong>Customized Solutions:</strong> We tailor our HMI solutions to your unique needs, allowing you to make the most of technology without increasing your overhead costs.
              </li>
              <li>
                <strong>Single Point of Contact:</strong> Our dedicated account managers act as your single point of contact, providing you with quick insights into your project's progress and timelines.
              </li>
              <li>
                <strong>24/7 Support:</strong> Our customer service team is available around the clock to ensure timely resolution of all your queries and concerns.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready for a Better Human-Machine Interface?
            </h3>
            <p className="text-gray-700 mb-6">
              As a premium HMI development company, Nimble Acuity can help you deliver exceptional, fully integrated HMI solutions. Our adaptive and feature-rich designs facilitate seamless interactions and improve the user experience.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Want to know more? Let's get in touch!
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

export default HMIDevelopment;