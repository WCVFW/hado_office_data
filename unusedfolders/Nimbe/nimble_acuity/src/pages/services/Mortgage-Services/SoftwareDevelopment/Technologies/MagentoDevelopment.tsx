import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MagentoDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Magento Web Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Provide your clients a great online experience by turning to Magento web development experts like us.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Magento is a top choice for developing a feature-rich e-commerce site, but it can have some limitations, such as being hardware-intensive and having slow speeds without proper customization. Our Magento web development experts can help you overcome these challenges.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a top Magento development company. Our team of Magento developers is backed by a decade of experience and has the skills to deliver a better end-user experience by optimizing your site's performance.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Magento Web Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity provides an array of Magento solutions, including third-party extensions that add scalability and stability to your online business. Our Magento services help increase your global footprint and customer volume.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Magento Website Development</h4>
                                <p>
                                    We build powerful e-commerce websites on the Magento platform, using the latest development practices to give your online storefront a fresh lease of life. Our strategy helps your clients find relevant products and services without a fuss.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Magento Custom Module Development</h4>
                                <p>
                                    We integrate additional functionality to your existing web project on the Magento platform. This allows you to stand out from competitors by giving your users the freedom to customize their digital experience with scalable modules that future-proof your site.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Magento Theme Development</h4>
                                <p>
                                    Our team of Magento developers and UX designers collaborates to give your e-commerce site a true visual makeover. Our theme development service transforms how customers interact with your website, helping you showcase products in the best way possible.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Magento Site Migration and Support</h4>
                                <p>
                                    We handle all backend activities to ensure a smooth transition and continuous operation for your website. From secure payment capture to maintaining user databases, we offer well-rounded, unmatched support.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Responsive Website and Mobile App Development</h4>
                                <p>
                                    Mobile apps are a core part of our Magento development services. We create custom native apps for iOS, Android, and Windows with cross-platform functionality, allowing your users to check products and make safer transactions anytime, anywhere.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Extensions Development</h4>
                                <p>
                                    When you need to add utilities to your site while staying on budget, our custom extension development services are the answer. We add more functionality without getting deep into the native code, turning your e-commerce website into a feature-packed portal.
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
                            Partnering with Nimble Acuity for your Magento web development needs can save you both time and money. Here are some of the benefits you can experience:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Certifications:</strong> We are an ISO-certified company with professional developers certified in a variety of web development tools.</li>
                            <li><strong>Data Security:</strong> Your data and confidential project files are kept secure with our multi-level data protection system.</li>
                            <li><strong>High Accuracy and Quality:</strong> Our development approach includes multi-level quality checks to ensure a bug-free website that provides a rich user experience.</li>
                            <li><strong>Short Turnaround:</strong> Our services shorten the time needed to launch your online store, because we understand that time is valuable.</li>
                            <li><strong>Scalability:</strong> All projects we develop on the Magento platform are scalable and support seamless software integration.</li>
                            <li><strong>Pocket-friendly Pricing:</strong> We offer customizable development solutions that fit your budget, making us a go-to partner for companies of all sizes.</li>
                            <li><strong>Single-point Contact:</strong> We assign a dedicated professional to your project who will be your single-point of contact, ensuring your concerns are addressed efficiently.</li>
                            <li><strong>Round-the-Clock Availability:</strong> Our team is available 24/7 via phone or email, providing excellent time zone support.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Launch Your E-commerce Store?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leader in Magento web development with a client base across the world. We offer an ISO-certified service backed by years of industry experience, ensuring a seamless and personalized experience for your site visitors.
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

export default MagentoDevelopment;