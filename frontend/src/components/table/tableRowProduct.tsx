import { TbEdit, TbTrash } from 'react-icons/tb'
import { drinkCategory } from '../../interface/interface';
import React from 'react';

export interface DataComment  {
  nombre: string
  precio: string
  stock: number
  categoria_id: number
  producto_id: number
  openModalDelete: (producto_id: number) => void
  openModalEdit: (producto_id: number) => void
}

export function obtenerCategoriaTexto(idCategoria:number = 1) {
  return categorias[idCategoria] || 'Categoría Desconocida';
}

const categorias:drinkCategory = {
  1: 'Gaseosas',
  2: 'Aguas',
  3: 'Jugos',
  4: 'Cervezas',
  5: 'Vinos',
};

export const TableRowProduct:React.FC<DataComment> = ({nombre, precio, stock, categoria_id, producto_id, openModalDelete, openModalEdit}) =>{

  return (
    <>
      <tr className='border-2 text-base'>
        <td className='text-left'>{nombre}</td>
        <td className='text-left'>{precio}</td>
        <td className='text-left'>{stock}</td>
        <td className='text-left'>{obtenerCategoriaTexto(categoria_id)}</td>
        <td ><p className='flex justify-center items-center cursor-pointer text-xl' onClick={() => openModalEdit(producto_id)} ><TbEdit/></p></td>
        <td><p className='flex justify-center items-center cursor-pointer text-xl' onClick={() => openModalDelete(producto_id)} ><TbTrash/></p></td>
      </tr>

    </>
  )
}
