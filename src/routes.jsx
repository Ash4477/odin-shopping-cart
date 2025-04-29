import App from "./App";
import { Home, Shop, Contact, Error, Product } from "./pages/pagesIndex";

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
        path: "product/:prodId",
        element: <Product />,
      },
      {
        path: "contacts",
        element: <Contact />,
      },
    ],
  },
];

export default routes;
