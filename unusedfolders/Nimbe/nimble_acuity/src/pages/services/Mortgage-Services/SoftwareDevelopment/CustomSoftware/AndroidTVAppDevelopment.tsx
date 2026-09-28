import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AndroidTVAppDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Android TV App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get expert solutions for designing and developing efficient Android TV applications that provide an intuitive and enticing viewing experience.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for a reliable partner to help you create a customized Android TV app? At **Nimble Acuity**, we're a leading provider of Android app development services with a highly skilled and trained team that uses the best practices and technologies to design and develop functional, scalable, and efficient Android TV applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We help you leverage the power of Artificial Intelligence, Machine Learning, and IoT to create smart and functional solutions that cater to your specific business goals, providing a seamless and engaging experience for your users.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Android TV App Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Android TV App Integration</h4>
                <p>We provide superior-quality integration services to ensure your mobile application works seamlessly with Android TV, offering a wonderful experience for your users across different devices.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">UI/UX Development</h4>
                <p>Our dedicated professionals help you improve the UI/UX strategies for your Android TV app, ensuring it is both intuitive and visually appealing for your clients.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">App Maintenance & Support</h4>
                <p>We provide bespoke support and maintenance services to ensure your Android TV apps are constantly monitored and maintained, keeping them functional and up-to-date.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Development Consulting</h4>
                <p>A properly designed Android TV application can change how users interact with technology. You can consult with our reliable professionals to get expert guidance on your project, addressing any queries or issues with ease.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ISO Certified Company:</strong> As an ISO-certified app development company, we use the best practices to deliver top-notch services that meet international quality standards.</li>
              <li><strong>100% Data Security:</strong> We follow all ISO-approved practices to ensure your personal and project data is completely secure and confidential.</li>
              <li><strong>High-Quality Development:</strong> We use only the best tools and technologies to create and design Android TV apps that are both functional and high-performing.</li>
              <li><strong>Cost-Efficient Rates:</strong> We understand your budget constraints and offer flexible packages that allow you to choose exactly what you need, ensuring a cost-effective solution.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your Smart TV App?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has the resources and trained professionals to help you create amazing Android TV applications that are easily accessible and user-friendly. Choose our services to experience a world of benefits and reliable solutions.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in touch to learn more
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default AndroidTVAppDevelopment;