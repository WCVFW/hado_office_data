import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ScanningMeasurementServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Scanning, Measurement, and Digitizing Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Receive professional 3D scanning, measurement, and digitizing services to extract precise dimensions and create high-quality, editable 3D models.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading provider of digitizing services that include 3D scanning and measurement offerings. We understand that 2D/3D scanning and digitization, or reverse engineering, enable you to extract the exact dimensions of a component for reproduction. We help you with 3D modeling and drafting of missing components and assist with digitizing historical drawings to create editable, reusable 3D models.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            To help you focus on core business activities, we take the load off you with our wide range of reverse engineering, prototyping, 2D/3D scanning, and measurement services. Whether you need a point-cloud file, an intelligent PDMS database, or a fully featured 3D CAD-based model (DWG, DGN, etc.), we provide a suitable solution.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Scanning, Measurement, and Digitizing Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our team of adept CAD engineers utilizes the latest technological expertise to provide highly precise 2D/3D scanning and measurement services. We have designed our services to cater to a wide range of requirements across various industries. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">White Light Scanning & Laser Measurement</h4>
                                <p className="leading-relaxed">
                                    We use advanced technology to capture detailed and accurate measurements for your products and projects.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">3D Inspection & Geometric Inspection</h4>
                                <p className="leading-relaxed">
                                    Our inspection services ensure that your designs and products meet precise geometric and quality standards.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Scan Data Testing & Analysis</h4>
                                <p className="leading-relaxed">
                                    We provide comprehensive analysis of scan data to identify potential issues and ensure data integrity.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Class A Surfacing Services</h4>
                                <p className="leading-relaxed">
                                    Our experts create high-quality, aesthetically pleasing surfaces for your product designs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Industry Applications */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Industry-Specific Applications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Manufacturing Requirements</h4>
                                <p className="leading-relaxed">
                                    Nimble Acuity provides precise scanning and measurement services to manufacturing industries, helping them expedite product manufacturing by aiding in 3D modeling requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Heritage and Real Estate Requirements</h4>
                                <p className="leading-relaxed">
                                    Utilizing accurate 3D point cloud information, we help you create blueprints for heritage sites or real estate projects, and assist with clash detection and BIM model creation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Scanning & Measurement Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity supports all digitizing and reverse engineering requirements with our efficient 3D scanning and software modeling services. Our team of specialists is professionally qualified and well-trained to understand the critical and intricate nature of any project. We provide:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Fast, Accurate Results:</strong> We help reduce your time to market with our efficient processes.</li>
                            <li><strong>Comprehensive Scanning:</strong> We ensure accurate data capture and delivery.</li>
                            <li><strong>Fully Featured CAD Models:</strong> Our services are backed by the creation of high-quality CAD models.</li>
                            <li><strong>Strategically Located:</strong> We provide uninterrupted client support due to our global presence.</li>
                            <li><strong>Domain Expertise:</strong> Our decades of domain expertise ensure a proven and reliable delivery model.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Scanning, Measurement, and Digitizing Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Outsourcing your scanning, measurement, and digitizing services to Nimble Acuity can help you meet your business objectives at cost-effective rates. Our team will work with you to find the most efficient option and help you meet your project objectives.
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

export default ScanningMeasurementServices;