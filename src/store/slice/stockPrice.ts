import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../";

const initialState: any = {
  stockList: undefined,
};

const stockPriceSlice = createSlice({
  name: "stockPriceSlice",
  initialState,
  reducers: {
    setStockPriceData(state, action) {
      state.stockList = action.payload;
    },
  },
});

export const { setStockPriceData } = stockPriceSlice.actions;

export const selectStock = (state: RootState) => state.stock.stockList;

export default stockPriceSlice.reducer;
