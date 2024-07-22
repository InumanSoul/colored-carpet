import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Game from "./pages/game"
import GameBoard from "./pages/game/play"
import Guide from "./pages/guide"

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
    },
    {
      path: '/guide',
      element: <Guide />,
    }
  ])

  return <RouterProvider router={router} />
}

export default App
