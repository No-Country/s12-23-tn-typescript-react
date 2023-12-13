import axios from "axios"
import { Product } from "../interface/interface"

export const registerProduct = async (dataProduct: Product) =>{
  const API_PRODUCTS = "https://inventario-nocontry-s12-23.onrender.com/api/products"
  try{
    const response = await axios.post(API_PRODUCTS,{
      nombre: dataProduct.name,
      precio: dataProduct.price,
      stock: dataProduct.stock,
      proveedor_id: dataProduct.provider,
      categoria_id: dataProduct.category
    })
    return response.data
  }catch{
    return "error"
  }
}

export const fetchProductOnly = async (idProduct: number) =>{
  try {
    const res = await axios.get(`https://inventario-nocontry-s12-23.onrender.com/api/products/${idProduct}`);
    return res.data
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}