import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const FailureAnalysis: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Failure Analysis Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We take a holistic approach to determine reasons for failure and recommend ways to make your future products 100% fail-safe.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Failure analysis is essential in any product development company. It enables discovering flaws and past failures to design a robust product. However, not every company can afford to operate a full-fledged team to handle failure analysis services. It can be costly and time-consuming. Therefore, outsourcing failure analysis testing services makes sense to ensure project sustenance and continuous innovation.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading failure analysis service provider with over 26 years of experience in various engineering failure analysis assignments. We have proven our capability to streamline product development by uncovering all possibilities of failure before products reach end-users. We use analytical tools and specialized methods to scientifically find and fix flaws in the product design.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Failure Analysis Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a failure analysis service provider you can turn to for shrinking your expenses. Our services are continuously sought by small, mid, and large enterprises to design products that are durable throughout their lifecycle.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Failure Analysis of Products and Testing Material Integrity</h4>
                                <p className="leading-relaxed">
                                    Our team of experts thoroughly investigates product quality and materials by relying on data from past failures. We perform analysis on metals, polymers, electronic circuits, and more, testing them to their extremes to ensure they are fail-proof.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Detection and Analysis of Contamination</h4>
                                <p className="leading-relaxed">
                                    Testing products for contamination requires sophisticated techniques and technologies, all of which we possess at Nimble Acuity. We take crucial steps to make your products durable against unpredictable contamination, minimizing risk.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Failure Analysis of Materials in Medical Devices</h4>
                                <p className="leading-relaxed">
                                    Our material experts investigate material-related issues in implantable medical devices. We perform comprehensive failure analysis to prevent patient fatalities and improve the surface chemistry and adhesive properties of materials used.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Failure Analysis of Components in Engineering & Manufacturing</h4>
                                <p className="leading-relaxed">
                                    We collect and analyze design data to help you take remedial measures or make design modifications to prevent structural compromises from becoming catastrophic failures in the future.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Failure Analysis of Aviation Mechanicals</h4>
                                <p className="leading-relaxed">
                                    Our multidisciplinary failure analysis team investigates the mechanicals of aviation components. We help you detect parts with integrity issues early to prevent sudden failure, performing analysis on materials, fatigue tolerance, finite elements, and welded parts.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Failure Analysis Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing failure analysis services to Nimble Acuity is a practical solution that saves you thousands of dollars on analysis equipment and software. Our process is as follows:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Requirement Discovery:</strong> We collaborate with you to discover your business requirements and gain insight into your products.</li>
                            <li><strong>Collection of Test Data:</strong> We collect and evaluate data for completeness and accuracy.</li>
                            <li><strong>Team Selection:</strong> We designate a specialized team to handle the analysis, who will sign an NDA and SLA.</li>
                            <li><strong>Failure Analysis:</strong> Our team uses advanced tools and methods to determine fatal flaws based on the collected data.</li>
                            <li><strong>Quality Check:</strong> We conduct a quality review to ensure services meet our protocols and quality standards.</li>
                            <li><strong>Analysis Submission:</strong> We compile a comprehensive report of our findings and deliver it within the agreed-upon turnaround time.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Failure Analysis to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a go-to choice for companies in search of the finest failure analysis service provider. Here are more reasons why you should consider us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Friendly Rates:</strong> Our services are reasonably priced, allowing you to customize your needs instead of opting for a comprehensive package.</li>
                            <li><strong>100% Data Security:</strong> We are an ISO/IEC 27001:2022 compliant company committed to keeping your data safe.</li>
                            <li><strong>High-quality Services:</strong> We offer nothing short of high-quality service, with every aspect thoroughly checked before handover.</li>
                            <li><strong>Quick Turnaround Time:</strong> We always fulfill our promise of on-time service completion and can handle orders with tighter deadlines.</li>
                            <li><strong>Experienced Professionals:</strong> We have highly qualified structural engineers and research partners who perform deep-dive investigations on your data.</li>
                            <li><strong>24/7 Support:</strong> Get round-the-clock support from our agents via phone, email, or webchat.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Failure Analysis to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With over 26 years of solid experience in failure analysis, Nimble Acuity has emerged as a true leader in not just making products bullet-proof, but also in a wide range of mechanical engineering services. As a top provider of failure analysis, we have a global presence and have seen unstoppable growth from a small firm to a large, multifaceted company.
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

export default FailureAnalysis;