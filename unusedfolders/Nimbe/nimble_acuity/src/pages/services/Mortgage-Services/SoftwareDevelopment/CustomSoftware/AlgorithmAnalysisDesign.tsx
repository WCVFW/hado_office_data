import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; 

const AlgorithmAnalysisDesign: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-18">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Algorithm Analysis and Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Get theoretical estimates of the resources required for your computational challenges by a thorough analysis of best, worst, and average cases.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we specialize in computational complexity theory to provide in-depth algorithm analysis and design services. Our expert analysts provide theoretical estimates for the resources critical to solving your computational challenges. We understand that each algorithm has a unique trait, and our expertise ensures you select the best-suited one to address your specific needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With decades of experience, we are a leading provider of algorithm analysis and design services. Our team works meticulously to analyze your problems and provide resource estimates and algorithms that are unique to each challenge, helping you build highly efficient and scalable systems.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Algorithm Analysis and Design Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Algorithm Optimization</h4>
                <p>We perform stochastic optimization by comparing various solutions to determine the most optimized algorithm for your application, applying specific rules and observations to improve performance.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Algorithm Parallelization</h4>
                <p>We analyze the best and worst-case scenarios by performing parallel computation with inputs from different data streams, then review the output to optimize for better performance.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Collaborative Filtering of Algorithms</h4>
                <p>Our team finds correlations and similarities from a family of algorithms to identify the best fit for your application, ensuring the solution works seamlessly with your data.</p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Algorithm Analysis and Design Process
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-center text-gray-700">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">01</span>
                <p className="mt-2">Requirement Gathering</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">02</span>
                <p className="mt-2">Framework & Approval</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">03</span>
                <p className="mt-2">Team & Tools Setup</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">04</span>
                <p className="mt-2">Algorithm Analysis</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">05</span>
                <p className="mt-2">Execution of Changes</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">06</span>
                <p className="mt-2">Post-Implementation Analysis</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">07</span>
                <p className="mt-2">Reporting</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-effective Pricing:</strong> We offer attractive and transparent pricing models that provide exceptional value, helping you save on your development budget.</li>
              <li><strong>Rapid Turnaround Time (TAT):</strong> Our efficient processes and global delivery centers ensure that your project is completed with the quickest possible turnaround times.</li>
              <li><strong>Scalable Solutions:</strong> Our services are designed to be highly scalable, allowing you to easily adjust resources and bandwidth to meet your growing needs.</li>
              <li><strong>ISO-Certified Processes:</strong> As an ISO-certified service provider, we adhere to the highest standards of quality and reliability in every project we undertake.</li>
              <li><strong>100% Data Security:</strong> We prioritize your data security and confidentiality with robust, highly secure systems that protect your information throughout the entire process.</li>
              <li><strong>Round-the-clock Support:</strong> Our dedicated 24/7 support team is available via phone, email, or webchat to assist you with any concerns.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Algorithms?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has extensive experience in software development, delivering exceptional results that comply with your service level agreements (SLAs). Let us help you select and design the perfect algorithm for your business challenges.
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

export default AlgorithmAnalysisDesign;