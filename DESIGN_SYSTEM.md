# Design System — Ashley Xie Portfolio

All visual values are defined in `css/tokens.css` as CSS custom properties. Every `styles.css` and `case-study.css` rule references a token rather than a hardcoded value.

Load order in HTML `<head>`:
```html
<link rel="stylesheet" href="css/tokens.css" />
<link rel="stylesheet" href="css/styles.css" />
<!-- Case-study pages only: -->
<link rel="stylesheet" href="css/case-study.css" />
```

---

## Color Palette

### Brand Colors

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#FCFEF9` | Page background, nav fill, footer background |
| `--color-off-white` | `#F9FAFC` | Surface cards, stat backgrounds, placeholders, step image boxes |
| `--color-light-blue` | `#E3E9F9` | Accent-tint hover fill for slide button, ghost button hover |
| `--color-accent` | `#274CAB` | Primary CTA color — buttons, active nav underlines, section labels, links, borders |
| `--color-accent-dark` | `#1c3a87` | Hover state for accent color (`.hl-navy`, button hover) |
| `--color-green` | `#5a7a1a` | Green tag text (`tag--green`) |
| `--color-red` | `#BF3E3E` | Error / red tag text (`tag--red`), `.hl-red` |
| `--color-text` | `#0D0D0D` | Primary body text, headings |
| `--color-text-muted` | `#4F6080` | Secondary / muted text, metadata labels, card descriptions |
| `--color-border` | `#E8ECF2` | Default borders and dividers throughout |

### Extended / One-off Colors

| Token | Value | Used for |
|---|---|---|
| `--color-white` | `#ffffff` | Pure white — card backgrounds, meta items, project nav cards |
| `--color-black` | `#000000` | Nav logo color, hero statement text |
| `--color-tag-border` | `#EEF0EB` | Default tag border color |
| `--color-tag-green-bg` | `#EAF4D4` | Green tag (`tag--green`) background |
| `--color-tag-red-bg` | `#FAEDED` | Red tag (`tag--red`) background |
| `--color-thumb-bg` | `#ebebeb` | Mini-card thumbnail placeholder background |
| `--color-warm` | `#FAF3E9` | Tan / warm container background (gif containers, feature wraps) |
| `--color-border-dark` | `#D0D5DD` | Stronger border for `cs-step-img-box--wide-flex` |
| `--color-placeholder` | `#999999` | Placeholder label text color |
| `--color-hl-green` | `#76980F` | Highlighted keyword — green (`.hl-green`) |

### Semantic Transparent Values

| Token | Value | Used for |
|---|---|---|
| `--color-nav-bg` | `rgba(252, 254, 249, 0.92)` | Nav bar backdrop (frosted glass effect) |
| `--color-shadow-accent` | `rgba(39, 76, 171, 0.25)` | Primary button hover shadow |
| `--color-shadow-xs` | `rgba(0, 0, 0, 0.02)` | Hairline / subtle box shadow on tags and cards |
| `--color-shadow-sm` | `rgba(0, 0, 0, 0.06)` | Card hover / project-nav hover shadow |
| `--color-shadow-md` | `rgba(0, 0, 0, 0.08)` | Mobile nav dropdown shadow |

**Guidelines:**
- Always prefer `--color-accent` over `--color-accent-dark` for initial/resting states; use `--color-accent-dark` only for `:hover` and `:active`.
- Use `--color-text` for headings and emphasis, `--color-text-muted` for captions, metadata, and secondary content.
- Do not introduce raw hex or `rgba()` values in CSS — add a new token to `tokens.css` if a new color is needed.

---

## Typography

### Font Families

| Token | Value | Used for |
|---|---|---|
| `--font` | `'Lexend', sans-serif` | All body copy, UI labels, buttons |
| `--font-serif` | `'Instrument Serif', serif` | Display headings, nav logo, footer headings, hero line |

### Type Scale

