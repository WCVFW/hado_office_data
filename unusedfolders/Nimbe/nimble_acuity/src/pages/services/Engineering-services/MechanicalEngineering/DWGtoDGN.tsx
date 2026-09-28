import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const DWGtoDGN: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            DWG to DGN Conversion Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Seamlessly convert between DWG and DGN file formats to streamline your workflows.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            If you work regularly with both AutoCAD and MicroStation, Nimble Acuity can help you convert between DWG and DGN file formats and vice-versa. Employing both manual and software-based conversion methods, we ensure that dimensional accuracy and original specifications are strictly followed. Multiple levels of quality checks help us remove and rectify any errors, guaranteeing a precise final output.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Layers are also differentiated in the output file, allowing you to further edit the file as needed. Since 2002, our company has worked with customers worldwide, assisting them with their mechanical engineering and CAD conversion needs. We have the expertise to handle complex projects and deliver accurate results efficiently.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our DWG to DGN Conversion Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our process is designed to provide you with the highest level of accuracy and ease of use. Key features of our conversion services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Extensive experience in developing and using a variety of CAD tools.</li>
                            <li>Expertise in a wide range of projects, from architectural plans and commercial blueprints to machine and mechanical drawings.</li>
                            <li>A robust document management system to organize and archive drawings for easy retrieval.</li>
                            <li>We can work with the latest versions of AutoCAD and MicroStation to provide cutting-edge solutions.</li>
                            <li>Our process flow includes validation of input and output data quality at every stage.</li>
                            <li>We support batch conversion for large-scale projects.</li>
                            <li>Part and file naming conventions, folder structures, and layer styles are decided in discussion with you to ensure rigorous adherence.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your DWG to DGN Conversions to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is your ideal partner for all your DWG to DGN and DGN to DWG conversion needs. We ensure high-quality results, competitive pricing, and a fast turnaround time.
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

export default DWGtoDGN;