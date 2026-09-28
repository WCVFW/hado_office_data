import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ReverseEngineering: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Reverse Engineering Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Enhance your processes and develop new products by leveraging our reverse engineering services delivered by extremely talented and skilled mechanical engineers.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Do conventional geometric measurement methods make it difficult for you to evaluate various components of any equipment? Do you find it hard to output satisfying 3D scans of your projects? Then it’s best to outsource reverse engineering services to a reputed 3D reverse engineering services provider like us.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading reverse engineering services company that assists clients in obtaining accurate 3D models from the physical components of any piece of machinery or equipment so that they can be used to improve the designs while taking manufacturing and the development process into consideration. We are an ISO-certified partner with two decades of experience, have handled complex projects, and have multiple delivery centers in various locations to cater to clients around the globe.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            3D Reverse Engineering Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            All of our mechanical engineers have significant industry knowledge, including practical expertise in product development and manufacture. Adhering to ISO 9001-2008 standards, we use top-notch analytics tools, software, and timely training. Some of the major 3D scanning reverse engineering services we offer include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Drawing & Modeling Services</h4>
                                <p className="leading-relaxed">
                                    We possess the necessary skills to produce the pertinent drawings and models needed for the project in any required format. Also, we are well-versed in using the latest engineering technologies.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CAI & CAV</h4>
                                <p className="leading-relaxed">
                                    We offer computer-aided inspection (CAI) and computer-aided verification (CAV) services to clients, ensuring that they may optimize their business's manufacturing process. It makes sure that the material and dimension consistency is constant and accurate.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Part Scanning Services</h4>
                                <p className="leading-relaxed">
                                    Our staff is exceptionally talented and experienced in the required niche to offer you part scanning services using CGI, 3D laser, CMM, etc.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Detailed Part Specifications</h4>
                                <p className="leading-relaxed">
                                    We provide our customers with precise part specs so that they will know exactly what they have and what they will need in the future.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Benchmarking Services</h4>
                                <p className="leading-relaxed">
                                    Throughout a part's lifecycle, we keep an eye on modifications. By doing this, the part will receive better upkeep, better future designs, and better failure and reliability forecasts.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Are We The Preferred Reverse Engineering Services Company?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our reverse engineering services are intended to create precise product analysis and allow design adjustments and improvements without having to waste time looking for as-built drawings. We use digital prototypes that help create drawings accurately. Additionally, clients get the following perks by choosing our services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Data Security:</strong> As we are an ISO/IEC 27001:2022 ISMS certified service provider, we guarantee that all of our clients’ data is safe from breach.</li>
                            <li><strong>Single Point of Contact:</strong> A dedicated manager is assigned to each client to serve as an exclusive point of contact for all of their needs and keep them informed about the project’s progress.</li>
                            <li><strong>Attention to Detail:</strong> We develop prototypes and production drawings with utmost detail, meeting clients’ expectations.</li>
                            <li><strong>Short Turnaround:</strong> We have more than 10 delivery centers operating in multiple locations around the globe, ensuring that we deliver services within a quick time.</li>
                            <li><strong>High Scalability:</strong> We are a world-class firm with adequate resources to scale up a project work as and when clients’ requirements shoot up.</li>
                            <li><strong>Excellent Process:</strong> We use the most recent software technologies and ISO standard procedures to achieve high quality and efficiency in the projects.</li>
                            <li><strong>Best Infrastructure:</strong> We have access to the best facilities in terms of cutting-edge equipment, technology, and first-rate workspaces.</li>
                            <li><strong>Flexible Pricing Options:</strong> We offer highly flexible pricing options that will reduce your project costs by 40–60%.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Reverse Engineering Services to Us - Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of reverse engineering solutions along with a number of mechanical engineering services. We have highly skilled and experienced professionals who have catered to hundreds of clients with varying complex requirements. Outsourcing your project to us benefits you with:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                            <li>Thorough product documentation and editable 3D models that adhere to contemporary production requirements</li>
                            <li>Minimized product development cost by creating prototypes beforehand</li>
                            <li>Multiple delivery centers to provide you with quick outputs</li>
                        </ul>
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

export default ReverseEngineering;