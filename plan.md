# Implementation Plan: Home Page UI & Design Refinement

This plan details the steps to address UI spacing, design inconsistencies, and visual hierarchy issues on the Akshit Traders home page.

## 1. Design System & Global Styles
- [ ] **Typography Refinement**:
    - Adjust font weights. Currently, `800` is overused. Use `700` for main headings and `600` for subheadings to improve readability.
    - Standardize line-heights across sections.
- [ ] **Color Palette Polish**:
    - Ensure consistent use of `--green-950` for primary backgrounds and `--green-600` for accents.
    - Soften gradients to avoid a "harsh" look.
- [ ] **Spacing Tokens**:
    - Standardize `--section-y` to ensure consistent breathing room between all major sections.
    - Increase `--gutter` on large screens for a more premium feel.

## 2. Header & Navigation
- [ ] **Sticky Header**: Improve the backdrop-filter and ensure the border-bottom is subtle.
- [ ] **Desktop Nav**: Increase spacing between links.
- [ ] **Mobile Nav**: Refine the floating bottom nav with better blur and shadow.

## 3. Hero Section
- [ ] **Text Size**: Reduce the hero heading size slightly on desktop to prevent it from feeling overwhelming.
- [ ] **Image Integration**: Fix the hero image bleed. Ensure it aligns better with the grid and doesn't look "stuck" on the right.
- [ ] **Badges**: Adjust the position and padding of the hero badges. Increase the icon size for better visibility.
- [ ] **Mobile Hero**: Reorder elements to show a glimpse of the hero image above the fold if possible, or improve the text-to-image transition.

## 4. Section-Specific Fixes
- [ ] **About & Products**:
    - Standardize card heights in the product grid.
    - Fix alignment of icons in the `mini-card` components.
- [ ] **Quality & Sustainability**:
    - Improve the layout of the `split` section. Currently, the text-to-image ratio feels off.
    - Enhance the `future-panel` background image opacity and positioning.
- [ ] **Logistics & Testimonials**:
    - Increase vertical spacing between these sections.
    - Ensure testimonials have consistent avatar sizing and text alignment.

## 5. CTA & Footer
- [ ] **CTA Band**:
    - Redesign the layout to prevent the pellets image from looking cut off.
    - Align buttons to a consistent grid.
    - Improve the radial gradient for a more "glassmorphism" or "premium" effect.
- [ ] **Footer**:
    - Improve the hierarchy of footer links.
    - Fix the "legal" links section at the bottom (Privacy Policy, etc.) which is currently too crowded.
    - Ensure the logo in the footer is properly sized and aligned.

## 6. Responsive Polish
- [ ] **Mobile Spacing**: Review and adjust padding for all sections on mobile (375px) to ensure content isn't too cramped.
- [ ] **Tablet Breakpoint**: Fine-tune the 721px - 1050px range which currently looks a bit awkward in the CSS.
