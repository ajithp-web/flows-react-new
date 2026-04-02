// GET ALL FEATURE CARDS
import axios from "axios";

const API_URL = "http://localhost:1337";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET ALL FEATURE CARDS
export async function getFeatureCards() {
  try {
    const response = await api.get("/api/feaure-cards?populate=*");
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching feature cards:", error);
    return [];
  }
}

// GET ALL FEATURE TABS
export async function getFeatureTabs() {
  try {
    const response = await api.get("/api/feature-tabs?populate=*");
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching feature tabs:", error);
    return [];
  }
}
