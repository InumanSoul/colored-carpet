import { Link } from "react-router-dom";
import { difficulties } from "../../config";
import { BiArrowBack } from "react-icons/bi";
import LevelsIndicator from "../../components/LevelsIndicator/LevelsIndicator";
import Button from "../../components/Button/button";
import { motion } from "framer-motion";

const Game = () => {
  return (
    <div className="w-dvw h-dvh flex items-center justify-center bg-slate-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="flex flex-col w-full max-w-lg p-5 bg-slate-800 border border-slate-700 shadow-lg rounded-2xl"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-4xl font-black mb-4"
        >
            Dificultad
        </motion.h1>
        <nav className="flex flex-col gap-2 mb-5">
          {
            difficulties.map((diff, index) => (
              <Link key={index} to={`/game/play/${diff.name}`} className="bg-slate-600 hover:bg-slate-700 duration-200 rounded-xl px-4 py-3 text-lg flex items-center justify-between">
                {diff.action}
                <LevelsIndicator level={diff.name} />
              </Link>
            ))
          }
        </nav>
        <Button to="/" variant="ghost">
            <BiArrowBack className="inline-block me-2 size-5" />
            Volver
          </Button>
      </motion.div>
    </div>
  );
}

export default Game;