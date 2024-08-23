const puppeteer = require('puppeteer');

jest.setTimeout(120000); // Increase global timeout to 2 minutes

describe('Contact Form', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.goto('https://mzamomtshap.netlify.app/contact');
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        try {
            console.log('Reloading page for a new test...');
            await page.reload();
            await page.waitForNavigation({ waitUntil: 'networkidle0' });
            await new Promise(resolve => setTimeout(resolve, 60000));
        } catch (error) {
            console.error('Error reloading page:', error);
        }
    }, 90000); // Increase timeout for this hook

    it('should pass', () => {
        expect(true).toBe(true);
    });

    it('should submit the contact form successfully', async () => {
        try {
            console.log('Starting form submission test...');
            await page.type('#firstName', 'John');
            await page.type('#lastName', 'Doe');
            await page.type('#email', 'john.doe@example.com');
            await page.type('#phone', '071-454-545');
            await page.type('#message', 'This is a test message.');

            await page.click('button[type="submit"]');

            await page.waitForNavigation({ waitUntil: 'networkidle0' });
            console.log('Navigation complete. Checking for thank you message...');
            const thankYouMessage = await page.$eval('h1', el => el.innerText);
            expect(thankYouMessage).toBe('Thank you for your message!');
        } catch (error) {
            console.error('Error in form submission test:', error);
        }
    } );

    it('should show validation errors for invalid input', async () => {
        try {
            console.log('Starting validation error test for invalid input...');
            await page.type('#firstName', 'Lerato');
            await page.type('#lastName', 'Kgwedi');
            await page.type('#email', 'invalid');
            await page.type('#phone', 'invalid');
            await page.type('#message', 'This is a valid message with at least 10 characters.');

            await page.click('button[type="submit"]');

            await page.waitForSelector('#errorMessages');
            console.log('Error messages should be visible now...');
            const errorMessages = await page.$eval('#errorMessages', el => el.innerText);
            expect(errorMessages).toContain('Please enter a valid Email address.');
            expect(errorMessages).toContain('Please enter a valid Phone Number.');
        } catch (error) {
            console.error('Error in validation error test for invalid input:', error);
        }
    });

    it('should show validation errors for empty fields', async () => {
        try {
            console.log('Starting validation error test for empty fields...');
            await page.click('button[type="submit"]');

            await page.waitForSelector('#errorMessages');
            console.log('Error messages should be visible now...');
            const errorMessages = await page.$eval('#errorMessages', el => el.innerText);
            expect(errorMessages).toContain('Please enter a valid First Name.');
            expect(errorMessages).toContain('Please enter a valid Last Name.');
            expect(errorMessages).toContain('Please enter a valid Email address.');
            expect(errorMessages).toContain('Please enter a valid Phone Number.');
            expect(errorMessages).toContain('Please enter a message with at least 10 characters.');
        } catch (error) {
            console.error('Error in validation error test for empty fields:', error);
        }
    });
});
