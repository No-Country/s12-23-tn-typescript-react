import { useState } from 'react'
import MenuContent from '../../components/header/menuContent'
import TableProduct from '../../components/table/tableProduct'
import FormProduct from '../../components/form/formProduct'
import ManageClient from '../../components/manageClient'

export default function Products() {
  const [product, setProduct] = useState(false)

  const handleSearchButtonClick = () => {
    
    console.log('Botón de buscar clicado');
  };

  const handleCustomButtonClick = () =>{
    setProduct(!product)
  }

  const createProduct = () =>{
    setProduct(!product)
  }

  return (
    <MenuContent>
      {product
      ? <FormProduct closeForm={createProduct}/>
      :<section className="w-full p-0 lg:pt-4 lg:px-12 flex flex-col gap-6">
        <ManageClient 
        title="Gestión de Producto" 
        placeholder="Buscar Producto" 
        button="Agregar Producto" 
        onButtonClick={handleCustomButtonClick}
        onSearchButtonClick={handleSearchButtonClick}
        />
        <TableProduct/>
      </section>
      }
    </MenuContent>  
  )
}
