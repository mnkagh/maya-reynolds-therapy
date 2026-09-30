# Dr. Maya Reynolds, PsyD — Internship Assignment

Stage 2 practical assignment for **Grow My Therapy**: clone a homepage, then
redesign it around a new therapist's profile.

| Route | What it is |
| --- | --- |
| `/` | **Parts 2 & 3** — the redesigned site for Dr. Maya Reynolds, PsyD |
| `/clone` | **Part 1** — the UI-accuracy clone of the source homepage |

Part 1 is kept as a live route so the clone can be reviewed alongside the
redesign rather than being overwritten by it. It is also tagged
[`part1-clone`](https://github.com) in the history.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (both routes prerender as static)
npm run start
```

Stack: **Next.js 16 (App Router) · React 19 · Tailwind CSS v4** — no component
library, because the whole point of Part 1 is that the layout is hand-built
rather than assembled from a kit.

---

## Part 1 — the clone

`conejovalleycounseling.com/home` was reverse-engineered rather than eyeballed.
The section order, grid geometry, type scale and colour values were extracted
from the live site and its stylesheet, then rebuilt in Tailwind.

**Measured at a 1440px viewport:**

| Token | Value |
| --- | --- |
| H1 / H2 / H3 / H4 | 59.9 / 47.8 / 39.2 / 27.1px, all weight 300, `-0.01em` |
| Page gutter | 5vw (72px) |
| Hero | 497×572 image flush left · 643px copy from x=617 · 115×378 strip flush right |
| Statement | 693px heading · two text columns · 436×626 image flush right |
| "Who we help" | heading at the gutter, then 3×364px cards offset 165px, 20px apart |
| Pull-quote band | solid `#2b2b2b`, full-bleed, 860px white copy, vertically centred |
| CTA band | 170px strip flush left · 534px copy · 497×606 image flush right |
| Section rhythm | cream `#f6f4ee` → white → sand `#e3d9ca` → dark → white → cream |

Interaction details reproduced: the underline that wipes in from the left on
buttons, the nav underline that grows from `width: 0`, the folder mega-menus,
the teal `#86b3b3` closing bar, and the handwritten all-caps accent word
(*thrive*, *help*, *expertise*, *specialties*, *you*) set inside headings.

### Two deliberate substitutions

**Fonts.** The source uses **Beaufort Pro** and **Gravesend Sans**, both
licensed Adobe Fonts. They cannot be redistributed, so the clone uses
**Newsreader** (display) and **DM Sans** (body) — chosen for the same light,
high-contrast, editorial character. The handwritten accent uses **Caveat**.

**Photography.** The source's photographs belong to that practice and are not
reused. Image slots are filled with neutral `Plate` placeholders at the exact
measured aspect ratios, so layout and rhythm are judged accurately without
shipping another client's assets. This is the one deliberate difference from
the original and it is called out here rather than hidden.

---

## Part 2 — the redesign

### Colour

The palette is drawn from Maya's own office photographs — exposed brick, honey
wood floors, oatmeal textiles, warm afternoon light:

| Role | Value | Source in the imagery |
| --- | --- | --- |
| Primary | `#1E3A34` deep pine | grounding, calm |
| Secondary | `#A85F45` terracotta | the exposed brick wall |
| Accent | `#C9975B` sand gold | the wood floors and low sun |
| Surface | `#F7F2EA` oatmilk / `#FFFDFA` porcelain | the sofas, rugs, curtains |

Muted on dark only. Every pairing used for text clears WCAG AA.

### Type

**Fraunces** (display) + **Karla** (body) — a warmer, softer pairing than the
clone, with a real contrast in the italic accent treatment: the template's
handwritten marker word becomes a Fraunces italic in terracotta.

### Content

Every line of copy is derived from the supplied profile. The template ships with
sections for couples, children and teens, dissociation and special-needs
parenting — **Maya's practice is none of those things**, so each of those
blocks was replaced rather than reworded. Her actual work is adults with
anxiety, panic, trauma and burnout, which reshaped:

- **Who I work with** — Anxiety & Panic · Burnout & Perfectionism · Trauma
- **Services** — Anxiety & Panic Therapy · Trauma Recovery with EMDR · Burnout & Perfectionism, plus a fourth *How I Work* card so the template's four-up grid survives intact
- **Expertise pills** — rebuilt from her modalities (CBT, EMDR, mindfulness, body-based work) and her actual presentations

### SEO

Primary target **"anxiety therapy Santa Monica"**, with secondary terms for
trauma and EMDR in Santa Monica / Los Angeles, burnout, and telehealth in
California. Keywords are worked into the H1, section headings and body copy
naturally rather than stuffed. Title tag, meta description and keywords are set
through the Next.js Metadata API; the page is a single static route, so there
are no crawl issues.

### Imagery

Three supplied assets — her portrait and both office photographs — carry the
photographic weight, including the portrait in the hero and the bio. The
remaining image slots use **`ArtPanel`**: abstract, palette-driven CSS
compositions (breathing rings, rising arcs, layered strata, window light) with
each one bound to a specific service. They are generated rather than stock
precisely because random stock photography was the thing to avoid — and it
means every panel is on-palette and intentional by construction.

---

## Part 3 — "Our Office"

A section with no equivalent in the source template, slotted between Services
and FAQs. It uses both office photographs from the profile, with a heading,
supporting copy drawn from her description of the room ("quiet, private space
designed to feel calm and grounding, with natural light"), a detail list
covering privacy and access, and the practice address.

The two images are deliberately asymmetric — one large, one overlapping and
inset — to break the uniform card rhythm used elsewhere on the page.

---

## Architecture

```
src/
  app/
    layout.tsx            fonts, metadata
    page.tsx              redesign
    clone/page.tsx        Part 1 clone
    globals.css           the whole design-token system
  components/
    ui/                   shared primitives (Container, ArtPanel, Logo)
    clone/                Part 1 sections
    site/                 Part 2 & 3 sections
  content/
    conejo.tsx            clone copy
    maya.tsx              every line of profile-derived copy
```

**One token system, two themes.** Semantic values are declared in `:root` /
`.theme-conejo` / `.theme-maya` and mapped into Tailwind with `@theme inline`,
so a single utility like `text-ink` resolves to a different colour per theme.
Restyling the whole site is a class swap, and the same layout code could be
re-skinned for another client without touching components.

**Content is data, not markup.** Copy lives in `src/content/`, so profile
changes are a content edit rather than a component edit.

**Accessibility.** Skip links, visible focus rings, labelled accordions with
`aria-expanded` / `aria-controls`, decorative art hidden from the tree, and
`prefers-reduced-motion` honoured globally.

Verified with an automated pass rather than by eye: every text node checked
against WCAG AA (the checker resolves `oklab()` and alpha-composites each
painted ancestor, so translucent surfaces are measured correctly), heading
levels confirmed sequential, all in-page anchors resolve, all images carry
`alt`, no console errors, and the mobile menu confirmed to open, close and
release its scroll lock. Reduced motion is checked *functionally* — the
underline is sampled mid-transition and snaps to its end state immediately.

---

## Before you submit — replace these

These are placeholders and must be swapped for the practice's real details:

- `hello@dr-mayareynolds.com` and `(310) 555-0148`
- The office address, taken verbatim from the profile
- The form / booking links are `href="#"` anchors — wire them to a real
  scheduler before going live

## Deploying

Works on Vercel or Netlify as-is; both routes are static.

```bash
npx vercel        # or: netlify deploy --prod
```

Remember to submit **before the 6-day window closes** — the deadline is enforced
automatically and late work may not be reviewed.
