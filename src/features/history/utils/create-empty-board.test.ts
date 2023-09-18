import {createEmptyBoard} from "./create-empty-board.ts";

describe('Utils create-empty-board:', () => {

    test('Testing createEmptyBoard function', () => {
        expect(createEmptyBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
    });

});
