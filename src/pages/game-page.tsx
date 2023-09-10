import Copyright from "../features/copyright/ui/copyright.tsx";
import Score from "../features/score/ui/score.tsx";
import React, {useState} from "react";
import {createEmptyBoard} from "../features/history/utils/create-empty-board.ts";
import GameBoard from "../features/game-board/ui/GameBoard.tsx";
import {historyStates, typeGameFieldValue, typeHistory} from "../shared/types/types.ts";
import HistoryBoard from "../features/history/ui/history-board.tsx";
import {createNewStepObject} from "../features/history/utils/create-new-step-object.ts";
import {getLastStepFromHistory} from "../features/history/utils/get-last-step-from-history.ts";
import {isWinner} from "../features/winner/utils/isWinner.ts";
import Winner from "../features/winner/ui/winner.tsx";

const GamePage: React.FC = () => {

    // Create blank board with firs
    const initialHistory: typeHistory = [{
        board: createEmptyBoard(),
        stepIndex: 0,
        stepLabel: 'Start',
        clickedFieldIndex: null,
        status: historyStates.start,
    }];

    const [history, setHistory] = useState<typeHistory>(initialHistory); // Create blank board and put to history

    const [winner, setWinner] = useState<typeGameFieldValue>(null);

    // On new game step handler
    const onAddStep = (indexOfFieldOfNewStep: number, statusOfNewStep: historyStates) => {
        const newHistoryStep = createNewStepObject(getLastStepFromHistory(history), history.length - 1, indexOfFieldOfNewStep, statusOfNewStep);
        setWinner(isWinner(newHistoryStep.board));
        const newHistory = Array.from(history);
        newHistory.push(newHistoryStep);
        setHistory(newHistory);
    }

    return (
        <div className="py-2 px-4 min-h-[100vh] bg-white flex flex-col gap-10">
            <Score/>
            <div className="flex-grow flex flex-col justify-center gap-14">
                <div className="flex-grow flex flex-col justify-center">
                    <div className="flex justify-center">
                        {/* Current state of game board it is the last element of history */}
                        <GameBoard
                            lastStep={getLastStepFromHistory(history)}
                            onAddStep={onAddStep}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    {winner
                        ? <Winner winner={winner}/>
                        : <HistoryBoard history={history} winner={winner}/>
                    }
                </div>
            </div>
            <Copyright/>
        </div>
    )
}

export default GamePage
