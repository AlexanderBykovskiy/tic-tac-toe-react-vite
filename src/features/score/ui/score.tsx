import React, {useState} from "react";
import {getScore} from "../utils/get-score.ts";
import {setScore} from "../utils/set-score.ts";

const Score: React.FC = () => {


    const [currentScore, setCurrentScore] = useState(getScore()); // Declare a store for storing an score, receiving data from Session Storage

    // Declare the function of changing current score, saving it in Session Storage
    const onClearScore = () => {
        const newScoreObj = {xScore: 0, oScore: 0};
        setScore(newScoreObj); // Set score in the Session Storage
        setCurrentScore(newScoreObj); // Set score in the store
    }

    return(
        <div className="relative flex justify-center gap-6 max-w-fit text-xl px-6 py-2 rounded border mx-auto group">
            <div className="flex items-center text-gray-400 font-semibold text-sm">Total score:</div>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-600" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
                <div>{currentScore.xScore}</div>
            </div>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                </svg>
                <div>{currentScore.oScore}</div>
            </div>
            <div className="absolute right-0 top-0 w-0">
                {(currentScore.xScore > 0 || currentScore.oScore > 0) &&
                    <div className="hidden group-hover:flex pl-1">
                        <button className="flex p-2 rounded bg-red-600 text-white shadow-sm" onClick={onClearScore}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Score;
