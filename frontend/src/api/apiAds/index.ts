import axios from "axios";
import { Ads } from "../../models/TypeAds";

export const API_URL = "http://localhost:3000/items";

export const getAds = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data
}

export const createdAds = async (ads: Ads) => {
  const response = await axios.post(`${API_URL}`, ads);
  return response.data
}

export const updateAds = async (id: number, ads: Ads) => {
  const response = await axios.put(`${API_URL}/${id}`, ads);
  return response.data
}