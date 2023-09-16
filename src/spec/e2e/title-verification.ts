import { manURL, womanURL } from "../../lib/pages.ts";
import { homePageTitleMan, homePageTitleWoman } from "../../lib/wordData.ts";

describe("Lesson 4 - Title verification", async () => {
  it("Should open man page and verify url", async () => {
    await browser.url(manURL);
    await expect(browser).toHaveUrl(manURL);
  });

  it("Should open woman page and verify url", async () => {
    await browser.newWindow(womanURL);
    await expect(browser).toHaveUrl(womanURL);
  });

  it("Should verify title pages", async () => {
    // tworzenie tablicy z okien w przeglądarce
    const openWindows = await browser.getWindowHandles();
    //pobieranie pierwszej karty
    await browser.switchToWindow(openWindows[0]);
    //pobieranie pierwszego tytułu
    const windowTitleOne: string = await browser.getTitle();
    //weryfikacja tytułu
    await expect(await windowTitleOne).toContain(homePageTitleMan);

    //przełacz sie na karte ktora krysje sie pod indeksem 1 czyli Woman
    await browser.switchToWindow(openWindows[1]);
    //pobieranie tytułu
    const windowTitleTwo: string = await browser.getTitle();
    //weryfikacja tytułu
    await expect(await windowTitleTwo).toContain(homePageTitleWoman);
  });
});
