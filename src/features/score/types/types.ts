export type typeScoreObj = {
    xScore: number,
    oScore: number,
}

export type typeScoreProps = {
    score: typeScoreObj
    onClearScore: () => void
}
