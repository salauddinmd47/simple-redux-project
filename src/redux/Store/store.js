import { configureStore } from '@reduxjs/toolkit'
import servicesReducers from '../Slice/servicesSlice.js'
export const store = configureStore({
  reducer: {
      services:servicesReducers
  },
})