import { useEffect, useState } from "react";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { RiLogoutBoxFill, RiPauseCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom"


interface BoardHeaderProps {
  pause: () => void;
  level: number;
  isPlaying: boolean;
}

const BoardHeader = ({ pause, level, isPlaying }: BoardHeaderProps) => {
  const [isMuted, setIsMuted] = useState(false);
  
  const handleVolume = () => {
    setIsMuted(!isMuted);
  }

  useEffect(() => {
    const audio = document.getElementById('audio-element') as HTMLAudioElement;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    }
  }, [isPlaying])

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
      <audio id="audio-element" loop muted={isMuted} src='/music/pop-level-3.wav'/>
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