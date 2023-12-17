import { TbEdit, TbTrash } from 'react-icons/tb'
import { DataProduct, drinkCategory } from '../../interface/interface';
import React from 'react';

export interface DataComment  {
  data: DataProduct
  openModalDelete: (product: DataProduct) => void
  openModalEdit: (product: DataProduct) => void
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

export const TableRowProduct:React.FC<DataComment> = ({data, openModalDelete, openModalEdit}) =>{

  return (
    <>
      <tr className='border-2 text-base'>
        <td className='text-left'>{data.nombre}</td>
        <td className='text-left'>{data.precio}</td>
        <td className='text-left'>{data.stock}</td>
        <td className='text-left'>{obtenerCategoriaTexto(data.categoria_id)}</td>
        <td ><p className='flex justify-center items-center cursor-pointer text-xl' onClick={() => openModalEdit(data)} ><TbEdit/></p></td>
        <td><p className='flex justify-center items-center cursor-pointer text-xl' onClick={() => openModalDelete(data)} ><TbTrash/></p></td>
      </tr>

    </>
  )
}
