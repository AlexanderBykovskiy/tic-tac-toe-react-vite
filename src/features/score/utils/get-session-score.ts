import {typeScoreObj} from "../types/types.ts";

export const getSessionScore = (): typeScoreObj => {
    const currentXScore = sessionStorage.getItem("xScore");
    const currentOScore = sessionStorage.getItem("oScore");
    return ({
        xScore: Number(currentXScore) ?? 0,
        oScore: Number(currentOScore) ?? 0,
    })
}

// TODO: add tests
