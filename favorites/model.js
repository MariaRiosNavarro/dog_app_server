import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  dogId: mongoose.Schema.Types.ObjectId,
  dogReference: { type: mongoose.Types.ObjectId, ref: "dogs" },
});

export const FavoriteModel = mongoose.model("favorites", favoriteSchema);
