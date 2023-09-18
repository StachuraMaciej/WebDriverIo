import { upload } from "../../lib/pages";
//deklarowanie ścieżki pobierającej zdjęcie z images
const path = require("path");

describe("Lesson 6 - Upload File", async () => {
  it("Should upload file and verify URL", async () => {
    await browser.url(upload);
    await expect(browser).toHaveUrl(upload);
    await browser.pause(4000);
  });

  it("Should upload file and click button upload", async () => {
    const input: WebdriverIO.Element = await $("#file-upload");
    const btnUpload: WebdriverIO.Element = await $("#file-submit");
    //deklarowanie ścieżki pobierającej zdjęcie z images
    const filePath = path.join(__dirname, "../../images/ziemia.jpg");
    // wgrywanie pliku - proces
    const uploadFile = await browser.uploadFile(filePath);
    await input.setValue(uploadFile);
    //
    // Zapisanie pliku
    await btnUpload.click();
    //
    await browser.pause(4000);
    // Weryfikacja tekstu
    const h3: WebdriverIO.Element = await $("div#content h3");
    await expect(await h3.getText()).toContain("File Uploaded!");
  });
});
