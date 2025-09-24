import type { TCategory } from "@customTypes/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:5000/categories"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.message || error?.response?.data.mwssage);
      } else {
        return rejectWithValue("An unexpectied error");
      }
    }
  }
);

export default actGetCategories;
