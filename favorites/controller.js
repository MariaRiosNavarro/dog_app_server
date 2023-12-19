import { FavoriteModel } from "./model.js";

export const addOneFavorite = async (req, res) => {
  const { id } = req.params;
  //new
  const favorite = new FavoriteModel({ dogId: id });
  favorite.dogReference = id;
  await favorite.save();
  res.end();
};

export const getOneFavorite = async (req, res) => {
  const { id } = req.params;
  //find
  const dog = await FavoriteModel.find({ _id: id })
    .populate("dogReference")
    .exec();
  res.json({ isFavorite: dog.length !== 0, dog: dog });
};

export const removeFavorite = async (req, res) => {
  const { id } = req.params;
  //findByIdAndDelete
  //we use here the id of the Document,
  // it is NOT the same as dogId & dogReference,
  // it is from the collection "dogs"

  const result = await FavoriteModel.findByIdAndDelete({ _id: id });

  console.log(result);

  res.end();
};
