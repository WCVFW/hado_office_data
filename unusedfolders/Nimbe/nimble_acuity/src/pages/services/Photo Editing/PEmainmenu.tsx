import React, { useEffect, useRef, useState } from "react";

// ---------- Types ----------
interface MenuLink {
  label: string;
  href: string;
  isHeading?: boolean;
}

interface MenuSection {
  title: string;
  description?: string;
  mainHref: string;
  links: MenuLink[];
}

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  title: string;
  heading?: string;
  headingHref: string;
  description?: string;
  descriptionLinkText?: string;
  descriptionHref?: string;
  items: DropdownItem[];
}

// ---------- Data ----------
const MenuLink: MenuSection[] = [
  {
    title: "Photo Retouching",
    description:
      "We offer specialized photo editing services. Get more information on our photo retouching services and sub-services.",
    mainHref: "/photo-editing/photo-retouching-services/",
    links: [
      { label: "Background Removal Services", href: "/photo-editing/photo-retouching/background-removal-services.asp" },
      { label: "Batch Photo Editing Services", href: "/photo-editing/photo-retouching/batch-photo-editing-services.asp" },
      { label: "Photo Enhancement Services", href: "/photo-editing/photo-retouching/photo-enhancement-services.asp" },
      { label: "Album Design Services", href: "/imaging/album-design-services.asp" },
      { label: "Bulk Photo Editing Service", href: "/photo-editing/photo-retouching/bulk-photo-editing-services.asp" },
    ],
  },
  {
    title: "Clipping Path",
    description:
      "We offer specialized photo editing services. Get more information on our clipping path services and sub-services.",
    mainHref: "/photo-editing/clipping-path-service/",
    links: [
      { label: "Product Photo Editing Services", href: "/photo-editing/clipping-path/product-photo-editing-services.asp" },
      { label: "Hair Masking Services", href: "/photo-editing/clipping-path/hair-masking-services.asp" },
      { label: "Car Image Clipping Services", href: "/photo-editing/clipping-path/car-image-clipping-services.asp" },
      { label: "Ghost Mannequin Service", href: "/photo-editing/clipping-path/ghost-mannequin-service.asp" },
      { label: "Image Masking Services", href: "/photo-editing/clipping-path/image-masking-services.asp" },
    ],
  },
  {
    title: "Real Estate Photo Editing",
    description:
      "We offer specialized photo editing services. Get more information on real estate photo editing services.",
    mainHref: "/photo-editing/real-estate-photo-editing-services/",
    links: [
      { label: "Real Estate Still Image Enhancement Services", href: "/photo-editing/real-estate/real-estate-still-image-enhancement-services.asp" },
      { label: "Real Estate HDR Photo Editing Services", href: "/photo-editing/real-estate/real-estate-hdr-photo-editing-services.asp" },
      { label: "Real Estate Panorama Stitching Services", href: "/photo-editing/real-estate/real-estate-panorama-stitching-services.asp" },
      { label: "Real Estate Digital Decluttering Services", href: "/photo-editing/real-estate/real-estate-digital-decluttering-services.asp" },
      { label: "Real Estate Aerial Photo Editing Services", href: "/photo-editing/real-estate/real-estate-aerial-photo-editing-services.asp" },
      { label: "Real Estate Virtual Tour Services", href: "/photo-editing/real-estate/real-estate-virtual-tour-services.asp" },
      { label: "Real Estate Floor Plan Conversion Services", href: "/photo-editing/real-estate/real-estate-floor-plan-conversion-services.asp" },
      { label: "Focus Stacking Services", href: "/photo-editing/real-estate/focus-stacking-services.asp" },
      { label: "Twilight Photo Editing Services", href: "/photo-editing/real-estate/twilight-photo-editing-services.asp" },
      { label: "Matterport services", href: "/photo-editing/real-estate/matterport-services.asp" },
    ],
  },
  {
    title: "Wedding Photo Editing",
    description:
      "We offer specialized photo editing services. Get more information on our wedding photo editing services.",
    mainHref: "/photo-editing/wedding-photo-editing-services/",
    links: [
      { label: "Wedding Photo Culling Services", href: "/photo-editing/wedding/wedding-photo-culling-services.asp" },
      { label: "Photo Density & Color Correction", href: "/imaging/density-color-correction-services.asp" },
    ],
  },
  {
    title: "Jewelry Photo Editing",
    description:
      "We offer specialized photo editing services. Get more information on our Jewelry Photo Editing services and sub-services.",
    mainHref: "/photo-editing/jewelry-photo-editing-services/",
    links: [
      { label: "Jewelry Retouching Services", href: "/photo-editing/jewelry/jewelry-retouching-services.asp" },
      { label: "Jewelry Photo Clipping Services", href: "/photo-editing/jewelry/jewelry-photo-clipping-services.asp" },
    ],
  },
  {
    title: "eCommerce Photo Editing",
    description:
      "We offer specialized photo editing services. Get more information on our eCommerce photo editing services and sub-services.",
    mainHref: "/photo-editing/ecommerce-photo-editing-services/",
    links: [
      { label: "eCommerce Image Clipping Services", href: "/imaging/articles/ecommerce-image-clipping.asp" },
    ],
  },
  {
    title: "Portrait Retouching",
    description:
      "We offer specialized photo editing services. Get more information on our portrait services and sub-services.",
    mainHref: "/photo-editing/portrait-retouching-services/",
    links: [
      { label: "Sports Photo Editing Services", href: "/photo-editing/portrait/sports-photo-editing-services.asp" },
      { label: "Fashion Photo Editing Services", href: "/photo-editing/portrait/fashion-photo-editing-services.asp" },
      { label: "Photo Restoration Services", href: "/photo-editing/portrait/photo-restoration-services.asp" },
      { label: "Photo Manipulation Services", href: "/photo-editing/portrait/photo-manipulation-services.asp" },
      { label: "Headshot Retouching Services", href: "/photo-editing/portrait/headshot-retouching-services.asp" },
      { label: "Newborn Photo Editing Services", href: "/photo-editing/portrait/newborn-photo-editing-services.asp" },
      { label: "Lightroom Editing Services", href: "/photo-editing/portrait/lightroom-editing-services.asp" },
      { label: "School Photo Editing Services", href: "/photo-editing/portrait/school-photo-editing-services.asp" },
      { label: "Professional Cloth Pattern Tiling Services", href: "/photo-editing/portrait/cloth-pattern-tiling-services.asp" },
    ],
  },
  {
    title: "Photoshop",
    description:
      "We offer specialized photoshop services. Get more information on our photoshop services.",
    mainHref: "/photo-editing/photoshop-services/",
    links: [
      {
        label: "Photoshop Advanced Retouching Services",
        href: "/photo-editing/photoshop/photoshop-advanced-retouching-services.asp",
      },
    ],
  },
  {
    title: "Photo Editing UK",
    description:
      "We offer specialized photo editing services UK. Get more information on our Photo Editing Services UK.",
    mainHref: "/uk/photo-editing/",
    links: [
      { label: "Photo Retouching Services UK", href: "/uk/photo-editing/photo-retouching-services.asp" },
      { label: "Real Estate Photo Editing Services - UK", href: "/uk/photo-editing/real-estate-photo-editing-services.asp" },
      { label: "Clipping Path Service for UK", href: "/uk/photo-editing/clipping-path-service.asp" },
      { label: "Photo Restoration Services UK", href: "/uk/photo-editing/portrait/photo-restoration-services.asp" },
    ],
  },
  {
    title: "Panorama",
    description:
      "We offer specialized photoshop services. Get more information on our Panorama Image Stitching Services.",
    mainHref: "/photo-editing/panorama-image-stitching-service/",
    links: [
      {
        label: "360-degree Panorama Photo Stitching Services",
        href: "/photo-editing/panorama/360-degree-panorama-photo-stitching-services.asp",
      },
      {
        label: "Fisheye Panorama Stitching Services",
        href: "/photo-editing/panorama/fisheye-panorama-stitching-services.asp",
      },
    ],
  },
  {
    title: "Articles",
    description:
      "Our photo editing services resources are comprehensive and well-researched. Check out our photo editing services articles.",
    mainHref: "/imaging/articles/",
    links: [
      {
        label:
          "Major Benefits of Outsourcing to a Professional Photo Editing Service Provider",
        href: "/imaging/articles/major-benefits-outsourcing-professional-service-provider.asp",
      },
      {
        label:
          "Digital Photo Restoration Process - Technique to Recreate Old Images",
        href: "/imaging/articles/digital-photo-restoration-process-technique-to-recreate-old-images.asp",
      },
      {
        label: "Virtual Reality - The Game-changing Ways to Sell Real Estate",
        href: "/imaging/articles/virtual-reality-game-changing-ways-to-sell-real-estate.asp",
      },
      {
        label: "5 Most Awaited Photography Trends in 2018",
        href: "/imaging/articles/5-most-awaited-photography-trends.asp",
      },
      {
        label: "Photography Trends to Watch Out for in 2018",
        href: "/imaging/articles/future-photography-trends.asp",
      },
      {
        label: "Wedding Photography Tips and Techniques",
        href: "/imaging/articles/wedding-photography-tips-techniques.asp",
      },
      {
        label: "10 Popular Wedding Photography Trends for 2018",
        href: "/imaging/articles/popular-wedding-photography-trends.asp",
      },
      {
        label: "5 Insane Trends Which Promise to Reshape Photography",
        href: "/imaging/articles/latest-photography-trends.asp",
      },
      {
        label: "Outsourcing Photo Editing Services to India",
        href: "/imaging/articles/outsourcing-photo-editing-services-to-india.asp",
      },
      {
        label: "RAW Image Conversion Benefits",
        href: "/imaging/articles/raw-image-conversion-benefits.asp",
      },
      {
        label: "8 Landscape Photography Tips & Techniques",
        href: "/imaging/articles/landscape-photography-tips-techniques.asp",
      },
      {
        label: "What is Color Calibration?",
        href: "/imaging/articles/color-calibration.asp",
      },
      {
        label: "Need for Photo Editing and Photo Management",
        href: "/imaging/articles/photo-editing-photo-management.asp",
      },
      {
        label: "Image Vectoriztion Services - FAQs",
        href: "/DataManagement/vectorization.asp",
      },
      {
        label: "Photomontage Services",
        href: "/imaging/articles/photomontage-services.asp",
      },
      {
        label: "Outsourcing Digital Photography Services to India",
        href: "/imaging/articles/digital-photography-services.asp",
      },
      {
        label: "Overview of Fisheye and Cylindrical Panoramas",
        href: "/imaging/articles/cylindrical-fisheye-panorama.asp",
      },
      {
        label: "Manual Focus vs Autofocus - A Complete Guide",
        href: "/imaging/articles/manual-focus-vs-autofocus-a-complete-guide.asp",
      },
      {
        label: "Know How to Add Parallax Effect to Your Images",
        href: "/imaging/articles/know-how-to-add-parallax-effect-to-your-images.asp",
      },
      {
        label: "What Are Lens Filters and Why Should You Use Them?",
        href: "/imaging/articles/what-are-lens-filters-and-why-should-you-use-them.asp",
      },
      {
        label: "How to Turn Ideas into Reality with Photo Compositing",
        href: "/imaging/articles/how-to-turn-ideas-into-reality-with-photo-compositing.asp",
      },
      {
        label: "Must Try Mobile Photography Tips",
        href: "/imaging/articles/must-try-mobile-photography-tips.asp",
      },
      {
        label: "Everything You Need to Know About HDR Bracketing",
        href: "/imaging/articles/everything-you-need-to-know-about-hdr-bracketing.asp",
      },
      {
        label: "Key Features of Adobe Photoshop Services",
        href: "/imaging/articles/adobe-photoshop-services.asp",
      },
    ],
  },
  {
    title: "Case Studies",
    description:
      "We provide reliable customized solutions to unique customer problems. Read our customer success stories to know more.",
    mainHref: "/imaging/case-studies/",
    links: [
      {
        label:
          "O2I Offered Exceptional Photography and Videography Services to a Reputed Client",
        href: "/imaging/case-studies/event-photography-for-a-freelance-photographer.asp",
      },
      {
        label:
          "Outsource2india Helped Netherlands-based Photographer with Hair Masking Services",
        href: "/imaging/case-studies/hair-masking-for-netherlands-based-photographer.asp",
      },
      {
        label:
          "Outsource2india Helped Denmark-based Client with Image Clipping Services",
        href: "/imaging/case-studies/image-clipping-services-for-denmark-based-client.asp",
      },
      {
        label:
          "Outsource2india Helped New Zealand Bike Designers with Image Clipping Service",
        href: "/imaging/case-studies/image-clipping-for-new-zealand-bike-designers.asp",
      },
      {
        label:
          "O2I Helped a Bangladeshi Digital Advertising Material Supplier with Real Estate HDR Blending & Portrait Image Editing Services",
        href: "/imaging/case-studies/hdr-blending-image-editing-for-bangladeshi-client.asp",
      },
      {
        label:
          "Outsource2india Helped a South Korean Client with Portrait Restoration Services",
        href: "/imaging/case-studies/portrait-restoration-services-for-south-korean-client.asp",
      },
      {
        label:
          "Outsource2india Helped a Jewelry Expert with Image Clipping and Retouching Services",
        href: "/imaging/case-studies/image-clipping-retouching-for-jewelry-expert.asp",
      },
      {
        label:
          "Outsource2india Helped a Norwegian Photography Client with HDR Blending Service",
        href: "/imaging/case-studies/helped-norwegian-photography-client-with-hdr-blending-service.asp",
      },
      {
        label:
          "Outsource2india Provided Image Clipping to a Wisconsin-based Insurance Firm",
        href: "/imaging/case-studies/image-clipping-for-wisconsin-insurance-firm.asp",
      },
      {
        label:
          "Outsource2india Provided Minneapolis-based Photographer with Photo Masking Services",
        href: "/imaging/case-studies/photo-masking-for-minneapolis-photographer.asp",
      },
      {
        label:
          "Outsource2india Provided e-Commerce Image Clipping Services to an American Client",
        href: "/imaging/case-studies/e-commerce-image-clipping-to-an-american-client.asp",
      },
      {
        label:
          "Outsource2india Provided Panorama Stitching to a Portland-based Client",
        href: "/imaging/case-studies/panorama-stitching-for-portland-based-client.asp",
      },
      {
        label:
          "Outsource2india Provided an Australian Client with Photo Restoration of 10000 Images",
        href: "/imaging/case-studies/portrait-restoration-for-australian-client.asp",
      },
      {
        label:
          "Top Real Estate Company Gets Panorama Stitching Services from Outsource2india",
        href: "/imaging/case-studies/panorama-stitching-for-real-estate-company.asp",
      },
      {
        label:
          "Global Leader in 3D Real Space Visualizing Avails O2I's Image Editing and Video Creation Services",
        href: "/imaging/case-studies/image-editing-video-creation-3d-real-space-visualization-client.asp",
      },
      {
        label:
          "World's #1 Baby and Toddler Swimming Coaching Company Outsources Design Manipulation Services to O2I",
        href: "/imaging/case-studies/design-manipulation.asp",
      },
      {
        label: "Case Study on Real Estate Drone Video Editing",
        href: "/imaging/case-studies/real-estate-drone-video-editing.asp",
      },
      {
        label: "Case Study for Sports and Outdoor Photography",
        href: "/imaging/case-studies/outdoor-photography.asp",
      },
      {
        label: "Image Enhancement Services for a U.K.–based Photo Studio",
        href: "/imaging/case-studies/image-enhancement.asp",
      },
      {
        label: "Image processing case study",
        href: "/catalog/case-studies/case-study-image-processing.asp",
      },
      {
        label: "Automobile Image Clipping Case Study",
        href: "/imaging/case-studies/automobile-image-clipping.asp",
      },
      {
        label: "0.3 KM Long Photo Stitching",
        href: "/imaging/case-studies/wide-image-stitching.asp",
      },
      {
        label:
          "Case Study on HDR Image Editing for a Video Production Services Company",
        href: "/imaging/case-studies/hdr-image-editing-video-production-company.asp",
      },
      {
        label: "360-degree Virtual Tour Creation by Stitching Drone Footage",
        href: "/imaging/case-studies/360-degree-virtual-tour-creation-stitching-drone-footage.asp",
      },
    ],
  },

  // ... add your other sections here (Business Research, Pharma, etc.)

];

