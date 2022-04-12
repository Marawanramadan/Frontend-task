import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../global-state/songsSlice'
import selectedArtistsSlice from '../global-state/selectedSingersSlice'
export default configureStore({
  reducer: {
    artists: counterReducer,
    selectedArtists : selectedArtistsSlice
  },
})