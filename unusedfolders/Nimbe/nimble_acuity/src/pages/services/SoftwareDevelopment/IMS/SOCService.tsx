import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SOCService: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SOC as a Service
                        </h2>
                        <p className="text-lg text-gray-600">
                            Prevent, detect, and mitigate cyber-attacks to safeguard your digital assets for uninterrupted business continuity.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            With continuous security threats and cyber-attacks, digital security has become a necessity. Businesses need to be vigilant about all ongoing and upcoming cyber threats to protect their digital assets. However, maintaining high levels of IT security in-house can be expensive and time-consuming. At Nimble Acuity, we work as an extension of your IT team, providing a comprehensive range of **Security Operations Center as a Service (SOC as a Service)** to help you securely run your operations and maintain compliance. Our skilled experts leverage the latest security solutions to investigate and mitigate all potential cyber threats.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our SOC Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading SOC as a service provider with a global footprint. Backed by a certified team of cybersecurity experts, we provide a full spectrum of SOC services that can strengthen your IT infrastructure. We leverage the latest and most advanced threat detection tools to analyze your on-premises, cloud, and hybrid assets on a 24/7 basis. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Threat Identification</h4>
                                <p>
                                    Our cybersecurity experts rigorously scour the global threat landscape using advanced security software. Our round-the-clock monitoring helps us detect even the most current cyber threats, their sources, and their potential impact.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Penetration Testing</h4>
                                <p>
                                    Our experts analyze your assets for potential cyber threats, leveraging their skills to detect anomalous activities and design key tactics to mitigate an attack's impact.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Behavioral Monitoring</h4>
                                <p>
                                    Through network analysis tools, we perform an in-depth analysis of your web traffic to detect and highlight suspicious patterns and behaviors, allowing for real-time threat detection and remediation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Security & Threat Intelligence</h4>
                                <p>
                                    Our advanced security information and event management (SIEM) software allows us to effectively collect, analyze, and report log data for event correlation and incident response.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Vulnerability Assessment</h4>
                                <p>
                                    We offer comprehensive vulnerability monitoring and active network scanning to identify, analyze, and classify vulnerabilities based on the risk they pose to your enterprise.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Threat Hunting</h4>
                                <p>
                                    Our automated, machine learning, and AI-powered tools help you effectively monitor and scrutinize your IT environment to detect and trap all new, imminent threat vectors.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Incident Response Handling</h4>
                                <p>
                                    We help you formulate an effective and fool-proof incident response plan (IRP) to mitigate the impact of all ongoing security threats.
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
                            We offer affordable products and plans, hassle-free IT security, and access to the latest security software. Other benefits include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Centralized Dashboard Management:</strong> Our centralized dashboard provides a single location to monitor the health of your IT infrastructure with real-time, actionable insights.</li>
                            <li><strong>Customized Services & Solutions:</strong> We customize our services to your specific business needs, helping you efficiently use our services without increasing overhead costs.</li>
                            <li><strong>Round-the-clock Support:</strong> Our customer service executives are available 24/7, 365 days a year to provide immediate help and timely resolution of all your queries.</li>
                            <li><strong>Complete Peace of Mind:</strong> Our multi-layer security protocols and latest threat detection tools maximize the security of your IT for complete peace of mind.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Secure Your Business?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we strive to be your one-stop partner for all your IT security needs. Our SOC as a Service is designed to help you keep your IT environment safe from all external intrusions and threats. With complete monitoring, threat detection, incident reporting, and compliance control, our unified solution helps your organization stay safe and in complete control.
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

export default SOCService;