import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

async function resp() {
  try {
    const casa = await axios.get("http://localhost:3001/api/users/traerAdm");
    console.log("CASA", casa.data);
    return casa.data;
  } catch (err) {
    console.log(err);
  }
}




const initialState = [resp()];


export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducer: {},
});

export default houseSlice.reducer;
