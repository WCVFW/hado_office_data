import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WearableAppDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Wearable App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Partner with our team of expert app developers to get access to innovative and intuitive applications for wearable devices and other smart technologies.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Technology is now an integral part of our daily lives, and wearable technology has seamlessly fused humans and tech together. At Nimble Acuity, we help businesses transform through the endless possibilities of wearable technology by offering tailored and ingenious solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We understand your needs, design prototypes to test concepts, and validate them before production. We work as your strategic and technological expert partners, sharing the journey of opportunities in wearable solutions.
            </p>
          </div>

          {/* Solutions Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Wearable App Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Wearable devices can be incorporated into clothing or worn as accessories. We help clients develop the following types of wearable apps:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Smartwatch Apps</h4>
                <p className="text-gray-700">We develop apps that work as an extension of mobile devices, providing seamless integration and functionality on smartwatches.</p>
              </div>
              {/* Solution 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Fitness Tracker Apps</h4>
                <p className="text-gray-700">Our apps help users track health metrics like heart rate, blood pressure, and physical activities, providing valuable data on their well-being.</p>
              </div>
              {/* Solution 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Healthcare Apps</h4>
                <p className="text-gray-700">We create apps for diagnostic and monitoring devices, therapeutic devices, and other health-focused wearables to improve patient care.</p>
              </div>
              {/* Solution 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">IoT-based Wearable Apps</h4>
                <p className="text-gray-700">We can develop apps that sync with IoT devices, allowing users to control appliances and lights from their wearables.</p>
              </div>
              {/* Solution 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Virtual Reality Apps</h4>
                <p className="text-gray-700">Using our expertise, you can create immersive VR apps for gaming, appliance visualization, and other engaging experiences.</p>
              </div>
              {/* Solution 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Wireless Payment Apps</h4>
                <p className="text-gray-700">We have the skills to develop secure and convenient apps that enable wireless payments at stores from your wearable device.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Having been in the industry for so long, we understand each client's requirements with ease. Here are some of the key reasons our services are the best in the market:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>In-depth Knowledge:</strong> Our extensive team has a passion for wearables and mastery in developing apps using watchOS Native App SDK and Android Wearable SDK.</li>
              <li><strong>Fully Functional Apps:</strong> We have a proven track record of designing and developing best-in-class wearable apps that are fully functional and provide a smooth user experience.</li>
              <li><strong>Responsive Design & Prototyping:</strong> We take pride in our responsive app designs that are functional across varying screen sizes, ensuring a great user experience.</li>
              <li><strong>Cost-effective Development:</strong> We provide great value for your investment with competitive pricing and a commitment to delivering on time and within budget.</li>
              <li><strong>Seamless Upgrades:</strong> We offer app upgradation services to ensure your apps stay compatible with the latest OS versions and unlock new features.</li>
            </ul>
          </div>

          {/* Additional Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Benefits of Choosing Us
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing wearable app development to Nimble Acuity provides a series of advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Competitive Prices:</strong> Our services come at a reasonable cost, providing a high return on investment.</li>
              <li><strong>Data Security:</strong> We take data security seriously, ensuring all your information is kept safe at all times.</li>
              <li><strong>Single Point of Contact:</strong> We assign a dedicated project manager who will be your single point of contact for all your needs.</li>
              <li><strong>Easily Scalable Services:</strong> We can easily scale the number of resources on your project as your needs grow.</li>
              <li><strong>Seamless Support & Maintenance:</strong> We provide 24/7 support and ongoing maintenance to keep your applications up-to-date and functional.</li>
              <li><strong>Quick Turnaround Time:</strong> Our global delivery centers give us a time zone advantage, enabling us to deliver high-quality services within a quick turnaround time.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Wearable App Development to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading wearable app development services provider with expertise in a range of software development services. We are always eager to hear from you. With our services, your business is sure to witness a surge in innovation and user engagement.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Don't wait any longer. Get in touch with us today to discuss the ideal course of action for your wearable app demands and enjoy the best-in-class development services.
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

export default WearableAppDevelopmentServices;