import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Imainmenu from "../Imainmenu";

const LifeAnnuityUnderwriting: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Life/Annuity Insurance Underwriting Services</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Streamline risk assessment, reduce costs, and improve efficiency by outsourcing your life and annuity insurance underwriting needs to our expert team.
        </p>
        <Button className="mt-6 bg-white text-blue-900 hover:bg-gray-200">Get Started</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Life/Annuity Insurance Underwriting Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Review risk information","Determine policy coverage","Assess insured perils","Modify coverage via endorsements","Identify claim risk solutions","Negotiate with agents and brokers"].map((service, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6 text-center font-medium">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="bg-blue-100 py-12 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Avail 1 WEEK FREE TRIAL on Any Service</h3>
        <p className="mb-6">TRY before you BUY! Get started today with a free trial of your choice.</p>
        <Button className="bg-blue-900 text-white hover:bg-blue-700">Start Free Trial</Button>
      </section>

      {/* Software Accordion */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Insurance Software We Use</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="software">
            <AccordionTrigger>View Software List</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-relaxed">
                Vertafore, Nexsure, Aspire, InsurancePro, HawkSoft, Agency Matrix, Applied Agency Management, Newton Agency Solution, Insly, SEMCATA1, Tracker, Jenesis, ABS, SIBRO, C2MS, AgencyIntel, QQCatalyst, Board, EverString, Halo, IBM SPSS, Radius, SAS Advanced Analytics, Statistica, ClickClaims, PLEXIS, Record360, Virtual Claims Adjuster, Bitrix24, Commission calculators, and more.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Nimble Acuity's Life Insurance Underwriting Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {["Requirement Analysis","Strategic Planning","Underwriting Implementation","Verification & Validation","Final Delivery"].map((step, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">0{idx+1}</h3>
                <p>{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Other Services You Can Benefit From</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Insurance Data Entry","Insurance Reporting","Insurance Accounting & Billing","Insurance BPO Customer Support"].map((service, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6 text-center font-medium">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Nimble Acuity for Life/Annuity Underwriting?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Flexible Pricing Options","Data Security (ISO/IEC 27001:2022)","Quick Turnaround Time","Experienced Life Insurance Underwriters","High-quality ISO Certified Services","Best Infrastructure","Dedicated Project Manager","24/7 Availability","Scalable Solutions"].map((benefit, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6 text-center font-medium">{benefit}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Policy Checking for a New York Insurance Company","Insurance Back-office Solutions for a Health Insurance Company"].map((story, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6 font-medium">{story}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Life/Annuity Insurance Underwriting to Us</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Partner with Nimble Acuity for reliable, cost-effective, and efficient life/annuity insurance underwriting services. Get in touch with us today to streamline your processes and improve outcomes.
        </p>
        <Button className="bg-white text-blue-900 hover:bg-gray-200">Contact Us</Button>
      </section>
    </div>
  );
};

export default LifeAnnuityUnderwriting;