const fs = require('fs');

describe("Challenge 06 - Flexbox", () => {
    const scriptText = fs.readFileSync(__dirname + "/../challenges/06/main.css", "utf8");

    test("Use flexbox to display all `divs` in one column", async () => {
        expect(scriptText.includes("display: flex;") || scriptText.includes("display: flex;")).toBeTruthy();
        expect(scriptText.includes("flex-flow: column;") || scriptText.includes(" flex-flow: column;")).toBeTruthy();
    });

    test("Display the `divs` in the center of the page", async () => {
        expect(scriptText.includes("align-items: center;") || scriptText.includes("align-items: center;")).toBeTruthy();
    });
});