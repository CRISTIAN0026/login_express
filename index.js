import express, { json } from "express";
import { connect } from "mongoose";
import userController from "./src/controllers/userController.js";
import "dotenv/config";


const startServer = async () => {
  await connect(process.env.DB);
  console.log("MongoDB Connected");
};

startServer();

const app = express();
app.use(json());

app.use("/user", userController);

app.listen(3000, () => console.log("Servidor iniciado en el puerto 3000"));
