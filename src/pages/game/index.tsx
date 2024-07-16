import { Link } from "react-router-dom";
import { difficulties } from "../../config";
import { FaFire } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const Game = () => {

  return (
    <div className="w-dvw h-dvh flex items-center justify-center bg-slate-900 text-white">
      <div className="flex flex-col w-full max-w-lg p-5 bg-slate-800 border border-slate-700 shadow-lg rounded-2xl">
        <h1 className="text-4xl font-black mb-4">Dificultad</h1>
        <nav className="flex flex-col gap-2">
          {
            difficulties.map((diff, index) => (
              <Link key={index} to={`/game/play/${diff.name}`} className="bg-slate-600 hover:bg-slate-700 duration-200 rounded-xl px-4 py-3 text-lg flex items-center justify-between">
                {diff.action}
                {
                  diff.name === 'hard' && (
                    <div>
                      <FaFire className="inline-block ms-2 size-5 text-red-500" />
                      <FaFire className="inline-block ms-2 size-5 text-red-500" />
                      <FaFire className="inline-block ms-2 size-5 text-red-500" />
                      <FaFire className="inline-block ms-2 size-5 text-red-500" />
                    </div>
                  )
                }
                {
                  diff.name === 'medium' && (
                    <div>
                      <FaFire className="inline-block ms-2 size-5 text-amber-400" />
                      <FaFire className="inline-block ms-2 size-5 text-amber-400" />
                      <FaFire className="inline-block ms-2 size-5 text-amber-400" />
                    </div>
                  )
                }
                {
                  diff.name === 'normal' && (
                    <div>
                      <FaFire className="inline-block ms-2 size-5 text-yellow-200" />
                      <FaFire className="inline-block ms-2 size-5 text-yellow-200" />
                    </div>
                  )
                }
                {
                  diff.name === 'easy' && (
                    <div>
                      <FaFire className="inline-block ms-2 size-5 text-white" />
                    </div>
                  )
                }
              </Link>
            ))
          }
          <Link to="/" className="px-2 py-3 text-center">
            <BiArrowBack className="inline-block me-2 size-5" />
            Volver al inicio
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Game;