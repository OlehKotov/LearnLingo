import { ref, get, query, orderByChild, equalTo } from "firebase/database";
import { database } from "./../firebase.js";

export const getFavoriteTeachersFromFirebase = async (email) => {
  const usersRef = ref(database, "users");
  const userQuery = query(usersRef, orderByChild("email"), equalTo(email));
  const snapshot = await get(userQuery);

  if (snapshot.exists()) {
    const userData = snapshot.val();
    const userId = Object.keys(userData)[0];
    const favoritesRef = ref(database, `users/${userId}/favorites`);
    const favoritesSnapshot = await get(favoritesRef);

    if (favoritesSnapshot.exists()) {
      return Object.values(favoritesSnapshot.val());
    } else {
      return [];
    }
  } else {
    throw new Error("User not found");
  }
};