import { DogModel } from "./model.js";

export async function getAllDogs(req, res) {
  const dogs = await DogModel.find();
  res.json(dogs);
}

export async function addOndDog(req, res) {
  // const tempDog = req.body;
  // tempDog.img=req.file.path;

  const dog = new DogModel(req.body);
  //   verknuffen manuel zum model das die propierty imgUrl hat
  dog.imgUrl = req.file.path;
  await dog.save();
  res.end();
}
