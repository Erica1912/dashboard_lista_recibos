import express from "express";
import config from "./config";
const app = express();

app.set('port', config.portport || 3000)


export default app;