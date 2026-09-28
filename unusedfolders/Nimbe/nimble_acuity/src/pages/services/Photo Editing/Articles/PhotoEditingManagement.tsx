import React from "react";
import PEMainMenu from "../PEmainmenu";

const PhotoEditingManagement: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Need for Photo Editing and Photo Management
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          In today’s world of rich media and visual-first marketing, photo
          editing and management have become crucial for businesses to engage,
          impress, and grow.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <p className="mb-6">
          With rich media, images, and content becoming the standard for
          showcasing products and services,{" "}
          <strong>photo editing, archiving, and management</strong> are no
          longer optional. From e-commerce and real estate to fashion,
          publishing, and lifestyle businesses, professional imagery is the key
          to success.
        </p>
        <p>
          Beyond business needs, social media culture has amplified the demand
          for visually appealing and well-managed photos. The challenge lies in
          handling massive volumes of images effectively while maintaining
          quality.
        </p>
      </section>

      {/* Photo Editing */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Photo Editing</h2>
          <p className="mb-4">
            Once a picture is clicked, the next step is professional editing to
            give it the perfect touch. Editing includes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Image enhancements and color stabilization</li>
            <li>Glare and flash correction</li>
            <li>Background changes and cropping</li>
            <li>Adding special effects</li>
          </ul>
          <p className="mt-4">
            Industries such as studios, fashion, modeling, real estate, and
            e-commerce rely heavily on quality images with quick turnaround
            times. Outsourcing editing ensures faster processing with
            cost-efficiency, without compromising quality.
          </p>
        </div>
      </section>

      {/* Photo Management */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">Photo Management</h2>
        <p className="mb-4">
          While photo editing improves individual images,{" "}
          <strong>photo management</strong> focuses on organizing and archiving
          large photo collections for easy retrieval. It ensures the best images
          are available at the right time and place.
        </p>
        <h3 className="text-xl font-medium mb-3">Major Benefits:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Quick Retrieval:</strong> Tagged and sorted images make it
            easy to locate what you need instantly.
          </li>
          <li>
            <strong>Storage Across Platforms:</strong> Save and retrieve from
            both cloud and local drives with ease.
          </li>
          <li>
            <strong>Multiple Format Support:</strong> Store, edit, and download
            in various formats effortlessly.
          </li>
          <li>
            <strong>Sorting & Searching:</strong> Index images based on key
            attributes for fast access.
          </li>
          <li>
            <strong>Advanced Segregation:</strong> Organize by resolution,
            orientation, flash, color temperature, and more.
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-blue-50">
        <h2 className="text-2xl font-semibold mb-4">
          Sign up for a FREE Trial Today
        </h2>
        <p className="mb-6">
          Experience the quality of our work before you Nimble!
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
          Try it now! Stop editing. Start clicking
        </button>
      </section>

      {/* Contact */}
      <section className="text-center py-12 px-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          Nimble photo editing and management tasks to Nimble Acuity for
          better quality, clarity, faster retrieval, and affordable costs.
        </p>
      </section>
    </div>
  );
};

export default PhotoEditingManagement;
