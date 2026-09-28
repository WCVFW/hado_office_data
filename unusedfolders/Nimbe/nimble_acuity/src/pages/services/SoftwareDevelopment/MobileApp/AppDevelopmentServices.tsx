import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const AppDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mobile App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide transformative, enterprise-class solutions at a competitive cost. Reach out to us for a full cycle of app design, integration, and maintenance services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Businesses encounter significant hurdles when attempting to handle mobile app development internally. From resource allocation and skill set gaps to time and cost overruns, these obstacles can impede your projects' success. As your trusted outsourcing partner, Nimble Acuity works alongside you to understand your unique challenges; we help you mitigate the knowledge gaps within your team and provide transformative, enterprise-class solutions at a competitive cost.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our extensive industry experience, cutting-edge technologies, and deep understanding of user needs drive our commitment to delivering exceptional results. We employ streamlined processes and efficient project management to ensure timely deliveries and uncompromising quality. With our expertise, you can gain a competitive edge, elevate user experiences, and propel your business growth through innovative mobile apps. Partner with us to benefit from a time zone advantage that significantly reduces the time-to-market.
            </p>
          </div>

          {/* Solutions Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mobile App Development Solutions We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              From ideation and concept development to seamless delivery and ongoing support, we ensure a smooth and successful journey for your app. Our comprehensive range of solutions includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Android Mobile App Development</h4>
                <p className="text-gray-700">Our skilled team of developers leverages the latest Android SDK, tools, and technologies to create visually stunning and highly functional apps that cater to the unique needs of Android users.</p>
              </div>
              {/* Solution 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">iOS Mobile App Development</h4>
                <p className="text-gray-700">Leveraging Swift and the latest iOS technologies, we ensure your app delivers a seamless user experience, strengthening your brand presence and driving engagement among iOS users.</p>
              </div>
              {/* Solution 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Hybrid Mobile App Development</h4>
                <p className="text-gray-700">We create hybrid apps that combine web technologies with native functionalities. With our expertise in Ionic and React Native, we deliver high-performance apps that work across platforms.</p>
              </div>
              {/* Solution 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Native Mobile App Development</h4>
                <p className="text-gray-700">We use platform-specific technologies to create apps with superior performance, seamless integrations, and enhanced user experiences. With our native apps, you can leverage platform-specific features and provide an optimized customer experience.</p>
              </div>
              {/* Solution 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Progressive Web App Development</h4>
                <p className="text-gray-700">We create web-based apps that offer native-like functionalities, enabling offline access, push notifications, and responsive designs. Leverage our solutions to engage users across devices, improve conversions, and increase user retention.</p>
              </div>
              {/* Solution 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Wearables and Embedded Software</h4>
                <p className="text-gray-700">Extend the reach of your app with our wearables and embedded software development service. From smartwatches to IoT devices, we create tailored solutions that seamlessly integrate with wearable technologies.</p>
              </div>
              {/* Solution 7 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Custom Mobile App Development</h4>
                <p className="text-gray-700">We craft bespoke solutions tailored to your specific requirements, leveraging the latest technologies to create high-performance apps that elevate user experiences and drive tangible results.</p>
              </div>
              {/* Solution 8 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Cross-Platform App Development</h4>
                <p className="text-gray-700">Our solutions ensure a maximum market reach and cost-effectiveness. With a single codebase, our app offers consistent experiences on both iOS and Android.</p>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mobile Development Process Flow
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our robust mobile app development workflow ensures an efficient process from concept to deployment. We abide by the following steps to ensure your app remains optimized, secure, and aligned with industry trends:
            </p>
            <ul className="list-decimal list-inside space-y-4 text-gray-700 md:columns-2">
              <li><strong>Discovery and Requirement Gathering:</strong> We collaborate with clients to understand their goals, target audience, and app requirements.</li>
              <li><strong>Strategy and Planning:</strong> We formulate a comprehensive strategy and create a detailed project plan, defining the technology stack, milestones, and timelines.</li>
              <li><strong>UI/UX Design:</strong> The next step is to create an intuitive user interface and present it adequately via wireframes and prototypes.</li>
              <li><strong>App Development:</strong> After incorporating feedback, we write the code, integrate APIs and libraries, and implement the functionality.</li>
              <li><strong>Testing and Quality Assurance:</strong> We conduct rigorous testing to identify and fix bugs and issues.</li>
              <li><strong>Deployment and Launch:</strong> We upload the app to app stores, following guidelines and preparing promotional materials.</li>
              <li><strong>Post-launch Support and Maintenance:</strong> We provide ongoing support and maintenance to ensure compatibility with evolving platforms and devices.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Innovative Solutions:</strong> Our team thrives on innovation, constantly pushing boundaries to deliver solutions that drive market success for our clients.</li>
              <li><strong>Seamless User Experiences:</strong> We emphasize seamless user experiences that engage your users entirely. We leverage our expertise to ensure impeccable app performance.</li>
              <li><strong>Tailored Designs for Maximum Impact:</strong> Our design approach revolves around an in-depth understanding of your business and target audience to generate maximum impact.</li>
              <li><strong>Flexible Pricing Options:</strong> We understand that each project is unique, and budget considerations are important. We offer flexible pricing options tailored to your specific needs.</li>
              <li><strong>100% Data Security:</strong> We prioritize robust security measures and ensure compliance with industry standards. We also sign NDA agreements that make us legally liable for any breaches.</li>
              <li><strong>Scalable Solutions:</strong> Our solutions are designed for scalability, allowing your app to grow as your user base expands and your business evolves.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Launch Your Mobile App?
            </h3>
            <p className="text-gray-700 mb-6">
              With over two decades of experience, Nimble Acuity has established itself as a trusted overseas partner for comprehensive mobile app development. We delve into full-cycle product development and address critical knowledge gaps, helping accelerate desired product outcomes. From start to finish, we strive to support your products at scale and shorten the time-to-market.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Boost your bottom lines with tech-savvy mobile app solutions that translate into memorable user experiences.
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

export default AppDevelopmentServices;