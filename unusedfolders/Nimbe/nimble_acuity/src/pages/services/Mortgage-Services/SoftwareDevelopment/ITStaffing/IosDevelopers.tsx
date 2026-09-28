import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const IosDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire iOS Developers
            </h2>
            <p className="text-lg text-gray-600">
              Hire iOS developers to get custom, feature-packed, and robust iOS apps developed for your business requirements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Apple's devices, like the iPhone and iPad, are used by millions of people worldwide. It's crucial to reach this market, and if you're looking to hire iOS application developers, **Nimble Acuity** is the right choice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 26 years of experience, we have created powerful apps based on robust iOS SDK technologies for businesses across various industries. Our prolific team of iOS application developers for hire has in-depth expertise in all the latest mobile development languages, databases, and frameworks. We have delivered hundreds of iOS-based mobile applications to global customers, helping to improve business processes, boost efficiency, and enhance revenues.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our iOS Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you hire a dedicated iOS developer from us, you can be assured you are hiring a highly experienced and talented professional who can deliver. Our iOS developers for hire provide the following services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Custom iOS App Development:</strong> We build custom apps that are aligned to your specific business goals, from e-commerce apps to enterprise solutions.
              </li>
              <li>
                <strong>iOS App Re-Engineering:</strong> Our team can re-engineer existing iOS apps and enhance their features to keep them relevant for your business.
              </li>
              <li>
                <strong>Full-stack iOS Development:</strong> We have highly skilled full-stack iOS developers who are experts at developing both the client and server sides of applications.
              </li>
              <li>
                <strong>Industry-specific iOS Development:</strong> Our team crafts applications capable of addressing the unique business challenges for each industry.
              </li>
              <li>
                <strong>iOS Upgradation:</strong> We upgrade your existing iOS app with new functionality and ensure scalability to keep your app relevant.
              </li>
              <li>
                <strong>iOS UI/UX Designers:</strong> Get powerful apps with intuitive interfaces and smooth navigation, thanks to our prolific UI/UX team.
              </li>
              <li>
                <strong>iOS Consultation:</strong> We provide consultancy services, offering suggestions on optimal software and design recommendations.
              </li>
              <li>
                <strong>iOS QA & Testing:</strong> Our expert testers put your app through rigorous tests to ensure it is of the highest quality and functions as required.
              </li>
              <li>
                <strong>iOS Support & Maintenance:</strong> We provide continuous support and maintenance services to ensure your apps remain scalable and bug-free with maximum uptime.
              </li>
              <li>
                <strong>iOS Game App Development:</strong> Our whiz team is capable of delivering thrilling gaming experiences and leveraging gamification in various industries.
              </li>
              <li>
                <strong>AI & AR/VR iOS App Development:</strong> We leverage artificial intelligence, virtual reality, and augmented reality to build modern, innovative apps.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you choose **Nimble Acuity** for your IT staffing needs, you get a wide range of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Expert Team:</strong> We have a highly skilled and experienced team of dedicated, internationally-certified developers and engineers.</li>
              <li><strong>High-quality Services:</strong> We guarantee that our products and services are of superior quality.</li>
              <li><strong>Affordable Prices:</strong> Our services are priced very competitively, with flexible payment options to achieve significant savings.</li>
              <li><strong>Flexibility:</strong> You can outsource the entire project, parts of it, or hire dedicated resources on an hourly basis.</li>
              <li><strong>Rapid Team Scaling:</strong> We can quickly scale operations if your requirements grow.</li>
              <li><strong>Dedicated Project Manager:</strong> You'll have a single point of contact for all your concerns.</li>
              <li><strong>24/7 Access:</strong> We provide round-the-clock access to our executives via multiple communication channels.</li>
              <li><strong>Superb Infrastructure:</strong> We have a world-class infrastructure with the latest technologies and equipment.</li>
              <li><strong>Quick Turnaround Time:</strong> You will always receive our services on time, every time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire iOS Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              At **Nimble Acuity**, we craft superior iOS applications that help you take your business to the next level. Empower your business and employees with high-performing iOS apps delivered by our dedicated iOS developers. We offer transparent and trustworthy services and adhere to all regulations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us now to get started and get access to the services of true professionals.
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

export default IosDevelopers;