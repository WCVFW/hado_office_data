import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const MicroStationServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            MicroStation Conversion Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to highly sophisticated MicroStation services provided by an experienced team of engineers.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity provides various MicroStation design and conversion services to help clients with their demanding architectural, engineering, construction, and operations (AECO) and 2D/3D drawing requirements. Our skilled MicroStation professionals use a combination of manual and software-assisted techniques to convert each drawing with precision. Understanding that MicroStation has huge potential for information-rich 2D and 3D designing, we continuously scale up to achieve 99% accuracy. As a preferred MicroStation Conversion Company, Nimble Acuity helps clients run their multi-vendor engineering projects successfully.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our growing list of clients from across the globe vouches for our proven track record. We are a quality-centric service provider and follow stringent standards to ensure superior quality project delivery on time, every time. Our MicroStation conversion solutions include MicroStation to AutoCAD Conversion, AutoCAD to MicroStation Conversion, PDF to DWG Conversion, and more.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our MicroStation Conversion Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity helps clients transform plans, drawings, blueprints, and other file formats to MicroStation with clean layers and references. Combined with a quick turnaround time, we provide precise conversion services regardless of the project size. Our professional services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <li>Restoring damaged and unclear blueprints to vectorized formats.</li>
                            <li>Creating editable multi-layer drawings.</li>
                            <li>Separating text into its own layer for easy recognition.</li>
                            <li>Leveraging the latest versions of AutoCAD and MicroStation.</li>
                            <li>Supporting batch conversion for large projects.</li>
                            <li>Creating an archive of all standard components and details.</li>
                            <li>Adhering to multiple levels of quality checks and a stringent workflow process.</li>
                            <li>Strict adherence to customer specifications.</li>
                            <li>Using a combination of manual and automated redrafting for dimensional accuracy.</li>
                            <li>Updating old images to in-house standards with respect to sheet borders, title blocks, and more.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource MicroStation Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we offer a variety of MicroStation services to cater to engineering projects of any type, scale, and complexity. We assure unmatched benefits to our clients, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Workflow and Quality Assurance:</strong> We follow a streamlined workflow and stringent quality control measures at every stage.</li>
                            <li><strong>World-class Infrastructure:</strong> We have industry-best infrastructure to deliver our engineering services, ensuring business continuity.</li>
                            <li><strong>Flexible Pricing Structure:</strong> We provide flexible pricing options based on project complexity and the software used, making our services cost-effective.</li>
                            <li><strong>Multiple Delivery Centers:</strong> Our multiple delivery centers across the globe ensure projects are completed well within the stipulated time.</li>
                            <li><strong>Latest Tools and Software:</strong> Our team is capable of providing efficient MicroStation services by leveraging cutting-edge tools and software.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource MicroStation Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With our vast multi-domain industry experience, we provide world-class mechanical engineering solutions, including MicroStation services, to a wide range of industry segments. Our extensive experience enables us to provide quick, efficient, and cost-effective services. We also offer piping design and drafting, AutoCAD conversion, and other CAD conversion services.
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

export default MicroStationServices;