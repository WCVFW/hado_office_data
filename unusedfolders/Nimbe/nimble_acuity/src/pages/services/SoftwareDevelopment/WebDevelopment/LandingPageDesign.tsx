import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const LandingPageDesign: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Landing Page Design Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We develop highly interactive landing pages with eye-catching designs and easy-to-use navigation, starting at $20 per hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Landing pages are crucial for how visitors perceive your online business. A poorly designed page can lead to a lack of trust and disinterest, directly impacting sales and revenue. Instead of letting a bad design hold you back, leave the challenge to the experts. Partnering with **Nimble Acuity** gives you the ultimate leverage, as our solutions are customized to address your unique challenges.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            **Nimble Acuity** has a strong track record of providing **custom landing page design services** to clients worldwide. Our solutions are designed to help you impress site visitors and convert them into valuable leads. Experience better performance by offshoring your landing page design services to us.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Landing Page Design Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We design slick landing pages that build traction and boost visitor confidence. Our services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Landing Page Design & Optimization:</strong> We can work from your ideas or start from scratch, creating a design that's optimized based on analytics to draw users' attention to your value proposition.</li>
                            <li><strong>Landing Page Creation:</strong> Even if you don't have a clear idea, our team will work with you to capture your business philosophy and create innovative designs that grab attention.</li>
                            <li><strong>Landing Page Lead Generation:</strong> We create original, honest designs that make your content appear more trustworthy, giving your lead generation efforts a significant boost.</li>
                            <li><strong>Landing Page Content Creation:</strong> We understand the importance of content and create text that enriches your audience's awareness and encourages them to take the next step.</li>
                        </ul>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Landing Page Design Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We follow a streamlined, 7-step process to ensure all deliverables are met on time:
                        </p>
                        <ol className="list-decimal list-inside space-y-4 text-gray-700">
                            <li><strong>Strategy and Proposal:</strong> We engage with clients to understand their exact needs and establish a clear direction.</li>
                            <li><strong>Designing:</strong> Our UX/UI experts create a wireframe with a basic content outline for you to review and provide feedback.</li>
                            <li><strong>Client Approval:</strong> The wireframe is sent to you for approval and for any necessary changes to be implemented.</li>
                            <li><strong>Development & Integration:</strong> Our development team gets to work on the design, ensuring completion within the stipulated time.</li>
                            <li><strong>Quality Check:</strong> We perform thorough quality checks to ensure the final landing page adheres to your needs.</li>
                            <li><strong>Go-Live:</strong> The landing page is beta-tested after it goes live, and we collect data to analyze its effect on traffic.</li>
                            <li><strong>Support and Maintenance:</strong> We provide ongoing optimization and maintenance to keep the page performing at its best.</li>
                        </ol>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Landing Page Design?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            What makes us a top **landing page design service** provider? Here are some of our key differentiators:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Cost-Effective Pricing:</strong> Our services are highly affordable and designed for businesses of all sizes.</li>
                            <li><strong>High-Quality Services:</strong> We are committed to quality and go the extra mile to ensure every project meets the highest standards.</li>
                            <li><strong>Seamless Integration:</strong> We look for opportunities to integrate our solutions into your existing framework to avoid expensive overhauls.</li>
                            <li><strong>Rapid Turnaround Time:</strong> We use the best technology to accelerate our processes, ensuring a faster delivery than many other providers.</li>
                            <li><strong>Scalable Solutions:</strong> Our solutions are highly scalable, allowing you to evolve quickly with marketing demands.</li>
                            <li><strong>ISO Certified:</strong> We are an ISO 9001:2015 certified company, a testament to our consistent delivery of quality solutions.</li>
                            <li><strong>100% Data Security:</strong> Your data is always safe with our robust security software and deterrents.</li>
                            <li><strong>Round-the-Clock Support:</strong> We provide unparalleled 24/7 support via phone, email, and web chat.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Design Your Landing Page?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At **Nimble Acuity**, we have an expert team, powerful infrastructure, and advanced technologies to offer world-class **landing page design services**. With over 26 years of experience, we can create a landing page that will drive traffic and sales just as you envisioned.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            To learn more, get in touch with us now.
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

export default LandingPageDesign;