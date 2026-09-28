import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

export default function DataEntryOutsourcing() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Data Entry Services with Nimble Auity
        </h1>
        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-medium">
          Save costs, gain efficiency, and access expert data entry services by partnering with Nimble Auity.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* Introduction */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Data Entry with Nimble
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Regardless of the size of your company, managing and processing data into useful information is critical. 
            As your company grows, the job of handling growing data needs becomes increasingly time-consuming and costly.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Many companies spend heavily on staff salaries, overheads, and infrastructure for data entry tasks. 
            These resources could instead be invested in revenue growth. 
            Choosing <strong>nimble data entry services</strong> is one of the most cost-effective moves your business can make.
          </p>
        </div>

        {/* Why Nimble Section */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Why Nimble Data Entry?
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>Save on hiring & training costs</li>
            <li>Save valuable time & effort</li>
            <li>Reduce administrative overheads</li>
            <li>Eliminate need for expensive software</li>
            <li>Cut infrastructure expenses</li>
          </ul>
        </div>

        {/* Top 8 Questions */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Top 8 Things to Ask Before Choosing a Data Entry Partner
          </h3>
          <ul className="list-decimal list-inside text-lg leading-relaxed space-y-3">
            <li>Company background – years in business, scale, and credentials</li>
            <li>Does it have the right skills and experience for your needs?</li>
            <li>Can they provide references or proof of past expertise?</li>
            <li>What data security systems & processes are in place?</li>
            <li>Are confidentiality & service-level agreements provided?</li>
            <li>Do they share project progress and communicate effectively?</li>
            <li>Are they honest and upfront, or do they over-promise?</li>
            <li>Do they clearly understand your goals and act as a partner?</li>
          </ul>
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
                <p className="text-3xl font-extrabold text-indigo-700">{stat.value}</p>
                <p className="text-lg font-medium text-gray-700">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits of Nimble Data Entry */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Top 5 Benefits of Nimble Data Entry
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>Focus on strategic needs instead of repetitive tasks</li>
            <li>Gain competitive advantage with specialized expertise</li>
            <li>Access skilled resources and advanced systems</li>
            <li>Manage complex processes more easily and cost-effectively</li>
            <li>Lower operational costs significantly</li>
          </ul>
        </div>

        {/* Why Choose Nimble Auity */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Why Choose Nimble Auity?
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Nimble Auity has been providing data entry services globally since 2002. 
            We understand that every requirement is unique, and our teams dedicate their fullest effort to ensure 
            your project’s success.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            From small tasks to large volumes, our qualified teams ensure quality, accuracy, and complete confidentiality. 
            All data is validated, verified, and delivered error-free.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-indigo-50 p-10 rounded-2xl text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Experience the Nimble Auity Advantage
          </h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Try our <strong>Free Trial Offer</strong> and see how our data entry services 
            can save costs, improve efficiency, and scale your operations.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-indigo-700 hover:bg-indigo-800">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}
