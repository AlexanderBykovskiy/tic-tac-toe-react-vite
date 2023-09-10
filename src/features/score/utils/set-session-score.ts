import {typeScoreObj} from "../types/types.ts";

export const setSessionScore = (scoreObj: typeScoreObj): void => {
    sessionStorage.setItem("xScore", scoreObj.xScore.toString());
    sessionStorage.setItem("oScore", scoreObj.oScore.toString());
}
