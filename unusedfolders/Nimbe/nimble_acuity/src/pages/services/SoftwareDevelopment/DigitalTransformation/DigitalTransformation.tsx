import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DigitalTransformation: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Digital Transformation Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Transform your business with cutting-edge solutions like quantum computing and low-code/no-code platforms.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are vendor lock-in, integration complexities, and scalability issues slowing your growth? Address these challenges head-on and thrive in the information age with our digital transformation services. We help you adopt a **microservices architecture** for independent deployment and scaling, which alleviates complexity, provides flexibility to avoid vendor lock-in, and makes your systems more adaptable.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            All our platform recommendations leverage **low-code/no-code** solutions to minimize your dependency on technical resources. We also offer **quantum computing** solutions to process large data silos and solve complex problems faster, which is particularly useful for optimizing resource allocation, scheduling, and supply chains. Our advanced **AI and ML models** coupled with **IoT devices** empower you to improve connectivity, detect malfunctions, uncover insights, and enhance decision-making.
                        </p>
                    </div>

                    {/* Core Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Digital Transformation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our solutions are designed to incorporate innovative strategies and leading-edge technologies into your business framework. We follow industry best practices and agile methodologies that help your team adapt to changing markets.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Application Modernization</h4>
                                <p>
                                    We refactor legacy applications and build cloud-native solutions using microservices architecture and containerization, all with an agile development approach.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business Restructuring</h4>
                                <p>
                                    Our data-driven approach increases your organizational agility with advanced analytics solutions and digital business transformation strategies.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Digital Applications</h4>
                                <p>
                                    We create innovative cross-platform solutions and progressive web applications, utilizing serverless computing to enable seamless B2B digital transformation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Digital Transformation Strategy</h4>
                                <p>
                                    We integrate **IoT and blockchain** technologies to craft customized strategies and digital initiatives that drive transformative business growth and a sustainable competitive advantage.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Legacy Modernization</h4>
                                <p>
                                    Our solutions use **API-led connectivity and low-code applications** to migrate legacy systems, ensuring uninterrupted app functioning and reducing technical debt.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Digital Transformation Implementation</h4>
                                <p>
                                    We leverage **machine learning and RPA models** to orchestrate seamless transitions and improve operations for a unified expansion with real-time data availability.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Consulting Services */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Digital Transformation Consulting
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Our digital transformation consulting goes beyond traditional approaches. We take a holistic view that includes **technology integration, cultural transformation, and strategic visioning** to facilitate your business's easy adoption of rapid digital changes. We use the latest breakthroughs in data analytics, AI, and ML to provide solutions that align with your objectives.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We don't just implement technological changes; we make your business ecosystem agile and resilient. This helps you bring technology, processes, and people together to create a synergy that reflects true change and prepares your organization for the future.
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            What Sets Nimble Acuity Apart?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As an experienced digital transformation service provider, we help you innovate with precision using the right technologies and strategic insights. Our team analyzes your current digital framework and crafts tailored solutions to help you navigate it.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Customized Solutions:</strong> We design tailored technology strategies using predictive analytics and industry-specific algorithms to solve challenges and achieve operational excellence.</li>
                            <li><strong>Hub of Innovation:</strong> Our specialized innovation labs empower you to build a culture of iterative experimentation using **edge computing and blockchain** technologies to explore and validate emerging trends.</li>
                            <li><strong>Strategic Partnership:</strong> We aim for an outcome-driven partnership, helping clients lead tech innovations by providing access to collaborative platforms and disruptive solutions.</li>
                            <li><strong>Scalable Solutions:</strong> We architect agile digital infrastructures that swiftly adapt to your growth trajectories, allowing you to enter new markets while maintaining operational robustness.</li>
                            <li><strong>Security-first Approach:</strong> We follow advanced cybersecurity protocols, including **machine learning-based anomaly detection** and **zero-trust architectures**, to protect your data assets and ensure compliance.</li>
                        </ul>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Approach to Digital Transformation
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We follow a process flow designed to help you achieve measurable business outcomes using the right mix of tools and implementation strategies.
                        </p>
                        <ol className="list-decimal list-inside space-y-4 text-gray-700">
                            <li><strong>Assessment and Discovery:</strong> We conduct a comprehensive audit of your current processes and systems to identify areas needing digital enhancements.</li>
                            <li><strong>Formulation of the Digital Roadmap:</strong> We develop a specific strategy using agile frameworks and prioritize initiatives with new and emerging technologies to meet your business goals.</li>
                            <li><strong>Design and Implementation:</strong> We design scalable, cloud-native architectures that use microservices and API-led integration to increase interoperability.</li>
                            <li><strong>Integration and Deployment:</strong> We optimize DevOps and implement digital solutions that support continuous integration and delivery while adhering to cybersecurity protocols.</li>
                            <li><strong>Optimization and Innovation:</strong> Our advanced monitoring and real-time analytics tools help us refine your digital processes, supporting iterative enhancements for continuous improvement.</li>
                            <li><strong>Training and Support:</strong> We offer custom training programs to equip your teams with the skills and knowledge needed to successfully adapt and drive your digital transformation journey.</li>
                        </ol>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity helps you build a resilient foundation that accelerates responses to market changes and emphasizes new opportunities. By partnering with us, you can leverage our expertise in **Continuous Integration/Continuous Deployment (CI/CD)** and the **API economy** to streamline operations and foster a culture of agility and innovation.
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

export default DigitalTransformation;