const Scraper = require('../Scraper');

(async () => {
  const scraper = new Scraper({ headless: false });
  await scraper.init();
  await scraper.navigate('http://example.com/');
  const title = await scraper.getText('h1');
  console.log({ title });
  await scraper.closeBrowser();
})();