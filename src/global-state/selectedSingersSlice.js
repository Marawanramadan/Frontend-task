import { createSlice } from "@reduxjs/toolkit";

export const selectedArtistsSlice = createSlice({
  name: "selectedArtists",
  initialState: {
      value : []
  },
  reducers: {
    addArtists: (state, action) => {
      state.value = action.payload
    },
  },
});
export const { addArtists } = selectedArtistsSlice.actions

export default selectedArtistsSlice.reducer;
