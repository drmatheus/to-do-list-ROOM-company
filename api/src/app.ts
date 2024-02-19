import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { taskRoutes } from "./routes";
const cors = require("cors");

const app: Application = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(cors());

app.use("/task", taskRoutes);

app.use(handleErrors);

export default app;
