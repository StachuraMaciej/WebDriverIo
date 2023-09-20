//Importowanie linku
import { homeURL } from "../lib/pages";

// KLASA-METODA KTÓRA MOZNA IMPORTOWAĆ W WIELU TESTACH
class homePage {
  //otwieranie i asercja
  async openHomePage() {
    await browser.url(homeURL);
    await expect(browser).toHaveUrl(homeURL);
  }

  //tworzenie lokalizatora- METODY, zamiast wielu zmiennych w testach
  get buttonCookies() {
    return $(".CookiesInfo__cookiesInfoBtnWrapperAccept__nyIJU");
  }
  //tworzenie zachowania- METODY, zamiast wielu zachowań w testach
  async moveToCookies() {
    //zapisz do zmiennnej
    const button: WebdriverIO.Element = await this.buttonCookies;
    // poczekaj na ten selektor i dopiero wykonaj akcje
    await button.waitForDisplayed();
    //wykonaj akcjie
    await button.click();
    await browser.pause(3000);
  }

  get field() {
    return $("#productsSearch");
  }

  async putText() {
    const input: WebdriverIO.Element = await this.field;
    await input.setValue("bluzka czerwona");
  }
}

export default new homePage();
