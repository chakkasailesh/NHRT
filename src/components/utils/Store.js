import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './Reducer'

const store = configureStore({
  reducer: {
    modal: reducer,
  },
})

export default store
