import { users } from "../../database/users";
import { signIn } from "../slices/user";
import { AppDispatch } from "../store";

export const signInAction = async (
  email: string,
  password: string,
  dispatch: AppDispatch
) => {
  try {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) throw new Error("Login lub hasło jest nieprawidłowe!");
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(
      signIn({
        user,
        loading: false,
        error: null,
      })
    );
  } catch (error) {
    dispatch(
      signIn({
        user: null,
        loading: false,
        error: "Błąd logowania",
      })
    );
  }
};
