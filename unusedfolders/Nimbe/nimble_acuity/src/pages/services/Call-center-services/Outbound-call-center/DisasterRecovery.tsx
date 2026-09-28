import React from "react";
import { ShieldCheck, Clock, Server, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CCmainmenu from "../CCmainmenu";

const DisasterRecovery: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="relative bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Outsource Call Center Disaster Recovery Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Ensure 24/7 uninterrupted customer support with disaster recovery call
          center services powered by Lean Six Sigma, AI-driven monitoring, and
          global backup infrastructure.
        </p>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
          Contact Us Today
        </Button>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Compliance & Security</h3>
              <p>BS 7799/ISO17799 certified data protection at every step.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Zero Downtime</h3>
              <p>Hot DR solutions with continuous synchronization.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Server className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Best-of-Breed Tech</h3>
              <p>Enterprise-class hosting, backup power, and redundant systems.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Globe className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Global Backup</h3>
              <p>Redundant sites across India & overseas for resilience.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* DR Options */}
      <section className="bg-white py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Disaster Recovery Options
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-blue-600">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-3">Cold Recovery</h3>
              <p>
                Backup centers with structured cabling and WAN redirection. May
                take a few days to resume operations.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-3">Warm Recovery</h3>
              <p>
                Hardware-ready with pre-installed applications. Recovery within
                24 hours for mid-tier readiness.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-green-600">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-3">Hot Recovery</h3>
              <p>
                Fully synchronized systems providing zero downtime with instant
                failover for mission-critical processes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Continuity Planning */}
      <section className="bg-gray-100 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Business Continuity Planning (BCP)
        </h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {["Analysis", "Solution Design", "Implementation", "Testing", "Maintenance"].map(
            (step, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{step}</h3>
                  <p className="text-sm">
                    {i === 0 && "Threat & impact analysis with documented requirements."}
                    {i === 1 && "Design crisis structure, backup sites, and data replication."}
                    {i === 2 && "Execute chosen recovery strategies seamlessly."}
                    {i === 3 && "Annual/bi-annual testing for full operational readiness."}
                    {i === 4 && "Regular updates, verification & recovery procedure checks."}
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Are You Prepared for Disaster Recovery?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          With O2I’s Call Center Disaster Recovery Services, you can minimize
          downtime, maintain customer trust, and ensure seamless global support.
        </p>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
          Talk to Us Today
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Outsource2India – Disaster Recovery &
          Business Continuity Solutions
        </p>
      </footer>
    </div>
  );
};

export default DisasterRecovery;
