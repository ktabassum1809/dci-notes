# HTML Introduction

---

## We will cover:

- What is HTML?
- History of HTML
- New words
- A closer look at HTML
- Conventions when writing markup
- Why HTML?
- Common HTML markup
- More markup (HTML5)
- Hierarchies within HTML

---

## What is HTML?

---

**hyper text markup language**

- It is a set of standards that define how documents should be displayed in a web browser
- It is just a way for us to _annotate_ the _data_ that we transmit over the internet

---

## History of HTML

---

In 1989 Tim Berners-Lee invented HTML at CERN 👨‍💻

> CERN is a European scientific laboratory 🔬

---

He created it to help with the sharing of information between researchers at CERN, scientists, universities and institutes around the world 📡

---

It has evolved over the years, and continues to grow under the guidance of the World Wide Web Consortium 

HTML 2 - November 1995
HTML 3 - January 1997
HTML 5 - October 2014
HTML 5.2 - December 2017

---

## New words

---

**Markup** - the symbols or codes we use to describe the content inside the HTML file. Sometimes referred to as tags.

**Presentational** 🎨 - markup which focuses purely on the display of the content

**Semantic** 📖 - markup which focuses on the meaning of the content


---

## A closer look at HTML

---

HTML consists of a set of tags, or markup - which we use to annotate our content

Consider the following text;

```html
The cat 😺 looked at the human and meowed
```

---

We can enclose this in what we call a paragraph tag `<p></p>`

```html
<p>The cat 😺 looked at the human and meowed</p>
```

---

## Conventions when writing markup

---

Markup which contains a `textnode` or contains other markup, consists of a pair:

```html
<p></p>
```

Markup which does not contain a`textnode` or does not contain other markup, is written as a self enclosed tag:

```html
<img />
```

---

## Why HTML?

---

Consider the following text:

```html
外見 地中生活に適応するため、体はずんぐりとしており、四肢も尻尾も短く進化している[5]。
ドワーフハムスター でも尻尾は毛皮の下に隠れてしまいほとんど目立たない。
ただし、チャイニーズハムスターにはハムスター類で最も長い尾（2.8-3.1cm）があり物をつかむような機能をもつ[5]。

ゴールデンハムスター（シリアンハムスター）
ブラントハムスタ
ラッデハムスタ
ニュートンハムスタ
```

---

Unless you understand Japanese, this will look like a series of random characters

This is how a computer reads the human language; it is not something they naturally understand

How can we improve this situation?

Let's add some markup

---

```html
<h1>外見</h1>

<p>地中生活に適応するため、体はずんぐりとしており、四肢も尻尾も短く進化している[5]。</p>

<p>ドワーフハムスター でも尻尾は毛皮の下に隠れてしまいほとんど目立たない。</p>

<p>ただし、チャイニーズハムスターにはハムスター類で最も長い尾（2.8-3.1cm）があり物をつかむような機能をもつ[5]。</p>

ゴールデンハムスター（シリアンハムスター）
ブラントハムスタ
ラッデハムスタ
ニュートンハムスタ
```

---

This is much better. Even though we can't understand the text, we can get an idea for the "shape" of the content.

We can already recognise the difference between the header and the paragraphs.

Let's take this further

---

```html
<h1>外見</h1>

<p>地中生活に適応するため、体はずんぐりとしており、四肢も尻尾も短く進化している[5]。</p>

<p><strong>ドワーフハムスター</strong> でも尻尾は毛皮の下に隠れてしまいほとんど目立たない。</p>

<p>ただし、<strong>チャイニーズハムスターにはハムスター</strong>類で最も長い尾（2.8-3.1cm）があり物をつかむような機能をもつ[5]。</p>

<ul>
    <li>ゴールデンハムスター（シリアンハムスター）</li>
    <li>ブラントハムスタ</li>
    <li>ラッデハムスタ</li>
    <li>ニュートンハムスタ</li>
</ul>
```

Notes:

Some japanese wiki page on hamsters

---

Even though we can't understand the text, we understand that some text is more important than others.

We recognise that there is a title.

We can separate the different parts on the page.

We can understand there is an unordered list

---

It looks like all we've done is applied formatting to the document

You're probably thinking, "I could do that in Word!"

We are doing more than just applying formatting

---

### Why make the computer understand?

---

We add semantic meaning to a HTML page because we want computers to understand the value of the data on the page

Search engines use complex algorithms to analyse the content (based on our markup) to evaluate the page structure and its importance

The higher the importance, the more people visit our site

Notes:

This a simplistic view, search engines base their analysis on other markers too

---

## Common HTML markup

---

Before we look at the markup, let's look at some typical representational needs we might encounter in a document

---

`<html></html>`
The root tag on the page. Contains all other tags.

`<head></head>`
Contains metadata about the document

`<body></body>`
Contains the content of the document

---

### Information we can find in the <head>

`<title></title>`
The title of a document

---

### Content we can find in the <body>

`<h1></h1>` or `<h2></h2`> ... `<h6></h6>`
Heading text

`<p></p>`
Paragraph text

`<strong></strong>`
Text which has been highlighted in some way

`<em></em>`
Text which has been emphasised in some way

---

Lists
```html
// unordered
<ul>
    <li></li>
</ul>
```

```html
// ordered
<ol>
    <li></li>
</ol>
```

Images
```html
<img />
```

---

Horizontal rule
```html
<hr />
```

Divider
```html
<div></div>
```

Break
```html
<br />
```

---

## More markup (HTML5)

---

HTML5 took the concept of semantic HTML further by giving us more HTML tags to work with

```html
<header></header>
<main></main>
<nav></nav>
<video></video>
<audio></audio>
```

---

## Hierarchies within HTML

---

We can represent hierarchies in HTML, by enclosing markup inside other markup

---

Example:

```html
<ul>
    <li>Hamster 🐹</li>
    <li>Owl 🦉</li>
</ul>
```

Markup which is a direct descendant of other markup can be described in a parent-child relationship

In the above example, `<ul>` can be considered the parent of each `<li>` element

The `<li>` elements are children


## Resources:

- [meta data-mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
- [emmet cheat sheet](https://www.interviewbit.com/emmet-cheat-sheet/)