All sizes are exact pixel matches to the values used in the original CSS. No values were rounded.

| Token | Value | Used for |
|---|---|---|
| `--text-xs` | `12px` | Tags, section labels (`section-label`), card arrow text, scroll hint, meta labels |
| `--text-2xs` | `13px` | Case study sidenav links, project-nav label, img placeholder label |
| `--text-sm` | `14px` | Buttons, card description floor, mini-card button text, experience role (mobile) |
| `--text-base` | `16px` | Body text, meta values, card description ceiling |
| `--text-md` | `18px` | Hero aside/statement/sub, case study section paragraphs, list items, page-hero subtitle |
| `--text-lg` | `22px` | Projects section heading, case study h3 |
| `--text-xl` | `32px` | Section title, case study h2, Lennar/Mark Spain page h3 |
| `--text-2xl` | `48px` | Stat callout numbers, hero headline (`hero__line1`) |
| `--text-3xl` | `72px` | Reserved / declared but not yet actively used |
| `--text-mini-title` | `17px` | Mini-card title text |
| `--text-mini-desc` | `15px` | Mini-card description text |
| `--text-serif-sm` | `20px` | Footer social links, footer nav links, footer separator |
| `--text-serif-md` | `22px` | Footer tagline and col-heading at narrow viewport (≤1200px) |
| `--text-serif-lg` | `26px` | Nav logo, footer tagline, footer col-headings, footer links (default) |
| `--text-serif-xl` | `41px` | About page label heading |
| `--text-serif-2xl` | `48px` | Alias for hero line1 (same value as `--text-2xl`) |

**Note:** `--text-serif-*` tokens carry semantic meaning (Instrument Serif display sizes) and are separate from the main Lexend scale, even though some numeric values coincide (e.g., `--text-2xl` and `--text-serif-2xl` are both 48px).

### Font Weights

| Token | Value | Used for |
|---|---|---|
| `--weight-light` | `300` | Body paragraphs, descriptions, muted secondary text |
| `--weight-regular` | `400` | Default text, nav links, buttons at rest |
| `--weight-medium` | `500` | Labels, section headings, tags, card titles |
| `--weight-semibold` | `600` | Section titles, stat numbers, case study h2 |

### Line Heights

| Token | Value | Used for |
|---|---|---|
| `--leading-tight` | `1.1` | Large display headings (`cs-hero__title`) |
| `--leading-snug` | `1.2` | Hero text, about bio, experience list |
| `--leading-normal` | `1.3` | Card titles, sub-headings |
| `--leading-base` | `1.4` | Sidenav links |
| `--leading-relaxed` | `1.65` | Body text (global default), quotes |
| `--leading-loose` | `1.7` | List items, hero sub |
| `--leading-looser` | `1.8` | Case study section paragraphs |

### Letter Spacing

| Token | Value | Typical use |
|---|---|---|
| `--tracking-tighter` | `-0.03em` | Large display headings, page-hero h1 |
| `--tracking-tight` | `-0.02em` | Section titles, card titles, h2 |
| `--tracking-snug` | `-0.01em` | Sub-headings (`cs-h3-sub`), step h3 |
| `--tracking-normal` | `0` | Default / no adjustment |
| `--tracking-wide` | `0.01em` | Tags letter-spacing, placeholder label |
| `--tracking-wider` | `0.03em` | Card arrow |
| `--tracking-widest` | `0.04em` | Step numbers |
| `--tracking-label` | `0.05em` | Scroll hint text |
| `--tracking-caps` | `0.06em` | Projects heading uppercase |
| `--tracking-caps-md` | `0.08em` | Meta labels, project-nav label, sidenav link |
| `--tracking-caps-lg` | `0.1em` | Section label, Lennar/Mark Spain eyebrow h2 |

---

## Spacing Scale

Based on a 4 px grid. Named tokens map to the numbered scale for easy cross-reference.

