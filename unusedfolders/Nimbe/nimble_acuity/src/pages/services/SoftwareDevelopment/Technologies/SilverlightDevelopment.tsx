import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SilverlightDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Silverlight Application Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Leverage the feature-rich Silverlight framework to develop and deploy high-performing mobile or internet applications.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for a cutting-edge alternative to improve your website's or application's performance? Consider Silverlight application development, which allows you to build lightning-fast apps for all types of platforms. It provides a robust set of features, including real-time updates, fast loading, an intuitive UI, and rich plugins. For internet-specific applications, no other framework can match Silverlight.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a leading provider of Silverlight application development services, Nimble Acuity has over two decades of experience in delivering a wide range of software solutions to global customers. We can create various mobile, PC, and web applications using Microsoft technologies. With the Silverlight framework's robustness, we can handle all types of Silverlight application development projects.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Silverlight Application Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            By partnering with us, you can leverage the expertise of our Silverlight developers to create an application for your niche business. We serve many industries, including e-commerce, event management, and healthcare. With our proven track record and extensive portfolio, you can collaborate with us to get high-quality, robust applications in the shortest possible time.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Application Development</h4>
                                <p>
                                    Our Silverlight application development experts can create cross-platform mobile, web, and enterprise-based custom applications. We leverage Silverlight's native features to create apps that support animation and high-definition video and audio.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Gaming Application Development</h4>
                                <p>
                                    Our team has exhaustive knowledge of Microsoft Silverlight and can provide game development services. Using their expertise in 3D modeling and graphics, we can develop intuitive games. From UX to game mechanics, our experts provide all kinds of game development solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Widget and Dashboard Development</h4>
                                <p>
                                    As a leading Silverlight application development company, we can design and develop custom widgets to enhance user experience and help you create a parallel revenue stream. We can also create intuitive dashboards by leveraging Silverlight's rich multimedia features.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Windows Mobile Solutions</h4>
                                <p>
                                    Since Windows is a widely used mobile OS, apps built with Silverlight are compatible with all Windows platforms. We can leverage the platform's code consistency to include high-resolution video on mobile devices that use Windows as the OS.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Application Enhancement and Maintenance</h4>
                                <p>
                                    For your existing apps, we can extend their capabilities and tailor them with the latest features, interfaces, or functionalities. We can also migrate and update your enterprise applications built on the .NET platform.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Silverlight Migration</h4>
                                <p>
                                    Through our tailored migration services, we can help you get in sync with IT development. We can migrate your apps to MVC.NET, HTML5, Windows Presentation Foundation (WPF), and JavaScript, ensuring your app is compatible with all types of browsers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Silverlight Application Development Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our services are time-tested, and we follow a validated process to provide the best solutions. The key steps involve:
                        </p>
                        <ol className="list-decimal list-inside space-y-4 text-gray-700">
                            <li><strong>Requirement Gathering:</strong> We begin by understanding your requirements to plan the next steps.</li>
                            <li><strong>Prototype Development:</strong> Our developers will create a prototype with all the required features and send it for your evaluation and approval.</li>
                            <li><strong>App Development:</strong> Upon your approval, our developers will start working on the application and integrate all custom features.</li>
                            <li><strong>Application Testing:</strong> Our QA team will test the app for performance issues and bugs, resolving any glitches.</li>
                            <li><strong>Release & Deployment:</strong> At this stage, our team will deploy the app in the live environment.</li>
                            <li><strong>Application Maintenance and Support:</strong> We will continue to provide maintenance and support services, handling any required updates or upgrades.</li>
                        </ol>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-700 leading-relaxed mb-6">
                            By outsourcing Silverlight application development services to us, you can get a custom solution and benefit from:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Development:</strong> We provide a custom quotation for your business based on the project's scope and duration, helping you save on development costs.</li>
                            <li><strong>Advanced Infrastructure:</strong> Our experts have access to the latest technologies and tools in a secure work environment. Our offices are equipped with 200% backup power, redundant IT systems, robust servers, and more.</li>
                            <li><strong>ISMS Compliance:</strong> We are ISO/IEC 27001:2022 certified, proving our commitment to managing and addressing all types of vulnerability related to information assets.</li>
                            <li><strong>Multiple Global Delivery Centers:</strong> With a presence across all time zones, we can make use of local resources to handle projects and ensure better communication.</li>
                            <li><strong>High-quality Applications:</strong> We deliver best-in-class Silverlight applications that will help you market a high-quality app on time and boost your revenue.</li>
                            <li><strong>Experienced Team:</strong> Our extensive team of developers, designers, testers, and consultants are highly experienced in providing Silverlight solutions.</li>
                            <li><strong>24/7 Availability:</strong> Our support executives are available around the clock through your preferred communication channel to resolve any queries.</li>
                            <li><strong>Ease of Scalability:</strong> We have the technical capability and resources to scale our development capacity, allowing you to increase or decrease resources at any time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready for High-Quality Application Development?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            As a premier Silverlight application development company, Nimble Acuity has been providing custom software solutions to global clients for over two decades. Our team can help you roll out best-in-class Silverlight applications at a cost-effective rate. We also provide 24/7 maintenance and support to help you resolve any issues related to your app. Get in touch with us for all your Silverlight application development needs.
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

export default SilverlightDevelopment;