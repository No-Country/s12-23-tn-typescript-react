import { IoIosCloseCircleOutline } from "react-icons/io"
import { EditModal } from "../interface/interface"
import { useEffect, useState } from "react"
import { fetchProductOnly } from "../services/fetchData"
import { obtenerCategoriaTexto } from "../components/table/tableRowProduct"
import axios from "axios"
import { toast } from "sonner"

export const ModalEditProduct: React.FC<EditModal>  = ({stateEditModal, closeModal, idProduct, updateTable}) =>{
  const [editDrink, setEditDrink] = useState({
    categoria_id: 0,
    nombre: "",
    precio: 0,
    stock: 0,
    proveedor_id: 0
  })

  useEffect(()=>{
    const fetchData = async () =>{
      setEditDrink( await fetchProductOnly(idProduct))
    }

    fetchData()
  },[idProduct])

  const editProduct = async (e:React.FormEvent) =>{
    e.preventDefault()
    try{
      await axios.put(`https://inventario-nocontry-s12-23.onrender.com/api/products/${idProduct}`,{
        nombre: editDrink.nombre,
        precio: editDrink.precio,
        stock: editDrink.stock,
        proveedor_id: editDrink.proveedor_id,
        categoria_id: editDrink.categoria_id
    })
    toast.success("El producto fue modificado")
    updateTable()
    }catch{
      toast.warning("Sucedio un error vuelve a intentarlo")
    }
  }
  const updateName = (value: React.ChangeEvent<HTMLInputElement>) =>{
    setEditDrink({...editDrink, nombre:value.target.value})
  }

  const updatePrice = (value: React.ChangeEvent<HTMLInputElement>) =>{
    setEditDrink({...editDrink, precio:Number(value.target.value)})
  }

  const updateStock = (value: React.ChangeEvent<HTMLInputElement>) =>{
    setEditDrink({...editDrink, stock:Number(value.target.value)})
  }

  const updateCategory = (value: React.ChangeEvent<HTMLSelectElement>) =>{
    setEditDrink({...editDrink, categoria_id:Number(value.target.value)})
  }

  const updateProvider = (value: React.ChangeEvent<HTMLSelectElement>) =>{
    setEditDrink({...editDrink, proveedor_id:Number(value.target.value)})
  }

  return (
    <div id="loginModal" className={`${stateEditModal? "block":"hidden"} z-20 modal fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center`}>
      <div className={`flex flex-col  items-center relative justify-center transition-all duration-300 w-2/5 max-xl:w-3/5 modal-content bg-[#344D64] shadow-xl shadow-[#344D64] text-white rounded-lg  p-6  max-md:w-4/5 h-auto`}>
        <IoIosCloseCircleOutline className=" text-4xl cursor-pointer absolute right-5 top-4" onClick={closeModal}/>
        <h2 className="text-4xl text-center my-6 text-[#f0f3ff] font-bold">Editar Producto</h2>
        <p className='text-lg'>!Listo! ahora puedes editar</p>
        <form className="flex flex-col w-3/5 mt-2 max-md:w-4/5" onSubmit={editProduct}>
          <label htmlFor="name" className="font-bold">Nombre</label>
          <input
            type="text"
            onChange={updateName}
            value={editDrink.nombre}
            className="mb-4 h-10 w-full outline-1 outline rounded-lg text-black font-medium px-2 py-1"
          />          
          <label htmlFor="price" className="font-bold" >Precio</label> 
          <input type="number" onChange={updatePrice} value={editDrink.precio} className="mb-4 h-10  outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          <label htmlFor="stock" className="font-bold">Stock </label>
          <input type="number"onChange={updateStock}  value={editDrink.stock} className="mb-4 h-10  outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          <label htmlFor="providers" className="font-bold">Proveedores</label>
          <select name="providers" onChange={updateProvider} id="" className="mb-4 h-10  outline-1 outline rounded-lg text-black font-medium px-2 py-1">
            <option value="" hidden >Proveedor Actual ({editDrink.proveedor_id})</option>
            <option value="1">Proveedor 1</option>
            <option value="2">Proveedor 2</option>
            <option value="3">Proveedor 3</option>
          </select>
          <label htmlFor="category" className="font-bold">Categoria</label>
          <select onChange={updateCategory} className="mb-4 h-10  outline-1 outline rounded-lg text-black font-medium px-2 py-1">
            <option value="" hidden>Opción Actual ({obtenerCategoriaTexto(editDrink.categoria_id)}) </option>
            <option value="1">Gaseosas</option>
            <option value="2">Aguas</option>
            <option value="3">Jugos</option>
            <option value="4">Cervezas</option>
            <option value="5">Vinos</option>
          </select>
          <button type="submit" className="bg-[#354762] py-1 rounded-lg cursor-pointer border-2 h-10 my-1" >Guardar Cambios</button>
        </form>
      </div>
    </div>  
    )
}