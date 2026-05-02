import test, { expect } from "@playwright/test";

test ("step 1: Go to page playwright vn", async({page}) =>{
    await page.goto("https://material.playwrightvn.com/");
    
    await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();

    const addToCartButton1 = page.locator('button[data-product-id="1"]');

    const addToCartButton2 = page.locator('button[data-product-id="2"]');

    const addToCartButton3 = page.locator('button[data-product-id="3"]');

    await addToCartButton1.click();
    await addToCartButton1.click();

    await addToCartButton2.click();
    await addToCartButton2.click();
    await addToCartButton2.click();

    await addToCartButton3.click();
    await page.waitForTimeout(3000);
})

