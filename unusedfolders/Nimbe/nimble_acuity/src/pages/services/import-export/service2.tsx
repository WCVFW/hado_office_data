import React, { useState } from "react";

interface ProductCategory {
  id: number;
  title: string;
  subtopics: { id: number; title: string; description: string }[];
}

const productCategories: ProductCategory[] = [
  {
    id: 1,
    title: "1) Handmade, Craft & Artisanal",
    subtopics: [
      { id: 1, title: "Hand-loomed scarves/stoles, shawls", description: "Exquisite handwoven scarves and stoles, crafted by skilled artisans using traditional techniques. Features natural fibers, subtle slubs, and breathable weaves; ideal for boutique gifting and premium retail." },
      { id: 2, title: "Hand-block printed textiles (Ajrakh, Bagru, Dabu)", description: "Textiles hand-printed using heritage wooden blocks and natural or AZO-free dyes. Rich motifs and small batch variations add authenticity; perfect for apparel, home, and craft projects." },
      { id: 3, title: "Hand-embroidered home linens (kantha, chikankari)", description: "Soft linens adorned with detailed regional embroidery. Each piece carries slight variations that signal true handwork; great for elevated home settings and gifting." },
      { id: 4, title: "Brass/metal handicrafts & décor accents", description: "Decorative brass and metal pieces crafted by artisans, suitable for home décor and gifting. Anti-tarnish lacquer and felt bottoms available; handmade patina gives a timeless look." },
      { id: 5, title: "Terracotta/ceramic décor & planters", description: "Natural terracotta and ceramic décor items, ideal for indoor and outdoor settings. Breathable clay promotes healthy roots; optional food-safe glazes for serve pieces." },
      { id: 6, title: "Woodcraft (carved décor, bowls—ensure Lacey compliance)", description: "Intricately carved wood décor and bowls with ethical sourcing compliance. Kiln-dried hardwoods reduce warping; food-contact finishes and Lacey Act paperwork on request." },
    ],
  },
  {
    id: 2,
    title: "2) Bamboo & Eco-Friendly",
    subtopics: [
      { id: 1, title: "Bamboo homewares (trays, cutlery, organizers)", description: "Eco-friendly bamboo trays, cutlery, and storage solutions. Lightweight yet durable, sealed with food-safe coatings; great for zero-waste retail sets." },
      { id: 2, title: "Bamboo furniture & stools (knock-down)", description: "Lightweight, durable bamboo furniture for residential and commercial use. KD construction lowers freight; includes assembly hardware and care instructions." },
      { id: 3, title: "Bamboo straws & toothbrushes (retail packs)", description: "Sustainable alternatives to plastics, made from natural bamboo. Individually wrapped or set-packed with branding options; compostable and travel-friendly." },
      { id: 4, title: "Areca palm plates & compostables", description: "Compostable plates made from areca palm leaves, perfect for eco-conscious dining. Microwave-safe and backyard-compostable; elegant grain patterns on each piece." },
      { id: 5, title: "Jute/cotton reusable shopping bags", description: "Durable, eco-friendly bags for everyday use, promoting sustainability. Reinforced handles, print-ready panels, and custom sizes for retail programs." },
      { id: 6, title: "Coir doormats & garden products", description: "Natural coir mats and garden items, environmentally friendly and durable. Fade-resistant stencils and slip-resistant backing for high-traffic entryways." },
      { id: 7, title: "Cork accessories & trivets", description: "Versatile cork-based products for kitchen and home décor. Heat-resistant, lightweight, and naturally anti-slip; laser-etch branding available." },
      { id: 8, title: "Bio-based gift packaging & hampers", description: "Sustainable packaging options for gifting, made from bio-based materials. Includes shred, ribbons, and tags; customizable inserts for curated sets." },
      { id: 9, title: "Recycled paper products", description: "Eco-conscious stationery and décor items made from recycled paper. Deckle-edge finishes and soy inks elevate the craft look." },
      { id: 10, title: "Upcycled fabric accessories", description: "Stylish products created from repurposed fabrics, promoting circular fashion. Patchwork, kantha, and deadstock stories support impact sourcing." },
    ],
  },
  {
    id: 3,
    title: "3) Textiles, Apparel & Accessories",
    subtopics: [
      { id: 1, title: "Organic cotton tees & basics (GOTS preferred)", description: "Sustainable and certified organic cotton apparel. Soft-hand finishes, low-shrinkage knits, and traceable supply chains; private-label ready." },
      { id: 2, title: "Rayon/viscose fashion", description: "Fashionable apparel with labels indicating fiber origin as required by FTC. Drapey silhouettes and vibrant prints; care labels for longevity." },
      { id: 3, title: "Yoga/athleisure wear", description: "Comfortable and durable activewear for yoga and fitness. Four-way stretch, moisture-wicking fabrics, and flat seams for all-day movement." },
      { id: 4, title: "Ethnic-inspired resort wear (kaftans, tunics)", description: "Lightweight ethnic clothing suitable for resort wear. Airy weaves and artisanal prints; perfect for beach, spa, and resort boutiques." },
      { id: 5, title: "Scarves, stoles, bandanas", description: "Stylish fabric accessories for everyday fashion. From modal to cotton voile; reactive prints and hand-rolled edges available." },
      { id: 6, title: "Denim & chinos (men/women)", description: "Classic denim and chino pants for casual and workwear. Stretch blends, enzyme washes, and consistent fits across size runs." },
      { id: 7, title: "Socks (cotton/bamboo blends)", description: "Comfortable socks made from cotton and bamboo blends. Reinforced heel/toe and arch support; retail-ready peg hooks." },
      { id: 8, title: "Winter shawls & wraps", description: "Warm and stylish winter accessories for all genders. Wool, pashmina blends, and acrylic options; low-pilling finishes." },
      { id: 9, title: "Children’s apparel", description: "Compliant kidswear following CPSIA & flammability rules. Soft seams and nickel-free trims; age-appropriate sizing and wash durability." },
      { id: 10, title: "Workwear/scrubs (healthcare)", description: "Professional healthcare uniforms and scrubs. Anti-microbial finishes, multiple pockets, and easy-care fabrics suitable for long shifts." },
      { id: 11, title: "Fashion bags (canvas/jute/leather)", description: "Trendy and functional bags crafted from sustainable materials. Structured shapes, secure zippers, and interior organizers for daily carry." },
      { id: 12, title: "Belts, wallets, small leather goods", description: "High-quality small leather accessories. Edge-painted straps, RFID-blocking options, and custom embossing for branding." },
      { id: 13, title: "Caps/hats, beanies", description: "Headwear for fashion and seasonal protection. Adjustable closures, breathable panels, and retail-tagging as standard." },
      { id: 14, title: "Sleepwear & loungewear", description: "Comfortable apparel for relaxation and home wear. Soft knits and loose fits; packaged sets ready for gifting." },
      { id: 15, title: "Sarees/dupattas for ethnic boutiques", description: "Traditional Indian attire for boutique retail. Handloom and printed options with coordinated blouses and trims." },
    ],
  },
  {
    id: 4,
    title: "4) Home Furnishings & Décor",
    subtopics: [
      { id: 1, title: "Bedsheets, duvet covers, pillowcases", description: "Soft and high-quality bed linens for comfort and style. Thread counts from 200–600, OEKO-TEX dyes, and durable seams for long life." },
      { id: 2, title: "Quilts/comforters (hand-quilted, AC quilts)", description: "Warm quilts and comforters made with traditional and modern techniques. Lightweight AC options and reversible prints for seasonal refreshes." },
      { id: 3, title: "Dohars & throws", description: "Lightweight blankets and decorative throws for living spaces. Cotton mul layers with contrast piping; easy to layer and machine-washable." },
      { id: 4, title: "Cushion covers, table linens, runners", description: "Decorative textile products for home aesthetics. Invisible zippers, mitered corners, and coordinated collections for retail stories." },
      { id: 5, title: "Area rugs (cotton/jute/wool; rug flammability rules)", description: "Durable area rugs adhering to safety standards. Latex or felt backing; low-shed options and compliance-ready labeling." },
      { id: 6, title: "Curtains & sheers", description: "Window treatments for style and privacy. Rod-pocket, eyelet, and blackout options; consistent drop lengths for easy merchandising." },
      { id: 7, title: "Upholstery fabrics & trims", description: "Fabrics and trims for furniture upholstery. Rub-tested durability, coordinated braids and tassels, and colorfast finishes." },
      { id: 8, title: "Wall art (textile/metal/wood)", description: "Handcrafted wall décor from various materials. Ready-to-hang hardware and secure packaging reduce damages in transit." },
      { id: 9, title: "Decorative lighting", description: "Accent lighting for homes (UL tested if powered). Includes shades, pendants, and table lamps with safe, stable bases." },
      { id: 10, title: "Festive/seasonal décor", description: "Seasonal décor items for festivals and events. Reusable garlands, ornaments, and table accents—packed for safe year-on-year storage." },
    ],
  },
  {
    id: 5,
    title: "5) Kitchen & Tableware",
    subtopics: [
      { id: 1, title: "Stainless steel serveware & lunch boxes", description: "Durable stainless steel products for serving and storage. BPA-free lids and compartment options; long-lasting polish resists stains." },
      { id: 2, title: "Copper/brass drinkware (lined; care labels)", description: "Safe, lined metal drinkware with proper labeling. Includes cleaning guidance to preserve finish; gift-boxed sets available." },
      { id: 3, title: "Cast iron & carbon-steel pans", description: "Heavy-duty cookware for everyday and professional use. Pre-seasoned options, excellent heat retention, and oven-safe handles." },
      { id: 4, title: "Wooden boards & utensils", description: "Food-safe wood utensils and boards compliant with Lacey Act. Mineral-oil finishes and juice grooves; hanging holes for storage." },
      { id: 5, title: "Natural stoneware (mugs, bowls, plates)", description: "Eco-friendly ceramic stoneware products. High-fired for durability; dishwasher- and microwave-safe unless otherwise noted." },
      { id: 6, title: "Spice boxes/masala dabbas", description: "Organized containers for spices and seasonings. Airtight lids and modular inserts keep blends fresh and accessible." },
      { id: 7, title: "Cotton kitchen towels & aprons", description: "Durable textiles for kitchen use. High-absorbency weaves, reinforced ties, and loop tags for easy hanging." },
      { id: 8, title: "Reusable food wraps & bags", description: "Eco-conscious alternatives for food storage. Beeswax wraps and silicone-grade bags reduce single-use plastics in the kitchen." },
    ],
  },
  {
    id: 6,
    title: "6) Natural Beauty & Wellness",
    subtopics: [
      { id: 1, title: "Ayurvedic/herbal soaps", description: "Natural soaps with traditional formulations. Cold-processed bars with essential oils; clear INCI labeling and batch traceability." },
      { id: 2, title: "Natural hair oils & serums", description: "Hair care products made from botanical ingredients. Lightweight blends for scalp nourishment; cruelty-free and paraben-free options." },
      { id: 3, title: "Skin care (ubtan, scrubs, masks)", description: "Traditional and modern skin care products. Small-batch actives and gentle exfoliants; claims aligned to cosmetic regulations." },
      { id: 4, title: "Essential oils & blends", description: "Therapeutic and aromatic essential oils. GC/MS-tested purity, amber glass bottles, and dropper caps for safe use." },
      { id: 5, title: "Incense & smudge kits (non-drug claims)", description: "Natural incense sticks and smudging kits for wellness. Charcoal-free options and sustainable botanicals; mindful, compliant labeling." },
      { id: 6, title: "Massage tools (kansa/bamboo)", description: "Traditional wellness tools for massage therapy. Ergonomic shapes, smooth finishes, and easy-clean kits for spas and home use." },
    ],
  },
  {
    id: 7,
    title: "7) Packaged Foods, Spices & Beverages",
    subtopics: [
      { id: 1, title: "Whole & ground spices", description: "Spices like turmeric, cumin, garam masala for culinary use. Steam-sterilized, aroma-locked pouches with batch-level traceability." },
      { id: 2, title: "Ready-to-eat curries/snacks", description: "Convenient packaged meals in retort pouches. Shelf-stable formats with clean labels; quick-serve for retail and travel." },
      { id: 3, title: "Pickles & chutneys", description: "Acidified and processed condiments. Balanced regional recipes with tamper-evident seals and allergen declarations." },
      { id: 4, title: "Tea & masala chai blends", description: "Assorted teas including Assam, Darjeeling, and blends. Pyramid bags or loose-leaf; aroma-sealed tins for gifting." },
      { id: 5, title: "Filter coffee & chicory blends", description: "Traditional Indian coffee blends. Fresh-roasted lots with grind options; nitrogen-flush packs extend freshness." },
      { id: 6, title: "Millet & ready mixes (idli/dosa)", description: "Convenient grain mixes for traditional dishes. Quick-cook recipes with clear nutrition panels and serving suggestions." },
      { id: 7, title: "Specialty rice (basmati), flours", description: "Premium rice varieties and flours like atta, besan. Aged basmati for aroma; multi-weight retail packs for versatility." },
      { id: 8, title: "Jaggery, palm sugar, dates products", description: "Natural sweeteners for culinary and health purposes. Minimal processing preserves minerals; block and powder formats." },
      { id: 9, title: "Healthy snacks (makhana, millet crackers)", description: "Nutritious snacks for modern consumers. Baked, low-oil recipes with clean ingredients and portion-control packs." },
      { id: 10, title: "Herbal infusions", description: "Herbal teas and infusions for wellness. Caffeine-free options with botanical blends; recyclable sachets and cartons." },
    ],
  },
  {
    id: 8,
    title: "8) Jewelry & Fashion Accessories",
    subtopics: [
      { id: 1, title: "925 silver jewelry (hallmarked)", description: "Authentic silver jewelry with hallmark certification. Anti-tarnish plating and secure closures; boxed for premium presentation." },
      { id: 2, title: "Gold-plated/brass fashion jewelry", description: "Nickel-safe fashion jewelry. Durable micron plating and hypoallergenic findings; trend-forward silhouettes for fast fashion." },
      { id: 3, title: "Beaded/stone jewelry (Jaipur crafts)", description: "Handcrafted gemstone jewelry from Jaipur artisans. Faceted and cabochon cuts; strong threading and quality clasps." },
      { id: 4, title: "Bangles, anklets, toe rings", description: "Traditional Indian ornaments for fashion. Adjustable sizes and polished finishes; great for festive collections." },
      { id: 5, title: "Hair accessories & clips", description: "Stylish hair adornments and accessories. Satin scrunchies, claw clips, and pins with strong spring mechanisms." },
      { id: 6, title: "Fashion watches (OEM; compliance)", description: "Timepieces designed with regulatory compliance. Reliable movements, nickel-safe backs, and QC-tested straps." },
      { id: 7, title: "Handcrafted clutches & potlis", description: "Unique artisan-made handbags and pouches. Embellished, embroidered, or beaded surfaces with secure closures." },
      { id: 8, title: "Sunglasses cases & organizers", description: "Functional and decorative eyewear cases. Rigid shells and microfiber linings; retail-ready with barcode labels." },
    ],
  },
  {
    id: 9,
    title: "9) Leather, Footwear & Travel",
    subtopics: [
      { id: 1, title: "Leather backpacks, totes, sleeves", description: "Durable and stylish leather bags. Full-grain and top-grain options with padded compartments and YKK hardware." },
      { id: 2, title: "Non-leather (PU/canvas) bags", description: "Vegan-friendly bags made of PU or canvas. Water-resistant coatings, structured panels, and easy-clean interiors." },
      { id: 3, title: "Small leather goods (wallets, key holders)", description: "Compact leather accessories for everyday use. Slim profiles with multiple card slots; gift-box packaging available." },
      { id: 4, title: "Casual footwear, sandals, juttis", description: "Comfortable and trendy footwear. Cushioned insoles, anti-slip soles, and artisan uppers for style and comfort." },
      { id: 5, title: "Travel accessories (pouches, organizers)", description: "Functional accessories for travelers. Cable wraps, toiletry kits, and packing cubes to streamline packing." },
      { id: 6, title: "Laptop bags & messenger bags", description: "Stylish bags suitable for laptops and daily commute. Shock-absorbent padding, trolley sleeves, and quick-access pockets." },
    ],
  },
  {
    id: 10,
    title: "10) Paper, Stationery & Gifts",
    subtopics: [
      { id: 1, title: "Handmade paper journals & albums", description: "Artisanal notebooks and albums made from recycled paper. Thread-stitched spines and elastic closures; great for boutique gifting." },
      { id: 2, title: "Gift wrap, ribbons, tags", description: "Decorative gift packaging essentials. Coordinated palettes, foil-stamped options, and flat-packed rolls for easy retailing." },
      { id: 3, title: "Notebooks, planners, calendars", description: "Functional and aesthetically pleasing stationery. Dated/undated formats, premium papers, and lay-flat binding for productivity." },
      { id: 4, title: "Educational kits & flashcards", description: "Learning kits and flashcards for children. Age-appropriate content with sturdy, wipe-clean cards and clear instructions." },
      { id: 5, title: "Office stationery sets", description: "Complete sets for office use. Includes sticky notes, clips, pens, and organizers—coordinated for desk appeal." },
      { id: 6, title: "Greeting cards & craft kits", description: "Handmade and craft-based gifting solutions. Blank interiors, matching envelopes, and DIY embellishment packs." },
    ],
  },
  {
    id: 11,
    title: "11) Sports, Yoga & Wellness Gear",
    subtopics: [
      { id: 1, title: "Yoga mats (jute/cork/rubber) & straps", description: "Eco-friendly yoga mats for fitness and wellness. Non-slip textures and carry straps; available in studio and travel thicknesses." },
      { id: 2, title: "Resistance bands & simple fitness gear", description: "Portable and effective workout accessories. Multiple resistance levels with door anchors; comes with quick-start guides." },
      { id: 3, title: "Meditation cushions & bolsters", description: "Comfortable support for meditation practices. Buckwheat or microfiber fill with removable, washable covers." },
      { id: 4, title: "Copper water bottles", description: "Traditional and health-friendly drinking bottles. Leak-proof lids and hammered finishes; care cards included." },
      { id: 5, title: "Sports towels, gym bags", description: "Essential accessories for gym and sports activities. Quick-dry microfiber towels and ventilated compartments for shoes." },
      { id: 6, title: "Basic outdoor/camping accessories", description: "Portable gear for outdoor recreation. Foldable mats, compact lanterns, and organizer pouches for weekend trips." },
    ],
  },
  {
    id: 12,
    title: "12) Pet & Garden",
    subtopics: [
      { id: 1, title: "Pet collars, leashes (leather/jute)", description: "Durable and stylish pet accessories. Padded interiors, secure hardware, and adjustable sizing for comfort and safety." },
      { id: 2, title: "Pet beds & mats", description: "Comfortable sleeping options for pets. Removable covers and anti-skid bases; sizes for cats to large breeds." },
      { id: 3, title: "Natural pet treats", description: "Safe and healthy treats for pets. Limited-ingredient recipes, oven-baked for crunch; clear feeding guidelines." },
      { id: 4, title: "Planters (terracotta, metal, bamboo)", description: "Eco-friendly planters for indoor and outdoor gardening. Drainage-ready designs with matching saucers; sizes from desk to patio." },
      { id: 5, title: "Garden tools & accessories", description: "Essential tools for gardening and plant care. Stainless heads with ergonomic grips; hanging loops for easy storage." },
      { id: 6, title: "Coco-peat, coir products", description: "Natural soil and gardening products for sustainability. Lightweight, water-retentive media; compressed bricks expand on hydration." },
    ],
  },
];



