
import {getStepLabelFromFieldIndex} from "./get-step-label-from-field-index.ts";
import {fieldValues, typeHistoryItem} from "../types/types.ts";

export const createNewStepObject = (lastStep: typeHistoryItem, indexOfNewStep: number, indexOfFieldOfNewStep: number): typeHistoryItem => {

    const newBoard = Array.from(lastStep.board); // Copy last board
    newBoard[indexOfFieldOfNewStep] = indexOfNewStep % 2 === 0 ? fieldValues.x : fieldValues.o; // Set new value on board

    // Make new history object
    return {
        board: newBoard,
        stepLabel: getStepLabelFromFieldIndex(indexOfFieldOfNewStep),
        stepIndex: indexOfNewStep,
        clickedFieldIndex: indexOfFieldOfNewStep,
    }
}
