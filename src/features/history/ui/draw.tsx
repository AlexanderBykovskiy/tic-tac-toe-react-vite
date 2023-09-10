import React from "react";
import {typeDrawProps} from "../types/types.ts";

const Draw: React.FC<typeDrawProps> = ({onClearHistory}) => {
    return(
        <div className="flex items-center text-lg gap-2 border rounded border-blue-400 text-white bg-blue-400 px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
            </svg>
            <span>Is draw! No winner.</span>
            <button className="underline" onClick={onClearHistory}>Try again</button>
        </div>
    )
}

export default Draw;
