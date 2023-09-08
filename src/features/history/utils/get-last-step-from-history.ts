import {typeHistory} from "../../../shared/types/types.ts";

export const getLastStepFromHistory = (history: typeHistory) => {
    return history[history.length - 1];
}
