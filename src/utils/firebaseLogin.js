import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/userSlice";
import { toast } from "react-toastify";

export const loginUser = async (data, dispatch, onLoginSuccess, reset) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;

    dispatch(
      setUser({
        name: data.name, // убедитесь, что имя действительно передается
        email: user.email,
        token: user.accessToken,
        id: user.uid,
      })
    );
    onLoginSuccess();
    reset();
  } catch (error) {
    toast.error("Login failed. Try again.");
  }
};