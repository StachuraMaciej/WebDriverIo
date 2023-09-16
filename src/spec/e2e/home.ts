// test weryfikacji strony glownej google
describe("Verify home page Google", async () => {
  // pierwszy przypadek testowy
  it("Should open google page and wait for 3000ms", async () => {
    await browser.url("https://google.com");
    await browser.pause(3000);
  });
  //
});
