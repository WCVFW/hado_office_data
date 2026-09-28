import React from 'react';
import { Link } from 'react-router-dom';
import SoftwareHeader from '@/pages/services/SoftwareDevelopment/SoftwareHeader';

const ServiceNowSecOps: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow Security Operations Services
            </h2>
            <p className="text-lg text-gray-600">
              We leverage ServiceNow to stay ahead of trends, avoid bottlenecks, and discover automation opportunities.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ServiceNow's Security Operations solution bridges the gap between cybersecurity and IT by allowing you to swiftly discover, monitor, and remediate risks before they disrupt your infrastructure. You can vastly increase your security response time and efficiency by leveraging ServiceNow's smart workflows and automation features.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading global ServiceNow Operations solution provider that helps you decrease the risk of incorrect implementation and administration. We have a team of dedicated ServiceNow developers and experts to provide timely consulting and aid with your security posture.
            </p>
          </div>

          {/* Our Security Operations Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              ServiceNow Security Operations Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Vulnerability Response</h4>
                <p>
                  We contextualize scan data by comparing it to information in your CMDB and vulnerability scanning tools. The discovered vulnerabilities are then filtered and prioritized based on business impact, allowing security agents to swiftly repair critical vulnerabilities.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Security Threat Mitigation</h4>
                <p>
                  Our team uses threat intelligence to augment your security incident archives, providing more pertinent data via integrations with security analysis tools. This gives security experts more expertise in identifying deep-lying risks and determining if any events are correlated to a targeted attack.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Configuration Support</h4>
                <p>
                  We use Configuration Compliance to detect susceptible assets that are not configured per your security standards. We then prioritize them based on their prospective business effect, aiding in the diagnosis and remediation of assets to enhance your security posture.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Security Incident Management</h4>
                <p>
                  We use ServiceNow to isolate suspicious activity from various sources. We then analyze them using your CMDB and assign them to security analysts. Our team uses a simple workspace to accelerate events from analysis to resolution.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Security Perimeter</h4>
                <p>
                  We use ServiceNow SecOps to anonymously exchange suspicious data with a specified network of organizations to discover and eradicate attacks quicker. This can automatically initiate the remediation procedure as a security event.
                </p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Process for ServiceNow Security Operations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">1. Requirement Analysis</h4>
                <p>
                  Our team starts by analyzing the feasibility of your request and then assigns the work to the most appropriate team.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">2. Design & Development</h4>
                <p>
                  We validate whether SecOps procedures match ServiceNow's best practices, therefore avoiding extensive modifications.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">3. Testing</h4>
                <p>
                  We begin the testing process by detecting gaps, performance issues, errors, and other concerns. Any issues that arise will be addressed.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">4. Update, Support & Maintenance</h4>
                <p>
                  We look closely into your SecOps procedures to rule out flaws and tailor ServiceNow appropriately for optimal results.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for SecOps Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Affordable Support Services:</strong> You have total control with our customizable pricing.
              </li>
              <li>
                <strong>High-Quality Outcome:</strong> As a leading Security Operations service provider, we give our clients the finest available assistance.
              </li>
              <li>
                <strong>Experienced Consultants:</strong> When you work with us, you are collaborating with highly qualified people that have years of expertise.
              </li>
              <li>
                <strong>ISO Compliant:</strong> We are an ISO-certified service provider, adhering to all standards for quality and security.
              </li>
              <li>
                <strong>Secure Data Management:</strong> Your data security is guaranteed with cutting-edge data management technology.
              </li>
              <li>
                <strong>Quick Turnaround Time:</strong> We are able to deliver rapid results, demonstrating our adaptability in fulfilling expectations.
              </li>
              <li>
                <strong>Scalable Solutions:</strong> Our services may give scalable solutions that boost your company's efficiency.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Enhance Your Security Posture?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** provides a wide selection of ServiceNow solutions that assist businesses to develop more quickly by providing best-in-class solutions. If you want Security Operations and maintenance that is reliable, efficient, and cost-effective, look no further.
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

export default ServiceNowSecOps;