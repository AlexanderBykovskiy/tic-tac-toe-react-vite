import Copyright from "../features/copyright/ui/copyright.tsx";
import Score from "../features/score/ui/score.tsx";
import React, {useEffect, useState} from "react";
import {createEmptyBoard} from "../features/history/utils/create-empty-board.ts";
import GameBoard from "../features/game-board/ui/GameBoard.tsx";
import HistoryBoard from "../features/history/ui/history-board.tsx";
import {createNewStepObject} from "../features/history/utils/create-new-step-object.ts";
import {getLastStepFromHistory} from "../features/history/utils/get-last-step-from-history.ts";
import {isWinner} from "../features/winner/utils/is-winner.ts";
import Winner from "../features/winner/ui/winner.tsx";
import {getSessionScore} from "../features/score/utils/get-session-score.ts";
import {setSessionScore} from "../features/score/utils/set-session-score.ts";
import {fieldValues, typeHistory} from "../features/history/types/types.ts";
import {typeWinnerType} from "../features/winner/types/types.ts";

// Main component of page
const GamePage: React.FC = () => {

    // Create first history step object with blank game board
    const initialHistory: typeHistory = [{
        board: createEmptyBoard(),
        stepIndex: 0,
        stepLabel: 'Start',
        clickedFieldIndex: null,
    }];

    // History state (this is where all the steps of the game are stored)
    const [history, setHistory] = useState<typeHistory>(initialHistory); // Create blank board and put to history

    // Current game step (important to keep, when moving through history)
    const [stepIndex, setStepIndex] = useState(0);

    // State for storing information about the winner ('x', 'o' or null if the game is still in progress)
    const [winner, setWinner] = useState<typeWinnerType | null>(null); // Set winner store

    // State to keep a current score for all games played
    const [score, setScore] = useState(getSessionScore()); // Get score from Session Storage

    // On new game step handler
    const onAddStep = (indexOfFieldOfNewStep: number) => {
        const newHistoryStep = createNewStepObject(getLastStepFromHistory(history.slice(0, stepIndex + 1)), stepIndex, indexOfFieldOfNewStep); // Create a new step in the story
        setWinner(isWinner(newHistoryStep.board)); // Check if a winner has appeared after this step and write it to the state
        const newHistory = Array.from(history.slice(0, stepIndex + 1)); // Update history (delete subsequent steps if the pointer is not on the last step)
        newHistory.push(newHistoryStep);
        setHistory(newHistory);
        setStepIndex(stepIndex + 1);
    }

    // On clear history
    const onClearHistory = () => {
        setHistory(initialHistory); // Reset history
        setWinner(null); // Reset information about the winner
        setStepIndex(0); // Reset step index
    }

    // On clear score
    const onClearScore = () => {
        const clearScore = {xScore: 0, oScore: 0};
        setScore(clearScore);
        setSessionScore(clearScore);
    }

    // Keep an eye on the winner
    useEffect(() => {
        if (score && winner) {
            if (winner.value === fieldValues.x) setScore({...score, xScore: score.xScore + 1});
            if (winner.value === fieldValues.o) setScore({...score, oScore: score.oScore + 1});
        }
    }, [winner]);

    // Save current score to Session Storage
    useEffect(() => {
        if (score) {
            setSessionScore(score);
        }
    }, [score]);


    return (
        <div className="py-2 px-4 min-h-[100vh] bg-white flex flex-col gap-10">
            {/* Component showing the total score for the session */}
            <Score score={score} onClearScore={onClearScore}/>

            {/* Layout with game board */}
            <div className="flex-grow flex flex-col justify-center gap-14">
                <div className="flex-grow flex flex-col justify-center">
                    <div className="flex justify-center">
                        {/* Current state of game board it is the last element of history */}
                        <GameBoard
                            lastStep={history[stepIndex]}
                            stepIndex={stepIndex}
                            winner={winner}
                            onAddStep={onAddStep}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    {winner
                        ? <Winner winner={winner} onClearHistory={onClearHistory}/>
                        : <HistoryBoard history={history} winner={winner} stepIndex={stepIndex} onSetStepIndex={setStepIndex} onClearHistory={onClearHistory}/>
                    }
                </div>
            </div>

            {/* Component showing copyright information */}
            <Copyright/>
        </div>
    )
}

export default GamePage
