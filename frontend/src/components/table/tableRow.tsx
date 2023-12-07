import { TbEdit, TbTrash } from "react-icons/tb";

interface TableRowProps {
  data: {
    nombre: string;
    direccion: string;
    telefono: string;
  };
}

function TableRow({ data }: TableRowProps) {
  return (
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
        <TbEdit className="cursor-pointer text-lg sm:text-xl lg:text-2xl "/>
      </td>
      <td>
        <div className="flex justify-center">
          <TbTrash className="cursor-pointer text-lg sm:text-xl lg:text-2xl"/>
        </div>
      </td>
    </tr>
  )
}

export default TableRow