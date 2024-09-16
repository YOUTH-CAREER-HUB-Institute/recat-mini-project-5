import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Contact from "./pages/Contact";
import AppLayout from "./components/layouts/AppLayout";
import { Children } from "react";
import ErrorPages from "./pages/ErrorPages";
import { getMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./components/layouts/ui/MovieDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";
import { contactData } from "./pages/Contact";

function App() {
  // setup the pages using rounting path
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPages/>,
      children: [
        // home
        {
          path: "/",
          element: <Home />,
        },
        // about
        {
          path: "/about",
          element: <About />,
        },
        // movie
        {
          path: "/movie",
          element: <Movie />,
          loader:getMoviesData,
        },
        {
          path: "/movie/:movieID",//it make sure whatever the value that will be a dynamic value
          element: <MovieDetails/>,
          loader:getMoviesDetails,
        },
        // contact
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ]
    },


  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App