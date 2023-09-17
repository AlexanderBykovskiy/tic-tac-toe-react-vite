import React from "react";
import {typeHistoryBoardProps} from "../types/types.ts";
import Draw from "./draw.tsx";

const HistoryBoard: React.FC<typeHistoryBoardProps> = ({history, winner, stepIndex, onSetStepIndex, onClearHistory}) => {
    return(
        <div className="flex items-center flex-wrap">
            {!winner && history.length !== 10
                ? history.map((item, index) => {

                    // Generate styles for each story element
                    let currentColor = 'border-gray-600';
                    let hoverBgColor = 'hover:bg-gray-600';
                    if (index !== 0 && index % 2 === 1) {
                        currentColor = 'border-red-600';
                        hoverBgColor = 'hover:bg-red-600';
                    }
                    if (index !== 0 && index % 2 === 0) {
                        currentColor = 'border-blue-600';
                        hoverBgColor = 'hover:bg-blue-600';
                    }

                    return(<React.Fragment key={index}>

                        {/* Show the step number between story elements */}
                        {index !==0 &&
                            <div>
                                <div className="relative border-t h-0 px-4 border-gray-500 flex justify-center items-center">
                                    <div className="absolute flex flex-col justify-center items-center w-5 h-5 text-gray-500 bg-white text-xs border rounded-full border-gray-500">{index}</div>
                                </div>
                            </div>
                        }

                        {/* Show step button to move on history */}
                        <div className="relative">
                            <button key={index} className={`relative flex items-center gap-2 border ${currentColor} rounded px-2 py-1 group ${hoverBgColor} hover:text-white transition-all ease-in duration-100`} onClick={() => onSetStepIndex(index)}>

                                {/* Start icon */}
                                {index === 0 &&
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-600 p-0.5 group-hover:text-white transition-all ease-in duration-100" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16"></path>
                                    </svg>
                                }

                                {/* Cross icon */}
                                {index !== 0 && index % 2 === 1 &&
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-600 group-hover:text-white transition-all ease-in duration-100" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M18 6l-12 12"></path>
                                        <path d="M6 6l12 12"></path>
                                    </svg>
                                }

                                {/* Circle icon */}
                                {index !== 0 && index % 2 === 0 &&
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 p-0.5 group-hover:text-white transition-all ease-in duration-100" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    </svg>
                                }

                                <span>{item.stepLabel}</span>

                            </button>

                            {/* A pointer to a step in the story, if it's not the last step */}
                            { stepIndex === index && stepIndex !== history.length - 1 &&
                                <div className="absolute h-0 bottom-0 right-0 left-0 flex justify-center group-hover:text-gray-400">
                                    <div className="text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M18 14l-6 -6l-6 6h12"></path>
                                        </svg>
                                    </div>
                                </div>
                            }

                        </div>


                    </React.Fragment>)
                })
                : <Draw onClearHistory={onClearHistory}/> /* Component with draw information */
            }
        </div>
    )
}

export default HistoryBoard;
