import express from "express";
import config from "./config";
import reciboRouter from "./routes/recibo.routes";

const app = express();

app.set("port", config.portport || 3000);
app.use(reciboRouter)

export default app;
