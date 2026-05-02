import test, { expect } from "@playwright/test";
import { parse } from "node:path";

test ("Bài học 3: Todo page", async({page}) =>{
    await page.goto("https://material.playwrightvn.com/");
    
    await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();

    const todoList = [
        "1. Finish Playwright lesson",
        "2. Review test cases",
        "3. Write automation script",
        "4. Fix flaky test",
        "5. Learn JavaScript basics",
        "6. Practice API testing",
        "7. Study SQL queries",
        "8. Review bug reports",
        "9. Update test documentation",
        "10. Attend team meeting",
        "11. Refactor test code",
        "12. Write test plan",
        "13. Learn Git commands",
        "14. Practice coding exercises",
        "15. Debug failing test",
        "16. Research new testing tools",
        "17. Prepare interview questions",
        "18. Practice English speaking",
        "19. Read QA blog",
        "20. Watch tech tutorial",
        "21. Clean room",
        "22. Do laundry",
        "23. Buy groceries",
        "24. Cook dinner",
        "25. Water plants",
        "26. Wash dishes",
        "27. Organize desk",
        "28. Take out trash",
        "29. Change bedsheets",
        "30. Clean bathroom","31. Pay bills",
        "32. Call family",
        "33. Fix something broken",
        "34. Declutter wardrobe",
        "35. Plan weekend",
        "36. Backup phone data",
        "37. Update apps",
        "38. Charge devices",
        "39. Clean laptop",
        "40. Rest properly",
        "41. Morning exercise",
        "42. Go jogging",
        "43. Drink 2L water",
        "44. Sleep early",
        "45. Meditate",
        "46. Stretch body",
        "47. Eat healthy meal",
        "48. Avoid junk food",
        "49. Walk 10k steps",
        "50. Practice yoga",
        "51. Reduce screen time",
        "52. Take vitamins",
        "53. Go to gym",
        "54. Relax eyes",
        "55. Take deep breaths",
        "56. Drink less coffee",
        "57. Avoid sugar",
        "58. Track calories",
        "59. Improve posture",
        "60. Take breaks",
        "61. Read 10 pages",
        "62. Write journal",
        "63. Set goals",
        "64. Reflect daily",
        "65. Practice gratitude",
        "66. Learn new skill",
        "67. Listen to podcast",
        "68. Improve communication",
        "69. Try something new",
        "70. Build discipline",
        "71. Practice patience",
        "72. Limit social media",
        "73. Learn mindfulness",
        "74. Improve confidence",
        "75. Plan career path",
        "76. Learn public speaking",
        "77. Practice self-love",
        "78. Let go of stress",
        "79. Build good habits",
        "80. Stay positive",
        "81. Watch movie",
        "82. Listen to music",
        "83. Play games",
        "84. Hang out with friends",
        "85. Take photos",
        "86. Travel somewhere",
        "87. Try new food",
        "88. Go shopping",
        "89. Watch comedy show",
        "90. Draw something",
        "91. Dance",
        "92. Sing karaoke",
        "93. Go café",
        "94. Play sports",
        "95. Watch YouTube",
        "96. Relax at home",
        "97. Explore new place",
        "98. Write something fun",
        "99. Do nothing ",
        "100. Enjoy life", 
      ];
      
    const input = page.locator('#new-task');
    const addBtn = page.locator('#add-task');

    for (const task of todoList) {
        await input.fill(task);
        await addBtn.click();
    }

    const deleteButtons = page.locator('[id$="-delete"]');

    const count = await deleteButtons.count();

    await page.on('dialog', async dialog => {
        await dialog.accept();
    });
    for (let i = count - 1; i >= 0; i--) {
        const btn = deleteButtons.nth(i);
        const id = await btn.getAttribute('id');
        if (!id) throw new Error('Missing id');
        const number = parseInt(id); 
        if (number % 2 !== 0) {
            await btn.click();
        }   
    }
    await page.waitForTimeout(5000);
})

