import React from "react";
import { 
  Image, Video, Layout, FileText, BookOpen, Presentation, Paintbrush, User, Home, Heart, Film 
} from "lucide-react";
import CSmainmenu from "./creative-design/CSmainmenu";

const CreativeDesignPage: React.FC = () => {
  const services = [
    { title: "Graphic Design Services", icon: <Image className="h-8 w-8 text-[#006A7C]" />, description: "Custom graphic designs for brochures, banners, flyers, and PR materials to consolidate brand identity." },
    { title: "Video Editing Services", icon: <Video className="h-8 w-8 text-[#006A7C]" />, description: "Comprehensive editing: rearranging footage, merging scenes, removing unwanted content, shot sequencing, and more." },
    { title: "Exhibition Design Services", icon: <Layout className="h-8 w-8 text-[#006A7C]" />, description: "Captivating exhibition designs to strengthen brand presence and cut through competition." },
    { title: "InDesign Services", icon: <FileText className="h-8 w-8 text-[#006A7C]" />, description: "Transform ideas into polished publications that stand out with versatile InDesign solutions." },
    { title: "Magazine Design Services", icon: <BookOpen className="h-8 w-8 text-[#006A7C]" />, description: "Engage readers, communicate effectively, and leave lasting impressions with magazine design." },
    { title: "PowerPoint Design Services", icon: <Presentation className="h-8 w-8 text-[#006A7C]" />, description: "Elevate presentations into visually compelling, engaging, and professional content." },
    { title: "Prepress Services", icon: <Paintbrush className="h-8 w-8 text-[#006A7C]" />, description: "Customized graphic production, print conversion, redesigns, and other prepress solutions." },
    { title: "Illustration Services", icon: <User className="h-8 w-8 text-[#006A7C]" />, description: "Expert custom illustrations including line art sketches, character sketches, and more." },
    { title: "Real Estate Video Editing", icon: <Home className="h-8 w-8 text-[#006A7C]" />, description: "Showcase properties professionally with cinematic-quality real estate video edits." },
    { title: "Wedding Video Editing", icon: <Heart className="h-8 w-8 text-[#006A7C]" />, description: "Preserve precious memories with expert wedding video editing in cinematic brilliance." },
    { title: "Animation Services", icon: <Film className="h-8 w-8 text-[#006A7C]" />, description: "High-quality 2D/3D animations, storyboards, caricatures, animatics, and webpage animations." },
    { title: "Artwork & DTP Services", icon: <Paintbrush className="h-8 w-8 text-[#006A7C]" />, description: "Print-ready files, flawless desktop publishing, and integrated layouts of text, images, and illustrations." },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu />
      <section className="bg-[#F0FAFB] py-24 px-6 md:px-20 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#006A7C] mb-6">
          Comprehensive Creative Design Solutions
        </h1>
        {/* Hero Image */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/img14.jpeg" // replace with your hero image
            alt="Creative Design Solutions"
            className="rounded-lg shadow-lg max-h-80 w-full max-w-4xl object-cover"
          />
        </div>
        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
          Retain your customers and stand out from competitors with innovative designs, videos, brochures, catalogs, and more from Nimble Auity.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
          Are you losing customers due to unappealing graphics, boring catalogs, or poorly written content? Nimble Auity helps you creatively market your brand while allowing you to focus on your core business. With over 23 years of experience, our team of designers, animators, video editors, and illustrators delivers high-quality creative solutions globally.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-10 text-center">
          Our Creative Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-[#006A7C]">{service.title}</h3>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-20 bg-[#006A7C] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Elevate Your Brand With Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
          Outsource your creative design requirements to Nimble Auity and gain high-quality, professional solutions that engage your audience and increase leads.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-[#006A7C] font-semibold rounded-xl hover:bg-[#E0F7F9] transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default CreativeDesignPage;
