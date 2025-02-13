import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Ads } from "../../../models/TypeAds";
import { fetchAds, fetchCreateAds, fetchUpdateAds } from "./ActionAds";

interface IState {
  ads: Ads[];
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  ads: [],
  isLoading: false,
  error: "",
}

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAds.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(fetchAds.fulfilled, (state, action: PayloadAction<Ads[]>) => {
      state.isLoading = false;
      state.ads = action.payload;
    })
    builder.addCase(fetchAds.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
    })
    builder.addCase(fetchCreateAds.fulfilled, (state, action: PayloadAction<Ads>) => {
      state.ads.push(action.payload);
    })
    builder.addCase(fetchCreateAds.rejected, (state, action) => {
      state.error = action.payload as string;
    })
    builder.addCase(fetchUpdateAds.fulfilled, (state, action: PayloadAction<Ads>) => {
      const existingItem = state.ads.findIndex((ads) => ads.id === action.payload.id);
      if (existingItem !== -1) {
        state.ads[existingItem] = action.payload;
      }
    })
  }
})

export const adsReducer = adsSlice.reducer;