const timeout = 15000;

// Test des fonctionnalités d'authentification
describe("Auth features", () => {
    let page;

    test('login and logout', async () => {
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#user-name');
        await page.waitForSelector('#password');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.waitForSelector('#login-button');
        await page.click('#login-button');

        console.log("connected")

        const searchValue = await page.$eval('.title', (el) => el.innerText);
        const ariaHiddenValue = await page.evaluate('document.querySelector(".bm-menu-wrap").getAttribute("aria-hidden")')

        await page.waitForSelector('#react-burger-menu-btn');
        await page.click('#react-burger-menu-btn');

        await page.waitFor(2000);
        await page.screenshot({path: './tests/img/menuOpened.png'});

        await page.click('#logout_sidebar_link');

        console.log("disconnected")
        await page.screenshot({path: './tests/img/dc.png'});
    }, timeout);

    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
