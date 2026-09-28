import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const Teleradiology: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Reliable, Cost-Effective Teleradiology Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve diagnostic efficiency and patient care with our seamless teleradiology solutions. From preliminary and final reads to after-hours reporting, Nimble Acuity helps imaging centers, hospitals, and telehealth platforms streamline their radiology workflow with accuracy, speed, and 24/7 availability.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> brings extensive global experience in delivering dependable <strong>teleradiology services</strong>. Our fellowship-trained radiologists provide precise interpretations across CT, MRI, PET, ultrasound, and X-ray studies—helping you sustain diagnostic superiority while reducing costs and maximizing care delivery.
            </p>
          </div>

          {/* Our Teleradiology Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive Teleradiology Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>24/7 Emergency and Night-time Reporting:</strong> Around-the-clock reads for ERs, holidays, and late-night shifts.</li>
              <li><strong>Subspecialty Reads:</strong> Neuroradiology, musculoskeletal, pediatric, and cardiac expertise.</li>
              <li><strong>AI-Augmented Reporting:</strong> Enhanced accuracy and faster detection with AI support.</li>
              <li><strong>Second Opinions & Peer Review:</strong> Senior reviews for critical assurance and quality control.</li>
              <li><strong>Cloud-based PACS & RIS Integration:</strong> Secure and seamless system connectivity.</li>
              <li><strong>Nighthawk Teleradiology:</strong> Overnight reads with rapid turnaround for trauma centers.</li>
              <li><strong>Final Reads & Reporting:</strong> Conclusive, standardized reports ready for clinical use.</li>
              <li><strong>STAT & Critical Results Reporting:</strong> Immediate escalation for urgent diagnoses.</li>
              <li><strong>MRI & CT Interpretation:</strong> Fellowship-trained reviews for complex imaging studies.</li>
              <li><strong>eRAD PACS Support:</strong> Robust cloud-based reporting with encrypted infrastructure.</li>
            </ul>
          </div>

          {/* More Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Medical Imaging</li>
              <li>Radiology Information Systems (RIS)</li>
              <li>3D Image Processing</li>
              <li>Emergency Radiology</li>
              <li>Preliminary Teleradiology Reporting</li>
              <li>On-site Radiology and Interpretation</li>
              <li>Neurology PET/CT Reporting Services</li>
              <li>PET/CT Reporting Services</li>
              <li>Cardiac PET/CT Reporting Services</li>
              <li>Dental X-Ray Imaging Services</li>
              <li>Bone Density Scan Services</li>
              <li>Thoracic Imaging Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Teleradiology?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective:</strong> Flexible pricing that lowers overhead while maintaining quality.</li>
              <li><strong>24/7 Coverage:</strong> Global network ensures availability during nights, weekends, and holidays.</li>
              <li><strong>Specialized Reporting:</strong> Fellowship-trained expertise across multiple modalities.</li>
              <li><strong>Fast Turnaround:</strong> Rapid reads without compromising compliance or accuracy.</li>
              <li><strong>Telehealth-Ready:</strong> Designed for modern telehealth and virtual care platforms.</li>
              <li><strong>Scalable Support:</strong> Handle routine volumes or sudden spikes with ease.</li>
            </ul>
          </div>

          {/* Whom We Serve */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Whom We Serve
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Healthcare Practitioners</li>
              <li>Clinics & Care Centers</li>
              <li>Medical Insurance Companies</li>
              <li>Diagnostic Labs</li>
              <li>Hospitals</li>
              <li>Medical Billing Companies</li>
              <li>Teleradiology Centers</li>
              <li>Revenue Cycle Management Firms</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What Our Clients Say
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              “I would like to recommend Nimble Acuity’s teleradiology services to any radiology center or physician group. Their reliable reporting helps us spend more time with patients while improving efficiency and revenue.”
              <br />
              <span className="font-medium">– CEO, Medical Imaging Company, Fremont, CA</span>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Accelerate Your Diagnostic Workflow
            </h3>
            <p className="text-gray-700 mb-6">
              With board-certified radiologists across the US, UK, Australia, and India, and 24/7 coverage, Nimble Acuity ensures timely, accurate reporting tailored to your clinical needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to explore how our teleradiology services can support your diagnostic excellence? Request a sample report today.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get Started Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Teleradiology;
