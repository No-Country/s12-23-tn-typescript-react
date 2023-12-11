import { useState } from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

import TableRow from "./tableRow";

const elements = [
  {
    nombre: "Juan Pérez",
    direccion: "123 Calle Principal",
    telefono: "555-1234"
  },
  {
    nombre: "María García",
    direccion: "456 Avenida Secundaria",
    telefono: "555-5678"
  },
  {
    nombre: "Carlos Rodríguez",
    direccion: "789 Calle Secundaria",
    telefono: "555-9876"
  },
  {
    nombre: "Ana Martínez",
    direccion: "321 Avenida Principal",
    telefono: "555-4321"
  },
  {
    nombre: "Pedro Sánchez",
    direccion: "654 Calle Principal",
    telefono: "555-8765"
  },
  {
    nombre: "Luisa Hernández",
    direccion: "987 Avenida Secundaria",
    telefono: "555-3456"
  },
  {
    nombre: "Javier López",
    direccion: "210 Calle Secundaria",
    telefono: "555-6543"
  },
  {
    nombre: "Sofía Ramírez",
    direccion: "543 Avenida Principal",
    telefono: "555-8765"
  },
  {
    nombre: "Roberto Torres",
    direccion: "876 Calle Principal",
    telefono: "555-2345"
  },
  {
    nombre: "Isabel García",
    direccion: "109 Avenida Secundaria",
    telefono: "555-6789"
  },
  {
    nombre: "Miguel Soto",
    direccion: "432 Calle Secundaria",
    telefono: "555-8901"
  },
  {
    nombre: "Laura Mendoza",
    direccion: "765 Avenida Principal",
    telefono: "555-1234"
  }
];


function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const productosPorPagina = 5;
  const inicio = (currentPage - 1) * productosPorPagina;
  const fin = currentPage * productosPorPagina;
  const totalPaginas = Math.ceil(elements.length / productosPorPagina);

  const beforeProduct = () =>{
    if(currentPage <= 1 ){
      setCurrentPage(1)
    }else{
      setCurrentPage(currentPage - 1)
    }

  }

  const nextProduct = () =>{
    if (currentPage < totalPaginas) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <table className="border-2 p-4 table-auto w-full border-separate border-spacing-y-3 text-xs sm:text-base lg:text-xl">
        <thead>
          <tr>
            <th className="text-left pl-5 sm:pl-7 lg:pl-10">Nombre</th>
            <th className="text-left">Dirección</th>
            <th className="text-left">Teléfono</th>
            <th>Editar</th>
            <th>Eliminar</th>

          </tr>
        </thead>
        <tbody className="divide-y-8">
          {
            elements.slice(inicio, fin).map((element, index) => (
              <TableRow data={element} key={index} />
            ))
          }
        </tbody>
      </table>
      <div className='border-2 text-center flex items-center justify-center text-xl gap-8 bottom-4'>
      <MdKeyboardDoubleArrowLeft onClick={beforeProduct} className="cursor-pointer"/>
      {Array.from({ length: totalPaginas }, (_, index) => (
          <p
            key={index}
            className={`cursor-pointer ${currentPage === index + 1 ? "font-bold" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </p>
        ))}
      <MdKeyboardDoubleArrowRight className="cursor-pointer" onClick={nextProduct}/>
    </div>
    </>

  )
}

export default Table