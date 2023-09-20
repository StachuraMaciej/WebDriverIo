// test weryfikacji strony glownej google
import homePage from "../../pages/homePage";

describe("Added metods", async () => {
  // pierwszy przypadek testowy
  it("Should open page and click cookies", async () => {
    await homePage.openHomePage();
    await homePage.moveToCookies();
  });
  //
});
