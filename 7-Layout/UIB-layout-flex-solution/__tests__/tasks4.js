const fs = require('fs');

describe("Cahllenge 04 - Flexbox", () => {
    const scriptText = fs.readFileSync(__dirname + "/../challenges/04/main.css", "utf8");

    test("Use flexbox to display all `divs` in a `row` at the bottom of the container ", async () => {
        expect(scriptText.includes("display: flex;") || scriptText.includes("display: flex;")).toBeTruthy();
        expect(scriptText.includes("flex-flow: row nowrap;") || scriptText.includes(" flex-flow: row nowrap;")).toBeTruthy();
    });

    test("`divs` Should only take up one line", async () => {
        expect(scriptText.includes("align-items: flex-end;") || scriptText.includes("align-items: flex-end;")).toBeTruthy();
    });
});
