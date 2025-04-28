import App from "./App";
import { Home, Shop, Contact, Error } from "./pages/pagesIndex";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "contacts",
        element: <Contact />,
      },
    ],
  },
];

export default routes;
