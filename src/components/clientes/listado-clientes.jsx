import { useEffect, useState } from "react";
import { Cliente } from "./cliente";
import axios from "axios";

export const ListadoClientes = () => {
  const urlServer = "http://127.0.0.1:8080/";
  const urlApi = urlServer + "api/";

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(urlApi + "clientes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClientes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClientes();
  }, [urlApi]);

  const deleteCliente = (idCliente) => {
    const token = localStorage.getItem("token");

    axios
      .delete(urlApi + "clientes/" + idCliente, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setClientes(clientes.filter((cliente) => cliente.id !== idCliente));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ul>
        {clientes.map((cliente) => (
          <Cliente
            key={cliente.id}
            nombre={cliente.nombre}
            apellido={cliente.apellido}
            email={cliente.email}
            idCliente={cliente.id}
            onDelete={deleteCliente}
          />
        ))}
      </ul>
    </>
  );
};
