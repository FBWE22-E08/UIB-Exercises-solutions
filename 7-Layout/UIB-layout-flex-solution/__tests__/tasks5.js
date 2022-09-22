const fs = require('fs');

describe("Challenge 05 - Flexbox", () => {
    const scriptText = fs.readFileSync(__dirname + "/../challenges/05/main.css", "utf8");

    test("Use flexbox to display the `divs` in one row", async () => {
        expect(scriptText.includes("display: flex;") || scriptText.includes("display: flex;")).toBeTruthy();
        expect(scriptText.includes(" flex-flow: row nowrap;") || scriptText.includes(" flex-flow: row nowrap;")).toBeTruthy();
    });

    test("Display the `divs` in the center of the container", async () => {
        expect(scriptText.includes(" justify-content: center;") || scriptText.includes(" justify-content: center;")).toBeTruthy();
    });
});
