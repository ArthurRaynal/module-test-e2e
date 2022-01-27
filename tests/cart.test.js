const timeout = 30000;

// Test des fonctionnalités de gestion du panier
describe("Cart features", () => {
    let page;

    test('add to cart', async () => {

        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#user-name');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.waitForSelector('#password');
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.waitForSelector('#login-button');
        await page.click('#login-button');
        // à compléter
        await page.waitForSelector('#add-to-cart-sauce-labs-backpack');
        await page.click('#add-to-cart-sauce-labs-backpack');
        await page.click('.shopping_cart_link');

        await page.waitForSelector('.cart_list');

        const html = await page.$eval('body', e => e.innerHTML);
        expect(html).toContain("inventory_item_name");
        await page.click('#remove-sauce-labs-backpack');

        await page.screenshot({path: './tests/img/cart.png'});

    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
