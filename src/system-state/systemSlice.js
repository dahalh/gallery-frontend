import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showUserSidebar: false,
};

const systemSlice = createSlice({
  name: "systemSlice",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showUserSidebar = !state.showUserSidebar;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { toggleSidebar } = actions;
export default reducer;
