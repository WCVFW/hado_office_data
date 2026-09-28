import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ThreeDPartModeling: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            3D Part Modeling Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            With decades of 3D CAD design experience, Nimble Acuity provides superior 3D part modeling services to our ever-increasing list of satisfied clients.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity's customer-centric approach allows us to focus on defined concepts and requirements while providing precise modeling services. Our modelers and draftsmen opt for AutoCAD, 3D Studio Max and Sketch-up to produce vivid 3D models that are highly professional and thorough.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Not just at surface modeling, we are also proficient in migrating accessible CAD data from any specified platform to the other. We provide both detailed and exploded views to help you understand the complexities and intricacies of the designed parts to get a clear idea about their uniqueness.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our 3D Part Modeling Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Be it a design that needs to go directly to the production floor or something that is designed for a creativity workshop, our draftsmen are equipped and skilled to meet your expectations. Our models are highly accurate & precise and follow client specifications with care. Reducing the time-to-market for our clients, we provide services to clients spanned across industries including Automotive, Aviation, etc. We cover a vast range of 3D part modeling services that include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">3D Fixtures Modeling</h4>
                                <p className="leading-relaxed">
                                    Multi-view representation and modeling for various machine parts, jigs, automotive parts, etc.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">3D Component Modeling</h4>
                                <p className="leading-relaxed">
                                    Modeling for precise glass, electronic, automobile, aerospace, kitchenware and other parts.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">New Conceptual Drawings</h4>
                                <p className="leading-relaxed">
                                    Modeling from sketches and other drawings to 3D models.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Fully Detailed Parts and Assembly Drawings</h4>
                                <p className="leading-relaxed">
                                    For costing, quoting, product promotion, and manufacturing requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Reverse Engineering 3D Modeling Services</h4>
                                <p className="leading-relaxed">
                                    Converting 2D parts and assemblies to 3D solid CAD models.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">3D Modeling for Sheet Metal and Plastic Molding</h4>
                                <p className="leading-relaxed">
                                    We create precise 3D models for sheet metal and plastic molding applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            What Makes Our 3D Part Modeling Services Stand Out?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, our stringent quality standards help us provide comprehensive 3D part modeling services that meet client needs and come within a specified budget. Our models are highly flexible and can be modified depending on the requirement.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>A <strong>99% quality guarantee</strong>, ensuring all your 3D modeling projects are as per your specifications.</li>
                            <li><strong>Faster turnaround time</strong> for all your projects.</li>
                            <li>Faster time-to-market and reduced design cycle times.</li>
                            <li>Significantly <strong>lower costs</strong> as compared to our competitors.</li>
                            <li>Higher ROI on product development.</li>
                            <li>Significant <strong>security measures</strong> to protect client information and data.</li>
                            <li>Advanced 3D modeling software to create part models.</li>
                            <li>Experienced engineers catering to your designing needs.</li>
                            <li><strong>24/7 support</strong> for changing requirements.</li>
                            <li>Knowhow of advanced 3D modeling technologies.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Choose Nimble Acuity for Reliable & Cost-effective 3D Part Modeling Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We focus on shortening the design lifecycle of your projects and streamlining the manufacturing process. By providing precise 3D part models at competitive prices with reduced turnaround time, Nimble Acuity is a smarter choice. We are always excited to take up new and challenging 3D part modeling projects. If you have any requirements that need a 3D modeling service partner, we are here to help.
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

export default ThreeDPartModeling;