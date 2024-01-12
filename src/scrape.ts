let gotScraping;

export const fetchWithGotScraping = async (url: string) => {
    gotScraping ??= (await import('got-scraping')).gotScraping;

    return gotScraping.get(url);
}