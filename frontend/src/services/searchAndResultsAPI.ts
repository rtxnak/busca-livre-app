import axios from 'axios';
import { AxiosError } from 'axios';

const url = "http://localhost:3001/"

export const api = axios.create({
  baseURL: url
});

export const checkSearchAndResultOnDatabase = async (query: string, category: string, webpage: string) => {
  try {
    const body = {
      query,
      category,
      webpage,
    }
    const { data } = await api.post('/search', body);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError
    return axiosError.response?.data;
  }
}

export const saveNewSearchAndResultOnDatabase = async (query: string, category: string, webpage: string, results: []) => {
  try {
    const body = {
      query,
      category,
      webpage,
      results,
    }
    const { data } = await api.post('/', body);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError
    return axiosError.response?.data;
  }
}
