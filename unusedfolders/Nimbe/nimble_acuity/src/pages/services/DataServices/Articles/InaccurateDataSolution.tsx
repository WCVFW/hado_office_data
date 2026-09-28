import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

export default function InaccurateDataSolution() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Solving Issues Related to Inaccurate Data
        </h1>
        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-medium">
          Over 80% of organizations struggle with data accuracy. Nimble Auity
          helps you fix inaccuracies, improve collaboration, and ensure your
          data works for you.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* Intro */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Data Accuracy Matters
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Inaccurate data is a major concern for organizations worldwide. Lack
            of coordination between marketing and sales often contributes to
            poor-quality data. Nimble Auity is dedicated to helping businesses
            solve these problems by providing reliable, efficient, and accurate
            data management solutions.
          </p>
        </div>

        {/* Solutions */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Nimble Auity’s Solutions for Data Accuracy
          </h3>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              <strong>Concentrate resources on data:</strong> Accurate,
              well-recorded data is the foundation for business improvement.
              Correct and comprehensive data helps you market more effectively.
            </p>
            <p>
              <strong>Effective data entry process:</strong> Standardize
              information across your organization with flexible and secure data
              entry practices.
            </p>
            <p>
              <strong>Deliver data to the right people:</strong> Ensure data is
              accurate, timely, and accessible to the teams that need it most.
            </p>
            <p>
              <strong>Analyze organizational systems:</strong> Consult employees
              to identify inefficiencies, and explore automation to save time,
              money, and effort.
            </p>
            <p>
              <strong>Outsource non-core processes:</strong> Free your team to
              focus on core goals by letting Nimble Auity manage non-core
              operations.
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
                <p className="text-3xl font-extrabold text-purple-700">
                  {stat.value}
                </p>
                <p className="text-lg font-medium text-gray-700">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Focus Section */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Nimble Auity Helps You Focus on Accuracy
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Inaccurate data leads to billing errors, failed transactions, and
            unhappy customers. Often, these issues come from poor communication
            or insufficient training. By implementing Nimble Auity’s data
            solutions, your organization can resolve inaccuracies and avoid
            costly mistakes.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-indigo-50 p-10 rounded-2xl text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Make Nimble Auity Your Partner for Data Accuracy
          </h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Free up your resources, eliminate inaccuracies, and focus on your
            organization’s growth. Nimble Auity ensures accuracy and efficiency
            at scale.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-purple-700 hover:bg-purple-800"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}