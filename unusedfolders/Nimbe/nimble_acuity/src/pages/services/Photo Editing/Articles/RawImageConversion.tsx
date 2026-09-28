import React from "react";
import PEMainMenu from "../PEmainmenu";


const RawImageConversion: React.FC = () => {
  const advantages = [
    "Maximum manipulation of white balance even after the click is made",
    "Greater flexibility to decide the look of JPEG or TIFF files (color, white balance, saturation, depth, and enhancements)",
    "Stores extensive data details of each photo click for maximum quality",
    "Gives maximum control over photographs for finer correction and processing",
  ];

  const disadvantages = [
    "Specialized software required for RAW image conversion or editing",
    "RAW files are not print-ready and need conversion into JPEG or TIFF",
    "Consumes significant camera memory, limiting number of shots per session",
    "Takes more time to save details, not ideal for fast-action photography like sports",
  ];

  const process = [
    "Adjustment of White Balance",
    "Noise Reduction",
    "Enhanced Options for Color Conversion and Contrast Adjustment",
    "Enhanced Sharpness of Images",
    "Optical Correction and Exposure Compensation",
    "Minimum Loss of Details in Conversion from RAW to Print-Ready Format",
  ];

  return (
    <div>      {/* Navigation */}
      <PEMainMenu />

    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">RAW Image Conversion Benefits</h1>
      <p className="text-gray-700 mb-6">
        Most professional photographers trust their clicks with nothing else
        than RAW format. Considered equal to the classic photographic negatives,
        RAW gives photographers the widest possible flexibility, as it is the
        digital equivalent of a negative film that retains all the details of an
        actual image as captured by the camera's sensor. The RAW format captures
        details better than any other formats and preserves the entire spectrum
        of colors in a particular click.
      </p>

      {/* Advantages & Disadvantages */}
      <h2 className="text-2xl font-semibold mb-4">
        Advantages and Disadvantages Associated with RAW Images
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-green-50 p-5 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">RAW Image Advantages</h3>
          <ul className="list-disc list-inside space-y-2">
            {advantages.map((adv, idx) => (
              <li key={idx} className="text-gray-700">
                {adv}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 p-5 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">RAW Image Disadvantages</h3>
          <ul className="list-disc list-inside space-y-2">
            {disadvantages.map((dis, idx) => (
              <li key={idx} className="text-gray-700">
                {dis}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RAW Processing */}
      <h2 className="text-2xl font-semibold mb-4">RAW Conversion - Processing</h2>
      <p className="text-gray-700 mb-4">
        One major differentiating factor in RAW format is that it is not
        processed by the camera and remains undeveloped until converted into a
        JPEG or TIFF file. All the benefits that you can avail from a RAW file
        lies in between the click and the conversion to JPEG – in the RAW
        conversion processes such as demosaicing, white balancing, and
        sharpening.
      </p>

      <h3 className="text-xl font-semibold mb-3">
        RAW Image Conversion Process Allows:
      </h3>
      <ul className="list-disc list-inside space-y-2 mb-10">
        {process.map((step, idx) => (
          <li key={idx} className="text-gray-700">
            {step}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
        <h2 className="text-xl font-semibold mb-3">
          Sign up for a FREE trial with us today
        </h2>
        <p className="text-gray-700 mb-4">
          Experience the quality of our work before you Nimble! There are few
          disadvantages that come along with RAW images, however, the advantages
          override the negatives. For someone who believes in image quality,
          converting RAW images into the desired format is one of the best
          options available for great photographic results.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow">
          Try it now!
        </button>
      </div>

      {/* Contact */}
      <p className="text-gray-700 text-center mt-6">
        Contact us for image format conversions of unmatched quality.
      </p>
    </div>
    </div>
  );
};

export default RawImageConversion;
