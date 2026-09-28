import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const XamarinAppDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Xamarin App Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            The mobile app market is experiencing unprecedented growth, and cross-platform development is leading the charge. Nimble Acuity leverages Xamarin to deliver high-quality, native-like iOS, Android, and Windows apps from a single codebase.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            When it comes to cross-platform app development, Xamarin is the undisputed leader. Its biggest selling point is that apps developed using it have native-like performance and are not a compromise solution. Xamarin helps us build native as well as cross-platform apps on a shared C# codebase, using the same language, IDE, and APIs across mobile platforms. This ensures the apps have a native UI and native API access, with performance comparable to native apps.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, we use Xamarin because our developers find it easier to design modern apps and to suitably integrate and test them using pre-built backend connectors. We leverage Microsoft Visual Studio, which integrates Xamarin natively to ensure fully compliant .NET portable class libraries.
                        </p>
                    </div>

                    {/* Solutions Offered */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Xamarin App Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our expertise in Xamarin allows us to provide a comprehensive range of services, from initial strategy to deployment and beyond.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Solution 1 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Xamarin Cross-Platform Development</h4>
                                <p className="text-gray-700">We build high-performance mobile apps for iOS, Android, and Windows from a single, shared codebase to ensure cost-efficiency and faster time-to-market.</p>
                            </div>
                            {/* Solution 2 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Xamarin.Forms UI Development</h4>
                                <p className="text-gray-700">We create beautiful, native-like user interfaces using Xamarin.Forms, allowing us to deliver consistent and rich user experiences across all platforms.</p>
                            </div>
                            {/* Solution 3 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mobile App Strategy & Consultation</h4>
                                <p className="text-gray-700">From conceptualization to a detailed project roadmap, we provide expert consultation to help you define your app's strategy, scope, and technical requirements.</p>
                            </div>
                            {/* Solution 4 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Xamarin Mobile App Testing</h4>
                                <p className="text-gray-700">We conduct rigorous testing using Xamarin Test Cloud to ensure your app functions flawlessly across multiple devices and operating system versions.</p>
                            </div>
                            {/* Solution 5 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Crash Reporting and Distribution</h4>
                                <p className="text-gray-700">We implement robust crash reporting and distribution solutions to help you monitor app performance, identify issues, and manage updates efficiently.</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we believe that Xamarin is one of the best cross-platform solutions available. By partnering with us, you will gain from the following key benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Reusability of .NET Libraries:</strong> We can easily reuse your existing .NET libraries, saving significant development time and cost.</li>
                            <li><strong>Shared C# Codebase:</strong> With up to 100% shared C# user interface code, we ensure rapid mobile app development for multiple platforms.</li>
                            <li><strong>Flexible Integration:</strong> We can easily integrate popular backends such as Microsoft Azure, Parse, and SalesForce within your app.</li>
                            <li><strong>Specialized Expertise:</strong> Our experienced developers specialize in Xamarin, ensuring you receive the best possible solution and outcome.</li>
                            <li><strong>Comprehensive Lifecycle Support:</strong> We offer a complete in-house solution for the entire mobile app development lifecycle, from strategy to maintenance.</li>
                            <li><strong>Secure and Encrypted Apps:</strong> We prioritize your data with fully secure and encrypted Xamarin apps, built to your specifications.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            The Ideal Destination for High-quality Xamarin Development
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we are committed to your success by providing not only bespoke mobile app development services but also taking care of the entire mobile app development lifecycle. From strategy and design to development and support, we ensure we guide you through every phase while developing an app that can't be distinguished from a native one.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            Whether your requirement is for iOS or Android, our services will ensure significant cost-savings while keeping your customers satisfied.
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

export default XamarinAppDevelopmentServices;