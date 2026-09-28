import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const HVACSystemReplacement: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            HVAC System Replacement Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Choose undisrupted HVAC system operations with our prompt and reliable HVAC system replacement designs at prices starting at $10/hour.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Without properly functioning HVAC systems, the entire building space can suffer monumental issues and risks of other failures and damages. Periodic assessment of the HVAC systems becomes crucial to ensure smooth operations, whether it is a commercial building, a manufacturing unit, or a residential space.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has a vast team of qualified and trained mechanical engineers, technicians, and designers to provide quick HVAC system replacement and design services for all sorts of projects. We build solutions that match your exact needs for HVAC system replacement to enable top performance and smoother functioning in the long run. Our services come at affordable prices, making us a market leader in HVAC replacement services and designs. Our cumulative experience of 26+ years in the field of mechanical engineering gives us an edge in the market and ensures that you only get best-in-class services.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our HVAC System Replacement Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer unparalleled design support for all your HVAC system replacement needs and make sure that we not only extend preventive maintenance but also predictive analysis to enable undisrupted operations. Our end-to-end HVAC system replacement services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Assessment of Existing HVAC System and its Re-designing</h4>
                                <p className="leading-relaxed">
                                    We have a team of specialists that has expertise in creating designs for all types of HVAC equipment and systems. Before redesigning, they evaluate the condition and the structure of your current HVAC systems to understand the repair or replacement requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Load Calculations of the Design</h4>
                                <p className="leading-relaxed">
                                    We use Industry Standard Load Calculation Applications and ASHRAE/ECBC/ASME/USGBC/NBC/NABH guidelines to determine the optimal HVAC load for all types of equipment and also include ductwork layout, details, schedules, and other specifications.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Remote Security Management</h4>
                                <p className="leading-relaxed">
                                    In the fast-paced world of today, it has become crucial to monitor the HVAC systems' functioning closely to fix any problems before they negatively impact the people, systems, and the surroundings. We dedicate a team of certified monitoring management specialists to keep a check on your systems.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">HVAC Energy Modeling Services</h4>
                                <p className="leading-relaxed">
                                    When creating HVAC replacement designs, we make sure that they are energy-efficient. Our team leverages energy modeling and life-cycle costing to choose the most appropriate and cost-efficient systems that can successfully bring down the operational costs of the facility.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">HVAC Tune-ups and Maintenance Services</h4>
                                <p className="leading-relaxed">
                                    Our team of qualified technicians helps in fixing various glitches and malfunctioning of HVAC systems through redesigning and better equipment installation. Whether it is a case of mechanical failures, malfunctioning of HVAC control systems, motor problems, poor ventilation, faulty electrical systems, or anything else, we have got you covered.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Hiring Nimble Acuity as Your HVAC System Replacement Services Provider
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a leading outsourcing HVAC system replacement services providing company, we offer multiple benefits that include the following:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Quality Services:</strong> We are committed to providing leading-edge HVAC replacement services backed by deep knowledge and understanding of the field dynamics.</li>
                            <li><strong>Cost-effective Services:</strong> We offer pocket-friendly, flexible packages that can be adjusted and adapted to your unique needs, making us one of the most trusted and reliable HVAC replacement services providers.</li>
                            <li><strong>Experienced Team Support:</strong> We have a vast team of experienced mechanical engineers, technicians, and other experts to offer superlative HVAC system design services.</li>
                            <li><strong>Sound Technical Expertise:</strong> We use proven HVAC modeling applications and models to develop cost and energy-efficient, reliable HVAC systems for all types of facilities and properties.</li>
                            <li><strong>Fast Turnarounds:</strong> Our team works at an outstanding speed to deliver your design within the stipulated time frames.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource HVAC System Replacement Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of HVAC system replacement services. With 26+ years of experience and a team of 180+ qualified mechanical engineers and other specialists, we are equipped to handle HVAC replacement services projects of any scale and size for all types of facilities and buildings.
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

export default HVACSystemReplacement;