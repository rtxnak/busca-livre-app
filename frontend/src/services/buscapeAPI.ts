import axios from 'axios';
import { AxiosError } from 'axios';

const url = process.env.API_LINK || "http://localhost:3001/"

export const api = axios.create({
  baseURL: url
});

export const buscapeGetProductsFromCategoryAndQuery = async (query: string, categoryId: string) => {
  try {
    const body = {
      query,
      categoryId,
    }
    const { data } = await api.post('/buscapeapi', body);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError
    return axiosError.response?.data;
  }
}
