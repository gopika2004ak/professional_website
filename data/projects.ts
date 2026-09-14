export type ProjectImage = {
  src?: string;
  alt: string;
  caption: string;
  tone?: "earth" | "forest" | "ivory" | "maroon";
  ratio?: "landscape" | "portrait" | "wide";
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  type: string;
  location: string;
  status: string;
  area: string;
  brief: string;
  concept: string;
  designIntent: string;
  context: string;
  process: string;
  reflection: string;
  heroImage: ProjectImage;
  gallery: ProjectImage[];
  drawings: ProjectImage[];
  sketches: ProjectImage[];
  materials: string[];
  tags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "courtyard-memory",
    number: "01",
    title: "Courtyard / Memory",
    subtitle: "An old house read through its shaded centre",
    year: "2026",
    type: "Independent Concept Study",
    location: "Kerala, India",
    status: "Conceptual placeholder — not built",
    area: "Academic study / area to be confirmed",
    brief: "To imagine how an existing domestic structure might be made useful again without erasing the marks, thresholds and habits that give it meaning.",
    concept: "The courtyard remains the quiet centre. New rooms are treated as measured additions around it, while the old circulation path continues to organise everyday life.",
    designIntent: "Retain first, repair second, and add only where the building needs support. Each intervention is intended to be legible without competing with the original house.",
    context: "A speculative study rooted in Kerala’s shaded verandahs, inward-looking courts and the slow weathering of laterite, lime and timber.",
    process: "Measured observation, threshold studies, small plan iterations and material notes form the process. The aim is not a finished answer, but a careful method of looking.",
    reflection: "This placeholder study asks whether architectural change can feel like continuity. It will be replaced by Gopika’s documented academic project and her own reflection.",
    heroImage: { src: "/images/projects/courtyard-memory-study.svg", alt: "Conceptual study of a remembered courtyard and surrounding rooms", caption: "Courtyard study · conceptual placeholder · 2026", tone: "forest", ratio: "wide" },
    gallery: [
      { src: "/images/projects/courtyard-memory/hero-cropped.png", alt: "Shaded veranda surrounding an earthen courtyard", caption: "FIG. 01 · Existing character / atmosphere", ratio: "landscape" },
      { alt: "A close study of an existing timber threshold", caption: "FIG. 02 · Threshold and material note", tone: "earth", ratio: "portrait" },
    ],
    drawings: [
      { src: "/images/projects/courtyard-diagram.svg", alt: "Conceptual courtyard plan drawing", caption: "PLAN 01 · Concept placeholder · retained fabric + light additions · NTS", tone: "ivory", ratio: "wide" },
      { alt: "Conceptual section through courtyard", caption: "SECTION 01 · Shade, rain and shared edge · NTS", tone: "ivory", ratio: "landscape" },
    ],
    sketches: [{ alt: "Hand sketch of courtyard sequence", caption: "SKETCH 01 · Arrival / veranda / court", tone: "maroon", ratio: "landscape" }],
    materials: ["Laterite", "Aged timber", "Lime plaster", "Clay tile"],
    tags: ["Adaptive reuse", "Memory", "Kerala", "Courtyard"],
    featured: true,
  },
  {
    slug: "earth-and-timber",
    number: "02",
    title: "Earth & Timber",
    subtitle: "Material, joinery and the temperature of a room",
    year: "2026",
    type: "Material / Atmosphere Study",
    location: "Site-independent",
    status: "Conceptual placeholder — not built",
    area: "Material study / not applicable",
    brief: "A study of how a limited palette can shape enclosure, comfort and atmosphere without relying on decorative excess.",
    concept: "Heavy earth holds the room while lighter timber frames touch, opening and shade. Construction becomes the visual language.",
    designIntent: "Test a small family of details where materials are allowed to age, carry touch and reveal how the room has been made.",
    context: "The study draws from warm interiors, deep openings and building traditions in which local material is part of daily climate response.",
    process: "Material swatches, joint sketches, shadow studies and a repeated room section are used to compare proportion and light.",
    reflection: "Restraint can make material differences more perceptible. This conceptual entry will later hold Gopika’s own models and construction explorations.",
    heroImage: { src: "/images/projects/earth-timber-study.svg", alt: "Abstract earth and timber construction study", caption: "Material study · conceptual placeholder · 2026", tone: "earth", ratio: "wide" },
    gallery: [
      { alt: "Rammed earth wall illuminated by a narrow opening", caption: "FIG. 01 · Earth / filtered light", tone: "earth", ratio: "portrait" },
      { src: "/images/projects/earth-timber-study.svg", alt: "Abstract timber joint detail", caption: "FIG. 02 · Placeholder timber connection study", tone: "forest", ratio: "landscape" },
    ],
    drawings: [
      { alt: "Exploded material assembly", caption: "ASSEMBLY 01 · Earth wall / timber frame · NTS", tone: "ivory", ratio: "wide" },
      { alt: "Wall section detail", caption: "DETAIL 01 · Base, wall and eave · NTS", tone: "ivory", ratio: "landscape" },
    ],
    sketches: [{ alt: "Material swatch and joinery sketches", caption: "NOTE 04 · Weight / grain / touch", tone: "maroon", ratio: "landscape" }],
    materials: ["Compacted earth", "Timber", "Stone", "Clay"],
    tags: ["Material study", "Earth", "Timber", "Craft"],
    featured: true,
  },
  {
    slug: "old-house-reimagined",
    number: "03",
    title: "The Old House, Reimagined",
    subtitle: "Repair as a form of design",
    year: "2025",
    type: "Speculative Adaptive Reuse Study",
    location: "Kerala, India",
    status: "Conceptual placeholder — not built",
    area: "Residential study / area to be confirmed",
    brief: "To explore a new domestic programme within an old house while keeping its scale, recognisable rooms and weathered material identity.",
    concept: "A new inhabited spine is inserted alongside retained rooms, making access clearer while leaving the historic sequence readable.",
    designIntent: "Resolve damp, light and circulation through a few precise changes rather than treating age as a reason for demolition.",
    context: "The imagined site is an old domestic compound shaped by monsoon, vegetation and generations of incremental change.",
    process: "The proposal begins with a retention map: keep, repair, open, add. Sketches then test how each decision affects daily routines.",
    reflection: "Adaptive reuse asks for judgement more than novelty. This placeholder will be replaced with a real conservation or renovation studio project.",
    heroImage: { src: "/images/projects/adaptive-reuse-study.svg", alt: "Layered line drawing representing an old house and a new intervention", caption: "Speculative adaptive reuse placeholder · 2025", tone: "forest", ratio: "wide" },
    gallery: [
      { alt: "Old lime-plastered room awaiting repair", caption: "FIG. 01 · Existing room / retained marks", tone: "forest", ratio: "landscape" },
      { alt: "Quiet refurbished interior", caption: "FIG. 02 · A measured new layer", tone: "earth", ratio: "portrait" },
    ],
    drawings: [
      { src: "/images/projects/adaptive-reuse-study.svg", alt: "Retention strategy diagram", caption: "DIAGRAM 01 · Placeholder · keep / repair / open / add", tone: "ivory", ratio: "wide" },
      { alt: "Before and after plan comparison", caption: "PLAN 02 · Existing + proposed · NTS", tone: "ivory", ratio: "landscape" },
    ],
    sketches: [{ alt: "Sketches of repair details", caption: "SITE NOTE 07 · Edges worth keeping", tone: "maroon", ratio: "landscape" }],
    materials: ["Lime", "Reclaimed wood", "Laterite", "Oxide floor"],
    tags: ["Conservation", "Renovation", "Existing fabric", "Domestic"],
    featured: true,
  },
  {
    slug: "thresholds-of-home",
    number: "04",
    title: "Thresholds of Home",
    subtitle: "Life between inside and outside",
    year: "2025",
    type: "Spatial Study",
    location: "Kerala, India",
    status: "Academic placeholder — not built",
    area: "Typology study / not applicable",
    brief: "An archive of verandahs, steps, shaded edges and courtyards, studied as useful rooms rather than leftover circulation.",
    concept: "Home is read as a gradient: street, edge, veranda, room and court. Each threshold negotiates privacy, weather and encounter.",
    designIntent: "Document small spatial devices that support pause, conversation, work and changing daylight.",
    context: "A typological study informed by Kerala domestic space and observations made while moving through familiar neighbourhoods.",
    process: "Photographic notes, proportion sketches and a series of sectional fragments collect recurring relationships without fixing them into one building.",
    reflection: "The ordinary edge often works hardest. This conceptual study is prepared to receive Gopika’s own field notes and measured drawings.",
    heroImage: { src: "/images/projects/threshold-study.svg", alt: "Sectional abstraction of a shaded veranda threshold", caption: "Spatial study · conceptual placeholder · 2025", tone: "maroon", ratio: "wide" },
    gallery: [
      { alt: "Stone step and timber door detail", caption: "FIG. 01 · Step / pause / entry", tone: "earth", ratio: "portrait" },
      { alt: "Long shaded domestic veranda", caption: "FIG. 02 · Inhabited edge", tone: "forest", ratio: "landscape" },
    ],
    drawings: [
      { src: "/images/projects/threshold-study.svg", alt: "Threshold sequence diagram", caption: "SECTION SERIES · Placeholder · street to court · NTS", tone: "ivory", ratio: "wide" },
      { alt: "Veranda proportion study", caption: "STUDY 03 · Depth / shade / use", tone: "ivory", ratio: "landscape" },
    ],
    sketches: [{ alt: "Field sketches of domestic thresholds", caption: "FIELD NOTE 03 · Six ways to arrive", tone: "maroon", ratio: "landscape" }],
    materials: ["Stone", "Timber", "Terracotta", "Shadow"],
    tags: ["Thresholds", "Vernacular", "Climate", "Everyday life"],
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
