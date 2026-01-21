import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/APpLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import SingleGif from "./pages/SingleGif";
import Favorites from "./pages/Favorites";
import GifContext from "./context/GifContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Categories />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <SingleGif />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const App = () => {
  return (
    <GifContext>
      <RouterProvider router={router} />;
    </GifContext>
  );
};

export default App;