const IndiaToUSAAccordion = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeSubtopic, setActiveSubtopic] = useState<{ [key: number]: number | null }>({});

  const toggleCategory = (id: number) => setActiveCategory(activeCategory === id ? null : id);

  const toggleSubtopic = (categoryId: number, subId: number) => {
    setActiveSubtopic((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === subId ? null : subId,
    }));
  };

  return (
    <div className="px-6 py-20 flex flex-col items-center bg-gray-50">
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          India → USA: In-Demand Product Categories
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Explore top Indian products in demand in the USA. Click each category and product for more details.
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-6">
        {productCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
            {/* Category Heading */}
            <div className="p-6 flex justify-between items-center" onClick={() => toggleCategory(category.id)}>
              <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
              <span className={`text-gray-400 text-xl transform transition-transform duration-300 ${activeCategory === category.id ? "rotate-180" : "rotate-0"}`}>▼</span>
            </div>

            {/* Subtopics */}
            <div className={`px-6 pb-6 transition-all duration-300 overflow-hidden ${activeCategory === category.id ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.subtopics.map((sub) => (
                  <div key={sub.id} className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                    {/* Subtopic Heading */}
                    <div className="p-4 flex justify-between items-center" onClick={() => toggleSubtopic(category.id, sub.id)}>
                      <h3 className="font-semibold text-gray-900">{sub.title}</h3>
                      <span className={`text-gray-400 text-lg transform transition-transform duration-300 ${activeSubtopic[category.id] === sub.id ? "rotate-180" : "rotate-0"}`}>▼</span>
                    </div>
                    {/* Subtopic Content */}
                    <div className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${activeSubtopic[category.id] === sub.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="text-gray-600 text-sm">{sub.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndiaToUSAAccordion;
