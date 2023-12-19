import multer from "multer";
import express from "express";
import { addOneDog, getAllDogs } from "./controller";

export const router = new express.Router();
const upload = multer({ dest: "./uploads" });

router.get("/", getAllDogs);
router.post("/", upload("img"), addDog);

// Die names in formular mussen mit den router in multer treffen
// aber dannach können wir in controller manuel an unseren model (imgURL) verknüpfen
