import { signIn } from "../slices/user";
import { AppDispatch } from "../store";

export const signOutAction = async (dispatch: AppDispatch) => {
  localStorage.removeItem("user");
  dispatch(
    signIn({
      user: null,
      loading: false,
      error: null,
    })
  );
};
