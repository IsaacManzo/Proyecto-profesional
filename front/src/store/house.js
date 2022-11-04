import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [
//   {
//     titulo:"",
//     descripcion: "",
//     provincia:"",
//     ciudad:"",
//     codigoPostal:null,
//     precio:0,
//     ambientes:0,
//     baños:1,
//     habitaciones:0,
//     cochera:0,
//     metrosCuadrados:0,
//     fotos: [],
//     tipo: "",
//     pisos:0
//   }
// ]

export const house = createAsyncThunk("GET_HOUSE", async () => {
 try {
   const res = await axios.get(`http://localhost:3001/api/users/traerAdm`);
   return res.data;
 } catch (err) {
  console.log(err);
 }
});

const houseReducer = createReducer([], {
  [house.fulfilled]: (state, action) => action.payload,
});

export default houseReducer;
