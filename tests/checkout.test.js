const timeout = 15000;

// Test des fonctionnalités de prise de commande
describe("Checkout process", () => {
    let page;

    test('checkout', async () => {
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

        await page.waitFor(2000);
        await page.screenshot({path: './tests/img/cart.png'});

        const html = await page.$eval('.inventory_item_name', e => e.innerHTML);
        expect(html).toContain("Sauce Labs Bike Light")

        await page.click('#checkout');
        await page.waitFor(1000);

        const html2 = await page.$eval('.title', e => e.innerHTML);
        expect(html2).toContain("Checkout: Your Information")

        await page.type('#first-name', 'Jean');
        await page.type('#last-name', 'Neymar');
        await page.type('#postal-code', '77777');

        await page.click('#continue');
        await page.waitFor(1000);

        const html3 = await page.$eval('.title', e => e.innerHTML);
        expect(html).toContain("Sauce Labs Bike Light")
        expect(html3).toContain("Checkout: Overview")

        await page.click('#finish');
        await page.waitFor(1000);



        await page.screenshot({path: './tests/img/checkout.png'});

    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
