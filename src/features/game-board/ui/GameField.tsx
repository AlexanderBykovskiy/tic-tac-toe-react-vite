import React from "react";
import {typeGameFieldProps} from "../types/types.ts";


const GameField: React.FC<typeGameFieldProps> = ({fieldValue}) => {
    return(
        <button className="w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] focus:outline-green-400 border">
            {fieldValue === null ? '' : fieldValue}
        </button>
    )
}

export default GameField;
