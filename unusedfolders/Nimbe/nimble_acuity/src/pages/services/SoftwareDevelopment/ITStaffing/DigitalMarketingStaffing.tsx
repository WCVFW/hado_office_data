import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const DigitalMarketingStaffing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              IT Staffing Services for SEO, SEM & SMO
            </h2>
            <p className="text-lg text-gray-600">
              If the Internet is one of your primary marketing channels, you need experts to enhance your online presence. Hire IT staffing services for Full Time Equivalent (FTE) experts from **Nimble Acuity** for Search Engine Optimization (SEO), Search Engine Marketing (SEM), and Social Media Optimization (SMO).
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Digital Marketing Services
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We provide highly skilled professionals to help you navigate the competitive digital marketing landscape and achieve your business goals.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <ul className="list-disc list-inside space-y-8 text-gray-700">
              <li>
                <strong className="text-xl text-[#006A7C] block mb-2">Search Engine Optimization (SEO)</strong>
                <p className="leading-relaxed mb-2">
                  Improving your company's web presence and increasing quality traffic is what SEO is all about. At **Nimble Acuity**, our SEO professionals:
                </p>
                <ul className="list-disc list-inside ml-8 space-y-2">
                  <li>Thoroughly understand the human and machine aspects of online search.</li>
                  <li>Are capable of building online marketing strategies based on text, image, video, and other media.</li>
                  <li>Have the ability to identify the underlying coding that controls on and off-page components.</li>
                  <li>Are conversant with a full range of SEO tools, including keyword selection, link building, and PPC models.</li>
                </ul>
              </li>

              <li>
                <strong className="text-xl text-[#006A7C] block mb-2">Search Engine Marketing (SEM)</strong>
                <p className="leading-relaxed mb-2">
                  If you want to increase your organization's visibility in search engine results (SERPs) through on-page, off-page, and paid marketing, our dedicated SEM professionals can help. Our SEM experts enhance the effectiveness of your online marketing strategy and ensure you get the best value for your investment.
                </p>
                <p className="leading-relaxed">
                  Our IT staffing services for SEM professionals are experts in paid inclusion, PPC, contextual advertising, and other SEM techniques. They have extensive experience working with these tools for global customers, enabling them to implement an appropriate online marketing approach that will certainly work for you.
                </p>
              </li>

              <li>
                <strong className="text-xl text-[#006A7C] block mb-2">Social Media Optimization (SMO)</strong>
                <p className="leading-relaxed mb-2">
                  Another increasingly important dimension of digital marketing is SMO. We have SMO professionals available on a full-time basis who can manage your online reputation on all major social networking platforms, assisting with promotional activities such as:
                </p>
                <ul className="list-disc list-inside ml-8 space-y-2">
                  <li>Updating profiles on social networking sites.</li>
                  <li>Blogging and microblogging.</li>
                  <li>Participating in online discussion groups effectively.</li>
                </ul>
                <p className="leading-relaxed mt-2">
                  Our SMO experts can also help you with market research, product and customer satisfaction feedback, and managing public relations through social media.
                </p>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our SEO, SEM, and SMO professionals will function as full-time employees for you, working eight hours a day, five days a week. We provide the workspace and all the HR and administrative support, while you only need to manage their day-to-day performance to get the desired results.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Dedicated Staff:</strong> Get full-time experts who are an extension of your team.</li>
              <li><strong>High-Quality Services:</strong> Our professionals are highly skilled and knowledgeable in all aspects of digital marketing.</li>
              <li><strong>Cost-Effective:</strong> Save on administrative overheads and in-house staffing costs.</li>
              <li><strong>Focus on Core Business:</strong> Our specialists manage your digital marketing campaigns while you focus on your core business.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Enhance Your Online Presence?
            </h3>
            <p className="text-gray-700 mb-6">
              Contact us to outsource your digital marketing initiatives. Our specialists will work on your campaigns full-time, delivering the results you need.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Find out more about our Staff Augmentation Services and contact us for IT outsourcing for SEO, SEM, and SMO.
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

export default DigitalMarketingStaffing;