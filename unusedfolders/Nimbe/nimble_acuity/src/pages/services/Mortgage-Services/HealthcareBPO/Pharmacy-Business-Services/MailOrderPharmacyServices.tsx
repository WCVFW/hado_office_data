import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const MailOrderPharmacyServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mail Order Pharmacy Services
            </h2>
            <p className="text-lg text-gray-600">
              Online medication refill orders are growing exponentially. Is your mail order pharmacy streamlined yet? Partner with <strong>Nimble Acuity</strong> for efficient services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With more and more customers shopping online, the retail prescription refill industry is experiencing a surge in online orders. To meet this new demand and fulfill existing commitments, traditional pharmacies are outsourcing mail-order services to third-party providers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> has a dynamic team with expertise in logistics, supply chain management, and pharmacy administration. We have been in the outsourced mail-order pharmacy business for over a decade and offer a wide range of services to handle bulk orders efficiently.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mail Order Pharmacy Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Refills Management:</strong> Our trained and experienced resources handle refills with diligence, carefully checking new prescriptions for any changes to ensure accuracy.</li>
              <li><strong>Triage:</strong> We scan, classify, and manage every document received from clients, using the latest technology like optical character recognition and barcode readers to protect privacy and speed up the process.</li>
              <li><strong>Timely Authorization:</strong> To avoid delays, we proactively approach physicians for authorization and follow up regularly to ensure timely delivery of medicines.</li>
              <li><strong>Billing Process Management:</strong> We follow a stringent policy for billing to avoid financial discrepancies. All functions are handled electronically to maintain complete accuracy.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Mail Order Pharmacy Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> We offer flexible and affordable pricing options that suit your budget and business requirements.</li>
              <li><strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring your patient data and records are completely safe.</li>
              <li><strong>HIPAA Compliance:</strong> We begin every project by signing a HIPAA agreement to guarantee the security of all your patient and medical records.</li>
              <li><strong>High-quality Services:</strong> As an ISO-certified organization, we deliver only the best-quality, error-free services within a quick turnaround time.</li>
              <li><strong>Quick Turnaround Time:</strong> Our global delivery centers enable us to provide quality services quickly, often within 6-12 hours.</li>
              <li><strong>24/7 Availability:</strong> Our teams are available around the clock via phone or email to answer your queries.</li>
              <li><strong>Single Point of Contact:</strong> We assign a dedicated project manager to keep you updated and resolve any issues.</li>
              <li><strong>Easy Scalability:</strong> We have the resources and talent to easily ramp up service requirements as needed.</li>
              <li><strong>Experienced Team:</strong> Our team comprises skilled professionals with over 100+ man-years of experience in mail order pharmacy.</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Pharmacy Management Services:</strong> Streamline your pharmacy management with our comprehensive solutions.</li>
              <li><strong>Pharmacy Billing Services:</strong> Optimize your billing and revenue cycle for improved cash flow.</li>
              <li><strong>Pharmacy Document Management Services:</strong> Securely manage and store your pharmacy documents online.</li>
              <li><strong>Pharmacy Business Services:</strong> Delegate cumbersome pharmacy operations to improve efficiency and patient care.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Insurance Eligibility Services:</strong> We provided quick insurance eligibility services to a leading telemedicine provider.</li>
              <li><strong>Medical Billing for a Maryland-based Company:</strong> We delivered cost-effective and reliable medical billing services to a Maryland-based company within a quick turnaround time.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "Overall I am pleased with the support. The response time and communication is fine. Knowledge about billing and claims is excellent."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Founder, Medical Device Market Strategy and Reimbursement Company, California
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Mail Order Pharmacy Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> has been a pioneer in providing quality mail order pharmacy services and a host of other pharmacy business services. Our team is comprised of skilled and experienced professionals with over 100+ man-years of industry experience.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us to revamp your mail-order pharmacy needs and make a difference to the way your business functions!
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

export default MailOrderPharmacyServices;