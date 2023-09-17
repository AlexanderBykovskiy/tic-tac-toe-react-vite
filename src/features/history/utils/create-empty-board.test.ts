import {createEmptyBoard} from "./create-empty-board.ts";

test('Testing createEmptyBoard function', () => {
    expect(createEmptyBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
});
