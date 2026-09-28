import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const DigitalMarketingServicesForBanks: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Digital Marketing Services for Banks
            </h2>
            <p className="text-lg text-gray-600">
              Work with us, a digital marketing expert, to make the most out of the digital space and enhance your brand image.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you finding it challenging to transition to digital marketing to establish your mortgage business? Tapping into digital marketing is crucial for understanding your market better, identifying potential customers, and creating brand awareness. If you want to build a strong digital presence, partnering with a professional mortgage digital marketing company can be a game-changer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we can make your transition to digital marketing seamless and add value to your business. Our team of digital marketing professionals gains a deep understanding of your business to ensure our services align perfectly with your needs and goals.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Digital Marketing Solutions for Banks
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer a range of digital marketing services that help you focus on different areas of online marketing to achieve the outcomes you desire. Our services for mortgage banks include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>SEO Services:</strong> Our search engine optimization services help your website rank better over time using both online and offline strategies.
              </li>
              <li>
                <strong>Social Media Marketing:</strong> Our social media experts leverage platforms to interact with potential customers, build brand awareness, and increase website traffic.
              </li>
              <li>
                <strong>Content Marketing:</strong> We use online materials like social media posts, videos, images, and blogs to add value to your digital marketing efforts.
              </li>
              <li>
                <strong>Pay-Per-Click (PPC) Marketing:</strong> Investing in our PPC services can help you gain better website traffic by paying an advertiser for every click on your ad link.
              </li>
              <li>
                <strong>Email Marketing:</strong> For direct marketing strategies, we can help you leverage email marketing to promote your bank services and educate your audience.
              </li>
              <li>
                <strong>Video Marketing:</strong> Our services help you create well-made videos to grab your audience's attention, build an emotional connection, and enhance your brand value.
              </li>
              <li>
                <strong>Web Design and Development:</strong> We can transform your website to be more user-friendly and navigable, and we can also create and maintain a new website that perfectly represents your business.
              </li>
              <li>
                <strong>Online Reputation Management (ORM):</strong> Our team actively monitors brand mentions and efficiently addresses any negative comments to ensure your brand's reputation is well-managed.
              </li>
              <li>
                <strong>Reporting and Analytics:</strong> Our services ensure we are moving in the right direction with our digital marketing efforts, allowing us to modify our strategy based on what works best.
              </li>
              <li>
                <strong>Lead Generation Services:</strong> We identify potential customers and convert these leads into paying customers through targeted strategies.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you want to make your financial institution more competitive in the local market, the best option is to outsource your digital marketing services to us. Here are some of the benefits we provide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Experienced Team:</strong> We have vast experience in providing effective, data-driven digital marketing for banks.
              </li>
              <li>
                <strong>Focused Approach:</strong> We generate more than satisfactory results for our clients by staying on track with banking industry trends.
              </li>
              <li>
                <strong>Transparency:</strong> We maintain proactive transparency in our processes and provide you with updates through timely reports.
              </li>
              <li>
                <strong>Cost-Effective Pricing:</strong> Our services are available at affordable rates, making it possible for clients with different budget ranges to partner with us.
              </li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>For Mortgage:</strong> We help your mortgage business achieve better reach and brand appeal to attract more customers.
              </li>
              <li>
                <strong>For Brokers:</strong> We help you reach your target audience in the most efficient ways using digital marketing.
              </li>
              <li>
                <strong>For Lenders:</strong> We use our experience working with lenders to add a boost to your marketing efforts.
              </li>
              <li>
                <strong>For Credit Unions:</strong> Our online advertising campaigns and SEO strategies can help grow your membership.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Mortgage Digital Marketing for Banks to Us
            </h3>
            <p className="text-gray-700 mb-6">
              Banks and other financial institutions often have a rigid structure, which can make it daunting to incorporate digital marketing into their processes. However, as professional digital marketing service providers, we can help you overcome these roadblocks and efficiently engage with customers and generate quality leads.
            </p>
            <p className="text-gray-700 mb-6">
              Working with us can help you reach more prospects and generate higher-quality leads.
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

export default DigitalMarketingServicesForBanks;