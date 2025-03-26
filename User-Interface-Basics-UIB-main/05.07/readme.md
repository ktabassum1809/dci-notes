# UIB - Design - 04: colors & css variables & box shadow:

**yesterday:**

- icons & font awesome

**Today:**

- colors
- css variables

## colors:

- This section is purely "good to know" theory
- Colors are very important for brands
- Very commonly projects will use an existing color palette from a brand

- Examples of brands with a strong color identity
  - https://www.mcdonalds.com/de/de-de.html
  - https://www.ups.com/de/en/Home.page

- Note that all of these Brands have a strong, nearly iconic primary color
    - However, the main or _primary_ color doesn't cover the whole page
    - Often these iconic colors are bold, strong colors
    - They could overwhelm if used everywhere on the page

- Most pages have either a light or dark theme
    - With the primary color taking up perhaps around 10% of the page
    - Then a secondary color taking up slightly more, perhaps 30%
    - Finally the most area is covered by a suitable dark or light background

- Practically always there are slight color variations
    - Also these are not rules, but rather design guidelines
    - These pages might have a color palette generated from the main color
    - Who can tell me what a color palette means
    - Let's create a palette
    - https://color.adobe.com/en/create/color-wheel

- Color terminology with the color wheel
        - Complementary colors
        - Hue, Saturation
        - Lightness
        - Color temperature
            - You can make a color cooler by adding blue
            - You can make a color warmer by adding orange

- Using a color palette: https://www.realtimecolors.com

## CSS variables

- Let's think of variables like this
    - You have an `age`
    - Your `age` has some value
    - This particular value changes over time
    - So `age` can be at one time 41 and later 42
    - `age` is a variable name, 41 is a variable value

- CSS supports the concept of variables
- example:

```css
:root {
    --Primary: #FFB30D;
}

#logo {
    color: var(--Primary);
}

```

## Exercise:

- [27-uib-design-nnp-homepage](https://classroom.github.com/a/mLHjVSAF)
- 27.1-complete the morning code to match the layout in [this](./layout.png) image

# Resources:

- [adobe colors](https://color.adobe.com/create/color-wheel)
- [colors](https://coolors.co/)
- [realtime colors](https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff&fonts=Inter-Inter)

## Self-study prompts

- https://css-tricks.com/neumorphism-and-css/

