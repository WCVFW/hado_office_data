import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ApplicationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Application Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Experience optimal resource utilization and user-centricity through our collaborative and outcome-focused approach.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Navigating in-house app development challenges can be daunting. From significant investments required for recruiting and training to setting up infrastructure, we understand the complexities you face. The need for domain expertise, access to the right tools and technologies, and the burden of post-project maintenance all add to the complexity. But fear not! Our customized application development services are here to turn the tide in your favor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We embrace a comprehensive UX design approach, crafting UI based on user research and immersive UX strategies. Our expert engineering teams specialize in creating custom mobile and web solutions with cross-platform AI integration, delivering transformative digital experiences. Our unwavering commitment to collaboration at a strategic level and a results-driven approach facilitate the development of applications that are built to last.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Custom Application Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our custom application development services are not just about creating software; they are about creating a comprehensive solution that solves your problem and adds value to your business. Explore the solutions that you can leverage by partnering with us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Planning and Implementation:</strong> We work with you to understand your needs and formulate a strategic plan, providing a clear roadmap and meticulous execution.</li>
              <li><strong>Application Architecture Design:</strong> We design a robust and scalable architecture that aligns with your business needs, creating efficient and resilient systems.</li>
              <li><strong>Application UI/UX Design:</strong> We focus on creating user-centric designs that are appealing and easy to navigate, contributing to higher user engagement.</li>
              <li><strong>Application QA & Testing:</strong> Our team applies rigorous testing methods to ensure your application functions as expected, identifying and resolving bugs before your users do.</li>
              <li><strong>Migration:</strong> Our approach involves careful planning, testing, and execution to ensure a smooth transition with minimal disruption or data loss.</li>
              <li><strong>Integration with External Systems:</strong> We implement the best solution to integrate your application with external systems, enhancing the overall efficiency of your operations.</li>
              <li><strong>Application Maintenance and Support:</strong> We proactively monitor your applications, perform regular updates, and provide prompt support to ensure they remain high-performing and up-to-date.</li>
            </ul>
          </div>

          {/* Offshore Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Offshore Software Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Leverage the expertise of our global teams specializing in the latest technologies and industry best practices. We make collaboration effortless, using advanced communication tools that ensure a smooth working relationship, regardless of your location. Our offshore services deliver a strategic advantage—access to top talent, cost savings, faster project completion, and a commitment to excellence.
            </p>
          </div>

          {/* Types of Applications */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Types of Applications We Develop
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cross-Platform App Development:</strong> Achieve wider audience reach and cost efficiency by developing apps that work seamlessly across devices and platforms.</li>
              <li><strong>Mobile Application Development:</strong> Create engaging, user-friendly mobile apps to stay ahead in the mobile-first era.</li>
              <li><strong>Web Application Development:</strong> Expand your online presence globally with dynamic web applications that engage and retain customers effectively.</li>
              <li><strong>Cloud Application Development:</strong> Embrace scalable and secure cloud technology, reducing infrastructure costs and providing anywhere, anytime access.</li>
              <li><strong>IoT Application Development:</strong> Lead the IoT revolution by connecting devices, collecting and analyzing data, and transforming it into actionable insights.</li>
              <li><strong>Desktop Application Development:</strong> Optimize productivity with tailored desktop applications, ensuring seamless performance and accessibility.</li>
              <li><strong>AI Application Development:</strong> Infuse intelligence into applications to enhance user experiences, automate processes, and gain a competitive edge.</li>
              <li><strong>Enterprise Application Development:</strong> Streamline operations, foster collaboration, and boost efficiency with customized enterprise solutions.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We specialize in crafting applications that meet and exceed your expectations. When you choose to partner with us, you open the door to a plethora of advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Tailored Solutions:</strong> We adopt a project-specific approach and implement a multi-step quality assurance system to deliver applications that meet and exceed your performance expectations.</li>
              <li><strong>Punctual Project Delivery:</strong> Every project is assigned a dedicated project manager who ensures timely project completion.</li>
              <li><strong>Cutting-Edge Tools and Technologies:</strong> Access expert development teams with the latest tool stacks and industry-validated practices.</li>
              <li><strong>Proven Expertise:</strong> All our developers and project managers undergo rigorous pre-vetting processes to ensure only the most qualified professionals are assigned to your project.</li>
              <li><strong>Global Reach:</strong> With strategically positioned delivery centers across the globe, we tap into a diverse talent pool.</li>
              <li><strong>Transparent Billing:</strong> Each client benefits from custom pricing, guided by comprehensive estimates that consider your project's technical and operational intricacies.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Ideas into Reality?
            </h3>
            <p className="text-gray-700 mb-6">
              Entrusting us with your application development needs isn't just a choice; it's a strategic imperative. By doing so, you harness a potent combination of innovation, efficiency, cost-effectiveness, and security that paves the way for your digital success story. Our dedicated team of seasoned experts stands at the forefront of innovation, consistently infusing fresh ideas and the latest technologies into every facet of application development.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We recognize the paramount importance of time to market and tirelessly work to expedite your product's journey into the hands of your audience. By outsourcing to us, you effectively sidestep the financial burdens associated with an in-house development team.
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

export default ApplicationServices;