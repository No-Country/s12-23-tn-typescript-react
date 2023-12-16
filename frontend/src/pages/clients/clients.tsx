import Table from "../../components/table/table";
import ManageClient from "../../components/manageClient";
import MenuContent from "../../components/header/menuContent";

export default function Clients() {
  const handleSearchButtonClick = () => {
    console.log("Botón de buscar clicado");
  };

  const handleCustomButtonClick = () => {
    console.log("Botón personalizado clicado");
  };

  return (
    <>
      <MenuContent>
        <section className="w-full p-0 lg:pt-4 lg:px-12 flex flex-col gap-8 ">
          <ManageClient
            title="Gestión de Clientes"
            placeholder="Buscar Cliente"
            button="Agregar Cliente"
            onButtonClick={handleCustomButtonClick}
            onSearchButtonClick={handleSearchButtonClick}
          />
          <Table />
        </section>
      </MenuContent>
    </>
  );
}
