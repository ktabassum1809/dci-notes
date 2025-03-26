const puppeteer = require("puppeteer");
const path = require("path");

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
  await page.goto("file://" + path.resolve("./index.html"));
}, 30000);

afterAll((done) => {
  try {
    this.puppeteer.close();
  } catch (e) {}
  done();
});

describe("Breakpoints - 600px and lower", () => {
  it("`main` tag should have the specified `linear-gradient` on this breakpoint", async () => {
    await page.setViewport({ width: 600, height: 600 });
    const linear = await page.$eval(
      "main",
      (el) => getComputedStyle(el).backgroundImage
    );
    expect(linear).toMatch(
      /linear-gradient\(140deg, rgb\(0, 0, 0\), rgb\(255, 0, 0\)\)/
    );
  });
});

describe("Breakpoints - 601px - 900px", () => {
  it("`main` tag should have the specified `linear-gradient` on this breakpoint", async () => {
    await page.setViewport({ width: 700, height: 700 });
    const linear = await page.$eval(
      "main",
      (el) => getComputedStyle(el).backgroundImage
    );
    expect(linear).toMatch(
      /linear-gradient\(to right, rgb\(0, 0, 0\), rgb\(0, 0, 255\)\)/
    );
  });
});

describe("Breakpoints - 901px and above", () => {
  it("`main` tag should have the specified `linear-gradient` on this breakpoint", async () => {
    await page.setViewport({ width: 1000, height: 1000 });
    const linear = await page.$eval(
      "main",
      (el) => getComputedStyle(el).backgroundImage
    );
    expect(linear).toMatch(
      /linear-gradient\(rgb\(255, 105, 180\), rgb\(216, 238, 253\)\)/
    );
  });
});
