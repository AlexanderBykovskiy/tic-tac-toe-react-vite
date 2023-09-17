import {createNewStepObject} from "./create-new-step-object.ts";
import {getStepLabelFromFieldIndex} from "./get-step-label-from-field-index.ts";
import {fieldValues, typeHistoryItem} from "../../../shared/types/types.ts";

test('Testing createNewStepObject function', () => {

    const emptyBoard = Array(9).fill(null);
    const newBoard = Array.from(emptyBoard);
    newBoard[4] = fieldValues.x;

    const firstStep: typeHistoryItem = {
        board: emptyBoard,
        stepLabel: 'Start',
        stepIndex: 0,
        clickedFieldIndex: null,
    };
    const indexOfNewStep = 0;
    const indexOfFieldOfNewStep = 4;

    expect(createNewStepObject(firstStep, indexOfNewStep, indexOfFieldOfNewStep)).toEqual({
        board: newBoard,
        stepLabel: getStepLabelFromFieldIndex(indexOfFieldOfNewStep),
        stepIndex: indexOfNewStep,
        clickedFieldIndex: indexOfFieldOfNewStep,
    });
});
