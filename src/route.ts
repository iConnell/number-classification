import express from "express";
import { classifyNumber } from "./controller";

const router = express.Router();

router.get("/classify-number", classifyNumber);

export default router;
