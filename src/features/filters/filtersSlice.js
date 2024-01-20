import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  isSort: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSort: (state, action) => {
      state.isSort = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { setSearchText, setSort } = filtersSlice.actions;
