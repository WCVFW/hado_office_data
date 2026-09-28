import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const RestAPIDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              REST API Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build robust, custom RESTful APIs for cloud and non-cloud environments without the need for additional software or libraries.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we have extensive experience in REST API development for web and mobile applications. Our developers build robust APIs that are not platform-dependent, allowing for seamless integration with other systems. This makes REST API one of the most flexible and scalable solutions capable of transforming your business processes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are the ideal partner for businesses that require microservices for new or existing projects. We help you accelerate the rollout of your solutions using modern frameworks like Node.js and AngularJS. With our decades of experience, we are the go-to REST API development services company for projects of any scale.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our REST API Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Microservice Development</h4>
                <p>We develop microservices that enhance the reliability of your internal systems and accelerate development, making integration, deployment, and maintenance hassle-free for you.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Private API Development</h4>
                <p>Our top-notch expertise in building private APIs helps streamline your internal software development process and provides increased capabilities for your web and mobile applications.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Public API Development</h4>
                <p>Having a public API opens new growth opportunities. We provide a custom API-as-a-Service solution that delivers value by speeding up product deployment and offering valuable datasets.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">API Integration Services</h4>
                <p>We ensure seamless integration with third-party APIs to extend the features and data of your products, leveraging both modern and legacy APIs to enhance functionality.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Scalable API Architecture Design</h4>
                <p>We help you adopt a scalable architecture that can handle thousands of requests, ensuring your product is built for early adoption and long-term success on the cloud.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Legacy API Modernization</h4>
                <p>We help you transition from legacy APIs (e.g., SOAP, XML) to modern RESTful APIs with elegant UI and transport protocols, fixing functionality gaps and enhancing agility.</p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our REST API Development Process
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-gray-700">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">01</span>
                <p className="mt-2">Requirement Gathering</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">02</span>
                <p className="mt-2">Challenge Assessment</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">03</span>
                <p className="mt-2">Development & Budgeting</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">04</span>
                <p className="mt-2">Testing & Validation</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">05</span>
                <p className="mt-2">Project Sign-off & Reporting</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">06</span>
                <p className="mt-2">Release Support</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Customized & Cost-effective:</strong> We offer custom REST API development services that are tailored to your budget, providing maximum value without compromising on quality.</li>
              <li><strong>High-Quality Standards:</strong> Quality is never an afterthought. We validate every step of the workflow to ensure a flawless and robust final deliverable.</li>
              <li><strong>Experienced Professionals:</strong> Our team of skilled REST API developers is highly knowledgeable in the latest methodologies and tools required to meet industry standards.</li>
              <li><strong>Maintainable & Scalable Code:</strong> Our methodology focuses on building code that is easy to maintain and can scale seamlessly with your growing business demands.</li>
              <li><strong>Agile Development:</strong> Our development approach is based on the Agile model, which ensures that your project is completed efficiently and within a quick turnaround time.</li>
              <li><strong>Strong Architecture:</strong> We take a selective and strategic approach to architecture, ensuring your REST API solution is built on a powerful and reliable foundation.</li>
              <li><strong>Close-knit Customer Support:</strong> We provide dedicated customer support via phone, email, and web chat to ensure you are completely satisfied with our solutions.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your REST API Solution?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has a unique ability to understand and deliver on custom software development requirements. Our skilled developers think outside the box to create innovative solutions that have made us a leader in the industry. Let us help turn your idea into reality.
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

export default RestAPIDevelopment;