import React from "react";
import {typeGameFieldProps} from "../types/types.ts";
import {getGameFieldsBordersById} from "../utils/get-game-fields-borders-by-id.ts";


const GameField: React.FC<typeGameFieldProps> = ({fieldValue, index, historyStepNumber, onAddStep}) => {

    const borderStyles = getGameFieldsBordersById(index);

    return(
        <button className={`w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] focus:outline-green-400 flex justify-center items-center p-2 ${historyStepNumber % 2 === 0 ? 'border-red-600' : 'border-blue-600'}${borderStyles ? ' ' + borderStyles : ''}`} onClick={onAddStep}>
            {fieldValue === "x" &&
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-red-600" viewBox="0 0 24 24" strokeWidth="0.9" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
            }
            {fieldValue === "o" &&
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                </svg>
            }
        </button>
    )
}

export default GameField;
