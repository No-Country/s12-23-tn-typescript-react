import { TbEdit, TbTrash } from "react-icons/tb";
import { IProvider } from "../../../interface/interface";

interface TableRowProps {
  data: IProvider;
  openModal: (provider: IProvider) => void;
  openModalDelete: (provider: IProvider) => void;
}

function TableRow({ data, openModal, openModalDelete }: TableRowProps) {
  return (
    <>
      <td className="p-2 text-sm text-gray-700">
        <div className="flex items-center gap-[2px] sm:gap-1 lg:gap-2">
          <div>
            <div>{data.nombre}</div>
          </div>
        </div>
      </td>
      <td className="p-2 text-sm text-gray-700">{data.direccion}</td>
      <td className="p-2 text-sm text-gray-700">{data.telefono}</td>
      <td className="flex justify-center mt-2">
        <TbEdit
          className=" cursor-pointer text-3xl border-2 bg-blue-100 rounded-lg text-blue-800 p-1 hover:brightness-90 transition-all duration-200"
          onClick={() => openModal(data)}
        />
      </td>
      <td className="p-2 text-sm text-gray-700">
        <div className="flex justify-center items-center">
          <TbTrash
            className="cursor-pointer text-3xl border-2 bg-red-100 text-red-600 rounded-lg p-1 hover:brightness-90 transition-all duration-200"
            onClick={() => openModalDelete(data)}
          />
        </div>
      </td>
    </>
  );
}

export default TableRow;
