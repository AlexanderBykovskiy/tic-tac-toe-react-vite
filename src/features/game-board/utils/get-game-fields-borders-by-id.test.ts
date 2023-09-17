import {getGameFieldsBordersById} from "./get-game-fields-borders-by-id.ts";

test('Testing getGameFieldsBordersById function', () => {
    expect(getGameFieldsBordersById(0)).toBe("border-r border-b");
    expect(getGameFieldsBordersById(1)).toBe("border-b");
    expect(getGameFieldsBordersById(2)).toBe("border-b border-l");
    expect(getGameFieldsBordersById(3)).toBe("border-r");
    expect(getGameFieldsBordersById(4)).toBe("");
    expect(getGameFieldsBordersById(5)).toBe("border-l");
    expect(getGameFieldsBordersById(6)).toBe("border-r border-t");
    expect(getGameFieldsBordersById(7)).toBe("border-t");
    expect(getGameFieldsBordersById(8)).toBe("border-l border-t");
});
