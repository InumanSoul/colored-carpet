import Button from "../../components/Button/button";

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
          <Button to="/game" variant="primary">
            Nuevo juego
          </Button>
          <Button to='/guide' variant="secondary">
            Instrucciones
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Home;