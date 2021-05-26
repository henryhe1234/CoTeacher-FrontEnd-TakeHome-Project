import users from "../apis/users";
export const fetchUsers = () => async (dispatch) => {
  const response = await users.get("/users");
  dispatch({ type: "FETCH_USERS", payload: response.data });
};
