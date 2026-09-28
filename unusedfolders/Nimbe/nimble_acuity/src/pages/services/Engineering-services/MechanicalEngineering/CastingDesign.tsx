import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const CastingDesign: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Casting Design and Manufacturing Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            If your company is looking for expert casting design or manufacturing services, you have come to the right place. Nimble Acuity is one of the world's best providers of casting engineering services.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The casting design and manufacturing team at Nimble Acuity has designed and manufactured complex shapes for several global customers with the aid of the latest casting software tools and technologies. The cast products delivered by the Nimble Acuity team are used in industries like Heavy Engineering, Aviation, and Automotive, amongst others.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With concurrent engineering services, well-established quality processes, and superlative design methodology, we can ensure shorter and more efficient design and manufacturing cycles. Choose Nimble Acuity as your casting engineering design services partner and give your business a competitive edge.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's Casting Design & Manufacturing Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <ul className="list-disc list-inside space-y-2 col-span-2">
                                <li>Patterns made of Wooden/Aluminum/Cast Iron/Gun Metal etc.</li>
                                <li>Sand Casting</li>
                                <li>Shell Molding</li>
                                <li>Machine Molding (Match Plate Pattern)</li>
                                <li>Lost Wax Casting (High Precision Casting)</li>
                                <li>Non Ferrous Alloys (Aluminum, Zinc etc.)</li>
                                <li>Gravity Low Pressure</li>
                                <li>Gravity High Pressure</li>
                                <li>Plastic Mould</li>
                                <li>Investment Casting</li>
                                <li>Rubber Mould</li>
                                <li>Blow Mould</li>
                                <li>One-time solutions like Prototyping and Resin Modeling</li>
                                <li>Mold Flow Analysis - Fill Analysis, Flow Analysis, Cool Analysis & Warp Analysis</li>
                                <li>Supporting mold components such as slides, inserts, lifters, cooling lines, & gates. Runner systems can also be created on the mold components and the final design will be completed by assembling the mold components in the desired mold bases. (FUTABA, DME, HASCO, etc.)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Tools and Technologies */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Casting Design Tools & Technologies
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Design and Analysis services include:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>AutoCAD</li>
                                    <li>Inventor</li>
                                    <li>SolidWorks</li>
                                    <li>IDEAS</li>
                                    <li>Unigraphics</li>
                                    <li>Pro/Engineer</li>
                                    <li>CATIA</li>
                                    <li>HyperMesh</li>
                                    <li>MSC Nastran</li>
                                    <li>Moldflow</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Hardware facilities used at Nimble Acuity:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Pattern shop</li>
                                    <li>Foundry</li>
                                    <li>Conventional Machines</li>
                                    <li>CNC Machines</li>
                                    <li>Assembly Shop</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Our Capabilities */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Capabilities
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With the following capabilities, we have been able to provide our customers with faster time-to-market services and cost benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Rapid prototyping</li>
                            <li>Reverse Engineering</li>
                            <li>NC system study, NC tool path generation & NC Verification</li>
                        </ul>
                    </div>
                    
                    {/* Industries We Serve */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Industries We Serve
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity offers casting design & manufacturing services to the following industries:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Automotive Industries</li>
                            <li>Aerospace Industries</li>
                            <li>Textile Industries</li>
                            <li>Railway Industries</li>
                            <li>Farm Industries</li>
                            <li>Machine Builders</li>
                            <li>Printing Industries</li>
                            <li>Valve Industries</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Casting Design and Manufacturing Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leader in providing expert casting design and manufacturing services to customers around the globe. Our team leverages the latest technology and a robust design methodology to deliver high-quality, cost-effective solutions that give your business a competitive edge.
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

export default CastingDesign;