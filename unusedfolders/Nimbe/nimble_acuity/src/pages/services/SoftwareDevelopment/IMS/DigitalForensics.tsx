import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DigitalForensics: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Digital Forensics Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to cutting-edge digital forensics capabilities to suit a wide range of requirements.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity, a renowned provider of software services, is a one-stop product house and servicing lab for digital and online forensics and criminal investigations. The forensic digital services spectrum at Nimble Acuity exceeds the basic acquirement of forensic data and provides best-in-class market capabilities. Our market-leading cyber forensic services provide complete analysis and are backed up by a team of excellent digital forensics consultants and forensic experts who leverage the latest computer forensic analysis tools and technologies.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Digital Forensics Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a leading digital forensics company that caters to the needs of an increasingly connected world. Our forensic experts can offer your company comprehensive computer investigation and cell phone investigation services. You can be sure of accurate computer forensic services, as we use a unique, straight-target collection of data. We provide resourceful acquisition and analysis of your computers and IT assets. We can help you build an advanced connection with network communication webbing and assist you in flagging internal errors or spotting illegal behavior.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Static and Volatile Data Forensics</h4>
                                <p>
                                    Our experts are skilled in analyzing both static and volatile data to uncover critical information for your investigation, ensuring no stone is left unturned.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile and Computer Forensics</h4>
                                <p>
                                    We offer comprehensive services for computer investigation and cell phone investigation, using a unique approach for accurate data collection and analysis.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Network Analysis</h4>
                                <p>
                                    Our team provides in-depth network analysis to identify suspicious activities, data breaches, and illegal transfers, helping you to secure your IT infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing digital forensics services to us provides you with many benefits. Some of the key advantages are:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>HR Investigation and Cyber Law:</strong> Our forensic services include support for human resource investigations, intellectual property theft, civil and criminal cases, and fraud detection.</li>
                            <li><strong>Special Ability in Criminal Procedures:</strong> You can rely on our invincible case designs for court cases. We extract and analyze data from various web-enabled gadgets and server platforms to create fool-proof reports.</li>
                            <li><strong>Corporate Identity Forensics:</strong> Our internal and external investigations have helped clients identify corporate entities engaged in property thefts, data misappropriations, and intellectual property infringements.</li>
                            <li><strong>Experience in Law and Government Regulations:</strong> We have considerable experience offering forensic services to criminal law firms, addressing cases from both technology-driven and human angles.</li>
                            <li><strong>Expert Forensic Reports:</strong> We provide full-fledged forensic reports at the end of the project to help you present error-free evidence in court.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Safeguard Your Business?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With the use of the latest range of commercial forensic tools, we can assist you in extracting data from obsolete and unattended gadgets. Choose Nimble Acuity for digital investigation and forensics services. Use our guidance for complete data recovery and to prove your case using our accurate and reliable computer forensic services.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get a Free Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DigitalForensics;