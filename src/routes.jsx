import { Children } from "react";
import {App} from "./App";
import ErrorPage from "./ErrorPage";
import {Home} from "./Home.jsx";
import {Items, ProductDetail} from "./Items.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
        {index: true, element: <Home />},
        {path: "home", element: <Home />},
        {path: "clothes/:category", element: <Items />},
        {path: "contact", element: <Contact />},
        {path: "about", element: <About />},
        {path: "product/:id", element: <ProductDetail />},
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;