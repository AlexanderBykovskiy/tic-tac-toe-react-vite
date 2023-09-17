import React from "react";
import {typeGameFieldProps} from "../types/types.ts";
import {getGameFieldsBordersById} from "../utils/get-game-fields-borders-by-id.ts";
import {fieldValues} from "../../history/types/types.ts";


const GameField: React.FC<typeGameFieldProps> = ({fieldValue, index, stepIndex, winner, onAddStep}) => {

    const borderStyles = getGameFieldsBordersById(index); // A helper that helps you create styles for the borders of each cell of the playing field

    return(
        <button className={`w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[8vw] md:h-[8vw] focus:outline-green-400 flex justify-center items-center p-2 border-gray-400${borderStyles ? ' ' + borderStyles : ''}`} onClick={onAddStep}>

            {/* Cross icon for a field */}
            {fieldValue === fieldValues.x &&
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${winner ? winner.value === fieldValues.x ? 'text-green-600' : 'text-gray-400' : 'text-red-600'}`} viewBox="0 0 24 24" strokeWidth="0.9" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
            }
            {/* Circle icon for a field */}
            {fieldValue === fieldValues.o &&
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${winner ? winner.value === fieldValues.o ? 'text-green-600' : 'text-gray-400' : 'text-blue-600'}`} viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                </svg>
            }

            {/* Shadow of the cross icon when hovering over it */}
            {!winner && !fieldValue && (stepIndex === 0 || stepIndex % 2 === 0) &&
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-transparent hover:text-gray-200 transition-all ease-in duration-200" viewBox="0 0 24 24" strokeWidth="0.9" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
            }
            {/* Shadow of the circle icon when hovering over it */}
            {!winner && !fieldValue && (stepIndex !== 0 && stepIndex % 2 !== 0) &&
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-transparent hover:text-gray-200 transition-all ease-in duration-200" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                </svg>
            }

        </button>
    )
}

export default GameField;
