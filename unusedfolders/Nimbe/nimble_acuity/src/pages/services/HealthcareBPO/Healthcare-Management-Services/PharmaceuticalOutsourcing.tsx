import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PharmaceuticalOutsourcing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pharmaceutical Outsourcing Services
            </h2>
            <p className="text-lg text-gray-600">
              Spiraling costs, declining R&D productivity, and a fiercely competitive market are just some of the challenges facing the pharmaceutical industry. Partner with <strong>nimble acuity</strong> to overcome these hurdles and forge a strategic alliance that helps you focus on what matters most.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Pharmaceutical outsourcing is on the rise, with leading life sciences companies realizing the benefits of partnering with efficient and dependable service providers. At <strong>nimble acuity</strong>, we provide comprehensive pharmaceutical outsourcing services, helping you meet changing regulatory requirements and accelerate growth.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Pharmaceutical Outsourcing Services
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Pharmaceutical Development</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>GMP and CMC laboratory services</li>
                  <li>Bio analysis services</li>
                  <li>Supply chain solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Manufacturing and Packaging</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Equipment calibration</li>
                  <li>Expert clean room services</li>
                  <li>On-site inspections</li>
                  <li>Problem-solving analysis</li>
                  <li>Counterfeit surveillance</li>
                  <li>Material Science services</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Support Services</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Regulatory and Toxicology consultancy services</li>
                  <li>Pharmaceutical and healthcare services</li>
                  <li>Pharmaceutical auditing</li>
                  <li>Storage and distribution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Pharmaceutical Outsourcing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Strategic Partnership:</strong> We act as a strategic pharma outsourcing partner, allowing you to focus on your core competencies.</li>
              <li><strong>Specialized Expertise:</strong> Gain access to specialized skills and expertise for high performance.</li>
              <li><strong>Cost-Effective:</strong> Our services lead to significant cost savings and reduced burn rates, maximizing your ROI.</li>
              <li><strong>Integrated Solutions:</strong> Get research, development, and manufacturing assistance all under one roof.</li>
              <li><strong>Reduced Business Risk:</strong> Our reliable healthcare consulting and support services help reduce overall business risks.</li>
              <li><strong>Customer-Oriented Approach:</strong> We provide high-quality, flexible, and client-specific services on time.</li>
            </ul>
          </div>

          {/* Stats Section */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Proven Performance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-[#006A7C]">24</p>
                <p className="text-sm text-gray-600">Hours TAT</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#006A7C]">98%</p>
                <p className="text-sm text-gray-600">Accuracy</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#006A7C]">40%</p>
                <p className="text-sm text-gray-600">Cost Reduction</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#006A7C]">300+</p>
                <p className="text-sm text-gray-600">Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#006A7C]">26+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Call to Action - Testimonial */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I want to thank you for the professional way in which you are managing the project and meeting our deadlines."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — CEO, Medical Company, UK
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Pharmaceutical Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              If managing huge volumes of pharmaceutical operations has become tedious, you're facing trouble handling pharma research, or haven't been able to scale up your operations with limited resources, it's time to contact our pharma consultants. Our experts are abreast with the latest pharmaceutical outsourcing best practices and can help you improve your ROI.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to save big on time and money.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PharmaceuticalOutsourcing;