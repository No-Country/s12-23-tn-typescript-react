import TableBody from "./tableBody"

function Table() {
  return (
    <table className="table-auto w-full border-separate border-spacing-y-3 text-xs sm:text-base lg:text-xl">
      <thead>
        <tr>
          <th className="text-left pl-5 sm:pl-7 lg:pl-10">Nombre</th>
          <th className="text-left">Email</th>
          <th className="text-left">Teléfono</th>
          <th className="text-left">Dirección</th>
          <th className="text-center">Editar</th>
        </tr>
      </thead>
      <TableBody />
    </table>
  )
}

export default Table