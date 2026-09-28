import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const J2MEAppDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            J2ME App Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Nimble Acuity's expertise in J2ME solutions covers a large number of custom applications, porting, and support for legacy mobile devices. We deliver applications with robust functionality, leveraging our deep experience in mobile software development.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            J2ME is a Java platform designed for mobile devices and embedded systems, and it remains a critical platform for supporting a wide range of legacy mobile applications. Our team implements various features in our custom mobile solutions, including customized user interfaces, video file management, and robust file sharing capabilities.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, our J2ME mobile software development covers a broad range of application types for both business and entertainment. We are dedicated to delivering stable and functional applications that meet the unique needs of your business.
                        </p>
                    </div>

                    {/* Solutions Offered */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our J2ME App Development Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our experienced J2ME app development team is well-versed in creating and maintaining applications for a variety of uses, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Solution 1 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Multimedia & Entertainment Apps</h4>
                                <p className="text-gray-700">We develop engaging mobile software for entertainment and multimedia, including games, video players, and media sharing applications.</p>
                            </div>
                            {/* Solution 2 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mobile Business Software</h4>
                                <p className="text-gray-700">Creation of robust business applications for legacy devices, enabling mobile workforces and streamlined operations.</p>
                            </div>
                            {/* Solution 3 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Web Services Development</h4>
                                <p className="text-gray-700">Using J2ME, we develop web services that enable communication and data exchange with remote servers for your mobile applications.</p>
                            </div>
                            {/* Solution 4 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">GPS and Location-based Solutions</h4>
                                <p className="text-gray-700">We develop custom mobile applications with GPS navigation and location-based functionalities for tracking and mapping purposes.</p>
                            </div>
                            {/* Solution 5 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">SMS/MMS and Bluetooth Solutions</h4>
                                <p className="text-gray-700">We create applications that leverage SMS, MMS, and Bluetooth for communication and data sharing between devices.</p>
                            </div>
                            {/* Solution 6 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Application Porting and Support</h4>
                                <p className="text-gray-700">Our services include porting existing applications to J2ME and providing long-term support and maintenance to ensure continued functionality.</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you choose to partner with us for J2ME development, you gain access to a team with extensive experience in this niche technology, ensuring high-quality results.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Niche Expertise:</strong> Our team is highly experienced in J2ME, offering specialized knowledge for your unique project requirements.</li>
                            <li><strong>Custom Solutions:</strong> We focus on developing custom mobile solutions with personalized user interfaces and functionalities.</li>
                            <li><strong>Porting Services:</strong> We have the capability to port existing applications to the J2ME platform, ensuring compatibility and functionality.</li>
                            <li><strong>Comprehensive Support:</strong> Our services extend beyond development to include ongoing support and maintenance for your J2ME applications.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Develop Your J2ME App?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity’s J2ME app development team is well-experienced in creating mobile applications for various uses. We provide the expertise needed to bring your project to life.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            To get the best apps for business or entertainment, contact us today to outsource your mobile development services for J2ME.
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

export default J2MEAppDevelopmentServices;