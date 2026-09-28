import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

export default function DataEntryClerkPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Key Skills of an Online Data Entry Clerk
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Discover the must-have skills and core responsibilities of online data entry clerks, and see how Nimble Acuity can help you streamline data management.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto py-10 px-6 space-y-4">
        <p>
          Data entry clerks play a crucial role in managing, storing, and retrieving business-critical information as per client requirements. 
          Having an efficient online data entry clerk on your team ensures you save time on organizing and archiving business data while maintaining accuracy and efficiency.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Must-Have Skills for a Data Entry Clerk
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Software, Written & Communication Skills</h3>
              <p>
                Proficiency in word processors, spreadsheets, databases, and record management software. 
                Strong written and communication skills are essential for accuracy and collaboration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Fast Typing Speed</h3>
              <p>
                High typing speed with accuracy, plus familiarity with input devices like keyboards, scanners, and specialized tools.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Patience & Concentration</h3>
              <p>
                The ability to focus for long hours on repetitive tasks, ensuring high-quality output without errors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          6 Key Responsibilities of an Online Data Entry Clerk
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Data Accuracy Verification",
              text: "Cross-verify data before entry to prevent errors leading to misinformation."
            },
            {
              title: "Making Necessary Changes or Corrections",
              text: "Correct inaccuracies logically and as per instructions before final submission."
            },
            {
              title: "Assisting in Robust Data Management",
              text: "Provide insights to build efficient and tailored data management systems."
            },
            {
              title: "Retrieving Information on Time",
              text: "Ensure data is retrievable in the correct format, at the right time, and in the required style."
            },
            {
              title: "Maintaining Confidentiality",
              text: "Follow strict security protocols to safeguard sensitive business information."
            },
            {
              title: "Workflow Management",
              text: "Coordinate with managers, maintain smooth information flow, and generate necessary reports."
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Nimble Acuity */}
      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg font-semibold">
          <div>40% Cost Reduction</div>
          <div>8-24 Hrs Faster Turnaround</div>
          <div>500+ Satisfied Clients</div>
          <div>350+ Skilled Data Experts</div>
          <div>99% Accuracy</div>
          <div>21 Years Experience</div>
        </div>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          Nimble Acuity has been a trusted partner for global businesses for over two decades, offering tailored, cost-effective, and highly secure data entry services. 
          With a team of skilled professionals, we ensure your business data is always accurate, reliable, and confidential.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg rounded-2xl">
          Contact Us Today
        </Button>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Nimble Acuity Case Studies
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Loan Repayment Data Entry",
              text: "A US-based company sought help with a large data entry and migration project."
            },
            {
              title: "Data Extraction & Database Creation",
              text: "Nimble assisted a US-based client by extracting data from 20,000+ documents and creating a database within 45 days."
            },
            {
              title: "Geo Tagging Services",
              text: "Our team helped a location-tagging startup tag commercial properties with 90% accuracy in record time."
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
