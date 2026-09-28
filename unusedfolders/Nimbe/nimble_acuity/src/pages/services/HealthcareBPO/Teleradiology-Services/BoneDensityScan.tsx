import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const BoneDensityScan: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Bone Density Scan Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to <strong>error-free bone density scans</strong> and interpret results quickly with 
              <strong> Nimble Acuity</strong>. Our certified specialists leverage the latest tools and deliver 
              accurate reports at competitive prices.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-6xl mb-16">
            <p className="text-gray-700">
              At <strong>Nimble Acuity</strong>, we provide reliable and timely bone density scan interpretation 
              services for healthcare providers, diagnostic centers, and individual practitioners. Our team of 
              skilled radiology professionals ensures precise and fast reporting, helping you make confident 
              treatment decisions.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Bone Density Scan Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Central DEXA Scans:</strong> Detect and assess fracture risks, especially in the hip region, with quick turnaround reporting.</li>
              <li><strong>Peripheral DEXA Scans:</strong> Cost-effective scans for wrists, fingers, legs, and heels, delivered with error-free accuracy.</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Nighthawk Teleradiology Services</li>
              <li>3D Image Processing Services</li>
              <li>CT Interpretation Services</li>
              <li>Emergency Radiology Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible models to fit your budget.</li>
              <li><strong>Information Security:</strong> ISO/IEC 27001:2022 ISMS certified.</li>
              <li><strong>World-class Infrastructure:</strong> Latest tools and secure facilities.</li>
              <li><strong>HIPAA Compliance:</strong> Ensuring patient data confidentiality.</li>
              <li><strong>Superior Quality:</strong> ISO-certified processes for error-free results.</li>
              <li><strong>Dedicated Manager:</strong> Single point of contact for all projects.</li>
              <li><strong>24/7 Support:</strong> Always available for queries and issue resolution.</li>
              <li><strong>Skilled Team:</strong> Experienced radiology experts on board.</li>
              <li><strong>Scalable Services:</strong> Ramp up support as your needs grow.</li>
              <li><strong>Quick Turnaround:</strong> Global delivery centers ensure speed and efficiency.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Ambulance Billing Company:</strong> Delivered quick and reliable charge and demographics entry services to streamline operations.</li>
              <li><strong>DME Billing Support:</strong> Assisted a Tustin-based client with cost-effective billing services, improving accuracy and efficiency.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What Our Clients Say
            </h3>
            <blockquote className="italic text-gray-700 mb-4">
              "Thank you Sooooo much! We appreciate all you have done! You have gone above and beyond and have helped us so very much!"
            </blockquote>
            <p className="text-sm font-semibold text-gray-600">
              Spokesperson, EMR Service Provider, Florida
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Bone Density Scan Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over two decades of experience, <strong>Nimble Acuity</strong> provides precise bone density scan interpretations and a wide range of teleradiology services. 
              Our certified experts ensure accuracy, speed, and reliability—helping you make confident diagnostic decisions.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default BoneDensityScan;
