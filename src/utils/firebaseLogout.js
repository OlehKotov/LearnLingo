import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { removeUser } from "../redux/userSlice";
import { clearFavoriteTeachers } from "../redux/favoritesSlice";

export const logoutUser = async (dispatch) => {
  const auth = getAuth();
  try {
    await signOut(auth);
    dispatch(removeUser());
    dispatch(clearFavoriteTeachers())
    toast.success("Log out was successful!");
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  } catch (error) {
    toast.error("An error happened during log out. Try again.");
    console.error("Error during log out:", error.message);
  }
};
