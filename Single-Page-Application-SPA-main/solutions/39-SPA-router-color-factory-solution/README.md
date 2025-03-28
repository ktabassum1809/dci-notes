# React Router Color Factory

The goal of this exercise will be to use React Router to build an app that lets you view colors and add new colors.

Here's an idea of what your app could look like:

![color app demo](./color-factory.gif)

## User Stories

1.  As a user, I can go to `/colors` to see a list of all available colors.
2.  As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory. (The route here should be `/colors/:color`.)
3.  As a user, I can click on a button to show a form that will let me add a new color. (The route here should be `/colors/new`)
4.  As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.
5.  As a user, if I try to navigate to a color page that does not exist (e.g. `/colors/burrito`), I am redirected to the colors index page.
6.  As a user, if I try to navigate to an invalid url (e.g. `/this-is-not-valid`), I am redirected to the colors index page.
7.  Your app should have some styling.

## Bonus task

1.  Make it so that the `/colors/new` route is protected, and you have to login to access it. (You can hard-code the correct login credentials for the sake of this exercise).
2.  Persist your colors data in `localStorage`.

Good luck!
