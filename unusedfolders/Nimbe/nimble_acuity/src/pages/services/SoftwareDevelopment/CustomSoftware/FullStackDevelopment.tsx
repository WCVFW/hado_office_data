import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const FullStackDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Full Stack Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Eight out of ten customers associate business credibility with a fully functional, intuitive, and interactive website. We ensure your business makes the best first impression.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our full stack services empower enterprise companies to drive greater engagement with innovative, scalable, and feature-rich solutions. Our team is well-versed in a range of front-end technologies such as HTML5, CSS3, JavaScript, React, Angular, and Vue.js. Our back-end expertise extends to Java, Python, Ruby on Rails, Node.js, and PHP, enabling us to develop robust server-side applications that ensure seamless functionality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our agile development approach allows us to deliver solutions faster without compromising quality, while our rapid development cycles ensure you can respond quickly to market demands. We believe in putting users at the forefront by employing user-centric designs and conducting thorough usability testing to ensure outstanding outcomes. We also optimize development processes, use open-source technologies where appropriate, and provide transparent pricing to help you minimize expenses.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Full Stack Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our technical expertise spans both the front-end and back-end aspects of projects, enabling us to create end-to-end solutions that are not only visually appealing and user-friendly but also robust, scalable, and efficient.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Full Stack Web Development:</strong>
                <p className="mt-2">We implement responsive design for optimal user experiences across devices, employ RESTful or GraphQL APIs for seamless communication, and use secure authentication and authorization mechanisms. Our services include database management, server management, and version control.</p>
              </li>
              <li>
                <strong>Mobile App Development:</strong>
                <p className="mt-2">We develop mobile apps that are tightly integrated with web applications and databases to ensure data consistency and a unified user experience. We design user interfaces that align with your web application's branding and implement secure authentication to access backend resources.</p>
              </li>
              <li>
                <strong>Ecommerce Development:</strong>
                <p className="mt-2">Our full stack developers help businesses establish a strong online presence and provide exceptional shopping experiences. We develop inventory management systems, implement feature-rich shopping carts, and integrate popular payment gateways for secure online transactions.</p>
              </li>
              <li>
                <strong>CMS Development:</strong>
                <p className="mt-2">Our streamlined CMS systems improve productivity and reduce operational costs. Our solutions grow with your business and align with your specific goals, offering compelling customizations, robust security, and multi-platform support.</p>
              </li>
              <li>
                <strong>API Development and Integration:</strong>
                <p className="mt-2">We design APIs with well-defined endpoints, implement secure authentication, and ensure thorough documentation. Our custom APIs meet specific business needs, whether it's for integrating third-party services or enabling unique features. Our solutions are scalable to handle increased traffic and evolving requirements.</p>
              </li>
              <li>
                <strong>Web Security:</strong>
                <p className="mt-2">Our full stack approach ensures end-to-end security, covering user interfaces, data storage, and server infrastructure. We assist in meeting industry-specific compliance standards and offer real-time monitoring to address emerging vulnerabilities promptly.</p>
              </li>
              <li>
                <strong>Quality Assurance and Testing:</strong>
                <p className="mt-2">Our testing processes encompass both front-end and back-end components. We use CI/CD pipelines to automate testing and deployment, reducing the risk of human error and expediting development cycles.</p>
              </li>
              <li>
                <strong>Responsive Web Design:</strong>
                <p className="mt-2">This is an integral aspect of our services. We design and develop websites that adapt seamlessly to various devices and screen sizes using HTML5, CSS3, and JavaScript frameworks.</p>
              </li>
              <li>
                <strong>Front-End Development:</strong>
                <p className="mt-2">We leverage frameworks like Bootstrap and React to expedite development, while web accessibility and performance optimization ensure inclusivity and speed. We also ensure cross-browser compatibility and use version control systems to manage code changes.</p>
              </li>
              <li>
                <strong>Back-End Development:</strong>
                <p className="mt-2">Our back-end services form the robust foundation of web applications, encompassing server-side logic, API creation, and database management. We use version control systems to track code changes and implement effective DevOps processes.</p>
              </li>
            </ul>
          </div>

          {/* Consulting Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Full Stack Consulting Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our advisory services provide comprehensive guidance and strategic insights, ensuring your technology investments align seamlessly with your overarching goals. By leveraging our expertise, you gain access to a team of seasoned professionals who analyze your current tech stack, assess your business processes, and tailor a roadmap for optimal technology utilization. This approach not only enhances the efficiency of your IT infrastructure but also drives tangible business benefits, allowing you to make informed decisions and gain a competitive edge.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Our Full Stack Developers?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our developers possess diverse technical capabilities and are handpicked for their proficiency in front-end and back-end technologies. We look for rare skill sets, a problem-solving mindset, and a collaborative ethos. When you choose us, you gain a team committed to delivering exceptional results, capable of turning your vision into reality.
            </p>
            <h4 className="text-xl font-semibold text-[#006A7C] mb-4">
              Technologies We Leverage
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>JavaScript</li>
              <li>Angular JS</li>
              <li>React.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Oracle</li>
              <li>SQL Server</li>
              <li>PostgreSQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Full Stack Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Strategy and Proposal:</strong> We communicate with you to gather project requirements and insights to build the best full stack solution.
              </li>
              <li>
                <strong>Designing:</strong> We strategize ways to implement a solution that is the right fit for your needs and budget.
              </li>
              <li>
                <strong>Client Approval:</strong> We propose our solution and obtain your approval before proceeding.
              </li>
              <li>
                <strong>Development and Integration:</strong> Our team begins development, ensuring seamless integration of all components.
              </li>
              <li>
                <strong>Quality Check:</strong> We thoroughly check the quality of our implementation by testing parametrically and with business cases.
              </li>
              <li>
                <strong>Go-live:</strong> We provide support to ensure seamless adoption of our solution.
              </li>
              <li>
                <strong>Support and Maintenance:</strong> After operations commence, we offer periodic support and monitor the health of your systems as needed.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with Nimble Acuity for strategic full stack development services aimed at fostering digital modernization and outstanding user experiences. Our team specializes in custom web APIs, integrating crucial systems, and robust data management.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Let's transform your digital aspirations into reality and propel your business forward in the dynamic digital landscape. Contact us today to get started.
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

export default FullStackDevelopment;