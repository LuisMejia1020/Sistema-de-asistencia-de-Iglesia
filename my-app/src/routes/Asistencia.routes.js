import { Router } from "express";
import { methods as AsistenciaController } from "./../controllers/asistencia.controller"

const router = Router()

router.get("/", AsistenciaController.getAsistencia )

export default router