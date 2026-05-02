# Akshit Traders Website Design

## Visual Target
The site recreates the supplied Akshit Traders landing-page look while expanding it into a full static multi-page website. The design keeps the white industrial-clean layout, deep emerald brand color, orange fire accents, compact cards, and cropped biomass imagery.

## Navigation System
Header navigation is shared across every page: Home, About Us, Products, Industries, Quality, Sustainability, Blog, and Contact. The active page receives the same dark green underline treatment used on the original landing screenshot.

## URL Map
- Home: `index.html`
- About: `about.html`
- Products: `products.html` plus four product detail pages
- Industries: `industries.html`
- Biomass Fuel Solutions: `biomass-fuel-solutions.html`
- Quality: `quality-specifications.html`
- Sustainability: `sustainability.html`
- Logistics: `logistics-supply.html`
- Blog: `blog.html` plus five article pages
- FAQs: `faqs.html`
- Contact and quote forms: `contact.html#quote`
- Legal: privacy, terms, shipping, return/cancellation, and disclaimer pages

## CTA Behavior
All quote, pricing, and sales CTAs land on `contact.html#quote`. Product cards open product detail pages. Blog cards open article pages. The product specs button downloads `assets/akshit-traders-product-specs.pdf`, currently a placeholder PDF.

## Mobile Responsive System
Mobile screens use a simplified sticky top header with the logo and quote CTA only. The full desktop navigation is hidden below `721px`, and a fixed five-item bottom nav provides buyer-focused movement: Home, Products, Industries, Quote, and Contact. Page content includes extra bottom safe spacing so forms, CTAs, and footer links are not covered by the fixed nav.

## Desktop Scaling
Desktop uses full-width page sections with percentage gutters rather than the original screenshot-width canvas. The page shell is `100%` wide, hero content and imagery use percentage columns, and section spacing is based on a shared percentage gutter so the layout expands with the browser instead of staying locked to `778px`.

## Typography And UX Scale
The final CSS uses a shared fluid type scale instead of screenshot-sized one-off font values. Body copy, buttons, cards, forms, tables, blog summaries, and footer links inherit readable `clamp()`-based sizes. The same override layer also normalizes section spacing, card padding, image proportions, CTA sizing, and mobile tap targets across all pages.

## Current CSS Architecture
`styles.css` is now a single clean cascade rather than old screenshot rules plus later overrides. It is organized around global tokens, base elements, shared components, page sections, mobile-first defaults, desktop rules, and tablet rules. The site keeps static HTML/CSS only; Bootstrap and Tailwind are intentionally not used for this pass.

## Reusable Page Patterns
Inner pages use an `inner-hero` block, card grids, specification tables, static forms, FAQ details, and the same CTA band/footer system as the landing page. Forms use `mailto:info@akshittraders.com` until a backend is added.

## Colors And Typography
Primary green `#003d31`, secondary green `#004434`, icon green `#4b7f2b`, accent orange `#f48518`, text `#10221e`, border `#e8ece7`, and Inter with Arial/Helvetica fallback.
