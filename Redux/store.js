import { configureStore } from '@reduxjs/toolkit'
import UserSlicer from './Reducer/UserSlicer'

export const store = configureStore({
    reducer: {
      UserDetails:UserSlicer
  },
})