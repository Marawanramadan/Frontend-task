import { createSlice } from "@reduxjs/toolkit";

export const selectedSongsSlice = createSlice({
  name: "selectedAlbums",
  initialState: {
      value : []
  },
  reducers: {
    addSongs: (state, action) => {
      state.value = action.payload
    },
  },
});
export const { addSongs } = selectedSongsSlice.actions

export default selectedSongsSlice.reducer;
