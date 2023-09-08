export type typeGameFieldValue = null | 'x' | 'o'

export type typeGameBoard = typeGameFieldValue[]

export enum historyStates {
    start = 'start',
    inProcess = 'inProcess',
    finished = 'finished',
}

export type typeHistoryItem = {
    board: typeGameBoard,
    stepLabel: string,
    stepIndex: number,
    clickedFieldIndex: number | null,
    status: historyStates,
}

export type typeHistory = typeHistoryItem[]
