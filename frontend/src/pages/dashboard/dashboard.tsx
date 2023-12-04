import MenuContent from "./components/MenuContent";

export default function Dashboard() {

  const data = [
    { title: "Clientes", count: 12, image: "Group 2.png"},
    { title: "Proveedores", count: 0, image: "undraw_deliveries_2r4y 2.png"},
    { title: "Productos", count: 30, image: "undraw_logistics_x-4-dc 2.png"}
    // Agrega más secciones según sea necesario
  ];

  return (
    <>
    <main className=''>
      <MenuContent>
        <section className="w-full p-8 max-md:p-4 ">
          <h1 className="text-[#344D64] font-bold text-3xl text-center">GESTIÓN DE INVENTARIO</h1>
          <p className="text-center text-[#344D64] font-semibold">¡Bienvenido Administrador! Este es el panel principal del sistema, aquí podrás encontrar atajos para acceder a los listados del inventario</p>
          <div className="flex justify-around mt-8 max-lg:flex-col gap-x-4 max-lg:items-center">
            {data.map((data, index)=>(
              <article key={index} className=" transition-all duration-300 hover:brightness-110 cursor-pointer rounded-lg flex items-center justify-center gap-8 w-80 bg-[#344D64] h-52  max-lg:scale-95 max-md:scale-90">
                <img src={data.image} width={100} alt="" />
                <span className="flex flex-col items-center">
                  <p className=" uppercase text-[#fff]  font-semibold ">{data.title}</p>
                  <h1 className=" text-[#fff] text-6xl font-semibold">{data.count}</h1>
                </span>
              </article>
            ))
            }
          </div>
        </section>
      </MenuContent>
    </main>
    </>
  )
}
