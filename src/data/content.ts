export type Spec = { label: string; value: string };

export type ColorOption = {
  name: string;
  hex: string;
  image?: string;
  note?: string;
};

export type Hotspot = { id: string; label: string; copy: string; x: string; y: string };

export type Vehicle = {
  slug: string;
  name: string;
  type: string;
  filters: Array<"city" | "family" | "premium" | "utility">;
  finder: Array<"daily" | "family" | "longer" | "compact" | "spacious">;
  summary: string;
  officialUrl: string;
  heroImage?: string;
  gallery: { src: string; alt: string; credit: string }[];
  interiorImage?: { src: string; alt: string; credit: string };
  colors: ColorOption[];
  interiorName?: string;
  wheel: string;
  highlights: Spec[];
  specs: Spec[];
  chargingNotes: string[];
  hotspots: Hotspot[];
  priceNote?: string;
  source: string;
};

export const concept = {
  title: "Wuling Electric Experience | HINAI Tech Concept",
  description:
    "An independent digital experience concept exploring Wuling's electric mobility lineup through cinematic storytelling, interactive product presentation and immersive web design.",
  credit: "Website Redesign Concept by HINAI Tech",
  creditSub:
    "Independent digital experience concept created for portfolio purposes.",
  hinai: "https://hinaitech.com",
  disclaimer:
    "This website is an independent redesign concept created by HINAI Tech for portfolio presentation. Wuling Motors trademarks, product names, imagery and other brand assets remain the property of their respective owners.",
};

export const officialLinks = {
  home: "https://wuling.id/en",
  electric: "https://wuling.id/id/mobil-listrik",
  air: "https://wuling.id/id/air-ev",
  binguo: "https://wuling.id/en/binguo-ev",
  cloud: "https://wuling.id/en/cloud-ev",
  aira: "https://wuling.id/id/aira-ev",
  eksion: "https://wuling.id/id/eksion",
  dealer: "https://wuling.id/en",
  testDrive: "https://wuling.id/en/test-drive",
  charging: "https://wuling.id/en/electric-vehicle/charging-location",
  myWuling: "https://wuling.id/en/my",
  afterSales: "https://wuling.id/en/after-sales",
  contact: "https://wuling.id/en",
};

