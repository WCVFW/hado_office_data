import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SenchaDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Sencha App Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Rapidly design, implement, and test web and mobile applications for any modern device.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for a **Sencha app development company** to help you build business-critical apps for your target users without wasting time and resources? Do you need to create cross-platform web and mobile applications that improve quality through comprehensive testing? If so, you can benefit significantly from our services.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading **Sencha app development** service provider with extensive experience in creating sophisticated web and mobile apps for a diversity of clients. Our Sencha development team has significant expertise in helping firms design, develop, implement, and test advanced applications. With our services, you can be sure that your apps will be robust and work in a constantly changing environment. Our expert team has the skills to support you through the entire Sencha app development lifecycle.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Sencha App Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of Sencha app services and can provide you with the best solutions at the most competitive prices. Our range of Sencha development services includes:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Sencha Enterprise App Development</h4>
                                <p>
                                    We help companies build enterprise apps that incorporate custom API calls, themes, and components. We also help you establish a stable web and mobile application architecture standard.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Sencha Mobile Application Development</h4>
                                <p>
                                    Our expert team builds customized Sencha apps for you that will help you thrive in the mobile market. With intuitive and user-friendly interfaces, you can provide the best experience to your customers.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Sencha Web Application Development</h4>
                                <p>
                                    We have significant experience in conceptualizing, designing, developing, and testing advanced Sencha web applications. With our services, you can ensure your web app is secure and risk-free.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">App Modernization Services</h4>
                                <p>
                                    If you have legacy apps that you want to upscale to enhance their performance and capability, we can help. We will upgrade your app to the modern Sencha platform with ease.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Sencha App Migration</h4>
                                <p>
                                    We can effectively and efficiently migrate your existing apps developed using older versions of ExtJS and Sencha touch to ExtJS 6.5 to enable you to use modern JavaScript.
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
                            Nimble Acuity is a leading Sencha app development service provider that offers expert and tailored solutions to address your exact requirements. Some of the reasons to choose us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Services:</strong> We use robust processes and workflows to eliminate wasteful tasks, allowing us to pass significant cost savings on to you.</li>
                            <li><strong>Experienced Team:</strong> Our highly motivated, qualified, and experienced Sencha app developers use their deep expertise to provide cutting-edge web and mobile app development solutions.</li>
                            <li><strong>Customized Solutions:</strong> Our developers will work closely with you to comprehensively understand your business needs and provide services that are highly customized for your specific requirements.</li>
                            <li><strong>Fast Turnaround:</strong> We deliver our services without wasting any time, providing you with cutting-edge expertise and solutions at the fastest timelines in the industry.</li>
                            <li><strong>Multi-domain Experience:</strong> Our team is highly experienced and capable of working with all the various components and features of the Sencha framework.</li>
                            <li><strong>Security:</strong> We fully understand the importance of handling data and use the most stringent security protocols to ensure your data is always safe.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build with Sencha?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading Sencha app development firm that caters to the requirements of a wide variety of clients. With our services, you get access to a wide pool of certified professionals with significant experience in Sencha and other web and mobile technologies. We ensure that your Sencha app deployments are secure, robust, and incorporate all the best practices in the industry.
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

export default SenchaDevelopment;