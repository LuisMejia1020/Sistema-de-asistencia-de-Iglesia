import { getConnection } from "./../database/database";


const getAsistencia = async(req, res)=>{
    const connection = await getConnection();
    const result = await connection.query("SELECT idAsistencia, idUser, horaEntrada, horaSalida FROM Asistencia ")
    console.log(result)
    res.json(result)
}

export const methods = {
    getAsistencia
}