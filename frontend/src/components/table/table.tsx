import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

import TableRow from "./tableRow";
import { fetchDataClients } from "../../services/fetchData";
import { Clients } from "../../interface/interface";



function Table() {
  const [dataClients, setDataClients] = useState<Clients[]>([])
  useEffect(()=>{
    fetchClients()
  },[])
  const fetchClients = async () =>{
    setDataClients(await fetchDataClients())
  }
  
  const [currentPage, setCurrentPage] = useState(1);
  const productosPorPagina = 5;
  const inicio = (currentPage - 1) * productosPorPagina;
  const fin = currentPage * productosPorPagina;
  const totalPaginas = Math.ceil(dataClients.length / productosPorPagina);

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
            dataClients.slice(inicio, fin).map((element, index) => (
              <TableRow key={index} data={{
                nombre: element.name,
                direccion: element.address,
                telefono: element.phone
              }} />
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