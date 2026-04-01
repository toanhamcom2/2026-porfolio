# Design System Documentation

## 1. Overview & Creative North Star: "The Crimson Curator"
This design system is built to transform a personal portfolio into a high-end editorial experience. The Creative North Star is **"The Crimson Curator."** Unlike standard templates that rely on rigid grids and boxed-in content, this system treats the screen as a gallery space. It utilizes bold, monolithic typography, intentional asymmetry, and a deep, atmospheric red palette to create a sense of professional authority and avant-garde minimalism.

By leveraging the contrast between a fluid gradient background and solid, architectural components, we achieve a "floating" aesthetic. This design system rejects the "web-native" look of borders and buttons in favor of an "editorial-native" look—where negative space and tonal shifts guide the eye.

## 2. Colors
The color strategy centers on a sophisticated interplay of deep charcoals and vibrant, warm reds.

*   **The Primary Core:** The `primary` token (`#ffb3ac`) serves as our high-contrast anchor against the dark `surface`. Use it for CTAs and critical interactions.
*   **The "No-Line" Rule:** To maintain a premium feel, **1px solid borders are strictly prohibited** for sectioning or containment. Boundaries must be defined through background shifts—for example, placing a `surface_container_low` card against a `surface` background. Let the change in value define the edge, not a stroke.
*   **Surface Hierarchy & Nesting:** Use the five tiers of surface containers to create "physical" depth. An inner element (like a code snippet box) should sit on a `surface_container_high` while the parent section sits on `surface_container`. This creates a tactile, layered feel without visual clutter.
*   **The "Glass & Gradient" Rule:** While the user background is a red gradient, floating elements (modals, navigation bars) should use a "Glassmorphism" approach. Apply a semi-transparent `surface` color with a heavy `backdrop-blur` (20px+) to allow the underlying red gradient to bleed through softly, grounding the UI in its environment.
*   **Signature Textures:** For high-impact areas like hero buttons or "Contact" sections, use a subtle linear gradient transitioning from `primary` (`#ffb3ac`) to `primary_container` (`#d32f2f`). This adds a "soul" to the solid components, preventing them from feeling flat or sterile.

## 3. Typography
The typography is a dialogue between the brutalist geometry of **Space Grotesk** and the refined clarity of **Manrope**.

*   **Display & Headlines (Space Grotesk):** These are your "statement" pieces. Use `display-lg` and `display-md` with tight letter-spacing (-2%) to create a sense of scale. Headlines should feel architectural—often used as the primary visual element of a page.
*   **Body & Titles (Manrope):** Manrope provides the functional balance. It is clean, modern, and carries the "Professional" aspect of the brand. Ensure `body-lg` has ample line-height (1.6x) to facilitate long-form reading in the "Work" or "About" sections.
*   **Hierarchy as Identity:** Use extreme scale differences. A `display-lg` headline paired with a `label-sm` category tag creates an "Editorial" look that feels custom and intentional.

## 4. Elevation & Depth
In this design system, depth is a matter of light and shadow, not lines and boxes.

*   **The Layering Principle:** Stacking is the primary method of hierarchy. Use `surface_container_lowest` for the most recessed areas (like a footer) and `surface_bright` for the most prominent foreground elements.
*   **Ambient Shadows:** When an element must float (e.g., a hover state on a card), use an extra-diffused shadow.
*   *Formula:* Blur: 40px+, Spread: 0, Opacity: 4-8%.
*   *Color:* Use a tinted version of `on_surface` rather than pure black to keep the shadow feeling "atmospheric."
*   **The "Ghost Border" Fallback:** If a container absolutely requires a border for accessibility (e.g., input fields), use the `outline_variant` token at **15% opacity**. This "Ghost Border" provides a hint of structure without breaking the minimalist flow.
*   **Integrated Glass:** By using `backdrop-blur` on secondary navigation elements, the UI feels integrated into the background rather than pasted on top of it.

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (`#ffb3ac`) background with `on_primary` (`#680008`) text. Use `rounded-md` (0.375rem). The contrast here is the focal point of the page.
*   **Secondary:** Solid `secondary_container` (`#832a26`) with `on_secondary_container` (`#ff9e96`) text.
*   **Tertiary:** Ghost style. No background, `primary` text. Use for low-emphasis actions like "Cancel" or "View More."

### Cards & Lists
*   **The No-Divider Rule:** Never use horizontal rules (`
`) to separate list items or card sections. Instead, use the Spacing Scale (e.g., `8` or `10`) to create "White Space Dividers."
*   **Cards:** Use `surface_container` with a `rounded-lg` (0.5rem) corner. On hover, transition the background to `surface_container_high` and apply an Ambient Shadow.

### Chips
*   **Filter/Selection:** Use `surface_container_highest` for the unselected state and `primary` for the selected state. This ensures the selected state "pops" against the darker background.

### Input Fields
*   **Style:** Use a solid `surface_container_low` background.
*   **Interaction:** On focus, transition the "Ghost Border" from 15% opacity to 100% using the `primary` token. Never use a 1px solid line in the resting state.

### Navigation Bar
*   **Style:** Floating "Island" layout. Use a glassmorphic background (`surface` @ 60% opacity) with a `rounded-full` shape. Position it at the top with a `12` (4rem) margin from the screen edge.

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Offset your headlines. Allow images to bleed off the grid. This design system thrives on non-traditional layouts.
*   **Use Bold Scale:** Don't be afraid to make a headline `3.5rem` and the subtext `0.875rem`. High contrast in size equals high-end design.
*   **Leverage Tonal Transitions:** Use the `surface_container` tiers to guide the user's eye through the hierarchy of information.

### Don't:
*   **Don't use 1px solid borders:** It immediately makes the design look like a generic bootstrap template.
*   **Don't use pure black shadows:** They look muddy on a red gradient background. Always tint your shadows or rely on tonal layering.
*   **Don't crowd the content:** This design system requires "breathing room." If a section feels cramped, increase the spacing to `16` (5.5rem) or `20` (7rem).
*   **Don't use gradients on components:** The user has requested solid components to contrast the gradient background. Keep buttons, cards, and chips as solid blocks of color.