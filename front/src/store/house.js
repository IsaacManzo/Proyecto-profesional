import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const handleProduct = createSlice({
  name: "house",
  initialState,

  reducers: {
    getHouseData: (state, action) => {
      state.push(action.payload);
    },
    deleteHouse: (state,action) => {
      
    }
  },
});

export const { getHouseData } = handleProduct.actions;
export default handleProduct.reducer;
