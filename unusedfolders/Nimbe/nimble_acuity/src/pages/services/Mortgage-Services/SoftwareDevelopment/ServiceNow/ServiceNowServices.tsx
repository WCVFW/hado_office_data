import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ServiceNowServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600">
              Transform your business with our ServiceNow solutions, backed by a 360-degree partnership to ensure your transformation succeeds.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              While many companies invest in platforms like ServiceNow, they often struggle to achieve significant returns. With limited resources and a lack of in-depth expertise, businesses find it difficult to expand beyond basic IT service management. At **Nimble Acuity**, we help you transition from siloed processes to unified workflows with our proven 4-step implementation process.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a **ServiceNow associate with over 10 years of experience**, our team of certified implementation specialists and application developers helps you optimize productivity, reduce costs, and increase resilience. Our platform-led approach unites innovation and industry best practices to deliver a fully agile digital business. Partner with us to thrive in the cloud continuum while slashing overheads by up to 60%.
            </p>
          </div>

          {/* Our ServiceNow Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ServiceNow Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Implementation Services</h4>
                <p>We provide end-to-end implementation, aligning the platform with your specific needs to improve productivity and collaboration.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Managed Services</h4>
                <p>Our proactive managed services handle system maintenance, performance optimization, and user support to maximize your ROI and mitigate risks.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Application Services</h4>
                <p>We craft tailored, user-friendly applications that seamlessly integrate with the ServiceNow platform, enabling you to achieve your business goals.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Security Operations</h4>
                <p>We combine advanced technologies and expert insights to protect your organization from evolving threats and ensure business continuity.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Customer Service Management</h4>
                <p>Our solutions help you streamline service delivery, improve issue resolution, and cultivate long-term customer relationships.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C] sm:text-lg">ServiceNow IT Service Management</h4>
                <p>We empower organizations to transform their IT operations by streamlining the service desk and automating routine tasks for increased efficiency.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Integration Hub</h4>
                <p>We leverage ServiceNow's robust capabilities to seamlessly connect your systems, enabling efficient data exchange and process automation.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow HR Service Management</h4>
                <p>Our solutions empower HR teams with the tools needed to deliver exceptional employee experiences through automated onboarding and self-service options.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow IT Operations Management</h4>
                <p>We help you proactively detect and resolve issues, improve service performance, and align IT operations with your business objectives.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow DevOps</h4>
                <p>Our solutions help you embrace DevOps practices, automating your software delivery pipeline for faster release cycles and seamless collaboration.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow IT Asset Management</h4>
                <p>We help you effectively manage your IT assets throughout their lifecycle, enabling you to make informed decisions and reduce unnecessary expenditures.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Consulting Services</h4>
                <p>Our seasoned consultants provide strategic insights and support throughout your ServiceNow journey, from initial planning to full implementation.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Hire ServiceNow Developers</h4>
                <p>We provide access to a pool of talented professionals who can augment your existing team or work on specific projects to accelerate delivery.</p>
              </div>
            </div>
          </div>

          {/* Why Partner with Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Error-Free Services:</strong> As an **ISO-certified firm**, we guarantee that all ServiceNow services delivered by our expert team will be error-free and of superior quality.</li>
              <li><strong>Data Security:</strong> We are an **ISMS-certified company**, ensuring that all data you share with us remains safe and secure throughout the process.</li>
              <li><strong>Skilled Consultants:</strong> Our team consists of some of the most experienced and qualified consultants who can easily cater to all your needs.</li>
              <li><strong>Quick Turnaround Time:</strong> Our multiple delivery locations across the globe enable us to provide high-quality services with a quick turnaround.</li>
              <li><strong>World-Class Infrastructure:</strong> We have access to the latest tools and world-class office spaces, ensuring our team is equipped to deliver top-notch services.</li>
              <li><strong>Reasonable Pricing:</strong> We offer flexible and reasonable pricing options that can be tailored to fit your budget and specific business requirements.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Business with ServiceNow?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a trusted ServiceNow partner specializing in solving complex business challenges and creating innovative solutions. We balance out-of-the-box functionality with deep customization to tailor solutions that align with your unique processes and goals.
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

export default ServiceNowServices;