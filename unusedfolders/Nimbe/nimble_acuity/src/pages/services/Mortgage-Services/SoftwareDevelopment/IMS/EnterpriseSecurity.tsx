import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const EnterpriseSecurity: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Enterprise Security Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get next-generation threat protection and effective security solutions to safeguard your digital assets.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading provider of advanced enterprise security management solutions, designed to offer companies effective next-generation threat protection. Our team of security experts and consultants uses their skills, experience, and technical know-how to help organizations stop enterprise security threats in the shortest possible time. We specialize in preventing APT (Advanced Persistent Threat) attacks by bypassing traditional signature-based security defense and contemporary firewall systems.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Enterprise Security Service Offerings
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our innovative security solutions are supplemented with IPS server protection, next-generation firewalls, anti-virus software, and security gateways. When you partner with us for threat protection, we will find and troubleshoot all your security issues, leaving nothing behind. Our services can offer you:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>A risk intelligence platform</li>
                            <li>Protection against fraudulent IDs and server infringement</li>
                            <li>Access control for authorized recipients and data handlers</li>
                            <li>An effective tracking system for data in transit</li>
                            <li>Complete threat management and threat protection</li>
                            <li>Perimeter and network security</li>
                            <li>Regulatory compliance and universal log management</li>
                            <li>Data loss prevention and digital rights management</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our top-notch services are designed to mitigate risks and provide a robust security posture for your enterprise. Partner with us to benefit from:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Avoid Technical Fallacies and Reduce Risks:</strong> We help you safeguard your sensitive files with frequent updates and regular archives. Access is restricted to outsiders, ensuring complete protection.</li>
                            <li><strong>Military-grade Data Management:</strong> We ensure that even if data is compromised, it is highly encrypted and appears as unrecognizable to unauthorized users, securing it with a highly-reliable 2048-bit encryption key.</li>
                            <li><strong>Easy Identity Management:</strong> We assist you in managing user identity and data handling with ease, helping you secure sensitive data against internal threats and lower operational costs.</li>
                            <li><strong>Effective Cloud Management:</strong> Our secure cloud management services help you extend your current cloud capabilities and achieve your optimum potential with ease.</li>
                            <li><strong>Timely Insider Threat Management:</strong> We help you manage internal threats through timely detection, monitoring, and investigation of suspicious activities, using services like user-based access privileges and 24x7 monitoring.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Secure Your Enterprise?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our aim is to deliver proactive services that help you mitigate risks rather than just fighting for security every day. With our advanced technology in data management, we ensure your data is completely secured against hackers and other forms of infringement. Partner with us and put a stop to your worries about data security.
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

export default EnterpriseSecurity;