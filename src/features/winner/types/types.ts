import {typeGameFieldValue} from "../../../shared/types/types.ts";

// Types of Winner component
export type typeWinnerProps = {
    winner: typeGameFieldValue,
    onClearHistory: () => void,
}
