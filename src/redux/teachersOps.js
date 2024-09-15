import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ref,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
  get,
} from "firebase/database";
import { database } from "./../firebase";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchAll",
  async ({ lastKey = null }, thunkAPI) => {
    try {
      let teachersQuery = query(
        ref(database, "teachers"),
        orderByKey(),
        limitToFirst(4)
      );
      if (lastKey) {
        teachersQuery = query(
          ref(database, "teachers"),
          orderByKey(),
          startAfter(lastKey),
          limitToFirst(4)
        );
      }
      const snapshot = await get(teachersQuery);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const teachers = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        const lastKey = Object.keys(data).pop();
        return { teachers, lastKey };
      } else {
        console.log("No data available");
        return { teachers: [], lastKey: null };
      }
    } catch (e) {
      console.error("Error fetching teachers:", e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
