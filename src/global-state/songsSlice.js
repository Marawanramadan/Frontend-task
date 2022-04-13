import { createSlice } from "@reduxjs/toolkit";

export const songsSlice = createSlice({
  name: "songs",
  initialState: [
    {
      name: "Maps",
      price: 10,
      artist : "Maroon5",
      album : "Album 1"
    },
    {
      name: "One More Night",
      price: 15,
      artist : "Maroon5",
      album : "Album 1"
    },
    {
      name: "Cold",
      price: 20,
      artist : "Maroon5",
      album : "Album 2"
    },
    {
      name: "Payphone",
      price: 15,
      artist : "Maroon5",
      album : "Album 2"
    },
    {
      name: "Rock you",
      price: 30,
      artist : "Queen",
      album : "Album 3"
    },
    {
      name: "Bohemian Rhapsody ",
      price: 100,
      artist : "Queen",
      album : "Album 3"
    },
    {
      name: "Another one bites the dust",
      price: 50,
      artist : "Queen",
      album : "Album 4"
    },
    {
      name: "Don't Stop Me Now",
      price: 15,
      artist : "Queen",
      album : "Album 4"
    },
  ],
  reducers: {
   
  },
});

export default songsSlice.reducer;
