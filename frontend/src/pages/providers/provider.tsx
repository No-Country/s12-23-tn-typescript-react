import MenuContent from "../../components/header/menuContent";
import ManageClient from "../../components/manageClient";
import Table from "../../components/table/table";

export default function Provider() {

  const handleSearchButtonClick = () => {
    console.log("Botón de buscar clicado");
  };

  const handleCustomButtonClick = () => {
    console.log("Botón personalizado clicado");
  };

  return (
    <MenuContent>
      <section className="w-full p-0 lg:pt-4 lg:px-12 flex flex-col gap-8 ">
        <ManageClient
          title="Gestión de Proveedores"
          placeholder="Buscar Proveedor"
          button="Agregar Proveedor"
          onButtonClick={handleCustomButtonClick}
          onSearchButtonClick={handleSearchButtonClick}
        />
        <Table />
      </section>
    </MenuContent>
  );
}
