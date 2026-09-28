import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ProcessPlanning: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Process Planning and Automation Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            As the industry today faces growing challenges in terms of improved availability as well as dissemination of various processing information, Nimble Acuity helps you meet the increased pressure to meet manufacturing deadlines and to provide efficient customer service with real-time information.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Automated process planning and manufacturing activity control are essential for integrated make-to-businesses and our experienced team of mechanical engineers and manufacturing drawing experts help you meet your competition by automating your complete cycle from order entry to order release.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With over two decades of experience in providing various major engineering support services, Nimble Acuity helps you with developing a holistic manufacturing process planning and automation system complete with dynamic scheduling and material optimization. We help create a custom plan for your production processes by utilizing the latest in computer-aided process planning (CAPP) and system process planning.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's Process Planning & Automation - Bridging the Gap Between Theory and Manufacturing
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity helps you with understanding real industrial & manufacturing challenges when you are looking at incorporating theoretical concepts. With our process planning and automation services, you can be sure of reduced time to market, increased production efficiency, improved product quality, and reduced production cost.
                        </p>
                        <h4 className="text-xl font-bold text-[#006A7C] mb-4">
                            Our exhaustive list of engineering support services for process planning & automation services includes:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Plant layout design and automation</li>
                            <li>2D / 3D layout design</li>
                            <li>Simulated factory automation</li>
                            <li>Assembly process simulation</li>
                            <li>Robotics simulation</li>
                            <li>Station layout and optimization</li>
                            <li>Simulation-based work instructions</li>
                            <li>Manufacturing process planning</li>
                            <li>Process analysis</li>
                            <li>Product assembly planning</li>
                            <li>Process documentation and report development</li>
                            <li>Manufacturing component process planning</li>
                            <li>Safety systems planning</li>
                            <li>Control systems planning</li>
                            <li>Containerization</li>
                            <li>Process templates creation</li>
                            <li>Skills / Resource planning</li>
                            <li>Material flow simulations</li>
                            <li>Resource standardization</li>
                            <li>Resource classification</li>
                            <li>Resource assemblies</li>
                        </ul>
                    </div>

                    {/* Process Automation Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Process Automation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Integrating all the steps in your process planning, we work on automating Level 1, 2, and 3 processes, at a high level of functionality and quality.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Level 1</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Automation planning and analysis</li>
                                    <li>Distributed control systems (DCS)</li>
                                    <li>Programmable logic controllers (PLC)</li>
                                    <li>Software testing and support</li>
                                    <li>Real-time application support</li>
                                    <li>Plant simulation and 3D modeling</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Level 2</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Monitoring and analysis support</li>
                                    <li>Engineering tool development</li>
                                    <li>Asset management services</li>
                                    <li>PLC selection, programming and commissioning</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Level 3</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Conversion and migration of control software</li>
                                    <li>Development of drivers as well as OPC servers</li>
                                    <li>Supervisory Control & Data Acquisition (SCADA) services</li>
                                    <li>GUI (Graphical user interface) / HMI (Human machine interface) development</li>
                                    <li>Communication protocol development</li>
                                    <li>Real-time application support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Process Planning and Automation
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is one of the most reliable providers of process planning and automation services for over 2 decades. Though production efficiency and improved quality are the two main benefits, other advantages include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Better inventory management by optimizing the flow of materials and people</li>
                            <li>Reduced manufacturing planning time by planned distribution of resources</li>
                            <li>Reduction of work-in-progress</li>
                            <li>Better layout planning, ensuring cost savings</li>
                            <li>Accurate assessment, detailed planning and accurate cost estimation</li>
                            <li>Improved collaboration and reuse for faster development</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Contact Nimble Acuity for Offsite Process Planning and Automation Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Changing economic conditions and demand volatility have changed the way manufacturing companies work. Our automation tools and automation software help you stay one notch ahead of your competitors and better serve your customers' needs. Utilizing a mix of computer-aided process planning and manual planning, we can help you optimize and improve your production process. With a qualified team of engineers, quality analysts, project managers, and business experts, we can help you achieve your business objectives quickly.
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

export default ProcessPlanning;