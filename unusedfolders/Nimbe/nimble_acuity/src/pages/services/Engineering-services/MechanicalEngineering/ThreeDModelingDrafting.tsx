import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ThreeDModelingDrafting: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            3D Rendering, Modeling, & Drafting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            From concept to product launch, our multidisciplinary 3D modeling services aim at building the future. Partner with Nimble Acuity to minimize overhead costs and maximize quality.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you struggling to access the right resources and talent for 3D modeling and drafting requirements? Do you find it hard to bring life to your ideas for marketing, visualizations, prototyping, etc.? Then the best option for you would be to outsource 3D modeling and mechanical drafting services to an experienced 3D modeling service provider.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity boasts of a highly skilled and creatively motivated team of modelers, drafters, and engineers delivering 3D modeling services for various industries. We focus on 2D to 3D modeling services using specific software. Our team develops a mathematical representation of any surface of the object in 3-dimensional views. We work with budding entrepreneurs, urban planners, interior designers, and established engineering companies to realize their 2D design ideas into 3D digital prototypes.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            3D Modeling & Mechanical Drafting Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our expertise in tools like AutoCAD, Pro/Engineer, CATIA, and I-Deas delivers high-quality 3D modeling and drafting solutions. We have a proven track of satisfied clients from industries like automobiles, aerospace, piping, packaged food, electronics and consumer goods, telecom, medical devices, marine vessels, and general engineering. Following are some of the major 3D modeling and drafting services we offer:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Wireframe creation</li>
                            <li>3D feature-based modeling</li>
                            <li>Solid modeling</li>
                            <li>Freeform surface modeling</li>
                            <li>Automated design of assemblies</li>
                            <li>Validation/verification of designs against specifications and design rules</li>
                            <li>Bi-directional parametric association</li>
                            <li>Kinematics, interference, and clearance checking of assemblies</li>
                            <li>Inclusion of programming code in a model to control and relate desired attributes of the model</li>
                            <li>3D models/assemblies from 2D details/assemblies</li>
                            <li>3D rendering of full-fledged manufacturing drawings</li>
                            <li>3D sectional views and CAD models</li>
                            <li>3D model exploded assembly views</li>
                            <li>3D design models using reverse engineering methodology</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Outsourcing 3D Modeling and Drafting Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsource 3D modeling and mechanical drafting services to Nimble Acuity to ensure top-quality services in a quick turnaround time. Some of the major benefits of choosing us are:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>High-quality</strong> prototype visualization to provide enhanced designs that meet quality standards.</li>
                            <li>Adherence to client guidelines and <strong>competitive pricing</strong>.</li>
                            <li><strong>State-of-the-art infrastructure</strong> for delivery and support meeting global time zones.</li>
                            <li>Leverage the latest and advanced <strong>tools and technologies</strong>.</li>
                            <li>We have <strong>global delivery centers</strong>, which enable us to provide efficient services within a short time.</li>
                            <li>We provide our clients with easily scalable mechanical 3D modeling services.</li>
                            <li>We have some of the most skilled and qualified mechanical engineers onboard.</li>
                            <li>We provide a dedicated manager who will be the SPOC for all your needs.</li>
                            <li>We are an ISO/IEC 27001:2022 ISMS certified organization which ensures complete data security.</li>
                            <li>Easy transition to the production floor.</li>
                            <li>Accurate virtual settings creation.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource 3D Modeling and Mechanical Drafting Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We have been delivering top-quality 3D modeling and mechanical drafting along with a series of other mechanical engineering services to global clients for over two decades. This rich industry-specific experience enables us to provide quick and accurate services for your needs. We also provide quality services of piping design and drafting, 3D modeling and rendering, and CAD conversion, among many others.
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

export default ThreeDModelingDrafting;