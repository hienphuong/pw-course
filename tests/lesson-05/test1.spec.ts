import test, { expect } from "@playwright/test";

test ("step 1: Go to page playwright vn", async({page}) =>{
    await page.goto("https://material.playwrightvn.com/");
    
    await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();
    
    await page.locator('#username').fill('Sand');
    
    await page.locator('#email').fill('sand@gmail.com');
   
    await page.locator('#female').check();
    
    await page.locator('#traveling').check();
    
    await page.locator('#interests').selectOption('music');
 
    await page.locator('#country').selectOption('uk');
    
    await page.locator('#dob').fill('1996-04-14');
  
    await page.locator('#profile').setInputFiles('files/sand.jpeg');
    
    await page.locator('#bio').fill('Curious QA engineer passionate about learning, automation, and building reliable software solutions');

    await page.locator('#rating').fill('6');

    await page.locator('#favcolor').fill('#e194b5');

    await page.locator('#newsletter').check();

    await page.locator('.slider').click();
    
    const star = page.locator('#starRating');

    await star.waitFor(); 

    const box = await star.boundingBox();

    if (!box) throw new Error('Star rating not visible');

    await star.click({
        position: {
            x: box.width * 0.9,   
            y: box.height / 2
        }
    });
    await page.getByRole('button', {name: 'Register'}).click();
    await page.waitForTimeout(5000);


})

