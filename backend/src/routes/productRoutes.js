import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "../controllers/productController.js";

const router = Router();

router.post('/create',createProduct);

router.put('/updateproduct/:id',updateProduct);

router.get('/products', getAllProduct);

router.get('/products/:id',getProductById);

router.get('/delete/:id',deleteProduct);

export default router;