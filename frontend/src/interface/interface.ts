export interface Product {
  name: string
  price: number
  provider: number
  stock: number
  category: number
}

export interface DataProduct {
  producto_id: number
  nombre: string
  precio: string
  stock: number
  proveedor_id: number
  categoria_id: number
}

export type drinkCategory = {
  [key: number]: string;
};

export interface StateModal {
  stateModal: boolean
  closeModal: () => void
  deletePost: () => void
}

export interface EditModal {
  stateEditModal: boolean
  idProduct: number
  closeModal: () => void
  updateTable: () => void
}

export interface Clients {
  id: number
  name: string
  address: string
  phone: string
}
