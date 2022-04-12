import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../global-state/songsSlice'

export default configureStore({
  reducer: {
    artists: counterReducer ,

  },
})