const puppeteer = require("puppeteer");
const path = require("path");

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
  await page.goto("file://" + path.resolve("tasks/02/index.html"));
}, 30000);

afterAll((done) => {
  try {
    this.puppeteer.close();
  } catch (e) {}
  done();
});

describe("Task 02", () => {
  it("`divs` should be aligned using Flexbox", async () => {
    const divsDisplay = await page.$$eval("*", (el) =>
      Array.from(el).map((e) => getComputedStyle(e).getPropertyValue("display"))
    );
    expect(divsDisplay).toEqual(expect.arrayContaining(["flex"]));
  });
  it("Order of the `divs` should be reversed", async () => {
    const divsOrder = await page.$$eval("*", (el) =>
      Array.from(el).map((e) =>
        getComputedStyle(e).getPropertyValue("flex-direction")
      )
    );
    expect(divsOrder).toEqual(expect.arrayContaining(["row-reverse"]));
  });
});
