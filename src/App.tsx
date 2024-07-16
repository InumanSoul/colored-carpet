import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Game from "./pages/game"
import GameBoard from "./pages/game/play"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/game',
      element: <Game />,
    },
    {
      path: '/game/play/:difficulty',
      element: <GameBoard />,
    }
  ])

  return <RouterProvider router={router} />
}

export default App
