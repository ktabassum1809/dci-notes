const puppeteer = require("puppeteer");
const path = require("path");

const browserOptions = {
  headless: true,
  ignoreHTTPSErrors: true,
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
  } catch (e) { }
  done();
});

describe("Links", () => {
  it("Page should contain 4 section elements", async () => {
    const sections = await page.$$("section");
    expect(sections.length).toBe(4);
  });

  it("Page should contain 4 links", async () => {
    const anchors = await page.$$("a");
    expect(anchors.length).toBe(4);
  });

  it("Page should contain a link to MDN", async () => {
    const anchors = await page.$$eval('a', el => Array.from(el).map(a => a.href));
    const link = anchors.find(link => link.includes("mozilla.org"));
    expect(link).toBeDefined();
    expect(link).toMatch(/mozilla.org/);
  });

  it("Page should contain a link to Stack Overflow", async () => {
    const anchors = await page.$$eval('a', el => Array.from(el).map(a => a.href));
    const link = anchors.find(link => link.includes("stackoverflow.com"));
    expect(link).toBeDefined();
    expect(link).toMatch(/stackoverflow.com/);
  });

  it("Page should contain a link to GitHub", async () => {
    const anchors = await page.$$eval('a', el => Array.from(el).map(a => a.href));
    const link = anchors.find(link => link.includes("github.com"));
    expect(link).toBeDefined();
    expect(link).toMatch(/github.com/);
  });


  it("Page should contain a `mailto:` link", async () => {
    const mailtoLink = await page.$('a[href^="mailto:"]');
    expect(mailtoLink).toBeTruthy();
  });
})
