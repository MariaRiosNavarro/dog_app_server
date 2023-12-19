import { DogModel } from "./model.js";

export const getAllDogs = async (req, res) => {
  const dogs = await DogModel.find();
  res.json(dogs);
};

export const getOneDog = async (req, res) => {
  const { id } = req.params;

  const dog = await DogModel.findOne({ _id: id });
  console.log("------------🐩", dog);

  res.json(dog);
};

export const addOneDog = async (req, res) => {
  // const tempDog = req.body;
  // tempDog.img=req.file.path;

  const dog = new DogModel(req.body);
  //   verknuffen manuel zum model das die propierty imgUrl hat
  dog.imgUrl = req.file.path;
  await dog.save();
  res.end();
};
