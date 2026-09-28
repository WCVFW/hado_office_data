import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AugmentedRealityDriverAssistance: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Augmented Reality Driver Assistance Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Looking for driver assistance using augmented reality? We have the expertise to ensure human error is completely dissolved while driving. Get access to world-class augmented reality solutions at competitive prices.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading name in the field of augmented reality and driver assistance services. We have been developing augmented reality solutions for over 26 years and have worked with a variety of automotive manufacturers to devise the best solutions. Our experience includes developing AR GPS Navigation and other driver assistance features for companies worldwide.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Augmented Reality Driver Assistance Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Vehicle Dashboard Solutions</h4>
                                <p className="leading-relaxed">
                                    With our augmented reality solutions, we help companies display essential driving parameters directly in the driver's view, ensuring all critical information is easily accessible without distraction.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Simplified Navigation</h4>
                                <p className="leading-relaxed">
                                    Our simplified AR navigation services provide clear, intuitive, and real-time GPS guidance. We are the best source for AR driver assistance because we make navigation easier and more reliable.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Parking Guidance</h4>
                                <p className="leading-relaxed">
                                    Our software includes advanced parking guidance features that ensure drivers can park safely and in compliance with guidelines, minimizing the risk of accidents and human error.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Testing & Quality Assurance</h4>
                                <p className="leading-relaxed">
                                    We offer comprehensive testing services for different AR applications and devices to ensure maximum functionality and reliability. This commitment to quality makes us a leader in augmented reality driver assistance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource AR Driver Assistance to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Choosing Nimble Acuity for your AR driver assistance needs provides significant advantages, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing:</strong> Our pricing is flexible and based on your budget, providing high-quality services at a cost-effective rate.</li>
                            <li><strong>Best Services:</strong> As an ISO-certified company, we take pride in delivering the highest quality services that meet and exceed expectations.</li>
                            <li><strong>Skilled Professionals:</strong> We have a team of extremely talented and skilled experts with vast experience in AR driver assistance, capable of handling the most complex projects.</li>
                            <li><strong>Scalability:</strong> We have all the resources and bandwidth necessary to provide the most flexible and scalable services to our clients, adapting to your project's evolving needs.</li>
                            <li><strong>Dedicated Support:</strong> Our team of professionals is always ready to assist you with any support you need for your project, ensuring a smooth and uninterrupted experience.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Augmented Reality Driver Assistance Services Right Now
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading name in augmented reality driver assistance. Our dedicated team of professionals helps you deliver projects on time, ensuring great benefits for both drivers and companies. Hire the professionals at Nimble Acuity now to get the best results for your projects.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AugmentedRealityDriverAssistance;