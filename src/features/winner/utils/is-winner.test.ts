import {isWinner} from "./is-winner.ts";
import {fieldValues, typeGameBoard} from "../../history/types/types.ts";

describe('Utils is-winner:', () => {

    test('Testing isWinner function (null)', () => {
        const board1: typeGameBoard = [null, null, null, null, null, null, null, null, null];
        expect(isWinner(board1)).toBe(null);
    });

    test('Testing isWinner function (x, [0, 1, 2])', () => {
        const board2: typeGameBoard = [fieldValues.x, fieldValues.x, fieldValues.x, fieldValues.o, null, fieldValues.o, null, null, null];
        expect(isWinner(board2)).toEqual({value: fieldValues.x, winningCombination: [0, 1, 2]});
    });

    test('Testing isWinner function (o, [0, 3, 6])', () => {
        const board3: typeGameBoard = [fieldValues.o, fieldValues.x, null, fieldValues.o, null, fieldValues.x, fieldValues.o, fieldValues.x, null];
        expect(isWinner(board3)).toEqual({value: fieldValues.o, winningCombination: [0, 3, 6]});
    });

});

