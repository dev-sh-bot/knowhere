# Transparent case-study mockups

The active website uses 56 product mockups: nine covers and 47 feature images. They were created with the built-in image generation tool from the local case-study reference images, then exported to WebP with the generated alpha channel preserved.

Final assets: `public/work/case-mockups/<project>/<image>.webp`.

The first 50 prompts and references are recorded in [case-mockup-prompts.json](case-mockup-prompts.json). For those feature images, combine the shared `featurePrompt` with that asset's `prompt`; cover prompts are stored in full. The six SocialSyncc prompts are stored in full in [socialsyncc-image-prompts.json](socialsyncc-image-prompts.json).

[case-mockup-alpha-check.json](case-mockup-alpha-check.json) records intrinsic dimensions, transparent-pixel coverage, corner alpha and file size for all 56 assets. All assets have genuine transparency. The near-zero corner tolerance allows alpha values up to 2 out of 255 from edge antialiasing.

The images are presentation mockups adapted from the reference decks. They show product workflows, while personal names, private records and long sample text are removed or abstracted. Interface example values are not portfolio outcome claims.

The homepage, Work list, case modal, service hover preview and case-study pages use contained, full-colour images. The previous grayscale filters, edge masks, background frames and cropped image treatment have been removed.

Source PNGs and the previous SVG set remain available locally as references; they are excluded from the GitHub commit. The website uses only the final WebP set. See [the cover overview](previews/case-mockups.png).

The original 42 feature images were visually reviewed in five proof sheets: [1](previews/case-features-1.png), [2](previews/case-features-2.png), [3](previews/case-features-3.png), [4](previews/case-features-4.png), [5](previews/case-features-5.png). The homepage, Work list and mobile/web case-study layouts were reviewed in the running local website. See [the updated Work-page screenshot](previews/work-transparent.jpg).

The SocialSyncc addition has its own [source notes](socialsyncc-case-study.md), [six-image proof sheet](previews/socialsyncc-mockups.png) and [alpha report](socialsyncc-image-alpha-check.json).
