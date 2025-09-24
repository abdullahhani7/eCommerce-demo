import type { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `http://localhost:5000/products?cat_prefix=${prefix}`
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

export default actGetProductsByCatPrefix;
