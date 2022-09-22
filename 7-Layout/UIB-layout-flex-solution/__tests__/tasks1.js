const fs = require('fs');

describe("Challenge 01 - Flexbox", () => {
    const scriptText = fs.readFileSync(__dirname + "/../challenges/01/main.css", "utf8");

    test("align all the `divs` in a row", async () => {
        expect(scriptText.includes("display: flex;") || scriptText.includes("display: flex;")).toBeTruthy();
    });

    test("`divs` Should appear on multiple `rows`", async () => {
        expect(scriptText.includes("flex-flow: row wrap;") || scriptText.includes("flex-flow: row wrap; ")).toBeTruthy();
    });

    test("`rows` inside the container should be `centered`", async () => {
        expect(scriptText.includes("justify-content: center;") || scriptText.includes("justify-content: center;")).toBeTruthy();
    });
});
