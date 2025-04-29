import App from "./App";
import { Home, Shop, Contact, Error, Product, Login } from "./pages/pagesIndex";
import SignUp from "./pages/SignUp";

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
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
