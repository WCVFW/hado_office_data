import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const PowerAppsConsulting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              PowerApps Consulting Services
            </h2>
            <p className="text-lg text-gray-600">
              Navigate the complexities of PowerApps effortlessly with our expert consulting services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In today's fast-paced business landscape, staying ahead requires modern, mobile-friendly solutions that align seamlessly with your vision. However, bridging the gap between your business needs and the implementation of these solutions can be challenging. That's where **Nimble Acuity**'s PowerApps Consulting Services come into play.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of experienced PowerApps developers is here to empower your company by bringing your ideas to life. Whether you're looking to deploy data collection forms, tackle intricate use cases, convert legacy forms, or seek guidance on enterprise-wide governance, our consultants possess the expertise to expedite your journey. Our commitment extends beyond app creation; we seamlessly integrate Power Apps with Dynamics 365, Power BI, MS SharePoint, and Power Automate, enabling you to make data-driven decisions swiftly.
            </p>
          </div>

          {/* Our PowerApps Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our PowerApps Solutions for Your Business Needs
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a trusted partner specializing in Microsoft PowerApps services, we offer a comprehensive suite of solutions designed to empower your enterprise. Our sub-services address specific challenges to help you streamline operations, enhance data accessibility, and drive innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">PowerApps Implementation</h4>
                <p>We work closely with your team to understand your unique business processes and goals, implementing solutions to streamline workflows and improve productivity. Our rapid implementation approach ensures you are operational within weeks at a significantly lower cost.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">PowerApps Integration</h4>
                <p>Seamlessly integrate Power Apps into your business to connect various data sources, third-party applications, and existing systems. Achieve real-time data synchronization and workflow automation for unparalleled visibility and operational efficiency.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">PowerApps Development</h4>
                <p>Our development services cover the entire application lifecycle, from concept to deployment. Our skilled developers create customized solutions tailored to your specific needs, prioritizing user-centric design for an exceptional user experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">PowerApps Design</h4>
                <p>Enhance user experiences with our design services. Our team specializes in creating modern UI/UX designs that elevate user satisfaction and offer responsive, feature-rich designs for flawless operation on all devices.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Support and Maintenance</h4>
                <p>We resolve both anticipated and unexpected issues, optimizing your PowerApps for peak performance. Our experienced developers are readily accessible to ensure the seamless operation of your personalized apps, minimizing downtime and operational risks.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">PowerApps Migration</h4>
                <p>If you're looking to transition your existing applications to PowerApps, our migration services can help. We assess your current systems, plan the migration process, and ensure a smooth transfer of data and functionality with minimal disruptions.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">PowerApps Staff Augmentation</h4>
                <p>This service helps businesses enhance their existing PowerApps team with skilled and experienced professionals, either on a temporary or long-term basis for specific projects or ongoing support.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">PowerApps Automation Consulting</h4>
                <p>We assist businesses in automating their operations using PowerApps. Our consultants will analyze your current processes, identify areas for automation, and design and implement solutions to streamline those areas.</p>
              </div>
            </div>
          </div>

          {/* Microsoft PowerApps Services – Our Capabilities */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Microsoft PowerApps Services – Our Capabilities
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our services are built to meet your specific needs with strategic planning, custom development, and continuous support.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Strategic Planning & Consultancy:</strong> Our expert consultants work closely with you to understand your specific needs and develop a strategic plan that aligns with your business objectives.</li>
              <li><strong>PoC & Custom Business Apps:</strong> We specialize in developing proofs of concept (PoC) and custom business applications tailored to your unique requirements.</li>
              <li><strong>Canvas & Model-Driven Apps:</strong> We leverage Microsoft's powerful platforms to develop Canvas Apps, Model-Driven Apps, and Embedded Apps that integrate seamlessly with your existing systems.</li>
              <li><strong>Modern UI/UX Design:</strong> Our design team focuses on creating modern and intuitive UI/UX for your applications to ensure an engaging and contemporary user experience.</li>
              <li><strong>BI Capabilities & Analytics:</strong> We enable your business to make data-driven decisions by providing BI capabilities and analytics, including data gathering, visualization, and reporting for actionable insights.</li>
              <li><strong>Build Offline-Capable Apps:</strong> We understand that connectivity can be a challenge. That's why we specialize in building apps that can function offline, ensuring uninterrupted productivity.</li>
              <li><strong>Integration with Other Platforms:</strong> We excel at integrating PowerApps with platforms like SharePoint, Salesforce, Power BI, and more to enhance productivity and functionality.</li>
            </ul>
          </div>

          {/* Why Choose Us as Your Partner */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              With us as your PowerApps service providing company, you unlock a world of possibilities for streamlining your processes and optimizing your business. Our team's extensive experience and proven track record ensure a seamless journey.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Effective Integration:</strong> Our team excels in integrating PowerApps seamlessly with your existing systems, databases, and third-party tools, ensuring data flows effortlessly between applications.</li>
              <li><strong>Quick Turnaround Time:</strong> Our agile development methodologies are designed to expedite project delivery without sacrificing quality, so you can meet tight deadlines and adapt swiftly to market changes.</li>
              <li><strong>Dedicated Project Managers:</strong> We provide dedicated project managers who act as a bridge between our team and yours, ensuring your project progresses smoothly, on time, and within budget.</li>
              <li><strong>Expertise & Quality Assurance:</strong> Our team comprises PowerApps experts who stay updated with the latest practices. We conduct thorough testing, code reviews, and security audits to ensure your solutions are of the highest quality.</li>
              <li><strong>Data Security:</strong> Your data is precious, and we treat it as such. Our adherence to ISO 9001:2015 standards ensures robust data security measures, protecting your information from threats and breaches.</li>
              <li><strong>Maintenance and Support:</strong> Our commitment to your success doesn't end with project delivery. We offer comprehensive support and maintenance services, including regular updates and bug fixes.</li>
              <li><strong>Flexible Pricing:</strong> We believe in transparency and flexibility. Choose from our range of pricing models, including fixed and predictable structures, so you can confidently plan your budget.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Business Processes?
            </h3>
            <p className="text-gray-700 mb-6">
              With our extensive experience in integrating PowerApps with various systems and third-party tools, we optimize data flow and application functionality, ensuring seamless integrations. **Nimble Acuity** also holds a reputable position when it comes to our turnaround times and quality, adopting agile methodologies, pre-built templates, and streamlined development processes. Our commitment to extensive documentation, rigorous testing, and client feedback integration guarantees innovative, out-of-the-box solutions that empower your business to excel.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PowerAppsConsulting;