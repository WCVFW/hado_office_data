import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MotionUIDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Motion UI Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Make your web and mobile apps more engaging and useful with our Motion UI services, with prices starting from $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Motion UI is an advanced UX design element that brings app and website interfaces to life with impressive effects. It comes equipped with over two dozen built-in animation and transition elements, making prototyping simple and efficient.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            **Nimble Acuity** is a leading **Motion UI development company** with more than two decades of experience in web and mobile app design. We have implemented Motion UI across various applications, including website interfaces, virtual reality, augmented reality, advertising banners, and social media, to create highly engaging designs that capture users' attention.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Motion UI Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We leverage Motion UI's Sass mixins and CSS animations to create seamless and effective designs. Our UI/UX motion design services include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Welcoming Users:</strong> We create engaging designs to welcome or thank users with subtle animations on logos, welcome screens, and other interfaces.</li>
                            <li><strong>Adding Fun Elements:</strong> We help you integrate fun and unique elements into your design to enhance brand recall and appeal.</li>
                            <li><strong>Providing Feedback Loops:</strong> We design feedback loops to reduce user frustration and improve their overall experience with smooth animations for actions like form submissions or incorrect password entries.</li>
                            <li><strong>Gap-Filling Animations:</strong> We create engaging animations to keep users entertained while content is loading, reducing perceived wait times.</li>
                            <li><strong>Developing Motion Modifiers:</strong> We apply a wide range of motions—including scaling, sliding, and spinning—and use motion modifiers to control direction, speed, and position to captivate users' attention.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Motion UI?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Outsourcing your Motion UI services to us offers several key advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Access to Experts:</strong> You get instant access to a team of experts with deep knowledge and hands-on experience in Motion UI design.</li>
                            <li><strong>Cost-Effective Services:</strong> We provide highly cost-effective solutions without compromising on quality.</li>
                            <li><strong>Quick Turnaround:</strong> Our global presence and 24/7 operations across different time zones ensure extremely quick project delivery.</li>
                            <li><strong>Diverse Engagement Models:</strong> We offer flexible hiring models, including full-time, part-time, and project-based, to suit various budgetary requirements.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Enhance Your UI?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            **Nimble Acuity** has over two decades of experience in designing intuitive and engaging user experiences. We have sharpened our knowledge of Motion UI by applying it to diverse projects across various industries.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            If you are looking for the best **Motion UI development services**, get in touch with our experts now.
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

export default MotionUIDevelopment;