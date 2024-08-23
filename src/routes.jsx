import { FrontPage } from "./components/FrontPage";
import { Layout } from "./layout";
import { AddClientePage } from "./pages/clientes/AddClientePage";
import { ClientesPage } from "./pages/clientes/ClientesPage";
import { LoginPage } from "./pages/login/LoginPage";
import { RegistroPage } from "./pages/registro/RegistroPage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FrontPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registro",
        element: <RegistroPage />,
      },
      {
        path: "/clientes",
        element: <ClientesPage />,
      },
      {
        path: "/clientes/add-cliente",
        element: <AddClientePage />,
      },
      {
        path: "/clientes/edit-cliente/:id",
        element: <AddClientePage />,
      },
    ],
  },
];
