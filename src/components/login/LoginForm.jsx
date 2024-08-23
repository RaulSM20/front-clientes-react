import { useState } from "react";
import { ClientesPage } from "../../pages/clientes/ClientesPage";

export const LoginForm = () => {
  const urlServer = "http://127.0.0.1:8080/";
  const urlApi = urlServer + "auth/login";

  const [formData, setFormData] = useState({
    usuario: "",
    contrasena: "",
  });
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Datos del formulario:", formData);

    const data = {
      username: formData.usuario,
      password: formData.contrasena,
    };

    fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          setLoginSuccessful(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loginSuccessful ? (
        <ClientesPage />
      ) : (
        <div className="max-w-md mx-auto text-black bg-white p-8 mt-10 shadow-md rounded">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Inicio de Sesión
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="usuario"
              >
                Usuario
              </label>
              <input
                type="text"
                name="usuario"
                id="usuario"
                value={formData.usuario}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contrasena"
              >
                Contraseña
              </label>
              <input
                type="password"
                name="contrasena"
                id="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
