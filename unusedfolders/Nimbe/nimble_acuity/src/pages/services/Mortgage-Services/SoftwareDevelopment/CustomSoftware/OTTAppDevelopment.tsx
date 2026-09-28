import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const OTTAppDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              OTT App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Provide your users with an intuitive and engaging viewing experience by developing your own custom OTT platform.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we specialize in developing custom OTT platforms that deliver an enticing user experience. Our team of talented professionals creates and deploys a wide range of solutions, leveraging cutting-edge technology to ensure premium quality without compromise. We understand that every business has unique requirements, and we take pride in our ability to craft solutions that are both affordable and reliable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With decades of experience, we can determine the best way to create a solution that provides an incredible return on your investment. We are committed to helping you build and launch your dream OTT platform with a seamless process from start to finish.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our OTT App Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">UI/UX Design</h4>
                <p>Our UI/UX design services create compelling user experiences for your OTT apps that keep customers engaged and encourage them to return time and again to use your unique product.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Performance Optimization</h4>
                <p>We offer performance enhancement services to ensure your apps meet customer demands, eliminating video buffering and audio stuttering for a smooth viewing experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">App Migration</h4>
                <p>We specialize in transforming legacy applications to create enhanced multimedia experiences across a broad range of platforms and devices, ensuring your service is modern and accessible.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Comprehensive Testing</h4>
                <p>We thoroughly test your OTT apps in our lab to identify and fix issues before the final product is delivered, ensuring you receive a high-quality, bug-free solution you can trust.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance & Support</h4>
                <p>We handle all OTT app and video content maintenance, allowing you to focus on new product development and business growth while we ensure your platform runs smoothly.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> We offer customized pricing plans that fit your budget and business needs, ensuring a cost-effective solution.</li>
              <li><strong>Experienced Developers:</strong> Our team consists of the brightest and most accomplished OTT app developers who can bring your dream app to life with skill and expertise.</li>
              <li><strong>Superior Quality:</strong> As an ISO-certified firm, we provide top-of-the-line, custom OTT solutions that adhere to the highest standards of quality.</li>
              <li><strong>State-of-the-Art Infrastructure:</strong> Our teams have access to cutting-edge technology and modern infrastructure to support all your development needs.</li>
              <li><strong>Short Turnaround Time:</strong> With distribution centers across the globe, we are able to deliver services quickly and efficiently.</li>
              <li><strong>Dedicated Project Manager:</strong> You'll have a dedicated project manager to guide you every step of the way, ensuring seamless communication and project oversight.</li>
              <li><strong>Round-the-Clock Support:</strong> Our support teams are available 24/7 via phone, email, or webchat to provide professional and thoughtful assistance.</li>
              <li><strong>Scalable Solutions:</strong> Our team has the bandwidth to easily scale up or down based on your project requirements, adapting to your growing demands.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Launch Your OTT Platform?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing top-quality OTT app development services. We combine experience and skill to build your OTT app in the most cost-effective manner without compromising on quality.
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

export default OTTAppDevelopment;