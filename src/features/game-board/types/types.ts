import {historyStates, typeGameFieldValue, typeHistoryItem} from "../../../shared/types/types.ts";

export type typeGameBoardProps = {
    lastStep: typeHistoryItem
    winner: typeGameFieldValue
    stepIndex: number
    onAddStep: (index: number, statusOfNewStep: historyStates) => void
}

export type typeGameFieldProps = {
    index: number
    stepIndex: number
    fieldValue: typeGameFieldValue
    winner: typeGameFieldValue
    onAddStep?: () => void
}
