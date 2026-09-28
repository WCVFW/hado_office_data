import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const HoloLensAppDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              HoloLens App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Support innovators and product builders with clever apps featuring holographic elements, starting at just $20 per hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, we develop mixed reality apps for both commercial and experimental uses. By combining the power of Holograms and the Internet of Things, we create an immersive environment that works seamlessly with any device. Our apps offer location-based holograms and can be controlled using simple voice commands, eliminating the need for complex environmental configuration or QR codes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our HoloLens app development services offer new experiences that are shaping the way people engage and collaborate. We create state-of-the-art holographic solutions capable of driving operational efficiency in various fields, including training, product development, education, and remote assistance. With extensive experience in development, we are pioneers in creating transformative applications using the Microsoft HoloLens development framework.
            </p>
          </div>

          {/* Solutions Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              HoloLens App Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nimble Acuity is a leading HoloLens app development company that helps various industry stakeholders innovate and envision solutions in three dimensions. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">HoloLens Apps for Training & Simulation</h4>
                <p className="text-gray-700">We develop augmented reality apps with 3D visualization, ideal for training sessions in industries like aviation, healthcare, and engineering.</p>
              </div>
              {/* Solution 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">HoloLens Apps for Education</h4>
                <p className="text-gray-700">Our HoloLens apps support mixed reality features, providing immersive learning experiences for students and teachers. Medical surgeons can even use them to prepare for pre-operative procedures.</p>
              </div>
              {/* Solution 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">HoloLens Apps for Product Builders</h4>
                <p className="text-gray-700">We create product configurators that allow manufacturers to easily implement custom product designs and visualize them with the HoloLens SDK.</p>
              </div>
              {/* Solution 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">HoloLens Remote Support</h4>
                <p className="text-gray-700">Our support services accelerate troubleshooting by bringing critical information into view. This solution allows technicians to conduct virtual field meetings and coordinate tasks step-by-step.</p>
              </div>
              {/* Solution 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">HoloLens Apps for Research</h4>
                <p className="text-gray-700">We help universities with the development of prototypes for their R&D projects, providing custom HoloLens solutions for research purposes.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our accomplished HoloLens app developers have helped businesses reach new heights through innovation and strategic development. By partnering with us, you can gain immensely from the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-Effective Services:</strong> Outsourcing HoloLens app development to us is more affordable than hiring a full-time employee and covering their benefits.</li>
              <li><strong>Exceptional Quality:</strong> Our team of quality assurance experts meticulously tests every aspect of the app before sign-off to ensure it is flawless.</li>
              <li><strong>Swift Turnaround Time:</strong> Our agile model allows for quick changes and a faster launch, providing massive benefits for clients.</li>
              <li><strong>Expert Developers:</strong> HoloLens app development is a complex task. Our team consists of experts who are passionate about delivering tangible success.</li>
              <li><strong>ISO Certification:</strong> We are an ISO 9001:2015 certified service provider, meeting global standards for quality and reliability.</li>
              <li><strong>Scalability:</strong> It's easier and more efficient to scale with us. Our niche development team has extensive experience in handling complex projects.</li>
              <li><strong>Customer Support:</strong> Get prompt customer support with minimal waiting time. Our team handles your concerns on priority via phone, email, and web chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource HoloLens App Development to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity stands out in the market of HoloLens app development companies not only because of our cumulative experience but also because of the great experiences our customers share. We fulfill our clients' wishes no matter how complex they may seem, delivering great outcomes without unreasonable costs. HoloLens development is just one part of our comprehensive suite of mobile app services, so be sure to explore all your options to find what suits your needs and budget.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To learn more about how HoloLens app development services can truly inspire change in your business, contact us now!
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

export default HoloLensAppDevelopmentServices;