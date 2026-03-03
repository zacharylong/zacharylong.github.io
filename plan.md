# FF6 Landing Page Visual Enhancement Plan

## Problem
The landing page doesn't feel like FF6 — no sprites (missing PNG files), no world map (missing PNG), no icons, and non-FF6 quotes. The subpages look great but the landing needs more visual identity.

## Changes (3 files)

### 1. `src/pages/index.astro` — Landing Page Overhaul
- **Replace broken `<img>` Terra sprite** with a pure CSS pixel-art character (box-shadow technique — zero image dependencies)
- **Add inline SVG pixel-art icons** to each of the 4 menu items:
  - ⚔ Sword/Shield → Narshe/Resume
  - 📖 Open Book → Opera House/Library
  - 🎭 Star/Masks → Jidoor/Theater
  - ✈ Airship → Blackjack/Creations
- **Remove** the Stormlight/Malazan quote box entirely
- **Restyle social links** as an FF6 "Items" inventory (inside an ff-box with menu-style layout)
- **Add ornamental crystal dividers** between sections
- **Add floating sparkle/crystal particles** (5 small animated CSS elements)
- **Replace desktop hint** with blinking "— Select a destination —" prompt
- **Replace world-map-bg** dependency: use CSS gradient horizon instead of missing PNG

### 2. `src/styles/ff6.css` — New Visual CSS (~180 new lines)
- `.terra-pixel-sprite` — CSS box-shadow pixel art (16×16 green-haired, red-caped character scaled up)
- `.menu-icon` — Styling for inline SVG icons in menu items (glow on hover)
- `.ff-divider` — Ornamental horizontal line with glowing cyan diamond center
- `.sparkle-field` + `.sparkle` — Fixed-position floating crystal particles with drift animation
- `.press-start` — Blinking text prompt
- `.social-inventory` + `.item-icon` — FF6 inventory-style social links
- Enhanced `.intro-box h1` — Cyan text-shadow glow, wider letter-spacing
- Corner bracket decorations on `.intro-box`
- Replace the broken `url('/images/ff6-world-map.png')` with a CSS blue gradient horizon
- Mobile responsive adjustments for all new elements

### 3. `src/pages/library.astro` — Receive Migrated Quotes
- Add "Favorite Passages" section at the bottom with the two quotes (Knights Radiant + Bridgeburners) styled in an ff-box

## Key Design Decisions
- **All visuals are pure CSS/SVG** — no external image file dependencies
- **CSS pixel art** uses the box-shadow technique (1px element, ~100 colored shadows)
- **Sparkles use transform/opacity only** — GPU-composited, no layout thrashing
- **Mobile-first** — sprites and icons scale down gracefully at 480px
