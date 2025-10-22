import { Children } from "react";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./Home.jsx";
import Men from "./Men.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
        {index: true, element: <Home />},
        {path: "home", element: <Home />},
        {path: "men", element: <Men />},
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;