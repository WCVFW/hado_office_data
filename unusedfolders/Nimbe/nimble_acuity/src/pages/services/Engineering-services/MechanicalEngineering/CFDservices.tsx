import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const CFDservices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Computational Fluid Dynamics Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Optimize your engineering design effectively with CFD analysis, modeling, and simulation services.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            As an expert in engineering simulation and numerical modeling, Nimble Acuity's forte in computational fluid dynamics (CFD) solutions is excellent. With a huge team of supremely qualified and experienced engineers, designers, and other specialized professionals, we enable augmented engineering design performance and quality, optimized energy efficiency, and reduced carbon footprints.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our advanced design solutions help businesses keep their operational costs low by offering a clear-cut roadmap for business activities like production, transportation, and industrial workflows. We are proficient in handling simple to complex CFD challenges and offer efficient, hassle-free, and highly affordable CFD analysis and modeling services with on-time delivery commitment.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Professional CFD Modeling and Analysis Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We have fully equipped engineering facilities with state-of-the-art infrastructure for both simple and highly complex geometries. The computational fluid dynamics solutions we offer include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Aerodynamic Analysis and Design</h4>
                                <p className="leading-relaxed">
                                    We conduct in-depth research to run performance measure tests of existing products before starting prototype trials based on the aerodynamic studies of HVAC systems, automobiles, and more.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Combustion Analysis</h4>
                                <p className="leading-relaxed">
                                    We offer high-quality combustion analysis and design solutions for engine designers and manufacturers, carefully studying combustion chemistry, physics, and emission norms.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Fluid-Structure Interaction Analysis</h4>
                                <p className="leading-relaxed">
                                    Going beyond conventional testing, we offer insightful predictive analysis of product behaviors with solid-liquid interaction, non-linear deformations, and other effects of fluid structures.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Heat Transfer Analysis</h4>
                                <p className="leading-relaxed">
                                    Nimble Acuity blends expertise with the right engineering tools to develop thermal compatibility and performance of devices through careful regulation of cooling and heating characteristics.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">HVAC Analysis and Design</h4>
                                <p className="leading-relaxed">
                                    Our specialization in HVAC solutions is based on our efficient systems that consume optimal energy. We assist in building improved indoor air circulation systems and help engineers establish heating and ventilation systems.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Hydrodynamic Analysis</h4>
                                <p className="leading-relaxed">
                                    Aimed at analyzing the behavior of liquids, we help in designing large vessels and improved offshore structures that can efficiently withstand wind and wave loads for safe operation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Multiphase Flow Analysis</h4>
                                <p className="leading-relaxed">
                                    Our professional analysts evaluate the performance of multiphase systems by applying flow equations and turbulence models, investigating particle size, trajectories, and collisions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Turbomachinery Analysis</h4>
                                <p className="leading-relaxed">
                                    We aim to improve early-stage design performance by understanding the flow behavior inside equipment like turbines and compressors to optimize designs through blade geometry, flow angles, and pressure drop.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CFD Consulting Services</h4>
                                <p className="leading-relaxed">
                                    We can assist your team in resolving fluid dynamics-related challenges such as preliminary design, pressure loss estimation, and turbulence reduction through CFD simulation consulting.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Computational Fluid Dynamics (CFD) Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As an established computational fluid dynamics service provider, we offer a refined workflow that goes through a series of processes, which can be adapted to the varied needs of every project:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Project order and evaluation:</strong> We analyze your specific requirements and the challenges that need to be resolved or tested.</li>
                            <li><strong>Prototype design:</strong> We begin with the digital prototyping of the designs.</li>
                            <li><strong>Assimilation of hardware and software solutions:</strong> We understand the requirements in terms of tools and equipment needed for the CFD design and modeling.</li>
                            <li><strong>Internal and external QC:</strong> After an in-depth internal audit, the plan is sent for verification with you.</li>
                            <li><strong>Modeling and simulation:</strong> After verification, the models are developed and validated with simulation processes.</li>
                            <li><strong>Alterations and project delivery:</strong> Any changes requested are accommodated, and the finalized plan is submitted.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Hire Nimble Acuity for CFD Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are one of the most reputed companies for outsourcing computational fluid dynamics services. Our CFD team helps you analyze product performance and quality levels to identify ways to optimize your product designs and processes. This can greatly help in reducing your project lifecycle operational costs and achieving better productivity.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Fast and efficient services:</strong> We offer rapid turnaround times for excellent quality.</li>
                            <li><strong>Qualified and proficient team:</strong> Our global team comprises highly dedicated engineers, designers, and CFD specialists.</li>
                            <li><strong>Advanced technologies:</strong> We leverage cutting-edge technological infrastructure to deliver projects on time and without errors.</li>
                            <li><strong>Standardized processes:</strong> Our CFD services fully comply with country and industry-specific guidelines, norms, and specifications.</li>
                            <li><strong>Cost-effective solutions:</strong> We offer top-notch services at reasonable prices with flexible models.</li>
                            <li><strong>Project revisions:</strong> We allow for multiple revisions in designs and models to ensure every solution is a masterpiece.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Computational Fluid Dynamics Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            As a member of the esteemed International Association for the Engineering Modeling, Analysis, and Simulation Community (NAFEMS), Nimble Acuity is a leader in its field. We provide a comprehensive suite of CFD solutions that can greatly help in reducing your project lifecycle operational costs and achieving better productivity through efficient systems.
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

export default CFDservices;