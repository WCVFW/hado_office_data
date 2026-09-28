import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ElectricalCalibrationServices() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Electrical Calibration Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Our electrical calibration services are equipped to calibrate almost every electrical parameter from basic to high-level electrical instruments. Prices start at <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Electronic calibration means measuring the electric magnitude of a device with unknown accuracy with that of a device (calibrator) with known and established accuracy. The calibrator’s value is accepted as the reference and always in sync with international standards.  
          Calibration ensures performance, stability, verification, and fine-tuning of instruments for reliable results.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Nimble has extensive experience in assisting clients with calibration services for a wide range of instruments, including Panel meters, DMMS, LCR meters, Breakdown Testers, Power & Energy meters, Function generators, Micro Ohmmeters, Timers, and Signal generators.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Electrical Calibration Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Amplifier Calibration", desc: "We calibrate Class A, B, and AB amplifiers for voltage/current probes and ensure linear frequency response meets accepted standards." },
            { title: "Analyzer Calibration", desc: "Calibration for audio, frequency, distortion, logic, spectrum, modulation analyzers ensuring medical device safety & accuracy." },
            { title: "Oscilloscope Calibration", desc: "High-quality calibration to ensure measurements fall within specification limits and identify out-of-tolerance instruments." },
            { title: "Power Supplies Calibration", desc: "Fine-tuning of voltage/current output, waveform evaluation, and compliance with manufacturer specifications." },
            { title: "Meter Calibration", desc: "Accurate calibration for current, capacitance, frequency, impedance, and sound levels in flow measurement." },
            { title: "Transformer Calibration", desc: "Establishes correct measurements of phase angles, correction factors, and variable isolation at primary voltages." },
            { title: "Resistance Calibration", desc: "Ensures resistor boxes maintain correct values across ranges and comply with exact specifications." },
            { title: "Tester Calibration", desc: "Calibration for Dielectric, Hipot, Insulation, and Breakdown testers with precision 10x more accurate equipment." }
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Cost-effective calibration services",
            "Extensive experience across diverse instruments",
            "Guaranteed world-class quality standards",
            "Traceable calibration to international standards",
            "State-of-the-art equipment and methodologies",
            "Reliable and timely delivery"
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Provided Piping & Instrumentation Drawings
              </h3>
              <p className="text-gray-600">
                Delivered high-quality piping and instrumentation drawings for a plant engineering project at affordable rates.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Converted Legacy 2D Drawings to 3D
              </h3>
              <p className="text-gray-600">
                Converted 1,600+ 2D mechanical engineering drawings into 3D models for a US-based engineering firm.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “They have been able to learn our procedures quicker than I ever thought possible.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company in the US</p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Electrical Calibration Services
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Looking for the most reliable and cost-effective calibration services? Get in touch with Nimble today!
        </p>
        <Button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
