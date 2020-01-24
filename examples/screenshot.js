const Scraper = require('../Scraper');

(async () => {
  const scraper = new Scraper({ headless: false });
  await scraper.init();
  await scraper.navigate('https://bot.sannysoft.com');
  // Directly access to puppeteer page object
  await scraper.page.screenshot({ path: 'testresult.png', fullPage: true })
  await scraper.closeBrowser();
})();