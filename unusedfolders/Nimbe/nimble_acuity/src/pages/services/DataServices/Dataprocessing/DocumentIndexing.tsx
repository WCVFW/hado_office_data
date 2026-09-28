import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  FileText,
  RefreshCw,
  FileCheck,
  Image as ImageIcon,
  Barcode,
  DollarSign,
  ShieldCheck,
  Clock,
  Settings,
  Users,
  BookOpen,
  Database,
} from "lucide-react";
import DSmainmenu from "../DSmainmenu";

export default function DocumentIndexing() {
  return (
    <div className="w-full bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Nimble Document Indexing Services
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Categorize records, restrict access, and retrieve documents on time
          with our state-of-the-art document indexing services.
        </p>
      </section>

      {/* Intro Section */}
      <section className="px-6 md:px-20 py-16 text-gray-700">
        <p className="mb-6 text-lg leading-relaxed">
          In a big enterprise, data is everywhere. It is challenging to gather,
          collate, analyze, and make that data easily accessible within the
          organization. Large volumes of data accumulated through paper trails,
          digital documents, emails, and other channels increase the need for
          indexing the records effectively. Embracing document indexing to
          tackle the data upsurge enables organizations to boost collaboration,
          save time, enhance data security, and ensure audit compliance.
        </p>
        <p className="text-lg leading-relaxed">
          We offer document indexing services and develop comprehensive
          databases that help you survive disruption in this data-driven era.
          Our services give you multiple options to search and retrieve data
          quickly and easily. We have indexed millions of documents for global
          clients using advanced capture software and other indexing automation
          tools.
        </p>
      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-16 bg-indigo-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Document Indexing Solutions We Offer
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FileText,
              title: "Text Indexing",
              desc: "Capture, digitize, and archive unique words and phrases to make searching easier.",
            },
            {
              icon: RefreshCw,
              title: "Data Duplication & Backup",
              desc: "Implement advanced backup across file systems, applications, and databases.",
            },
            {
              icon: FileCheck,
              title: "Document Conversion",
              desc: "Convert files into your preferred formats quickly with the latest tools.",
            },
            {
              icon: ImageIcon,
              title: "Image-to-Text Conversion",
              desc: "Convert scanned images into editable, retrievable text files.",
            },
            {
              icon: Barcode,
              title: "Barcode Indexing",
              desc: "Index alphanumeric, numeric-only, and 2D barcodes efficiently.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl p-6 text-center"
            >
              <service.icon className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            {
              icon: DollarSign,
              title: "Flexible Pricing",
              desc: "Customized hourly or FTE pricing models to save costs.",
            },
            {
              icon: ShieldCheck,
              title: "High Process Quality",
              desc: "ISO-certified workflows ensure the highest quality standards.",
            },
            {
              icon: Clock,
              title: "Short Turnaround",
              desc: "Our proven processes deliver on-time, every time.",
            },
            {
              icon: Settings,
              title: "World-Class Infrastructure",
              desc: "Cutting-edge tools and scalable systems for efficiency.",
            },
            {
              icon: Users,
              title: "Qualified Experts",
              desc: "Experienced specialists delivering superior results.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <item.icon className="w-10 h-10 text-indigo-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="px-6 md:px-20 py-16 bg-indigo-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Database,
              title: "Data Entry",
              desc: "Digitize your data for accuracy and smarter decisions.",
            },
            {
              icon: FileCheck,
              title: "Data Conversion",
              desc: "Organize archives, remove redundancy, and cut maintenance costs.",
            },
            {
              icon: RefreshCw,
              title: "Data Processing",
              desc: "Turn enterprise data into usable business insights.",
            },
            {
              icon: BookOpen,
              title: "OCR Services",
              desc: "Make documents editable and improve customer service.",
            },
            {
              icon: Settings,
              title: "Catalog Processing",
              desc: "Streamline processes and make self-service easier.",
            },
            {
              icon: FileText,
              title: "eBook Conversion",
              desc: "Affordable, reliable eBook conversion services.",
            },
          ].map((srv, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <srv.icon className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {srv.title}
              </h3>
              <p className="text-gray-600 text-sm">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Business Journal Indexing
              </h3>
              <p className="text-gray-600 text-sm">
                A U.S.-based company partnered with Nimble Auity to index and
                catalog their existing journal archives.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Catalog Data Processing
              </h3>
              <p className="text-gray-600 text-sm">
                A large U.S. furnishing firm saved 50% in costs by outsourcing
                catalog data processing to Nimble Auity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto italic text-lg"
        >
          “Working with Nimble Auity has been a great experience. They quickly
          learned our line of business, adapted to our requirements, and
          consistently performed well.”
          <footer className="mt-3 text-indigo-200 font-medium">
            — Spokesperson, Executive Recruitment Firm (US)
          </footer>
        </motion.blockquote>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Boost Your Efficiency with Nimble Auity
        </h2>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Convert paper trails into smart, searchable databases. Retrieve data
          faster, collaborate effectively, and achieve business goals with our
          document indexing solutions.
        </p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl shadow-md">
          Contact Us
        </Button>
      </section>
    </div>
  );
}

