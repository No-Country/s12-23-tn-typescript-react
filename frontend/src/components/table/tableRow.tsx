import { TbEdit, TbLock, TbTrash } from "react-icons/tb";

function TableRow() {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-2">
          <div className="mask mask-squircle w-8 h-8 bg-[#00CFE8] rounded-full">
          </div>
          <div>
            <div>Hart Hagerty</div>
          </div>
        </div>
      </td>
      <td>Email@email.com</td>
      <td>111-222-333</td>
      <td>Dirección de su oficina 000</td>
      <td>
        <div className="flex justify-center items-center gap-[10px]">
          <TbEdit className="cursor-pointer" size={24}/>
          <TbLock className="cursor-pointer" size={24}/>
          <TbTrash className="cursor-pointer" size={24}/>
        </div>
      </td>
    </tr>
  )
}

export default TableRow