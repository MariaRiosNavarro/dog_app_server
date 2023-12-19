import { FavoriteModel } from "./model";

export const getOneFavorite = async (req, res) => {
  const { id } = req.params;
  //find
  const result = await Fav.find({ dogId: id });
  console.log("------------------🐶->", result);
  res.json({ isFav: result.length != 0 });
};

export const addOneFavorite = async (req, res) => {
  const { id } = req.params;
  //new
  const favorite = new FavoriteModel({ dogId: id });
  await favorite.save();
  res.end();
};

export const removeFavorite = async (req, res) => {
  const { id } = req.params;
  //findByIdAndDelete
  await FavoriteModel.findByIdAndDelete({ dogId: id });
  res.end();
};
