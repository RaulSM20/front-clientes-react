import { useState } from "react";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    apellido: "",
    nombre: "",
    pais: "",
    contrasena: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejar el envío del formulario
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="max-w-md text-black mx-auto bg-white p-8 mt-10 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Formulario de Registro
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

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="apellido"
          >
            Apellido
          </label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pais"
          >
            País
          </label>
          <input
            type="text"
            name="pais"
            id="pais"
            value={formData.pais}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
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
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};
