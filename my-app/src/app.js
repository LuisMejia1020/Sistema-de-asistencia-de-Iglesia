import express from "express"
import morgan from "morgan"

//routes
import AsistenciaRutas from "./routes/Asistencia.routes"

const app = express()

//configuraciones
app.set("port", 4000)

//middleware
app.use(morgan("dev"))

//rutas
app.use("/api/asistencia", AsistenciaRutas)

export default app