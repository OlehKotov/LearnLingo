import {
  ref,
  query,
  get,
  orderByChild,
  equalTo,
  remove,
} from "firebase/database";
import { database } from "./../firebase.js";

export const removeFavoriteFromUserFirebase = async (email, teacherId) => {
  try {
    const usersRef = ref(database, "users");
    const userQuery = query(usersRef, orderByChild("email"), equalTo(email));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      const userId = Object.keys(userData)[0];

      const favoritesRef = ref(database, `users/${userId}/favorites`);
      const favoriteSnapshot = await get(favoritesRef);

      if (favoriteSnapshot.exists()) {
        const favoriteData = favoriteSnapshot.val();
        const favoritesList = Object.entries(favoriteData);


        const favoriteKey = favoritesList.find(
          ([key, value]) => value.id === teacherId
        )?.[0];


        if (favoriteKey) {
          const favoriteRef = ref(
            database,
            `users/${userId}/favorites/${favoriteKey}`
          );
          await remove(favoriteRef);
          return favoriteKey;
        } else {
          throw new Error("Favorite not found");
        }
      } else {
        throw new Error("No favorites found");
      }
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error removing favorite:", error.message);
    throw error;
  }
};
