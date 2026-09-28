import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const ImageProcessing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              3D Image Processing Services
            </h2>
            <p className="text-lg text-gray-600">
              Accurate, reliable, and cost-effective <strong>3D medical image processing</strong> with
              quick turnaround and uncompromising quality from <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-6xl mb-16 text-gray-700">
            <p className="mb-6">
              Are you struggling to handle complex <strong>neuro and vascular imaging</strong> with confidence? 
              Do you fear making wrong clinical decisions due to unsound 3D image processing techniques? 
              With our <strong>robust 3D reconstruction services</strong>, you can significantly reduce 
              report reading time and minimize risks in clinical outcomes.
            </p>
            <p>
              By outsourcing 3D image processing to <strong>Nimble Acuity</strong>, you can lower 
              costs by up to <strong>40%</strong>. We deliver high-quality 3D anatomical models with 
              quick turnaround time, covering MR/CT Angiographies for renal, neck, head, and pulmonary studies. 
              Plus, our processes are HIPAA compliant, ensuring complete security and confidentiality.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              3D Image Processing Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Volumetry</li>
              <li>Virtual Endoscopy</li>
              <li>Multi-planar Reconstruction</li>
              <li>Maximum Intensity Projections (MPR/MIP)</li>
              <li>Bone Densitometry</li>
              <li>3D Recon for Anatomical Evaluation</li>
              <li>3D Recon for Maxillofacial/Plastic Surgery</li>
              <li>3D Recon for Aortograms</li>
              <li>3D Rendering of Fractures</li>
              <li>CT/MR Coronary and Cardiac Angiographies</li>
              <li>MR/CT Perfusion</li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our 3D Image Processing Workflow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Collecting imaging data based on client needs.</li>
              <li><strong>Planning:</strong> Assigning tasks to post-processing experts for detailed evaluation.</li>
              <li><strong>Execution:</strong> Using advanced tools for precise 3D processing and calibration.</li>
              <li><strong>Quality Evaluation:</strong> Ensuring processed images meet clinical accuracy standards.</li>
              <li><strong>Feedback & Optimization:</strong> Incorporating feedback for continuous improvement.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Radiology Information Systems</li>
              <li>Medical Imaging Services</li>
              <li>Medical Animation Services</li>
              <li>Revenue Cycle Management</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for 3D Image Processing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Expertise:</strong> ISO 9001:2015 certified, HIPAA-compliant 3D imaging services.</li>
              <li><strong>Guaranteed Data Security:</strong> ISO/IEC 27001:2022 certified practices ensure confidentiality.</li>
              <li><strong>High-quality Service:</strong> Multi-level quality checks for accurate diagnostics.</li>
              <li><strong>Fast Turnaround:</strong> Agile workflows for time-critical cases.</li>
              <li><strong>Scalable Solutions:</strong> Flexible to meet complex and large-volume requirements.</li>
              <li><strong>Flexible Pricing:</strong> Affordable packages tailored to client budgets.</li>
              <li><strong>Dedicated Project Manager:</strong> A single point of contact for updates and support.</li>
              <li><strong>Skilled Team:</strong> 500+ radiologists, technologists, and editors with expertise in 2D/3D processing.</li>
              <li><strong>High-performance Infrastructure:</strong> Advanced hardware/software for evolving healthcare demands.</li>
              <li><strong>Secure Data Exchange:</strong> VPN-enabled PACS/RIS integration with customizable protocols.</li>
              <li><strong>24/7 Availability:</strong> Always-on support for clients worldwide.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Quick Teleradiology Support:</strong> Helped a medical imaging firm resolve a backlog within 24 hours using PACS-trained specialists.</li>
              <li><strong>Improved Billing Outcomes:</strong> Provided full-service billing with Medisoft software, reducing AR days and boosting collections.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource 3D Image Processing to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With two decades of experience, <strong>Nimble Acuity</strong> delivers precision-driven 
              3D image processing and a wide range of teleradiology services. Our experts ensure accuracy, 
              speed, and cost efficiency — empowering your clinical decision-making with confidence.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ImageProcessing;
