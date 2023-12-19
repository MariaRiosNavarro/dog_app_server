import multer from "multer";
import express from "express";
import { addOneDog, getAllDogs, getOneDog } from "./controller.js";

export const router = new express.Router();
const upload = multer({ dest: "./uploads" });

router.get("/", getAllDogs);
router.get("/:id", getOneDog);
router.post("/", upload.single("img"), addOneDog);

// Die names in formular mussen mit den router in multer treffen
// aber dannach können wir in controller manuel an unseren model (imgURL) verknüpfen
