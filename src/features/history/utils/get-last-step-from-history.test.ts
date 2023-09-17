import {getLastStepFromHistory} from "./get-last-step-from-history.ts";
import {createNewStepObject} from "./create-new-step-object.ts";
import {fieldValues, typeHistory, typeHistoryItem} from "../types/types.ts";

test('Testing getLastStepFromHistory function', () => {
    // First game step
    const emptyBoard = Array(9).fill(null);
    const firstStep: typeHistoryItem = {
        board: emptyBoard,
        stepLabel: 'Start',
        stepIndex: 0,
        clickedFieldIndex: null,
    };
    const history: typeHistory = [];
    history.push(firstStep);

    // Last game step
    const lastBoard = Array.from(emptyBoard);
    lastBoard[4] = fieldValues.x;
    const indexOfNewStep: number = 0;
    const indexOfFieldOfNewStep: number = 4;
    const stepLabel: string = 'B2';
    history.push(createNewStepObject(firstStep, indexOfNewStep, indexOfFieldOfNewStep));

    expect(getLastStepFromHistory(history)).toEqual({
        board: lastBoard,
        stepLabel: stepLabel,
        stepIndex: indexOfNewStep,
        clickedFieldIndex: indexOfFieldOfNewStep,
    });
});
