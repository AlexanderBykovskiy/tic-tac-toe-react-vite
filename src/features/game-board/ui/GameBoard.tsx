import React from "react";
import {typeGameBoardProps} from "../types/types.ts";
import GameField from "./GameField.tsx";


const GameBoard: React.FC<typeGameBoardProps> = ({board}) => {
    return(
        <div className="grid grid-cols-3">
            {board.map((item, index) => {
                return(
                    <GameField key={index} fieldValue={item}/>
                )
            })}
        </div>
    )
}

export default GameBoard;
