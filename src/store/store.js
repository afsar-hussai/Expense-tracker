import { configureStore,  } from "@reduxjs/toolkit";
import expenseSlice from './expenseSlice'

const store=configureStore({
    reducer: expenseSlice
})
export default store;