import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Cart from "./components/Cart.jsx";

// define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // App.jsx acts as layout (Header + Outlet)
    errorElement: <Error />, 
    children: [
      {
        path: "/",   //  default child route for "/"
        element: <Body />,
      },
      {
        path: "about",   //  relative path
        element: <About />,
      },
      {
        path: "contact",   //  relative path
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",   //  relative path
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: <Cart/>,
      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