export const vehicles: Vehicle[] = [
  {
    slug: "aira-ev",
    name: "Aira ev",
    type: "Electric city car",
    filters: ["city"],
    finder: ["daily", "compact"],
    summary:
      "A four-door electric city car introduced by Wuling in Indonesia in July 2026, with Standard Range and Long Range battery choices.",
    officialUrl: officialLinks.aira,
    gallery: [],
    colors: [
      { name: "Starry Black", hex: "#16181c" },
      { name: "Galaxy Blue", hex: "#1d4e89" },
      { name: "Milk Tea", hex: "#c4a882" },
    ],
    interiorName: "Cookies and Cream",
    wheel: "13\" steel wheel, 155/70 R13",
    highlights: [
      { label: "Range", value: "Up to 205 km / 301 km CLTC" },
      { label: "Power", value: "30 kW / 85 Nm" },
      { label: "Drive", value: "Rear-wheel drive" },
      { label: "Seating", value: "4" },
    ],
    specs: [
      { label: "Length × width × height", value: "3,268 × 1,550 × 1,575 mm" },
      { label: "Wheelbase", value: "2,190 mm" },
      { label: "Motor", value: "30 kW, 85 Nm" },
      { label: "Layout", value: "Rear-wheel drive" },
      { label: "Standard Range battery", value: "16.2 kWh LFP" },
      { label: "Standard Range", value: "Up to 205 km CLTC" },
      { label: "Long Range battery", value: "25.1 kWh LFP" },
      { label: "Long Range", value: "Up to 301 km CLTC" },
      { label: "Suspension", value: "MacPherson front, 3-link coil spring rear" },
      { label: "Turning radius", value: "4.5 m" },
      { label: "Seating", value: "4" },
      { label: "Colors", value: "Starry Black, Galaxy Blue, Milk Tea" },
    ],
    chargingNotes: [
      "Wuling lists home charging and public charging support across its EV ecosystem. A specific Aira ev charge-time figure is not repeated here unless it is read from the model page.",
    ],
    hotspots: [
      {
        id: "display",
        label: "Driver display",
        copy: "Launch coverage describes a 7-inch multi-information display. Long Range adds a 10.1-inch control screen.",
        x: "58%",
        y: "42%",
      },
    ],
    priceNote:
      "Launch prices reported at GIIAS 2026: Standard Range Rp 155,000,000 and Long Range Rp 175,000,000, OTR Jakarta. Confirm the current figure on the official Aira ev page.",
    source: "Wuling Indonesia product information and July 2026 launch reporting",
  },
  {
    slug: "air-ev",
    name: "New Air ev",
    type: "Compact electric city car",
    filters: ["city"],
    finder: ["daily", "compact"],
    summary:
      "Wuling's compact city EV, built in Indonesia. The current lineup offers Lite and Pro variants with up to 200 km or 300 km of range.",
    officialUrl: officialLinks.air,
    heroImage: "/media/air-peach.jpg",
    gallery: [
      {
        src: "/media/air-peach.jpg",
        alt: "2024 Wuling Air ev Lite in Peach Pink, front three-quarter view",
        credit: "MoCars, CC0, via Wikimedia Commons",
      },
      {
        src: "/media/air-green.jpg",
        alt: "2024 Wuling Air ev Lite in Avocado Green",
        credit: "MoCars, CC0, via Wikimedia Commons",
      },
      {
        src: "/media/air-yellow.jpg",
        alt: "2024 Wuling Air ev Long Range in Lemon Yellow",
        credit: "MoCars, CC0, via Wikimedia Commons",
      },
      {
        src: "/media/air-jakarta.jpg",
        alt: "Wuling Air ev rear view in Jakarta",
        credit: "Wikimedia Commons",
      },
    ],
    colors: [
      { name: "Peach Pink", hex: "#e7b7b0", image: "/media/air-peach.jpg" },
      { name: "Avocado Green", hex: "#7f8f62", image: "/media/air-green.jpg" },
      { name: "Lemon Yellow", hex: "#e2c84a", image: "/media/air-yellow.jpg" },
      { name: "Pristine White", hex: "#f4f1ea" },
      { name: "Galaxy Blue", hex: "#1d4e89" },
      { name: "Starry Black", hex: "#14161a", note: "Added for New Air ev" },
    ],
    interiorName: "Tamarind Sunset",
    wheel: "12\" steel wheel, 145/70 R12",
    highlights: [
      { label: "Range", value: "Up to 200 km / 300 km" },
      { label: "Power", value: "30 kW / 110 Nm" },
      { label: "Battery", value: "17.3 kWh or 26.7 kWh" },
      { label: "Seating", value: "4" },
    ],
    specs: [
      { label: "Length × width × height", value: "2,974 × 1,505 × 1,631 mm" },
      { label: "Wheelbase", value: "2,010 mm" },
      { label: "Seating", value: "4" },
      { label: "Motor", value: "Permanent magnet synchronous, 30 kW, 110 Nm" },
      { label: "Transmission", value: "Single reduction gear" },
      { label: "Battery", value: "Lithium ferro-phosphate, IP67" },
      { label: "Lite Standard Range", value: "17.3 kWh, up to 200 km" },
      { label: "Lite / Pro Long Range", value: "26.7 kWh, up to 300 km" },
      { label: "Suspension", value: "MacPherson front, 3-link coil spring rear" },
      { label: "Steering", value: "Electric power steering" },
      { label: "Brakes", value: "Disc front. Drum rear on Lite, disc rear on Pro" },
    ],
    chargingNotes: [
      "Wuling describes Easy Home Charging for Air ev, including a home charging device and installation with New Air ev purchases announced at IIMS 2025.",
      "Wuling's Air ev article describes an AC GB/T socket box rated at 2,200 W and a charging pillar up to 7,700 W.",
    ],
    hotspots: [
      {
        id: "display",
        label: "Driver display",
        copy: "Lite uses a 7-inch TFT cluster. Pro uses a 10.25-inch TFT cluster.",
        x: "62%",
        y: "46%",
      },
      {
        id: "screen",
        label: "Infotainment",
        copy: "Pro adds a 10.25-inch integrated floating widescreen with Wuling Indonesian Command (WIND).",
        x: "48%",
        y: "40%",
      },
      {
        id: "seating",
        label: "Seating",
        copy: "Four seats. Interior theme is Tamarind Sunset. Pro uses synthetic leather seats.",
        x: "40%",
        y: "62%",
      },
    ],
    priceNote:
      "Jakarta transaction prices on wuling.id, valid from 1 January 2026: Lite Standard Range from Rp 214 million, Lite Long Range from Rp 251 million, Pro Long Range from Rp 307 million.",
    source: "Wuling Indonesia — New Air ev",
  },
  {
    slug: "binguoev",
    name: "BinguoEV",
    type: "Electric hatchback",
    filters: ["city", "family"],
    finder: ["daily", "family"],
    summary:
      "Wuling's second electric hatchback. Current Lite and Pro variants use a 31.9 kWh MAGIC Battery with a stated range of up to 333 km CLTC.",
    officialUrl: officialLinks.binguo,
    heroImage: "/media/lineup-rear.jpg",
    gallery: [
      {
        src: "/media/lineup-rear.jpg",
        alt: "Wuling BinguoEV in Milk Tea beside an Air ev, photographed in Bandung",
        credit: "MoCars, CC0, via Wikimedia Commons",
      },
    ],
    colors: [
      { name: "Milk Tea", hex: "#c4a882", image: "/media/lineup-rear.jpg" },
      { name: "Mousse Green", hex: "#8ea58a" },
      { name: "Galaxy Blue", hex: "#1d4e89" },
    ],
    interiorName: "Pro: Caramel Latte synthetic leather. Lite: Mocha Latte fabric.",
    wheel: "15\" steel wheel, 185/60 R15",
    highlights: [
      { label: "Range", value: "Up to 333 km CLTC" },
      { label: "Power", value: "50 kW" },
      { label: "Charging", value: "DC 30–80% ± 35 min" },
      { label: "Battery", value: "31.9 kWh MAGIC Battery" },
    ],
    specs: [
      { label: "Length × width × height", value: "3,950 × 1,708 × 1,580 mm" },
      { label: "Wheelbase", value: "2,560 mm" },
      { label: "Battery", value: "31.9 kWh lithium ferro-phosphate, IP67" },
      { label: "Range", value: "Up to 333 km CLTC" },
      { label: "Motor", value: "50 kW" },
      { label: "Maximum speed", value: "120 km/h" },
      { label: "Transmission", value: "Single reduction gear" },
      { label: "AC charging 20–100%", value: "± 5.5 hours" },
      { label: "DC charging 30–80%", value: "± 35 minutes" },
      { label: "Luggage", value: "Up to 790 L" },
      { label: "Displays", value: "Full-color TFT, 2 × 10.25\"" },
    ],
    chargingNotes: [
      "Official BinguoEV page: AC charging from 20% to 100% in about 5.5 hours, and DC charging from 30% to 80% in about 35 minutes.",
    ],
    hotspots: [
      {
        id: "display",
        label: "Driver display",
        copy: "The specification table lists a full-color TFT instrument paired with a 10.25-inch screen.",
        x: "60%",
        y: "42%",
      },
      {
        id: "screen",
        label: "Infotainment",
        copy: "Smartphone interconnection and a 10.25-inch head unit are listed for the model.",
        x: "46%",
        y: "38%",
      },
      {
        id: "seating",
        label: "Seating",
        copy: "Pro seating is described with Caramel Latte synthetic leather and electric adjustment. Lite uses Mocha Latte fabric.",
        x: "38%",
        y: "64%",
      },
    ],
    priceNote:
      "On wuling.id, prices valid from 1 January 2026, Jakarta: New BinguoEV Lite from Rp 318 million and New BinguoEV Pro from Rp 363 million.",
    source: "Wuling Indonesia — BinguoEV",
  },
  {
    slug: "cloud-ev",
    name: "Cloud EV",
    type: "Medium electric hatchback",
    filters: ["family", "premium"],
    finder: ["family", "longer", "spacious"],
    summary:
      "A medium hatchback EV positioned around cabin comfort, with a stated range of 460 km CLTC and a 50.6 kWh battery.",
    officialUrl: officialLinks.cloud,
    heroImage: "/media/cloud-white.jpg",
    gallery: [
      {
        src: "/media/cloud-white.jpg",
        alt: "2024 Wuling Cloud EV in Pristine White, photographed in Bandung",
        credit: "Wikimedia Commons",
      },
      {
        src: "/media/cloud-rear.jpg",
        alt: "2024 Wuling Cloud EV rear view",
        credit: "Wikimedia Commons",
      },
    ],
    interiorImage: {
      src: "/media/cloud-interior.jpg",
      alt: "2024 Wuling Cloud EV interior",
      credit: "Wikimedia Commons",
    },
    colors: [
      { name: "Pristine White", hex: "#f3f0e8", image: "/media/cloud-white.jpg" },
      { name: "Tungsten Steel Grey", hex: "#8d9096", note: "Announced for New Cloud EV at IIMS 2025" },
      { name: "Aurora Silver", hex: "#c5c8ce", note: "Announced for New Cloud EV at IIMS 2025" },
    ],
    wheel: "18\" machined alloy, 215/55 R18",
    highlights: [
      { label: "Range", value: "460 km CLTC" },
      { label: "Power", value: "100 kW / 200 Nm" },
      { label: "Charging", value: "DC 30–80% ± 30 min" },
      { label: "Seating", value: "5" },
    ],
    specs: [
      { label: "Length × width × height", value: "4,295 × 1,850 × 1,652 mm" },
      { label: "Wheelbase", value: "2,700 mm" },
      { label: "Seating", value: "5" },
      { label: "Battery", value: "50.6 kWh lithium ferro-phosphate" },
      { label: "Range", value: "460 km CLTC" },
      { label: "Motor", value: "Permanent magnet synchronous, 100 kW (134 hp), 200 Nm" },
      { label: "Drive", value: "Front-wheel drive" },
      { label: "AC charging 20–100%", value: "± 7 hours" },
      { label: "DC charging 30–80%", value: "± 30 minutes" },
      { label: "Displays", value: "8.8\" digital TFT and 15.6\" control panel" },
      { label: "Suspension", value: "MacPherson front, torsion beam rear" },
    ],
    chargingNotes: [
      "Official Cloud EV page: AC normal charging from 20% to 100% in about 7 hours, and DC fast charging from 30% to 80% in about 30 minutes.",
    ],
    hotspots: [
      {
        id: "display",
        label: "Driver display",
        copy: "8.8-inch digital TFT multi-information display.",
        x: "63%",
        y: "40%",
      },
      {
        id: "screen",
        label: "Infotainment",
        copy: "15.6-inch intelligent control panel, with smartphone interconnection on New Cloud EV.",
        x: "48%",
        y: "36%",
      },
      {
        id: "seating",
        label: "Seating",
        copy: "Italian-style bubble seats and a sofa mode with 135° rear-seat recline are listed.",
        x: "36%",
        y: "62%",
      },
      {
        id: "storage",
        label: "Storage",
        copy: "Tea-table style center console. Trunk space is listed up to 1,707 L with the rear seats folded.",
        x: "52%",
        y: "70%",
      },
    ],
    source: "Wuling Indonesia — Cloud EV",
  },
  {
    slug: "eksion-ev",
    name: "Eksion EV",
    type: "7-seat electric SUV",
    filters: ["family", "premium"],
    finder: ["family", "longer", "spacious"],
    summary:
      "A three-row electric SUV introduced in Indonesia in 2026, with Magic Battery Pro and a stated range of up to 530 km CLTC.",
    officialUrl: officialLinks.eksion,
    gallery: [],
    colors: [
      { name: "Archipelago Blue", hex: "#1a3f66" },
      { name: "Haze Grey", hex: "#9aa0a6" },
      { name: "Frosty White", hex: "#f2f3f4" },
      { name: "Starry Black", hex: "#14161a" },
    ],
    interiorName: "Walnut brown and carbon black",
    wheel: "18\" machined alloy, 215/55 R18",
    highlights: [
      { label: "Range", value: "Up to 530 km CLTC" },
      { label: "Power", value: "150 kW / 310 Nm" },
      { label: "Battery", value: "69.2 kWh" },
      { label: "Seating", value: "7" },
    ],
    specs: [
      { label: "Length × width × height", value: "4,745 × 1,850 × 1,755 mm" },
      { label: "Wheelbase", value: "2,810 mm" },
      { label: "Seating", value: "7" },
      { label: "Motor", value: "150 kW (201 hp) / 310 Nm" },
      { label: "Battery", value: "69.2 kWh lithium iron phosphate" },
      { label: "Range", value: "Up to 530 km CLTC" },
      { label: "Transmission", value: "Single reduction" },
      { label: "Drive", value: "Front-wheel drive" },
      { label: "Charging", value: "CCS2 DC fast charging" },
      { label: "Suspension", value: "MacPherson front, multi-link independent rear" },
      { label: "Displays", value: "12.8\" control screen and 8.8\" TFT" },
    ],
    chargingNotes: [
      "Wuling states that Eksion EV supports CCS2 DC fast charging. A minute-by-minute charge time is not shown here because the product table reviewed did not publish one.",
    ],
    hotspots: [
      {
        id: "display",
        label: "Driver display",
        copy: "8.8-inch TFT instrument display.",
        x: "64%",
        y: "40%",
      },
      {
        id: "screen",
        label: "Infotainment",
        copy: "12.8-inch high-definition control screen with wireless smartphone interconnection.",
        x: "48%",
        y: "36%",
      },
      {
        id: "seating",
        label: "Seating",
        copy: "Seven seats. Synthetic leather, ventilated front seats, and electric driver-seat adjustment are listed.",
        x: "34%",
        y: "60%",
      },
      {
        id: "roof",
        label: "Panoramic roof",
        copy: "An electric panoramic sunroof is listed on the higher Eksion specification. Confirm the variant on wuling.id before assuming it is on every car.",
        x: "50%",
        y: "18%",
      },
    ],
    priceNote:
      "Early-bird Jakarta prices on wuling.id during the launch period: EV CE from Rp 389,000,000 and EV EX from Rp 459,000,000. Wuling notes the price is not binding.",
    source: "Wuling Indonesia — Eksion",
  },
  {
    slug: "eksion-phev",
    name: "Eksion PHEV",
    type: "7-seat plug-in hybrid SUV",
    filters: ["family", "premium"],
    finder: ["family", "longer", "spacious"],
    summary:
      "The plug-in hybrid Eksion pairs a 1.5-litre dedicated hybrid engine with a 20.5 kWh battery. Wuling states an electric range up to 125 km CLTC and a combined range above 1,000 km.",
    officialUrl: officialLinks.eksion,
    gallery: [],
    colors: [
      { name: "Archipelago Blue", hex: "#1a3f66" },
      { name: "Haze Grey", hex: "#9aa0a6" },
      { name: "Frosty White", hex: "#f2f3f4" },
      { name: "Starry Black", hex: "#14161a" },
    ],
    interiorName: "Walnut brown and carbon black",
    wheel: "18\" machined alloy, 215/55 R18",
    highlights: [
      { label: "Electric range", value: "Up to 125 km CLTC" },
      { label: "Combined", value: "1,000+ km CLTC" },
      { label: "Motor", value: "145 kW / 230 Nm" },
      { label: "Seating", value: "7" },
    ],
    specs: [
      { label: "Engine", value: "1.5 L gasoline, Atkinson cycle, 105 hp, 130 Nm" },
      { label: "Drive motor", value: "145 kW (195 hp) / 230 Nm" },
      { label: "Transmission", value: "Dedicated hybrid transmission" },
      { label: "Battery", value: "20.5 kWh lithium iron phosphate" },
      { label: "Electric range", value: "Up to 125 km CLTC" },
      { label: "Combined range", value: "1,000+ km" },
      { label: "Fuel tank", value: "52 L" },
      { label: "Drive", value: "Front-wheel drive" },
      { label: "Seating", value: "7" },
      { label: "Dimensions", value: "4,745 × 1,850 × 1,755 mm" },
    ],
    chargingNotes: [
      "Wuling states the PHEV also supports DC fast charging. A specific minute figure is omitted here.",
    ],
    hotspots: [],
    priceNote:
      "Early-bird Jakarta prices on wuling.id during the launch period: PHEV CE from Rp 449,000,000 and PHEV EX from Rp 499,000,000.",
    source: "Wuling Indonesia — Eksion",
  },
];

