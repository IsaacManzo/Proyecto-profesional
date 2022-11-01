import { configureStore } from "@reduxjs/toolkit";
import houseSlice from "../slices/houseSlice";

const store = configureStore({
    reducer:{
        house: houseSlice
    }
})

export default store