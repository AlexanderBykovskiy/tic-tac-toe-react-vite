import {typeGameFieldValue, typeHistoryItem} from "../../history/types/types.ts";
import {typeWinnerType} from "../../winner/types/types.ts";

// Types of game board component
export type typeGameBoardProps = {
    lastStep: typeHistoryItem
    winner: typeWinnerType | null
    stepIndex: number
    onAddStep: (index: number) => void
}

// Types on game field component
export type typeGameFieldProps = {
    index: number
    stepIndex: number
    fieldValue: typeGameFieldValue
    winner: typeWinnerType | null
    onAddStep?: () => void
}
