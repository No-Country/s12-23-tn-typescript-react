import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { DataProduct } from '../../interface/interface';
import { TableRowProduct } from './tableRowProduct';
import React from 'react';
import { ModalDelete } from '../../ui/modalDelete';
import { toast } from 'sonner';
import { ModalEditProduct } from '../../ui/modalEditProduct';
import { fetchDataProducts } from '../../services/fetchData';

export default function TableProduct() {
  const [products, setProducts] = useState<DataProduct[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditsModalOpen] = useState(false);
  const [idProduct, setIdProduct] = useState<number>(1)
  const [dataProduct, setDataProduct] = useState<DataProduct>()

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async () =>{
    const res = await fetchDataProducts()
    setProducts(res)
  } 

  /* CALCULO PARA LAS TABLAS */
  const productosPorPagina = 5;
  const inicio = (currentPage - 1) * productosPorPagina;
  const fin = currentPage * productosPorPagina;
  const totalPaginas = Math.ceil(products.length / productosPorPagina);

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

  const deletePost = async () =>{
    try{
      await axios.delete(`https://inventario-nocontry-s12-23.onrender.com/api/products/${idProduct}`)
      toast.success("El producto fue eliminado con exito")
      setIsModalOpen(false)

      fetchProduct()
    }catch{
      toast.warning("Sucedio un error vuelve a intentarlo")
    }
  }

  const closeModal = () =>{
    setIsModalOpen(false)
  }

  const openModal = (product: DataProduct) =>{ 
    setIsModalOpen(true);
    setIdProduct(product.producto_id)
  }  
  const openModalEdit = async (product: DataProduct) =>{
    setDataProduct(product)

    setEditsModalOpen(true);
  }

  const closeModalEdit = () =>{
    setEditsModalOpen(false)
  }

  const updateTable = () =>{
    fetchProduct()
    setEditsModalOpen(false)
  }

  return (
    <>
    <table className="border-2 px-4 w-full border-separate border-spacing-y-3 text-xs sm:text-base lg:text-xl">
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
        {products.slice(inicio,fin).map((bebida, index)=>(
          <React.Fragment key={index}>
            <TableRowProduct 
            data={bebida}
            openModalDelete={openModal}
            openModalEdit={openModalEdit}
            />
          </React.Fragment>
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

    <ModalDelete deletePost={deletePost} stateModal={isModalOpen} closeModal={closeModal}></ModalDelete>
    
    <ModalEditProduct 
    dataProduct={dataProduct} 
    stateEditModal={editModalOpen} 
    closeModal={closeModalEdit} 
    updateTable={updateTable}
    />
    </>
  )
}

