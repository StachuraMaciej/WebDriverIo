import { productURL } from "../../lib/pages.ts";

describe("Lesson 3 - Select", async () => {
  it("Schould open product page and verify url", async () => {
    await browser.url(productURL);
    await expect(browser).toHaveUrl(productURL);
  });

  it("Should click button Cookies accept", async () => {
    // pobieranie elementu
    const button: WebdriverIO.Element = await $(
      ".CookiesInfo__cookiesInfoBtnWrapperAccept__nyIJU"
    );

    // Kliknij przycisk
    await button.click();
    // Poczekaj na pewną ilość czasu (opcjonalne)
    await browser.pause(1000); // bycie na stronie
  });

  it("Schould open dropdown with size", async () => {
    const selectSize: WebdriverIO.Element = await $(
      "div[data-test='size_dropdown']"
    );
    await selectSize.click();
    await browser.pause(4000);
  });

  it("Should select size in drop down", async () => {
    const selectSize: WebdriverIO.ElementArray = await $$(
      "span.BaseSelectItem__selectItemLabel__6kkG9"
    );
    const isChecked = await selectSize[2].getText();
    //await selectSize.click();
    // If it's checked, click it to uncheck it
    if (isChecked === "L") {
      await selectSize[2].click();
      await browser.pause(2000);
    }
    // You can also assert that the size
    await expect(isChecked.includes("L"));
    await browser.pause(14000);
  });
});
