import { createSlice } from "@reduxjs/toolkit";

export const selectedAlbumsSlice = createSlice({
  name: "selectedAlbums",
  initialState: {
      value : []
  },
  reducers: {
    addAlbums: (state, action) => {
      state.value = action.payload
    },
  },
});
export const { addAlbums } = selectedAlbumsSlice.actions

export default selectedAlbumsSlice.reducer;
