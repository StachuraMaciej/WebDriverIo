import { productURL } from "../lib/pages";

class ProductPage {
  //pobieranie zmiennych
  get select() {
    return $("div[data-test='size_dropdown']");
  }

  async openProductPage() {
    await browser.url(productURL);
    await expect(browser).toHaveUrl(productURL);
  }

  async selectProductSize() {
    const selectSize: WebdriverIO.Element = await this.select;
    await selectSize.click();
    await browser.pause(4000);
  }
}

export default new ProductPage();
