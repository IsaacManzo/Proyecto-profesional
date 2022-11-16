import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import houseReducer from "./house";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    house: houseReducer,
  },
});



export default store;