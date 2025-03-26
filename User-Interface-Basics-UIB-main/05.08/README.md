# HTML Tables

## last day:

- Colors
- CSS Variables
- Box-shadow (self-study)

## today:

- HTML Tables
- Commands VS code

### resources:

- [Visual Studio Commands/shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)
- [`<td rowspan="...">`, `<td colspan="...">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
- [`:nth-child() { ... }` pseudoclass](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)
- [`:not()` pseudoclass](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)
- [`table-layout`](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)

### exercises

- Ex1: [28-uib-data-basic-tables](https://classroom.github.com/a/K-MPfYZR)
- Ex2: [29-uib-data-tables-accounts](https://classroom.github.com/a/1I3DUjzZ)
- Ex3: [30-uib-data-table-striping](https://classroom.github.com/a/53lLG4VX)

## Theory

Tables are only for tabular data, never for layout.

It is very common that you have to provide tabular data to your users
Users data
Sales orders
Sports scores
Movie/book lists
Stock
etc

### Multiple cursors visual code linux 
We know some commands:
- Toggle word wrap (alt + z)
- Ctrl + shift + 7 (comment)

Open command palette (ctrl + shift + p)

Some new commands:

- Add cursor below (alt + shift + down arrow) - alt + click alternative
- Move line: alt + up/down arrow
- Open integrated terminal (ctrl + `)

### Tables for organizing data

*`<table>` and `display: table`*

`display: table` makes a div or a span turn into a table-like element and it can be used for layout purposes.
Tables are not for layouting. In times past, they were used for layouting. Don't use them for that. There are much better options we will learn later. Also screen readers will not like tables for layouting.

*`<tr>` and `<td>`[tables1](tables1.html)*
Provides a structured and semantically meaningful way to organize tabular data

- Table row 
- Table data

*`<thead>`, `<th>`, `<tbody> and <tfoot>`[tables2](tables2.html)*

- Table head
- Table header
- Table body
- Table footer

Spanning rows and columns - `<td rowspan="...">`, `<td colspan="...">`

We use `scope` only in the `<th>` to define the cells that the header relates to.

### Styling tables [tables3](./tables3.html) 

Overriding borders with css `border-collapse`

pseudo child selectors: `:nth-child() { ... }`
    - <An+B>
	A is how many jumps and B is when does it start
    - odd / even

Additional info with `<caption>` and `caption-side`