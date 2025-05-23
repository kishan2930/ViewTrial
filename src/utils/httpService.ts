import axios from 'axios';

// Set your base URL (adjust based on your config system)
const API_BASE_URL = 'https://view.com.au'; // Replace with actual

const defaultHeaders = {
  'User-Agent': 'avesta-ua',
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const httpService = {
  get: async <T>(
    endpoint: string,
    headers?: Record<string, string>,
  ): Promise<T> => {
    const response = await axios.get<T>(`${API_BASE_URL}${endpoint}`, {
      headers: {...defaultHeaders, ...headers},
    });
    return response.data;
  },

  post: async <T, D = unknown>(
    endpoint: string,
    data: D,
    headers?: Record<string, string>,
  ): Promise<T> => {
    const response = await axios.post<T>(`${API_BASE_URL}${endpoint}`, data, {
      headers: {...defaultHeaders, ...headers},
    });
    return response.data;
  },

  put: async <T, D = unknown>(
    endpoint: string,
    data: D,
    headers?: Record<string, string>,
  ): Promise<T> => {
    const response = await axios.put<T>(`${API_BASE_URL}${endpoint}`, data, {
      headers: {...defaultHeaders, ...headers},
    });
    return response.data;
  },

  patch: async <T, D = unknown>(
    endpoint: string,
    data: D,
    headers?: Record<string, string>,
  ): Promise<T> => {
    const response = await axios.patch<T>(`${API_BASE_URL}${endpoint}`, data, {
      headers: {...defaultHeaders, ...headers},
    });
    return response.data;
  },

  delete: async <T>(
    endpoint: string,
    headers?: Record<string, string>,
  ): Promise<T> => {
    const response = await axios.delete<T>(`${API_BASE_URL}${endpoint}`, {
      headers: {...defaultHeaders, ...headers},
    });
    return response.data;
  },
};

export default httpService;
