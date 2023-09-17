import {typeGameFieldValue, typeHistory} from "../../../shared/types/types.ts";

// Types of history line component
export type typeHistoryBoardProps = {
    history: typeHistory
    winner: typeGameFieldValue
    stepIndex: number
    onSetStepIndex: (index: number) => void
    onClearHistory: () => void
}

// Types of draw component (end of game without winners)
export type typeDrawProps = {
    onClearHistory: () => void
}
