import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const JigsFixturesDesign: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Jigs and Fixtures Design Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            "The central activity of engineering, as distinguished from science, is the design of new devices, processes and systems." - Myron Tribus
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            As important as jigs and fixtures are to production processes, it is equally important that they are designed and manufactured with a supreme degree of accuracy and precision because these tiny tolerances could be the difference between a faulty final product and a flawless design. Whether you are designing a jig or fixture for drilling, turning, grinding or any other machining operations, the effectiveness, accuracy and quality of your finished product and the retrospective ability to duplicate each and every product with the same geometrical features depends on the proper design of the corresponding jigs and fixtures.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We specialize in providing jigs and fixture design services utilizing the concept of feature-based modeling, which lets you access simulation applications that can help you in visually analyzing production processes. While these also serve as inputs to automated manufacturing applications, our assembly design aids are aimed at directly relating tooling models and fixture designs to the geometry of the work pieces.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Highlights of Our Jigs and Fixtures Design
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Highly qualified and experienced team of designers with an advanced level of dexterity with CAD design applications.</li>
                            <li>Our ability to cater to your requirements by providing customized and innovative designs for your new product along with the best customer services.</li>
                            <li>Our expertise in handling complex designs and new product development cycles.</li>
                            <li>A blend of a short turnaround time and an affordable price, resulting in the best savings for you.</li>
                            <li>An efficient design that reduces your production costs and the product lifecycle costs.</li>
                        </ul>
                    </div>

                    {/* Portfolio */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Portfolio of Design Services Encompasses the Following
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Assembly fixtures</li>
                            <li>Hydraulic and Pneumatic fixtures</li>
                            <li>Checking fixtures and check gauges</li>
                            <li>Testing fixtures</li>
                            <li>Welding and Machining fixtures</li>
                            <li>Woodworking jigs and framing jigs</li>
                            <li>Boring Jig, Drilling Jig</li>
                            <li>Open or Closed Jig</li>
                        </ul>
                    </div>
                    
                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Jigs and Fixtures Design Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our team of design engineers is looking to fulfill each of your requirements in the design of jigs. We define the process of "starting from scratch" in our step-by-step approach to your design requirements, from laying out 2-dimensional drawings and extrapolating them to 3-dimensional visualization, to finishing the required product and preparing the process sheet with the table of contents and the bill of materials.
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

export default JigsFixturesDesign;