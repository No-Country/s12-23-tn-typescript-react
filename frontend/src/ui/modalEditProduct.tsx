import { IoIosCloseCircleOutline } from "react-icons/io"
import { DataProduct, EditModal } from "../interface/interface"
import { useEffect, useState } from "react"
import { fetchProductOnly } from "../services/fetchData"
import { obtenerCategoriaTexto } from "../components/table/tableRowProduct"

export const ModalEditProduct: React.FC<EditModal>  = ({stateEditModal, closeModal, idProduct}) =>{
  const [dataDrink, setDataDrink] = useState<DataProduct>()

  useEffect(()=>{
    const fetchData = async () =>{
      setDataDrink(await fetchProductOnly(idProduct))
    }

    fetchData()

  },[idProduct])

  const editProduct = async (e:React.FormEvent) =>{
    e.preventDefault()

    console.log(dataDrink)
  }
  const updateName = (value: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(value.target.value)
  }


  return (
    <div id="loginModal" className={`${stateEditModal? "block":"hidden"} z-20 modal fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center`}>
      <div className={`flex flex-col  items-center relative justify-center transition-all duration-300 w-2/4 max-xl:w-3/5 modal-content bg-[#344D64] shadow-xl shadow-[#344D64] text-white rounded-lg  p-6  max-md:w-4/5 h-auto`}>
        <IoIosCloseCircleOutline className=" text-4xl cursor-pointer absolute right-5 top-4" onClick={closeModal}/>
        <h2 className="text-4xl text-center my-6 text-[#f0f3ff] font-bold">Editar Producto</h2>
        <p className='text-lg'>!Listo! ahora puedes editar</p>
        <form className="flex flex-col w-4/5 mt-2" onSubmit={editProduct}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            onChange={updateName}
            value={dataDrink?.nombre || "producto"}
            className="mb-4 h-10 w-full outline-1 outline rounded-lg text-black font-medium px-2 py-1"
          />          
          <label htmlFor="price">Precio</label> 
          <input type="number" placeholder={dataDrink?.precio} className="mb-4 h-10  outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          <label htmlFor="stock">Stock </label>
          <input type="number" placeholder={dataDrink && String(dataDrink?.stock)} className="mb-4 h-10  outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          <label htmlFor="category">Categoria</label>
          <input type="number" placeholder={obtenerCategoriaTexto(dataDrink?.categoria_id)} className="mb-4 h-10  outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          <button type="submit" className="bg-[#354762] py-1 rounded-lg cursor-pointer border-2 h-10 my-1" >Guardar Cambios</button>
        </form>
      </div>
    </div>  
    )
}