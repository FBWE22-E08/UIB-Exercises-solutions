const fs = require('fs');

describe("Challenge 02 - Flexbox", () => {
    const scriptText = fs.readFileSync(__dirname + "/../challenges/02/main.css", "utf8");

    test("`flexbox` should be used to align the divs in a `row`", async () => {
        expect(scriptText.includes("display: flex;") || scriptText.includes("display: flex;")).toBeTruthy();
    });

    test("Reverse the order of the `divs`", async () => {
        expect(scriptText.includes("flex-flow: row-reverse;") || scriptText.includes("flex-flow: row-reverse;")).toBeTruthy();
    });
});
