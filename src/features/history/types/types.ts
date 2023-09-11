import {typeGameFieldValue, typeHistory} from "../../../shared/types/types.ts";

export type typeHistoryBoardProps = {
    history: typeHistory
    winner: typeGameFieldValue
    stepIndex: number
    onSetStepIndex: (index: number) => void
    onClearHistory: () => void
}

export type typeDrawProps = {
    onClearHistory: () => void
}
