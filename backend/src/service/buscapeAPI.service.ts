import puppeteer from 'puppeteer';

export default class BuscapeAPIService {
  public buscapeWebScrappingSearch = async (query: string, categoryId: string) => {
    const browser = await puppeteer.launch({
      defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.setViewport({
      width: 50000,
      height: 50000,
    });

    const pageInfoWithoutCategory = `https://www.buscape.com.br/search?q=${query}&hitsPerPage=48&page=1&sortBy=default&isDealsPage=false&enableRefinementsSuggestions=true`;

    const pageInfoWithCategory = `https://www.buscape.com.br/search?q=${query}&hitsPerPage=48&refinements%5B0%5D%5Bid%5D=categoryId&refinements%5B0%5D%5Bvalues%5D%5B0%5D=${categoryId}&isDealsPage=false&page=1&sortBy=default&enableRefinementsSuggestions=true`

    const pageInfo = categoryId === "" ? pageInfoWithoutCategory : pageInfoWithCategory;

    await page.goto(pageInfo, {
      waitUntil: "domcontentloaded",
    });

    let nextPage = true

    const result: any[] = [];

    while (nextPage) {
      const pageData = await page.evaluate(() => {
        const quoteList: NodeList = document.querySelectorAll(".SearchCard_ProductCard_Inner__7JhKb");

        return Array.from(quoteList)
          .map((quote: any) => {
            const descriptionQuerySelector = quote.querySelector(".SearchCard_ProductCard_Name__ZaO5o") as HTMLDivElement;
            const description: string = descriptionQuerySelector.innerHTML;

            const imgQuerySelector = quote.querySelector(".SearchCard_ProductCard_Image__ffKkn img") as HTMLImageElement;
            const img: string = imgQuerySelector.src;

            const priceQuerySelector = quote.querySelector('.Text_MobileHeadingS__Zxam2') as HTMLDivElement;
            const price: string = priceQuerySelector.innerHTML;

            const linkQuerySelector = quote as HTMLLinkElement;
            const link: string = linkQuerySelector.href
            return { description, img, price, link };
          });
      });

      result.push(...pageData);

      if (await page.$(`[data-testid="page-next"] a`)) {
        await Promise.all([
          page.click(`[data-testid="page-next"] a`),
          page.waitForNavigation({ waitUntil: 'networkidle2' })
        ]);
      } else {
        break
      }
    }

    await browser.close();

    return { code: 200, result };
  }
}
