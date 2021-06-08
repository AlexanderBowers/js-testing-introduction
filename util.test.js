const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require ('./util');

test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)'); 
    const text2 = generateText('Anna', 28);
    expect(text2).toBe('Anna (28 years old)')
});

test('should ouput data-less text', () => {
    const text = generateText('', null)
    expect(text).toBe(' (null years old)')
})

test('should generate a valid text ouput', () => {
    const text = checkAndGenerate('Max', 29)
    expect(text).toBe('Max (29 years old)'); 
})

test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('file:///C:/Users/Alex/dev/js-testing-introduction/index.html');
});