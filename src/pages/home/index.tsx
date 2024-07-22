import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-dvh w-dvw flex items-center justify-center bg-slate-900 text-white">
      <div className="squares-container">
        <div className="square square--red"></div>
        <div className="square square--blue"></div>
        <div className="square square--yellow"></div>
        <div className="square square--green"></div>
      </div>
      <div className="space-y-3 text-center z-30">
        <h1 className="text-7xl font-black">Alfombra de colores</h1>
        <p className="text-2xl">El juego interactivo para mover el cuerpo.</p>
        <div className="flex gap-2 w-fit mx-auto">
          <Link to='/game' className="text-white shadow-md px-5 py-3 font-bold text-lg bg-gradient-to-b hover:bg-gradient-to-t from-orange-500 to-orange-600 inline-block rounded-full">
            Nuevo juego
          </Link>
          <Link to='/guide' className="text-white border-2 border-white shadow-md px-5 py-3 font-bold text-lg inline-block rounded-full hover:bg-white/15">
            Instrucciones
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home;