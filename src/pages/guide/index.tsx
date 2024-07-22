import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <div className="h-dvh w-dvw flex items-center justify-center bg-slate-900 text-white">
      <Link to="/" className="absolute top-5 left-5 text-white border-2 border-white shadow-md px-5 py-3 font-bold text-lg inline-flex rounded-full hover:bg-white/15">
        <BiArrowBack className="inline-block me-2 size-5" />
        Volver al inicio
      </Link>
      <div>
      <h1 className="text-3xl font-bold">Instrucciones del juego</h1>
      <ul className="flex">
        <li>El juego consiste en seguir las instrucciones que se muestran en pantalla.</li>
      </ul>
      </div>
    </div>
  );
}

export default Guide;