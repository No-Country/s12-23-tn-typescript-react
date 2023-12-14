import TableRow from "./tableRow"

function TableBody() {
  return (
    <tbody className="divide-y-8">
      <TableRow data={{
        nombre: "",
        direccion: "",
        telefono: ""
      }} />
      <TableRow data={{
        nombre: "",
        direccion: "",
        telefono: ""
      }} />
      <TableRow data={{
        nombre: "",
        direccion: "",
        telefono: ""
      }} />
      <TableRow data={{
        nombre: "",
        direccion: "",
        telefono: ""
      }} />
    </tbody>
  )
}

export default TableBody