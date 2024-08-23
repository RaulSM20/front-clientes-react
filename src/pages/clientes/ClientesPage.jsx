import { Link } from "react-router-dom"
import { ListadoClientes } from "../../components/clientes/listado-clientes"

export const ClientesPage = () => {
    return(
        <>
        <Link to={'add-cliente'}>
            <button className=" m-2 p-2 max-w-32 rounded bg-blue-500 text-white">Añadir cliente</button>
        </Link>
        <h1 className="m-2 text-4xl">Listado de clientes</h1>
        <ListadoClientes/>
        </>


    )
}