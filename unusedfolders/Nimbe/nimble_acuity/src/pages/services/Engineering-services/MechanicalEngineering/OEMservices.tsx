import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const OEMservices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            3D Modeling, Drafting, and Rendering Services for OEM
                        </h2>
                        <p className="text-lg text-gray-600">
                            Simplify prototyping, create easy-to-edit 3D component models, and fast-track product design development.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Developing high-quality component prototypes is crucial to design parts that function precisely as intended. However, experimenting with designs is a time-consuming and cost-intensive process. Even if businesses like yours successfully develop models, subsequent steps, such as creating 360-degree views and tweaking your renditions, impact overall efficiency. This is where you should consider outsourcing 3D modeling, drafting, and rendering services for OEM.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a 3D modeling, drafting, and rendering services company for OEMs, assisting clients across the US and European markets to simulate product parts/components. Our engineers and designers serve hardware vendors, component makers, and channel partners such as distributors/resellers worldwide. We create photo-realistic prototypes of original parts/components for manufacturing, sales, marketing, and eCommerce applications with our customized services.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our professional 3D modeling and rendering solutions enable you to create high-definition OEM models suitable for games, AR/VR projects, and more. We help you convert static images and deliver outputs in file formats of your choice, such as FBX, MAX, OBJ, C4D, and 3DS. Some of the services we offer are:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">3D Drafting Services for OEMs</h4>
                                <p className="leading-relaxed">
                                    Leverage advanced technologies to convert blueprints and sketches into accurate 2D drafts. This maximizes efficiency by eliminating errors.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">3D Rendering Services for OEMs</h4>
                                <p className="leading-relaxed">
                                    Get 3D custom rendering support to transform your equipment designs into life-like images with our 3D rendering solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">3D CAD Modeling</h4>
                                <p className="leading-relaxed">
                                    Develop accurate computer models of parts, product components, and assemblies for complex simulations/digital prototyping with 3D CAD modeling.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Visualization</h4>
                                <p className="leading-relaxed">
                                    Blend artwork, images, and rendering to showcase innovative component designs to your target audience with our product visualization support.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Assembly Modeling</h4>
                                <p className="leading-relaxed">
                                    Explore assembly modeling to combine computer-aided design and product visualization software to streamline design with your production planning.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Designing and Detailing</h4>
                                <p className="leading-relaxed">
                                    Get product designing and detailing assistance to assess the aesthetics, functionality, and feasibility of equipment parts/components.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why You Should Choose Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our 3D modeling solutions are designed to spot design flaws early, minimize intermediate prototypes, and make the designing process risk-free. Here are some of the top benefits of choosing our services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Quality of Designs:</strong> As an ISO 9001:2000 certified company, we follow a structured workflow emphasizing quality.</li>
                            <li><strong>Client Confidentiality & Data Security:</strong> We are GDPR-compliant. We ensure that all our processes are compliant to prevent data breaches.</li>
                            <li><strong>Swift Turnaround:</strong> We plan, allocate tasks, and conduct periodic reviews to ensure projects are on track without any scope for delay.</li>
                            <li><strong>Innovative Design Tools and Software:</strong> Our advanced tools help you design complex concepts and create multiple prototypes in minutes.</li>
                            <li><strong>Global Delivery Centers:</strong> Get world-class talent to work on your projects. Our professionals serve you from strategically located global offices.</li>
                            <li><strong>Customized Pricing:</strong> We offer quality services at competitive rates. Our pricing models are dynamic, based on current industry standards, and are project-specific.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource 3D Modeling for OEM to Scale Quickly and Design Efficiently
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Every client is unique, so we assess the requirements of every client and assign pre-vetted designers to improve the project's accuracy. Whether complex reverse engineering is on your mind or you want to evaluate part components, our services are designed to cater to your unique needs. Equipment vendors, part manufacturers, and other entities worldwide are leveraging our services to create 3D models.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Do you already have an in-house team to work on your component designs? Then, we will work as an extension of your existing design team and help you make the most of your technological investments. Enhance design accuracy, minimize operational overhead, and scale quickly with our 3D modeling, drafting, and rendering services for OEM.
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

export default OEMservices;