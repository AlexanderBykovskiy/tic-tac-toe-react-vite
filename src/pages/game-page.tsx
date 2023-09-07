import Copyright from "../features/copyright/ui/copyright.tsx";
import Score from "../features/score/ui/score.tsx";

const GamePage = () => {

  return (
    <div className="py-2 px-4 min-h-[100vh] bg-white flex flex-col gap-8">
        <Score/>
        <div className="flex-grow flex flex-col justify-center">
            <div className="flex justify-center">
                the board here
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
