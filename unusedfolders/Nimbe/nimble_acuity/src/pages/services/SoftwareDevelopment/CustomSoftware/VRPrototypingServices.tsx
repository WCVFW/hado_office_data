import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const VRPrototypingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              VR Prototyping Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to world-class virtual reality expertise to create outstanding prototypes at competitive prices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The growth of virtual prototyping has led to the incorporation of technological advancements in the business world. Are you on the lookout for a proper VR prototype for your business? Do you want experienced and skilled professionals who will be able to handle your requirements? Well, the best bet would be to partner with a reliable service provider to offer these benefits.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is known for providing amazing VR services to clients who want reliable professionals to take care of their projects. We have all the skilled virtual reality prototyping specialists who will handle all your requirements with ease.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              VR Prototyping Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Architecture Design</h4>
                <p className="text-gray-700">We have a professional team for providing clients with error-free and accurate VR design services that are essential for their prototyping needs. Our services can assist in planning, model creation, simulation, and much more.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Model Creation</h4>
                <p className="text-gray-700">Our skilled and experienced professionals will create the best virtual models for your projects. Using advanced software for virtual reality prototyping, we can create superior-quality models.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Full VR Prototype</h4>
                <p className="text-gray-700">We also provide assistance to clients with the creation of full virtual prototypes. We will take care of all your needs for VR solutions such as planning, designing, modeling, and assembling, as well as delivering the final prototype.</p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for VR Prototyping Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing:</strong> We provide the most affordable rates for our clients. Our pricing options are based on the budget that our clients have.</li>
              <li><strong>Data Security:</strong> Nimble Acuity is an ISO/IEC 27001:2022 ISMS certified company, which ensures that every piece of information and data shared with our team will be kept confidential.</li>
              <li><strong>Best Services:</strong> As an ISO-certified VR prototyping company, we take pride in providing the best quality services to our clients that will surely impress everyone.</li>
              <li><strong>Amazing Infrastructure:</strong> We understand how important it is to have great infrastructure, and that is exactly what we provide. Using the latest VR technologies and tools, we ensure amazing results for our clients.</li>
              <li><strong>Skilled Professionals:</strong> We have a team of extremely talented and skilled experts who have enough experience with virtual reality prototyping services and will be able to handle the complexities of the projects.</li>
              <li><strong>Quick Turnaround Time:</strong> We deliver super-fast results with projects as part of our virtual reality prototyping services.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Create an Immersive VR Prototype?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been a leading VR prototyping service provider. We have been offering some of the most amazing VR services to clients globally. With our advanced technologies and skilled professionals, we will be successful in delivering the best results for your business. We have all the resources and talent required for superior quality virtual reality prototype services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Simply get in touch with us and we will provide you with a custom quote.
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

export default VRPrototypingServices;