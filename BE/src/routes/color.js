import express from "express";
import {
  createColor,
  getAllColor,
  getColor,
  removeColor,
  updateColor,
} from "../controllers/color";
import { checkPermission } from "../middlewares/checkPermission.";
const router = express.Router();
router.get("/color", getAllColor);
router.get("/color/:id", getColor);
router.post("/color/", createColor);
router.put("/color/:id", updateColor);
router.delete("/color/:id", removeColor);
export default router;
