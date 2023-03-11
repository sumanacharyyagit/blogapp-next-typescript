import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

// Categories
export const fetchCategories = async () => await api.get("/api/categories");

export const fetchArticles = async (queryString: string) =>
  await api.get(`/api/articles?${queryString}`);

export const fetchArticleBySlug = async (queryStr: string) =>
  await api.get(`/api/articles?${queryStr}`);
