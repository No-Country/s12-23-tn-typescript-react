import { TbEdit, TbTrash } from "react-icons/tb";
import Modal from "../../ui/modal";
import { useState } from "react";

interface TableRowProps {
  data: {
    nombre: string;
    direccion: string;
    telefono: string;
  };
}

function TableRow({ data }: TableRowProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-[2px] sm:gap-1 lg:gap-2">
            <div className="mask mask-squircle w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#00CFE8] rounded-full">
            </div>
            <div>
              <div>{data.nombre}</div>
            </div>
          </div>
        </td>
        <td>{data.direccion}</td>
        <td>{data.telefono}</td>
        <td className="flex justify-center">
          <TbEdit className="cursor-pointer text-lg sm:text-xl lg:text-2xl" onClick={openModal}/>
        </td>
        <td>
          <div className="flex justify-center">
            <TbTrash className="cursor-pointer text-lg sm:text-xl lg:text-2xl" onClick={openModal}/>
          </div>
        </td>
      </tr>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4 text-center">Alta de cliente</h2>
        <p className="text-center">¡Bien! Vamos por buen camino</p>
        <form className="flex flex-col gap-9">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Nombre</label>
            <input type="text" className="outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Dirección</label>
            <input type="text" className="outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Teléfono</label>
            <input type="tel" className="outline-1 outline rounded-lg text-black font-medium px-2 py-1"/>
          </div>
          <input type="submit" value="Agregar" className="bg-[#354762] py-1 rounded-lg" />
        </form>
      </Modal>
    </>
  )
}

export default TableRow