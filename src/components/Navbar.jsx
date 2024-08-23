import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isAuthenticated } = useAuth(); // Usar el contexto de autenticación

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">MyLogo</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMobile ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
          >
            Home
          </a>
          {isAuthenticated && (
            <a
              href="/clientes"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
            >
              Clientes
            </a>
          )}
        </div>
        <div className="flex justify-end">
          {!isAuthenticated && (
            <>
              <a
                href="/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
              >
                Login
              </a>
              <a
                href="/registro"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
              >
                Registrarse
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
