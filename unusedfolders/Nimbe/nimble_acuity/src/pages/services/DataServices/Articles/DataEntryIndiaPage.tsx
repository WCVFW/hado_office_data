import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

export default function DataEntryIndiaPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Get the Data Entry India Advantage with Nimble Acuity
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Experience fast, accurate, and efficient data entry with the trusted expertise of Nimble Acuity.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-10 px-6 space-y-4">
        <h2 className="text-2xl font-bold">Advantage of Data Entry</h2>
        <p>
          Data entry in India is a rapidly growing industry. Nimble Acuity can cater
          to all your data entry requirements, delivering fast, accurate, and
          efficient results.
        </p>
        <p>
          By outsourcing data entry to Nimble Acuity, you gain access to
          well-organized information while saving valuable time and money. We ensure
          error-free results so you can start leveraging the full data entry India
          advantage.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Data Entry Services from Nimble
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Data entry from images",
            "Online order entry and follow up",
            "Directory Services",
            "Insurance claims entry",
            "PDF document indexing",
            "Online data capture services",
            "Data entry from product catalogs to web systems",
            "Hard/soft copy to database format",
            "Hospital records, patient notes, accident reports",
            "Business card indexing",
            "Custom export/import interfaces with audits",
            "Data mining and warehousing",
            "Data cleansing services",
            "Legal documents",
            "Database creation & updates for banks, airlines, agencies",
            "Web-based indexed document retrieval",
            "Mailing lists",
            "Voucher/document indexing",
            "Handwritten ballot/cards entry",
            "Survey and customer response entry",
            "Data entry from e-books & e-magazines",
            "Bonded mail handling & payment processing",
            "OCR",
            "Catalog Conversion",
          ].map((service, index) => (
            <Card key={index}>
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why India */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Why Choose India for Data Entry?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Indian providers use the latest in technology & software</li>
          <li>Cost-effective services without compromising quality</li>
          <li>Large pool of certified data entry professionals</li>
          <li>Time-zone advantage ensures faster turnaround</li>
          <li>India is the world’s largest provider of data entry services</li>
        </ul>
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

      {/* Concerns & Quality */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Data Entry India Concerns - Quality</h2>
        <p>
          Global customers may worry about the quality of data entry in India. Nimble Acuity addresses these concerns with stringent
          quality checks at every stage. 
        </p>
        <p>
          Data entry is completed manually or via computer-assisted capture using advanced tools like OCR, ICR, MICR, and bar code
          technology. Validation routines such as table look-ups, range checks, and relationship validation ensure accuracy. Finally,
          experienced operators verify the processed data before delivery.
        </p>
        <p>
          We tailor results according to your requirements by ensuring open communication and clear expectations throughout the process.
        </p>
      </section>

      {/* Closing */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Data Entry India</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Acuity has the expertise and capability to handle your data entry
          needs with cost-effective and high-quality solutions. Our services are
          designed to exceed expectations and deliver lasting value.
        </p>
        <Button size="lg" className="rounded-2xl px-8 py-3 text-lg">
          Start Your Free Trial
        </Button>
      </section>
    </div>
  );
}
