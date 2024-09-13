import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/userSlice";
import { toast } from "react-toastify";

export const registerUser = async (data, dispatch, onRegistrationSuccess, reset) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;

    dispatch(
      setUser({
        name: data.name,
        email: user.email,
        token: user.accessToken,
        id: user.uid,
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