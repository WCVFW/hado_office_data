import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const StructuralStressAnalysis: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Structural and Stress Analysis Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Nimble Acuity provides top-of-the-line structural analysis or stress analysis services that help our clients ensure structural and operational integrity as well as help in understanding the optimal design of the system.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Our expert FEA and Stress analysts provide a **cost-effective** alternative to experimental testing, which has a direct impact on cost, material, strength, weight, etc. It also helps in taking beneficial steps to enhance or optimize product designs to include safety factors and to explore safe design space.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With over two decades of experience in structural stress analysis and a growing list of clients that includes some of the top manufacturing giants from across the globe, Nimble Acuity's structural stress analysis services have a proven influence over product performance and are a major solution for any existing or new product design.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's CAE Structural Analysis / Stress Analysis Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As part of our exhaustive list of Finite Element Analysis (FEA) services, we have thoroughly designed stress analysis services with a proven track record in structural stability analysis, testing, and simulation. Our structural analysis engineers investigate issues in detail to help you take preventive design changes and avoid major design challenges.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our computer-aided structural analysis services help you determine the cause and predict the failure of a structure. Our list of stress analysis services includes:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Design Simulation</h4>
                                <p className="leading-relaxed">
                                    We use FEA techniques to dramatically cut down development time by accelerating the entire design process. Our skilled team of structural analysts verify each minute contributing factor and employ classical calculations for accuracy. We also verify the results using simulated settings to guarantee product compliance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Static Analysis</h4>
                                <p className="leading-relaxed">
                                    We use linear/nonlinear analysis, component life prediction, and failure analysis to ensure better design development.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Dynamic Analysis</h4>
                                <p className="leading-relaxed">
                                    We employ modal analysis, random vibration, forced response, shock as well as rotor dynamics for further design accuracy.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Vibration Analysis for Predictive Maintenance</h4>
                                <p className="leading-relaxed">
                                    At Nimble Acuity, our structural analysts help you determine the various stress points existing in your equipment as well as structures to conduct a thorough analysis to predict failures while also making recommendations for preventive measures.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Outsourcing Structural and Stress Analysis Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our design engineers and analysts come from top institutes across the globe and have extensive knowledge of various structural analysis tools to execute stress analysis. Our team is proficient in all the latest FEA-related software tools and we calculate exact linear and nonlinear tensions and simulate the digital models in an actual load situation to receive factual findings.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has a long history of providing top-notch engineering support services. Here are some reasons to outsource structural analysis and stress analysis services to us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Product life cycle knowledge</li>
                            <li>In-depth competencies in Thermo-Structural Analysis, Probabilistic Analysis and Stress Analysis</li>
                            <li>Experience in New Product Introduction</li>
                            <li>Product development and design expertise</li>
                            <li>Global time zones</li>
                            <li>ISO-level data security and privacy</li>
                            <li>Assured results at cost-effective pricing models</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Structural and Stress Analysis Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We carry out Finite Element Analyses on products or concepts to validate them before manufacturing, determining safety and performance levels with respect to strength, cost, manufacturability, life, etc., and evaluating multiple "what if" scenarios. This process can effectively be used to optimize the design, lower risks during manufacturing as well as the probability of failure during the usable life cycle of the product.
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

export default StructuralStressAnalysis;