import { useState } from "react";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { RiLogoutBoxFill, RiPauseCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom"

interface BoardHeaderProps {
  pause: () => void;
  level: number;
}

const BoardHeader = ({ pause, level }: BoardHeaderProps) => {
  const [isMuted, setIsMuted] = useState(false);
  
  const handleVolume = () => {
    setIsMuted(!isMuted);
  }

  return (
    <div className="flex gap-2 bg-slate-800 text-white py-4 px-5 w-full z-50 sticky top-0">
      <Link to="/" className="text-red-500 font-bold px-2 py-1 rounded-lg bg-transparent hover:bg-slate-900 flex w-fit items-center justify-between">
        <RiLogoutBoxFill className="me-1 size-5" />
        Salir
      </Link>
      <button type="button" onClick={() => pause()} className="font-bold px-2 py-1 rounded-lg bg-transparent hover:bg-slate-900 flex w-fit items-center justify-between">
        <RiPauseCircleFill className="me-1 size-5" />
        Pausa
      </button>
      <h1 className="font-bold flex-1 text-center py-1 text-lg">Alfombras de colores nivel {level}</h1>
      <button type="button" onClick={handleVolume}>
        {
          isMuted ? (
            <FaVolumeMute className="size-5" />
          ) : (
            <FaVolumeHigh className="size-5" />
          )
        }
      </button>
    </div>
  )
}

export default BoardHeader