import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ARDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Augmented Reality Developers
            </h2>
            <p className="text-lg text-gray-600">
              Hire our Augmented Reality developers for AR and VR app development. Our developers create custom AR solutions to drive customer engagement at rates starting from $20 per hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Today's consumers want to be pampered, and with intense competition, companies are finding innovative ways to deliver fantastic experiences. Augmented reality apps provide a highly immersive and interactive experience, giving users a near-lifelike feel of a product or service. This helps businesses increase conversions, retain customers, and boost revenues.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we have extensive experience in developing software solutions that help businesses achieve their goals by leveraging our industry expertise and mastery of trending technologies. Our prolific team of AR developers has crafted bespoke solutions for various industries like healthcare, hospitality, fashion, architecture, travel and tourism, gaming, and education.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Augmented Reality Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our augmented reality programmers and engineers can deliver a plethora of AR development services to help you achieve your business goals and stay competitive:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>AR Healthcare Apps:</strong> We develop apps that provide 3D visualizations of the internal body, simulate surgeries, and demonstrate how medicines work.</li>
              <li><strong>AR Pharmaceutical Apps:</strong> Our developers can create AR apps that show how different pharmaceutical products impact the body and target specific cells.</li>
              <li><strong>AR GPS Applications:</strong> Hire our augmented reality developers to create GPS-based apps that help you pinpoint consumer locations and deliver personalized buying experiences.</li>
              <li><strong>AR Architecture and Construction Apps:</strong> We build apps that offer 3D images of construction in progress and virtual tours of proposed buildings for prospective customers.</li>
              <li><strong>AR Event Management Apps:</strong> Get interactive apps that help event managers plan and execute events better with virtual demos of seating arrangements and stage props.</li>
              <li><strong>AR Hospitality, Travel, and Tourism Apps:</strong> Our team is proficient in creating apps that offer virtual tours of popular tourist destinations and hotel facilities.</li>
              <li><strong>AR Automobile Applications:</strong> We develop immersive and educational apps that help car owners understand the working of their cars' insides.</li>
              <li><strong>AR Fashion Apps:</strong> We offer IT staffing services for AR developers to create apps that allow customers to virtually try on clothes, footwear, and accessories.</li>
              <li><strong>AR 3D Gaming Apps:</strong> Our developers have exemplary skills in crafting thrilling 3D games guaranteed to engage your customers.</li>
              <li><strong>AR Educational Apps:</strong> We create AR apps that help students better understand scientific concepts and other subjects through almost hands-on experiences.</li>
              <li><strong>AR Media and Entertainment Apps:</strong> Hire our augmented reality developers for apps that provide an immersive experience with 3D models and exciting AR-powered advertisements.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you outsource IT staffing for augmented reality developers to **Nimble Acuity**, you get the perfect solution for your business needs. You can enjoy complete transparency, track product development progress, and ensure your app is built within budget and on time.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Access to Specific Skills:</strong> You can select developers with the specific skills and industry experience you need.</li>
              <li><strong>Cost-Effective:</strong> Save around 40 to 60% of the expenditure involved in hiring a full-fledged team.</li>
              <li><strong>Reduced Overhead:</strong> Make savings on infrastructure and operations by eliminating the need for extra space, equipment, and employee benefits.</li>
              <li><strong>Efficient Process:</strong> Save time and resources that would have been spent on the hiring process.</li>
              <li><strong>High-Quality Services:</strong> Our teams use modern work methodologies like Agile and Scrum to deliver flawless and reliable applications.</li>
              <li><strong>Flexible Hiring Models:</strong> We offer flexible hiring models to suit your needs, whether it's a fixed-cost project, hourly, or full-time engagement.</li>
              <li><strong>Data Security:</strong> We handle data with sensitivity and are ISO/IEC 27001:2022 accredited for our data security compliance.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose Nimble Acuity to Hire AR Developers
            </h3>
            <p className="text-gray-700 mb-6">
              Looking to hire augmented reality developers and programmers with a passion for creativity? Hire skilled and experienced professionals from **Nimble Acuity** on a fixed-cost, hourly, or full-time basis, depending on your requirements. As a leading provider of IT staffing for augmented reality developers, we have served hundreds of clients in both domestic and international regions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us now to hire offshore augmented reality developers. Our team will evaluate your needs and provide the correct information, including turnaround time and cost.
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

export default ARDevelopers;