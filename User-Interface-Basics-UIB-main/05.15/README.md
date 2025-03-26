# Responsiveness

## last day:

- Forms Styling

## today:

- Responsiveness
    - Mobile first vs Desktop first
    - Fluid layout
    - Responsive / "fluid" images

### resources:

- [CSS pixels](https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel)
- [Responsive / "fluid" images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#art_direction)

### exercises

- Ex1: [35-uib-layout-media-queries-simple](https://classroom.github.com/a/TP_Copqj)
- Ex2: [36-uib-layout-media-queries-roses](https://classroom.github.com/a/sZ3lO2-t)
<br>
*optional:*

- Ex3: [37-uib-layout-media-queries-responsive-blog](https://classroom.github.com/a/a7gAAKir)


## Theory

### Mobile is the future and the present of web dev

- For a lot of web development, your main user group to target are smartphones
- With the biggest exceptions being probably internal corporate tools. And embedded software (like Kiosks)

### Screen size, viewport size, CSS pixels
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- The width of the viewport is the width of the device
- The "initial scale" controls the default zoom when the page is loaded

*CSS pixels*
- The pixels used in CSS are not the same as device pixels
- They are "CSS pixels" or sometimes "reference pixels"

    > The term CSS pixel is synonymous with the CSS unit of absolute length
    > px — which is normatively defined as being exactly 1/96th of 1 inch (0.23mm)

- A phone could have a small screen a thousand+ pixels wide
    - In this case, the pixels are very dense
    - So many pixels in such a small space would make 16px text unreadable

### Mobile first vs desktop first

- The current reality is
> "You should never design something for the web with only one (or even a set) of particular viewport sizes in mind"
> - Chris Coyier

- Practically always you need some changes for your page to be OK on all sizes
- When one is available, using a real device to check is fantastic
- Your browser has a good mobile "mode" built into the developer tools

Mobile first means giving priority to the important content, avoiding the unnecessary

### Fluid & fixed layouts

**Fixed-width layouts**
    - Still very popular
    - The layout is a fixed width, such as 960px
    - Very rigid/static sizing
    - You probably have to zoom in and out constantly on a smartphone
    - On a large desktop screen the page can look very empty
    - Although, very large screens are difficult for design for in any case

**Fluid layouts**
    - Sometimes called liquid layouts
    - In the past, this approach was popular
    - Measurement of elements done with percentages
    - A fluid layout tries to adapt the existing screen space
        - It will stretch and shrinking everything to fit
        - It is still used somewhat, but almost never alone
        - Making one layout to fit smartphones and desktops is very, very hard
        - Most likely resulting in a page that is clunky to use on a desktop
        - ... OR very very squished on a mobile phone

**Practically most layouts are some kind of hybrids**
    - This is probably the best and most flexible approach
    - You might have some fixed width and some stretchy elements
    - The elements and layout might look different in different sizes;
        - A sidebar might be slightly flexible until available width hits 500px
        -  <500px the sidebar is hidden and instead an openable menu appears (burger menu)


### Breakpoints and media queries
- When building a responsive page you need to decide when your layout changes. That specific point is called a breakpoint
- When a breakpoint is hit, other CSS activates and overrides the default

- Sometimes developers use predefined breakpoints
    - Extra small	            <576px
    - Small	                	≥576px
    - Medium	                ≥768px
    - Large	                	≥992px
    - Extra large	            ≥1200px
    - Extra extra large	        ≥1400px


- Sometimes developers set breakpoints based on the content
    - You make the screen slowly smaller (desktop first)
    - You make the screen slowly larger (mobile first)
    - Until the content doesn't look or feel good you don't need a breakpoint and change the layout there



 ### Anatomy of a media query: 
`@media [media-type] ([media features]) { ... }` <br>
`@media all and (min-width: 1200px){ p {font-size: 30px} }`

- Media queries is a feature of CSS, also called `The @media CSS at-rule`
- These allow us to "scope" CSS code when the page is viewed in a specific media
- In this case scoping css means that some CSS is active in a specific situation

- Media type can be all, print or screen
- Default media type: `screen` is optional

### Breakpoints: The ""standard"" bootstrap breakpoint values
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
