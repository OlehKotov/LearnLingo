import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://learnlingo-5802e-default-rtdb.firebaseio.com/";

export const fetchteachers = createAsyncThunk(
  "advert/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/advert");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);