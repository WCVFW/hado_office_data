import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const Mechanical3DAnimation: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Mechanical 3D Product Animation Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Receive high-quality and realistic 3D product animations and illustrations to showcase your products with precision.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity’s product animation team provides illustrative and high-quality, realistic 3D animations and illustrations. We have in-depth expertise in working with 3ds Max and Maya for animation, and Inventor, SolidWorks, AutoCAD, and other commercial 3D modeling packages for both 3D modeling and animation projects. Our 3D product animations of mechanical parts, components, and machines are created to ensure client requirements are met with accuracy.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We create detailed 3D models from sketches, 2D CAD data, or specifications. Using product animation, we help you showcase the functionality of a product and highlight specific components as per your request. Nimble Acuity is equipped with the latest technology and infrastructure to meet any complex requirement.
                        </p>
                    </div>

                    {/* Stages */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Stages in 3D Mechanical Product Animation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Every project is unique, and our 3D animation process includes frequent quality checks at every stage to ensure a flawless final product. Our streamlined process involves the following steps:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Receive Inputs:</strong> We start by receiving the storyboard or animation narration, along with any existing drawings or 2D models.</li>
                            <li><strong>Create 3D Models:</strong> We either use your existing 3D models or create new, detailed models required for the animation.</li>
                            <li><strong>Apply Material Properties:</strong> Our team applies realistic material properties to the 3D models.</li>
                            <li><strong>Initial Composite:</strong> We define camera angles, apply proper lighting, and create a composite to be sent to you for initial approval.</li>
                            <li><strong>Finalize Design:</strong> We get your final approval for the design and requirements before moving forward.</li>
                            <li><strong>Render & Review:</strong> The final rendering of the product animation is created and sent to you for a final review.</li>
                            <li><strong>Deliver Final Product:</strong> We perfect the final rendering and deliver the completed 3D product animation to you.</li>
                        </ul>
                    </div>

                    {/* Industry Expertise */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Team and Industry Expertise
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our team of experienced and highly skilled mechanical design experts and engineers creates 3D models and products that adhere to global standards and practices. Our animators have an average of 3 to 5 years of experience creating product animations for various industries, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <li>Piping</li>
                            <li>Paper Manufacturing</li>
                            <li>Special Purpose Machine Industries</li>
                            <li>Hydraulic Equipment Manufacturing</li>
                            <li>Process Industries</li>
                            <li>Mining</li>
                            <li>Sports Equipment Manufacturing</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource 3D Animation to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            For cost-effective, true-to-life 3D renderings of mechanical product animations, partner with Nimble Acuity and get the best return on your investment. We work alongside you to shorten the project lifecycle and ensure improved performance of your product from concept to completion.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>We provide comprehensive services, from 3D industrial design and mechanical rendering to prototype animation and 3D walkthroughs.</li>
                            <li>Our services are highly beneficial for showcasing product functionality and for legal and investigative purposes, such as analyzing mechanical engineering failures.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Mechanical 3D Product Animation Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of 3D animation services. If you have a 3D Mechanical Product Animation requirement, trust us to provide a solution that is within your budget. We work on a global time zone to cater to client needs 24/7.
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

export default Mechanical3DAnimation;