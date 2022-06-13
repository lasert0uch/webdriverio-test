

describe('ebay website product search', () => {

    it('should open the URL & verify the Title', async () => {
        await browser.url('https://www.ebay.com/');
        await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay'
        );
    });

    it('should search for a product & verify the search text value', async () => {
        const searchInput = await $('#gh-ac');
        const searchBtn = await $('#gh-btn');
        await browser.pause(2000);

        await searchInput.addValue('Laptop');
        await browser.pause(2000);

        await searchBtn.click();

        expect(searchInput).toHaveValue('Laptop');

    });

    it('should ridirect to a new page & verify the title', async () => {
        await expect(browser).toHaveTitle('laptop: Search Result | eBay');
    });

    it('SHOULD UPDATE THE SEARCH CATEGORY', async () => {
        const category = await $('#gh-cat option:nth-child(1)');

        expect(category).toHaveText('PC Laptops & Netbooks');

    });


});