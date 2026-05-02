import test, { expect } from "@playwright/test";

test ("Bài học 4: Personal notes", async({page}) =>{
    await page.goto("https://material.playwrightvn.com/");
    
    await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();

    const notes : {title: string, content: string}[]=[
        {title: "Note 1", content: "Content 1"}, 
        { title: "Note 2", content: "Content 2" },
        { title: "Note 3", content: "Content 3" },
        { title: "Note 4", content: "Content 4" },
        { title: "Note 5", content: "Content 5" },
        { title: "Note 6", content: "Content 6" },
        { title: "Note 7", content: "Content 7" },
        { title: "Note 8", content: "Content 8" },
        { title: "Note 9", content: "Content 9" },
        { title: "Note 10", content: "Content 10" }, 
    ];
    const inputTitle =  page.locator('#note-title');

    const inputContent =  page.locator('#note-content');

    const addBtn = page.getByRole('button', {name : 'Add Note'})
    
    for (const note of notes) {
        await inputTitle.fill(note.title);
        await inputContent.fill(note.content);
        await addBtn.click();
    }
    //await page.waitForTimeout(5000);
    await page.locator('#search').fill("Note 1");
    //await page.waitForTimeout(5000);
})

