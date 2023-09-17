import {typeGameFieldValue, typeHistoryItem} from "../../../shared/types/types.ts";

// Types of game board component
export type typeGameBoardProps = {
    lastStep: typeHistoryItem
    winner: typeGameFieldValue
    stepIndex: number
    onAddStep: (index: number) => void
}

// Types on game field component
export type typeGameFieldProps = {
    index: number
    stepIndex: number
    fieldValue: typeGameFieldValue
    winner: typeGameFieldValue
    onAddStep?: () => void
}
