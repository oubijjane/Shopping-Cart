import { Children } from "react";
import {App} from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./Home.jsx";
import Items from "./Items.jsx";
import Contact from "./Contact.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
        {index: true, element: <Home />},
        {path: "home", element: <Home />},
        {path: "clothes/:category", element: <Items />},
        {path: "contact", element: <Contact />},
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;