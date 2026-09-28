import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const LinuxDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Linux Software Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Outsource your Linux software development requirements to us and collaborate with industry experts for uncompromised Linux development solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Linux is one of the most versatile, Unix-like operating systems, popular for being an open-source software and its free licensing. It is used in android phones, wearables, cameras, and even cars, with an array of many other uses. It is secure and the large community of its users offers great support to anyone who uses the software.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** houses a team of experts that is skilled and experienced in developing Linux software—one of the oldest yet an ever-growing OS. We offer unmatched Linux software development services and have been a part of this industry for more than two decades. Our dedicated Linux software development team knows the intricacies involved in each of the development phases, resulting in nothing but perfection.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Linux Software Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team of experts at **Nimble Acuity** offers a variety of Linux software development solutions. Whether you need us to develop a Linux-based software or are looking for maintenance or upgradation-related services, you can count on us.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Linux Desktop Applications Development:</strong> We create highly-efficient and user-friendly desktop applications for you, keeping in mind all the nuances of your business.</li>
              <li><strong>GUI Development for Linux:</strong> Our developers also specialize in creating graphical user interfaces for Linux, making it a lot more user-friendly to operate.</li>
              <li><strong>Linux System Administration:</strong> One of our core services is to administer and manage the operations of systems that are powered by Linux, including backing up data and troubleshooting service problems.</li>
              <li><strong>Linux Based Internet Solutions Development:</strong> Our developers have immense expertise in developing internet solutions like large web portals that are powered by Linux.</li>
              <li><strong>Linux Based Server Development and Implementation:</strong> We offer Linux-based server development as well as implementation services, leveraging Linux's stability and flexibility.</li>
              <li><strong>Linux Based Server Maintenance and Upgradation:</strong> We help you with maintenance and timely upgradation to ensure that your server is up to date at all times.</li>
              <li><strong>Kernel-Level Coding and Linux Consulting Services:</strong> Our developers specialize in kernel-level coding, and our consultants provide guidance to help you understand your infrastructure better.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Linux Software Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is the go-to choice if you plan to outsource Linux software development services for innumerable reasons, some of which are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Prices:</strong> We offer the most fair-priced services in the industry and our services are worth every penny that you invest in us.</li>
              <li><strong>Expert Developers:</strong> We have a team of in-house expert software developers who are not just driven by experience but are incredibly passionate about what they do.</li>
              <li><strong>Proficiency in Using 3rd Party Tools:</strong> Our developers are well-equipped with the knowledge and expertise in using a wide range of third-party tools.</li>
              <li><strong>Round the Clock Support:</strong> Our client support service team is active throughout the day and night and is dedicated to helping clients find solutions to their queries and troubles.</li>
              <li><strong>Follow-Up and Updates:</strong> We believe that feedback helps us improve our services, and we also closely monitor the community for any updates to keep our clients informed.</li>
              <li><strong>Scalability:</strong> We are well-equipped to deal with any changes in your requirement, be it upscaling or downscaling the resources involved in your project.</li>
              <li><strong>Quick Turnaround Times:</strong> Our team of expert developers and access to the latest tools make it effortless for us to deliver more in less time without compromising on quality.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your Linux Software?
            </h3>
            <p className="text-gray-700 mb-6">
              Outsourcing Linux software development services to us is the most ideal solution due to the degree of our expertise. **Nimble Acuity** has been a part of the ever-growing Linux software development industry for the past two decades. Over the years, we have learned all that it takes to develop highly-efficient, flexible, smooth, and user-friendly Linux software.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We have vast experience in working with different kinds of industries and businesses, which equips us with the expertise to offer client-specific services with perfection. Get in touch with us now and give your business the kind of services that it deserves.
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

export default LinuxDevelopment;