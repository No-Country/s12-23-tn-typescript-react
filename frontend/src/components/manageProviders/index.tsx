import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import Modal from "../../ui/modal";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { IProvider } from "../../pages/providers/types";

type EventsForm = {
  change: React.ChangeEvent<HTMLInputElement>;
  submit: React.FormEvent<HTMLFormElement>;
};

function ManageClient() {
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

  //Aqui inicia la busqueda

  const [data, setData] = useState<IProvider[] | null>(null);
  const [dataResults, setDataResults] = useState<IProvider[] | null>(null);
  const [isShowTableSearch, setIsShowTableSearch] = useState(false);

  useEffect(() => {
    const getProviders = async () => {
      const URL =
        "https://inventario-nocontry-s12-23.onrender.com/api/supplier/";
      try {
        const response = await axios.get(URL);

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProviders();
  }, []);

  type FormEventChange = {
    change: React.ChangeEvent<HTMLInputElement>;
  };

  interface InputSearch {
    nombre: string;
  }

  const initialInputSearch = {
    nombre: "",
  };

  const [inputSearch, setInputSearch] =
    useState<InputSearch>(initialInputSearch);

  const handleSearchName = (e: FormEventChange["change"]) => {
    setInputSearch({ nombre: e.target.value });
  };

  const searchName = () => {
    const nombreLowerCase = inputSearch.nombre?.toLowerCase();
    const resultados = data?.filter(
      (persona) =>
        persona.nombre.toLowerCase().includes(nombreLowerCase) ||
        persona.direccion.toLowerCase().includes(nombreLowerCase)
    );

    if (resultados !== undefined) {
      if (resultados.length === 0) {
        console.log("No se encontraron resultados");
      }
      setIsShowTableSearch(true);
      setDataResults(resultados);
    }
  };

  //Fin busqueda

  return (
    <>
      <div className="flex flex-col gap-4 bg-black bg-opacity-80 px-4 py-4 md:px-12 lg:rounded-lg">
        <h3 className="font-bold text-3xl text-[#F5F1EA]">
          Gestion de proveedores
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 w-52 lg:flex-row lg:w-auto">
            <div className="flex items-center border bg-white border-gray-300 rounded p-1 w-full md:w-52">
              <input
                name="nombre"
                className="outline-none py-1"
                type="search"
                placeholder="Buscar proveedor"
                value={inputSearch.nombre}
                onChange={handleSearchName}
              />
              <div className="">
                <TbSearch className="text-gray-800 text-xl" />
              </div>
            </div>
            <button
              className="bg-[#354762] text-[#FFFDFD] w-full py-2 rounded-lg md:w-52"
              onClick={searchName}>
              Buscar
            </button>
          </div>
          <div>
            <button
              className="bg-[#354762] text-[#FFFDFD] w-52 py-2 rounded-lg"
              onClick={openModal}>
              Agregar proveedor
            </button>
          </div>
        </div>
        {isShowTableSearch && (
          <div className="bg-red-100">
            <div>
              <button onClick={() => setIsShowTableSearch(false)}>
                Limpiar busqueda
              </button>
              <h3>Resultados</h3>
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                  </tr>
                </thead>
                <tbody>
                  {dataResults?.map((results) => (
                    <>
                      <tr>
                        <td>{results.nombre}</td>
                        <td>{results.direccion}</td>
                        <td>{results.telefono}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
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
