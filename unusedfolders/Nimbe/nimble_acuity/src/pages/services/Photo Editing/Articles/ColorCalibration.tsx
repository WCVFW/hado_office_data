import React from "react";
import PEMainMenu from "../PEmainmenu";

const ColorCalibration: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">What is Color Calibration?</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Color calibration ensures true-to-life colors by adjusting input and
          output devices to a defined state. For photo editing, it guarantees
          accurate, consistent, and vibrant images across all devices.
        </p>
      </section>

      {/* Why Calibrate */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">Why Calibrate?</h2>
        <p className="mb-4">
          Calibration leads to richer and consistent configuration of display
          systems, giving truer images ideal for professional use. Without it,
          colors may look lifeless, inaccurate, and inconsistent.
        </p>
        <p className="mb-4">
          A common issue is calibration mismatch across devices. An image edited
          on one computer may look completely different on another or after
          printing. Proper calibration ensures uniformity in color reproduction
          everywhere.
        </p>
        <p>
          Essentially, calibration adjusts <strong>color temperature</strong>,{" "}
          <strong>gamma</strong>, and <strong>luminance</strong> for reliable,
          high-quality results.
        </p>
      </section>

      {/* Calibration Methods */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Know Your Display</h3>
            <p>
              Ensure your monitor supports good color depth (8 bits per pixel or
              higher) for a wider and more accurate range of colors.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Adjust Display Settings
            </h3>
            <p>
              Fine-tune brightness, contrast, and color ratios. Use graphics
              card tools (Nvidia, AMD, Intel) for advanced tweaks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Set Color Gamut</h3>
            <p>
              Align the color gamut with your output device (e.g., printers) to
              achieve consistent results across devices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Set Color Temperature
            </h3>
            <p>
              For CRTs, set around 6500K (D65). For LCDs, stick to native
              settings to avoid reducing the color range.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Calibrating with Photoshop
            </h3>
            <p>
              Photoshop (ICC-aware) supports accurate profiling. Adobe Gamma can
              help adjust gamma settings for sharper contrast.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Calibration Tools & High-End Displays
            </h3>
            <p>
              Tools like <strong>Spyder Express</strong> automate calibration.
              Or, invest in high-end monitors (8–10 bit per pixel, IPS/PVA
              panels) for superior depth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-indigo-50">
        <h2 className="text-2xl font-semibold mb-4">
          Sign up for a FREE Trial Today
        </h2>
        <p className="mb-6">
          Experience the quality of our work before you Nimble!
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition">
          Try it now! Stop editing. Start clicking
        </button>
      </section>

      {/* Examples */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Calibration – Some Examples
        </h2>
        <p className="mb-6">
          Here’s how the same image may appear across uncalibrated devices:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg text-center">
            <div className="bg-gray-200 h-40 mb-2"></div>
            <p>On editor's computer</p>
          </div>
          <div className="p-4 border rounded-lg text-center">
            <div className="bg-gray-200 h-40 mb-2"></div>
            <p>On client’s computer</p>
          </div>
          <div className="p-4 border rounded-lg text-center">
            <div className="bg-gray-200 h-40 mb-2"></div>
            <p>After printing</p>
          </div>
        </div>
        <p className="mt-6">
          Our color calibration services ensure your images look{" "}
          <strong>perfect, radiant, and color balanced</strong>.
        </p>
      </section>

      {/* Contact */}
      <section className="text-center py-12 px-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          Get in touch for professional color calibration services and make your
          photos stand out with accuracy.
        </p>
      </section>
    </div>
  );
};

export default ColorCalibration;
