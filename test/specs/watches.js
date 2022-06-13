import { expect as chaiExpect } from 'chai';


describe('watches page', () => {

    it('should show the banner container', async () => {
        await browser.url('https://www.ebay.com/b/Wristwatches/31387/bn_2408451');
        const promoBanner = await $('.title-banner__right-image');

        await expect(promoBanner).toBeDisplayed();
        await browser.pause(2000);
    })

    it('should show the banner title', async () => {
        const infoTitle = await $('.title-banner__title');
        await expect(infoTitle).toHaveTextContaining(' New Wristwatch?');
        await browser.pause(2000);

    })

    //it ('should click on the claim cuppon button  & verify the new URL',async() => {
    // const claimCuppon =await $("//div[@class='hl-cta hl-banner__cta ebayui-ellipsis']//div[@class='hl-cta__text-only']");
    // await expect(claimCuppon).toHaveTextContaining('Claim coupon');
    //  await expect(claimCuppon).toBeClickable();
    //  await browser.pause(2000);

    // })// 

    it('should click on the watch  button  & verify the new URL', async () => {
        const watchButton = await $("//div[.='Casio']");
        // await expect(claimCuppon).toHaveLinkContaining('/thumbs/');
        await watchButton.click();
        await browser.pause(2000);
        const url = await browser.getUrl();

        chaiExpect(url).to.include('/Casio-Watches/');
        await expect(browser).toHaveUrl('https://www.ebay.com/b/Casio-Watches/31387/bn_2973204');
        await browser.pause(2000);

    })


})