import { homeURL } from "../../lib/pages";
//import { homePageTitle } from "../../lib/wordData";

describe("Lesson 1 - Inputs", async () => {
  // "HOOK" maksymalizujacy okno
  /*before(() => {
    browser.maximizeWindow();
  });*/
  //after(() => {});

  // pierwszy przypadek testowy "STEP"
  it("Should open https://wearmedicine.com/ page", async () => {
    await browser.url(homeURL);
    //await browser.pause(3000);

    // asercja eleminuje redirecty sprawdza czy link jest poprawny
    await expect(browser).toHaveUrl(homeURL);
    // asercja może też sprawdzać wartośc copy czy jest poprawna np Title w meta
    //await expect(browser).toHaveTitle(homePageTitle);
  });
  //

  // drugi przypadek testowy "STEP-2"
  /*it("Should type value to search input", async () => {
    // pobieranie elementu
    const input: WebdriverIO.Element = await $("#productsSearch");
    await input.setValue("bluzka czerwona");
    // czyszczenie wartości
    await input.clearValue();
    // upewnienie sie czy wartość zostala wyczyszczona
    expect(await input.getValue()).toContain("");
  });*/

  // trzeci przypadek testowy "STEP-3"
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

  // czwarty przypadek testowy "STEP-4"
  it("Should click button HEART", async () => {
    // pobieranie elementu
    const link = await $(".Header__counterIcon__9G1aJ, span .SVGInline");
    // Sprawdź, czy przycisk istnieje
    await expect(link).toHaveAttribute("href", "/ulubione");
    // Kliknij przycisk
    await link.click();
    // Poczekaj na pewną ilość czasu (opcjonalne)
    await browser.pause(1000); // bycie na stronie
  });

  // piąty przypadek testowy "STEP-5"
  it("Should click button ON", async () => {
    // pobieranie elementu
    const link2 = await $(
      ".CategoriesSection__menuListItem__wQBXC:nth-child(2) a"
    );
    // Sprawdź, czy przycisk istnieje
    await expect(link2).toHaveAttribute("href", "/c/on");
    // Kliknij przycisk
    await link2.click();
    // Poczekaj na pewną ilość czasu (opcjonalne)
    await browser.pause(1000); // bycie na stronie
  });

  // szósty przypadek testowy "STEP-6"
  it("Should click button Odzież", async () => {
    // pobieranie elementu
    const link3: WebdriverIO.Element = await $("a[href = '/k/on/odziez']");
    // Sprawdź, czy przycisk istnieje
    await expect(link3).toHaveAttribute("href", "/k/on/odziez");
    // Kliknij przycisk
    await link3.click();
    // Poczekaj na pewną ilość czasu (opcjonalne)
    await browser.pause(1000); // bycie na stronie
  });

  // siódmy przypadek testowy "STEP-7"
  it("Should click button Modal Quit", async () => {
    // pobieranie elementu
    const button2: WebdriverIO.Element = await $(
      ".Modal__modalContent__Wp6a4 .Modal__close__C40RR"
    );

    // Kliknij przycisk
    await button2.click();
    // Poczekaj na pewną ilość czasu (opcjonalne)
    await browser.pause(1000); // bycie na stronie
  });

  // ósmy przypadek testowy "STEP-8"
  it("Should click button Kategoria", async () => {
    // pobieranie elementu
    const button3: WebdriverIO.Element = await $(
      "div[data-test='category_filters']"
    );

    // Kliknij przycisk
    await button3.click();
    // Poczekaj na pewną ilość czasu (opcjonalne)
    await browser.pause(2000); // bycie na stronie
  });

  // dziewiąty przypadek testowy "STEP-9"
  it("Should check Bielizna checkbox", async () => {
    // pobieranie elementu
    const checkBox: WebdriverIO.Element = await $(
      ".BaseSelectItem__inputIcon__hcLXK"
    );

    // Kliknij przycisk
    await checkBox.click();
    // Poczekaj na pewną ilość czasu (opcjonalne)
    await browser.pause(3000); // bycie na stronie
    //asercja sprawdza czy napewno checbox jest zaznaczony
    await expect(checkBox).toBeSelected();
    await browser.pause(3000);
  });

  //ODKLIKNIJ PRZYCISK !!!
  it("Should un-check checkbox", async () => {
    // pobieranie elementu
    const checkBox: WebdriverIO.Element = await $(
      ".BaseSelectItem__inputIcon__hcLXK"
    );

    // Check if the checkbox is currently checked
    const isChecked = await checkBox.isSelected();

    // If it's checked, click it to uncheck it
    if (isChecked) {
      await checkBox.click();
      await browser.pause(3000);
    }
    // You can also assert that the checkbox is now unchecked if needed
    const isUnchecked = !(await checkBox.isSelected());
    expect(isUnchecked).toBe(true);

    // Poczekaj na pewną ilość czasu (opcjonalne)
    await browser.pause(3000); // bycie na stronie
  });

  // dziesiaty przypadek testowy "STEP-10"
  it("Should check multiple checkbox", async () => {
    // pobieranie WIELU elementów
    const checkBoxes: WebdriverIO.ElementArray = await $$(
      ".BaseSelectItem__inputIcon__hcLXK"
    );

    // Kliknij WSZYSTKIE checkboxy
    await checkBoxes.map(async (item) => {
      await item.click();
    });
    // Poczekaj na pewną ilość czasu (opcjonalne)
    await browser.pause(5000); // bycie na stronie
    //asercja-POTWIERDZENIE, sprawdza czy napewno checbox jest zaznaczony
    await expect(checkBoxes).toBeSelected();
  });

  it("Should stay at page 15s", async () => {
    // pobieranie elementu
    //const checkBox: WebdriverIO.Element = await $(
    // ".BaseSelectItem__inputIcon__hcLXK:nth-child(2), span"
    //);

    // Kliknij przycisk
    //await checkBox.click();
    // Poczekaj na pewną ilość czasu (opcjonalne)
    await browser.pause(15000); // bycie na stronie
  });
});
