import { getConection, sql, queries } from "../database";

export const getRecibo = async (req, res) => {
  
  try {
    const pool = await getConection();
    const resultado = await pool.request().query(queries.getAllRec);
    res.json(resultado.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.messages);
  }
};

export const createNewRec = async (req, res) => {
  const {
    ESTADO,
    TITULAR,
    PESO,    
    PRECIO,
    PRECIO_U,
    CREADO,
    DIRECCION,
    FECHA_CREADO
  } = req.body;
  //console.log(req.body)
  try {
    const pool = await getConection();
    await pool
      .request()
      .input("ESTADO", sql.VarChar, ESTADO)
      .input("TITULAR", sql.VarChar, TITULAR)
      .input("PESO", sql.Numeric, PESO)      
      .input("PRECIO", sql.Numeric, PRECIO)
      .input("PRECIO_U", sql.Numeric, PRECIO_U)
      .input("NOMBRE_USUARIO", sql.VarChar, CREADO)
      .input("DIRECCION", sql.VarChar, DIRECCION)
      .input("FECHA_CREADO", sql.VarChar, FECHA_CREADO)
      .query(queries.createNewRec);
    res.json({
      ESTADO,
      TITULAR,
      PESO,      
      PRECIO,
      PRECIO_U,
      CREADO,
      DIRECCION,
      FECHA_CREADO
    });
  } catch (error) {
    res.status(500);
    res.send(error.messages);
  }
};

export const getRecById = async (req, res) => {
  console.log('entra')
  try {
    const { CONSECUTIVOS } = req.params; 
    console.log(CONSECUTIVOS) 
    const pool = await getConection();
    const result = await pool
      .request()
      .input("CONSECUTIVO", CONSECUTIVOS)
      .query(queries.getIdRec);      
    res.send(result.recordsets[0]);
  } catch (error) {
    console.log(error)
    res.status(500);
    res.send(error.messages);
  }
};

export const deleteIdRec = async (req, res) => {
  try {
    const { CONSECUTIVOS } = req.params;
    const pool = await getConection();
    const result = await pool
      .request()
      .input("CONSECUTIVOS", CONSECUTIVOS)
      .query(queries.deleteIdRec);
    res.sendStatus(204);
  } catch (error) {
    res.send(error.messages);
    res.status(500);
  }
};

export const getTotalRec = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query(queries.getTotalRec);
    res.json(result.recordset[0][""]);
  } catch (error) {
    console.log("er", error);
    res.send(error.messages);
    res.status(500);
  }
};

export const upDateRec = async (req, res) => {
  const {
    ESTADO,
    TITULAR,
    PESO,    
    PRECIO,
    PRECIO_U,
    CREADO,
    DIRECCION,
    FECHA_CREADO
  } = req.body;
  const { CONSECUTIVOS } = req.params;
  console.log(CONSECUTIVOS)
  if (CONSECUTIVOS == null) {
    return res.status(400).json({
      msg: "No hay resultado",
    });
  }
  const pool = await getConection();
  await pool.request()  
  .input("ESTADO", sql.VarChar, ESTADO)
  .input("TITULAR", sql.VarChar, TITULAR)
  .input("PESO", sql.Numeric, PESO)  
  .input("PRECIO", sql.Numeric, PRECIO)
  .input("PRECIO_U", sql.Numeric, PRECIO_U)
  .input("CREADO", sql.VarChar, CREADO)
  .input("DIRECCION", sql.VarChar, DIRECCION)
  .input("CONSECUTIVOS", sql.Int, CONSECUTIVOS)
  .input("FECHA_CREADO", sql.VarChar, FECHA_CREADO)
  .query(queries.upDateRec)
  res.json({ESTADO,TITULAR,PESO,PRECIO,PRECIO_U,CREADO,DIRECCION,FECHA_CREADO})
};
