import {typeGameBoard, typeGameFieldValue} from "../../../shared/types/types.ts";

export type typeGameBoardProps = {
    board: typeGameBoard
    historyStepNumber: number
    onAddStep: (index: number) => void
}

export type typeGameFieldProps = {
    index: number
    historyStepNumber: number
    fieldValue: typeGameFieldValue
    onAddStep?: () => void
}
