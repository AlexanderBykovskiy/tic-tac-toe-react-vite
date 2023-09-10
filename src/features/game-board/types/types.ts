import {historyStates, typeGameFieldValue, typeHistoryItem} from "../../../shared/types/types.ts";

export type typeGameBoardProps = {
    lastStep: typeHistoryItem
    winner: typeGameFieldValue
    onAddStep: (index: number, statusOfNewStep: historyStates) => void
}

export type typeGameFieldProps = {
    index: number
    fieldValue: typeGameFieldValue
    onAddStep?: () => void
}
