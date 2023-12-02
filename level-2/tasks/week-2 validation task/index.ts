import express from "express";
import authRouter from "./routes/auth.router";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/auth", authRouter);

app.listen(PORT, () =>
    console.log("App is listening on: http://localhost:" + PORT)
);
