import { useAuth } from "../context/AuthContext";
import { ClientesPage } from "./clientes/ClientesPage";
import { FrontPage } from "../components/FrontPage";

export const HomePage = () => {
  const { isAuthenticated } = useAuth();

  return <>{isAuthenticated ? <ClientesPage /> : <FrontPage />}</>;
};
