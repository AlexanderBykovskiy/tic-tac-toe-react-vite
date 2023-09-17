import {typeHistory} from "../types/types.ts";

// Get last item of history
export const getLastStepFromHistory = (history: typeHistory) => {
    return history[history.length - 1];
}
