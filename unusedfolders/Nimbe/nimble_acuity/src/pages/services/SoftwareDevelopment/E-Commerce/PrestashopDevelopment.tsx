import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const PrestashopDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Prestashop Web Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We develop high-performance eCommerce platforms using Prestashop to save you from overhead and infrastructure expenses.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for an attractive and efficient online storefront? With tens of thousands of e-stores on the internet today, we understand how essential it is for your eCommerce site to get noticed and achieve sales conversion. However, if you lack the resources or technical know-how to create a stunning website, the best option is to partner with skilled and experienced Prestashop experts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a premier Prestashop web development company that can help you achieve your goal. We leverage the powerful features of Prestashop to design online stores that look exquisite, function flawlessly, and offer secure transactions. With an experienced team of Prestashop developers, we can build a customized, user-friendly, and secure website for your eCommerce business.
            </p>
          </div>

          {/* Prestashop Development Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Prestashop Web Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team at **Nimble Acuity** is adept at delivering powerful websites that are futuristic in both look and feel. We stay abreast of contemporary trends and cutting-edge technologies to provide a full suite of services, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Aesthetic Storefront Design</h4>
                <p>We combine development skills and Prestashop functionality to build visually appealing storefronts that showcase your products and capture the attention of online shoppers.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Module & Plugin Development</h4>
                <p>Our solutions are fully customizable. We can create specialized modules and plugins to incorporate features that are part of your specific business requirements, ensuring a flexible and scalable store.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Theme Design & Integration</h4>
                <p>We create bespoke themes that perfectly reflect your brand image and business, moving beyond off-the-shelf templates to deliver a unique and professional feel.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Payment Gateway Integration</h4>
                <p>We integrate secure and fluid payment gateways, implementing the best security protocols to facilitate seamless and trusted payment transactions for your customers.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Mobile-Friendly Development</h4>
                <p>We ensure your eCommerce site is fully responsive and compatible with mobile devices, allowing users to get a seamless, in-store experience at their fingertips.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance & Upgrades</h4>
                <p>Our team provides regular maintenance and performs upgrades to keep your website not only unique but also relevant and secure, ensuring it attracts a steady stream of qualified traffic.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Choosing **Nimble Acuity** as your Prestashop development partner gives you access to a series of benefits that will help your website stand out from the competition.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring all the data you share with us is completely safe and secure.</li>
              <li><strong>Superior Quality Services:</strong> As an ISO certified firm, you can be assured that all the Prestashop development services we deliver are of the highest quality and error-free.</li>
              <li><strong>Expert Team:</strong> We have a talented team of experienced and skilled Prestashop developers who are adept at creating a robust front-end for your business.</li>
              <li><strong>Flexible & Cost-Effective:</strong> Our pricing plans are highly flexible and affordable, designed to suit your business requirements and budget without compromising on quality.</li>
              <li><strong>Easy Scalability:</strong> We build future-ready products. Your Prestashop store will be designed to scale with your business, smoothly handling new products, audience expansion, and sales locations.</li>
              <li><strong>Fast Turnaround:</strong> Our efficient processes and deep expertise allow us to complete projects within a reasonable timeframe, meeting tight deadlines when required.</li>
              <li><strong>Dedicated Manager:</strong> We provide a single point of contact to handle regular maintenance, upgrades, and all your queries, ensuring a smooth and hassle-free experience.</li>
              <li><strong>24/7 Customer Support:</strong> Our dedicated customer support teams are available at all times to address your feedback, concerns, or suggestions.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Online Store?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a pioneer in providing top-quality Prestashop development services. With a strong team of skilled professionals, excellent infrastructure, and a passion for meeting your quality expectations, we can build you a flawless and stunning eCommerce site that helps you attract qualified traffic and boost sales.
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

export default PrestashopDevelopment;