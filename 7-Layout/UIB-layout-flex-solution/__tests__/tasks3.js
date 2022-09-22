const fs = require('fs');

describe("Challenge 03 - Flexbox", () => {
    const scriptText = fs.readFileSync(__dirname + "/../challenges/03/main.css", "utf8");

    test("Use flexbox to display all `divs` in a column in reverse order ", async () => {
        expect(scriptText.includes("display: flex;") || scriptText.includes("display: flex;")).toBeTruthy();
        expect(scriptText.includes("flex-flow: column-reverse wrap;") || scriptText.includes("flex-flow: column-reverse wrap;")).toBeTruthy();
    });

    test("`divs` should be centered on page", async () => {
        expect(scriptText.includes("align-items: center;") || scriptText.includes("align-items: center;")).toBeTruthy();
    });
});
