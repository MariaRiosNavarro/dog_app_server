# mongoose & Atlas: Collection & Favorites handle

# Dogs Collection

## MODEL

```javascript
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
  gender: String,
});

export const DogModel = mongoose.model("dogs", dogSchema);
```

## ADD DOG

```javascript
export const addOneDog = async (req, res) => {
  const dog = new DogModel(req.body);
  // manually link to the model that has the propierty imgUrl
  dog.imgUrl = req.file.path;
  await dog.save();
  res.end();
};
```

![img](/img/postdogs.png)

## GET ALL DOGS

```javascript
export const getAllDogs = async (req, res) => {
  const dogs = await DogModel.find();
  res.json(dogs);
};
```

![img](/img/getALL.png)

## GET ONE DOG

```javascript
export const getOneDog = async (req, res) => {
  const { id } = req.params;

  const dog = await DogModel.findOne({ _id: id });
  console.log("------------🐩", dog);

  res.json(dog);
};
```

![img](/img/getOnedog.png)

# DOGS Collection in Atlas

![img](/img/atlasdogs.png)

# Favorites Collection

## MODEL

```javascript
import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  //ONLY REFERENCE
  dogId: mongoose.Schema.Types.ObjectId,
  //ALL DATA from "dogs" collection
  dogReference: { type: mongoose.Types.ObjectId, ref: "dogs" },
});

export const FavoriteModel = mongoose.model("favorites", favoriteSchema);
```

# Add Fav DOG:

In the post route, I use one id of the "dogs" collection to add a dog (see Thunder Client image Below), this will be saved as dogId (only the Id) & as dogReference (complete Document from "dogs" colection), but mongoose create a NEW \_id for this document: This is important for the get & delete route, what do you want to use as params for this routes, the new \_id of favorites, or the old "dogs" id (saved in "dogId" & "dogReference").

I use here for get & delete the new \_id. But for getOne works to with dogId too -> FavoriteModel.find({ dogId: id })
For the Delete route i NEED to use the new \_id (FavoriteModel.findByIdAndDelete({ \_id: id })), becouse (FavoriteModel.findByIdAndDelete({ dogId: id })) dont work ;

```javascript
export const addOneFavorite = async (req, res) => {
  const { id } = req.params;
  //new
  const favorite = new FavoriteModel({ dogId: id });
  // add here the propierty dogReference of Model to have the complete Document and not only the reference
  favorite.dogReference = id;
  await favorite.save();
  res.end();
};
```

### Post Thunder Client

![img](/img/addfav.png)

### Post in Atlas

![img](/img/addfavatlas.png)

# Get Fav Dog:

```javascript
export const getOneFavorite = async (req, res) => {
  const { id } = req.params;
  //find
  const dog = await FavoriteModel.find({ _id: id })
    .populate("dogReference")
    .exec();
  res.json({ isFavorite: dog.length !== 0, dog: dog });
};
```

### Get One Thunder Client with the new \_id of the Documents (populate->dogReference)

![img](/img/newidfavs.png)

### Get One Thunder Client with the dogId/dogReference of the same Document (\_id above)

![img](/img/dogid.png)

# Remove Fav Dog:

```javascript
export const removeFavorite = async (req, res) => {
  const { id } = req.params;

  //findByIdAndDelete
  //we use here the id of the Document,
  // it is NOT the SAME as dogId & dogReference,
  // it is from the collection "dogs"
  //   -> also we need to find the _id

  const result = await FavoriteModel.findByIdAndDelete({ _id: id });

  res.end();
};
```
