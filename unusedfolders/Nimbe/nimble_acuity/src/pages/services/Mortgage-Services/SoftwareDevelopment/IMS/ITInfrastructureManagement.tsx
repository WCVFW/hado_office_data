import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ITInfrastructureManagement: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            IT Infrastructure Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Scale and optimize your IT infrastructure to eliminate process inefficiency and boost productivity with our IT infrastructure management services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Survival in this digital era has compelled businesses worldwide to embrace newer technologies and build intuitive systems to leapfrog their competitors. Today, the backbone of an enterprise is its IT infrastructure. However, most organizations struggle to understand this and fail to move their business forward.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity provides managed infrastructure services that help you modernize your IT infrastructure and deliver value. Inefficiency in your IT infrastructure is sure to result in reduced productivity. To prevent this, we offer the most effective infrastructure management services. Our solutions help you stay up to date with market trends and implement the right changes to drive innovation across your IT landscape.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            IT Infrastructure Management Solutions We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide top-tier global infrastructure and management services that precisely address all your IT needs, including cloud infrastructure management services. Some of the key managed infrastructure services we offer include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IaaS (Infrastructure as a Service)</h4>
                                <p>
                                    Get all the essential storage, networking, and computing resources on demand with IaaS. We help you scale your processes as per specific project requirements and plan for support, recovery, and business continuity.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IT Risk and Security Management</h4>
                                <p>
                                    The disruptive digital era demands robust security. Leverage our IT risk and security management solutions to safeguard your assets, customer portfolios, and employee documents.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IT Support Services</h4>
                                <p>
                                    Help your customers troubleshoot problems with prompt and efficient IT Support services. We develop a single, integrated platform that helps you track issues and provide superior support.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IMS Application Support Services</h4>
                                <p>
                                    Build hierarchical information management systems and databases with our IMS application support. This helps you determine the performance of your business activities and monitor business events.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network Infrastructure Management</h4>
                                <p>
                                    Get single-console, agentless monitoring solutions for your network infrastructure. Efficient network management helps you make informed IT decisions to ensure consistent productivity and prevent disasters.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Managed IT Services</h4>
                                <p>
                                    Save on unnecessary overhead and improve your operational efficiency with our managed IT solutions. We help you boost your performance and increase scalability.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IT Audit Services</h4>
                                <p>
                                    Perform external and internal network scans, assess risks, and get objective reviews of your IT infrastructure. Based on a risk evaluation strategy, we conduct an in-depth audit of your IT infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our 3-step Approach */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our 3-step Approach to Seamless Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following multi-step process illustrates our professional approach to implementing IT infrastructure management solutions:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Capacity Planning:</strong> We analyze your production workload to scale necessary infrastructure resources, applications, and other crucial elements.</li>
                            <li><strong>Automation Resource Provisioning:</strong> We automate the process of creating, allocating, and deleting infrastructure resources based on your enterprise needs.</li>
                            <li><strong>Automating the Deployment of Resources:</strong> We help you install, configure, release, and manage software services in containers or servers for production purposes.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Delegating your requirement to a reliable service provider like us is the smartest way to drive success. Choosing us as your infrastructure management service provider will give you access to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Skilled Experts:</strong> We have a highly skilled and experienced team of infrastructure management experts who can take care of all your needs.</li>
                            <li><strong>High-quality Services:</strong> We have multi-step quality check processes in place to provide all our clients with top-class services.</li>
                            <li><strong>Complete Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified company that strives to ensure complete data security.</li>
                            <li><strong>Dedicated Project Manager:</strong> We provide a dedicated manager to every client to provide timely project updates and address all queries.</li>
                            <li><strong>Round-the-Clock Support:</strong> We offer 24/7/365 support for your business, thanks to our strategically located global delivery centers.</li>
                            <li><strong>Flexible Pricing:</strong> We provide highly flexible pricing options to suit your business requirements.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Optimize Your IT Infrastructure?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            **Nimble Acuity** is a reputed IT infrastructure management company helping global clients with the best quality and stable solutions. Our services empower you to avoid failures, minimize downtimes, and reduce operational overhead. Leverage our holistic IT infrastructure management services to accomplish optimal levels of efficiency enterprise-wide and move your business forward.
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

export default ITInfrastructureManagement;