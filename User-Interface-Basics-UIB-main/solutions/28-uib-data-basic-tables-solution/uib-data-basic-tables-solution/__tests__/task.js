const puppeteer = require("puppeteer");
const path = require("path");

const browserOptions = {
  headless: true,
  defaultViewport: null,
  devtools: false,
};
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch(browserOptions);
  page = await browser.newPage();
  await page.goto("file://" + path.resolve("./index.html"));
}, 30000);

afterAll((done) => {
  try {
    this.puppeteer.close();
  } catch (e) {}
  done();
});

describe("Basic HTML structure", () => {
  it("`index.html` should contain appropriate meta tags", async () => {
    const metaTags = await page.$$("meta");
    expect(metaTags.length).toBeGreaterThan(1);
  });
  it("`index.html` should contain a title tag that is not empty", async () => {
    const title = await page.$eval("title", (el) => el.innerHTML);
    expect(title).not.toBe("");
  });
});
describe("CSS Stylesheet", () => {
  it("CSS file should be linked", async () => {
    const cssLink = await page.$('link[rel="stylesheet"]');
    expect(cssLink).toBeTruthy();
  });
  it("No style attribute should be used in the table", async () => {
    // get all child elements of the table
    const table = await page.$("table");
    const styleAttributes = await table.$x("//*[@style]");
    // expect no style attributes to be present on the table
    expect(styleAttributes.length).toBe(0);
  });
});
describe("Table", () => {
  it("Table exists", async () => {
    const table = await page.$("table");
    expect(table).toBeTruthy();
  });
  it("Table should have 4 Columns", async () => {
    const headColumns = await page.$$("thead tr:first-child > *");
    const bodyColumns = await page.$$("tbody tr:first-child > *");
    expect(headColumns.length).toBe(4);
    expect(bodyColumns.length).toBe(4);
  });
});
describe("Table Links", () => {
  it("Links on the Page should open in a new tab", async () => {
    const target = await page.$$eval("a", (el) =>
      Array.from(el).map((a) => a.getAttribute("target"))
    );
    expect(target.every((t) => t === "blank")).toBe(true);
  });
});
