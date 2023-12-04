import { TbEdit, TbLock, TbTrash } from "react-icons/tb";

function TableRow() {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-[2px] sm:gap-1 lg:gap-2">
          <div className="mask mask-squircle w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#00CFE8] rounded-full">
          </div>
          <div>
            <div>Hart Hagerty</div>
          </div>
        </div>
      </td>
      <td>Dirección de su oficina 000</td>
      <td>111-222-333</td>
      {/* <td>Email@email.com</td> */}
      <td>
        <div className="flex justify-center items-center gap-[2px] sm:gap-[6px] lg:gap-[10px]">
          <TbEdit className="cursor-pointer text-lg sm:text-xl lg:text-2xl"/>
          <TbLock className="cursor-pointer text-lg sm:text-xl lg:text-2xl"/>
          <TbTrash className="cursor-pointer text-lg sm:text-xl lg:text-2xl"/>
        </div>
      </td>
    </tr>
  )
}

export default TableRow