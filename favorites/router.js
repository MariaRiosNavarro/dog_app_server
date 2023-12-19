import express from "express";
import {
  removeFavorite,
  getOneFavorite,
  addOneFavorite,
} from "./controller.js";

export const router = new express.Router();

router.get("/:id", getOneFavorite);
router.post("/:id", addOneFavorite);
router.delete("/:id", removeFavorite);
