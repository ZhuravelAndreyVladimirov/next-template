import axios from 'axios';

/**
 * Экземпляр axios для работы с API.
 *
 * - baseURL: Базовый URL для всех запросов. Можно переопределить через NEXT_PUBLIC_BASE_URL, иначе "/api".
 * - timeout: Таймаут для каждого запроса (10 секунд).
 * - withCredentials: Включает передачу cookie для авторизации (если требуется).
 */
export const API: import('axios').AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || '/api',
  timeout: 10000,
  withCredentials: true,
});

// Простейшие перехватчики: добавляем корреляцию и нормализуем ошибку.
API.interceptors.request.use((config) => {
  // Помогаем трассировать запросы в логах бэкенда.
  config.headers['x-request-id'] = crypto.randomUUID?.() ?? Date.now().toString();
  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    // 401 можно отловить наверху, чтобы, например, сбросить сессию пользователя.
    if (status === 401) {
      console.warn('[api] unauthorized response', error.config?.url);
    }

    // Приводим ошибку к более читаемому виду.
    const normalizedError = new Error(
      error.response?.data?.message ?? error.message ?? 'Unexpected API error occurred',
    );

    return Promise.reject(normalizedError);
  },
);
