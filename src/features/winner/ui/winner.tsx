import React from "react";
import {typeWinnerProps} from "../types/types.ts";
import Confetti from "react-confetti";


const Winner: React.FC<typeWinnerProps> = ({winner, onClearHistory}) => {
    return(<>

        {/* Confetti after win */}
        <Confetti recycle={false}/>

        {/* Message about winner */}
        <div className="flex items-center text-lg gap-2 border rounded border-green-600 text-white bg-green-600 px-4 py-2">

            {/* Cross icon */}
            {winner === 'x' &&
                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
            }

            {/* Circle icon */}
            {winner === 'o' &&
                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 p-0.5" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                </svg>
            }

            <span>is won this time! Congratulations.</span>
            <button className="underline" onClick={onClearHistory}>Try again</button>
        </div>
    </>)
}

export default Winner;
