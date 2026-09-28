import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const AndroidAppDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Android App Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Transform your creative ideas into functional and futuristic Android apps with our expert team. We adhere to the Agile methodology for effective development, timely delivery, and continuous app improvement.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, we are dedicated to integrating advanced technology with strategic vision to deliver tailored, effective apps that align seamlessly with your business objectives. Using technologies such as **ARCore** for augmented reality, **Material Design** for superior UI/UX, and **Firebase** for reliable backend services, we ensure top-notch solutions. To make your project future-proof, we integrate Google **ML Kit** for machine learning capabilities. We employ strict security standards such as encryption, secure coding practices, and regular vulnerability assessments to safeguard your business and user data.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We start with a thorough understanding of your business objectives and proceed via a rigorous and iterative development process. This includes detailed planning, wireframing, development, and extensive testing with advanced frameworks like **Espresso** to guarantee optimal performance across Android devices. We also offer complete post-launch services, including app marketing, analytics, and optimization. Achieve your business goals with our Android application development services.
                        </p>
                    </div>

                    {/* Solutions Offered */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Android App Development Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We use advanced Android technologies to design custom apps that enhance your online visibility. From immersive AR experiences to integrating AI capabilities, our solutions align with futuristic mobile architecture.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Solution 1 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Custom Android App Development</h4>
                                <p className="text-gray-700">We conceptualize unique app ideas, build custom features, and integrate them with your existing business systems for a scalable and flexible architecture.</p>
                            </div>
                            {/* Solution 2 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">UI/UX Design Services</h4>
                                <p className="text-gray-700">Our services focus on creating intuitive, user-friendly interfaces and enhancing user experience with the latest design trends, prototyping, and user testing.</p>
                            </div>
                            {/* Solution 3 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Native Android App Development</h4>
                                <p className="text-gray-700">We construct high-performance apps with the latest Android SDKs. These apps improve user engagement and make the most of the Android platform's potential.</p>
                            </div>
                            {/* Solution 4 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Android TV App Development</h4>
                                <p className="text-gray-700">We make use of a Leanback library to design captivating interfaces for the big screen. Our apps are integrated with Google Assistant to provide a smooth and interactive user experience.</p>
                            </div>
                            {/* Solution 5 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Android Wear OS App Development</h4>
                                <p className="text-gray-700">We create sophisticated yet lightweight apps for Wear OS. We incorporate features like fitness tracking and notifications while optimizing performance to reduce battery consumption.</p>
                            </div>
                            {/* Solution 6 */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Android App Integration</h4>
                                <p className="text-gray-700">We provide seamless integration with existing systems, APIs, and third-party services for secure and reliable data exchange.</p>
                            </div>
                        </div>
                    </div>

                    {/* Development Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Android Development Process Flow
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our robust workflow ensures an efficient process from concept to deployment. We abide by the following steps to ensure your app remains optimized, secure, and aligned with industry trends:
                        </p>
                        <ul className="list-decimal list-inside space-y-4 text-gray-700 md:columns-2">
                            <li><strong>Discovery and Requirement Gathering:</strong> We collaborate with clients to understand their goals, target audience, and app requirements.</li>
                            <li><strong>Strategy and Planning:</strong> We formulate a comprehensive strategy and create a detailed project plan, defining the technology stack, milestones, and timelines.</li>
                            <li><strong>UI/UX Design and Prototyping:</strong> We create intuitive user interfaces and wireframes to get early feedback and ensure a shared understanding.</li>
                            <li><strong>App Development:</strong> After finalizing the plan, we write the code, integrate APIs and libraries, and implement the functionality.</li>
                            <li><strong>Testing and Quality Assurance:</strong> We conduct rigorous testing to identify and fix bugs and issues using advanced frameworks like Espresso.</li>
                            <li><strong>Deployment and Launch:</strong> We upload the app to the Google Play Store, following all guidelines and preparing promotional materials.</li>
                            <li><strong>Post-launch Support and Maintenance:</strong> We provide ongoing support to ensure compatibility with evolving platforms and devices and offer continuous performance monitoring.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>In-depth Market Analysis:</strong> We perform in-depth competitor analysis and market research to understand the latest trends and user preferences.</li>
                            <li><strong>Proficiency in Development:</strong> Our team is proficient in the latest Android development tools and technologies, as well as cross-platform development solutions.</li>
                            <li><strong>Integration with Existing Systems:</strong> We ensure your Android app will integrate seamlessly with your existing databases, APIs, and systems.</li>
                            <li><strong>Scalable Solutions:</strong> Our solutions are designed for scalability, allowing your app to grow as your user base expands and your business evolves.</li>
                            <li><strong>Transparent Communication:</strong> We provide real-time information, maintain regular client touchpoints, and have an open-door policy for any queries.</li>
                            <li><strong>Comprehensive Documentation:</strong> We support any app we develop with complete documentation that covers every aspect of the project.</li>
                        </ul>
                    </div>

                    {/* Sectors We Serve */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Sectors We Serve
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700 font-medium">
                            <div>E-commerce</div>
                            <div>Healthcare</div>
                            <div>Education</div>
                            <div>Travel and Tourism</div>
                            <div>Finance and Banking</div>
                            <div>Social Media</div>
                            <div>Entertainment</div>
                            <div>Gaming</div>
                            <div>Logistics and Transportation</div>
                            <div>Real Estate</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build Your Android App?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our expertise in Android app development is deeply rooted in our command of a broad range of technical abilities and technologies. We exploit the full potential of Android SDKs, integrate third-party APIs, and incorporate advanced features like geolocation, media streaming, and real-time notifications with finesse.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            Choosing Nimble Acuity as your Android app development partner entails selecting technical excellence, innovative solutions, and a team dedicated to realizing your vision. Let's create something exceptional together.
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

export default AndroidAppDevelopmentServices;