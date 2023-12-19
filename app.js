import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { router as dogRouter } from "./dogs/router.js";

await mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use(cors());
app.use("/uploads", express.static("./uploads"));

app.use("/api/dogs", dogRouter);
app.use("/api/favorite", favoriteRouter);

app.listen(process.env.PORT, () =>
  console.log(console.log("Port is:http://localhost:" + process.env.PORT))
);
