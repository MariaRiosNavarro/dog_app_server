# Favorites

1. With this model

```javascript
import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  //ONLY REFERENCE
  dogId: mongoose.Schema.Types.ObjectId,
  //ALL DATA
  dogReference: { type: mongoose.Types.ObjectId, ref: "dogs" },
});

export const FavoriteModel = mongoose.model("favorites", favoriteSchema);
```
