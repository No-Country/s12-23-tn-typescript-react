import { useState } from 'react'
import MenuContent from '../../components/header/menuContent'
import ManageProducts from '../../components/manageProducts/manageProducts'
import TableProduct from '../../components/table/tableProduct'
import FormProduct from '../../components/form/formProduct'

export default function Products() {
  const [product, setProduct] = useState(false)
  const createProduct = () =>{
    setProduct(!product)
  }


  return (
    <MenuContent>
      {product
      ? <FormProduct closeForm={createProduct}/>
      :<section className="bg-gray-100 w-full h-auto mb-8  p-0  lg:pt-4 lg:px-12 flex flex-col gap-8 ">
        <ManageProducts createProduct={createProduct}/>
        <TableProduct />
      </section>
      }
    </MenuContent>  
  )
}
