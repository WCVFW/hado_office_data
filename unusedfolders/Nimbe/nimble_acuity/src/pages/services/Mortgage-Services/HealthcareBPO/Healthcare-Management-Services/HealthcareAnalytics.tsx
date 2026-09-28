import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HealthcareAnalytics: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Analytics Services
            </h2>
            <p className="text-lg text-gray-600">
              Transform patient and clinical data into actionable insights for improved decision-making and better patient care. Partner with <strong>nimble acuity</strong> to drive efficiency and reduce costs in today's healthcare environment.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Today, the emphasis in healthcare has shifted towards quality and customer satisfaction. At <strong>nimble acuity</strong>, our certified health analytics experts and data scientists use patient-centered models to provide actionable insights. We can assist you with an entire range of medical analytics services, from predicting procedure frequency to evaluating program effectiveness and identifying areas of inappropriate utilization.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Healthcare Analytics Service Offerings
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Healthcare Predictive Analytics:</strong> We provide valuable information to help you make a positive impact on your operations. For example, we can accurately predict a rise in demand to help you prepare with the right medications and equipment.</li>
              <li><strong>Business Intelligence:</strong> Our expert analysts help you identify new business opportunities, increase service excellence, and improve capacity utilization. We provide in-depth analysis to evaluate the performance of staff, facilities, and business units.</li>
              <li><strong>Modeling and Optimization:</strong> Using our proprietary software, you can understand how changes to process execution impact your facility. We help you effectively optimize claims processes and clinical workflows.</li>
              <li><strong>Real-time Medical Data Analytics:</strong> Get up-to-date information on the go. This not only helps you provide faster, evidence-based patient care but also allows your staff to make better judgments.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Healthcare Analytics?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Deep Expertise:</strong> With over 26 years of experience, we have developed deep analytical capabilities and robust health IT to enable better decision-making.</li>
              <li><strong>Certified Team:</strong> Our team is certified with expertise in Agile methodologies and popular software platforms.</li>
              <li><strong>Flexible Solutions:</strong> We provide scalable solutions for quick integration of healthcare data.</li>
              <li><strong>High Quality & Cost-Effective:</strong> Our services are designed to provide better operational benefits without compromising on quality.</li>
              <li><strong>Comprehensive Support:</strong> We support custom web interfaces, HL7, JSON, XML, EDI documents, and more.</li>
            </ul>
          </div>

          {/* How We Make a Difference */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              How Our Services Can Make a Difference
            </h3>
            <p className="text-gray-700 mb-4">
              Our expert services help you make sense of large volumes of data to reduce costs, improve services, and become more patient-centric.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Increase patient acquisition and retention rates.</li>
              <li>Conform to stringent regulatory and reporting norms.</li>
              <li>Achieve better operational efficiency.</li>
              <li>Optimize medical and drug device pricing.</li>
              <li>Reduce the overall cost of healthcare by decreasing fraudulent procedures.</li>
              <li>Provide faster and more effective patient care.</li>
              <li>Benefit from seamless clinical processes.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Analytics to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              To remain successful in the current business environment, healthcare providers need to manage costs and improve service offerings. Our services combine breakthrough statistical and discovery methods, sophisticated business understanding, and high-end information management technologies to provide relevant solutions that will make a difference.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us right now</strong> to get access to one of the industry's most advanced integrated healthcare data analytics services.
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

export default HealthcareAnalytics;