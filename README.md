# YB EVERYDAY / JEDEN — RADIANCE

<p align="center">
  <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop" alt="YB EVERYDAY / JEDEN Banner" width="100%" style="max-height: 480px; object-fit: cover; border-radius: 4px;" />
</p>

<p align="center">
  <strong>Contemporary Luxury Fashion House · Fine Jewelry · L'Optique · Everyday Objects of Discernment</strong>
</p>

<p align="center">
  <em>“Luxury without unnecessary noise. Objects of personal expression, precision-engineered for the cadence of daily life.”</em>
</p>

<p align="center">
  <a href="https://github.com/codelightdev/YB-Everyday-Jeden"><img src="https://img.shields.io/badge/Release-v1.1.0-gold?style=for-the-badge&logo=github&color=B89B5E&labelColor=0A0A0A" alt="Release" /></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18.x-black?style=for-the-badge&logo=react&color=0A0A0A&labelColor=171717" alt="React 18" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&color=646CFF&labelColor=0A0A0A" alt="Vite" /></a>
  <a href="https://greensock.com/gsap/"><img src="https://img.shields.io/badge/GSAP-3.x-88CE02?style=for-the-badge&logo=greensock&color=88CE02&labelColor=0A0A0A" alt="GSAP 3" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-Deployment-black?style=for-the-badge&logo=vercel&color=0A0A0A&labelColor=171717" alt="Vercel" /></a>
</p>

---

## ✦ Atelier Heritage & Creative Direction

**YB EVERYDAY / JEDEN** is a contemporary luxury house that operates at the vital crossroads of fine jewelry, sculpted *L'Optique* eyewear, horology, and everyday lifestyle objects. Conceived between the coastal cosmopolitan dynamism of **Lagos** and international European ateliers in **London** and **Paris**, the house rejects the outdated tropes of legacy luxury—velvet cases, artificial scarcity, and exorbitant markup.

At the core of the maison is the thesis of **RADIANCE**:
> *Radiance is not flashiness; it is how natural light interacts with a metallic plane, how shadow carves depth into an acetate frame, and how the wearer feels upon glancing in a mirror before stepping out.*

---

## ✧ Key Features

### 1. The Jeden Series (Signature Permanent Collection)
- Rebranded signature line honoring **JEDEN** (*"the singular one"*): objects crafted for continuous, daily wear rather than isolated occasions.
- Permanent pieces engineered with anatomical balance, solid precious metals (18K Yellow Gold, Sterling Silver), and tactile weight.

### 2. L'Optique & Solaire Interactive Swiper
- Dedicated bespoke carousel component (`OptiqueSwiper.jsx`) replacing awkward pinned horizontal scrolls.
- **Dynamic Card Physics**: Fluid drag-to-slide with resistance, touch momentum, and keyboard navigation.
- **Micro-Specifications**: Interactive hover tray with instant Quick View specifications and direct Add-to-Bag triggers.
- **Slide Progression**: Real-time slide counter (`01 / 05`) with synchronized gold progress bar.

### 3. Cinematic Motion System
- **Polygon Mask Reveals**: Geometric slit-reveals easing into place via GSAP ScrollTrigger as imagery enters the viewport.
- **Typography Kerning Expansion**: Headlines smoothly slide upward while relaxing letter-spacing for editorial drama.
- **Radiance Shimmer Sweep**: Unexpected subtle luxury reflection—a metallic golden beam sweeps across cards on hover, capturing light like polished gold or high-grade Japanese acetate.
- **Parallax Float Depth**: Floating coordinates (`06°27'N · 03°23'E`) glide subtly against foreground editorial elements.

### 4. Balanced & Ultra-Responsive Navigation
- **Desktop Grid**: 3-column architecture (`auto 1fr auto`) featuring the signature monogram, centered editorial links (`SHOP`, `JEDEN`, `L'OPTIQUE`, `COLLECTIONS`, `JOURNAL`, `ABOUT`), and action triggers.
- **Mobile Grid**: Centered screen logo with fluid `1fr auto 1fr` columns, accessible 44px tap targets, high-contrast SVG drop shadows, and responsive animated notification badges with count caps (`99+`).
- **Mobile Menu Drawer**: Staggered GSAP entrance with quick department shortcuts and concierge access.

### 5. Full-Spectrum SEO & Social Optimization
- **Complete Open Graph Suite**: `og:site_name`, `og:title`, `og:description`, `og:image` (1200x630), `og:image:secure_url`, `og:url`, `og:locale`, and `og:type` with rich extensions for products (`product:price:amount`, `product:availability`) and editorial articles (`article:published_time`, `article:author`).
- **Twitter Cards**: High-impact `summary_large_image` with `@ybeveryday` attribution.
- **Schema.org Structured Data**: Automatic JSON-LD injection for `Organization`, `WebSite`, `Product`, and `Article` rich snippets.
- **Crawler Optimization**: Pre-rendered meta tags in `index.html` ensuring direct scrapers (WhatsApp, iMessage, Twitterbot, LinkedIn, Facebook) parse metadata without executing client-side JS.
- **Canonicalization & Privacy**: Enforced canonical URLs with automatic `noindex` directives on private account and bag views.

