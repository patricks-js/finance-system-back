import { Router } from "express";

import { SessionsController } from "../controllers/SessionsController";

export const sessionRoutes = Router();

sessionRoutes.post("/", SessionsController.create);
