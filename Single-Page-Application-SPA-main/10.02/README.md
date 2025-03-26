# React components

## last day:

- SPA
- Intro to React
- Intro to Vite

## today:

- Components
- Props

### resources:

- [React documentation](https://react.dev/)
- []()
- []()
- []()
- []()

### exercises

- Ex1: [19-spa-react-simple](https://classroom.github.com/a/xrtIbihM)
- Ex2: [21-spa-react-user-profile](https://classroom.github.com/a/Q3qJz3KB) 
(no need to solve the bonus task)

## Theory

### Components

- It’s natural to think of websites as a series of pages

  - index.html
  - contact.html
  - about.html

- With most modern ways of building websites, you can actually think in components

- How do you know what should be a custom component?

  - In programming, when do you decide to create a new function?
  - For example the single responsibility principle

    - A component should ideally only carry out one task
    - As it grows, it should be broken down into smaller parts

  - Or the DRY principle - Don't Repeat Yourself

    - If a part of a page repeats (Button, Card), it's a good candidate

  - Or If a part is complex enough on its own (Search), it is a good candidate

- Like HTML, components make a nested structure; a component tree

```js
<ProductList>
	<Product>
		<h2>Apple iPad</h2>
		<p>Cool tablet device thing</p>
	</Product>
	<Product>
		<h2>ThinkPad x200</h2>
		<p>An oldie, but goldie laptop </p>
	</Product>
</ProductList>
```
- Conceptually, components are like JavaScript functions
    - They can accept inputs (props - short for properties)
    - They return JSX that describes what should be displayed
        - Components can return either a single JSX element (common)
        - OR an array of elements (rare)


### Props

- Components need to communicate with each other
  - Components pass data between components by these props
  - Props is a mix of the two mental models
    - HTML attributes which can configure elements or customize their behavior
    - Function parameters
  - You could think of the following as similar
    - JS: `printProduct(prod)`
    - JSX: <Product product={prod} />




### Self-study -> Destructuring

- Props is an object

```js
// Destructuring 1
const Welcome = (props) => {
    const { name } = props
    return <h1>Hello, {name}</h1>
};

export default Welcome;
```

```js
// Destructuring 2
const Welcome = ({ name }) => {
    return <h1>Hello, {name}</h1>
};

export default Welcome
```

**Wrap-up**
- React apps are made up of components
- Components can be nested
- Components are functions
- Components return JSX
- Components pass data using props
