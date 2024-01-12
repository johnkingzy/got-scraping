import { fetchWithGotScraping } from "./scrape";

(async () => {
    const response = await fetchWithGotScraping("https://www.robotevents.com/VRC/2023-2024/QA");
    console.log(response);
})();