### 6. Client Salon & E-Commerce Engine
- **Client Cart & Free Shipping Stepper**: Live threshold counter (₦150,000 NGN) with promo discount engine (`RADIANCE10`).
- **Saved Wishlist Vault**: One-click move-to-bag with localStorage persistence.
- **VIP Client Circle Portal**: Order tracking with simulated courier manifests, saved addresses, and concierge chat.
- **Private Concierge**: Salon appointment booking across Lagos, London, and Paris.

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Core** | [React 18](https://reactjs.org/) + [Vite 6](https://vitejs.dev/) |
| **Routing** | [React Router DOM 6](https://reactrouter.com/) (Browser routing with SPA rewrites) |
| **Motion & Physics** | [GSAP 3](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/) |
| **SEO & Head Management** | [React Helmet Async](https://github.com/staylor/react-helmet-async) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Design Tokens & Styling**| CSS Variables, Modern Fluid Clamp Typography, Glassmorphism Backdrop Filters |
| **Deployment** | [Vercel](https://vercel.com/) with native SPA route fallbacks (`vercel.json`) |

---

## 📁 Architecture & File Structure

```text
YB-Everyday-Jeden/
├── public/                     # Static assets & favicon
├── src/
│   ├── animations/             # GSAP timelines & cinematic scroll engines
│   │   └── pageAnimations.js   # initCinematicScroll, animateHero, animatePageIn
│   ├── components/
│   │   ├── common/             # Reusable atomic luxury components
│   │   │   ├── Button.jsx      # Luxury magnetic buttons with cursor text
│   │   │   ├── CustomCursor.jsx# Subtle follow cursor with dynamic contextual state
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── SeoMeta.jsx     # Complete OpenGraph, Twitter & Schema.org JSON-LD
│   │   │   └── YBLogo.jsx      # Geometric monogram & full brand lockup
│   │   ├── layout/             # Application chrome
│   │   │   ├── CartDrawer.jsx  # Slide-over quick bag
│   │   │   ├── Footer.jsx      # Multi-column footer & dispatch subscription
│   │   │   ├── MobileNav.jsx   # Fullscreen mobile editorial navigation
│   │   │   ├── Navbar.jsx      # 3-Column responsive navigation with dynamic badges
│   │   │   └── SearchModal.jsx # Instant catalog autocomplete modal
│   │   └── shop/               # E-commerce shopping modules
│   │       ├── OptiqueSwiper.jsx# High-end interactive frame carousel
│   │       ├── ProductCard.jsx # Product card with radiance shimmer sweep
│   │       ├── ProductGrid.jsx # Responsive catalog grid
│   │       └── QuickViewModal.jsx
│   ├── context/                # Client state management
│   │   ├── AuthContext.jsx     # Client VIP authentication & order history
│   │   ├── CartContext.jsx     # Shopping bag & quantity adjustments
│   │   └── WishlistContext.jsx # Wishlist persistence
│   ├── data/                   # Editorial & product catalogs
│   │   ├── collections.js      # Lookbooks (Jeden, Radiance, After Dark, Atelier Optique)
│   │   ├── journal.js          # Magazine essays & styling guides
│   │   └── products.js         # Fine jewelry, L'Optique, and accessories data
│   ├── layouts/
│   │   └── MainLayout.jsx      # Root shell with smooth scroll & preloader
│   ├── pages/                  # Route views
│   │   ├── Home.jsx            # Flagship experience
│   │   ├── Shop.jsx            # Catalog filtering & sorting
│   │   ├── ProductDetails.jsx  # PDP with gallery, swatches, accordions
│   │   ├── Collections.jsx     # Lookbook index
│   │   ├── CollectionDetails.jsx# Lookbook campaign story
│   │   ├── About.jsx           # Atelier manifesto & philosophy
│   │   ├── Journal.jsx         # Magazine index
│   │   ├── JournalArticle.jsx  # Editorial essay reading view
│   │   ├── Contact.jsx         # Private salons & VIP concierge
│   │   ├── Cart.jsx            # Shopping bag & simulated checkout
│   │   ├── Wishlist.jsx        # Saved objects vault
│   │   └── Account.jsx         # Client circle order management
│   ├── styles/
│   │   ├── index.css           # Global luxury utilities & micro-animations
│   │   └── variables.css       # Obsidian, Ivory, and Gold design tokens
│   ├── App.jsx                 # Route declarations & context wrappers
│   └── main.jsx                # Application root entry
├── index.html                  # HTML5 shell with pre-rendered SEO & preconnects
├── vercel.json                 # Vercel deployment rewrites for SPA
└── vite.config.js              # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/codelightdev/YB-Everyday-Jeden.git
   cd YB-Everyday-Jeden
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   The compiled static assets will be output to `/dist`.

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

The application is pre-configured for zero-configuration continuous deployment on [Vercel](https://vercel.com/):

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **SPA Rewrites**: Handled automatically via `vercel.json`:
  ```json
  {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/index.html"
      }
    ]
  }
  ```

---

## 🎨 Design System Tokens

```css
:root {
  /* Brand Palette */
  --color-obsidian:     #0A0A0A;
  --color-charcoal:     #171717;
  --color-warm-white:   #FAF9F6;
  --color-soft-ivory:   #F5F2EA;
  --color-gold:         #B89B5E;
  --color-gold-light:   #CDB784;

  /* Typography Stack */
  --font-serif: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --font-sans:  'Inter', 'Manrope', -apple-system, sans-serif;
  --font-mono:  'Space Mono', monospace;
}
```

---

## 📄 License & Intellectual Property

© 2026 **YB EVERYDAY / JEDEN**. All rights reserved.  
Brand identity, photographic compositions, and designs are proprietary to YB EVERYDAY / JEDEN.
