import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  sort: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { setSearchText } = filtersSlice.actions;
