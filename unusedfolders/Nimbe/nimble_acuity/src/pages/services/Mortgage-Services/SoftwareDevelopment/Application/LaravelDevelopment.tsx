import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const LaravelDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Laravel Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build custom, robust, and secure web applications to innovate at scale. Try our Laravel development services now to boost efficiency and minimize time-to-market.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The struggle to find a reliable and scalable framework that maintains code stability to prevent unexpected crashes and errors is real. The slower development process and increased risk of security vulnerabilities further aggravate the challenge. This is where our custom Laravel development services make a difference.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Specializing in PHP web development, Object-oriented programming (OOP), migrations, extension development, and API integration, our Laravel developers at **Nimble Acuity** assist global businesses from startups to established enterprises. Grounded in expertise, our Laravel framework development company harnesses Laravel's Model-View-Controller (MVC) architecture and Object Relational Mapper (ORM). This ensures that your web applications are not only robust and scalable but also streamlined for optimal performance.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Accelerate App Deployment with Our Custom Laravel Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Explore the wide variety of Laravel development services we offer to accelerate your business's digital transformation journey.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Laravel CRM Development:</strong> We craft personalized CRM solutions that offer real-time analytics, improving your decision-making process.</li>
              <li><strong>Laravel e-Commerce Development:</strong> We create e-commerce solutions that support multiple languages and currencies, providing your business with a truly global reach.</li>
              <li><strong>Laravel Enterprise Application Development:</strong> Leverage our expertise to build enterprise applications that offer advanced data migration capabilities.</li>
              <li><strong>Laravel Web Application Development:</strong> We utilize Laravel to create web applications that support extensive, real-time messaging features.</li>
              <li><strong>Laravel API Development:</strong> We build robust and scalable APIs that enable seamless integration and effective communication between different software components.</li>
              <li><strong>Laravel ERP Development:</strong> Backed by technologies like Laravel Nova and Laravel Echo, we help you streamline your business processes and improve decision-making.</li>
              <li><strong>Laravel Package Development:</strong> We develop custom packages that extend your application's functionality and perfectly align with your business needs.</li>
              <li><strong>Laravel Mobile App Development:</strong> We leverage Laravel's seamless API support and robust backend development capabilities to create high-performing mobile applications.</li>
              <li><strong>Laravel Application Development:</strong> We use Laravel’s built-in command-line interface that speeds up the development process by automating repetitive tasks.</li>
              <li><strong>Laravel Website Development:</strong> We take care of the full-cycle development process, covering every stage from initial consulting and design to ongoing support and maintenance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity as Your Trusted Laravel Outsourcing Partner?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are more than just a Laravel development company; we are your partners in success. Our transparent communication and project management processes ensure you're kept informed at every stage.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Access to Object-oriented Libraries:</strong> We help you harness a large number of pre-installed object-oriented libraries, making it an ideal choice for web and app development.</li>
              <li><strong>MVC Support:</strong> Our developers ensure better documentation, design performance, and overall stability with their expertise in Laravel's MVC architecture.</li>
              <li><strong>Security:</strong> Our Laravel development is extremely secure, as we use hashed and salted passwords at every step.</li>
              <li><strong>Experienced Laravel Developers:</strong> Our development team of seasoned professionals has worked on tricky, complex projects.</li>
              <li><strong>Trusted and Proven Delivery Methods:</strong> Our service delivery is based on the Agile methodology to ensure you are always kept in the loop and your delivery schedule is met.</li>
              <li><strong>Cost-efficient Services:</strong> Our dynamic quotes are just the tip of the iceberg, as you can customize your requirements based on your budget without having to worry about quality.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Make the Most of Laravel with Our Offshore Support
            </h3>
            <p className="text-gray-700 mb-6">
              Serving global clients for over two decades, our Laravel development thrives on a unique, client-centric approach. We begin by understanding your business objectives, followed by a strategic alignment with our design and development process. This ensures that our Laravel solutions cater to your immediate needs and lay the groundwork for your future growth.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              A commitment to continuous learning and adaptation is another distinctive facet of our service. This helps our team stay updated with the latest trends and innovations. This commitment empowers us to offer solutions that are future-proof and adaptable to evolving business needs.
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

export default LaravelDevelopment;