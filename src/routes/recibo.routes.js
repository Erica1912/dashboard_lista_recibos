import { Router } from "express";
import {
  createNewRec,
  getRecibo,
  getRecById,
  deleteIdRec,
  getTotalRec,
  upDateRec
} from "../controllers/recibo.controllers";

const router = Router();
router.get("/recibo", getRecibo);
router.post("/recibo", createNewRec);
router.get("/recibo/count", getTotalRec);
//recibe el id para ver el recibo
router.get("/recibo/:CONSECUTIVOS", getRecById);
router.delete("/recibo/:CONSECUTIVOS", deleteIdRec);
router.put("/recibo/:CONSECUTIVOS", upDateRec);
export default router;
