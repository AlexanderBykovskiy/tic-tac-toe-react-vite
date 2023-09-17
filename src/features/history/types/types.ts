// Valid values in the field of game board
export enum fieldValues {
    x = 'x',
    o = 'o',
}

// Available values in the field
export type typeGameFieldValue = null | fieldValues

// Array of game board values (for one step)
export type typeGameBoard = typeGameFieldValue[]

// Game history
export type typeHistoryItem = {
    board: typeGameBoard,
    stepLabel: string,
    stepIndex: number,
    clickedFieldIndex: number | null,
}

// All game history (all steps)
export type typeHistory = typeHistoryItem[]

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
