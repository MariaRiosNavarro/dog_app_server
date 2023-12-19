// Name, breed, age, meal, place, status,preferences

import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  age: Number,
  breed: String,
  food: String,
  status: String,
  preferences: String,
  place: String,
});

export const DogModel = mongoose.model("dogs", dogSchema);
