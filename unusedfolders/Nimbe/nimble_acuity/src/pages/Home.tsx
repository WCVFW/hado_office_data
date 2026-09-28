import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, BarChart, Zap, HeartHandshake, Database, Briefcase, Shield, Cpu, Layers, Users, TrendingUp, Target } from "lucide-react";

const services = [
    { name: "Finance, Accounting & FinOps", href: "/services/finance-accounting-finops", icon: <BarChart />, description: "Optimize financial operations with our expert accounting and FinOps solutions." },
    { name: "Creative Design", href: "/services/legal-corporate-compliance", icon: <Zap />, description: "Bring your brand to life with our innovative and impactful creative design services." },
    { name: "Healthcare BPO", href: "/services/healthcare-BPO-Service", icon: <HeartHandshake />, description: "Streamline healthcare administration and patient management with our specialized BPO services." },
    { name: "Data Services", href: "/services/it-software-cloud-cybersecurity", icon: <Database />, description: "Unlock the power of your data with our comprehensive data management and analytics services." },
    { name: "Mortgage Service", href: "/services/MortgageService", icon: <Briefcase />, description: "Efficient and reliable mortgage processing services to support your lending operations." },
    { name: "Insurance BPO Services", href: "/services/marketing-sales-creative-media", icon: <Shield />, description: "Enhance your insurance operations with our secure and compliant BPO solutions." },
    { name: "Software Development", href: "/services/SoftwareDevelopment", icon: <Cpu />, description: "Custom software solutions to drive innovation and efficiency in your business." },
    { name: "Photo Editing", href: "/services/operations-procurement-supplychain-manufacturing", icon: <Layers />, description: "Professional photo editing services to make your visuals stand out." },
];

const clientLogos = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
];

const Home: React.FC = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0  opacity-90"></div>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/img2.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1 }}></div>
        <div className="relative z-10 container mx-auto px-6  text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Elevate Your Business Operations
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Nimble Acuity provides premier outsourcing solutions that drive efficiency, innovation, and growth, allowing you to focus on what you do best.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg" className="bg-white text-[#00A7BB] hover:bg-gray-200">
              <Link to="/services">Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#00A7BB]">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider">
            Trusted by industry leaders
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-4 mt-6">
            {clientLogos.map((logo, index) => (
              <img key={index} src={logo} alt="Client Logo" className="h-8 opacity-60" />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Solutions Tailored for Growth</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We provide a wide spectrum of services designed to meet your unique business needs and drive success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-white border border-gray-200 rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
                <div className="inline-block p-4 bg-[#00A7BB] text-white rounded-full mb-4">
                  {React.cloneElement(service.icon, { className: "h-8 w-8" })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link to={service.href} className="font-semibold text-[#00A7BB] hover:text-gray-600 transition-colors">
                  Learn More <ArrowRight className="inline h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/img4.jpg" alt="Team working" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#00A7BB] mb-4">Your Partner in Excellence</h2>
              <p className="text-gray-600 mb-6">
                At Nimble Acuity, we are committed to delivering exceptional quality and measurable results. Our client-centric approach sets us apart.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span><strong>Expert Professionals:</strong> A team of industry veterans at your service.</span></li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span><strong>Scalable Operations:</strong> Solutions that grow with your business.</span></li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" /> <span><strong>Data Security:</strong> Uncompromising commitment to protecting your data.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00A7BB] text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let's discuss how our expertise can help you achieve your goals. Schedule a free, no-obligation consultation with our team today.
          </p>
          <Button asChild size="lg" className="bg-white text-[#00A7BB] hover:bg-gray-200">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

// A placeholder for the ShadCN UI Button until it's properly integrated
const Button = ({ children, asChild, size, variant, className }: any) => {
  const Comp = asChild ? "span" : "button";
  return <Comp className={`inline-block px-6 py-3 rounded-md font-semibold ${className}`}>{children}</Comp>;
};

export default Home;
