import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import HomePage from './Components/Homepages/HomePage';
import Contact from "./Components/External/Contact";
import Services from "./Components/External/Services";
import Product from "./Components/External/Product";
import About from "./Components/External/About";
import Blog from "./Components/External/Blog";
import Home from "./Components/External/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path:"/home",
      element: <Home/>
    },
    {
      path:"/services",
      element: <Services/>
    },
    {
      path:"/product",
      element: <Product/>
    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/blog",
      element: <Blog/>
    },
    {
      path:"/Contact",
      element: <Contact/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
