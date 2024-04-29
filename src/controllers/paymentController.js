import { Router } from "express";
const router = Router();
import { makePayment } from "../services/paymentService";

router.post("/make", makePayment);

export default router;
