const timeout = 30000;

// Test des fonctionnalités de gestion du panier
describe("Cart features", () => {
    let page;

    test('add to cart', async () => {

        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#user-name');
        await page.waitForSelector('#password');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.waitForSelector('#login-button');
        await page.click('#login-button');

        console.log('connected')

        await page.waitForSelector('#add-to-cart-sauce-labs-bike-light');
        await page.click('#add-to-cart-sauce-labs-bike-light');
        await page.click('.shopping_cart_link');

        // await page.waitFor(2000);

        await page.screenshot({path: './tests/img/cart.png'});

        // const html = await page.$eval('.inventory_item_name', e => e.innerHTML);
        // expect(html).toContain("Sauce Labs Bike Light")

    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
