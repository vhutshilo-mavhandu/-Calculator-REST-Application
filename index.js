import express from "express";
import bodyParser from "body-parser";

import calculatorRoutes from "./routes/calculator.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/calculator", calculatorRoutes);

app.get("/", (req, res) => {
  res.status(200).send(`Restful Calculator , check ...  http://localhost:${PORT}/calculator `);
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
