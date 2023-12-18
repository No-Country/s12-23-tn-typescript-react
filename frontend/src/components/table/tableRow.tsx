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
      <tr>
        <td>
          <div className="flex items-center gap-[2px] sm:gap-1 lg:gap-2">
            <div className="mask mask-squircle w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#00CFE8] rounded-full">
            </div>
            <div>
              <div>{data.name}</div>
            </div>
          </div>
        </td>
        <td>{data.address}</td>
        <td>{data.phone}</td>
        <td className="flex justify-center">
          <TbEdit className="cursor-pointer text-lg sm:text-xl lg:text-2xl" onClick={() => openModal(data)}/>
        </td>
        <td>
          <div className="flex justify-center">
            <TbTrash className="cursor-pointer text-lg sm:text-xl lg:text-2xl"  onClick={() => openModalDelete(data.id)}/>
          </div>
        </td>
      </tr>

      
    </>
  )
}

export default TableRow