import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const Cliente = ({ nombre, apellido, email, idCliente, onDelete }) => {
  return (
    <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">
      <div className="px-6 py-4">
        <div className="text-gray-700 font-bold text-xl mb-2">
          {nombre + " " + apellido}
        </div>
        <p className="text-gray-700 text-base">{email}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex gap-3 justify-end">
        <Link
          to={`/clientes/edit-cliente/${idCliente}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Editar
        </Link>
        <button
          onClick={() => onDelete(idCliente)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Borrar
        </button>
      </div>
    </div>
  );
};
