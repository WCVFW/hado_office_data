import React from "react";
import DSmainmenu from "../DSmainmenu";

const MedicalImageAnnotation: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Medical Image Annotation & Tagging Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Get access to precise identification, annotation, and segmentation of
          images at highly affordable rates starting at{" "}
          <span className="font-semibold">$6/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Images are crucial in the medical industry, and accurate annotation is
          essential for analysis. Nimble Acuity (Nimble Acuity) provides expert medical
          image annotation services to label images efficiently and create
          datasets recognized by computer vision models. Our services help
          manage large volumes of medical images, enabling easy classification
          and improved productivity.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Medical Image Annotation Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>CT Scan Annotations:</strong> Identify bone fractures,
            tumors, muscle disorders, internal bleeding, multi-organ
            segmentation, and more in multislice CT scans.
          </li>
          <li>
            <strong>MRI Annotations:</strong> Segment and contour lesions,
            tumors, hemorrhages, and infarctions in the cerebrum and other
            body parts including abdomen, pelvis, and joints.
          </li>
          <li>
            <strong>Ophthalmic Imaging Annotation:</strong> Detect glaucoma,
            cataracts, age-related macular degeneration, and retinal vein
            occlusion in Fundus and OCT images.
          </li>
          <li>
            <strong>X-Ray and Mammogram Annotation:</strong> Annotate and
            contour X-Ray and mammogram abnormalities to identify deformities
            and disorders.
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Nimble Acuity for Medical Image Tagging Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Affordable:</strong> Cost-effective services to reduce business expenses.</li>
          <li><strong>High-Quality:</strong> ISO-certified services following industry standards and best practices.</li>
          <li><strong>Quick TAT:</strong> Scalable services with fast turnaround times.</li>
          <li><strong>Dedicated SPOC:</strong> A single project manager handles all queries and provides regular reports.</li>
          <li><strong>Latest Tools:</strong> Using updated tools and software for precise annotation and tagging.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>US-based Online Store:</strong> Efficient data entry services delivered quickly and accurately.
          </li>
          <li>
            <strong>Florida-based Legal Client:</strong> High-quality data extraction services at affordable prices.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Medical Image Tagging Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Nimble Acuity is your one-stop solution for manual and automatic medical image
          annotation and tagging. Choose the service type based on your
          requirements and get top-notch solutions at budget-friendly rates.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MedicalImageAnnotation;
