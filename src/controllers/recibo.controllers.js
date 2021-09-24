import { getConection } from "../database/conection";



export const getRecibo = async (req, res)=>{
  const pool = await getConection();
  const resultado= await pool.request().query('select * from RECIBOS');  
  console.log(resultado)
  res.json(resul.recordset)
}