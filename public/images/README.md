# Image replacement guide

Place Gopika's final exported images in these folders:

- `projects/<project-slug>/` — hero images, renders, plans, sections and process work
- `sketches/` — hand drawings and sketchbook scans
- `about/` — portrait and studio/process photographs
- `experiments/` — models, posters, pottery and visual studies
- `site/` — site-visit photography and documentation
- `materials/` — material and detail studies
- `generated/` — tiny supporting assets such as the global grain texture

Update the corresponding `src` values in `data/projects.ts` and `data/experiments.ts`. If `src` is omitted, the interface deliberately renders a styled architectural placeholder rather than a broken image.

The current `projects/courtyard-memory/hero-cropped.png` is an AI-generated atmosphere placeholder and must not be presented as Gopika's project photography.

The SVG files in `projects/`, `experiments/`, and `about/` are deliberately labelled conceptual/demo placeholders. Replace them by changing the `src` paths in `data/projects.ts`, `data/experiments.ts`, and `components/portrait-placeholder.tsx`.

The generated documentary images in `field-notes/` support the Kerala, Shimla, Ahmedabad, and Vietnam archive themes. The Experiments page identifies them as reference imagery; replace them with Gopika's original site-visit photographs when available.
