import React, { useEffect, useRef, useState } from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";


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
    description?: string;              // optional
    descriptionLinkText?: string;      // optional
    descriptionHref?: string;          // optional
    items: DropdownItem[];
}



// ---------- Data ----------
// ---------- Data ----------
const MenuLink: MenuSection[] = [
  {
  title: "Graphic Design",
  description: "We offer specialized creative design. Get more information on our graphic design services and sub-services.",
  mainHref: "/creative-services/design/graphic-design-services.asp",
  links: [
    { label: "Exhibition Design Services", href: "/creative-services/exhibition-design-services.asp" },
    { label: "PowerPoint Design Services", href: "/creative-services/powerpoint-design-services.asp" },
    { label: "Embroidery Digitizing Services", href: "/creative-services/embroidery-digitizing-services.asp" },
    { label: "Signage Design Services", href: "/creative-services/signage-design-services.asp" },
    { label: "Corporate Design Services", href: "/creative-services/corporate-design-services.asp" },
    { label: "e-mail Design Services", href: "/creative-services/e-mail-design-services.asp" },
    { label: "Brand Design Services", href: "/creative-services/brand-design-services.asp" },
    { label: "Menu Design Services", href: "/creative-services/design/menu-design-services.asp" },
    { label: "e-commerce Design Services", href: "/creative-services/e-commerce-design-services.asp" },
    { label: "Web Design Services", href: "/creative-services/web-design-services.asp" },
    { label: "Label Design Services", href: "/creative-services/label-design-services.asp" },
    { label: "Promotional Material Design Services", href: "/creative-services/design/promotional-material-design-services.asp" },
    { label: "Visual Design Services", href: "/creative-services/visual-design-services.asp" },
    { label: "Business Card Design Services", href: "/creative-services/design/business-card-design-services.asp" },
    { label: "Newsletter Design Services", href: "/creative-services/newsletter-design-services.asp" },
    { label: "Annual Report Design Services", href: "/creative-services/design/annual-report-design-services.asp" },
    { label: "Flyer Design Services", href: "/creative-services/design/flyer-design-services.asp" },
    { label: "Packaging Design Services", href: "/creative-services/packaging-design-services.asp" },
    { label: "Packaging Artwork and Product Label Design Services", href: "/creative-services/packaging-artwork-product-label-design-services.asp" },
    { label: "3D Product Packaging Design Services", href: "/creative-services/3d-product-package-design-services.asp" },
    { label: "Cover Design Services", href: "/creative-services/cover-design-services.asp" },
    { label: "Banner Design Services", href: "/creative-services/banner-design.asp" },
    { label: "Brochure Design Services", href: "/creative-services/brochure-design.asp" },
    { label: "Hoarding Design Services", href: "/creative-services/hoarding-design-services.asp" },
    { label: "Interior Branding Design Services", href: "/creative-services/interior-branding-design-services.asp" },
    { label: "Editorial Design Services", href: "/creative-services/design/editorial-design-services.asp" },
    { label: "Poster Design Services", href: "/creative-services/design/poster-design-services.asp" },
    { label: "Catalog Designing Services", href: "/creative-services/catalog-designing-services.asp" },
    { label: "Tote Bag Design Services", href: "/creative-services/tote-bag-design-services.asp" },
    { label: "Tattoo Design Services", href: "/creative-services/tattoo-design-services.asp" },
    { label: "Infographics Design Services", href: "/creative-services/infographics-design-services.asp" },
    { label: "Stationery Design Services", href: "/creative-services/stationery-design-services.asp" },
    { label: "Car Wrap Design Services", href: "/creative-services/design/car-wrap-design-services.asp" },
    { label: "Letterhead Design Services", href: "/creative-services/letterhead-design-services.asp" },
    { label: "Invitation Design Services", href: "/creative-services/design/invitation-design-services.asp" },
    { label: "Calendar Design Services", href: "/creative-services/design/calendar-design-services.asp" },
    { label: "Apparel Design Services", href: "/creative-services/apparel-design-services.asp" },
    { label: "Merchandise Design Services", href: "/creative-services/merchandise-design-services.asp" },
    { label: "Trade Show Booth Design Services", href: "/creative-services/trade-show-booth-design-services.asp" },
    { label: "Thank You Card Design Services", href: "/creative-services/thank-you-card-design-services.asp" },
    { label: "T-Shirt Design Services", href: "/creative-services/t-shirt-design-services.asp" },
    { label: "Word Template Design Services", href: "/creative-services/word-template-design-services.asp" },
    { label: "Sticker Design Services", href: "/creative-services/sticker-design-services.asp" },
    { label: "White Paper Design Services", href: "/creative-services/design/white-paper-design-services.asp" },
    { label: "Campaign Design Services", href: "/creative-services/campaign-design-services.asp" },
    { label: "Design Thinking Services", href: "/creative-services/design-thinking-services.asp" },
    { label: "Web Page Layout Design Services", href: "/creative-services/web-page-layout-design-services.asp" },
    { label: "Real Estate Brochure Design Services", href: "/creative-services/real-estate-brochure-design-services.asp" },
    { label: "Marketing and Promotional Design Services", href: "/creative-services/marketing-and-promotional-design-services.asp" },
    { label: "Presentation Design Services", href: "/creative/graphic-design/presentation-design-services.asp" }
  ]
},
{
  title: "Illustration",
  description:
    "We offer specialized creative design. Get more information on our illustration services and sub-services.",
  mainHref: "/services/illustrator-services.asp",
  links: [
    { label: "Veterinary Illustration Services", href: "/creative-services/veterinary-illustration-services.asp" },
    { label: "Product Illustration Services", href: "/creative-services/product-illustration-services.asp" },
    { label: "Children's Book Illustration Services", href: "/creative-services/children-book-illustration.asp" },
    { label: "Book Illustration Services", href: "/creative-services/book-illustration-services.asp" },
    { label: "Scientific Illustrations Services", href: "/creative-services/scientific-illustration-services.asp" },
    { label: "Fashion Illustration Services", href: "/creative-services/fashion-illustration-services.asp" },
    { label: "Sports Illustration Services", href: "/creative-services/sports-illustration-services.asp" },
    { label: "Architectural Illustration Services", href: "/creative-services/architectural-illustration-services.asp" },
    { label: "Comic Illustration Services", href: "/creative-services/comic-illustration-services.asp" },
    { label: "Brand Illustration Services", href: "/creative-services/brand-illustration-services.asp" },
    { label: "Storyboard Illustration Services", href: "/creative-services/storyboard-illustration-services.asp" },
    { label: "Vector Illustration Services", href: "/creative-services/vector-illustration-services.asp" },
    { label: "Pop Art Illustration Services", href: "/creative-services/pop-art-illustration-services.asp" },
    { label: "Surgical Illustration Services", href: "/creative-services/surgical-illustration-services.asp" },
    { label: "Dental Illustration Services", href: "/creative-services/dental-illustration-services.asp" },
    { label: "Ophthalmology Illustration Services", href: "/creative-services/ophthalmology-illustration-services.asp" },
    { label: "Image Illustration Services", href: "/creative-services/image-illustration-services.asp" },
    { label: "Mascot Design Services", href: "/creative-services/mascot-design-services.asp" },
    { label: "Educational Illustration Services", href: "/creative-services/educational-illustration-services.asp" },
    { label: "Character Illustration Services", href: "/creative-services/character-illustration-services.asp" },
    { label: "2D Infographics Video Production Services", href: "/creative-services/2d-infographics-video-production-services.asp" },
    { label: "Insurance Illustration Services", href: "/creative-services/insurance-illustration-services.asp" },
    { label: "2D Infographics Services", href: "/creative-services/2d-infographic-services.asp" },
    { label: "Comic Book Illustration Services", href: "/creative-services/comic-book-illustration-services.asp" },
    { label: "Pet Illustration Services", href: "/creative-services/pet-illustration-services.asp" },
  ],
},
{
  title: "Logo Design",
  description:
    "We offer specialized creative design. Get more information on our logo design services and sub-services.",
  mainHref: "/creative-services/design/logo-design-services.asp",
  links: [
    { label: "3D Logo Design Services", href: "/creative-services/3d-logo-design.asp" },
    { label: "Animated Logo Design Services", href: "/creative-services/animated-logo-design.asp" },
    { label: "2D Logo Design Services", href: "/creative-services/2d-logo-design-services.asp" },
    { label: "Vector Artwork Services", href: "/creative-services/vector-artwork-services.asp" },
    { label: "Logo Cleanup Services", href: "/creative-services/logo-cleanup-services.asp" },
  ],
},
{
  title: "Artwork",
  description:
    "We offer specialized creative design. Get more information on our artwork services and sub-services.",
  mainHref: "/creative-services/design/artwork.asp",
  links: [
    { label: "Layout and Formatting Design", href: "/creative-services/layout-formatting-design-services.asp" },
    { label: "Magazine Layout", href: "/services/magazine-typesetting.asp" },
    { label: "Desktop Publishing Services", href: "/services/DTP.asp" },
    { label: "Book Layout Design Services", href: "/creative-services/book-layout-design.asp" },
    { label: "Image Optimization and Vectorization Services", href: "/creative-services/image-optimization-vectorization-services.asp" },
    { label: "Image to Vector Conversion Services", href: "/creative-services/image-to-vector-conversion-services.asp" },
    { label: "Magazine Digitization Services", href: "/creative-services/magazine-digitization-services.asp" },
    { label: "2D Art Services", href: "/creative-services/2d-art-services.asp" },
  ],
},
{
  title: "Prepress",
  description:
    "We offer specialized creative design. Get more information on our prepress services and sub-services.",
  mainHref: "/creative-services/prepress-services.asp",
  links: [
    { label: "Typesetting Services", href: "/creative-services/typesetting-services.asp" },
  ],
},
{
  title: "Audio Editing",
  description:
    "We offer specialized creative design. Get more information on our audio editing services and sub-services.",
  mainHref: "/transcription/audio-editing-services.asp",
  links: [
    { label: "Podcast Editing Services", href: "/creative-services/podcast-editing-services.asp" },
    { label: "Audio Conversion Services", href: "/creative-services/audio-conversion-services.asp" },
    { label: "Ad Jingle Creation Services", href: "/creative-services/ad-jingle-creation-services.asp" },
    { label: "Corporate Audio Editing Services", href: "/creative-services/corporate-audio-editing-services.asp" },
    { label: "Radio Program Editing Services", href: "/creative-services/radio-program-editing-services.asp" },
    { label: "Music Editing and Mixing Services", href: "/creative-services/music-editing-and-mixing-services.asp" },
  ],
},
{
  title: "Video Editing",
  description:
    "We offer specialized creative design. Get more information on our video editing services and sub-services.",
  mainHref: "/creative-services/film/video-editing-services.asp",
  links: [
    { label: "YouTube Monitoring Services", href: "/creative-services/film/youtube-monitoring-services.asp" },
    { label: "360 Degree Wedding Videos", href: "/creative-services/film/360-degree-wedding-video-editing-services.asp" },
    { label: "Film Services", href: "/creative-services/film/" },
    { label: "Corporate Video Editing", href: "/creative-services/film/corporate-video-editing.asp" },
    { label: "Real Estate Video Editing", href: "/creative-services/film/real-estate-video-editing-services.asp" },
    { label: "Holiday Video Editing Services", href: "/creative-services/holiday-video-editing-services.asp" },
    { label: "360 Video Editing Services", href: "/creative-services/film/360-degree-video-editing.asp" },
    { label: "Real Estate Drone Video Editing", href: "/creative-services/film/real-estate-drone-video-editing-services.asp" },
    { label: "Edius Video Editing", href: "/creative-services/film/edius-video-editing.asp" },
    { label: "Motion Graphics Services", href: "/creative-services/motion-graphic-services.asp" },
    { label: "MP4 Video Editing", href: "/creative-services/film/mp4-video-editing.asp" },
    { label: "Video Compositing", href: "/creative-services/film/video-compositing-services.asp" },
    { label: "Explainer Video Creation Services", href: "/creative-services/film/explainer-video-creation-services.asp" },
    { label: "Movie Editing Services", href: "/creative-services/film/movie-editing-services.asp" },
    { label: "YouTube Video Editing", href: "/creative-services/film/youtube-video-editing.asp" },
    { label: "Wedding Video Editing Services", href: "/creative-services/wedding-video-editing-services.asp" },
    { label: "GoPro Video Editing Services", href: "/creative-services/film/gopro-video-editing.asp" },
    { label: "Video Brochure Services", href: "/creative-services/video-brochure.asp" },
    { label: "Video Summary Services", href: "/creative-services/film/video-summary-services.asp" },
    { label: "Online Video Editing", href: "/creative-services/film/online-video-editing-services.asp" },
    { label: "Home Video Editing", href: "/creative-services/film/home-video-editing-services.asp" },
    { label: "Sports Video Editing", href: "/creative-services/film/sports-video-editing-services.asp" },
    { label: "Video Cropping Services", href: "/creative-services/video-cropping-services.asp" },
    { label: "Video Trimming Services", href: "/creative-services/video-trimming-services.asp" },
    { label: "Film Re-editing Services", href: "/creative-services/film-re-editing-services.asp" },
    { label: "Video Tagging Services", href: "/creative-services/film/video-tagging-services.asp" },
    { label: "Video Stabilizing Services", href: "/creative-services/film/video-stabilizing-services.asp" },
    { label: "Testimonial Video Editing Services", href: "/creative-services/film/testimonial-video-editing-services.asp" },
    { label: "Virtual Reality Post-production Services", href: "/creative-services/film/virtual-reality-post-production-services.asp" },
    { label: "Product Video Editing Services", href: "/creative-services/film/product-video-editing-services.asp" },
    { label: "Drone Video Editing Services", href: "/creative-services/film/drone-video-editing-services.asp" },
    { label: "Video Clipping Services", href: "/creative-services/film/video-clipping-services.asp" },
    { label: "Medical Video Editing Services", href: "/creative-services/medical-video-editing-services.asp" },
    { label: "Interview Video Editing Services", href: "/creative-services/interview-video-editing-services.asp" },
    { label: "Vlog Video Editing Services", href: "/creative-services/film/vlog-video-editing-services.asp" },
    { label: "Picture to Video Editing Services", href: "/creative-services/film/picture-to-video-editing-services.asp" },
    { label: "3D Explainer Video Production Services", href: "/creative-services/3d-explainer-video-production-services.asp" },
    { label: "Sales Pitch Video Editing Services", href: "/creative-services/sales-pitch-video-editing-services.asp" },
    { label: "Medical Video Production Services", href: "/creative-services/film/medical-video-production-services.asp" },
  ],
},
{
  title: "Writing Services",
  description:
    "We offer specialized creative design. Get more information on our writing services and sub-services.",
  mainHref: "/creative-services/writing/",
  links: [
    { label: "Content Editing and Proofreading Services", href: "/creative-services/writing/textediting-proofreading-services.asp" },
    { label: "Editorial Proofreading Services", href: "/creative-services/writing/proofreading.asp" },
    { label: "Content Editing Services", href: "/creative-services/writing/content-editing.asp" },
    { label: "Rewriting Services", href: "/creative-services/writing/content-rewriting.asp" },
    { label: "Content Development Services", href: "/creative-services/writing/content-development-services.asp" },
    { label: "SEO Content Writing Services", href: "/creative-services/writing/SEO-content-writing.asp" },
    { label: "Summary and Review Writing Services", href: "/creative-services/writing/review-summary-writing.asp" },
    { label: "Article Writing Services", href: "/creative-services/writing/article-writing.asp" },
    { label: "Product/Service Description Writing Services", href: "/creative-services/writing/description-writing.asp" },
    { label: "Blog Writing Services", href: "/creative-services/writing/blog-writing.asp" },
    { label: "Business Writing Services", href: "/creative-services/writing/business-writing.asp" },
    { label: "Academic Writing Services", href: "/creative-services/writing/academic-writing.asp" },
    { label: "Speech Writing Services", href: "/creative-services/writing/speech-writing.asp" },
    { label: "Medical Writing Services", href: "/creative-services/writing/medical-writing.asp" },
    { label: "Legal Writing Services", href: "/creative-services/writing/legal-writing.asp" },
    { label: "Travel Writing Services", href: "/creative-services/writing/travel-writing.asp" },
    { label: "Technical Writing Services", href: "/content/technical-writing.asp" },
    { label: "Abstract Writing", href: "/kpo/abstract-writing.asp" },
    { label: "Website Copywriting Services", href: "/creative-services/writing/website-copywriting-services.asp" },
    { label: "Scientific Writing Services", href: "/creative-services/writing/scientific-writing-services.asp" },
    { label: "Manuscript Editing Services", href: "/creative-services/writing/manuscript-editing-services.asp" },
  ],
},
{
  title: "Animation",
  description:
    "We offer specialized creative design. Get more information on our animation services and sub-services.",
  mainHref: "/services/animations.asp",
  links: [
    { label: "Stock Animation Services", href: "/creative-services/stock-animation-services.asp" },
    { label: "Feature Film Animation Services", href: "/creative-services/feature-film-animation-services.asp" },
    { label: "Visual Effects Services", href: "/creative-services/visual-effects-services.asp" },
    { label: "Rotoscoping Services", href: "/creative-services/rotoscoping-services.asp" },
    { label: "2D Animation Services", href: "/creative-services/2D-animation-services.asp" },
    { label: "Animatics Services", href: "/creative-services/animatics-services.asp" },
    { label: "3D Animation Services", href: "/creative-services/3D-animation-services.asp" },
    { label: "Flash Animation Services", href: "/creative-services/flash-animation-services.asp" },
    { label: "3D Animation Rendering Services", href: "/creative-services/3d-animation-rendering-services.asp" },
    { label: "Whiteboard Animation Services", href: "/creative-services/whiteboard-animation-services.asp" },
    { label: "TV Commercial Animation Services", href: "/creative-services/tv-commercial-animation-services.asp" },
    { label: "Character Animation Services", href: "/creative-services/character-animation-services.asp" },
    { label: "Stop Motion Animation Services", href: "/creative-services/stop-motion-animation-services.asp" },
    { label: "Product Animation Services", href: "/creative-services/product-animation-services.asp" },
    { label: "Explainer Video Animation Services", href: "/creative-services/explainer-video-animation-services.asp" },
    { label: "Titling Animation Services", href: "/creative-services/titling-animation-services.asp" },
    { label: "Architectural Animation Services", href: "/creative-services/architectural-animation-services.asp" },
    { label: "Animated Feature Films Services", href: "/creative-services/animated-feature-films-services.asp" },
    { label: "Cutout Animation Services", href: "/creative-services/cutout-animation-services.asp" },
    { label: "Forensic Animation Services", href: "/creative-services/forensic-animation-services.asp" },
    { label: "Engineering Animation Services", href: "/creative-services/engineering-animation-services.asp" },
    { label: "Music Video Animation Services", href: "/creative-services/music-video-animation-services.asp" },
    { label: "Kinetic Typography Services", href: "/creative-services/kinetic-typography-services.asp" },
    { label: "Cartoon Animation Services", href: "/creative-services/cartoon-animation-services.asp" },
    { label: "RotoPaint Art Services", href: "/creative-services/rotopaint-art-services.asp" },
    { label: "VFX Wire Removal Services", href: "/creative-services/vfx-wire-removal-services.asp" },
  ],
},

{
  title: "Advertising",
  // description: "We offer specialized creative design. Get more information on our advertising services.",
  mainHref: "/creative-services/digital-advertising.asp",
  links: [],
},
{
  title: "Storyboard Creation",
  description:
    "We offer specialized creative design. Get more information on our storyboard creation services and sub-services.",
  mainHref: "/creative-services/film/storyboard-services.asp",
  links: [
    { label: "Character Creation Services", href: "/creative-services/character-creation-services.asp" },
    { label: "Character Design Services", href: "/creative-services/character-designing-services.asp" },
    { label: "Storyboard Animatic Services", href: "/creative-services/storyboard-animatic-services.asp" },
    { label: "Cartoon Storyboard Services", href: "/creative-services/cartoon-storyboard-services.asp" },
    { label: "Video Game Storyboard Services", href: "/creative-services/video-game-storyboard-services.asp" },
    { label: "Photomatic Storyboard Services", href: "/creative-services/photomatic-storyboard-services.asp" },
    { label: "Illustration Storyboard Services", href: "/creative-services/illustration-storyboard-services.asp" },
    { label: "eLearning Storyboard Services", href: "/creative-services/elearning-storyboard-services.asp" },
  ],
},
{
  title: "3D Modelling",
  description:
    "We offer specialized creative design. Get more information on our 3D modelling services and sub-services.",
  mainHref: "/creative-services/3d-modeling-services.asp",
  links: [
    { label: "3D Sculpting Services", href: "/creative-services/3d-sculpting-services.asp" },
    { label: "3D Game Modeling Services", href: "/creative-services/3d-game-modeling-services.asp" },
    { label: "3D Texturing Services", href: "/creative-services/3d-texturing-services.asp" },
    { label: "3D Environment Design Services", href: "/creative-services/3d-environment-design-services.asp" },
  ],
},
{
  title: "Creative - UK",
  description:
    "We offer specialized creative design. Get more information on our Creative Design services and sub-services.",
  mainHref: "/uk/creative-design-services/",
  links: [
    { label: "Wedding Video Editing Services - UK", href: "/uk/creative/video-editing/wedding-video-editing-services.asp" },
    { label: "Video Editing Services UK", href: "/uk/creative/video-editing/video-editing-services.asp" },
    { label: "Graphic Design Services UK", href: "/uk/creative/graphic-design-services.asp" },
    { label: "Real Estate Video Editing Services", href: "/uk/creative/video-editing/real-estate-video-editing-services.asp" },
  ],
},
{
  title: "Articles",
  description: "Our creative services resources are comprehensive, informative, and well-researched. Check out our creative services articles.",
  mainHref: "/creative-services/articles/",
  links: [
    { label: "How Can Outsourcing Creative Design Services Benefit Your Company?", href: "/creative-services/articles/how-can-outsourcing-creative-design-benefit-your-company.asp" },
    { label: "Make your Animation Realistic with 8 Indigenous Animation Tips", href: "/creative-services/articles/8-tips-to-make-animation-realistic.asp" },
    { label: "Top Graphic Design Trends Shaping the Industry", href: "/creative-services/articles/top-21-graphic-design-trends.asp" },
    { label: "7 Video Editing Tips and Tricks to Make Your Videos Enjoyable", href: "/creative-services/articles/video-editing-tips-and-tricks.asp" },
    { label: "Top 20 Resources That Can Help You Develop Great Graphic Design", href: "/creative-services/articles/top-graphic-design-resources.asp" },
    { label: "8 Tips to Edit Drone Videos Flawlessly", href: "/creative-services/articles/drone-video-editing-tips.asp" },
    { label: "Popular Graphic Designing Predictions for 2018", href: "/creative-services/articles/graphic-design-trends-predictions.asp" },
    { label: "10 Emerging Videography Trends", href: "/creative-services/articles/10-emerging-videography-trends.asp" },
    { label: "10 Quick and Effective Video Editing Tools for Business", href: "/creative-services/articles/quick-effective-video-editing-tools.asp" },
    { label: "6 Steps to an Effective Creative Design", href: "/creative-services/articles/creative-design-steps.asp" },
    { label: "5 Tips for Brochure Printing", href: "/creative-services/articles/brochure-printing-tips.asp" },
    { label: "Prepress Services for Printing & Publishing", href: "/creative-services/articles/prepress-publishing-printing.asp" },
    { label: "Prepress Infrastructure", href: "/creative-services/articles/prepress-infrastructure.asp" },
    { label: "Outsource Business Writing", href: "/content/business-writing.asp" },
    { label: "Outsourcing Writing Services to India", href: "/creative-services/articles/the-potential-and-perils-of-outsourcing-writing-to-india.asp" },
    { label: "Virtual Reality: Changing the Way We Look At Things", href: "/creative-services/articles/changing-face-of-virtual-reality.asp" },
    { label: "India Offers Diverse Writing Services", href: "/creative-services/articles/looking-for-a-writer-in-india-discover-diversity.asp" },
    { label: "What are the 10 Key Elements of a Magazine Layout Design?", href: "/creative-services/articles/10-key-elements-magazine-layout-design.asp" },
    { label: "5 Magazine Design and Layout Tips", href: "/creative-services/articles/magazine-design-layout-tips.asp" },
    { label: "Selecting Correct Digital Artwork Format", href: "/creative-services/articles/correct-format-digital-artwork.asp" },
    { label: "FAQs on Adobe Graphics", href: "/creative-services/articles/faqs-on-adobe-creative-suite.asp" },
    { label: "Storyboard Tips for Short Films", href: "/creative-services/articles/storyboarding-tips-for-short-films.asp" },
    { label: "Video Editing Software Proficiency", href: "/creative-services/articles/video-editing-software-proficiency.asp" },
    { label: "Artwork Personalization and Localization Through AI in Design", href: "/creative-services/articles/artwork-personalization-localization-through-ai-in-design.asp" }
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
const DSmainmenu: React.FC = () => {
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
              {MenuLink.map((section, idx) => {
    if (idx === 9) {
      // Direct link for index 9
      return (
        <li key={idx}>
          <a
            href={section.mainHref}
            className="px-5 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg text-left break-words"
          >
            {section.title}
          </a>
        </li>
      );
    }
    return <DropdownMenu key={idx} {...section} />;
  })}
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

  // If index 2, render a direct link
  if (idx === 9) {
    return (
      <a
        key={idx}
        href={section.mainHref}
        className="w-full block px-3 py-2 text-left font-semibold text-gray-800 hover:text-green-600 transition-all duration-300 rounded-lg border-b last:border-b-0 mb-2"
      >
        {section.title}
      </a>
    );
  }

  // Other sections with accordion
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

export default DSmainmenu


