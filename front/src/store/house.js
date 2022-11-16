import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const getHouse = createAsyncThunk("HOUSE", () => {
  return axios
    .get("http://localhost:3001/api/users/traerAdm")
    .then((res) => res.data);
});

const HouseReducer = createReducer(initialState, {
  [getHouse.fulfilled]: (state, action) => {
    console.log("ACTION", action);
    state.house = action.payload
  }
});


export default HouseReducer.reducer;
