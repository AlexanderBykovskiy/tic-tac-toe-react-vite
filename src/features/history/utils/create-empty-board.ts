import {typeGameBoard} from "../types/types.ts";

// Create empty array with 9 elements with null values
export const createEmptyBoard = () => {
    const board: typeGameBoard = new Array(9).fill(null);
    return board;
}
