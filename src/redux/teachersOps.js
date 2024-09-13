import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://learnlingo-5802e-default-rtdb.firebaseio.com";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/teachers.json");
      const data = response.data;

      if (data) {
        const fetchedTeachers = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        return fetchedTeachers;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);