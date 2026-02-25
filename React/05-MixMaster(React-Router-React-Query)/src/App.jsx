import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Landing,
  Cocktail,
  Error,
  HomeLayout,
  NewsLetter,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
