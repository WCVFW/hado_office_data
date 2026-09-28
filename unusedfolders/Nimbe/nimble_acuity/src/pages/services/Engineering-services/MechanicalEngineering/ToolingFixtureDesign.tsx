import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ToolingFixtureDesign: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Tooling and Fixture Design and Drafting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We provide comprehensive and detailed design and drafting services using advanced process simulation and automation tools.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you struggling to remain competitive in the ever-evolving manufacturing and engineering industry and keen on optimizing existing capabilities and resources? Are you looking for tooling and fixture design and drafting services that provide you with high-performance products? Are you looking to partner with a tooling and fixture design company that can design component and assembly tools? If so, you can benefit significantly from our tooling and fixture drafting services.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading tooling and fixture design service provider and can deliver customized tooling design prototypes to suit clients' requirements perfectly within the stipulated timeframe and budget. We have the capability and infrastructure to design assembly and component tools to create almost anything from complex industry structures to one-off prototypes. From rubber press tools to GRP molds, hammer forms to cast iron draw dies, Nimble Acuity will design and draft the perfect fixture drafting devices and tools for your specialized needs.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Tooling and Fixture Design And Drafting Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is one of the most popular companies when it comes to outsourcing fixture drafting services or tooling drafting services. We have significant experience and expertise in fixture design, tooling, and drafting services. Key services we offer include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Tooling Design Services</h4>
                                <p className="leading-relaxed">
                                    Nimble Acuity's knowledge and experience in all streams of tooling design empower us to provide services that adhere to the industry's best practices and standards. A practical and systematic approach in tool design services helps us to deliver cost-effective tooling solutions with a focus on process and product innovation. We offer a complete range of services right from tool designing to tool manufacturing.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Fixture Design Services</h4>
                                <p className="leading-relaxed">
                                    Fixtures and jigs are crucial to any production process. The design and manufacturing procedures of fixtures must be extremely accurate, and should display a high level of precision. Nimble Acuity has the expertise to deliver products with the same geometric features repeatedly. We ensure that our products are QC tested and assure accurate compliance to our client's standards.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Drafting Services</h4>
                                <p className="leading-relaxed">
                                    Nimble Acuity is backed by years of experience and has an extremely skilled and experienced talent pool that provides remarkable services irrespective of the nature or complexity of your project. Our team is in tune with the latest developments in their technical fields and makes use of those learnings in their work.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Tooling and Fixture Design Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing tooling and fixture design services to us provides you with many benefits, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Solutions:</strong> We provide all our services with the highest precision and quality, while ensuring they are priced extremely cost-effectively.</li>
                            <li><strong>In-depth Understanding of the Industry and Processes:</strong> Nimble Acuity understands the importance of jigs, tooling, and fixture design. We keep in mind that an innovative and creative approach to a client's problem is of the utmost importance.</li>
                            <li><strong>Custom Services:</strong> Nimble Acuity is a mature company that is very well equipped to handle all your bespoke requirements. Our team is accustomed to working in multiple environments and delivering solutions that meet your requirements precisely.</li>
                            <li><strong>Design Optimization:</strong> We are focused on delivering solutions that will save you both time and money, and ensure accuracy and repeatability over the product's working life.</li>
                            <li><strong>Variety of Work:</strong> We have handled a vast variety of complicated product assemblies, so when you outsource tooling design to us you can expect the highest quality of products delivered to you.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Tooling and Fixture Design Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you are planning to outsource fixture design, tooling, or drafting services and are looking for a company that can provide high-quality solutions at an affordable price and a faster turnaround time, Nimble Acuity is your ideal offshore partner.
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

export default ToolingFixtureDesign;