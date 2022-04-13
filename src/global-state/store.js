import { configureStore } from '@reduxjs/toolkit'
import songsSlice  from '../global-state/songsSlice'
import selectedArtistsSlice from '../global-state/selectedSingersSlice'
import selectedAlbumsSlice from './selectedAlbumsSlice'
import selectedSongsSlice from './selectedSongsSlice'
export default configureStore({
  reducer: {
    songs: songsSlice,
    selectedArtists : selectedArtistsSlice,
    selectedAlbums : selectedAlbumsSlice,
    selectedSongs : selectedSongsSlice
  },
})