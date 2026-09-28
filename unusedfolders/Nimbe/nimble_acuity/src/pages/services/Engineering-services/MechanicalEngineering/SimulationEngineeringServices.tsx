import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const SimulationEngineeringServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Simulation Engineering Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Explore new possibilities without spending a fortune on product development and testing.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Do you wish to test and verify design behavior optimally and under varied circumstances using available data? Do you struggle to calculate the impact of design changes without expensive equipment? Is it challenging to gain insights into your design behavior?
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, we offer the best simulation services and simulation apps that help streamline processes at reduced costs. Our stellar team of engineers has served a global clientele with a range of customized services to help businesses grow exponentially. We provide a comprehensive suite of solutions to help you understand and optimize product performance before physical prototyping.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Simulation Engineering Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a leading simulation engineering company that offers top-notch services to international clients. Check out our services to explore new possibilities without spending a fortune on product development and testing:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">FEA Simulation Services</h4>
                                <p className="leading-relaxed">
                                    Our simulation engineers leverage this highly effective computerized method to solve complicated engineering problems. Instead of tackling industrial issues as a whole, we break them down into equalized finite elements and use FEA mechanisms to find quick solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CFD Services</h4>
                                <p className="leading-relaxed">
                                    We use CFD software to resolve fluid flow problems. Our engineers provide professional insights that help save your time and money by reducing the number of design variants, allowing you to reduce your time-to-market and generate the best ROI.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">DEM Simulations</h4>
                                <p className="leading-relaxed">
                                    We use the DEM method to accurately predict the behavior of solid particles in process engineering. We add value by ensuring affordable designs, shorter development cycles, better quality products, and low maintenance costs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Testing Simulated Products</h4>
                                <p className="leading-relaxed">
                                    Our evolved testing enables our clients to assess products by mapping them to pre-determined parameters. The outcomes we deliver help determine product viability, regulatory compliance, and scopes for product improvement.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Simulation Engineering Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here are some of the reasons why you should choose us for outsourcing simulation engineering services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Competitive Pricing:</strong> We offer our clients the best mechanical engineering services at highly competitive prices.</li>
                            <li><strong>Tools and Technology:</strong> We use the best simulation apps for engineering services and employ the latest tools and technology including Autodesk, Comsol, Matlab, and Simulink for the best quality output.</li>
                            <li><strong>Data Security:</strong> Being ISO/IEC 27001:2022 certified, we ensure maximum data confidentiality for our clients. We sign NDAs that legally bind us to safeguard your enterprise data.</li>
                            <li><strong>Quick Turnaround Time:</strong> We offer the best TATs in the industry; our experts can work around stringent deadlines to ensure timely delivery.</li>
                            <li><strong>Expert Team:</strong> We take pride in our exceptional team of engineers that works tirelessly to cater to every simulation requirement across all types of construction, be it residential or commercial.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Simulation Engineering Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we offer top-notch simulation engineering services to clients in 160+ countries. We have clearly defined processes to analyze, communicate, draft, report, and make quality checks to ensure client satisfaction.
                        </p>
                        <p className="text-gray-700 mb-6">
                            If you need a reliable simulation engineering service provider, your search ends at Nimble Acuity. Get in touch with us today!
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

export default SimulationEngineeringServices;