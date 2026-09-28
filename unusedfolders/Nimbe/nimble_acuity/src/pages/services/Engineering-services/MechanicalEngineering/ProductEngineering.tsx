import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ProductEngineering: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Product Engineering & Development
                        </h2>
                        <p className="text-lg text-gray-600">
                            Nimble Acuity provides end-to-end product engineering and development solutions, from initial concepts to final manufacturing support.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, our engineers work with your requirements to provide tangible designs and development solutions. We apply proven processes and methods, incorporating aesthetics, ergonomics, and visual appeal into the product design and development process.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We have proven skills in machine design services, work holding devices, fixtures, and die and mold designs. Where feasible, our design team not only provides workable prototypes but also helps source raw materials and arranges for manufacturing in cost-effective geographical locations.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Product Engineering Services
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Design Brief</li>
                            <li>Concept Generations</li>
                            <li>CAD & CAE</li>
                            <li>Prototype Development and Testing</li>
                            <li>Evaluation and Documentation</li>
                            <li>Manufacturing Support</li>
                        </ul>
                    </div>

                    {/* Software Expertise */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Software Expertise
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our mechanical design and analysis team has rich experience using the following software:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Pro/Engineer</li>
                            <li>CATIA V5</li>
                            <li>Unigraphics</li>
                            <li>SolidWorks</li>
                            <li>Autodesk Inventor</li>
                            <li>AutoCAD</li>
                            <li>Ansys</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Outsourcing Product Design Services to Nimble Acuity
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Proven expertise</strong> in product and machine design across various industry verticals.</li>
                            <li><strong>Thorough understanding</strong> of the entire Product Lifecycle, from design, manufacturing, and service to obsolescence.</li>
                            <li><strong>Strong Finite Element Analysis skills</strong> and background in experimental testing, with patents filed in the US.</li>
                            <li><strong>Proficiency in New Product Introduction (NPI)</strong> and global outsourcing practices.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Contact Nimble Acuity to Engineer the Future
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leader in providing product engineering and development services. We are ready to help you bring your innovative ideas to life.
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

export default ProductEngineering;