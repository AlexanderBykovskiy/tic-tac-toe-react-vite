import {fieldValues} from "../../history/types/types.ts";

// Types of Winner component
export type typeWinnerProps = {
    winner: typeWinnerType,
    onClearHistory: () => void,
}

// Type of winner object
export type typeWinnerType = {
    value: fieldValues | null,
    winningCombination: number[],
}
