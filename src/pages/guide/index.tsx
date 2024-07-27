import { BiArrowBack } from "react-icons/bi";
import Button from "../../components/Button/button";

const Guide = () => {
  return (
    <div className="h-dvh w-dvw flex items-center justify-center bg-slate-900 text-white">
      <div className="absolute top-4 left-4">
        <Button to="/" variant="secondary">
          <BiArrowBack className="inline-block me-2 size-5" />
          Inicio
        </Button>
      </div>
      <div>
      <h1 className="text-3xl font-bold mb-5">Instrucciones del juego</h1>
      <div className="grid grid-cols-12 max-w-2xl">
        <div className="col-span-6">
          <h2 className="text-xl font-bold mb-2">Preparando el terreno</h2>
          <p>Antes de empezar vas a necesitar preparar cuatro cuadros de colores que serviran como alfombra para el juego, deben ser de los siguientes colores:
            <ul className="list-disc ml-5 mt-3">
              <li>Rojo</li>
              <li>Azul</li>
              <li>Verde</li>
              <li>Amarillo</li>
            </ul>
          </p>
        </div>
        <div className="col-span-6">
          <h2 className="text-xl font-bold mb-2">Puntuaciones</h2>
          <p>
            El juego consiste en seguir las instrucciones que se te daran en pantalla, cada instruccion tiene un color y un movimiento asociado, si realizas el movimiento correcto en el cuadro correcto ganaras puntos, si te equivocas pierdes.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Guide;