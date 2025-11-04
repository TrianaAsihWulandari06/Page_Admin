import express from "express";
import { getProducts, addPurchase, getPurchases, cancelPurchase } from "../controllers/adminController.js";
const router = express.Router();

router.get("/products", getProducts);
router.get("/purchases", getPurchases);
router.post("/purchases", addPurchase);
router.get("/purchases/cancel/:id", cancelPurchase);

export default router;