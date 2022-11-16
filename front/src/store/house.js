import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {houses: {}}

export const getHouse = createAsyncThunk("HOUSE", () => {
  return axios
    .get("http://localhost:3001/api/users/traerAdm")
    .then((res) => res.data);
});

const HouseReducer = createReducer(initialState, {
  [getHouse.fulfilled]: (state, action) => {
    console.log("INITIALSTATE",initialState)
    state.houses = action.payload;
  },
});

export default HouseReducer;