// ---------- DropdownMenu Component (Desktop only) ----------
const DropdownMenu: React.FC<MenuSection> = ({ title, mainHref, description, links }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [alignRight, setAlignRight] = useState(false);

  useEffect(() => {
    const handlePosition = () => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        setAlignRight(rect.right > viewportWidth);
      }
    };
    handlePosition();
    window.addEventListener("resize", handlePosition);
    return () => window.removeEventListener("resize", handlePosition);
  }, []);

  return (
    <li className="relative group">
      <button className="px-5 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg text-left break-words">
        {title}
      </button>

      <div
        ref={dropdownRef}
        className={`
          absolute top-full mt-2 z-50 p-4
          opacity-0 scale-95 -translate-y-2
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
          pointer-events-none group-hover:pointer-events-auto
          bg-white rounded-xl border border-gray-200 shadow-lg
          w-[90vw] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px]
          max-h-[500px] overflow-auto
          ${alignRight ? "right-0 origin-top-right" : "left-0 origin-top-left"}
          transition-all duration-300 ease-out
        `}
      >
        {description && <p className="text-sm text-gray-600 mb-2">{description}</p>}
        <div className="grid grid-cols-2 gap-2">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="block px-3 py-2 rounded-md text-gray-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
};

// ---------- Main Menu Component ----------
const PEMainMenu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (idx: number) => {
    setExpandedSections((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-start flex-wrap gap-2">
            {MenuLink.map((section, idx) => (
              <DropdownMenu key={idx} {...section} />
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-2 bg-white rounded-xl shadow-lg">
            {MenuLink.map((section, idx) => {
              const isExpanded = expandedSections.includes(idx);
              return (
                <div key={idx} className="border-b last:border-b-0 mb-2">
                  <button
                    onClick={() => toggleSection(idx)}
                    className="w-full flex justify-between items-center px-3 py-2 text-left font-semibold text-gray-800 hover:text-green-600 transition-all duration-300 rounded-lg"
                  >
                    <span>{section.title}</span>
                    <span className="text-gray-500">{isExpanded ? "−" : "+"}</span>
                  </button>

                  {isExpanded && (
                    <div className="mt-1 pl-4">
                      {section.description && (
                        <p className="text-sm text-gray-600 mb-1">{section.description}</p>
                      )}
                      <div className="flex flex-col gap-1">
                        {section.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.href}
                            className="text-sm text-gray-700 hover:text-green-600 hover:underline px-2 py-1 rounded-lg transition-all duration-200"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};



export default PEMainMenu