| Token | Value | Named alias | Used for |
|---|---|---|---|
| `--space-0` | `2px` | — | Footer social link underline bottom offset |
| `--space-1` | `4px` | — | Fine padding/margin, gap, border-bottom of headings |
| `--space-1h` | `6px` | — | Nav toggle padding; tags gap; card__tags gap |
| `--space-2` | `8px` | `--space-xs` | Toggle gap, tag y-padding, card arrow gap |
| `--space-3` | `12px` | — | iter-phones gap, image figcaption margin, list item spacing |
| `--space-4` | `14px` | — | Button padding-y, page-loader gap |
| `--space-5` | `16px` | `--space-sm` | Standard UI gaps, mini-cards grid gap, card tags gap |
| `--space-5h` | `18px` | — | cs-cards grid gap |
| `--space-5q` | `22px` | — | cs-list li left padding (to clear the em-dash bullet) |
| `--space-6` | `20px` | — | Card body padding-top, step-img-box padding, cs-project-nav info padding |
| `--space-7` | `24px` | `--space-md` | Container px default, cs-split gap, cs-step padding, cs-hero tags gap |
| `--space-8` | `28px` | — | Button padding-x, work-grid gap, footer star image size |
| `--space-9` | `32px` | — | Footer col margin (at 1300px), scroll-hint line width |
| `--space-10` | `36px` | — | Page loader star size |
| `--space-11` | `40px` | — | Nav links gap, footer section gaps, footer divider→col margin |
| `--space-12` | `48px` | `--space-lg` | Hero layout gap, cs-meta gap, cs-steps margin |
| `--space-13` | `56px` | — | Hero star size, case-study default container-px, about-grid gap (1200px) |
| `--space-14` | `60px` | — | cs-hero__split gap |
| `--space-15` | `64px` | — | Footer divider + first col margin-left |
| `--space-16` | `80px` | `--space-xl` | About-split gap, exp-split gap, cs-step-img-box--wide-flex top padding, default --space-xl |
| `--space-17` | `84px` | — | Projects grid row gap |
| `--space-18` | `96px` | — | --space-2xl at 768px breakpoint |
| `--space-19` | `120px` | `--space-2xl` | Default --space-2xl, about/exp section padding |
| `--space-20` | `160px` | — | Reserved |
| `--underline-offset` | `-3px` | — | `bottom` value for decorative link underlines (nav, footer) |

**Responsive overrides** (already in `:root` media queries within `styles.css`):

| Breakpoint | Token | Value |
|---|---|---|
| ≤1200px | `--container-px` | `20px` |
| ≤1200px | `--space-xl` | `56px` |
| ≤1200px | `--space-2xl` | `72px` |
| ≤768px | `--container-px` | `16px` |
| ≤768px | `--space-xl` | `64px` |
| ≤768px | `--space-2xl` | `96px` |
| ≤480px | `--container-px` | `20px` |
| ≤480px | `--space-xl` | `56px` |
| ≤480px | `--space-2xl` | `80px` |
| Case study pages | `--container-max` | `1240px` |
| Case study pages | `--container-px` | `56px` (→40px→28px) |

**Guidelines:**
- Always pick the nearest named token (`--space-xs` through `--space-2xl`) when the value matches.
- Use numbered tokens (`--space-1`, `--space-6`, etc.) for values that fall between the named aliases.
- Never hardcode `px` spacing values — add a new numbered token if the value doesn't yet exist in the scale.

---

## Border Widths

| Token | Value | Used for |
|---|---|---|
| `--border-1` | `1px` | Standard card, nav, and element borders |
| `--border-2` | `1.5px` | Ghost button border, slide-button border, wide-flex step box border |
| `--border-3` | `2px` | Nav underline, heading underlines, focus ring |
| `--border-4` | `3px` | Pull-quote left border, primary button focus ring |

---

## Border Radii

