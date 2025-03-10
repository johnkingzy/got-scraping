import { fetchWithGotScraping } from "./scrape";

(async () => {
    const response = await fetchWithGotScraping("https://sportsapicdn-desktop.betking.com/api/feeds/prematch/mostpopularsports/en/1/7/3/");
    console.log(response);
})();
