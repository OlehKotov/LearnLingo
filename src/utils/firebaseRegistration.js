import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser } from "../redux/userSlice";
import { toast } from "react-toastify";
import { ref, push } from "firebase/database";
import { database } from "./../firebase.js";

export const registerUser = async (
  data,
  dispatch,
  onRegistrationSuccess,
  reset
) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: data.name });

    const usersRef = ref(database, "users");
    const lowerCaseEmail = user.email.toLowerCase();
    const newUser = {
      name: data.name,
      email: lowerCaseEmail,
      favorites: [],
    };
    const newUserRef = await push(usersRef, newUser);

    dispatch(
      setUser({
        name: data.name,
        email: user.email,
        token: user.accessToken,
        id: user.uid,
        databaseId: newUserRef.key,
      })
    );

    onRegistrationSuccess();
    reset();
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error("Registration error. Try again.");
  }
};
