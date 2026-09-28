import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const QuantumComputingServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Quantum Computing Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Achieve groundbreaking outcomes using advanced quantum algorithms. We drive innovation with next-gen computational techniques and decoherence reduction.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The rising complexity of data and computational demands are making traditional computing systems outdated. Nimble Acuity provides all-inclusive quantum computing services designed to help your business capitalize on this transformative technology. Beyond creating quantum algorithms, we also provide thorough quantum computing consulting, training, and support to make sure your team is well-equipped to take advantage of this advanced technology.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With our quantum cloud solutions, businesses can use quantum computing capability without having to invest significantly in physical hardware. This accessibility allows you to experiment with and implement quantum computing in a cost-effective manner. We provide improved data analysis and predictive modeling skills that significantly outperform classical methods, with an emphasis on quantum machine learning.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Quantum Computing Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our comprehensive range of quantum computing services is tailored to individual client requirements. We provide the tools and expertise required to thrive in the quickly changing quantum environment.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Quantum Cloud Platforms</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Quantum-as-a-Service (QaaS)</li>
                                    <li>Hybrid Cloud Integration</li>
                                    <li>Scalability</li>
                                    <li>Resource Allocation</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Quantum Education and Training</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Workshops and Bootcamps</li>
                                    <li>Online Courses</li>
                                    <li>Certification Programs</li>
                                    <li>Hands-On Labs</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Quantum Software Platforms</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Quantum Development Kits (QDKs)</li>
                                    <li>Simulation Environments</li>
                                    <li>Integrated Development Environments (IDEs)</li>
                                    <li>Algorithm Libraries</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Quantum Consultancy and Solutions</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Feasibility Studies</li>
                                    <li>Proof of Concept (PoC)</li>
                                    <li>Algorithm Design</li>
                                    <li>Optimization Services</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Quantum Hardware Access</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Direct Hardware Access</li>
                                    <li>Quantum Processing Units (QPUs)</li>
                                    <li>Resource Scheduling</li>
                                    <li>Performance Metrics</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Quantum Research and Development</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Collaborative Research Programs</li>
                                    <li>Grant Proposals</li>
                                    <li>Innovation Labs</li>
                                    <li>Publications and Patents</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Process We Follow */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Streamlined Process Flow for Quantum Computing Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our approach to quantum computing guarantees that businesses receive transformative benefits, including better problem-solving, faster innovation, and more computational efficiency.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">01. Initial Consultation and Requirement Analysis</h4>
                                <p>
                                    We work together with your team to identify key objectives and specific issues where quantum computing can create value.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">02. Feasibility Study and Solution Assessment</h4>
                                <p>
                                    Our experts conduct in-depth feasibility studies to assess how well quantum computing can be used to solve your unique challenges.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">03. Customized Solution Design</h4>
                                <p>
                                    We craft custom quantum algorithms and architectures designed to seamlessly integrate with your existing systems and workflows.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">04. Implementation and Integration</h4>
                                <p>
                                    We implement quantum solutions on suitable quantum hardware to ensure a smooth integration with your existing IT infrastructure.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">05. Rigorous Testing and Validation</h4>
                                <p>
                                    Our staff verifies the efficacy and reliability of the quantum solution through extensive quality checks and validation tests.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">06. Training and Continuous Support</h4>
                                <p>
                                    We provide your team with extensive training and ongoing support to maximize the benefits and efficiency of your quantum computing investment.
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
                            Nimble Acuity is a leading quantum computing service provider and can provide you with custom and expert solutions to address your exact requirements.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Multi-Industry Applications:</strong> Our services are designed for a wide range of industries, such as energy, banking, and healthcare, ensuring you can address specific industry challenges.</li>
                            <li><strong>Collaborative Ecosystems:</strong> By partnering with top academic institutions and research labs, we are dedicated to promoting a collaborative ecosystem that accelerates technological advancements.</li>
                            <li><strong>Future-Proof Technology:</strong> Our focus on continuous innovation guarantees that our quantum computing services are at the forefront of technological advancements, ensuring your business stays ahead.</li>
                            <li><strong>Expertise and Support:</strong> Our team consists of leading experts who provide continuous support and guidance, assisting you in easily traversing the complexities of quantum technology.</li>
                            <li><strong>Integration with Classical Systems:</strong> We enable you to benefit from quantum advancements without disrupting current workflows by providing smooth integration.</li>
                            <li><strong>Customizable Solutions:</strong> We offer highly configurable quantum computing solutions that are suited to your unique requirements, whether you need custom algorithms or specialized hardware configurations.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Transform Your Business with Quantum Computing?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Quantum computing delivers unprecedented computational capabilities by using the principles of quantum mechanics to solve complicated problems beyond the reach of classical computers. Outsourcing your quantum computing needs to us ensures access to advanced technologies such as quantum annealing, gate-based quantum processors, and advanced quantum algorithms.
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

export default QuantumComputingServices;