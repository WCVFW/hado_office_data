import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const Max3DServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            3ds Max Modeling Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to state-of-the-art 3D modeling, animation, and rendering services for your design visualization.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you struggling to create high-quality models, animations, and design visualizations? If so, you've come to the right place. Nimble Acuity is a leading 3ds Max modeling service provider and can help you with all your 3ds Max modeling needs. We use the powerful rendering and 3D modeling tools of the 3ds Max software to create professional-grade 3D animations, virtual reality visualizations, and models.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The 3ds Max software comes with comprehensive, efficient, and flexible toolsets that we have expertise in leveraging to create high-quality 3D content in less time. Our experienced team can successfully address the 3ds Max modeling requirements of product designers, architectural companies, video game firms, interior designers, and other entities looking for top-tier 3D modeling services.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            3ds Max Modeling Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a leading provider of 3ds Max modeling solutions, we have successfully addressed the needs of clients worldwide. Our comprehensive services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Modeling and Texturing Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Using the Weighted Normals Modifier</li>
                                    <li>Open Shading Language Support</li>
                                    <li>Using Spline Workflows and Tools</li>
                                    <li>Using the Chamber Modifier</li>
                                    <li>Blended Box Map Services</li>
                                    <li>Editing Material, Color, and Texture</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Animation and Effects</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Creating Realistic Liquid Behavior</li>
                                    <li>General Animation Tools</li>
                                    <li>Character Animation & Rigging</li>
                                    <li>Particle Flow Effects</li>
                                    <li>Third-party Plugin Integration</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Rendering Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Nitrous Viewport for Improved Quality</li>
                                    <li>Simulating Real-world Camera Settings</li>
                                    <li>Use of Activeshade Viewport</li>
                                    <li>Arnold GPU Renderer</li>
                                    <li>Scene Converter Services</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workflow and Pipeline Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>CivilView Workflow</li>
                                    <li>Autodesk Viewer Workflow</li>
                                    <li>Customized Workspaces & Interfaces</li>
                                    <li>Updated Project Tools</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Design Visualization Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Photo-real Visualizations</li>
                                    <li>Architectural Designs with Artistic Control</li>
                                    <li>Physically Based Lighting Services</li>
                                    <li>Efficient CAD and BIM File Import</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Games and Entertainment Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Robust Scene Modeling</li>
                                    <li>Creating Stunning Characters</li>
                                    <li>Physically-based Rendering</li>
                                    <li>Dynamic Visual Content Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource 3ds Max Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of 3ds Max modeling services. Our depth of experience has made us the go-to partner, and we work hard to maintain our reputation. Outsourcing to us makes sense for a whole host of reasons, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing Options:</strong> Our services are extremely affordable and designed to fit a wide variety of budgets.</li>
                            <li><strong>High-quality Services:</strong> As an ISO-certified organization, we are committed to delivering the highest quality services.</li>
                            <li><strong>Superb Infrastructure:</strong> Our team works in world-class office spaces equipped with the latest technology.</li>
                            <li><strong>Tools and Technologies:</strong> We use the latest versions of 3ds Max to provide cutting-edge services.</li>
                            <li><strong>Structured Process:</strong> Our streamlined and systematic processes allow for consistent, superior service delivery.</li>
                            <li><strong>Experienced Team:</strong> Our engineering team has over 26 years of experience in product design and development.</li>
                            <li><strong>Data Security:</strong> We are ISO/IEC 27001:2022-certified and take all steps to ensure your data is always secure.</li>
                            <li><strong>Short Turnaround:</strong> Our experts will always provide their services well within the stipulated deadline.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource 3ds Max Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of 3ds Max modeling services to clients from all over the world. Our team has 26+ years of experience in providing a wide range of 3D modeling, animation, rendering, and visualization services. We leverage the full power of the 3ds Max software to produce stunning results every time.
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

export default Max3DServices;