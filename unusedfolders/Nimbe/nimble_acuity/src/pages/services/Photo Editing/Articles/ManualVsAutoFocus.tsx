import React from "react";
import PEMainMenu from "../PEmainmenu";

const ManualVsAutoFocus: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Manual Focus vs Autofocus – A Complete Guide
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Understand the fundamentals, pros, cons, and best use cases for
          manual and autofocus in photography and videography.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <p>
          The photography community debates the merits of manual versus
          autofocus. While beginners may rely on autofocus with multiple focus
          points, purists and professionals appreciate the precision of manual
          focus. Understanding both will help you choose the right tool for
          your photography style.
        </p>
        <p>
          Historically, manual focus dominated until the late 1970s, when
          Polaroid introduced the first commercial autofocus system. Today,
          modern cameras boast advanced autofocus systems that track subjects
          in dynamic environments.
        </p>
      </section>

      {/* Which is Better */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Which is Better: Manual Focus or Autofocus?
        </h2>
        <p className="mb-4">
          Manual focus offers accuracy for controlled compositions, while
          autofocus ensures you never miss a fast-moving subject. For wildlife
          or sports photography, autofocus is essential. For portraits or
          macro photography, manual focus allows creative precision.
        </p>
      </section>

      {/* Usage Guidance */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Manual vs Autofocus – Which One Should I Use?
        </h2>
        <p className="mb-4">
          No strict rule exists. Use autofocus for motion or dynamic conditions,
          and manual focus for planned shots, portraits, or macro photography.
          Choose based on the scene, subject, and your desired composition.
        </p>
      </section>

      {/* Pros and Cons */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Pros and Cons of Manual Focusing
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">Pros</th>
                <th className="px-4 py-2 border">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Easy to shoot macros</td>
                <td className="px-4 py-2 border">Slower focusing speed</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Precise subject selection</td>
                <td className="px-4 py-2 border">Cannot focus and shoot from hips</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Better control in complex scenes</td>
                <td className="px-4 py-2 border">Requires high focusing skill</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Video vs Images */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Auto or Manual Focus for Videos & Images
        </h2>
        <p className="mb-4">
          For videography, manual focus adds cinematic control and avoids abrupt
          motor-driven shifts. For still images, both modes can be used
          interchangeably. Use autofocus for action, and manual for portraits
          and macro shots.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Benefits of Manual and Autofocus
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>
            Autofocus ensures faster and more precise tracking in dynamic
            conditions.
          </li>
          <li>
            Manual focus allows exact selection points and is ideal for
            controlled compositions.
          </li>
          <li>
            Autofocus can struggle in low light or cluttered backgrounds.
          </li>
          <li>
            Manual focus works well with entry-level DSLRs and macro photography.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Comparison Table</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">Autofocus</th>
                <th className="px-4 py-2 border">Manual Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Faster focusing in action</td>
                <td className="px-4 py-2 border">Precision for close-ups</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Ideal for sports & motion</td>
                <td className="px-4 py-2 border">Better for planned shoots</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">High-end AF cameras are expensive</td>
                <td className="px-4 py-2 border">Manual cameras are cheaper</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Photo Editing to Professionals
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Enhance your images with expert photo editing services from
          Nimble Acuity. Our skilled professionals improve composition,
          color, and clarity for stunning results.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default ManualVsAutoFocus;
