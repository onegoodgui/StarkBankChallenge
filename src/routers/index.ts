import { Router } from "express";
import invoiceRouter from "./invoiceRouter.js";
import webhookRouter from "./webhookRouter.js";

const router = Router();

router.use(webhookRouter);
router.use("/invoice", invoiceRouter);

export default router;
