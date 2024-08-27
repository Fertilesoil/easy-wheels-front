import axios from "axios";
import type { TokenDto, UserLoginDto } from '@/types/Types';
import { Lessee } from "@/models/Lessee";
import { Lessor } from "@/models/Lessor";

export const configuration = {
  baseURL: import.meta.env.VITE_BASE_URL_PROD,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
};

export const connection = axios.create(configuration);

const interceptor = axios.create(configuration);

// Auth methods

const login = async (data: UserLoginDto) => {
  return (await connection.post('Auth/login', data)).data
}

const logout = async (email: object) => {
  return (await connection.post('Auth/logout', email)).data
}

const refreshTokenCall = async (refreshToken: object) => {
  return (await interceptor.post<TokenDto>('Auth/refresh-token', refreshToken)).data
}

const refreshToken = async (refreshToken: object) => {
  return (await interceptor.post<TokenDto>('Auth/refresh-token', refreshToken)).data
}

// Lessor methods

const allLessors = async () => {
  return (await connection.get<Partial<Lessor>[]>('Lessor')).data
}

const individualLessor = async (email: string) => {
  return (await connection.post<Lessor>('Lessor/email', email)).data
}

// Lessee methods

const allLessees = async () => {
  return (await connection.get('Lessee')).data
}

const individualLessee = async (email: string) => {
  return (await connection.post<Lessee>('Lessee/email', email)).data
}

// Interceptor

connection.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = JSON.parse(localStorage.getItem("refresh_token")!);
        const data = await refreshTokenCall({ Token: refreshToken.Token.split(" ")[1], Email: refreshToken.Email });

        const newAccessToken = data.Token;

        connection.defaults.headers.common.Authorization = newAccessToken;
        originalRequest.headers['Authorization'] = newAccessToken;

        return connection(originalRequest);
      } catch (error) {
        console.error('Erro ao atualizar o token:', error);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const Api = {
  login,
  allLessors,
  allLessees,
  logout,
  refreshToken,
  individualLessor,
  individualLessee
}