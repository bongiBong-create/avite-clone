import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../api/apiAds";
import { Ads } from "../../../models/TypeAds";


export const fetchAds = createAsyncThunk(
  "ads/fetchAds",
  async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)

export const fetchCreateAds = createAsyncThunk(
  "ads/fetchCreateAds",
  async (ads: Ads) => {
    try {
      const response = await axios.post(`${API_URL}`, ads);

      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)

export const fetchUpdateAds = createAsyncThunk(
  "ads/fetchUpdateAds",
  async (ads: Ads) => {
    try {
      const response = await axios.put(`${API_URL}/${ads.id}`, ads);

      return response.data
    } catch (e) {
      console.log(e)
    }
  }
)