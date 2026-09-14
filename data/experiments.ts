import type { ProjectImage } from "./projects";

export type Experiment = ProjectImage & {
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
};

// These generated reference images frame the site-visit themes and should be
// replaced with Gopika's own photographs and drawings before publication.
export const experiments: Experiment[] = [
  { number: "FIELD 01", title: "Monsoon threshold", category: "Climate / edge", location: "Kerala, India", year: "2026", src: "/images/field-notes/kerala-monsoon-threshold.jpg", alt: "Rain falling into a traditional Kerala courtyard beside a timber verandah", caption: "Rain turns the threshold into climate, sound and shared space.", ratio: "landscape" },
  { number: "FIELD 02", title: "Slate roof rhythm", category: "Roofscape", location: "Shimla, India", year: "2026", src: "/images/field-notes/shimla-slate-roof.jpg", alt: "Layered slate roofs and timber construction on a Shimla hillside", caption: "Repeated eaves negotiate rain, slope and the scale of the street.", ratio: "landscape" },
  { number: "LIGHT 03", title: "Sun-breaker / shade", category: "Climate / light", location: "Ahmedabad, India", year: "2026", src: "/images/field-notes/ahmedabad-sun-breaker.jpg", alt: "Deep concrete sun-breakers casting shadows across an Ahmedabad facade", caption: "Depth becomes a climate device before it becomes an expression.", ratio: "landscape" },
  { number: "STREET 04", title: "Layered shophouse", category: "Street / domestic", location: "Vietnam", year: "2026", src: "/images/field-notes/vietnam-layered-shophouse.jpg", alt: "A layered Vietnamese shophouse threshold leading toward a planted court", caption: "Street, room and garden overlap through a long inhabited threshold.", ratio: "landscape" },
  { number: "MAT. 05", title: "Laterite / lime / time", category: "Material", location: "Kerala, India", year: "2025", src: "/images/field-notes/kerala-laterite-lime.jpg", alt: "Weathered laterite, lime plaster and timber meeting at an old wall", caption: "Age becomes legible where repair, weather and material meet.", ratio: "landscape" },
  { number: "SECTION 06", title: "Building with the slope", category: "Settlement", location: "Shimla, India", year: "2025", src: "/images/field-notes/shimla-stepped-settlement.jpg", alt: "Stepped houses and stone paths adapting to a steep Shimla hillside", caption: "The settlement reads as a section drawn directly by the terrain.", ratio: "portrait" },
  { number: "DETAIL 07", title: "The pol threshold", category: "Measured detail", location: "Ahmedabad, India", year: "2025", src: "/images/field-notes/ahmedabad-pol-threshold.jpg", alt: "Carved timber doorway and raised stone otla at an Ahmedabad pol house", caption: "A small raised edge choreographs pause, welcome and privacy.", ratio: "portrait" },
  { number: "FIELD 08", title: "Street to courtyard", category: "Everyday life", location: "Vietnam", year: "2025", src: "/images/field-notes/vietnam-street-courtyard.jpg", alt: "View through a Vietnamese lane house toward a planted internal court", caption: "A sequence of doors turns a narrow plot into layered light and air.", ratio: "portrait" },
];
