import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const NOCMonitoringServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            NOC Monitoring Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Maintain, track, and manage your entire IT infrastructure to ensure the highest network security.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Network security is a primary requisite for every organization, but day-to-day infrastructure issues and security attacks can lead to data vulnerabilities and project delays. Overcoming these challenges is a costly affair, which is difficult for many small and medium-sized organizations. At Nimble Acuity, we can help you achieve superior network security through our comprehensive **Network Operations Center (NOC) monitoring as a service**. Our expert solutions can help you secure your infrastructure, optimize your practice, and perfect poor process frameworks for business growth and success.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our NOC Monitoring Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading NOC monitoring services provider. Our expert and certified team of NOC experts and network engineers leverage industry-leading tools and software to diligently monitor all components of your IT network to improve capabilities and protect your infrastructure from all upcoming problems. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network Infrastructure Management & Monitoring</h4>
                                <p>
                                    We expertly manage and monitor your network to promptly detect and highlight issues before they cause network outages. Our 24/7 monitoring helps you identify hardware and software flaws for a smooth operation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server Monitoring</h4>
                                <p>
                                    Through remote monitoring, we rigorously scrutinize your servers to ensure smooth and hassle-free functioning of your systems and applications, preventing network downtime and system outages.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Website Monitoring</h4>
                                <p>
                                    We continuously scan and monitor your websites to ensure their uptime, performance, and functionality at all times, checking for broken links and proper call-to-action functionality.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Simulated Transactions Monitoring</h4>
                                <p>
                                    We monitor your APIs and web and mobile applications to maintain the performance and uptime of your critical business transactions, identifying failed transactions and common paths to improve customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a highly sought-after NOC monitoring company with extensive experience. We are led by a team of highly trained network engineers who work around the clock to optimize your IT environment for high stability. Our benefits include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Prices and Plans:</strong> Our affordable rates help you eliminate expensive in-house infrastructural setup requirements and costs incurred on hiring expert resources.</li>
                            <li><strong>Instant Access to Certified Engineers:</strong> We work with some of the best hands in the industry, proficient in handling and troubleshooting even the most complex network issues.</li>
                            <li><strong>Latest Technology and Platforms:</strong> Our intelligent NOC monitoring systems help us rigorously monitor client networks from a centralized location, ensuring uninterrupted network security and maximum operational efficiency.</li>
                            <li><strong>Customized Solutions and Services:</strong> We tailor our services to your specific business requirements, allowing you to efficiently use our services without increasing overhead costs.</li>
                            <li><strong>Round-the-clock Monitoring:</strong> Our expert engineers provide 24/7 help and support to help you quickly resolve issues about your website, networks, bandwidth, and more.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Secure Your Network?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Whether you want to set up a new IT infrastructure or boost the performance and security of your Network Operations Center, NOC monitoring services are the need of the hour. As a premium NOC monitoring services company, we can help you streamline, manage, and monitor your IT infrastructure and operational framework for seamless, well-managed services.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Our Experts
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NOCMonitoringServices;