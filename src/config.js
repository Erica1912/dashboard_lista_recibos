import {config} from 'dotenv'
config()
export default {
    port: process.env.PORT || 4000,
    userName: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
    server: process.env.DB_SERVER || '',
}