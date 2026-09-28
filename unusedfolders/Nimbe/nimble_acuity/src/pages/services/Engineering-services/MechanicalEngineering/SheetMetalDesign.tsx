import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const SheetMetalDesign: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Sheet Metal Design Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Sheet metal designing facilitates efficient production cycles and improved interoperability with contractors and suppliers.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Professional sheet metal designs compliant with industry standards help businesses optimize and accelerate their manufacturing process, making them extremely important. Engineers in the manufacturing industry find metal and sheet metal designing quite challenging since they need to comply with existing rules and quality standards while delivering tasks within quick deadlines.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our team has extensive experience with sheet metal components for both aesthetics and functional designs and can shorten lead times with reduced scrap and material costs. Our vast experience and knowledge of sheet metal cutting design help us provide high-quality sheet metal design services as per international standards to global customers.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Sheet Metal Design Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we specialize in providing end-to-end services for sheet metal design, including product design, development, and optimization. Our team of sheet metal experts uses state-of-the-art CAD and CAE tools and a systematic approach to design sheet metal parts. This enables us to provide effective services that meet customer requirements on time and within the budget.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <ul className="list-disc list-inside space-y-2 col-span-2">
                                <li>Identifying crucial design parameters and specifications</li>
                                <li>Designing 2D and 3D solid sheet metal components followed by assembly-drafting and modeling using software such as DriveWorks</li>
                                <li>Importing and converting 3D CAD models into Solidworks sheet metal models while keeping in mind the exact K-factor, thickness, and bend radius</li>
                                <li>Generating base, miter, bends, sketched bends, edges, swept flanges, lofted bends, etc. using Solidworks</li>
                                <li>Developing accurate fabrication drawings, 3D sheet metal models, manufacturing drawings, 2D flat drawings, and assembly drawings according to manual blueprints</li>
                                <li>Creating precise sheet metal forming designs which maintain the exact form height-to-thickness ratio, specified critical dimensions, bend radius, bend relief, embosses, and offsets for easier manufacturing processes</li>
                                <li>Estimation and Costing for your sheet metal design projects</li>
                                <li>Including sheet metal welding details for specific sheet metal parts on drawings and models</li>
                                <li>Efficient metal furniture product design and sheet metal part design for equipment with acute bends</li>
                                <li>Accurate sheet metal cutting design and fire protection equipment design</li>
                                <li>Fabricated metal and alloy product design</li>
                            </ul>
                        </div>
                    </div>

                    {/* Industries We Serve */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Industry Sectors We Cater To
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With extensive experience in providing fabrication, 2D manufacturing designs, and sheet metal cutting designs, we have been serving numerous global clients across different industry sectors. Some of the major industries we cater to are:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700">
                            <ul className="list-disc list-inside space-y-2 col-span-1 md:col-span-1">
                                <li>Automobile</li>
                                <li>Aerospace</li>
                                <li>Electronics</li>
                                <li>Power</li>
                                <li>Transport</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2 col-span-1 md:col-span-1">
                                <li>Telecom</li>
                                <li>Building Components</li>
                                <li>Oil and Natural Gas</li>
                                <li>Medical</li>
                                <li>Furniture Manufacturing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Sheet Metal Design?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            From preparing accurate cost estimates to providing accurate design information on complex sheet metal designs, our professionals will help you with everything. Following are some of the major benefits of outsourcing sheet metal cutting designs to us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Highly Affordable Pricing:</strong> We have different types of engagement models, which help clients to pay as per their design requirements.</li>
                            <li><strong>Use of the Latest Tools & Technologies:</strong> We leverage the latest tools and technologies to provide top-quality design services that precisely cater to your needs.</li>
                            <li><strong>Global Delivery Centers:</strong> We have multiple delivery centers strategically set up across the globe to provide reliable mechanical engineering and design services to our global clients.</li>
                            <li><strong>Quality Management and Workflow:</strong> We follow a streamlined process which includes defining, analyzing, designing, and verifying to provide top-quality designs.</li>
                            <li><strong>State-of-the-art Engineering Infrastructure:</strong> Our state-of-the-art engineering infrastructure at each of our global delivery centers empowers us to provide unmatched sheet metal designs.</li>
                            <li><strong>Team of Certified Design Experts:</strong> Our team of certified design experts leverages our advanced engineering facilities and delivers designs that help you develop superior products.</li>
                            <li><strong>Complete Data Security:</strong> With us, you can be assured of complete data security as we have stringent security measures in place to ensure that the data shared with us is not compromised.</li>
                            <li><strong>Swift Turnaround Time:</strong> We ensure that all the design projects we undertake are completed well within the stipulated time, preventing any delay in bringing the product to the market.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Choose Nimble Acuity for Professional Sheet Metal Design Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading outsourcing company offering top-quality mechanical engineering services and sheet metal design services to global clients at affordable prices. By outsourcing sheet metal design services to us, you can be assured of reliable and affordable design and drafting services that help you through your projects. We offer a gamut of mechanical engineering services, which include casting design and manufacturing, mechanical CAD drafting, product design and development, etc.
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

export default SheetMetalDesign;