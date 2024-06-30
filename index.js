import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/default.js";
import authRouter from "./routes/auth.js";


const PORT = 5000;
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRouter);



app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
