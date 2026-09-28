import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ManagedSIEM: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Managed SIEM Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Protect your organization from unwanted cyber-attacks with our unbeatable managed SIEM services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The digital world has opened up both opportunities and threats for businesses. To grow, you must have a proper security strategy to prevent malicious cyber-attacks. **SIEM (Security Information and Event Management)** ensures the optimization of cyber protection. **Nimble Acuity** is a leading managed SIEM company that provides you with the most credible services to combat threats on your network. Our team of cyber experts not only improves your security posture but also manages every possible threat that may appear, helping you prevent attacks and potential losses.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Security Information and Event Management Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When building cyber protection, a multi-layer defense is crucial. Our managed SIEM services provide automated detection of cyber threats, initiate an investigation, and prepare a response process to enrich your security. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Log Management</h4>
                                <p>
                                    We centralize every piece of security information and related events on a single platform. Our experts continuously monitor logs to warn and combat any unusual activity.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Vulnerability Management</h4>
                                <p>
                                    Our cyber experts monitor and investigate threats, running multiple simulations to scan for vulnerabilities. Our KPI-based alerts and ad hoc searches further strengthen our services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Risk Mitigation</h4>
                                <p>
                                    We employ advanced security controls to automate retrieval. With an automated response plan, we mitigate expected risks and protect your network.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Real-Time Alerts</h4>
                                <p>
                                    Our SIEM services involve monitoring and detecting both known and unknown threats, alerting our clients through advanced intrusion detection systems.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Behavioral Analysis</h4>
                                <p>
                                    By gathering security information and events, we prepare behavioral analysis reports that provide important insights to further strengthen your organization's security.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Managed SIEM Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a leading managed SIEM service provider, our reputation is built on a well-organized and strategic work methodology. SIEM projects are executed in the following steps:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Analysis:</strong> Our cybersecurity experts access your network to analyze existing security controls by simulating incidents and researching common threats.</li>
                            <li><strong>Strategy:</strong> We assess your security posture and prepare strategies to enhance the visibility of your network, logs, servers, and insider activities to ensure 360-degree protection.</li>
                            <li><strong>Management and Compliance:</strong> We configure your SIEM to collect information, undertake log and risk management, and ensure compliance with regulatory policies.</li>
                            <li><strong>Testing:</strong> Once we've optimized your security, we run several simulations to ensure every function works properly, acting as a test run for detecting threats.</li>
                            <li><strong>Reporting:</strong> We provide regular reports to help you gain informative analysis and insights that aid your decision-making.</li>
                        </ol>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has earned a reputation as a leading managed SIEM services company. We have successfully mitigated cybersecurity risks for numerous organizations. As your service provider, you can avail the following advantages with us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Team of Dedicated Experts:</strong> We have top-tier talents with proven experience and certifications in all related technologies, providing you with dedicated SIEM services.</li>
                            <li><strong>Optimize SIEM Investment:</strong> We help you cut down the cost of hiring and retaining in-house security engineers while providing optimal cybersecurity monitoring.</li>
                            <li><strong>Make Informed Decisions:</strong> Our services provide visibility into your network and give you meaningful insights to improve your organization's security decisions.</li>
                            <li><strong>Demonstrate Regulatory Compliance:</strong> We manage and optimize your cybersecurity so that your organization can demonstrate full regulatory compliance.</li>
                            <li><strong>Advanced Technology:</strong> Our SIEM services are upgraded with the latest and best-in-practice technologies to ensure your cybersecurity is never breached.</li>
                            <li><strong>Global Network:</strong> With offices worldwide, you can connect with us anytime, anywhere, and avail yourself of 24/7 services.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build a Stronger Defense?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Security information and event management services are the most efficient way to gain visibility of insider activity, aggregate log data, and prevent malicious attacks. With our help, you will be able to provide an extra layer of protection for your cybersecurity.
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

export default ManagedSIEM;