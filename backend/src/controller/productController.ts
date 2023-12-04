import { Request, Response } from 'express';
import productService from '../service/productService';
import { HttpCodes } from '../utils';

class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const productData = req.body;
      const newProduct = await productService.createProduct(productData);

      res.status(HttpCodes.CODE_SUCCESS).json({
        message: 'Producto creado exitosamente',
        data: newProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
        message: 'Error al crear el producto',
      });
    }
  }

  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await productService.getAllProducts();

      res.status(HttpCodes.CODE_SUCCESS).json({
        message: 'Productos obtenidos exitosamente',
        data: products,
      });
    } catch (error) {
      console.error(error);
      res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
        message: 'Error al obtener los productos',
      });
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const productId = req.params.productId;
      const product = await productService.getProductById(productId);

      res.status(HttpCodes.CODE_SUCCESS).json({
        message: 'Producto obtenido exitosamente',
        data: product,
      });
    } catch (error) {
      console.error(error);
      res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
        message: 'Error al obtener el producto',
      });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const productId = req.params.productId;
      const updatedProduct = await productService.updateProduct(productId, req.body);

      res.status(HttpCodes.CODE_SUCCESS).json({
        message: 'Producto actualizado exitosamente',
        data: updatedProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
        message: 'Error al actualizar el producto',
      });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const productId = req.params.productId;
      await productService.deleteProduct(productId);

      res.status(HttpCodes.CODE_SUCCESS).json({
        message: 'Producto eliminado exitosamente',
      });
    } catch (error) {
      console.error(error);
      res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
        message: 'Error al eliminar el producto',
      });
    }
  }
}

export default new ProductController();
