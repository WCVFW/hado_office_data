import React from "react";
import PEMainMenu from "../PEmainmenu";

const DigitalPhotographyServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Outsourcing Digital Photography Services to India
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Impress your audience in just a split second with high-quality,
          professionally edited photographs. At Nimble Acuity, we help
          businesses enhance visual appeal with reliable and cost-effective
          digital photography services.
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <p>
          With smartphones making photography accessible to all, the demand for
          high-quality photos has skyrocketed. Poor-quality images can cost you
          opportunities, but professional photography services ensure that your
          visuals always leave a lasting impression. That’s where Nimble Acuity
          steps in.
        </p>
      </section>

      {/* Popular Photography Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Popular Photography Services Available in India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Product Photography - Background removal, clipping, and enhancements for perfect product images",
            "Architectural Photography - Realistic floor plans & elevation images for real estate",
            "Portrait Photography - Adding vigor & vitality to professional portraits",
            "Bridal Photography - Glamorous & fantasy edits for wedding shoots",
            "Landscape Photography - Awe-inspiring edits for captivating landscapes",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Photography Editing Services */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Top 6 Photography Editing Services
        </h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-2">
          <li>Photo retouching – Blemish, wrinkle, red-eye removal</li>
          <li>Photo restoration – Reviving damaged photographs</li>
          <li>Photo renewal – Renewal of old or damaged images</li>
          <li>
            Post processing – Color correction, white balance & image
            enhancement
          </li>
          <li>
            Image manipulation – Image stitching, composting & enhancements
          </li>
          <li>
            RAW image conversion – Transform RAW photos into JPEG, TIFF & more
          </li>
        </ul>
      </section>

      {/* Verticals */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Verticals / Industries We Cater To
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {[
            "Online Apparels Shopping",
            "Online Electronic Store",
            "Online Automobile Store",
            "Online Sports Accessories",
            "Publishing Houses",
            "Portrait Studios",
            "Real Estate Companies",
          ].map((vertical, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border rounded-lg shadow hover:shadow-md"
            >
              {vertical}
            </div>
          ))}
        </div>
      </section>

      {/* Reasons to Nimble */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          5 Reasons to Nimble Digital Photography Services to Nimble Acuity
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Quick, efficient, and cost-effective photo editing services</li>
          <li>Skilled team of professional photo editors</li>
          <li>26+ years of global experience with diverse clients</li>
          <li>
            Latest photo editing software and state-of-the-art editing studio
          </li>
          <li>Assured data security and full legal compliance</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Digital Photography Services Today
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Get your photographs restored, retouched, converted, manipulated,
          enhanced, and renewed — all at affordable rates with professional
          precision.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>

      {/* Closing Section */}
      <section className="text-center py-12 px-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-2">
          Professional Photography Editing Services
        </h2>
        <p className="max-w-3xl mx-auto">
          At Nimble Acuity, we ensure your images enhance marketing
          collaterals, product catalogs, portfolios, and online stores with
          unmatched quality. Explore our gallery and partner with us for
          outstanding results.
        </p>
      </section>
    </div>
  );
};

export default DigitalPhotographyServices;
