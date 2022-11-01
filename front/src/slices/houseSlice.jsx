import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
  axios.get("http://localhost:3001/api/users/traerAdm")
  .then((casas) => {return(casas.data);}),
];

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducer: {},
});

export default houseSlice.reducer;
