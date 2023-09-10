import {typeGameFieldValue, typeHistory} from "../../../shared/types/types.ts";

export type typeHistoryBoardProps = {
    history: typeHistory,
    winner: typeGameFieldValue,
    onClearHistory: () => void
}

export type typeDrawProps = {
    onClearHistory: () => void,
}
