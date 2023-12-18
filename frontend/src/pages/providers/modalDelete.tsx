import { IoIosCloseCircleOutline } from "react-icons/io";

interface StateModal {
  stateModal: boolean;
  closeModalDelete: () => void;
  deleteProvider: () => void;
}

export const ModalDelete: React.FC<StateModal> = ({
  stateModal,
  closeModalDelete,
  deleteProvider,
}) => {
  return (
    <div
      id="loginModal"
      className={`${
        stateModal ? "block" : "hidden"
      } z-20 modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`}>
      <div
        className={`flex flex-col  items-center relative justify-center transition-all duration-300 w-1/4 max-xl:w-2/4 modal-content bg-text_blue shadow-xl shadow-text_blue text-white rounded-lg  p-6  max-md:w-4/5 h-2/4`}>
        <IoIosCloseCircleOutline
          className=" text-4xl cursor-pointer absolute right-5 top-4"
          onClick={closeModalDelete}
        />
        <h2 className="text-4xl text-center my-6 text-text_white font-bold">
          Eliminar Proveedor
        </h2>
        <p className="text-lg">
          ¿Estás seguro de que deseas eliminar al proveedor? Esta acción no se
          puede deshacer y resultará en la eliminación permanente del proveedor
          de la base de datos. Por favor, confirma tu decisión
        </p>
        <span className=" flex justify-between gap-2 ">
          <button
            onClick={deleteProvider}
            className="bg-red-300 font-bold border-2 p-2 w-40 mt-8 text-red-500 border-red-500 rounded-lg">
            Eliminar
          </button>
        </span>
      </div>
    </div>
  );
};
