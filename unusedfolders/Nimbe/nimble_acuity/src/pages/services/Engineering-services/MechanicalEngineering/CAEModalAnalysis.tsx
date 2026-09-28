import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const CAEModalAnalysis: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            CAE - Modal Analysis Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to highly sophisticated and accurate computer-aided engineering (CAE) and modal analysis services provided by an experienced team of engineers.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            If a product has components that are noisy, exhibit unwanted vibratory behavior, or experience unexpected vibrations, a vibration modal analysis would help to reveal where the problem might be coming from. Are you looking for expert computer-aided engineering services that can help you deal with your modal analysis requirements? If so, we can help.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading modal analysis company and provides a wide range of modal analysis engineering services. With our computer-aided engineering analysis, we help determine a structure's natural frequencies or resonance frequencies (also called eigenvalues) and mode shapes (called eigenvectors).
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Modal Analysis Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a leading provider of computer-aided engineering analysis services. Our CAE engineering services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Finite Element Analysis</h4>
                                <p className="leading-relaxed">
                                    We are a leading provider of finite element analysis (FEA) services. With our services, you can validate the materials used in your products, design multiple approaches, and simulate the product to be manufactured. We use the best computer-aided engineering analysis software, theoretical deductions, and 3D models to carry out FEA on your designs or products.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Computational Fluid Dynamics (CFD) and Thermals</h4>
                                <p className="leading-relaxed">
                                    Our highly qualified and experienced team of engineers has the expertise to perform exceptional and accurate CFD services for diverse requirements. Making use of computer simulations and modeling, we provide insights into the performance of our clients' designs and products.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Multi-body Dynamics</h4>
                                <p className="leading-relaxed">
                                    With multi-body dynamics (MBD), we analyze the motion of different product components and provide details on how the different components interact with each other. With our computer-aided engineering analysis services, you can understand the complexities involved with the interaction of multiple components.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Modal Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            To carry out modal analyses, it is important to accurately model stiffness, mass, damping, and mass distribution to reflect the structure's modal behavior. Our experience in experimental modal analysis and vibration testing of components helps us understand the behavior of joints and other conditions. Outsourcing modal analysis services to us provides you with many benefits, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Experience:</strong> Wide industry experience in the analysis of large structures with complex joints or structural members and in providing vibration modal analysis services.</li>
                            <li><strong>Expertise:</strong> Engineers with expertise in Modal FEA, experimental vibration, and modal testing.</li>
                            <li><strong>Technologies:</strong> Proficient in using Bruel and Kjaer, Prosig, and Agilent testing systems with a wide variety of transducers.</li>
                            <li><strong>Wide Exposure:</strong> Exposure to noise testing and analyses in conjunction with modal and thermo-structural FEA.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource your Engineering Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With our vast industry experience, we provide world-class mechanical engineering solutions including modal analysis services to a wide range of clients from various industry sectors. Having been in the industry for over 26+ years, we know how to provide quick, efficient, and cost-effective services. We also provide piping design and drafting, AutoCAD conversion, CAD conversion services, etc., and boast of a growing list of satisfied customers.
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

export default CAEModalAnalysis;