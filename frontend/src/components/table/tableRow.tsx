import { TbEdit, TbTrash } from "react-icons/tb";
import { Client } from "../../interface/interface";

interface TableRowProps {
  data: Client
  openModal: (client:Client) => void
  openModalDelete: (id: number) => void
}

function TableRow({ data, openModal, openModalDelete}: TableRowProps) {

  return (
    <>
      <td className="p-2 text-sm text-gray-700">
        <div className="flex items-center gap-[2px] sm:gap-1 lg:gap-2">
          <div>
            <div>{data.name}</div>
          </div>
        </div>
      </td>
      <td className="p-2 text-sm text-gray-700">{data.address}</td>
      <td className="p-2 text-sm text-gray-700">{data.phone}</td>
      <td className="flex justify-center mt-2">
        <TbEdit className="cursor-pointer text-3xl border-2 bg-blue-100 rounded-lg text-blue-800 p-1 hover:brightness-90 transition-all duration-200" onClick={() => openModal(data)}/>
      </td>
      <td className="p-2 text-sm text-gray-700">
        <div className="flex justify-center">
          <TbTrash className="cursor-pointer text-3xl border-2 bg-red-100 text-red-600 rounded-lg p-1 hover:brightness-90 transition-all duration-200"  onClick={() => openModalDelete(data.id)}/>
        </div>
      </td>
    </>
  )
}

export default TableRow