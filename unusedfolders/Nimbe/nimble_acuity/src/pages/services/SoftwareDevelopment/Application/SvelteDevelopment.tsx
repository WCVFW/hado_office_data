import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SvelteDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Svelte JS Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to a structured framework for the development of web and mobile applications with Svelte.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you want to have a structured framework for the development of web and mobile applications for your business? Are you looking for exceptional modularity along with amazing and improved consistency with faster loading times in your web applications? If yes, then you need to go for Svelte JS design and development as it is definitely one of the best frameworks available in the entire market today. With the help of this highly efficient framework, you will be able to create reliable and scalable web applications that can help create the perfect online presence for your brand.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading name providing cutting-edge Svelte JS development services. With an experience of over two decades in software development, we have been frontrunners in developing scalable mobile and web applications using the Svelte JS framework.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Svelte JS Development Services
            </h3>
            <p className="text-700 leading-relaxed mb-4">
              Our Svelte development services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Web Application Development:</strong> **Nimble Acuity** is one of the prominent companies that offer Svelte JS solutions. Being exposed to the most advanced technologies and tools, we are skilled in creating powerful web applications that are customized according to the requirements of our customers.</li>
              <li><strong>Svelte JS UI/UX Development:</strong> We offer the best Svelte JS specialists for the job of creating applications that have an interactive and attractive interface.</li>
              <li><strong>Svelte JS Quality Assurance & Testing:</strong> We have testing practices to ensure that every single application is developed free of any bugs and errors.</li>
              <li><strong>Support & Maintenance:</strong> We provide continuous maintenance and support options for clients. Even after the application has been deployed, we provide ongoing support.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a wide range of benefits to our clients outsourcing Svelte JS development services to us. Some of these are mentioned here.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Pocket-Friendly Rates:</strong> We offer quality solutions at pocket-friendly prices. Our flexible pricing module is designed to ensure that even small and medium-sized businesses can benefit from our services.</li>
              <li><strong>Professional Developers:</strong> With us, you can rest assured that you'll be provided with professional developers who are equipped with the resources necessary to create functional and result-driven applications.</li>
              <li><strong>Data Security:</strong> As a company that is ISO-certified, we conform to all the security standards of the industry to ensure that all the valuable information of our clients is stored securely and safely.</li>
              <li><strong>Quality Infrastructure:</strong> We have the resources, tools, and technologies to offer the best Svelte JS services to our clients.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose Nimble Acuity for Your Svelte JS Development
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is amongst the pioneers of providing highly reliable and robust Svelte JS services to clients all over the world. From effective integration to the incorporation of the most efficient practices using the Svelte JS framework, we have the expertise and experience to handle all the needs of businesses.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We have long experience of working in the industry and hence you can rely on us for the creation of reliable applications. Contact us today and we will help in the creation of a proper Svelte JS strategy for your brand.
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

export default SvelteDevelopment;