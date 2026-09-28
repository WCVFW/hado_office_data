import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const GatsbyDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Gatsby Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Leverage the power of Gatsby to build blazing-fast, high-performing websites. Partner with us to catalyze your growth with expert development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we believe Gatsby has revolutionized web development. It’s an ideal tool for creating websites with incredible speed and efficiency, significantly reducing development time. While Gatsby is a static site generator, its feature-rich capabilities make it a powerful choice for modern web applications. To fully harness the benefits of Gatsby, you need an experienced and knowledgeable team.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our in-house team of passionate web developers are thoroughly trained to build responsive, customized websites. With a deep understanding of Gatsby, we’ve successfully created impressive sites for clients across diverse industries. By partnering with us, you can offload your web development worries and focus on your core business operations, confident that your project is in the hands of top-tier professionals.
            </p>
          </div>

          {/* Gatsby Features */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why We Choose Gatsby
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">High Performance</h4>
                <p>Gatsby is known for its speed. Developing your website with Gatsby ensures a lightning-fast user experience, which is crucial for making a great first impression and retaining your audience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Built on React</h4>
                <p>As a React-based tool, Gatsby leverages the speed, simplicity, and scalability of the popular open-source JavaScript library. This makes it an excellent choice for developing complex websites and large-scale web applications.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Robust Plugin System</h4>
                <p>Gatsby’s well-architected plugin system provides extensive support for everything from data extraction to content transformation. With a vast library of existing plugins, we can achieve almost any functionality. If a specific plugin doesn't exist, our team can easily write a new one for your unique needs.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Incredible Versatility</h4>
                <p>Our Gatsby development services are ideal for a wide range of projects, including company websites, blogs, and marketing sites. The large and active community also makes it easy to troubleshoot and maintain the site post-launch.</p>
              </div>
            </div>
          </div>

          {/* Our Development Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Development Process
            </h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">01.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Requirement Analysis</h4>
                  <p>We begin by understanding your specific needs to align our services with your goals. We'll provide a detailed cost estimate and a project timeline before proceeding with development.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">02.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Planning & Design</h4>
                  <p>Our team of experts will create a comprehensive plan and a visual layout for your website. We'll work closely with you during this phase to incorporate your feedback and suggestions into the design.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">03.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Development</h4>
                  <p>Once the layout is finalized, we proceed with coding and developing the website, using Gatsby.js to seamlessly integrate all the elements and bring your vision to life.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">04.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Quality Assurance & Deployment</h4>
                  <p>After development, we perform intensive testing to ensure the website is bug-free, consistent, and operates smoothly. Once it passes all quality checks, we handle the final deployment to get your site live.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> We offer high-quality Gatsby development solutions at competitive prices that fit your budget.</li>
              <li><strong>High-quality Services:</strong> As an ISO-certified company, we adhere to industry-grade quality standards and methodologies to deliver uncompromised results.</li>
              <li><strong>Experienced Developers:</strong> Our team undergoes regular training to stay ahead of the curve, ensuring you receive unbeatable services from skilled professionals.</li>
              <li><strong>Quick Turnaround Time:</strong> Our streamlined processes and robust infrastructure enable us to deliver your project efficiently and well within the estimated timeframe.</li>
              <li><strong>Single Point of Contact:</strong> We assign a dedicated project manager to each client, providing a hassle-free communication channel for all your queries and updates.</li>
              <li><strong>24/7 Assistance:</strong> Our customer support team is available around the clock to provide timely help and solutions to any questions or concerns you may have.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Gatsby Site?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has a proven track record of creating outstanding, fast, and scalable websites with Gatsby. We understand your unique requirements and use the platform's incredible features to bring your vision to life.
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

export default GatsbyDevelopment;