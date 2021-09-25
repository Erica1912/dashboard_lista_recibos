import { Router } from "express";
import { createNewRec, getRecibo, getRecById } from "../controllers/recibo.controllers";



const router = Router();
router.get("/recibo", getRecibo);


router.post("/recibo", createNewRec );

//recibe el id para ver el recibo 
router.get("/recibo/:CONSECUTIVOS", getRecById);


router.delete("/recibo", );


router.put("/recibo", );
export default router;
