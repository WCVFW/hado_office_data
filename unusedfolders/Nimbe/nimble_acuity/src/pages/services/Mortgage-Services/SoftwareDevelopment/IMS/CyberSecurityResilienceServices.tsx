import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CyberSecurityResilienceServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Cyber Security Resilience Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our advanced technologies and significant expertise help defend you from cyber risks and accelerate your recovery from data breaches.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Has your digital transformation journey unintentionally opened up gateways to cyber risks, attacks, and vulnerabilities? Are you looking to partner with a reliable and experienced cyber security resilience company that can help you defend against these risks? If so, you can benefit significantly from our services.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading cyber security resilience service provider and will work closely to understand your IT infrastructure and systems to create a robust security and resilience strategy. With our services, we can help you mitigate and eliminate the risks of cyberattacks and protect your business-critical data and applications. We provide a wide range of integrated solutions in the form of consulting, operations, and engineering to ensure that your business is always protected.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Cyber Security Resilience Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of cyber resilience services. Our solutions are optimized for hassle-free and streamlined performance to provide you with world-class capabilities and expertise. Our range of services includes:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cyber Risk Monitoring and Mitigation Services</h4>
                                <p>
                                    Our cyber risk division helps firms implement a streamlined and robust risk management strategy while performing cyber risk analysis. We assess the risk of external vendors and provide solutions to mitigate risk from malicious internal activities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cyber Strategy Creation Services</h4>
                                <p>
                                    We work closely with clients to create a systematic and fool-proof security resilience strategy. We support firms in their strategic decisions and will help you properly structure your cyber-related functions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cyber Compliance Services</h4>
                                <p>
                                    Our highly specialized team helps firms identify, define, implement, and monitor cybersecurity compliance activities to ensure they are complying with all legal and regulatory requirements and following the latest best practices.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cyber Operations Support</h4>
                                <p>
                                    We help firms to effectively and efficiently secure their operations to more adequately protect their data, strategy, users, and assets. With our services, you can ensure that your operations proceed smoothly and have the capability to recover quickly in case of an attack.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cyber Resilience Training</h4>
                                <p>
                                    We are highly experienced in providing resilience training to the employees of numerous firms. With our experts providing guidance, you can be sure that all appropriate employees in your firm are proficient in cybersecurity processes and issues.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Security Resilience Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of cyber security resilience services and offers comprehensive solutions. Some of the reasons for outsourcing to us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Services:</strong> As a leading service provider, we use efficient workflows to save on operational overheads.</li>
                            <li><strong>Experienced Team:</strong> We have highly qualified, experienced, and motivated individuals who use their deep expertise to offer unrivaled results.</li>
                            <li><strong>Customized Solutions:</strong> Our experts will work closely with you and provide customized services according to your specific business requirements.</li>
                            <li><strong>Fast Turnaround:</strong> We will always provide our services within the agreed-upon deadlines as this is a cornerstone of our work ethic.</li>
                            <li><strong>Multi-domain Experience:</strong> Our team is highly proficient and capable of working across departments, so we can leverage our multitude of solutions to provide you with a bouquet of services at unbeatable prices.</li>
                            <li><strong>Security:</strong> As a premier firm, we fully understand the importance of being stringent about data security. Your data is completely safe with us.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Protect Your Business from Cyber Threats?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of security resilience services to clients from around the world. We provide end-to-end support to help firms define, implement, evaluate, and improve their cyber resilience and security systems and processes. With our experts by your side, you can ensure that your business-critical data and systems are always protected, and that if attacked, you can successfully and quickly recover to a state of normalcy.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get a Custom Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CyberSecurityResilienceServices;