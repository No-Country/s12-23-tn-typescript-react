import { TbEdit, TbTrash } from "react-icons/tb";
import { IProvider } from "../types";

interface TableRowProps {
  data: IProvider;
  openModal: (provider: IProvider) => void;
  openModalDelete: (provider: IProvider) => void;
}

function TableRow({ data, openModal, openModalDelete }: TableRowProps) {
  return (
    <>
      <td>
        <div className="flex items-center gap-[2px] sm:gap-1 lg:gap-2">
          <div>
            <div>{data.nombre}</div>
          </div>
        </div>
      </td>
      <td>{data.direccion}</td>
      <td>{data.telefono}</td>
      <td className="flex justify-center">
        <TbEdit
          className="cursor-pointer text-lg sm:text-xl lg:text-2xl"
          onClick={() => openModal(data)}
        />
      </td>
      <td>
        <div className="flex justify-center">
          <TbTrash
            className="cursor-pointer text-lg sm:text-xl lg:text-2xl"
            onClick={() => openModalDelete(data)}
          />
        </div>
      </td>
    </>
  );
}

export default TableRow;
