import { createSlice } from "@reduxjs/toolkit";
import { IGetIpLocationState } from "../types/ipLocation";
import { RootState } from "../";

const initialState: IGetIpLocationState = {
  locations: undefined,
};

const ipLocationSlice = createSlice({
  name: "ipLocationSlice",
  initialState,
  reducers: {
    setIpLocationData(state, action) {
      state.locations = action.payload;
    },
  },
});

export const { setIpLocationData } = ipLocationSlice.actions;

export const selectLocations = (state: RootState) => state.ipLocation.locations;

export default ipLocationSlice.reducer;
