import Copyright from "../features/copyright/ui/copyright.tsx";
import Score from "../features/score/ui/score.tsx";
import {useState} from "react";
import {createEmptyBoard} from "../shared/utils/create-empty-board.ts";
import GameBoard from "../features/game-board/ui/GameBoard.tsx";
import {typeHistory} from "../shared/types/types.ts";

const GamePage = () => {

    const [history] = useState<typeHistory>([createEmptyBoard()]); // Create blank board and put to history

    return (
        <div className="py-2 px-4 min-h-[100vh] bg-white flex flex-col gap-10">
            <Score/>
            <div className="flex-grow flex flex-col justify-center gap-10">
                <div className="flex justify-center">
                    {/* Current state of game board it is the last element of history */}
                    <GameBoard board={history[history.length - 1]}/>
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
