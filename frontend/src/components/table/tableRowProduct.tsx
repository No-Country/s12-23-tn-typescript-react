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
      <td className='p-2 text-sm text-gray-700'>{data.nombre}</td>
      <td className='p-2 text-sm text-gray-700'>{data.precio}</td>
      <td className='p-2 text-sm text-gray-700'>{data.stock}</td>
      <td className='p-2 text-sm text-gray-700'>{obtenerCategoriaTexto(data.categoria_id)}</td>
      <td className='p-2 text-sm text-gray-700 flex justify-center items-center cursor-pointer'>
        <p className='' onClick={() => openModalEdit(data)} >
          <TbEdit className="cursor-pointer text-3xl border-2 bg-blue-100 rounded-lg text-blue-800 p-1 hover:brightness-90 transition-all duration-200"/></p>
      </td>
      <td className='p-2 text-sm text-gray-700'><p className='flex justify-center items-center cursor-pointer text-xl' onClick={() => openModalDelete(data)} >
        <TbTrash className="cursor-pointer text-3xl border-2 bg-red-100 text-red-600 rounded-lg p-1 hover:brightness-90 transition-all duration-200"/></p>
      </td>
    </>
  )
}
