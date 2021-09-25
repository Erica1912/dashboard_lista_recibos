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
    FECHA_CREADO,
    PRECIO,
    PRECIO_U,
    CREADO,
    DIRECCION,
  } = req.body;
  //console.log(req.body)
  try {
    const pool = await getConection();
    await pool
      .request()
      .input("ESTADO", sql.VarChar, ESTADO)
      .input("TITULAR", sql.VarChar, TITULAR)
      .input("PESO", sql.Numeric, PESO)
      .input("FECHA_CREADO", sql.VarChar, FECHA_CREADO)
      .input("PRECIO", sql.Numeric, PRECIO)
      .input("PRECIO_U", sql.Numeric, PRECIO_U)
      .input("CREADO", sql.VarChar, CREADO)
      .input("DIRECCION", sql.VarChar, DIRECCION)
      .query(queries.createNewRec);
    res.json({
      ESTADO,
      TITULAR,
      PESO,
      FECHA_CREADO,
      PRECIO,
      PRECIO_U,
      CREADO,
      DIRECCION,
    });
  } catch (error) {
    res.status(500);
    res.send(error.messages);
  }
};

export const getRecById = async (req, res) => {
  console.log("xdtest")
  try {
    const { CONSECUTIVOS } = req.params;
    const pool = await getConection();
    const result = await pool
      .request()
      .input("CONSECUTIVO", CONSECUTIVOS)
      .query(queries.getIdRec);
    res.send(result.recordsets[0]);
  } catch (error) {
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
    console.log(result)
    res.sendStatus(204);
  } catch (error) {
    console.log("er" ,error);
    res.send(error.messages);
    res.status(500);
  }
};
