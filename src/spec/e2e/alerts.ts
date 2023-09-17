import { alertHP } from "../../lib/pages";

describe("Lesson 5 - Alerts", async () => {
  it("Should open alert homepage and verify url", async () => {
    await browser.url(alertHP);
    await expect(browser).toHaveUrl(alertHP);
  });

  it("Should click on the button", async () => {
    const button: WebdriverIO.Element = await $(".btn-danger");
    await button.click();
    // pobranie tekstu z alerta
    const alertText: string = await browser.getAlertText();
    console.log(await alertText);
    //weryfikacja pobranego tekstu
    await expect(await alertText).toContain("I am an alert box!");
    //sprawdzanie czy alert jest otwarty
    await expect(await browser.isAlertOpen()).toBeTruthy();
    // klinknięcie alertu
    await browser.acceptAlert();
    // UDEMY 12:30
    await browser.pause(5000);
  });
});
