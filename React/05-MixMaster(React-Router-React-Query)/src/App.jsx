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
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            index: true,
            element: <h2>Our Company</h2>,
          },
          {
            path: "person",
            element: <h2>Sony</h2>,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
