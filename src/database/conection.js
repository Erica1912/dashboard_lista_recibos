import sql from 'mssql'


const dbSetings = {
    authentication: {
        type: 'default',
        options: {
            userName: "bd_hass",
            password: "admin123",
        }
    },
    database: 'HASS_COLOMBIA',
    options: {
        encrypt: true,
        enableArithAbort: true,
        integratedSecurity: true,
        trustServerCertificate: true,
        rowCollectionOnDone: true,
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    },
  server: "DESKTOP-LQ3GR66",
  port: 1433,
       
  
};

export async function getConection() {
    try{
        const pool = await sql.connect(dbSetings);
        return pool;        
    }catch(err){
        console.log(err)
    }
}
 export {sql};


