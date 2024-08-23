import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const AddClientePage = () => {
  const urlServer = "http://127.0.0.1:8080/";
  const urlApi = urlServer + "api/";

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateCliente = (e) => {
    e.preventDefault();
    const cliente = { nombre, apellido, email };

    if (id) {
      axios
        .put(urlApi + "clientes/" + id, cliente)
        .then((response) => {
          console.log(response.data);
          navigate("/clientes");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post(urlApi + "clientes", cliente)
        .then((response) => {
          console.log(response.data);
          navigate("/clientes");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    axios
      .get(urlApi + "clientes/" + id)
      .then((response) => {
        console.log(response.data);

        setNombre(response.data.nombre);
        setApellido(response.data.apellido);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const createUpdateButtonText = () => {
    if (id) return "Guardar";
    return "Crear cliente";
  };

  return (
    <div className="flex flex-col text-center gap-5">
      <h2 className="text-3xl font-bold text-gray-700">
        {id ? "Actualizar" : "Crear"} cliente
      </h2>

      <div className="border w-1/2 h-auto mx-auto p-6 rounded-lg shadow-lg bg-white">
        <form action="" method="post" className="flex flex-col gap-4">
          <div className="flex flex-col text-left">
            <label htmlFor="nombre" className="mb-2 font-medium text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="text-black p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col text-left">
            <label
              htmlFor="apellido"
              className="mb-2 font-medium text-gray-600"
            >
              Apellido
            </label>
            <input
              type="text"
              placeholder="Apellido"
              name="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="text-black p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-2 font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" text-black p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={(e) => saveOrUpdateCliente(e)}
          >
            {createUpdateButtonText()}
          </button>
        </form>
      </div>
    </div>
  );
};
