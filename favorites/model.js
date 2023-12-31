import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  //Only Reference
  dogId: mongoose.Schema.Types.ObjectId,

  //Complete Document from dogs collection
  dogReference: { type: mongoose.Types.ObjectId, ref: "dogs" },
});

export const FavoriteModel = mongoose.model("favorites", favoriteSchema);
