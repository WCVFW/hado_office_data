import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const DartDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Dart Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Develop web and mobile apps efficiently and effectively with Dart. Prices start at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Dart is an app development platform widely used to build a range of applications. A major advantage of using this platform is its ability to run on both Android Native and iOS without requiring any code modification. The platform is fully supported by Google.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            **Nimble Acuity** is a leading **Dart development company** with over two decades of experience in creating cutting-edge mobile apps. Dart is one of our key specializations, and our team of passionate developers is committed to building scalable and interactive applications that align with Google's cross-platform framework.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Dart Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            As a leading Dart development service provider, we offer a comprehensive range of solutions:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Custom Web App Development:</strong> We leverage the platform to build unique, customized web applications that meet specific business needs.</li>
                            <li><strong>Cross-Platform Application Development:</strong> Our developers are experts in creating secure, robust cross-platform applications with a wide range of useful features.</li>
                            <li><strong>Platform Migration:</strong> We assist with a smooth and seamless migration of your existing apps to the Dart platform.</li>
                            <li><strong>Enterprise App Development:</strong> Our services are designed to build highly customized and scalable enterprise applications using the Dart platform.</li>
                            <li><strong>Dart Consulting:</strong> We provide end-to-end support, from technical expertise to testing Dart applications, to meet all your development needs.</li>
                            <li><strong>Dart Widget Development:</strong> Our services include developing and integrating interactive widgets into your mobile applications.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Dart Development?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Partnering with us for your Dart development needs offers several key benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Agile Methodology:</strong> We follow an agile development approach to ensure a productive process and better alignment with your needs.</li>
                            <li><strong>End-to-End Expertise:</strong> We have a proven track record of developing a range of highly scalable apps, including enterprise and gaming applications.</li>
                            <li><strong>Cost-Effective Services:</strong> We offer industry-specific Dart application development at competitive rates, passing on the benefit of low-cost development to our clients.</li>
                            <li><strong>Quick Turnaround:</strong> Our 24/7 operations across time zones allow us to complete projects efficiently and often ahead of schedule.</li>
                            <li><strong>Transparent Process:</strong> We work closely with our clients and provide complete insights into the development process at every stage.</li>
                            <li><strong>Diverse Engagement Models:</strong> We offer flexible hiring models, including full-time, part-time, and project-based, to suit various budgetary requirements.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            **Nimble Acuity** has over two decades of experience in mobile app development, with Dart being one of our core specializations. We have successfully delivered numerous applications for clients across diverse industries, from retail and healthcare to travel. Our flexible engagement and pricing models help us meet various requirements in a timely manner.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            If you're looking for the best Dart outsourcing services, get in touch with our experts today.
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

export default DartDevelopment;