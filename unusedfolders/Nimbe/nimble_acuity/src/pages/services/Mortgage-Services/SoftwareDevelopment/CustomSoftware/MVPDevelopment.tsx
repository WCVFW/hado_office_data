import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MVPDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              MVP Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide full-stack, scalable, and customized MVP development services that help you validate your digital product idea.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Before launching a new digital product, it's crucial to test its viability, feasibility, and market potential. When faced with budget and resource constraints, a Minimum Viable Product (MVP) is the perfect solution. It helps you validate your idea and optimize your path toward a successful, well-received product.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we have extensive experience in MVP development. Our team helps you build agile products that are ready to delight customers from day one. We start with product idea validation, analyze user feedback, and iterate to ensure the final product meets market expectations and is poised for success.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our MVP Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Strategy & Roadmap Development</h4>
                <p>We create a strategic plan to validate your product idea through in-depth analysis, using top-tier technologies and tools. We also provide expert consultation to help you position your product effectively in the market.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Prototype Design</h4>
                <p>Our expert UX designers and software engineers build custom prototypes of your product concept that you can showcase to investors and stakeholders, creating a stunning experience that reflects your vision.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Single-Feature MVP</h4>
                <p>If your product has one killer feature, we can facilitate MVP app development that focuses solely on that key functionality to capture the market's attention without any distractions.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Pilot MVP Development</h4>
                <p>We create a usable first version of your MVP for a market test run. This pilot product undergoes a series of internal checks before it's ready for its ideal pilot audience to provide valuable feedback.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">MVP App Development</h4>
                <p>We specialize in building high-performing, custom MVP apps for various sectors. Our developers are experts in front-end, back-end, and full-stack development using all the latest programming languages.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Web App MVP Solutions</h4>
                <p>To help you save on costs, we can develop web apps using modern JavaScript frameworks like React Native, PhoneGap, Ionic, and Cordova, providing an optimal solution for your business.</p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our MVP Development Process
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center text-gray-700">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">01</span>
                <p className="mt-2">Discovery & Need Assessment</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">02</span>
                <p className="mt-2">Devising & Analysis</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">03</span>
                <p className="mt-2">First Design & Prototyping</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">04</span>
                <p className="mt-2">Development</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">05</span>
                <p className="mt-2">MVP Launch & Bug Elimination</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-effective Pricing:</strong> Our pricing packages are completely flexible and can be customized to suit your budgets and unique needs.</li>
              <li><strong>Advanced Technical Expertise:</strong> Our team of DevOps engineers, developers, and designers are experts in their fields, ensuring your ideas are shaped into reality with perfection.</li>
              <li><strong>Agile Process:</strong> We follow an agile methodology with constant review and iteration to ensure your MVP is always up-to-date and ready for market.</li>
              <li><strong>Adaptable & Scalable Solutions:</strong> Our team adapts quickly to your work culture and can easily expand to meet the evolving needs of your project.</li>
              <li><strong>Transparent & Responsible:</strong> We ensure complete transparency in our work processes, with full accountability from our team for fair and ethical practices.</li>
              <li><strong>24/7 Support:</strong> With a global presence, we offer round-the-clock customer support, so you can reach us anytime, anywhere.</li>
              <li><strong>Fast Turnaround Time:</strong> We offer the quickest delivery times in the industry, making us a trusted partner for MVP development services.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Launch Your MVP?
            </h3>
            <p className="text-gray-700 mb-6">
              With a strategically built MVP, you can quickly launch your idea, analyze the results, and scale your project. At Nimble Acuity, we specialize in building lean products to test the market and stay agile to help your business scale. If you are looking for a reliable technology partner to turn your ideas into a successful reality, contact us today.
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

export default MVPDevelopment;