import express, { Request, Response, NextFunction } from "express";
// import { json } from "body-parser";

import todoRoutes from "./routes/todos";

const app = express();

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((err: Error, _1: Request, res: Response, _2: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
