import {typeScoreObj} from "./types.ts";

export const getScore = (): typeScoreObj => {
    const currentXScore = sessionStorage.getItem("xScore");
    const currentOScore = sessionStorage.getItem("oScore");
    return ({
        xScore: Number(currentXScore) ?? 0,
        oScore: Number(currentOScore) ?? 0,
    })
}
