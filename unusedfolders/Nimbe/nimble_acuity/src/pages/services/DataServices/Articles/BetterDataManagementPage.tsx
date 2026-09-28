import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

export default function BetterDataManagementPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          An Overview of Better Data Management
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Streamline and strengthen your business operations with effective master data management powered by Nimble Acuity.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto py-10 px-6 space-y-4">
        <h2 className="text-2xl font-bold">Better Data Management</h2>
        <p>
          As your organization grows, so does your data. Many companies lack a single,
          centralized master data management (MDM) system, leading to contradictory,
          conflicting, and disorganized information. This redundancy creates confusion and
          operational overheads.
        </p>
        <p>
          To prevent this chaos, an integrated and better data management system is a
          must-have for organizations of all sizes.
        </p>
      </section>

      {/* What Does Better Data Management Mean */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          What Does Better Data Management Mean?
        </h2>
        <p className="mb-4">
          Better data management is about incorporating best practices and processes to
          organize, control, and manage data across the company. Master Data Management
          (MDM) is one of the most effective methodologies to streamline the way data is
          recorded, stored, and retrieved.
        </p>
        <p>
          MDM helps create and maintain a consistent, accurate list of master data using
          tools, technology, and processes. With MDM, businesses can enhance customer data
          management and build better customer relationships.
        </p>
        <p className="mt-4 text-blue-600 font-medium">
          Would you like to read an article on the 10 Common Misconceptions about Data
          Management?
        </p>
      </section>

      {/* Why Do You Need MDM */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Why Do You Need Master Data Management?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "To avoid contradictory, conflicting, and disorganized data",
            "To avoid data loss",
            "To ensure regular and up-to-date backups",
            "To recover data in case of loss",
            "To avoid duplication or redundancy",
            "To ensure accuracy of data",
            "To facilitate easy access, especially customer info",
            "To get rid of incorrect data",
            "To maintain a single master database",
            "To facilitate accurate analysis",
            "To enable improved decision making",
          ].map((reason, i) => (
            <Card key={i}>
              <CardContent className="p-4">{reason}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg font-semibold max-w-4xl mx-auto">
          <div>40% Cost Reduction</div>
          <div>8-24 Hrs Faster Turnaround</div>
          <div>500+ Satisfied Clients</div>
          <div>350+ Skilled Experts</div>
          <div>99% Accuracy</div>
          <div>21 Years Experience</div>
        </div>
      </section>

      {/* Introducing MDM */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-bold">Introducing Master Data Management in Your Business</h2>
        <p>
          Managing a master database is not a simple task—it requires multiple processes
          and tools such as data collection, transformation, consolidation, storage,
          distribution, warehouses, mining, optimization, and analysis.
        </p>
        <p>
          To succeed, your business needs a tailored master data strategy aligned with
          your organization’s nature, goals, and vision.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Choose Nimble Acuity for Better Data Management
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Acuity’s expert team understands the intricacies of business data
          management. We help you introduce or manage your master database effectively and
          boost business ROI.
        </p>
        <Button size="lg" className="rounded-2xl px-8 py-3 text-lg">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
