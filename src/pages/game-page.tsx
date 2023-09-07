import Copyright from "../features/copyright/ui/copyright.tsx";
import Score from "../features/score/ui/score.tsx";
import {useState} from "react";
import {createEmptyBoard} from "../shared/utils/create-empty-board.ts";
import GameBoard from "../features/game-board/ui/GameBoard.tsx";
import {typeHistory} from "../shared/types/types.ts";

const GamePage = () => {

    const [history, setHistory] = useState<typeHistory>([createEmptyBoard()]); // Create blank board and put to history

    const onAddStep = (index: number) => {
        const currentValue = history.length % 2 !== 0 ? "x" : "o";
        const newStep = Array.from(history[history.length - 1]);
        newStep[index] = currentValue;
        const newHistory = Array.from(history);
        newHistory.push(newStep);
        setHistory(newHistory);
    }

    return (
        <div className="py-2 px-4 min-h-[100vh] bg-white flex flex-col gap-10">
            <Score/>
            <div className="flex-grow flex flex-col justify-center gap-10">
                <div className="flex justify-center">
                    {/* Current state of game board it is the last element of history */}
                    <GameBoard
                        board={history[history.length - 1]}
                        historyStepNumber={history.length - 1}
                        onAddStep={onAddStep}
                    />
                </div>
                <div className="flex justify-center">
                    the game history here
                </div>
            </div>
            <Copyright/>
        </div>
    )
}

export default GamePage
