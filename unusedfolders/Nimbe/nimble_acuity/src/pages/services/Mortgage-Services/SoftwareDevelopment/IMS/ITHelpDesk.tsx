import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ITHelpDesk: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            IT Help Desk Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Expand your team’s bandwidth and enhance productivity with our consistent, scalable, and integrated IT help desk assistance.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Providing swift and effective IT support is crucial for business success. However, running an internal IT help desk often leads to staffing hurdles and a surge in costs, not to mention the challenge of staying current with ever-evolving technological trends. Nimble Acuity, an experienced Managed Service Provider (MSP), offers comprehensive IT help desk services to take the burden off your shoulders. We work from multiple Network Operations Centers (NOCs) to provide round-the-clock assistance, ensuring support is accessible 24/7.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Custom IT Help Desk Support Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Seamless technical support is crucial for your business. Our extensive experience and superior proficiency help you swiftly identify and address your customers’ IT concerns. We have a team of globally certified professionals adept in cutting-edge tech skills. Explore the range of services we offer, designed to meet your unique demands and deliver unmatched value.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Remote IT Support</h4>
                                <p>
                                    Get remote IT assistance designed to provide instant support to your end users, wherever they are, minimizing their downtime and resolving issues efficiently.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Hardware & Software Support</h4>
                                <p>
                                    We resolve queries related to hardware and software in record time, providing effective solutions for troubleshooting, repairs, and regular maintenance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network & IT Security Support</h4>
                                <p>
                                    We help customers maintain a robust and secure network, navigate complex cybersecurity implementations, and protect their sensitive data to ensure compliance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Incident Management & Ticketing</h4>
                                <p>
                                    We help you streamline incident management with prompt responses and efficient problem-solving, ensuring timely resolution to enhance business operations.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Disaster Recovery & Business Continuity Support</h4>
                                <p>
                                    Secure your business’s future with our disaster recovery and business continuity support, providing robust plans to ensure uninterrupted operations even in a crisis.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">24/7 Multi-Channel Help Desk Support</h4>
                                <p>
                                    We provide round-the-clock assistance through various channels, ensuring immediate help whenever your end-users need it and enhancing overall customer satisfaction.
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
                            Experience the benefits of our proven and expertly delivered IT help desk and maintenance services. Our familiarity with global standards and practices ensures timely support.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Robust Security and Confidentiality:</strong> We implement reliable security measures and follow strict confidentiality protocols. Our ISO and GDPR compliance ensures your data is safe.</li>
                            <li><strong>Customized and Versatile Solutions:</strong> We offer unique services that are perfectly aligned with your business needs and provide comprehensive support across multiple platforms, including voice, web, and electronic channels.</li>
                            <li><strong>Global Delivery Centers:</strong> Our technicians work from strategically located global delivery centers, ensuring round-the-clock support for every customer, regardless of their location.</li>
                            <li><strong>Cost-Efficient Solutions:</strong> We pride ourselves on delivering high-quality services at competitive rates, ensuring you maximize the value of your investment.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Enhance Your IT Support?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Outsourcing to an experienced help desk service provider like us is crucial for organizing, managing, and responding to your end-users' technical issues. We handle the complexities of technical support, eliminating the need for in-house resources. Our team is committed to continuous learning and adapting to the latest technological developments.
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

export default ITHelpDesk;