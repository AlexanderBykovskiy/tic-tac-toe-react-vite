// Create empty array with 9 elements with null values
import {typeGameBoard} from "../types/types.ts";

export const createEmptyBoard = () => {
    const board: typeGameBoard = new Array(9).fill(null);
    return board;
}
