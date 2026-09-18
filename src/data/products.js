/**
 * YB EVERYDAY / JEDEN Product Catalog
 * Currency: NGN (Nigerian Naira)
 * Curated editorial imagery with macro lighting, reflections, studio minimalism.
 */

export const PRODUCTS = [
  {
    id: "yb-ring-001",
    name: "Radiance Signet Ring",
    slug: "radiance-signet-ring",
    category: "Jewelry",
    subcategory: "Rings",
    price: 95000,
    currency: "NGN",
    description: "Handcrafted from solid sterling silver with an inset 18k yellow gold brushed plate, the Radiance Signet embodies understated architectural luxury. Its flat facet catches light with deliberate precision, creating a soft metallic reflection designed for everyday distinction.",
    details: "The face is subtly engraved with the discreet YB hallmark on the inner band. Weighted for ergonomic presence.",
    material: "18K Gold Plated Sterling Silver / Solid Brass Core",
    dimensions: "Face: 14mm x 11mm | Band Width: 4.5mm tapering to 3mm",
    weight: "11.8 grams",
    collection: "radiance",
    featured: true,
    bestseller: true,
    newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "18K Gold", hex: "#D4AF37" },
      { name: "Sterling Silver", hex: "#C0C0C0" },
      { name: "Obsidian Ruthenium", hex: "#222222" }
    ],
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"]
  },
  {
    id: "yb-chain-002",
    name: "Aeterna Double Helix Chain",
    slug: "aeterna-double-helix-chain",
    category: "Jewelry",
    subcategory: "Chains",
    price: 145000,
    currency: "NGN",
    description: "A reimagining of the classic curb link, precision-cut with asymmetric diamond bevels that refract ambient light as you move. Designed to be worn solo against bare skin or layered with the YB Minimalist Talisman.",
    details: "Custom heavy-gauge interlocking lobster clasp featuring custom micro-engraved YB signature.",
    material: "Solid 925 Sterling Silver with Rhodium Anti-Tarnish Finish",
    dimensions: "Length: 52cm (20.5 in) | Width: 4.8mm",
    weight: "34.2 grams",
    collection: "jeden",
    featured: true,
    bestseller: true,
    newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475817-2936a7ea53b7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Sterling Silver", hex: "#C0C0C0" },
      { name: "18K Gold Vermeil", hex: "#D4AF37" }
    ],
    sizes: ["50cm (20in)", "55cm (22in)", "60cm (24in)"]
  },
  {
    id: "yb-sun-003",
    name: "Atlas Sculpted Square Solaire",
    slug: "atlas-sculpted-square-solaire",
    category: "Optique",
    subcategory: "Solaire",
    price: 125000,
    currency: "NGN",
    description: "Thick-gauge Japanese acetate hand-beveled along the browline to create dramatic architectural shadows. Fitted with scratch-resistant category 3 dark smoke nylon lenses offering 100% UVA/UVB protection.",
    details: "Custom custom-cast titanium wire core visible through transparent inner temples. 7-barrel hinges for effortless structural durability.",
    material: "Japanese Cellulose Acetate & Grade 5 Titanium",
    dimensions: "Lens 52mm | Bridge 21mm | Temple 145mm",
    weight: "42 grams",
    collection: "vision",
    featured: true,
    bestseller: false,
    newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Deep Obsidian", hex: "#0A0A0A" },
      { name: "Havana Tortoise", hex: "#5C3A21" },
      { name: "Smoked Crystal", hex: "#8A8782" }
    ],
    sizes: ["One Size (Standard)"]
  },
  {
    id: "yb-cuff-004",
    name: "Obsidian Onyx Inset Cuff",
    slug: "obsidian-onyx-inset-cuff",
    category: "Jewelry",
    subcategory: "Bracelets",
    price: 110000,
    currency: "NGN",
    description: "A seamless torque bracelet cast in brushed surgical-grade stainless steel, crowned with flush-mounted genuine black onyx cabochons at each terminus. Minimalist geometry balanced with tactile substance.",
    details: "Gentle malleability allows subtle contouring to wrists without structural fatigue.",
    material: "316L Stainless Steel & Natural Brazilian Black Onyx",
    dimensions: "Width: 6mm | Thickness: 3.5mm | Circumference: 175mm",
    weight: "26.5 grams",
    collection: "after-dark",
    featured: true,
    bestseller: true,
    newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1611591475817-2936a7ea53b7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Brushed Steel", hex: "#C0C0C0" },
      { name: "Matte Black PVD", hex: "#1A1A1A" },
      { name: "Brushed Champagne Gold", hex: "#B89B5E" }
    ],
    sizes: ["Small (16-17cm)", "Medium (18-19cm)", "Large (20-21cm)"]
  },
  {
    id: "yb-opt-005",
    name: "Studio Titanium Monture Optique",
    slug: "studio-titanium-monture-optique",
    category: "Optique",
    subcategory: "Montures Optique",
    price: 135000,
    currency: "NGN",
    description: "Featherweight beta-titanium optical frame crafted for discerning everyday wear. Features an understated pantos silhouette with micro-coin edge rim detailing and ceramic hypoallergenic nose pads.",
    details: "Delivered with clear blue-light filtering demo lenses, ready to accommodate your custom prescription lenses.",
    material: "Pure Japanese Beta-Titanium & Medical Grade Ceramic",
    dimensions: "Lens 49mm | Bridge 20mm | Temple 142mm",
    weight: "16.4 grams",
    collection: "vision",
    featured: true,
    bestseller: false,
    newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509695503492-412db9d28edd?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Raw Titanium", hex: "#9E9E9E" },
      { name: "Brushed Gold", hex: "#B89B5E" },
      { name: "Matte Black", hex: "#111111" }
    ],
    sizes: ["One Size (Customizable fit)"]
  },
  {
    id: "yb-earring-006",
    name: "Soleil Asymmetric Drop Earrings",
    slug: "soleil-asymmetric-drop-earrings",
    category: "Jewelry",
    subcategory: "Earrings",
    price: 78000,
    currency: "NGN",
    description: "Pairing a fluid droplet on one ear with a structured linear bar on the other, the Soleil drops play with balance and natural light reflection. Designed to frame the jawline with sculptural ease.",
    details: "Post and friction back in hypoallergenic titanium. Hand-polished to a liquid mirror luster.",
    material: "18K Gold Vermeil over Recycled Sterling Silver",
    dimensions: "Droplet: 22mm x 9mm | Bar: 32mm x 3mm",
    weight: "8.4 grams (pair)",
    collection: "radiance",
    featured: false,
    bestseller: true,
    newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "18K Warm Gold", hex: "#D4AF37" },
      { name: "Polished Silver", hex: "#C0C0C0" }
    ],
    sizes: ["Standard Pair"]
  },
  {
    id: "yb-watch-007",
    name: "Vesper 38mm Minimalist Timepiece",
    slug: "vesper-38mm-minimalist-timepiece",
    category: "Accessories",
    subcategory: "Watches",
    price: 240000,
    currency: "NGN",
    description: "An architectural dress watch defined by an unadorned sunburst dial, slender baton hands, and a sapphire crystal glass caseback revealing an ultra-slim Japanese automatic movement.",
    details: "Water resistant to 5 ATM. Fitted with a quick-release full-grain Italian calfskin strap.",
    material: "316L Stainless Steel Case & Sapphire Crystal Glass",
    dimensions: "Case Diameter: 38mm | Case Thickness: 8.8mm | Lug: 20mm",
    weight: "58 grams",
    collection: "essentials",
    featured: true,
    bestseller: false,
    newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Obsidian Black / Gold", hex: "#0A0A0A" },
      { name: "Warm Ivory / Silver", hex: "#F5F2EA" },
      { name: "Slate Grey / Steel", hex: "#4A4A4A" }
    ],
    sizes: ["38mm (Universal)"]
  },
  {
    id: "yb-sun-008",
    name: "Elysian Aviator Monolith Solaire",
    slug: "elysian-aviator-monolith-solaire",
    category: "Optique",
    subcategory: "Solaire",
    price: 130000,
    currency: "NGN",
    description: "A razor-sharp evolution of the teardrop aviator featuring a singular monolithic top browbar and floating lower orbital rims. Crafted with deep green polarized crystal lenses that evoke mid-century cinematic grandeur.",
    details: "Hand-finished knurled temple tips ensure slip-free comfort during tropical days.",
    material: "Electrolytically Plated Monel & Polished Acetate",
    dimensions: "Lens 58mm | Bridge 15mm | Temple 148mm",
    weight: "32 grams",
    collection: "after-dark",
    featured: false,
    bestseller: false,
    newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Polished Gold / Bottle Green", hex: "#B89B5E" },
      { name: "Satin Black / Dark Grey", hex: "#1A1A1A" }
    ],
    sizes: ["One Size"]
  },
  {
    id: "yb-pendant-009",
    name: "Prism Talisman Pendant",
    slug: "prism-talisman-pendant",
    category: "Jewelry",
    subcategory: "Pendants",
    price: 88000,
    currency: "NGN",
    description: "A three-dimensional solid bar pendant faceted at 45-degree angles, creating varied light and shadow planes when resting against the chest. Engraved with the subtle coordinate mark of the brand's atelier.",
    details: "Suspended from a 2.2mm diamond-cut box chain with adjustable extension loop.",
    material: "Solid 925 Sterling Silver / 18k Yellow Gold Finish",
    dimensions: "Pendant: 28mm x 5mm x 5mm | Chain: 55cm + 5cm extension",
    weight: "18.6 grams",
    collection: "radiance",
    featured: false,
    bestseller: true,
    newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475817-2936a7ea53b7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "18K Gold", hex: "#D4AF37" },
      { name: "Raw Sterling Silver", hex: "#C0C0C0" }
    ],
    sizes: ["55cm (Standard)"]
  },
  {
    id: "yb-acc-010",
    name: "Saffiano Optique & Jewelry Valet Folio",
    slug: "saffiano-optique-jewelry-valet-folio",
    category: "Accessories",
    subcategory: "Lifestyle",
    price: 65000,
    currency: "NGN",
    description: "A foldaway travel case engineered from cross-grain Saffiano leather with an ultra-soft microfiber interior lining. Houses two pairs of optical frames and dedicated compartments for rings and cufflinks.",
    details: "Concealed magnetic clasp closure with foil-stamped YB EVERYDAY / JEDEN insignia in matte gold.",
    material: "Full-Grain Saffiano Leather & Anti-Scratch Microfiber",
    dimensions: "Closed: 19cm x 11cm x 4.5cm",
    weight: "190 grams",
    collection: "essentials",
    featured: false,
    bestseller: false,
    newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#0A0A0A" },
      { name: "Cognac Tan", hex: "#8B5A2B" },
      { name: "Stone Grey", hex: "#7E7971" }
    ],
    sizes: ["One Size"]
  },
  {
    id: "yb-opt-011",
    name: "Bauhaus Round Wireframe Monture",
    slug: "bauhaus-round-wireframe-monture",
    category: "Optique",
    subcategory: "Montures Optique",
    price: 115000,
    currency: "NGN",
    description: "An homage to modern industrial school geometry, combining circular eyewires with high-mounted horizontal temple hinges. Engineered to balance weightless wear with sharp intellectual character.",
    details: "Hand-buffed acetate temple tips with internal comfort grooves.",
    material: "Cold-Drawn Stainless Steel Wire & Acetate",
    dimensions: "Lens 47mm | Bridge 22mm | Temple 140mm",
    weight: "18.2 grams",
    collection: "vision",
    featured: false,
    bestseller: false,
    newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509695503492-412db9d28edd?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Antique Gold", hex: "#B89B5E" },
      { name: "Brushed Silver", hex: "#C0C0C0" },
      { name: "Jet Black", hex: "#111111" }
    ],
    sizes: ["One Size"]
  },
  {
    id: "yb-bracelet-012",
    name: "Aura Minimalist Tennis Bracelet",
    slug: "aura-minimalist-tennis-bracelet",
    category: "Jewelry",
    subcategory: "Bracelets",
    price: 165000,
    currency: "NGN",
    description: "A continuous line of brilliant lab-created white sapphires set into squared four-prong collets. Designed to sit low and supple on the wrist, delivering fluid refraction with every gesture.",
    details: "Integrated double-safety box clasp with laser-etched YB serial marker.",
    material: "18K White Gold Plated Recycled Silver & Lab White Sapphires",
    dimensions: "Length: 18cm | Width: 3.2mm",
    weight: "14.1 grams",
    collection: "radiance",
    featured: true,
    bestseller: true,
    newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475817-2936a7ea53b7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Platinum White", hex: "#E5E4E2" },
      { name: "18K Gold", hex: "#D4AF37" }
    ],
    sizes: ["16.5cm (Small)", "18cm (Medium)", "19.5cm (Large)"]
  },
  {
    id: "yb-sun-013",
    name: "Noir Cat-Eye Solaire",
    slug: "noir-cat-eye-solaire",
    category: "Optique",
    subcategory: "Solaire",
    price: 120000,
    currency: "NGN",
    description: "Sculpted with a sharp high-winged upsweep that elevates facial contours. Deep beveled edges soften external glare, producing an arresting balance of retro drama and future-forward luxury.",
    details: "Includes custom silk micro-bag and hard leather protective case.",
    material: "Organic High-Density Acetate",
    dimensions: "Lens 53mm | Bridge 18mm | Temple 142mm",
    weight: "38 grams",
    collection: "after-dark",
    featured: false,
    bestseller: false,
    newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Pitch Black Gloss", hex: "#0A0A0A" },
      { name: "Amber Tortoise", hex: "#784B28" }
    ],
    sizes: ["One Size"]
  },
  {
    id: "yb-ring-014",
    name: "Sculpted Molten Band",
    slug: "sculpted-molten-band",
    category: "Jewelry",
    subcategory: "Rings",
    price: 68000,
    currency: "NGN",
    description: "Inspired by the organic transition of molten precious metals cooling in air. An undulating surface that interacts uniquely with ambient light, offering an artful textural counterpoint to sharp modern tailoring.",
    details: "Cast individually via lost-wax technique, making each piece subtly one-of-a-kind.",
    material: "Solid 925 Sterling Silver / Heavy 18k Gold Dipped",
    dimensions: "Band Width: Variable 4mm – 6.5mm",
    weight: "7.9 grams",
    collection: "jeden",
    featured: false,
    bestseller: false,
    newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Raw Silver", hex: "#C0C0C0" },
      { name: "Warm Gold", hex: "#D4AF37" }
    ],
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10"]
  },
  {
    id: "yb-cuff-015",
    name: "Architectural Ear Cuff (Pair)",
    slug: "architectural-ear-cuff-pair",
    category: "Jewelry",
    subcategory: "Earrings",
    price: 52000,
    currency: "NGN",
    description: "No piercings required. Designed to hug the middle conch or upper helix securely with gentle tension. Crisp chamfered edges lend an assertive editorial edge to everyday accessorizing.",
    details: "Engineered with rounded interior edges for prolonged all-day comfort.",
    material: "Surgical Titanium with 18k PVD Finish",
    dimensions: "Diameter: 13mm | Thickness: 3mm",
    weight: "3.2 grams (pair)",
    collection: "jeden",
    featured: false,
    bestseller: true,
    newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Gold", hex: "#D4AF37" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Obsidian", hex: "#1A1A1A" }
    ],
    sizes: ["Universal Fit"]
  },
  {
    id: "yb-acc-016",
    name: "Prism Solid Brass Catchall Tray",
    slug: "prism-solid-brass-catchall-tray",
    category: "Accessories",
    subcategory: "Lifestyle",
    price: 48000,
    currency: "NGN",
    description: "Machined from a single block of solid unlacquered brass, intended for bedside tables or dressing rooms. Designed to develop an intimate natural patina over decades of personal use.",
    details: "Weighted felted base prevents surface abrasion on timber and marble countertops.",
    material: "Solid Heavyweight Untreated Brass",
    dimensions: "180mm x 90mm x 16mm",
    weight: "480 grams",
    collection: "essentials",
    featured: false,
    bestseller: false,
    newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop"
    ],
    colors: [
      { name: "Raw Satin Brass", hex: "#B89B5E" },
      { name: "Blackened Bronze", hex: "#2B2824" }
    ],
    sizes: ["Standard"]
  }
];

export const CATEGORIES = [
  { id: "all", name: "All Objects", count: PRODUCTS.length },
  { id: "Jewelry", name: "Fine Jewelry", count: PRODUCTS.filter(p => p.category === "Jewelry").length },
  { id: "Optique", name: "L'Optique", count: PRODUCTS.filter(p => p.category === "Optique").length },
  { id: "Accessories", name: "Accessories & Lifestyle", count: PRODUCTS.filter(p => p.category === "Accessories").length }
];

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};
