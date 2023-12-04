import Producto from '../models/producto.model';

class ProductService {
  async createProduct(productData: any) {
    try {
      const newProduct = await Producto.create(productData);
      return newProduct;
    } catch (error) {
      throw new Error('Error al crear el producto');
    }
  }

  async getAllProducts() {
    try {
      const products = await Producto.findAll();
      return products;
    } catch (error) {
      throw new Error('Error al obtener todos los productos');
    }
  }

  async getProductById(productId: string) {
    try {
      const product = await Producto.findByPk(productId);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return product;
    } catch (error) {
      throw new Error('Error al obtener el producto por ID');
    }
  }

  async updateProduct(productId: string, updatedData: any) {
    try {
      const product = await Producto.findByPk(productId);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      await product.update(updatedData);

      return product;
    } catch (error) {
      throw new Error('Error al actualizar el producto');
    }
  }

  async deleteProduct(productId: string) {
    try {
      const product = await Producto.findByPk(productId);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      await product.destroy();

      return true;
    } catch (error) {
      throw new Error('Error al eliminar el producto');
    }
  }
}

export default new ProductService();
