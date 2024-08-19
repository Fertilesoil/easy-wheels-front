import axios from "axios";
import { SuccessDto, UserLoginDto } from '../types/Types';

export const configuration = {
  baseURL: import.meta.env.VITE_BASE_URL_PROD,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
};

export const connection = axios.create(configuration);

const interceptor = axios.create(configuration);

connection.interceptors.request.use(async config => {
  if (config.url !== 'Auth/login') {
    const newToken = await refreshToken();
    config.headers.Authorization = newToken.AccessToken;
  }
  return config;
}, err => Promise.reject(err));

// connection.interceptors.response.use((response) => response, async (error) => {
//   const originalRequest = error.config;

//   if (error.response.status === 401 && !originalRequest._retry) {
//     originalRequest._retry = true;

//     try {
//       const email = useUserStore.getState().email;
//       const token: SuccessDto = await refreshToken(email);
//       axios.defaults.headers.common['Authorization'] = token.AccessToken;
//       originalRequest.headers['Authorization'] = token.AccessToken;
//       console.log("Interceptador acionado");
//       return axios(originalRequest);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// });

// connection.interceptors.request.use(async (config) => {
//   try {
//     const email = useUserStore.getState().email;
//     const token: SuccessDto = await refreshToken(email);
//     config.headers.Authorization = token.AccessToken;

//   } catch (error) {
//     console.log(`Erro: ${error}`);
//   }
//   return config;
// })

// Auth methods

const login = async (data: UserLoginDto) => {
  return (await connection.post('Auth/login', data)).data
}

const logout = async (email: object) => {
  return (await connection.post('Auth/logout', email)).data
}

const refreshToken = async () => {
  return (await interceptor.get<SuccessDto>('Auth/refresh-token')).data
}

// Lessor methods

const allLessors = async () => {
  return (await connection.get('Lessor')).data
}

// Lessee methods

const allLessees = async () => {
  return (await connection.get('Lessee')).data
}

// Interceptor

// connection.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // Chame o endpoint /refresh-token para obter um novo token
//         const response = await refreshToken();

//         // Extrair o novo AccessToken do response
//         const newAccessToken = response.AccessToken;

//         // Atualize o cabeçalho Authorization com o novo token
//         connection.defaults.headers.common['Authorization'] = newAccessToken;
//         originalRequest.headers['Authorization'] = newAccessToken;

//         console.log("Interceptador acionado");

//         // Refaz a requisição original com o novo token
//         return connection(originalRequest);
//       } catch (error) {
//         // Se houver erro ao tentar atualizar o token, apenas logue o erro e rejeite a promessa
//         console.error('Erro ao atualizar o token:', error);
//         return Promise.reject(error);
//       }
//     }
//     // Se o erro não for 401 ou a tentativa já foi feita, rejeite o erro normalmente
//     return Promise.reject(error);
//   }
// );

export const Api = {
  login,
  allLessors,
  allLessees,
  logout
  // refreshToken
}