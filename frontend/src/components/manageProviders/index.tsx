import { useState } from "react";
import { TbSearch } from "react-icons/tb";
import Modal from "../../ui/modal";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { IProvider } from "../../pages/providers/types";

export type EventsForm = {
  change: React.ChangeEvent<HTMLInputElement>;
  submit: React.FormEvent<HTMLFormElement>;
};

function ManageClient({handleSearchName}:any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const initialFormProvider: IProvider = {
    nombre: "",
    direccion: "",
    telefono: "",
  };

  const [form, setForm] = useState(initialFormProvider);

  const handleChangeInput = (e: EventsForm["change"]): void => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: EventsForm["submit"]): string | React.ReactNode => {
    e.preventDefault();

    if (!form.nombre || !form.direccion || !form.telefono) {
      return toast.error("Los campos no pueden ir vacios");
    }

    if (form.direccion.length >= 30) {
      return toast.warning(
        "El campo dirección no puede ser mayor a 30 caracteres"
      );
    }

    newProvider(form);

    async function newProvider(provider: IProvider): Promise<void> {
      const URL =
        "https://inventario-nocontry-s12-23.onrender.com/api/supplier/";
      try {
        await axios.post(URL, provider);
        toast.success("Proveedor agregado");
        closeModal();
        setForm(initialFormProvider);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 bg-black bg-opacity-80 px-4 py-4 md:px-12 lg:rounded-lg">
        <h3 className="font-bold text-3xl text-[#F5F1EA]">
          Gestion de proveedores
        </h3>
        <div className='flex items-center justify-between max-md:flex-col'>
          <form  className='flex flex-col gap-2 w-60 lg:flex-row lg:w-auto'>
            <div className='flex items-center rounded-lg justify-around border bg-white border-gray-300 p-1 w-full md:w-60'>
              <input
                name="nombre"
                className="outline-none py-1"
                type="search"
                placeholder="Buscar proveedor"
                onChange={(e)=>handleSearchName(e.target.value)}
              />
              <div className="">
                <TbSearch className="text-gray-800 text-xl" />
              </div>
            </div>
            <button
              className="bg-[#354762] text-[#FFFDFD] w-full py-2 rounded-lg md:w-52"
              // onClick={searchName}
              >
              Buscar
            </button>
          </form>
          <div>
            <button
             className='bg-[#354762] text-[#FFFDFD] w-60 py-2 rounded-lg max-md:mt-2' 
            onClick={openModal}
              >
              Agregar proveedor
            </button>
          </div>
        </div>

      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Alta de proveedor
        </h2>
        <p className="text-center">¡Bien! Vamos por buen camino</p>
        <form className="flex flex-col gap-9" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="nombre"
              type="text"
              className="rounded-lg text-black font-medium px-2 py-1"
              value={form.nombre}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address">Dirección</label>
            <input
              id="address"
              name="direccion"
              type="text"
              className="rounded-lg text-black font-medium px-2 py-1"
              value={form.direccion}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              name="telefono"
              type="text"
              className=" rounded-lg text-black font-medium px-2 py-1"
              value={form.telefono}
              onChange={handleChangeInput}
            />
          </div>
          <input
            type="submit"
            value="Agregar"
            className="py-1 rounded-lg cursor-pointer border border-text_white border-t-0  bg-primary text-text_white"
          />
        </form>
      </Modal>
      <Toaster richColors position="bottom-right" />
    </>
  );
}

export default ManageClient;
