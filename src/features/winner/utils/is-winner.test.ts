import {isWinner} from "./is-winner.ts";
import {fieldValues, typeGameBoard} from "../../../shared/types/types.ts";

test('Testing isWinner function', () => {
    const board1: typeGameBoard = [null, null, null, null, null, null, null, null, null];
    expect(isWinner(board1)).toBe(null);
    const board2: typeGameBoard = [fieldValues.x, fieldValues.x, fieldValues.x, fieldValues.o, null, fieldValues.o, null, null, null];
    expect(isWinner(board2)).toBe(fieldValues.x);
    const board3: typeGameBoard = [fieldValues.o, fieldValues.x, null, fieldValues.o, null, fieldValues.x, fieldValues.o, fieldValues.x, null];
    expect(isWinner(board3)).toBe(fieldValues.o);
});
