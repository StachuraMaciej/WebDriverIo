import { homeURL } from "../../lib/pages";

describe("Lesson 7 - move to", async () => {
  it("Should open page and verify url", async () => {
    await browser.url(homeURL);
    await expect(browser).toHaveUrl(homeURL);
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

  it("Should scroll down to footer", async () => {
    const footer: WebdriverIO.Element = await $(".FooterDefault__upper__iQ4Gi");
    // Metoda przewijająca na dół strony
    await footer.scrollIntoView();

    await browser.pause(4000);
  });

  //Akcja hover

  it("Should hover on Nowości tab", async () => {
    const tab: WebdriverIO.Element = await $("a.btn:nth-child(1)");
    await expect(tab).toHaveAttribute("href", "/c/ona");
    //przewiń do miejsca gdzie znajduje sie Tab
    await tab.scrollIntoView();
    // Metoda najeżdżająca na tab, efekt -> hover
    await tab.moveTo();

    await browser.pause(4000);
  });
});
