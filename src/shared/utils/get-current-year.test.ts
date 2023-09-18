import {getCurrentYear} from "./get-current-year.ts";

describe('Utils get-current-year:', () => {

    test('Testing getCurrentYear function', () => {
        const now = new Date();
        expect(getCurrentYear()).toBe(now.toLocaleDateString(undefined, {year: "numeric"}));
    });

});
