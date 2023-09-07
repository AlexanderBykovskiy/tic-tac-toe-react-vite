import {typeScoreObj} from "../types/types.ts";

export const setScore = (scoreObj: typeScoreObj): void => {
    sessionStorage.setItem("xScore", scoreObj.xScore.toString());
    sessionStorage.setItem("oScore", scoreObj.oScore.toString());
}
