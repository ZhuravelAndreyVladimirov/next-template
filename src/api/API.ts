import axios from "axios";

/**
 * Экземпляр axios для работы с API.
 *
 * @constant
 * @type {import('axios').AxiosInstance}
 *
 * @description
 * - baseURL: Базовый URL для всех запросов. Можно переопределить через переменную окружения NEXT_PUBLIC_API_URL (.env), иначе используется "/api".
 * - timeout: Таймаут для каждого запроса (10 секунд).
 * - withCredentials: Включает передачу cookie для авторизации (если требуется).
 *
 * @example
 * import { API } from './API';
 *
 * async function fetchUser() {
 *   try {
 *     const response = await API.get('/user');
 *     return response.data;
 *   } catch (error) {
 *     // обработка ошибки
 *   }
 * }
 */
export const API: import("axios").AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api", // Можно переопределить через .env
  timeout: 10000, // 10 секунд
  withCredentials: true, // если требуется авторизация через cookie
});

// Здесь можно добавить перехватчики (interceptors) для обработки ошибок/авторизации
// Пример:
// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // обработка ошибок
//     return Promise.reject(error);
//   }
// );
