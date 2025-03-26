const path = require('path');
const puppeteer = require("puppeteer");

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

describe('Task 1 - Grid', () => {
    it("Page should use a grid setup", async () => {
        const container = await page.$$eval('*', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('display')));
        expect(container).toEqual(expect.arrayContaining(['grid']));
    });

    it("Page should be split into 4 grid rows", async () => {
        const rows = await page.$$eval('*', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('grid-template-rows')));
        expect(rows.filter(row => row.split(" ").length > 3).length).toBeGreaterThan(0);
    });

    it("Page should be split into 4 grid columns", async () => {
        const columns = await page.$$eval('*', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('grid-template-columns')));
        expect(columns.filter(column => column.split(" ").length > 3).length).toBeGreaterThan(0);
    });
});

describe('Task 2 - Spanning', () => {
    it("Items span multiple grid columns", async () => {
        const column = await page.$$eval('*', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('grid-column-end')));
        expect(column.filter(c => c !== 'auto').length).toBeGreaterThan(0)
    });

    it("Items span multiple grid rows`", async () => {
        const rows = await page.$$eval('*', el => Array.from(el).map(e => getComputedStyle(e).getPropertyValue('grid-row-end')));
        expect(rows.filter(row => row !== 'auto').length).toBeGreaterThan(0);
    });
});
