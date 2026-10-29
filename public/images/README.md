# תמונות האתר / Site images

Drop appropriately **licensed** photos here, then point the site to them.

## How to use a real photo

1. Save the image file in this folder, e.g. `smadar-portrait.jpg`.
2. Reference it via the `ImageSlot` component's `src` prop. For example, in
   `src/components/sections/Hero.tsx` and `src/components/sections/AboutPreview.tsx`
   and `src/app/about/page.tsx`, change:

   ```tsx
   <ImageSlot alt="..." hint="..." />
   ```

   to:

   ```tsx
   <ImageSlot src="/images/smadar-portrait.jpg" alt="פורטרט של סמדר שור קניגסברג" />
   ```

Until a `src` is provided, each slot shows a tasteful placeholder — so the site
never displays fabricated or unlicensed imagery.

## Recommended images

| Where            | Suggested file               | Notes                                   |
| ---------------- | ---------------------------- | --------------------------------------- |
| Home hero        | `hero.jpg`                   | Warm mother-and-baby or lifestyle shot  |
| Home "about"     | `smadar-portrait.jpg`        | Portrait of Smadar                      |
| About page       | `smadar-about.jpg`           | Portrait / at-work photo                |

## Licensing

Use only photos you have the right to publish: your own photos, or images
licensed for commercial use (e.g. purchased stock, or a free license such as
Unsplash/Pexels that permits this use). Keep a record of the license.

## Open Graph image

The social-share (Open Graph) image is generated automatically from site text
in `src/app/opengraph-image.tsx` — no file needed. Edit that file to change it.
