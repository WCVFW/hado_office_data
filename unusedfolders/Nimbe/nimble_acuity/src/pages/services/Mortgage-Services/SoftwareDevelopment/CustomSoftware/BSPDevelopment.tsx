import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const BSPDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Board Support Package (BSP) Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Discover the easiest and most efficient way to start up and run your embedded processor with Nimble Acuity's BSP development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A board support package (BSP) is the software that holds hardware-specific drivers and the OS together. At Nimble Acuity, we provide comprehensive BSP development services for various leading platforms and processors, allowing you to choose the best architecture for your products.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our certified experts are well-versed in the latest technologies like AMP, Intel, ARM, and Qualcomm. We leverage the best industry tools and practices to build the finest BSP products for various embedded systems, alleviating architectural constraints for error-free system performance.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive BSP Development Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Bootloader and Kernel Porting:</strong> We provide comprehensive OS porting support for all leading embedded operating systems, including Linux, Android, and WinCE.</li>
              <li><strong>Device Driver Development:</strong> We help you build custom device drivers for a wide range of embedded devices and peripherals, with updates to support new features and hardware.</li>
              <li><strong>File System Building:</strong> We can help you generate content for the root file system to facilitate the seamless running of programs on your embedded system.</li>
              <li><strong>Boot Time Optimization:</strong> We tune your bootloader for the fastest performance by recompiling your kernel or removing unnecessary functionalities.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined BSP Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Understanding Your Needs:</strong> We analyze your hardware, software, and OS to create a customized BSP package tailored to your requirements.</li>
              <li><strong>Resource Allocation:</strong> Our team of designers and engineers work together to come up with a systematic action plan, a stipulated timeframe, and the costs involved.</li>
              <li><strong>Embedded BSP Development:</strong> We leverage agile methodologies and cross-platform technologies to create a customized Linux and Android BSP package for smooth performance.</li>
              <li><strong>Quality Check:</strong> Our quality control team checks for bugs and makes rectifications to ensure a flawless BSP package.</li>
              <li><strong>Delivery:</strong> We deliver the carefully reviewed and developed BSP project well within the promised timeframe.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Instant Access to Certified Experts:</strong> Our team has extensive experience in designing and developing customized BSP packages.</li>
              <li><strong>Cost-Effective Pricing:</strong> Our services are reasonably and competitively priced to be accessible to all.</li>
              <li><strong>State-of-the-Art Infrastructure:</strong> We invest in the latest technology and agile methodologies to provide superlative services.</li>
              <li><strong>Quick Turnaround Time:</strong> Our seasoned professionals utilize their profound skills to deliver services quickly and efficiently.</li>
              <li><strong>Single Point of Contact:</strong> A dedicated accounts manager acts as your single point of contact, keeping you updated on all developments.</li>
              <li><strong>Complete Data Security:</strong> Our stringent data protection norms and ISO-compliant processes ensure the complete safety and privacy of your data.</li>
              <li><strong>24/7 Assistance:</strong> Our customer service executives are available around the clock to ensure instant availability and quick resolution of your queries.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your Custom BSP?
            </h3>
            <p className="text-gray-700 mb-6">
              Our experts at Nimble Acuity provide highly customized BSP development services that are fully compatible with most operating systems. We can help you with everything from developing bootloaders to designing device drivers.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Let us know your BSP development requirements, and we'll get back to you with a customized plan tailored just for you.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default BSPDevelopment;