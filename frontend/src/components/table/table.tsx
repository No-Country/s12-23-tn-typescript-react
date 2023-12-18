import { FormEvent, useEffect, useState } from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

import TableRow from "./tableRow";
import { fetchDataClients } from "../../services/fetchData";
import { Client, Clients } from "../../interface/interface";
import Modal from "../../ui/modal";
import { FormEvents } from "../../pages/providers/provider";
import axios from "axios";
import { toast } from "sonner";
import { ModalDelete } from "../../ui/modalDelete";

function Table() {
  const [dataClients, setDataClients] = useState<Clients[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState(false)
  const [idClient, setIdClient] = useState<number>(0)
  const [dataClient, setDataClient] = useState<Client>({
    id: 0,
    name: "",
    address: "",
    phone: ""
  })
  const [currentPage, setCurrentPage] = useState(1);


  const productosPorPagina = 5;
  const inicio = (currentPage - 1) * productosPorPagina;
  const fin = currentPage * productosPorPagina;
  const totalPaginas = Math.ceil(dataClients.length / productosPorPagina);

  useEffect(()=>{
    fetchClients()
  },[])
  const fetchClients = async () =>{
    setDataClients(await fetchDataClients())
  }

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

  const openModal = (client: Client) => {
    setIsModalOpen(true);

    setDataClient(client)
  };

  const closeModal = () =>{
    setIsModalOpen(false)
  }

  const openModalDelete = (id:number) =>{
    setModalDelete(true)

    setIdClient(id)
  }
  const closeModalDelete = () =>{
    setModalDelete(false)
  }

  const deleteClient = async () =>{
    try{
      await axios.delete(`https://inventario-nocontry-s12-23.onrender.com/api/clients/${idClient}`)
      toast.success("El cliente fue eliminado con exito")
      setModalDelete(false)

      fetchClients()
    }catch{
      toast.warning("Sucedio un error vuelve a intentarlo")
    }
  }

  const editClientData = async (e: FormEvent) =>{
    e.preventDefault()
    try{
      await axios.post(`https://inventario-nocontry-s12-23.onrender.com/api/clients/${dataClient.id}`,{
          name: dataClient.name,
          adress: dataClient.address,
          phone: dataClient.phone,
        }
      )
      fetchClients()
      toast.success("El cliente fue modificado")
    }catch{
      toast.warning("Sucedio un error vuelve a intentarlo")
    }

  }
  
  const handleChangeInput = (e: FormEvents["change"]):void => {
    const { name, value } = e.target;

    setDataClient({
      ...dataClient,
      [name]: value,
    });
  };

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
              <TableRow key={index} data={element} openModal={openModal} openModalDelete={openModalDelete}
               />
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

    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4 text-center">Alta de cliente</h2>
        <p className="text-center">¡Bien! Vamos por buen camino</p>
        <form className="flex flex-col gap-9" onSubmit={editClientData}>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Nombre</label>
            <input name="name" onChange={handleChangeInput} defaultValue={dataClient?.name} type="text" className="outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Dirección</label>
            <input name="address" onChange={handleChangeInput} defaultValue={dataClient?.address} type="text" className="outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Teléfono</label>
            <input name="phone" onChange={handleChangeInput} defaultValue={dataClient?.phone} type="tel" className="outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          </div>
          <button type="submit" className="bg-[#354762] py-1 rounded-lg cursor-pointer border-2 h-10 my-1" >Guardar Cambios</button>
        </form>
      </Modal>
      <ModalDelete deletePost={deleteClient} stateModal={modalDelete} closeModal={closeModalDelete}/>
    </>

  )
}

export default Table