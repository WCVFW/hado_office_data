import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AutomotiveTelematics: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Automotive Telematics Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Monitor vehicle health, maximize uptime, and improve fleet safety with our intelligent telematics solutions.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            As the automotive industry breaks into the information age, telematics solutions are gaining popularity. The ability to monitor a vehicle's performance from anywhere is just one way telematics is revolutionizing the industry. Today, telematics is used for monitoring trucking fleets and passenger vehicles, with recent developments in wireless technology and automotive software disrupting the field.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Choosing the best telematics solution provider, like Nimble Acuity, enables businesses to make the most of this technology. With years of industry experience and a proven track record, Nimble Acuity is a leading automotive telematics company offering exceptional services that help you improve safety, optimize vehicle performance, schedule repair alerts, and streamline compliance at extremely reasonable rates.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Telematics Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer a wide range of services guided by the most recent developments in telematics technology, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Real-Time Tracking</h4>
                                <p className="leading-relaxed">
                                    Get accurate geo-location of your vehicles at any time. Our well-designed technology solutions deliver precise data on vehicles instantly.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Driver Verification and Instant Alerts</h4>
                                <p className="leading-relaxed">
                                    We help verify your driver details and track their journeys through mobile applications. The apps also send real-time alerts in case of accidents, over-speeding, theft, or breakdowns.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automate Asset Management</h4>
                                <p className="leading-relaxed">
                                    We help automate workflows by pushing your data into the system. Our APIs also allow integrating vehicles with any ERP system to keep your business on top of the market.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Real-Time Insights</h4>
                                <p className="leading-relaxed">
                                    Our dashboards collect fleet data in real-time using customized telematics solutions, which ultimately help you make informed business decisions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Vehicle Health Prediction</h4>
                                <p className="leading-relaxed">
                                    Our advanced telematics solutions never miss critical maintenance jobs. We help you keep a tab on inspection and repair workflows to ensure your vehicles are in good condition.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Nimble Acuity is the Preferred Telematics Provider
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you outsource telematics solutions to us, our skilled and experienced professionals deliver successful automotive telematics. Some of the major benefits of choosing us are:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>High Flexibility:</strong> We are flexible to partner with you and implement suitable telematics strategies, whether you need complete end-to-end support or just an extended team.</li>
                            <li><strong>Certified Provider:</strong> We are an ISO/IEC 27001:2022 certified telematics solution provider. Your data remains safe and secure with us while we deliver international-standard services.</li>
                            <li><strong>Expertise:</strong> Our automotive embedded telematics solutions cater to a wide range of industries, positioning us as a leading provider in the world.</li>
                            <li><strong>Dedicated Project Manager:</strong> We appoint a dedicated project manager for each client to avoid miscommunications and provide timely updates.</li>
                            <li><strong>24/7 Customer Support:</strong> We are available 24/7 to address concerns and resolve issues for our global clients, on time every time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get Intelligent Automotive Telematics Support from Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We are a technology-focused firm, and outsourcing your telematics solutions to us helps you make the most of this platform. Our expertise, legacy, and experience in this field equip us to provide precise solutions for all your technical needs. We can help you use asset and vehicle data to reduce operating costs, boost service excellence, and improve fleet efficiency and safety.
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

export default AutomotiveTelematics;