export const timeline = [
  {
    year: "2015",
    title: "Groundbreaking in Cikarang",
    copy: "On 20 August 2015 Wuling held a groundbreaking ceremony for its first Indonesian plant at Greenland International Industrial Center, Cikarang.",
    source: "Wuling press release, 20 August 2015",
  },
  {
    year: "2017",
    title: "Mass production begins",
    copy: "On 11 July 2017 the Cikarang plant began mass production. Wuling marks this date as the start of its manufacturing operation in Indonesia.",
    source: "Wuling press release, 11 July 2017",
  },
  {
    year: "2022",
    title: "Air ev arrives",
    copy: "Air ev was launched globally in Indonesia in August 2022 and became Wuling’s first EV produced at the Cikarang plant. It was also presented around GIIAS 2022.",
    source: "Wuling press release, ABC Stories, 29 October 2024",
  },
  {
    year: "2023",
    title: "BinguoEV joins the lineup",
    copy: "Wuling introduced BinguoEV as its second electric hatchback, extending the Indonesian EV range beyond the compact Air ev.",
    source: "Wuling Indonesia electric vehicle overview",
  },
  {
    year: "2024",
    title: "MAGIC Battery, made locally",
    copy: "On 31 December 2024 Wuling inaugurated a MAGIC Battery production line inside the Cikarang supplier park.",
    source: "Wuling press release, 31 December 2024",
  },
  {
    year: "2025",
    title: "New Air ev and New Cloud EV",
    copy: "At IIMS 2025 Wuling introduced New Air ev and New Cloud EV under the line “Wuling Built in Indonesia for You.” In May 2025 the Cikarang plant marked 40,000 EVs produced in Indonesia.",
    source: "Wuling press releases, 13 February 2025 and 24 May 2025",
  },
  {
    year: "2026",
    title: "Eksion and Aira ev",
    copy: "Eksion was shown at IIMS 2026 and launched in April 2026 with EV and plug-in hybrid choices. Aira ev followed in July 2026 as a four-door electric city car.",
    source: "Wuling Eksion press materials and July 2026 Aira ev introduction",
  },
];

export const journal = [
  {
    slug: "understanding-electric-mobility",
    category: "Mobility",
    title: "Understanding Electric Mobility",
    standfirst:
      "A concept essay on how an electric car changes the rhythm of a daily trip, written for this redesign and not copied from Wuling editorial.",
  },
  {
    slug: "how-ev-charging-works",
    category: "EV Technology",
    title: "How EV Charging Works",
    standfirst:
      "AC at home, DC on a journey. A plain-language walkthrough of the two paths Wuling already describes for its electric cars.",
  },
  {
    slug: "inside-modern-ev-design",
    category: "Design",
    title: "Inside Modern EV Design",
    standfirst:
      "What changes when a cabin is laid out around a battery and a screen, using only features Wuling publishes for specific models.",
  },
  {
    slug: "evolution-of-urban-mobility",
    category: "Ownership",
    title: "The Evolution of Urban Mobility",
    standfirst:
      "From a compact city car to a seven-seat electric SUV, a look at how one brand’s Indonesian lineup has widened since 2022.",
  },
];

export function getVehicle(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}
