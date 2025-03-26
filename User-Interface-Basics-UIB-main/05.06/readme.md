# UIB - Design - 03: Icons

**Last week**
- Text based sizing: CSS em/rem units
- Pseudo-elements and text shadows
- Text direction and alignment

**TODAY**
- Font icons
- What is a CDN

## Font icons:

- Last week we used emojis in our code
- Emojis are basically letters, letters are from fonts, fonts are vectors 
- There are special _icon fonts_ available that give you more options
- Usually they much more similar to regular letters than emojis
- Meaning they can be usually colorized!
- There are many variations to this, we will learn a common one
- Slowly there's a new way of making font icons that's getting more popular:
    - SVG icons: SVG stands for Scalable Vector Graphics. SVG defines vector-based graphics in XML format (XML is a text-based markup language that is similar to html). SVG graphics are scalable, and do not lose any quality if they are zoomed or resized. SVG is supported by all major browsers.

## Fontawesome:

- Fontawesome (FA) is a popular library of icons
- Not universally used, but a really good example to learn the concept!
- Effectively you add an external CSS file into your page 
- This CSS will add a custom font with the icons and will add some rules
- You will be able to make a special element that gets converted into the icon

- Let's explore [Fontawesome website](https://fontawesome.com/)
- make an account there
- make your own kit (by default it includes all the free icons (without the pro ones) you can also pick and choose what you want to include or add your own custom icons or logo to this kit)
- copy the kit CDN link to your HTML
- now that your project is linked, you can go to fontawesome website and search for the icons you want to use and copy them to your HTML, each icon will be as an html element that look like this:

```html
    <p>This is an icon <i class="fa-solid fa-guitar"></i> - cool, right?</p>
```

### CDN: Content Delivery Networks

- All files that a website uses are served by a web server
- Web servers exist in one physical space
    - Browser sends request to file
    - Server sends response to browser

- Let's say 500000 websites use fontawesome.css
- Requested globally millions of times per day
- Physical server in Germany + request from Indonesia = slooooooooow

- If that server goes down, thousands of websites just fail?
- So instead you can have a _network_ of servers that all can respond!
- Tens, hundreds or thousands of servers all with the same file
- Physical server in Hamburg, request from Berlin = faaaaast
- One goes down? Others can cover
- This is especially used for things like FontAwesome files, Where one identical file is used in thousands of places

## Resources:

- [font awesome](https://fontawesome.com/)
- [emojis list](https://www.w3schools.com/charsets/ref_emoji_smileys.asp)
- [pseudo elements & pseudo classes](https://www.w3schools.com/css/css_pseudo_elements.asp)

## Exercises:

- [25-uib-design-fontawesome](https://classroom.github.com/a/XXdPLYj0)
- [26-uib-design-sweet-spot-v4](https://classroom.github.com/a/kktBtqOq)