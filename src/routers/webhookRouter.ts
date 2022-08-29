import { webhookLink } from "../controllers/webhookController.js";
import { Router } from "express";

const webhookRouter = Router();

webhookRouter.post("/", webhookLink);

export default webhookRouter;
