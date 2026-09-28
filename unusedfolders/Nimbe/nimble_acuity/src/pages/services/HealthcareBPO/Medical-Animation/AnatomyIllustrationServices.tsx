import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const AnatomyIllustrationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Anatomy Illustration Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide high-quality anatomy illustrations that include anatomical dissections and cellular biology to enhance medical research, surgical techniques, and patient education.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Anatomy illustrations are essential for helping patients visualize anatomical conditions. Outsource anatomy illustration services to a specialist like <strong>Nimble Acuity</strong> and save costs while ensuring professional quality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our services help streamline patient engagement, allowing your professionals to focus on education while we deliver superb medical visualizations. Use our illustrations for brochures, journals, billboards, and other materials to guide patients effectively.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Anatomy Illustration Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Anatomical Illustrations of Liver and Hepatic Segmentation</li>
              <li>3D Anatomical Illustration of the Digestive System</li>
              <li>Anatomy Illustration of Human Muscles</li>
              <li>Anatomy Illustration of the Ear</li>
              <li>Anatomy Illustration of the Bone</li>
              <li>Anatomy Illustration of Brain and Meninges</li>
              <li>Anatomy Illustration of the Pediatric Respiratory System</li>
              <li>Dental Anatomy Illustration</li>
              <li>Osteoporosis Illustration</li>
              <li>Anatomy Illustration of Plantar Venous Plexus</li>
              <li>Anatomy Illustration of the Eye</li>
              <li>Anatomy Illustration of the Female Breast</li>
              <li>Anatomy Illustration of the Skin</li>
              <li>Digestive System Anatomy Illustration</li>
              <li>Anatomy Illustration of Lumbar Nerves</li>
              <li>Anatomy Illustration of the Shoulder</li>
              <li>Anatomy Illustration of the Cranial Nerves</li>
              <li>Anatomy Illustration of the Head & Neck</li>
              <li>Anatomy Illustration of Fetus Development</li>
              <li>Anatomy Illustration of the Embryo</li>
              <li>Anatomy Illustration of the Mouth</li>
              <li>Anatomy Illustration of the Female Reproductive System</li>
              <li>Anatomy Illustration of the Lungs</li>
              <li>Anatomy Illustration of the Vascular System</li>
              <li>Anatomy Illustration of the Heart</li>
              <li>Skeleton 3D Anatomy Illustrations</li>
              <li>Anatomy Illustration of Interspinal Muscles</li>
              <li>Anatomy Illustration of the Uterus</li>
              <li>Thigh and Hips Anatomy Illustration</li>
              <li>Orthopedic 3D Illustration</li>
              <li>Anatomy Illustration of an Aneurysm</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Anatomy Illustration Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery and Conceptualization:</strong> Collaborate with you to create a plan tailored to your needs.</li>
              <li><strong>Rendering Illustrations:</strong> Design 3D illustrations of complex medical information for education, research, and marketing.</li>
              <li><strong>Quality Analysis:</strong> QA analysts ensure illustrations are optimal and compliant with NDA standards.</li>
              <li><strong>Reporting and Feedback:</strong> Compile insights to help you understand the process and results.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Anatomy Illustration?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Anatomy Illustration Services Company:</strong> HIPAA-compliant and ISO 9001:2015 accredited provider.</li>
              <li><strong>Data Security:</strong> Secure cloud storage with robust protection for patient data.</li>
              <li><strong>High Accuracy and Quality:</strong> 100% quality guaranteed with precise anatomical representations.</li>
              <li><strong>Affordable Pricing:</strong> Flexible, customizable pricing for cost-effective solutions.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art software, hardware, and security systems.</li>
              <li><strong>Quick Turnaround:</strong> Fast delivery for projects of varying complexity.</li>
              <li><strong>Scalability:</strong> Services scaled to your project requirements.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated manager for smooth communication and reporting.</li>
              <li><strong>Experienced Team:</strong> 500+ experts with knowledge of anatomy and design tools.</li>
              <li><strong>Secure Data Exchange:</strong> SFTP and VPN for safe file transfer.</li>
              <li><strong>24/7 Availability:</strong> Global support around the clock.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Anatomy Illustration Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> to create high-quality anatomical illustrations that enhance patient education, medical research, and marketing. Focus on your practice while we deliver professional visualizations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to get tailored anatomy illustration services for your healthcare organization.
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

export default AnatomyIllustrationServices;
