const puppeteer = require("puppeteer");
const path = require('path');
const fs = require('fs');

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe("Task 1", () => {
    it("Page is using Google fonts", async () => {
        const cdn = await page.$eval('link', el => el.href);
        expect(cdn).toMatch(/googleapis/);
    });
    it("Multiple different font weights are used", async () => {
        const fontWeights = await page.$$eval('*', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('font-weight')));
        expect(fontWeights).toEqual(expect.arrayContaining(['300', '400', '700']));
    });
    it("H1 headline is underlined", async () => {
        const h1 = await page.$eval('h1', el => getComputedStyle(el).textDecoration);
        expect(h1).toMatch(/underline/);
    });
    it("List items have a light font weight", async () => {
        const listItems = await page.$$('li');
        expect(listItems.length).toBeGreaterThan(1);
        for (let i = 0; i < listItems.length; i++) {
            const li = await page.$eval('li', el => getComputedStyle(el).fontWeight);
            expect(li).toBe('300');
        }
    });
    it("`.heading` has a shadow and is in uppercase", async () => {
        const headings = await page.$$('.heading');
        expect(headings.length).toBeGreaterThan(1);
        for (let i = 0; i < headings.length; i++) {
            const shadow = await page.$eval('.heading', el => getComputedStyle(el).textShadow);
            expect(shadow).toBeTruthy();
            const headingUpper = await page.$eval('.heading', el => getComputedStyle(el).textTransform);
            expect(headingUpper).toBe('uppercase');
        }
    });
    it("`.note` has `bold` font weight and is `italic`", async () => {
        const noteBold = await page.$eval('.note', el => getComputedStyle(el).fontWeight);
        expect(noteBold).toBe('700');
        const noteItalic = await page.$eval('.note', el => getComputedStyle(el).fontStyle);
        expect(noteItalic).toBe('italic');
    });
    it("`.todo-item` is stricken through", async () => {
        const todoItem = await page.$eval('.todo-item', el => getComputedStyle(el).textDecoration);
        expect(todoItem).toMatch(/line-through/);
    });
});

describe("Task 2", () => {
    it("List elements have `:before` pseudo element", async () => {
        const stylesheet = fs
            .readFileSync("./style.css")
            .toString("utf-8")
            .replace(/ /g, "");
        const before = /:[:]?before/g;
        expect(before.test(stylesheet)).toBe(true);
    });
    it("List elements have `:after` pseudo element", async () => {
        const stylesheet = fs
            .readFileSync("./style.css")
            .toString("utf-8")
            .replace(/ /g, "");
        const after = /:[:]?after/g;
        expect(after.test(stylesheet)).toBe(true);
    });
    it("Pseudo elements use 'quote' image", async () => {
        const stylesheet = fs
            .readFileSync("./style.css")
            .toString("utf-8")
            .replace(/ /g, "");
        const quoteImage = /quote.png/g;
        expect(quoteImage.test(stylesheet)).toBe(true);
    });
});

describe('Task 3 - File downloads', () => {
    it("Files list should include link to a PDF file", async () => {
        const hrefs = await page.$$eval('*', el => Array.from(el).map(e => e.href));
        const pdf = /\.pdf/i;
        expect(pdf.test(hrefs)).toBeTruthy();
    });
    it("Files list should include link to an XLS file", async () => {
        const hrefs = await page.$$eval('*', el => Array.from(el).map(e => e.href));
        const xls = /\.xls/i;
        expect(xls.test(hrefs)).toBeTruthy();
    });
    it("Files list should include link to a DOC file", async () => {
        const hrefs = await page.$$eval('*', el => Array.from(el).map(e => e.href));
        const doc = /\.doc/i;
        expect(doc.test(hrefs)).toBeTruthy();
    });
    it("Link elements have `:after` pseudo element", async () => {
        const stylesheet = fs
            .readFileSync("./style.css")
            .toString("utf-8")
            .replace(/ /g, "");
        const after = /:[:]?after/g;
        expect(after.test(stylesheet)).toBe(true);
    });
    it("Pseudo elements use icon images", async () => {
        const stylesheet = fs
            .readFileSync("./style.css")
            .toString("utf-8")
            .replace(/ /g, "");
        const fileFormats = /ms-word\.png|pdf\.png|ms-excel\.png/g;
        expect(fileFormats.test(stylesheet)).toBe(true);
    });
});

describe('Task 4 - Gradient sandwich', () => {
    it("Sandwich section should be styled using linear gradients", async () => {
        const linearGradient = /linear-gradient/g;
        const stylesheet = fs
            .readFileSync("./style.css")
            .toString("utf-8")
            .replace(/ /g, "");
        expect(linearGradient.test(stylesheet)).toBe(true);
    });
});