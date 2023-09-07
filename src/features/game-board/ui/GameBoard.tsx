import React from "react";
import {typeGameBoardProps} from "../types/types.ts";
import GameField from "./GameField.tsx";


const GameBoard: React.FC<typeGameBoardProps> = ({board, onAddStep}) => {
    return(
        <div className="relative">
            <div className="absolute l-0 h-full w-0">
                <div className="absolute h-full right-4 grid grid-rows-3 items-center text-gray-400 font-semibold">
                    <div>A</div>
                    <div>B</div>
                    <div>C</div>
                </div>
            </div>

            <div className="absolute top-0 h-0 w-full">
                <div className="absolute bottom-2 w-full grid grid-cols-3 justify-items-center text-gray-400 font-semibold">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>

            <div className="grid grid-cols-3">
                {board.map((item, index) => {
                    return(
                        <GameField
                            key={index}
                            index={index}
                            fieldValue={item}
                            onAddStep={board[index] ? undefined : () => onAddStep(index)}
                        />
                    )
                })}
            </div>
        </div>

    )
}

export default GameBoard;
