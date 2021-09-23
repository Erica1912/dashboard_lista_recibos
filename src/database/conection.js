import sql from 'mssql'

const dbSettings = {
    authentication: {
        type: 'default',
        options: {
            userName: "bd_hass",
            password: "admin123",
        }
    },
    options: {
        encrypt: true,
        enableArithAbort: true,
        integratedSecurity: true,
        trustServerCertificate: true,
        rowCollectionOnDone: true,
        database: 'HASS_COLOMBIA',
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    },
  server: "DESKTOP-LQ3GR66",
  port: 1433,
};

sql.connect(dbSettings)