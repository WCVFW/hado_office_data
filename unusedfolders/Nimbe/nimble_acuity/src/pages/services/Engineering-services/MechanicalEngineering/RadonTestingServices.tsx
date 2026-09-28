import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const RadonTestingServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Radon Testing Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Keep your premises radon-free and eliminate health hazards with our certified radon services.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Do you need a professional to test and treat radon levels in your residential or commercial project? What you need is a certified radon service provider, like Nimble Acuity, who manages projects with efficacy and delivers satisfactory results. We detect and alleviate radon levels in homes, offices, schools, and other buildings using compliant and proven techniques. Our qualified radon mitigation personnel are trained to detect traces of radon and curb it on your premises.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            When you partner with us for radon testing services, we leverage the best resources, tools, and techniques to assess the level of radon in your property, whether it is residential or commercial. Our experienced and qualified team follows reliable testing and treatment practices to provide professional radon testing services. We follow simple mitigation procedures that help you safeguard your property and eliminate health hazards.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Radon Testing Solutions We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a pioneer in offering comprehensive radon and mold testing services to global clients, we strive to provide the best results at reasonable rates. Some of our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Radon Water Tests</h4>
                                <p className="leading-relaxed">
                                    We evaluate the concentration of radon in water collection systems, provide solutions to reduce it, and implement measures to prevent future contamination.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Air Quality Testing Services</h4>
                                <p className="leading-relaxed">
                                    Our unique tactics and advanced equipment test the air for radon traces and other indoor pollutants such as pollen, mold, and smoke.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Historical Radon Tests</h4>
                                <p className="leading-relaxed">
                                    We assess radon zone maps created by the Environmental Protection Agency to identify areas with higher radon traces and work to diminish their levels.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Radon Tests for Real Estate</h4>
                                <p className="leading-relaxed">
                                    Our rapid radon tests detect and reduce radon concentration in any property to enhance its real estate value. We assist you before, during, or after your real estate transaction.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Testing Radon in New Sites</h4>
                                <p className="leading-relaxed">
                                    We check radon levels in new sites and construction projects and suggest suitable measures to create radon-resistant construction projects.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Nimble Acuity is the Preferred Provider of Radon Testing Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Partnering with Nimble Acuity for radon testing services safeguards the people around you. Some of the advantages of leveraging us are:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing:</strong> Get customized radon concentration testing services and pay only for what you use with our flexible pricing options.</li>
                            <li><strong>World-class Tools and Techniques:</strong> We use smart radon detectors, digital radon tests, and other advanced tools to deliver superior-quality results.</li>
                            <li><strong>Effective and Compliant Services:</strong> Our qualified radon testers use innovative and compliant inspection techniques to provide high-quality services at an affordable rate.</li>
                            <li><strong>Skilled Resources:</strong> We have experienced and trained professionals who have completed multiple radon detection and elimination projects successfully.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Comprehensive Radon Testing Support at Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you are on the lookout for quality solutions for testing and eliminating radon levels in your project, Nimble Acuity should be your top choice. As a leading radon testing company, we have:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                            <li>Completed multiple complex projects worldwide to assess and mitigate radon levels.</li>
                            <li>A qualified team of experts and resources for proper testing of radon concentration in residential and commercial properties.</li>
                            <li>Strive to create safe and secure surroundings for our clients.</li>
                        </ul>
                        <p className="text-gray-700 mb-6">
                            Schedule an obligation-free consultation now to understand how our quick, efficient, and affordable services can help you detect and diminish radon traces on your premises.
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

export default RadonTestingServices;