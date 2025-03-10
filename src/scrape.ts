let gotScraping;

export const fetchWithGotScraping = async (url: string) => {
  gotScraping ??= (await import('got-scraping')).gotScraping;

  return gotScraping.get({
    url,
    timeout: { request: 15000 },
    // retry: {
    //   limit: 2,
    //   methods: ['GET'],
    //   statusCodes: [408, 429, 500, 502, 503, 504],
    //   calculateDelay: ({ attemptCount }: {
    //     attemptCount: number;
    //   }) => attemptCount * 3000,
    // },
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'Referer': 'https://www.betking.com/',
      'Origin': 'https://www.betking.com',
    },
    followRedirect: true,
    https: {
      rejectUnauthorized: false,
    },
  });
};
