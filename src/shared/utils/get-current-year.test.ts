import {getCurrentYear} from "./get-current-year.ts";

test('Testing getCurrentYear function', () => {
    const now = new Date();
    expect(getCurrentYear()).toBe(now.toLocaleDateString(undefined, {year: "numeric"}));
});
