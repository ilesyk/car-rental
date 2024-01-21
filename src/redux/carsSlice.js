import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchFilteredCars } from "./operations";

const slice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    filter: "",
    filteredCars: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    filterValue(state, action) {
      state.filter = action.payload;
    },
    clearCars(state, action) {
      state.cars = [];
    },
    clearFilteredCars(state, action) {
      state.filteredCars = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const newCars = action.payload.filter((car) => {
          return !state.cars.some((existingCar) => existingCar.id === car.id);
        });
        state.cars = [...state.cars, ...newCars];
      });
    builder
      .addCase(fetchFilteredCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.filteredCars = action.payload;
      });
  },
});

export const carsReducer =  slice.reducer;
export const { filterValue, clearCars, clearFilteredCars } = slice.actions;