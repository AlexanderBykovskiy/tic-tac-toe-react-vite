// Type of score object
export type typeScoreObj = {
    xScore: number,
    oScore: number,
}

// Type of Score component
export type typeScoreProps = {
    score: typeScoreObj
    onClearScore: () => void
}
