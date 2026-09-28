import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

export default function DataEntryIndiaAdvantage() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Get the Data Entry India Advantage
        </h1>
        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-medium">
          Save costs, gain efficiency, and access expert data entry services with Nimble Auity.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* Introduction */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Advantage of Data Entry
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Data entry in India is a fast growing industry.{" "}
            <strong>Nimble Auity</strong> can cater to all your data entry
            requirements and provide you with fast, accurate and efficient
            services.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            By outsourcing data entry to <strong>Nimble Auity</strong>, you can
            get access to organized information and also save on valuable time
            and money. Start leveraging the{" "}
            <strong>Data Entry India advantage</strong> that Nimble Auity offers.
          </p>
        </div>

        {/* Services List */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
            Data Entry Services from Nimble Auity
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lg leading-relaxed list-disc list-inside">
            <li>Data entry from images</li>
            <li>Online order entry and follow up</li>
            <li>Directory Services</li>
            <li>Insurance claims entry</li>
            <li>PDF document indexing</li>
            <li>Online data capture services</li>
            <li>Data entry from product catalogs to web-based systems</li>
            <li>Hospital records, patient notes, and accident reports</li>
            <li>Business card indexing</li>
            <li>Custom data export/import interfaces with audits</li>
            <li>Data mining and warehousing</li>
            <li>Data cleansing Services</li>
            <li>Legal documents</li>
            <li>Database creation & updates for banks, airlines, agencies</li>
            <li>Web-based indexed document retrieval services</li>
            <li>Mailing lists</li>
            <li>Indexing of vouchers and documents</li>
            <li>Handwritten ballot/cards entry</li>
            <li>Surveys & customer responses</li>
            <li>E-book and e-magazine publications</li>
            <li>Bonded mail handling & payment processing</li>
            <li>OCR</li>
            <li>Catalog Conversion</li>
          </ul>
        </div>

        {/* Why Choose India */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Why Choose India for Data Entry?
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>Indian providers use the latest technology & software</li>
            <li>Cost-effective services with no compromise on quality</li>
            <li>Large pool of certified data entry professionals</li>
            <li>Time-zone advantage: work gets done while you sleep</li>
            <li>India is the world’s largest data entry provider</li>
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
                <p className="text-3xl font-extrabold text-blue-700">{stat.value}</p>
                <p className="text-lg font-medium text-gray-700">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Section */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Data Entry India Concerns - Quality
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Global customers may have concerns about quality and accuracy of data
            entry services in India. However, these concerns can be put to rest
            once they understand the stringent quality processes Nimble Auity
            follows.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Data entry is done manually or via automated capture tools such as
            OCR, ICR, MICR, and barcodes. Information is validated and verified
            by experienced operators before being transmitted to clients.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 p-10 rounded-2xl text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Data Entry India
          </h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Nimble Auity has the capability and expertise to handle all your data
            entry needs. We offer cost-effective, high-quality solutions tailored
            to your requirements.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-blue-700 hover:bg-blue-800">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}
