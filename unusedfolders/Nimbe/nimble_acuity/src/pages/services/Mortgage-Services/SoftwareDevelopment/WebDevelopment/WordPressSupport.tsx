import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WordPressSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              WordPress Support & Maintenance Services
            </h2>
            <p className="text-lg text-gray-600">
              Get seamless WordPress support and maintenance at cost-effective rates, ensuring your site performs flawlessly around the clock.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A WordPress site requires constant support for seamless performance and a great customer experience. Every component, from themes and plugins to core files, plays an important role in ensuring security and smooth operation. **Nimble Acuity** has over 26 years of experience in helping clients run their WordPress sites without facing downtimes or critical issues.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of experts has a proven track record of tackling issues such as malware, spam, and errors with success. They proactively handle critical tasks like timely theme and plugin updates, security upgrades, backups, and general cleanups to keep your WordPress site running optimally at all times.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our WordPress Support and Maintenance Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a premier WordPress support and maintenance service provider, we offer a host of solutions to keep your website secure, fast, and reliable. Some of these services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>WordPress Site Restoration:</strong> We identify and eliminate bugs, malware, or viruses to restore broken or hacked websites, ensuring similar issues do not happen again.</li>
              <li><strong>Core & Plugin Updates:</strong> We make sure your WordPress core files, themes, and plugins are always up to date with the latest versions for optimal security and performance.</li>
              <li><strong>Managed Backups:</strong> We assist with timely backups, both manual and automated, to ensure normalcy can be restored as soon as possible in the event of a crash or hack.</li>
              <li><strong>Page Speed Optimization:</strong> We continuously analyze your website for poor themes, faulty plugins, and other issues to improve page load times and overall performance.</li>
              <li><strong>Malware & Security Monitoring:</strong> We provide 24/7 monitoring to protect your site from malicious codes and fortify it against future attacks.</li>
              <li><strong>Uptime Monitoring:</strong> We proactively monitor the performance and uptime of your website, taking corrective actions quickly to ensure it’s always accessible.</li>
              <li><strong>SEO Audits:</strong> We carry out periodic SEO audits to spot and fix technical issues that can impact your organic search rankings.</li>
              <li><strong>WordPress Consultation:</strong> We offer expert consultation services to help you overcome specific website challenges and implement the right solutions.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients choose us for their WordPress support and maintenance needs for a variety of reasons, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-Effective Service:</strong> We offer various pricing models to provide high-quality services at cost-effective rates.</li>
              <li><strong>Team of WordPress Experts:</strong> Our in-house team has deep knowledge and a proactive approach to handling all WordPress maintenance requirements.</li>
              <li><strong>Proactive Maintenance:</strong> We are driven by the belief of being proactive, ensuring we find and solve issues before they grow into major problems.</li>
              <li><strong>End-to-End Expertise:</strong> We have over 26 years of experience in coding and maintaining WordPress websites, having been exposed to diverse site maintenance requirements.</li>
              <li><strong>24/7 Availability:</strong> With multiple delivery centers across the globe, we provide round-the-clock assistance to ensure issues are sorted as soon as they arise.</li>
              <li><strong>Bulletproof Security:</strong> Our services ensure your WordPress security is robust, guaranteeing maximum risk reduction with continuous monitoring and updates.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready for Seamless WordPress Support?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a well-known provider of **WordPress support and maintenance services**. With over two decades of experience, we take control of all types of issues that can impact your website's performance. From basic support needs to addressing coding challenges, we ensure all your end-to-end requirements are met.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We guarantee faster resolutions at a price that none of our competitors can match. If you have a WordPress support requirement, feel free to contact our experts now.
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

export default WordPressSupport;