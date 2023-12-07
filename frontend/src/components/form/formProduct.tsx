import { useState } from "react"
import { Product } from "../../interface/interface"

export default function FormProduct() {
  const [dataProduct, setDataProduct] = useState<Product>({
    name: "",
    price:0,
    provider:"",
    stock:0,
    category: "gaseosas"
  })

  const createProduct = (e: React.FormEvent) =>{
    e.preventDefault()
    console.log(dataProduct)
  }

  const updateName = (value: React.ChangeEvent<HTMLInputElement>) => {
    setDataProduct({ ...dataProduct, name: value.target.value });
  };

  const updatePrice = (value: React.ChangeEvent<HTMLInputElement>) => {
    setDataProduct({ ...dataProduct, price: Number(value.target.value) });
  };

  const updateProvider = (value: React.ChangeEvent<HTMLSelectElement>) => {
    setDataProduct({ ...dataProduct, provider: value.target.value });
  };

  const updateStock = (value: React.ChangeEvent<HTMLInputElement>) => {
    setDataProduct({ ...dataProduct, stock: Number(value.target.value) });
  };

  const updateCategory = (value: React.ChangeEvent<HTMLSelectElement>) => {
    setDataProduct({ ...dataProduct, category: value.target.value });
  };

  return (
  <section className="w-full">
    <h1 className="w-full mb-2 h-12 flex justify-center items-center font-semibold text-2xl text-zinc-100 text-center bg-[#000000]">Alta de Productos</h1>
    <article className="flex justify-around items-center">
      <form className="border-2 flex flex-col bg-[#65727C] p-6 w-96 rounded-lg" onSubmit={createProduct}>
        <label htmlFor="name" className=" font-semibold">Nombre</label>
        <input type="text" id="name" placeholder="Coca Cola 2L" onChange={updateName} className="h-8 rounded-md px-2 outline-none mt-1"/>
        <label htmlFor="price" className="mt-4  font-semibold">Precio</label>
        <div className="flex items-center mt-1">
          <span className="text-gray-400 mr-2">$</span>
          <input onChange={updatePrice} type="number" placeholder="1.00" className="h-8 rounded-md px-2 outline-none w-full"/>
        </div>

        <label htmlFor="providers" className="mt-4  font-semibold">Proveedores</label>
        <select name="providers" onChange={updateProvider} id="" className="h-8 rounded-md px-2 outline-none mt-1">
          <option value="provider-1">Proveedor 1</option>
          <option value="provider-2">Proveedor 2</option>
          <option value="provider-3">Proveedor 3</option>
        </select>

        <label htmlFor="stock" className="mt-4  font-semibold">Stock</label>
        <input type="number" onChange={updateStock} placeholder="10" className="h-8 rounded-md px-2 outline-none mt-1"/>

        <label htmlFor="category" className="mt-4  font-semibold">Categoría</label>
        <select name="category" onChange={updateCategory} className="h-8 rounded-md px-2 outline-none mt-1">
          <option value="gaseosas">Gaseosas</option>
          <option value="aguas">Aguas</option>
          <option value="jugos">Jugos</option>
          <option value="cervezas">Cervezas</option>
        </select>

        <button className="bg-[#354762] mt-6 h-10 rounded-lg text-zinc-100 font-semibold">Agregar</button>
      </form>

      <img src={"Image.png"} alt="image-form" className="rounded-lg max-md:hidden w-80 h-80"/>
    </article>
  </section>
  )
}
