import express from "express";
import config from "./config";
import reciboRouter from "./routes/recibo.routes";

const app = express();

app.set("port", config.portport || 3001);

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(reciboRouter)

export default app;
