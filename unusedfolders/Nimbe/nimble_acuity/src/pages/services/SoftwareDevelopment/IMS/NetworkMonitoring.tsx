import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const NetworkMonitoring: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Network Monitoring Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Maintain a resilient, well-performing, and integrated network with our expert network monitoring services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Increasing dependence on connectivity and integrated network systems brings along the liability of keeping these networks highly functional and well-performing at all times. Network monitoring involves predicting, preventing, and minimizing network downtimes while keeping performance and efficiency high. Nimble Acuity offers the best network monitoring services, providing strong and highly optimized network systems and helping you utilize the complete scope of your network's potential by tracking crucial factors like performance, visibility, bandwidth, and more. If you're looking for a consistently stable, robust, and plain sailing system, partner with us.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Network Monitoring Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We have a team of professionals with diversified expertise and specializations that can understand and cater to your unique network monitoring needs. Our end-to-end solutions leverage the expertise of our diverse team. Some of the most in-demand solutions include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network and Performance Monitoring</h4>
                                <p>
                                    From maintaining robust networks and tracking several metrics to generating intuitive reports, we offer a broad range of solutions for 24/7/365 network performance monitoring, management, and optimization.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Distributed Network Monitoring</h4>
                                <p>
                                    Our distributed network monitoring services are for those who have embraced a decentralized architecture. Our solutions offer exhaustive network performance data and intelligence.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Incident and Problem Management</h4>
                                <p>
                                    We offer lightning-fast response and crisis management solutions to ensure your network gets out of every incident unscathed, no matter the size or scale.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Event Monitoring and Management</h4>
                                <p>
                                    In case of an event, collecting, analyzing, and interpreting data in a limited time is critical. Our 24/7 event monitoring services ensure data and alerts are sent instantaneously.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Change Management</h4>
                                <p>
                                    Integrating changes can be tedious. Our dedicated change management team specializes in making your change management smooth and disruption-free through iterative planning and testing.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network Integration/Upgrading Support</h4>
                                <p>
                                    Keep integrating your existing network with newer ones and updating your systems with our extensive tech stack and expert network support engineers.
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
                            Through our consistent performance and commitment to improving network productivity, we have emerged as a market leader. Here's what makes us stand apart:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Pricing Plans:</strong> Our customized and highly economical pricing plans offer uncompromised quality, making us a smart choice for your business.</li>
                            <li><strong>Frequent Network Monitoring:</strong> We provide minute-based network monitoring, sending evaluation signals to ports every few minutes to effectively reduce your network's downtime.</li>
                            <li><strong>24/7 Security Management:</strong> With our cutting-edge technologies and highly experienced personnel, you can be convinced that no virus or malware can disrupt your network systems.</li>
                            <li><strong>Real-Time Reports:</strong> We ensure there's no lag with synchronized procedures and real-time reports listing all pertinent statistics that can affect your network performance.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Enhance Your Network Performance?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Real-time performance tracking, frequent reports analysis, and minimizing downtime can keep your business running disruption-free. With Nimble Acuity, you can reduce your network's Mean Time to Recovery (MTTR), test changes before publishing them, and evaluate performance post-business hours.
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

export default NetworkMonitoring;