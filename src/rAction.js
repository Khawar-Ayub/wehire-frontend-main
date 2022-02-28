import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  email: "",
  isLoggedIn: false,
};
const recruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    login: (state, rAction) => {
      state.value = rAction.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});
export const { login, logout } = recruiterSlice.actions;
export default recruiterSlice.reducer;