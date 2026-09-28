import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HealthcareSurveysServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Surveys Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure the health, happiness, and satisfaction of your employees and patients while monitoring the quality of your care with our healthcare surveys services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If patients are the heart of your hospital, the doctors, nurses, and staff are its bloodline. To keep your facility running, you need to keep both staff and patients happy and satisfied. The best way to gauge this is through healthcare surveys.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Healthcare surveys are the easiest and most efficient way to understand how your services are perceived. They help you analyze if your staff is happy and evaluate changes to improve their satisfaction. At **nimble acuity**, we provide comprehensive healthcare surveys to help you improve care quality and increase your hospital's profitability, helping you set new standards of excellence.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Healthcare Surveys Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>**Patient Satisfaction Surveys:** We help you understand if your patients are satisfied with your services. These surveys assess accessibility, staff courtesy, and the quality of care to help you analyze patient perception and their likelihood of recommending your brand.</li>
              <li>**Employee Satisfaction Surveys:** To enhance your practice, you must keep your staff happy and committed. Our comprehensive employee surveys provide deep insight into your current practices and help you understand your employees' needs, demands, and feelings about their role.</li>
              <li>**Hospital Performance Evaluation:** We help you get feedback on a patient's entire hospital stay, including operative and post-operative care, physician assistance, cleanliness, emotional support, and more.</li>
              <li>**Market Research Surveys:** Market research is imperative for business success. We help you understand your facility's popularity, assess your market size, identify competitors, and evaluate future growth prospects.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Healthcare Survey Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>**Need Analysis:** We meet with you and your team to understand your requirements and evaluate your customer base.</li>
              <li>**Data Segregation:** We segregate your customers and employees based on parameters like age, demographics, health condition, and medical care requirements.</li>
              <li>**Survey Designing:** Our experts create powerful, interactive surveys to help you interact with your target audience and derive meaningful results.</li>
              <li>**Deployment:** After your approval, we deploy our surveys through various mediums to reach your extensive customer base.</li>
              <li>**Reporting:** Our expert analysts scan the completed forms and use statistical techniques to help you analyze your data, prepare reports, and evaluate the positives and negatives of your practice.</li>
              <li>**Action Planning:** We help you create actionable plans to improve your service offerings, increase revenue, and enhance customer and employee satisfaction.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Healthcare Surveys to nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>**Cost-effective Solutions:** We offer competitive and affordable rates to help you stay in control of your budget.</li>
              <li>**Stringent Security Norms:** Our strict security protocols ensure the complete safety and privacy of your customer data, with no information shared without your prior consent.</li>
              <li>**Quality of Services:** Our surveys help you gain breakthrough business insights, allowing you to focus on your core business of providing world-class healthcare.</li>
              <li>**Instant Access to Certified Analysts:** Our expert research analysts bring years of experience and deep industry knowledge to help you analyze service quality and identify areas for improvement.</li>
              <li>**Customized Services:** All our services are highly customizable and can be tailored to meet your specific needs and budget.</li>
              <li>**Global Delivery Centers:** Our global network ensures quick and hassle-free delivery of all projects in the shortest time possible.</li>
              <li>**Round-the-clock Assistance:** Our customer support team is available 24/7 to provide quick resolution for all your queries and concerns.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "Hello, I wanted to reach out to you directly and express my gratitude for the hard work that the Data team, as well as the AR team, has done with EJ practice. I have pushed both teams extremely hard over the past month and their efforts, as well as ours, have paid off."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — RCM Account Manager, EMR System Provider, FL, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Surveys to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              To run an unparalleled healthcare facility, it's crucial to understand how your patients, employees, and physicians perceive your services. As a premium healthcare surveys company, **nimble acuity** can help you understand their pain points, concerns, and feedback to bring about meaningful changes and increase your hospital's profitability.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              So, let's get in touch. Simply let us know your requirements, and we'll get back to you with a customized action plan tailored to meet your individual needs.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default HealthcareSurveysServices;