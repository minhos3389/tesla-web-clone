import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
  ],
};

const carSlice = createSlice({
  name: "car",
  // initialState: initialState,
  initialState,
  reducers: {},
});

// return to state.car.cars
export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
