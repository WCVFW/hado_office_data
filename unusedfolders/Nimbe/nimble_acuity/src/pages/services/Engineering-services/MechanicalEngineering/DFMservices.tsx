import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const DFMservices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Design for Manufacturing (DFM) Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Nimble Acuity helps manufacturers bring ideas to reality with smart, detailed, and highly accurate models.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity helps manufacturers bring ideas to reality with smart, detailed, and highly accurate models for various phases, from concept to design to full-scale production and distribution. We offer high-precision machine detailing work and modeling of complex components from blueprints or through reverse engineering. Our end-to-end services follow comprehensive processes and are closely monitored by our skilled team to ensure quality, reliability, durability, safety, and sustainability.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            ISO processes, a global delivery framework, consistent and accurate design support, timely delivery, and competitive pricing make Nimble Acuity a preferred service partner to an extensive list of growing clients. As a pioneer in engineering support services, we have helped hundreds of clients materialize their concepts with the latest technological support.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our DFM Services - End-to-End Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity offers DFM-related engineering services that help manufacturers bring their designs to the production floor without hassles. Our team can provide clarity on designs that positively impact the final product, helping to avoid expensive and time-consuming manufacturing issues at the design level. We offer assistance based on environmental and geographical standards and regulations to ensure your product complies with all major international design requirements.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Computer-Aided Design Development</h4>
                                <p className="leading-relaxed">
                                    Our skilled team of designers and drafters are proficient in using all the latest 3D engineering software and are aware of manufacturing guidelines. We help clients by digitizing prototypes and concepts to prepare a production-ready design, analyzing intricate details to provide insights on weight, part interaction, and strength to significantly reduce development cost and time to market.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Engineering/Manufacturing Design Prototyping</h4>
                                <p className="leading-relaxed">
                                    We help our clients with digital prototypes that carry details about materials, fabrication, exploded views, and more to speed up the production process.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our 5-Step DFM Process Flow
                        </h3>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Understand the design requirements</strong> along with the DFM checklist.</li>
                            <li><strong>Work on a digital prototype</strong> of the design and send it for client approval.</li>
                            <li><strong>Prepare the final designs</strong> in the required software.</li>
                            <li><strong>Conduct quality checks</strong> and audits.</li>
                            <li><strong>Submit the final draft</strong> and sign off.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity as Your DFM Partner?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our services include integrated design, simulation, prototyping, and manufacturing. We configure our tools to ensure the development and delivery of your product are risk-free and meet quality and cost targets. We work with our customers to develop new or existing product specifications, ensuring clarity of design flows throughout the supply chain.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                            <li>We implement projects under a concurrent engineering environment, simulating, testing, and optimizing your product design before committing to manufacture.</li>
                            <li>Our experience in electromagnetic modeling, 3D CAD, and Finite Element (FE) thermal and structural analysis enables us to achieve these targets.</li>
                            <li>We utilize rapid prototyping machines to turn our designs into physical reality in a variety of inexpensive materials, reducing risks before committing to volume manufacturing.</li>
                            <li>We offer our services for new products as well as to fine-tune existing ones.</li>
                        </ul>
                        <h4 className="text-xl font-bold text-[#006A7C] mb-4">
                            Benefits of Outsourcing DFM Services to Nimble Acuity
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Qualified, experienced, and skilled teams of drafters.</li>
                            <li>Designs and drafts with up to 99% accuracy.</li>
                            <li>Adherence to all major international standards and specifications.</li>
                            <li>Extensive experience working on international assignments.</li>
                            <li>Customized services to fit your firm's requirements.</li>
                            <li>Data security, privacy, and confidentiality.</li>
                            <li>Low-cost services with no compromise on quality.</li>
                            <li>On-time delivery for every occasion.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Contact Nimble Acuity for Your DFM Requirements
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With a highly professional team of mechanical engineers, drafters, and modelers, we offer a comprehensive list of mechanical engineering services for multiple industries, including aerospace, defense, medical, consumer products, and more. Give your designs the wings they need by trying our offsite Design for Manufacturing services.
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

export default DFMservices;