import { configureStore } from '@reduxjs/toolkit'
import ContactReducer from '../slice/ContactSlice'

export const Store = configureStore({
  reducer: {
    contact: ContactReducer,
  },
})