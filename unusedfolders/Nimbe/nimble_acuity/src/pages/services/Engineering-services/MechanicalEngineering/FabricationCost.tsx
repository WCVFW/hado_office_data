import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const FabricationCost: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Engineering Fabrication and Production Cost Estimation
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to high-quality engineering fabrication and production cost estimation services provided by highly experienced engineers.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking to understand the structure of your product's costs to enable process improvements and a correct pricing strategy? Do you need to calculate the costs for each component in the production cycle of your engineering fabrication process, including cutting, bending, welding, and packaging? If so, you are in the right place.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading provider of engineering fabrication and production cost estimation services to a global clientele. We understand that the efficiency of a machine or its hourly cost varies depending on the number and type of estimations, as well as the strategic decisions a process owner must take. We always factor in that the result of the cost estimation calculation will be affected by a variety of decisions.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Engineering Fabrication and Production Cost Estimation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of these services, successfully serving numerous clients for over 26 years. We help manufacturing companies better understand, analyze, and drive down the costs of their products. We are also at the forefront of providing cost estimation services to original equipment manufacturers (OEMs).
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Determining Individual Components of the Production Cycle</h4>
                                <p className="leading-relaxed">
                                    We help OEMs break the production cycle into simpler processes. This is necessary because production cycles can be so different from each other and include many different phases.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Determining the Raw Material Cost</h4>
                                <p className="leading-relaxed">
                                    We help companies estimate the amount of raw material required to manufacture products, including the scrap generated during the process. We calculate the cost of each raw material entering the production cycle.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Factoring in the Cost of Machining</h4>
                                <p className="leading-relaxed">
                                    As a leading provider of these services, we help companies add the cost of machining, whether as an hourly cost or any other type. We also calculate the efficiency and productivity of the system.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Performing the Calculation for Each Phase</h4>
                                <p className="leading-relaxed">
                                    Once we calculate the production cost from the raw material to the final output, we perform the same calculations for other phases or machines in the cycle. This ensures precise cost calculation from start to finish.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Choosing our services provides you with many advantages, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing Options:</strong> Our services are priced extremely reasonably and provide great value.</li>
                            <li><strong>High-quality Services:</strong> We are ISO-certified and incorporate the latest best practices.</li>
                            <li><strong>Structured Process:</strong> We use streamlined and systematic processes for delivery.</li>
                            <li><strong>Superb Infrastructure:</strong> We have the required infrastructure to provide high-quality services.</li>
                            <li><strong>Experienced Team:</strong> Our team has over 26 years of experience.</li>
                            <li><strong>Data Security:</strong> We take data security very seriously, using secure FTP and VPN for file transfers.</li>
                            <li><strong>Short Turnaround:</strong> Our experts will always provide services within extremely quick turnaround times.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource to Nimble Acuity Today
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of engineering fabrication and production cost estimation services. Our highly-experienced and qualified engineers use the latest tools and technologies to always provide cutting-edge services that help you cut costs and boost efficiency.
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

export default FabricationCost;