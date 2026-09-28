import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const CNCProgrammingServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            CNC Programming Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Enhance your manufacturing efficiency and aim for better precision and speed with our expert CNC programmers. Let our M & G code specialists optimize your production process.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Our specialists are adept in the core languages essential for CNC machines, which allows us to develop sophisticated software solutions for your manufacturing chores. We employ advanced CAD/CAM software to transform complex designs into precise and executable CNC programs, ensuring a flawless transition from concept to production. We offer comprehensive CNC services, including milling and turning, where we use optimized tool paths, regulated feed rates, and controlled spindle speeds to manufacture parts that match your specifications.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Additionally, our expertise in rapid prototyping empowers you to quickly test and validate designs before initiating mass production. We meticulously manage critical details such as coolant management, vital for effective machining and extending tool longevity. The attention to detail is the hallmark of our CNC programming services, ensuring unparalleled quality in every project. Partner with us today to optimize your manufacturing process and increase your throughput with our proven expertise.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Custom CNC Engineering Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Experience the fusion of technology and expertise with our CNC programming and machining services, designed to enhance precision and increase productivity.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CNC Lathe Programming</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Use of advanced software like MasterCam, SolidWorks</li>
                                    <li>Craft cylindrical components with precision</li>
                                    <li>Increase production throughput significantly</li>
                                    <li>Optimize cutting path for efficiency</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CNC Mill Programming</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Employ AutoCAD, Fusion 360 effectively</li>
                                    <li>Complex 3D shape manufacturing</li>
                                    <li>Achieve maximum precision, minimal waste</li>
                                    <li>Enhance tool life through advanced techniques</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CNC Drilling Programming</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Precision-focused software for optimal operation</li>
                                    <li>Ensure fast, repeatable hole-making</li>
                                    <li>Reduce downtime, increase output</li>
                                    <li>Optimal drill path selection for efficiency</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Axis Machining Programming</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Multi-axis CAM software application</li>
                                    <li>Quick production of intricate geometries</li>
                                    <li>Elevate productivity levels</li>
                                    <li>Minimize multi-setup needs</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Solid Modeling</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Innovative design with Rhino, SketchUp</li>
                                    <li>Generate detailed, lifelike 3D models</li>
                                    <li>Efficient development, accurate programming</li>
                                    <li>Incorporate design validation seamlessly</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Machine Simulations</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Deploy advanced simulations for pre-production</li>
                                    <li>Prevent machining errors before production</li>
                                    <li>Predict manufacturing outcomes more accurately</li>
                                    <li>Simulate complex operations to forecast challenges</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Your CNC Machine Programming Services to Us?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Leverage our advanced technological capabilities and expert precision engineering to elevate your production efficiency to new heights. Our strategic methodologies minimize errors, reduce costs, and accelerate your time-to-market, giving you a formidable edge.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Precision Engineering:</strong> Our CNC machines use sophisticated technology to consistently produce complex parts with precision and repeatability.</li>
                            <li><strong>Custom Fabrication:</strong> We cater to customer requirements from prototype to production, ensuring that each component meets your specific needs.</li>
                            <li><strong>Advanced Materials Knowledge:</strong> Our team possesses extensive knowledge of a wide range of materials, enhancing the performance and durability of your products.</li>
                            <li><strong>Compliance Mastery:</strong> We adhere strictly to industry regulations, including ISO 9001 and AS9100 standards, to ensure that all products are compliant and of high quality.</li>
                            <li><strong>Rapid Turnaround Times:</strong> Accelerate your time-to-market with our efficient processes and lean manufacturing principles that reduce lead times without compromising quality.</li>
                            <li><strong>Cost-Effective Solutions:</strong> Benefit from our competitive pricing models that reduce your manufacturing costs while maintaining high-quality output.</li>
                        </ul>
                    </div>
                    
                    {/* Industries Served */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Industry-specific CNC Programming Solutions for an Optimized Supply Chain
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                            <ul className="list-disc list-inside space-y-1 col-span-1">
                                <li>Aerospace</li>
                                <li>Automotive</li>
                                <li>Manufacturing</li>
                                <li>Electronics</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-1 col-span-1">
                                <li>Heavy Equipment</li>
                                <li>Defense</li>
                                <li>Construction</li>
                                <li>Medical Equipment</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-1 col-span-1">
                                <li>Fabrication</li>
                                <li>Mining</li>
                                <li>Oil and Gas</li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource CNC Programming Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our CNC programming professionals have a deep understanding of G-code language and complex machining processes. By employing sophisticated solid modeling techniques, we translate design blueprints into accurate 3D models, further enhancing precision. Furthermore, advanced machine simulations enable programming issues to be identified and rectified before actual production, reducing errors and enhancing the accuracy of the final product.
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

export default CNCProgrammingServices;