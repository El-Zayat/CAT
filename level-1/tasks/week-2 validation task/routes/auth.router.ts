import { Router } from "express";
import ctrl from "../controllers/auth.controller";
import validator from "../validators/auth.validator";

const router = Router();

router.post("/register", validator.register, ctrl.register);

export default router;
