import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function FinancialAnalysisPage() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Nimble Financial Analysis to India
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Leverage Nimble Acuity’s 26+ years of experience in executing
          financial research and analysis projects for global clients. Gain
          access to PhD/Master-level consultants, statisticians, chartered
          accountants, and financial analysts who deliver world-class insights
          with complete confidentiality.
        </p>
        <Button size="lg">Contact Us</Button>
      </section>

      {/* Competencies Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Competencies in Financial Research and Analysis
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Investment Research</li>
          <li>Trend Analysis</li>
          <li>Financial Research</li>
          <li>Financial Analysis</li>
        </ul>
      </section>

      {/* Output Presentation */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Output Presentation Skills
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Plotting and charting of tabulated data</li>
          <li>Insight generation</li>
          <li>
            Document submission in multiple formats – PDF, HTML, XML, Word,
            PowerPoint
          </li>
        </ul>
      </section>

      {/* Techniques Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Financial Analysis Techniques We Use
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          {[
            "Cross-Tabulation",
            "ANOVA/ANCOVA",
            "Linear & Non-linear Regression",
            "Discriminant Analysis",
            "MANOVA/MANCOVA",
            "Conjoint Analysis",
            "Canonical Correlation",
            "CHAID",
            "Neural Nets",
            "SEM",
            "Factor & Cluster Analysis",
            "Multidimensional Scaling",
            "Association Analysis",
            "Time Series Analysis",
            "Markov Chains",
          ].map((technique, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-4 text-center font-medium">
                {technique}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Unique Value Proposition
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>End-to-end solutions for all financial research needs</li>
          <li>Economies of scale</li>
          <li>Deep domain expertise</li>
          <li>Strong process & project implementation skills</li>
          <li>Excellent English communication</li>
        </ul>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Benefits of Outsourcing Financial Research
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Cost savings up to 40-45%</li>
          <li>World-class quality, always on time</li>
          <li>On-demand access to expert analysts</li>
        </ul>
      </section>

      {/* Infrastructure & Security */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Infrastructure and Security at Nimble Acuity
        </h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="font-semibold text-lg">Power Supply</h3>
              <p>
                High tension power source with generator backup for 6+ hours,
                and UPS backup of 2 hours for critical systems.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="font-semibold text-lg">Internet Connectivity</h3>
              <p>
                Dedicated 1Mbps line, plus 2Mbps line for client file downloads
                with redundancy ensuring 99.95% uptime.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="font-semibold text-lg">Data Security</h3>
              <p>
                RAID Level-1, remote backups, fireproof storage, SLAs, and NDAs
                for confidentiality.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quality Standards */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Quality and Data Security Standards
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>ISO 9001 certified</li>
          <li>In process of BS7799 certification for data security</li>
        </ul>
      </section>

      {/* Confidentiality */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Assured Financial Confidentiality
        </h2>
        <p className="text-gray-700">
          Our analysts ensure complete confidentiality and privacy of client
          information. We respect preferred contact methods and never disclose
          identities without written consent.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to Nimble Your Financial Research?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Partner with Nimble Acuity and gain access to insightful, accurate,
          and timely financial research that drives confident business
          decisions.
        </p>
        <Button size="lg">Get Started</Button>
      </section>
    </div>
  );
}
