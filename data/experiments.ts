import type { ProjectImage } from "./projects";

export type Experiment = ProjectImage & {
  number: string;
  title: string;
  category: string;
  year: string;
};

export const experiments: Experiment[] = [
  { number: "E.01", title: "The shaded edge", category: "Site notes", year: "2026", alt: "Observation drawing of a deep veranda", caption: "A threshold measured by light rather than a wall.", tone: "forest", ratio: "portrait" },
  { number: "E.02", title: "Laterite after rain", category: "Material", year: "2026", alt: "Close material study of wet laterite", caption: "Colour, porosity and the trace of weather.", tone: "earth", ratio: "landscape" },
  { number: "E.03", title: "Courtyard fragments", category: "Sketches", year: "2026", alt: "Loose architectural courtyard sketches", caption: "Six small ways of holding an open centre.", tone: "ivory", ratio: "wide" },
  { number: "E.04", title: "Things that hold", category: "Objects / making", year: "2025", alt: "Handmade pottery studies", caption: "Form understood through pressure, weight and touch.", tone: "maroon", ratio: "portrait" },
  { number: "E.05", title: "Timber joints", category: "Details", year: "2025", alt: "Annotated sketches of timber joints", caption: "A small archive of connections and grain direction.", tone: "ivory", ratio: "landscape" },
  { number: "E.06", title: "Roadside red", category: "Colour", year: "2025", alt: "Muted colour study from a Kerala street", caption: "Oxblood, dust, leaf and faded limewash.", tone: "earth", ratio: "portrait" },
  { number: "E.07", title: "Working model 1:50", category: "Models", year: "2025", alt: "Card and earth-toned architectural study model", caption: "Volume tested through removal rather than addition.", tone: "forest", ratio: "wide" },
  { number: "E.08", title: "Notes from the bus", category: "Photography", year: "2025", alt: "Passing view of a weathered house", caption: "An old house held briefly between trees.", tone: "maroon", ratio: "landscape" },
];
