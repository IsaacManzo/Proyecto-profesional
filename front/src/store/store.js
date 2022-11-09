import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import houseReducer from "./house";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["houseState"]
}

const rootReducers = combineReducers({
    houseState: houseReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  middleware: [thunk],
  reducer: {
    house: persistedReducer,
  },
});

export default store;
