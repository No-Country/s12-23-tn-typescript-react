import { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { TbEdit, TbTrash } from 'react-icons/tb';

export default function TableProduct() {

  const [currentPage, setCurrentPage] = useState(1);

  const productosPorPagina = 5;
  const inicio = (currentPage - 1) * productosPorPagina;
  const fin = currentPage * productosPorPagina;
  
  const bebidas = [
    {
      "nombre": "Coca Cola 2L",
      "precio": "$5.00",
      "cantidad": 100,
      "categoria": "Gaseosas"
    },
    {
      "nombre": "Agua Mineral 500ml",
      "precio": "$2.00",
      "cantidad": 150,
      "categoria": "Aguas"
    },
    {
      "nombre": "Jugo de Naranja 1L",
      "precio": "$4.00",
      "cantidad": 80,
      "categoria": "Jugos"
    },
    {
      "nombre": "Sprite 2L",
      "precio": "$4.50",
      "cantidad": 120,
      "categoria": "Gaseosas"
    },
    {
      "nombre": "Agua con Gas 750ml",
      "precio": "$3.00",
      "cantidad": 90,
      "categoria": "Aguas"
    },
    {
      "nombre": "Cerveza Artesanal 330ml",
      "precio": "$6.00",
      "cantidad": 40,
      "categoria": "Cervezas"
    },
    {
      "nombre": "Limonada 1L",
      "precio": "$4.00",
      "cantidad": 70,
      "categoria": "Jugos"
    },
  ]

  const beforeProduct = () =>{
    if(currentPage <= 1 ){
      setCurrentPage(1)
    }else{
      setCurrentPage(currentPage - 1)
    }

  }

  const nextProduct = () =>{
    setCurrentPage(currentPage + 1)
    // alert(Math.round(bebidas.length / productosPorPagina)) 
  }

  return (
    <>
    <table className="table-auto border-2 px-4 w-full border-separate border-spacing-y-3 text-xs sm:text-base lg:text-xl">
      <thead>
        <tr>
          <th className="text-left">Nombre</th>
          <th className="text-left">Precio</th>
          <th className="text-left">Stock</th>
          <th className="text-left">Categoria</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody className="divide-y-8">
          {bebidas.slice(inicio,fin).map((bebida, index)=>(
          <tr className='border-2 text-base' key={index}>
              <td className='text-left'>{bebida.nombre}</td>
              <td className='text-left'>{bebida.precio}</td>
              <td className='text-left'>{bebida.cantidad}</td>
              <td className='text-left'>{bebida.categoria}</td>
              <td ><p className='flex justify-center items-center'><TbEdit/></p></td>
              <td><p className='flex justify-center items-center'><TbTrash/></p></td>
          </tr>
            ))     
        }
        </tbody>  
    </table> 
    <div className='border-2 text-center flex items-center justify-center text-xl'>
      <MdNavigateBefore onClick={beforeProduct} className="cursor-pointer"/><p>{currentPage}</p><MdNavigateNext className="cursor-pointer" onClick={nextProduct}/>
    </div>
    </>
  )
}