| Token | Value | Used for |
|---|---|---|
| `--radius-2xs` | `2px` | Link underlines (nav, footer), toggle hamburger bars |
| `--radius-xs` | `4px` | Focus-visible global style |
| `--radius-sm` | `8px` | Mini-card button, mini-card thumb (mobile), step-img-box image |
| `--radius-xl` | `10px` | Mini-card thumbnail (desktop) |
| `--radius-card` | `12px` | Project card thumbnail, card focus ring |
| `--radius-md` | `16px` | Standard component radius — mini-cards, meta items, stat boxes, cs-img-frame, cs-media |
| `--radius-lg` | `24px` | Large containers — cs-cover, cs-gif-container, cs-style-phones, cs-features-wrap |
| `--radius-pill` | `100px` | Buttons (`.btn`), tags (`.tag`) |

**Note:** `--radius-xl` (10px) sits between `--radius-sm` and `--radius-md` and is used only for mini-card thumbnails at desktop size.

---

## Transitions

| Token | Value | Used for |
|---|---|---|
| `--ease` | `0.22s ease` | Default micro-interaction — nav links, footer links, card arrows, back link |
| `--ease-fast` | `0.2s ease` | Hamburger toggle spans, sidenav link transitions |
| `--ease-medium` | `0.3s ease` | Arrow rotation on slide button hover |
| `--ease-slow` | `0.35s ease` | Page loader fade-in/out |
| `--ease-slide` | `0.38s ease` | Slide-button color / border-color transition |
| `--ease-hover` | `0.4s ease` | Card thumbnail zoom on hover |
| `--ease-cubic` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function only (no duration) |
| `--ease-slide-full` | `0.38s cubic-bezier(0.4, 0, 0.2, 1)` | Slide-button fill (background scaleX) transition |

---

## Layout Tokens

| Token | Value | Used for |
|---|---|---|
| `--container-max` | `1440px` (main) / `1240px` (case study) | Max page width |
| `--container-px` | `24px` (responsive) | Horizontal page padding |
| `--nav-h` | `68px` | Fixed nav bar height; used in `padding-top` calculations |

---

## Effects

| Token | Value | Used for |
|---|---|---|
| `--blur-nav` | `blur(16px)` | Nav bar `backdrop-filter` and `-webkit-backdrop-filter` |

---

## Adding New Tokens

1. Define the new custom property in `css/tokens.css` under the appropriate section.
2. Give it a name that matches the naming convention for that category (e.g., `--color-*`, `--space-*`, `--text-*`, `--radius-*`, `--ease-*`).
3. Reference it in `styles.css` or `case-study.css` — never add a raw px/hex value directly to those files.
4. Document the new token in this file with its value and intended usage.

## Rounding Notes

The spacing and typography scales were built by mapping every existing hardcoded value directly. No values were silently changed. The only "rounding" applied is conceptual grouping into a scale — each token resolves to the exact pixel or color value that was previously hardcoded:

- `--space-4: 14px` (button padding-y) was 14px in the original, not rounded to 12px or 16px.
- `--text-serif-xl: 41px` (about-label) was 41px in the original, not rounded to 40px.
- `--text-2xs: 13px` (sidenav, project-nav label) was 13px in the original, not rounded to 12px or 14px.
- `--text-mini-title: 17px` (mini-card title) was 17px in the original, not rounded to 16px or 18px.
- `--text-mini-desc: 15px` (mini-card desc) was 15px in the original, not rounded to 14px or 16px.
- `--radius-xl: 10px` (mini-card thumb) was 10px in the original, not rounded to 8px or 12px.
- `--space-17: 84px` (projects grid gap) was 84px in the original, not rounded to 80px.
- `--space-5h: 18px` (cs-cards gap) was 18px in the original, not rounded to 16px or 20px.
- `--space-5q: 22px` (cs-list indent) was 22px in the original, not rounded to 24px.
- `--space-1h: 6px` (nav toggle padding, card/tags gaps) was 6px in the original, not rounded to 4px or 8px.
