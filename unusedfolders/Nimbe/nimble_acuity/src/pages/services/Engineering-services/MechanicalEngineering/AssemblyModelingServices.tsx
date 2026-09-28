import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const AssemblyModelingServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Assembly Modeling Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Handle all aspects of your part and assembly modeling by choosing our assembly modeling services at prices starting at $14/hour.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you struggling to manage all the phases of the modeling of all your parts and assemblies? Are you interested in obtaining effective product design involving a wide range of capabilities and tasks? Are you looking to partner with an assembly modeling service provider that provides flexibility when it comes to product design and development? If so, you are in the right place.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading provider of assembly modeling services. Our 3D modelers and animators ensure that every design cue is economically developed and provides you with a higher ROI. We design individual parts of any product, ensuring that each component is functional, can be easily manufactured, and fits well into the entire assembly. Our assembly modeling services also facilitate better product design and easier analysis.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Assembly Modeling Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Assembly modeling is an important phase of the development of parts and their components. Our assembly modeling team works around the clock to ensure that our client’s product design is as easy and straightforward as it can be. As a leading provider of assembly modeling solutions, we provide a comprehensive range of services, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <ul className="list-disc list-inside space-y-2 col-span-2 md:col-span-1">
                                <li><strong>Interference Check Services:</strong> We check for any interfering parts or areas of overlap between components, ensuring all faulty areas are corrected at the design stage.</li>
                                <li><strong>3D Solid Modeling Services:</strong> We turn your ideas or concepts into high-quality virtual 3D models that are ready for production.</li>
                                <li><strong>Conceptual Design Services:</strong> We take your images, sketches, or scanned 3D data and turn them into high-performing 3D designs.</li>
                                <li><strong>Direct Model Editing Services:</strong> We work directly in the 3D CAD model to manipulate and alter the 3D geometry.</li>
                                <li><strong>Large Assembly Design Services:</strong> We use high-performing tools to handle even huge and complex products and systems.</li>
                                <li><strong>Surface Design Services:</strong> We generate complex shapes and create sheet metal parts that can be manufactured easily.</li>
                                <li><strong>Weldments Design Services:</strong> We quickly develop a range of structural support components, including frames, brackets, and braces.</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2 col-span-2 md:col-span-1">
                                <li><strong>Plastic Components Design Services:</strong> We design plastic parts that can be conveniently molded.</li>
                                <li><strong>Reverse Engineering Services:</strong> We take your 3D scan data of existing components and create new product versions.</li>
                                <li><strong>Piping and Tubing Design Services:</strong> We help you complete your designs by adding pneumatic, hydraulic, and other systems.</li>
                                <li><strong>Electrical and Conduit Design Services:</strong> We help you incorporate advanced control, power, and other electrical components in your designs.</li>
                                <li><strong>Mold Design Services:</strong> We design and develop molds and other tooling systems to enable the quick production of casts, plastics, and forged parts.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Assembly Modeling Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading assembly modeling service providing company and has successfully addressed the assembly modeling challenges of numerous clients. Outsourcing assembly modeling services to us makes sense for a whole host of reasons, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing Options:</strong> Our assembly modeling services are extremely reasonably priced and cost-effective. You will not find more value anywhere else.</li>
                            <li><strong>High-quality Services:</strong> We will always deliver the highest quality assembly modeling services to all our clients within quick turnaround times.</li>
                            <li><strong>Superb Infrastructure:</strong> Our assembly modeling team uses the latest and most powerful computers and hardware, enabling it to provide the highest quality services.</li>
                            <li><strong>Tools and Technologies:</strong> As a leading provider of assembly modeling services, we use the latest versions of all the 3D modeling software to provide cutting-edge services.</li>
                            <li><strong>Structured Process:</strong> We make use of streamlined and systematic processes for the delivery of all our assembly modeling services.</li>
                            <li><strong>Experienced Team:</strong> Our assembly modeling team has 26+ years of experience in providing a wide range of assembly modeling services.</li>
                            <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022-certified organization and take all steps to ensure that your data is securely stored and only accessible to authorized personnel.</li>
                            <li><strong>Short Turnaround:</strong> You will always receive our assembly modeling services well within the stipulated deadline.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Assembly Modeling Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of assembly modeling services to clients across the world. We work with you to understand your requirements in detail so that we are better able to provide the best solution at the most cost-effective rates. We use the latest and best assembly modeling software to provide cutting-edge services.
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

export default AssemblyModelingServices;