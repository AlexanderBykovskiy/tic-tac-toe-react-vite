import {historyStates, typeHistoryItem} from "../../../shared/types/types.ts";
import {getStepLabelFromStepIndex} from "./get-step-label-from-step-index.ts";

export const createNewStepObject = (lastStep: typeHistoryItem, indexOfNewStep: number, indexOfFieldOfNewStep: number, statusOfNewStep: historyStates): typeHistoryItem => {

    const newBoard = Array.from(lastStep.board); // Copy last board
    newBoard[indexOfFieldOfNewStep] = indexOfNewStep % 2 === 0 ? "x" : "o"; // Set new value on board

    // Make new history object
    return {
        board: newBoard,
        stepLabel: getStepLabelFromStepIndex(indexOfFieldOfNewStep),
        stepIndex: indexOfNewStep,
        clickedFieldIndex: indexOfFieldOfNewStep,
        status: statusOfNewStep,
    }
}
