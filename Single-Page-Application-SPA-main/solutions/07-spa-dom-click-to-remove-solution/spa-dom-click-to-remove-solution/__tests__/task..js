const puppeteer = require("puppeteer");
const path = require("path");
const browserOptions = {
  headless: true,
  ignoreHTTPSErrors: true,
};

let browser;
let page;
let client;
let getListeners;

beforeAll(async () => {
  browser = await puppeteer.launch(browserOptions);
  page = await browser.newPage();
  await page.goto("file://" + path.resolve("./index.html"));
  client = await page.target().createCDPSession();

  getListeners = async (result) =>
    await client.send("DOMDebugger.getEventListeners", {
      objectId: result.objectId,
    });
}, 30000);

afterAll((done) => {
  try {
    this.puppeteer.close();
  } catch (e) {}
  done();
});

describe("Delete", () => {
  it("Page contains 3 messages", async () => {
    const panes = await page.$x('//div[contains(@class, "pane")]');
    expect(panes.length).toBe(3);
  });
  it("On click on delete button parent message div's are removed", async () => {
    const delButton = await page.$x(
      '//button[contains(@class, "remove-button")]'
    );
    await delButton[0].click();
    await delButton[1].click();
    const remainingPanes = await page.$x('//div[contains(@class, "pane")]');
    expect(remainingPanes.length).toBe(1);
  });
});

describe("Delegation", () => {
  it("Only one event listener is used on the page", async () => {
    const {
      result: { value: numElements },
    } = await client.send("Runtime.evaluate", {
      expression: `document.querySelectorAll('*').length`,
    });
    let numListeners = 0;
    for (let index = 0; index < numElements; index++) {
      const { result } = await client.send("Runtime.evaluate", {
        expression: `document.querySelectorAll('*')[${index}]`,
      });
      const { listeners } = await getListeners(result);
      if (listeners.length) numListeners++;
    }
    expect(numListeners).toBe(1);
  });
});
