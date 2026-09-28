import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

export default function DataQualitySolution() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Finding the Best Data Quality Solution
        </h1>
        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-medium">
          Achieve reliability, accuracy, and scalability in your data quality
          with Nimble Auity’s proven solutions.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* Intro */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Data Quality Matters
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Accomplishing data quality is not simple. Your organization must
            have a strategy to tackle weak areas, deliver results with available
            resources, and scale with future needs. Partnering with{" "}
            <strong>Nimble Auity</strong> ensures reliability, accuracy, and
            sustainable data quality strategies.
          </p>
        </div>

        {/* Guidelines */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Guidelines for a Strong Data Quality Strategy
          </h3>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              <strong>Recognize the Problem:</strong> Audit mailing operations,
              calculate costs of incorrect data, and identify inefficiencies.
            </p>
            <p>
              <strong>Form a Team:</strong> Assign responsibility for spotting
              issues, suggesting solutions, and implementing strategies. Nimble
              Auity can act as your extended team to reduce overhead.
            </p>
            <p>
              <strong>Discover the Root Cause:</strong> Analyze how poor data
              quality entered your systems and design sustainable solutions with
              expert support.
            </p>
            <p>
              <strong>Evaluate Your Technology:</strong> Assess whether your
              tools, applications, and systems can integrate data quality checks
              effectively, or require reformatting/customization.
            </p>
            <p>
              <strong>Estimate Your Vendors:</strong> Shortlist reliable data
              quality vendors, compare products, and ensure scalability with
              trusted partners like Nimble Auity.
            </p>
            <p>
              <strong>Execution:</strong> Implement solutions on a pilot scale,
              measure costs and efficiency, then scale for long-term adoption.
            </p>
            <p>
              <strong>Confirmation:</strong> Review pilot outcomes, confirm
              effectiveness, and finalize the strategy for enterprise-wide
              rollout.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { value: "40%", label: "Cost Reduction" },
            { value: "8-24 Hrs", label: "Faster Turnaround" },
            { value: "500+", label: "Satisfied Clients" },
            { value: "350+", label: "Skilled Experts" },
            { value: "99%", label: "Accuracy" },
          ].map((stat, i) => (
            <Card key={i} className="shadow-lg">
              <CardContent className="p-6">
                <p className="text-3xl font-extrabold text-indigo-700">
                  {stat.value}
                </p>
                <p className="text-lg font-medium text-gray-700">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-indigo-50 p-10 rounded-2xl text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ensure Accuracy with Nimble Auity
          </h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Struggling with inaccurate or redundant data? Our{" "}
            <strong>Data Quality Services</strong> help you recognize,
            streamline, and correct your data processes—so you can focus on
            growth.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-indigo-700 hover:bg-indigo-800">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}
