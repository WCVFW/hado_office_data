import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const FireProtectionServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Fire Protection Engineering Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Reduce damage and ensure compliance with our world-class fire protection engineering services.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for expert fire protection engineering services to help protect your life and property and ensure business continuity when hazards associated with fire occur? Are you looking to partner with a reliable experienced fire protection engineering company that can provide you with performance-based fire safety design to help you maintain regulatory compliance? Are you looking for help to engineer robust systems that reduce the damage caused by hazards related to fire? If so, you can benefit significantly from our performance-based protection engineering services.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading fire protection engineering service provider and is highly experienced in designing fire protection systems to address the requirements of a wide range of building types, including hazardous storage facilities, data centers, and unique facilities requiring specialized and unique fire protection solutions like refrigerated warehouses. Our fire protection systems comply with the International Fire Code (IFC), National Fire Protection Association (NFPA) codes, and Factory Mutual (FM) codes. We have significant expertise in designing sprinkler systems, fire suppression systems, fire pumps and alarms, and smoke management systems.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Fire Protection Engineering Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a leading group of fire protection consultants and offer our clients from across the world a wide range of services, which include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Design & Analysis</h4>
                                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                                    <li>Performing detailed fire risk assessments</li>
                                    <li>Performance-based protection engineering design</li>
                                    <li>Designing fire protection systems</li>
                                    <li>Performing facility assessments, analysis, and surveys</li>
                                    <li>Sustainable (LEED) planning, designing, and commissioning</li>
                                    <li>Ensuring building code compliance</li>
                                    <li>Performing gap analysis</li>
                                    <li>Performing fire system modeling and testing</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">System Implementation & Management</h4>
                                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                                    <li>Designing, testing, and commissioning wet and dry sprinkler systems</li>
                                    <li>Designing, testing, and commissioning clean fire suppression systems</li>
                                    <li>Designing, testing, and commissioning foam fire suppression systems</li>
                                    <li>Designing, testing, and commissioning fire pumps</li>
                                    <li>Designing, testing, and implementing smoke management systems</li>
                                    <li>Fire protection system acquisition, testing, and implementation</li>
                                    <li>Carrying out life safety inspections</li>
                                    <li>Performing forensic investigations</li>
                                    <li>Ensuring adequate property loss control services</li>
                                    <li>Designing and commissioning fire alarms</li>
                                    <li>Undertaking fire research and development</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Hire Nimble Acuity for Fire Protection Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a leading provider of fire protection engineering services and are the right choice for the following reasons:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing Options:</strong> Our solutions are highly affordable with flexible pricing options.</li>
                            <li><strong>High-quality Services:</strong> We are ISO-certified and all our services comply with international regulations, codes, and standards of quality, ensuring that you get world-class and industry-leading services.</li>
                            <li><strong>Superb Infrastructure:</strong> As a leading engineering company, we have the required infrastructure to enable our specialized engineers to provide exceptional solutions.</li>
                            <li><strong>Structured Process:</strong> We make use of an industry-proven and meticulously developed protection engineering process for the delivery of all our services.</li>
                            <li><strong>Tools and Technologies:</strong> Our team uses the latest and best solutions to provide cutting-edge services.</li>
                            <li><strong>Experienced Team:</strong> Our team has extensive experience in designing and developing a range of fire protection systems and solutions to address a wide variety of requirements.</li>
                            <li><strong>Data Security:</strong> We are fully compliant with global data security regulations like the General Data Protection Regulation (GDPR) and others.</li>
                            <li><strong>Short Turnaround:</strong> Our experts will always provide their services on time, every time since we take timeliness extremely seriously here.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Fire Protection Engineering Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a pioneering protection engineering service providing company and has been providing a range of services to cater to the diverse requirements of a global clientele from across industries. Our specialized activities have made us a premier partner to companies looking to ensure that they maintain building compliance and have systems in place to mitigate the loss of life and property in the event of a fire.
                        </p>
                        <p className="text-gray-700 mb-6">
                            If you are looking for a professional and cost-effective engineering service provider, get in touch with us today!
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

export default FireProtectionServices;