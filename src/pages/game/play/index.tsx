import { difficulties } from "../../../config"
import BoardHeader from "./BoardHeader"
import GameBlock from "./GameBlock"
import { Link, useParams } from "react-router-dom";
import useGameLogic from "../../../hooks/useGameLogic";
import { useState } from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import LevelsIndicator from "../../../components/LevelsIndicator/LevelsIndicator";

const GameBoard = () => {
  const { difficulty } = useParams();
  const level = difficulties.find((diff) => diff.name === difficulty)?.value || 1;
  const [isPlaying, setIsPlaying] = useState(false);
  const { displayItems, startGame, pauseGame } = useGameLogic(difficulty || 'easy');

  const handlePlay = () => {
    startGame();
    setIsPlaying(true);
  }
  
  const handlePause = () => {
    pauseGame();
    setIsPlaying(false);
  }

  return (
    <>
      <BoardHeader level={level} isPlaying={isPlaying} pause={handlePause} />
      {
        !isPlaying && (
          <div className="w-full h-dvh fixed top-0 left-0 bg-black/65 flex items-center justify-center z-40">
            <div className="bg-slate-800 w-full max-w-lg text-white rounded-xl p-5">
              <div className="flex items-center justify-between mb-5">
                <h1 className="text-4xl font-black text-center">Nivel {level}</h1>
                <LevelsIndicator level={difficulty || 'easy'} />
              </div>
              <button type="button" onClick={handlePlay} className="block mx-auto px-5 py-3 bg-gradient-to-b from-red-500 to-red-600 hover:bg-gradient-to-t text-white font-bold rounded-full text-lg">
                Jugar
                <RiPlayCircleFill className="inline-block size-8 ms-2" />
              </button>
              <Link to="/" className="block text-center mt-3 text-gray-400">
                Salir del juego
              </Link>
            </div>
          </div>
        )
      }

      <div className="w-full h-dvh grid grid-rows-2 grid-cols-2 gap-5 p-5 bg-slate-900">
        {
          displayItems.map((displayItem, index) => (
            <GameBlock 
              key={index}
              color={displayItem.colorClass}
              classes={displayItem.positionClass}
              item={displayItem.item}
            />
          ))
        }
      </div>
    </>
  )
}

export default GameBoard