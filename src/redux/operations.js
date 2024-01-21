import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://65a6c7c274cf4207b4f0caeb.mockapi.io/";


export const fetchCars = createAsyncThunk("cars", async (page = 1, thunkAPI) => {
  try {
    const controller = new AbortController();
    thunkAPI.signal.addEventListener("abort", () => controller.abort());
    const response = await axios.get(`/cars?page=${page}&limit=12`, {
      signal: controller.signal,
    });
    return response.data;
  } catch (error) {
    if (error.code === 'ERR_CANCELED') {
      return;
    }
    toast.error('Something was wrong :(')
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const fetchFilteredCars = createAsyncThunk(
  "filter",
  async ( make , thunkAPI) => {
    try {
      const controller = new AbortController();
      thunkAPI.signal.addEventListener("abort", () => controller.abort());
      const response = await axios.get(`/cars`, {
        params: { make},
        signal: controller.signal,
      });
      return response.data;
    } catch (error) {
      if (error.code === "ERR_CANCELED") {
        return;
      }
      toast.error("Something was wrong :(");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);