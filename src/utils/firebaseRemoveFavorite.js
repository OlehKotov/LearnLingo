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
    const usersRef = ref(database, 'users');
    const userQuery = query(usersRef, orderByChild('email'), equalTo(email));
  
    const snapshot = await get(userQuery);
  
    if (snapshot.exists()) {
      const userData = snapshot.val();
      const userId = Object.keys(userData)[0];
  
      const favoritesRef = ref(database, `users/${userId}/favorites`);
      const favoriteQuery = query(favoritesRef, orderByChild('teacherId'), equalTo(teacherId));
      const favoriteSnapshot = await get(favoriteQuery);
  
      if (favoriteSnapshot.exists()) {
        const favoriteData = favoriteSnapshot.val();
        const favoriteKey = Object.keys(favoriteData)[0];
  
        const favoriteRef = ref(database, `users/${userId}/favorites/${favoriteKey}`);
        await remove(favoriteRef);
  
        return favoriteKey;
      } else {
        throw new Error('Favorite not found');
      }
    } else {
      throw new Error('User not found');
    }
  };